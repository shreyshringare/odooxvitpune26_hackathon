import expenseService from '../services/expenseService.js';
import { parseReceiptBuffer } from '../utils/ocr.js';
import { supabase } from '../lib/auth.js';

function handleError(res, error) {
  const statusCode = Number(error.statusCode) || 500;
  return res.status(statusCode).json({
    success: false,
    message: error.message || 'Internal server error',
  });
}

// ── Expense CRUD ─────────────────────────────────────────────────────────────

async function getExpenses(req, res) {
  try {
    const expenses = await expenseService.listExpenses(req.user);
    return res.status(200).json({ success: true, data: expenses });
  } catch (error) {
    return handleError(res, error);
  }
}

async function createExpense(req, res) {
  try {
    const payload = { ...(req.body || {}) };
    const expense = await expenseService.createExpense(payload, req.user);
    return res.status(201).json({ success: true, data: expense });
  } catch (error) {
    return handleError(res, error);
  }
}

async function getExpenseById(req, res) {
  try {
    const expense = await expenseService.getExpenseById(req.params.id, req.user);
    return res.status(200).json({ success: true, data: expense });
  } catch (error) {
    return handleError(res, error);
  }
}

async function updateExpense(req, res) {
  try {
    const expense = await expenseService.updateExpense(req.params.id, req.body || {}, req.user);
    return res.status(200).json({ success: true, data: expense });
  } catch (error) {
    return handleError(res, error);
  }
}

async function submitExpense(req, res) {
  try {
    const expense = await expenseService.submitExpense(req.params.id, req.user);
    return res.status(200).json({ success: true, data: expense });
  } catch (error) {
    return handleError(res, error);
  }
}

async function approveExpense(req, res) {
  try {
    const expense = await expenseService.approveExpense(
      req.params.id,
      req.body && req.body.approver_id,
      req.user
    );
    return res.status(200).json({ success: true, data: expense });
  } catch (error) {
    return handleError(res, error);
  }
}

async function rejectExpense(req, res) {
  try {
    const expense = await expenseService.rejectExpense(
      req.params.id,
      req.body && req.body.reason,
      req.body && req.body.approver_id,
      req.user
    );
    return res.status(200).json({ success: true, data: expense });
  } catch (error) {
    return handleError(res, error);
  }
}

async function resubmitExpense(req, res) {
  try {
    const expense = await expenseService.resubmitExpense(req.params.id, req.user);
    return res.status(200).json({ success: true, data: expense });
  } catch (error) {
    return handleError(res, error);
  }
}

// ── OCR Scan ─────────────────────────────────────────────────────────────────

async function ocrScan(req, res) {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'No file uploaded. Send a file as "receipt" field.' });
    }

    const result = await parseReceiptBuffer(req.file.buffer, req.file.mimetype);

    if (!result) {
      return res.status(422).json({
        success: false,
        message: 'OCR could not extract data from this image. Try a clearer photo.',
      });
    }

    return res.status(200).json({ success: true, data: result });
  } catch (error) {
    console.error('[OCR] Endpoint error:', error);
    return handleError(res, error);
  }
}

// ── Receipt Upload to Supabase Storage ───────────────────────────────────────

async function uploadReceipt(req, res) {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'No file uploaded.' });
    }

    const fileName = `${req.user.company_id}/${Date.now()}_${req.file.originalname}`;

    const { data, error } = await supabase.storage
      .from('receipts')
      .upload(fileName, req.file.buffer, {
        contentType: req.file.mimetype,
        upsert: false,
      });

    if (error) {
      // If bucket doesn't exist, return a helpful message
      console.error('[Upload] Supabase Storage error:', error.message);
      return res.status(500).json({
        success: false,
        message: `Storage upload failed: ${error.message}. Make sure a "receipts" bucket exists in Supabase Storage.`,
      });
    }

    // Get the public URL
    const { data: urlData } = supabase.storage
      .from('receipts')
      .getPublicUrl(fileName);

    return res.status(200).json({
      success: true,
      data: {
        path: data.path,
        url: urlData.publicUrl,
      },
    });
  } catch (error) {
    console.error('[Upload] Error:', error);
    return handleError(res, error);
  }
}

export default {
  getExpenses,
  createExpense,
  getExpenseById,
  updateExpense,
  submitExpense,
  approveExpense,
  rejectExpense,
  resubmitExpense,
  ocrScan,
  uploadReceipt,
};
