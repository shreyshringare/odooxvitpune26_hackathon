import express from 'express';
import multer from 'multer';
import expenseController from '../controllers/expenseController.js';
import { authenticate } from '../middleware/auth.js';

const router = express.Router();

// Multer — stores file in memory as Buffer (no disk writes needed)
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB max
  fileFilter: (req, file, cb) => {
    const allowed = ['image/jpeg', 'image/png', 'image/webp', 'application/pdf'];
    if (allowed.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Only JPG, PNG, WebP, and PDF files are allowed.'));
    }
  },
});

// All expense routes require authentication
router.use(authenticate);

// ── CRUD ─────────────────────────────────────────────────────────────────────
router.get('/', expenseController.getExpenses);
router.post('/', expenseController.createExpense);
router.get('/:id', expenseController.getExpenseById);
router.put('/:id', expenseController.updateExpense);

// ── Workflow actions ─────────────────────────────────────────────────────────
router.post('/:id/submit', expenseController.submitExpense);
router.post('/:id/approve', expenseController.approveExpense);
router.post('/:id/reject', expenseController.rejectExpense);
router.post('/:id/resubmit', expenseController.resubmitExpense);

// ── OCR & Upload ─────────────────────────────────────────────────────────────
router.post('/ocr', upload.single('receipt'), expenseController.ocrScan);
router.post('/upload-receipt', upload.single('receipt'), expenseController.uploadReceipt);

export default router;
