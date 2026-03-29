import React, { useState, useRef } from 'react';
import { ocrScanReceipt } from '../services/expenseApi';

/**
 * OCRReceiptScanner — real OCR via tesseract.js on the backend.
 * Props:
 *   onExtracted(data) — callback when OCR extracts fields
 *   onClose()         — callback to close the scanner
 */
const OCRReceiptScanner = ({ onExtracted, onClose }) => {
  const [scanState, setScanState] = useState('idle'); // 'idle' | 'scanning' | 'complete' | 'error'
  const [extractedData, setExtractedData] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileSelect = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Show preview
    setPreviewUrl(URL.createObjectURL(file));
    setSelectedFile(file);
    setScanState('scanning');
    setErrorMsg('');

    try {
      const data = await ocrScanReceipt(file);
      setExtractedData(data);
      setScanState('complete');
    } catch (err) {
      console.error('OCR failed:', err);
      setErrorMsg(err.response?.data?.message || err.message || 'OCR scanning failed');
      setScanState('error');
    }
  };

  const handleConfirm = () => {
    if (extractedData && onExtracted) {
      onExtracted({
        ...extractedData,
        file: selectedFile,
      });
    }
    if (onClose) onClose();
  };

  const resetScanner = () => {
    setScanState('idle');
    setExtractedData(null);
    setPreviewUrl(null);
    setSelectedFile(null);
    setErrorMsg('');
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <div className="w-full flex-1">
      <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
        <div>
          <h2 className="text-3xl font-headline font-black text-[#714B67] mb-2">OCR Receipt Scanner</h2>
          <p className="text-slate-500 max-w-2xl text-sm leading-relaxed">Upload a receipt image and our AI will automatically extract vendor, amount, date, and category.</p>
        </div>
        {scanState === 'complete' && (
          <button
            onClick={resetScanner}
            className="bg-[#714B67] text-white px-6 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 hover:shadow-lg transition-all"
          >
            <span className="material-symbols-outlined text-lg">add</span>
            Scan Another
          </button>
        )}
      </div>

      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp"
        className="hidden"
        onChange={handleFileSelect}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Central Scanner Area */}
        <div className="lg:col-span-8 space-y-6">

          {/* Upload Zone */}
          {scanState === 'idle' && (
            <div
              onClick={() => fileInputRef.current?.click()}
              className="bg-white border-2 border-dashed border-slate-200 rounded-[2rem] p-16 flex flex-col items-center justify-center min-h-[420px] transition-all hover:border-[#714B67]/30 hover:bg-[#714B67]/5 cursor-pointer group shadow-sm w-full"
            >
              <div className="w-20 h-20 bg-[#faf1f4] rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[#714B67] text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>cloud_upload</span>
              </div>
              <p className="font-headline font-bold text-slate-900 mb-3 text-xl text-center">Drag & drop receipt or click to browse.</p>
              <p className="text-sm text-slate-500 mb-10 text-center">Supported formats: JPG, PNG, WebP (Max 10MB)</p>
              <button
                type="button"
                className="bg-[#714B67] text-white px-10 py-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-3 hover:shadow-xl hover:shadow-[#714B67]/20 transition-all active:scale-95"
              >
                <span className="material-symbols-outlined text-xl">add_a_photo</span>
                Upload Receipt
              </button>
            </div>
          )}

          {/* Scanning Progress */}
          {scanState === 'scanning' && (
            <div className="bg-white border border-slate-100 rounded-[2rem] p-16 shadow-sm min-h-[420px] flex flex-col justify-center">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined animate-spin text-[#00A09D] text-2xl font-bold">sync</span>
                  <span className="font-headline font-bold text-[#714B67] text-lg">Scanning Document...</span>
                </div>
              </div>
              <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-[#00A09D] animate-pulse rounded-full transition-all duration-500" style={{ width: '75%' }}></div>
              </div>
              <p className="mt-4 text-xs text-slate-400 italic">Running tesseract.js OCR engine — extracting text from receipt...</p>

              {/* Show preview while scanning */}
              {previewUrl && (
                <div className="mt-8 rounded-xl overflow-hidden border border-slate-200 max-h-[200px]">
                  <img src={previewUrl} alt="Receipt preview" className="w-full h-full object-contain" />
                </div>
              )}
            </div>
          )}

          {/* Error State */}
          {scanState === 'error' && (
            <div className="bg-white border border-red-200 rounded-[2rem] p-16 shadow-sm min-h-[420px] flex flex-col items-center justify-center">
              <span className="material-symbols-outlined text-5xl text-red-400 mb-4">error</span>
              <p className="font-bold text-red-600 text-lg mb-2">Scan Failed</p>
              <p className="text-sm text-slate-500 mb-8 text-center max-w-md">{errorMsg}</p>
              <button
                onClick={resetScanner}
                className="bg-[#714B67] text-white px-8 py-3 rounded-xl font-bold text-sm hover:shadow-lg transition-all"
              >
                Try Again
              </button>
            </div>
          )}

          {/* Image Preview (complete) */}
          {scanState === 'complete' && previewUrl && (
            <div className="bg-white border border-slate-200 rounded-[2rem] overflow-hidden min-h-[420px] shadow-sm flex items-center justify-center">
              <img src={previewUrl} alt="Scanned receipt" className="max-h-[420px] object-contain" />
            </div>
          )}
        </div>

        {/* Right Extraction Panel */}
        <div className="lg:col-span-4 space-y-6">
          <div className={`bg-white border border-slate-100 rounded-[2rem] shadow-sm p-8 transition-opacity duration-500 ${scanState === 'complete' ? 'opacity-100' : 'opacity-50 pointer-events-none'}`}>
            <div className={`p-4 rounded-2xl mb-8 ${scanState === 'complete' ? 'bg-teal-50 border border-teal-100' : 'bg-slate-50 border border-slate-100'}`}>
              <div className={`flex items-center gap-3 mb-1 ${scanState === 'complete' ? 'text-[#00A09D]' : 'text-slate-400'}`}>
                <span className="material-symbols-outlined text-xl font-bold" style={{ fontVariationSettings: "'FILL' 1" }}>
                  {scanState === 'complete' ? 'check_circle' : 'hourglass_empty'}
                </span>
                <span className="font-black text-xs uppercase tracking-widest">
                  {scanState === 'complete' ? 'AI Extraction Complete' : 'Awaiting Scan'}
                </span>
              </div>
              <p className="text-[10px] text-slate-500 leading-relaxed font-medium">
                {scanState === 'complete'
                  ? 'Fields extracted from the receipt image. Review and confirm below.'
                  : 'Upload a receipt to start extraction.'}
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <label className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-3 block">Vendor</label>
                <div className="text-xl font-black text-[#714B67]">
                  {extractedData?.vendor || '--'}
                </div>
              </div>
              <div>
                <label className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-3 block">Amount to Process</label>
                <div className="flex items-end justify-between">
                  <span className="font-mono text-3xl font-black text-[#714B67] tracking-tight">
                    {extractedData?.amount != null
                      ? `${extractedData.currency === 'INR' ? '₹' : extractedData.currency === 'USD' ? '$' : extractedData.currency === 'EUR' ? '€' : extractedData.currency === 'GBP' ? '£' : ''}${extractedData.amount.toLocaleString()}`
                      : '$ 0.00'}
                  </span>
                  {extractedData?.amount != null && (
                    <div className="flex items-center gap-1.5 mb-2">
                      <div className="bg-[#00A09D] h-1.5 w-1.5 rounded-full"></div>
                      <span className="text-[10px] text-[#00A09D] font-black uppercase">{extractedData.currency}</span>
                    </div>
                  )}
                </div>
              </div>
              <div>
                <label className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-3 block">Billing Date</label>
                <div className="font-mono text-lg font-bold text-slate-900">
                  {extractedData?.date || '--/--/----'}
                </div>
              </div>
              <div>
                <label className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-3 block">Category</label>
                <div className="inline-flex items-center bg-[#00A09D]/10 text-[#00A09D] px-3 py-1.5 rounded-full text-xs font-black uppercase tracking-wider">
                  {extractedData?.category || '--'}
                </div>
              </div>
            </div>

            <div className="mt-12 flex flex-col gap-3">
              <button
                disabled={scanState !== 'complete'}
                onClick={handleConfirm}
                className="w-full bg-[#714B67] text-white py-4 rounded-2xl font-black text-sm hover:shadow-xl hover:shadow-[#714B67]/30 transition-all flex items-center justify-center gap-3 disabled:opacity-50 active:scale-[0.98] cursor-pointer"
              >
                <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>send</span>
                Confirm & Auto-Fill
              </button>
              <button
                disabled={scanState !== 'complete'}
                onClick={onClose}
                className="w-full py-4 rounded-2xl border border-slate-200 text-slate-500 font-bold text-sm hover:bg-slate-50 transition-all flex items-center justify-center gap-3 disabled:opacity-50 cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OCRReceiptScanner;
