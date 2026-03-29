import { db } from '../db/index.js';
import { convertAmount } from './currencyService.js';
import { normalizeCurrency } from '../utils/currency.js';

const STATUS = {
  DRAFT: 'DRAFT',
  SUBMITTED: 'SUBMITTED',
  WAITING_APPROVAL: 'WAITING_APPROVAL',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED',
};

const DIRECT_TRANSITIONS = {
  [STATUS.DRAFT]: new Set([STATUS.SUBMITTED]),
  [STATUS.SUBMITTED]: new Set([STATUS.WAITING_APPROVAL]),
  [STATUS.WAITING_APPROVAL]: new Set([STATUS.APPROVED, STATUS.REJECTED]),
  [STATUS.REJECTED]: new Set([STATUS.DRAFT]),
  [STATUS.APPROVED]: new Set(),
};

function ensureValidStatus(status) {
  if (!Object.values(STATUS).includes(status)) {
    throw createValidationError(`Invalid status: ${status}`);
  }
}

function ensureTransitionAllowed(fromStatus, toStatus) {
  ensureValidStatus(fromStatus);
  ensureValidStatus(toStatus);
  const allowed = DIRECT_TRANSITIONS[fromStatus] || new Set();
  if (!allowed.has(toStatus)) {
    throw createValidationError(`Invalid transition: ${fromStatus} -> ${toStatus}`);
  }
}

function createValidationError(message) {
  const error = new Error(message);
  error.statusCode = 400;
  return error;
}

function createNotFoundError(id) {
  const error = new Error(`Expense ${id} not found`);
  error.statusCode = 404;
  return error;
}

function formatExpenseResponse(expense) {
  if (!expense) return null;
  return {
    id: expense.id,
    submitted_by: expense.submitted_by,
    company_id: expense.company_id,
    approval_rule_id: expense.approval_rule_id,
    original_amount: Number(expense.original_amount),
    original_currency: expense.original_currency,
    base_amount: Number(expense.base_amount),
    exchange_rate_at_submission: Number(expense.exchange_rate_at_submission),
    category: expense.category,
    description: expense.description,
    expense_date: expense.expense_date,
    paid_by: expense.paid_by,
    receipt_url: expense.receipt_url,
    remarks: expense.remarks || null,
    status: expense.status,
    current_approval_step: Number(expense.current_approval_step || 0),
    created_at: expense.created_at,
    approval_steps: expense.approval_steps || [],
  };
}

// ── CRUD Operations ──────────────────────────────────────────────────────────

async function listExpenses(user) {
  const expenses = await db.expense.findMany({
    where: { company_id: user.company_id },
    orderBy: { created_at: 'desc' },
    include: { approval_steps: true },
  });
  return expenses.map(formatExpenseResponse);
}

async function getExpenseById(id, user) {
  const expense = await db.expense.findUnique({
    where: { id },
    include: { approval_steps: true },
  });
  if (!expense) throw createNotFoundError(id);
  return formatExpenseResponse(expense);
}

async function createExpense(payload, user) {
  const originalAmount = Number(payload.original_amount);
  if (!Number.isFinite(originalAmount) || originalAmount < 0) {
    throw createValidationError('original_amount must be a non-negative number');
  }

  const originalCurrency = normalizeCurrency(payload.original_currency);
  const targetCurrency = normalizeCurrency(payload.reimbursement_currency || 'INR');

  const conversion = await convertAmount({
    amount: originalAmount,
    from: originalCurrency,
    to: targetCurrency,
  });

  // Find a default approval rule for this company
  let approvalRuleId = payload.approval_rule_id;
  if (!approvalRuleId) {
    const defaultRule = await db.approvalRule.findFirst({
      where: { company_id: user.company_id, active: true },
    });
    if (defaultRule) {
      approvalRuleId = defaultRule.id;
    } else {
      // Auto-create a default rule if none exists
      const newRule = await db.approvalRule.create({
        data: {
          company_id: user.company_id,
          description: 'Default Approval Rule',
          is_manager_approver: true,
          is_sequential: true,
          rule_type: 'SEQUENTIAL',
          active: true,
        },
      });
      approvalRuleId = newRule.id;
    }
  }

  const expense = await db.expense.create({
    data: {
      submitted_by: user.id,
      company_id: user.company_id,
      approval_rule_id: approvalRuleId,
      original_amount: originalAmount,
      original_currency: originalCurrency,
      base_amount: conversion.convertedAmount,
      exchange_rate_at_submission: conversion.rate,
      category: String(payload.category || 'Misc'),
      description: String(payload.description || 'Untitled Expense'),
      expense_date: payload.expense_date
        ? new Date(payload.expense_date)
        : new Date(),
      paid_by: String(payload.paid_by || user.id),
      receipt_url: payload.receipt_url || null,
      remarks: payload.remarks ? String(payload.remarks) : null,
      status: STATUS.DRAFT,
      current_approval_step: 0,
    },
    include: { approval_steps: true },
  });

  return formatExpenseResponse(expense);
}

