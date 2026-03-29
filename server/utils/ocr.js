import Tesseract from 'tesseract.js';
import fs from 'fs';
import path from 'path';

/**
 * OCR Receipt Parser — powered by tesseract.js
 * Accepts either a file path or a base64 image string.
 * Extracts: amount, vendor, currency, date, category.
 */

/**
 * Parse a receipt image and extract expense data.
 * @param {string} input — file path OR base64 data URI string
 * @returns {Object|null} { amount, vendor, currency, date, category }
 */
async function parseReceipt(input) {
  if (!input) return null;

  let imageSource = input;

  // If it's a file path, verify it exists
  if (!input.startsWith('data:') && !input.startsWith('http')) {
    if (!fs.existsSync(input)) {
      console.warn('[OCR] File not found:', input);
      return null;
    }
    imageSource = input;
  }

  try {
    console.log('[OCR] Starting recognition...');
    const { data: { text } } = await Tesseract.recognize(imageSource, 'eng', {
      logger: (m) => {
        if (m.status === 'recognizing text') {
          // Log progress
          const pct = Math.round((m.progress || 0) * 100);
          if (pct % 25 === 0) console.log(`[OCR] Progress: ${pct}%`);
        }
      },
    });

    console.log('[OCR] Raw text extracted:', text.substring(0, 200));

    return extractFieldsFromText(text);
  } catch (err) {
    console.error('[OCR] Recognition failed:', err.message);
    return null;
  }
}

/**
 * Parse a base64 image buffer and extract expense data.
 * @param {Buffer} buffer — raw image buffer from multer
 * @param {string} mimetype — e.g. 'image/png'
 * @returns {Object|null}
 */
async function parseReceiptBuffer(buffer, mimetype) {
  if (!buffer) return null;

  try {
    // Convert buffer to base64 data URI for tesseract
    const base64 = buffer.toString('base64');
    const dataUri = `data:${mimetype};base64,${base64}`;

    console.log('[OCR] Starting recognition from buffer...');
    const { data: { text } } = await Tesseract.recognize(dataUri, 'eng');

    console.log('[OCR] Raw text extracted:', text.substring(0, 200));

    return extractFieldsFromText(text);
  } catch (err) {
    console.error('[OCR] Recognition failed:', err.message);
    return null;
  }
}

/**
 * Extract structured fields from OCR text.
 */
function extractFieldsFromText(text) {
  if (!text || text.trim().length === 0) {
    return {
      amount: null,
      vendor: 'Unknown Merchant',
      currency: 'INR',
      date: new Date().toISOString().slice(0, 10),
      category: 'Misc',
      raw_text: '',
    };
  }

  // ── Amount extraction ──────────────────────────────────────────────
  // Try multiple patterns: "Total: $123.45", "Amount: ₹1,234", "Grand Total 500.00", etc.
  const amountPatterns = [
    /(?:Total|Amount|Grand\s*Total|Sub\s*Total|Net\s*Amount|Balance\s*Due|Bill\s*Amount)[:\s]*[₹$€£]?\s*([\d,]+\.?\d*)/i,
    /[₹$€£]\s*([\d,]+\.?\d{2})/,
    /(?:Rs\.?|INR|USD|EUR|GBP)\s*([\d,]+\.?\d*)/i,
    /([\d,]+\.\d{2})/, // fallback: any decimal number
  ];

  let amount = null;
  for (const pattern of amountPatterns) {
    const match = text.match(pattern);
    if (match) {
      amount = parseFloat(match[1].replace(/,/g, ''));
      if (amount > 0) break;
    }
  }

  // ── Date extraction ────────────────────────────────────────────────
  const datePatterns = [
    /(?:Date|Dated|Invoice\s*Date|Bill\s*Date)[:\s]*(\d{1,2}[\/-]\d{1,2}[\/-]\d{2,4})/i,
    /(\d{1,2}[\/-]\d{1,2}[\/-]\d{2,4})/,
    /(\d{4}[\/-]\d{1,2}[\/-]\d{1,2})/, // ISO format
  ];

  let date = new Date().toISOString().slice(0, 10);
  for (const pattern of datePatterns) {
    const match = text.match(pattern);
    if (match) {
      date = match[1];
      break;
    }
  }

  // ── Vendor extraction (first non-empty line) ───────────────────────
  const lines = text.split('\n').map(l => l.trim()).filter(l => l.length > 2);
  const vendor = lines[0] || 'Unknown Merchant';

  // ── Currency detection ─────────────────────────────────────────────
  let currency = 'INR'; // default
  if (text.includes('$') || /USD/i.test(text)) currency = 'USD';
  else if (text.includes('€') || /EUR/i.test(text)) currency = 'EUR';
  else if (text.includes('£') || /GBP/i.test(text)) currency = 'GBP';
  else if (text.includes('¥') || /JPY/i.test(text)) currency = 'JPY';
  else if (text.includes('₹') || /INR|Rs\.?/i.test(text)) currency = 'INR';

  // ── Category inference ─────────────────────────────────────────────
  let category = 'Misc';
  const lowerText = text.toLowerCase();
  if (/uber|ola|taxi|cab|flight|hotel|train|travel|booking/i.test(lowerText)) category = 'Travel';
  else if (/restaurant|food|café|cafe|coffee|starbucks|meal|lunch|dinner|breakfast|zomato|swiggy/i.test(lowerText)) category = 'Meals';
  else if (/amazon|flipkart|office|supplies|stationery|pen|paper/i.test(lowerText)) category = 'Office Supplies';
  else if (/software|license|subscription|saas|cloud|aws|azure|github/i.test(lowerText)) category = 'Software';

  return {
    amount,
    vendor: vendor.substring(0, 100),
    currency,
    date,
    category,
    raw_text: text.substring(0, 500),
  };
}

export { parseReceipt, parseReceiptBuffer };
