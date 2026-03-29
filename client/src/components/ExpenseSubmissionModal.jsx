import React, { useState } from 'react';
import CurrencyAmountInput from './CurrencyAmountInput';
import OCRReceiptScanner from './OCRReceiptScanner';
import { createExpense, submitExpense, uploadReceipt } from '../services/expenseApi';

const ExpenseSubmissionModal = ({ onClose, onSubmit }) => {
  const [ocrOpen, setOcrOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [receiptFile, setReceiptFile] = useState(null);
  const [receiptUrl, setReceiptUrl] = useState(null);

  const [formData, setFormData] = useState({
    description: '',
    category: '',
    date: '',
    paidBy: 'employee',
    remarks: '',
  });

  // CurrencyAmountInput manages its own amount + currency as controlled state
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('INR');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  /**
   * OCR extraction callback — auto-fills the form with extracted data.
   */
  const handleOcrExtracted = (data) => {
    if (data.amount != null) setAmount(String(data.amount));
    if (data.currency) setCurrency(data.currency);
    if (data.vendor) setFormData(prev => ({ ...prev, description: data.vendor }));
    if (data.date) setFormData(prev => ({ ...prev, date: data.date }));
    if (data.category) setFormData(prev => ({ ...prev, category: data.category }));
    if (data.file) setReceiptFile(data.file);
    setOcrOpen(false);
  };

  const handleSubmit = async (e, isDraft = false) => {
    if (e) e.preventDefault();
    setSubmitting(true);
    try {
      // Upload receipt to storage if we have one
      let finalReceiptUrl = receiptUrl;
      if (receiptFile && !finalReceiptUrl) {
        try {
          const uploadResult = await uploadReceipt(receiptFile);
          finalReceiptUrl = uploadResult.url;
          setReceiptUrl(finalReceiptUrl);
        } catch (uploadErr) {
          console.warn('Receipt upload failed (continuing without):', uploadErr.message);
        }
      }

      // Map frontend field names → backend field names
      const payload = {
        original_amount: Number(amount),
        original_currency: currency,
        category: formData.category || 'Misc',
        description: formData.description || 'Untitled Expense',
        expense_date: formData.date || new Date().toISOString().slice(0, 10),
        paid_by: formData.paidBy || 'employee',
        remarks: formData.remarks || null,
        receipt_url: finalReceiptUrl || null,
      };

      const created = await createExpense(payload);

      // If not a draft, also submit it (transitions DRAFT → WAITING_APPROVAL)
      if (!isDraft && created?.id) {
        await submitExpense(created.id);
      }

      // Notify parent to refresh the expense list
      if (onSubmit) onSubmit(created);
    } catch (err) {
      console.error('Expense creation failed:', err);
      alert(err.response?.data?.message || err.message || 'Failed to create expense');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* ── OCR Overlay ──────────────────────────────────────────────────── */}
      {ocrOpen && (
        <div className="fixed inset-0 z-[60] bg-[#1e1b1d]/60 backdrop-blur-sm flex items-center justify-center p-6">
          <div className="bg-white w-full max-w-5xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            <header className="px-8 py-5 flex justify-between items-center border-b border-slate-100">
              <h2 className="text-lg font-bold text-[#714B67]">Scan Receipt (OCR)</h2>
              <button
                type="button"
                onClick={() => setOcrOpen(false)}
                className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-500"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </header>
            <div className="p-8 overflow-y-auto flex-1">
              <OCRReceiptScanner
                onExtracted={handleOcrExtracted}
                onClose={() => setOcrOpen(false)}
              />
            </div>
          </div>
        </div>
      )}

      {/* ── Main Modal ───────────────────────────────────────────────────── */}
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1e1b1d]/40 backdrop-blur-sm p-4">
        <div className="bg-white w-full max-w-2xl rounded-xl shadow-[0_12px_32px_rgba(113,75,103,0.12)] overflow-hidden flex flex-col max-h-[92vh]">

          {/* Header */}
          <header className="px-8 py-6 flex justify-between items-center border-b border-[#d1c3ca]/20 bg-white sticky top-0 z-10">
            <h1 className="text-xl font-bold tracking-tight text-[#714B67]">New Expense Claim</h1>
            <button type="button" onClick={onClose} className="p-2 hover:bg-[#efe6e9] rounded-full transition-colors text-[#80747a]">
              <span className="material-symbols-outlined">close</span>
            </button>
          </header>

          {/* Scrollable Content */}
          <div className="p-8 overflow-y-auto space-y-6">

            {/* Receipt Upload + OCR trigger */}
            <section>
              <div className="border-2 border-dashed border-[#d1c3ca] bg-[#faf1f4] rounded-xl p-8 flex flex-col items-center justify-center group hover:bg-[#efe6e9] transition-all duration-300">
                {receiptFile ? (
                  <>
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 text-green-600">
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    </div>
                    <p className="text-[#4e444a] font-medium mb-1 text-center">Receipt attached: {receiptFile.name}</p>
                    <p className="text-xs text-[#80747a] mb-4">{(receiptFile.size / 1024).toFixed(1)} KB</p>
                    <button
                      type="button"
                      onClick={() => { setReceiptFile(null); setReceiptUrl(null); }}
                      className="text-red-500 text-xs font-bold hover:underline"
                    >
                      Remove
                    </button>
                  </>
                ) : (
                  <>
                    <div className="w-12 h-12 bg-[#e9b8d9] rounded-full flex items-center justify-center mb-4 text-[#714B67] group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>photo_camera</span>
                    </div>
                    <p className="text-[#4e444a] font-medium mb-1 text-center">Drag & drop receipt or click to browse</p>
                    <p className="text-xs text-[#80747a] mb-6">Supports JPG, PNG, WebP (Max 10MB)</p>
                    <button
                      type="button"
                      onClick={() => setOcrOpen(true)}
                      className="flex items-center gap-2 px-6 py-2.5 border-2 border-[#714B67] text-[#714B67] font-bold rounded-lg hover:bg-[#714B67]/5 transition-colors"
                    >
                      <span className="material-symbols-outlined text-sm">document_scanner</span>
                      Scan Receipt (OCR)
                    </button>
                  </>
                )}
              </div>
            </section>

            <form id="expenseForm" onSubmit={handleSubmit} className="space-y-6">

              {/* Description */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#4e444a] uppercase tracking-wider">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#e9e0e3] border-none rounded-lg p-4 focus:ring-0 focus:bg-white border-b-2 border-transparent focus:border-[#714B67] transition-all placeholder:text-[#80747a]/60"
                  placeholder="What was this expense for?"
                  rows="2"
                />
              </div>

              {/* Category & Date */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#4e444a] uppercase tracking-wider">Category</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#e9e0e3] border-none rounded-lg p-4 focus:ring-0 focus:bg-white border-b-2 border-transparent focus:border-[#714B67] transition-all appearance-none cursor-pointer"
                  >
                    <option disabled value="">Select Category</option>
                    <option value="Travel">Travel</option>
                    <option value="Meals">Meals</option>
                    <option value="Office Supplies">Office Supplies</option>
                    <option value="Software">Software</option>
                    <option value="Misc">Misc</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#4e444a] uppercase tracking-wider">Date</label>
                  <input
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#e9e0e3] border-none rounded-lg p-4 focus:ring-0 focus:bg-white border-b-2 border-transparent focus:border-[#714B67] transition-all font-mono"
                  />
                </div>
              </div>

              {/* Paid By */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#4e444a] uppercase tracking-wider">Paid By</label>
                <div className="grid grid-cols-2 gap-4">
                  {[{ value: 'employee', icon: 'person', label: 'Employee' }, { value: 'company', icon: 'corporate_fare', label: 'Company' }].map(opt => (
                    <label
                      key={opt.value}
                      className={`flex items-center justify-center gap-3 p-4 rounded-lg cursor-pointer border-2 transition-colors ${
                        formData.paidBy === opt.value
                          ? 'border-[#714B67] bg-white'
                          : 'border-transparent bg-[#e9e0e3] hover:bg-[#efe6e9]'
                      }`}
                    >
                      <input
                        type="radio"
                        name="paidBy"
                        value={opt.value}
                        checked={formData.paidBy === opt.value}
                        onChange={handleChange}
                        className="hidden"
                      />
                      <span className="material-symbols-outlined text-[#714B67]">{opt.icon}</span>
                      <span className="font-medium text-[#1e1b1d]">{opt.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Amount — CurrencyAmountInput */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#4e444a] uppercase tracking-wider">Amount</label>
                <CurrencyAmountInput
                  amount={amount}
                  setAmount={setAmount}
                  currency={currency}
                  setCurrency={setCurrency}
                />
              </div>

              {/* Remarks */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#4e444a] uppercase tracking-wider">
                  Remarks <span className="text-[#80747a] font-normal lowercase">(optional)</span>
                </label>
                <textarea
                  name="remarks"
                  value={formData.remarks}
                  onChange={handleChange}
                  className="w-full bg-[#e9e0e3] border-none rounded-lg p-4 focus:ring-0 focus:bg-white border-b-2 border-transparent focus:border-[#714B67] transition-all placeholder:text-[#80747a]/60"
                  placeholder="Additional details, project codes, or compliance notes..."
                  rows="3"
                />
              </div>

            </form>
          </div>

          {/* Footer */}
          <footer className="p-8 border-t border-[#d1c3ca]/10 bg-[#faf1f4]/50 flex flex-wrap items-center justify-end gap-3 rounded-b-xl">
            <button type="button" onClick={onClose} className="px-6 py-2.5 text-[#714B67] font-bold hover:bg-[#714B67]/5 rounded-lg transition-colors">
              Cancel
            </button>
            <button
              type="button"
              onClick={(e) => handleSubmit(e, true)}
              disabled={submitting}
              className="px-6 py-2.5 border-2 border-[#d1c3ca] text-[#4e444a] font-bold rounded-lg hover:bg-[#efe6e9] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting ? 'Saving…' : 'Save as Draft'}
            </button>
            <button
              type="submit"
              onClick={(e) => handleSubmit(e, false)}
              form="expenseForm"
              disabled={submitting}
              className="px-8 py-3 bg-[#714B67] text-white font-bold rounded-lg shadow-[0_4px_12px_rgba(113,75,103,0.2)] hover:brightness-110 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting ? 'Submitting…' : 'Submit for Approval'}
            </button>
          </footer>
        </div>
      </div>
    </>
  );
};

export default ExpenseSubmissionModal;