async function updateExpense(id, payload, user) {
  const current = await getExpenseById(id, user);

  const updateFields = {};
  if (payload.status && payload.status !== current.status) {
    ensureTransitionAllowed(current.status, payload.status);
    updateFields.status = payload.status;
  }

  const textFields = ['description', 'category', 'paid_by', 'approval_rule_id', 'remarks', 'receipt_url'];
  for (const field of textFields) {
    if (payload[field] !== undefined) {
      updateFields[field] = payload[field];
    }
  }

  if (payload.expense_date !== undefined) {
    updateFields.expense_date = new Date(payload.expense_date);
  }

  const amountProvided = payload.original_amount !== undefined;
  const currencyProvided = payload.original_currency !== undefined;

  if (amountProvided || currencyProvided || payload.reimbursement_currency) {
    const amt = amountProvided ? Number(payload.original_amount) : current.original_amount;
    const cur = currencyProvided ? normalizeCurrency(payload.original_currency) : current.original_currency;

    const conversion = await convertAmount({
      amount: amt,
      from: cur,
      to: normalizeCurrency(payload.reimbursement_currency || 'INR'),
    });

    updateFields.original_amount = amt;
    updateFields.original_currency = cur;
    updateFields.base_amount = conversion.convertedAmount;
    updateFields.exchange_rate_at_submission = conversion.rate;
  }

  if (Object.keys(updateFields).length === 0) return current;

  const updated = await db.expense.update({
    where: { id },
    data: updateFields,
    include: { approval_steps: true },
  });

  return formatExpenseResponse(updated);
}

async function submitExpense(id, user) {
  const expense = await getExpenseById(id, user);
  ensureTransitionAllowed(expense.status, STATUS.SUBMITTED);

  // Move directly to WAITING_APPROVAL via transaction
  const result = await db.$transaction(async (tx) => {
    const updated = await tx.expense.update({
      where: { id },
      data: { status: STATUS.WAITING_APPROVAL },
      include: { approval_steps: true },
    });

    // Create an approval step for the user's manager (if exists) or any admin
    let approverId = null;
    const submitter = await tx.user.findUnique({ where: { id: user.id } });
    if (submitter?.manager_id) {
      approverId = submitter.manager_id;
    } else {
      // Find any admin in the same company
      const admin = await tx.user.findFirst({
        where: {
          company_id: user.company_id,
          role: 'ADMIN',
          id: { not: user.id },
        },
      });
      approverId = admin?.id || user.id;
    }

    await tx.approvalStep.create({
      data: {
        expense_id: id,
        approver_id: approverId,
        step_order: 1,
        status: 'PENDING',
      },
    });

    return updated;
  });

  return formatExpenseResponse(result);
}

async function approveExpense(id, approverIdInput, user) {
  const expense = await getExpenseById(id, user);
  ensureTransitionAllowed(expense.status, STATUS.APPROVED);

  const result = await db.$transaction(async (tx) => {
    const updated = await tx.expense.update({
      where: { id },
      data: { status: STATUS.APPROVED },
      include: { approval_steps: true },
    });

    await tx.approvalStep.updateMany({
      where: { expense_id: id, status: 'PENDING' },
      data: { status: 'APPROVED', decided_at: new Date() },
    });

    return updated;
  });

  return formatExpenseResponse(result);
}

async function rejectExpense(id, rejectionReason, approverIdInput, user) {
  const expense = await getExpenseById(id, user);
  ensureTransitionAllowed(expense.status, STATUS.REJECTED);

  const result = await db.$transaction(async (tx) => {
    const updated = await tx.expense.update({
      where: { id },
      data: { status: STATUS.REJECTED },
      include: { approval_steps: true },
    });

    await tx.approvalStep.updateMany({
      where: { expense_id: id, status: 'PENDING' },
      data: {
        status: 'REJECTED',
        comments: rejectionReason || null,
        decided_at: new Date(),
      },
    });

    return updated;
  });

  return formatExpenseResponse(result);
}

async function resubmitExpense(id, user) {
  const expense = await getExpenseById(id, user);
  ensureTransitionAllowed(expense.status, STATUS.DRAFT);

  const updated = await db.expense.update({
    where: { id },
    data: { status: STATUS.DRAFT, current_approval_step: 0 },
    include: { approval_steps: true },
  });

  return formatExpenseResponse(updated);
}

export default {
  STATUS,
  listExpenses,
  getExpenseById,
  createExpense,
  updateExpense,
  submitExpense,
  approveExpense,
  rejectExpense,
  resubmitExpense,
};
