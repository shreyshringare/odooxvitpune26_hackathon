/**
 * XpenseFlow — Expense Service Layer
 * Mapped 1:1 to the real Express backend at /api/expenses
 *
 * Backend response shape: { success: boolean, data: ... }
 */
import api from './api';

/** GET /api/expenses — list all expenses for the company */
export const listExpenses = async () => {
  const { data: res } = await api.get('/expenses');
  return res.data; // Array of expense objects
};

/** GET /api/expenses/:id */
export const getExpenseById = async (id) => {
  const { data: res } = await api.get(`/expenses/${id}`);
  return res.data;
};

/** POST /api/expenses — create a new expense (defaults to DRAFT status)
 *  @param {Object} payload — {
 *    original_amount, original_currency, category, description,
 *    expense_date, paid_by, remarks, reimbursement_currency?, receipt_url?
 *  }
 */
export const createExpense = async (payload) => {
  const { data: res } = await api.post('/expenses', payload);
  return res.data;
};

/** PUT /api/expenses/:id — update an existing expense */
export const updateExpense = async (id, payload) => {
  const { data: res } = await api.put(`/expenses/${id}`, payload);
  return res.data;
};

/** POST /api/expenses/:id/submit — transitions DRAFT → WAITING_APPROVAL */
export const submitExpense = async (id) => {
  const { data: res } = await api.post(`/expenses/${id}/submit`);
  return res.data;
};

/** POST /api/expenses/:id/approve */
export const approveExpense = async (id, approverId) => {
  const { data: res } = await api.post(`/expenses/${id}/approve`, { approver_id: approverId });
  return res.data;
};

/** POST /api/expenses/:id/reject */
export const rejectExpense = async (id, reason, approverId) => {
  const { data: res } = await api.post(`/expenses/${id}/reject`, { reason, approver_id: approverId });
  return res.data;
};

/** POST /api/expenses/:id/resubmit — transitions REJECTED → DRAFT */
export const resubmitExpense = async (id) => {
  const { data: res } = await api.post(`/expenses/${id}/resubmit`);
  return res.data;
};

/**
 * POST /api/expenses/ocr — Upload a receipt image for OCR extraction.
 * @param {File} file — the image file from <input type="file">
 * @returns {Object} { amount, vendor, currency, date, category, raw_text }
 */
export const ocrScanReceipt = async (file) => {
  const formData = new FormData();
  formData.append('receipt', file);

  const { data: res } = await api.post('/expenses/ocr', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
    timeout: 60000, // OCR can take a while
  });
  return res.data;
};

/**
 * POST /api/expenses/upload-receipt — Upload a receipt to Supabase Storage.
 * @param {File} file — the image file
 * @returns {Object} { path, url }
 */
export const uploadReceipt = async (file) => {
  const formData = new FormData();
  formData.append('receipt', file);

  const { data: res } = await api.post('/expenses/upload-receipt', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return res.data;
};
