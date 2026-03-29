// Load .env FIRST — this side-effect import runs during module resolution
import 'dotenv/config';

import express from 'express';
import cors from 'cors';
import expenseRoutes from './server/routes/expenses.js';
import authRoutes from './server/routes/auth.js';
import userRoutes from './server/routes/users.js';
import approvalRuleRoutes from './server/routes/approvalRules.js';
import chatRoutes from './server/routes/chat.js';

const app = express();

// Allow Vite dev server
app.use(cors({
  origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
  credentials: true,
}));
app.use(express.json({ limit: '20mb' }));
app.use(express.urlencoded({ extended: true, limit: '20mb' }));

// Health check
app.get('/', (req, res) => {
  res.status(200).json({ message: 'XpenseFlow API — integrated and running.' });
});

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/expenses', expenseRoutes);
app.use('/api/users', userRoutes);
app.use('/api/approval-rules', approvalRuleRoutes);
app.use('/api/chat', chatRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`[XpenseFlow] Server listening on port ${PORT}`);
    console.log(`[XpenseFlow] API ready at http://localhost:${PORT}/api`);
});
