# XpenseFlow 💸

> An enterprise-grade expense management system with AI-powered receipt scanning, multi-currency support, and configurable approval workflows — built for the VIT Pune × Odoo Hackathon 2026.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [API Reference](#api-reference)
- [Database Schema](#database-schema)
- [Expense Lifecycle](#expense-lifecycle)
- [Approval Workflow](#approval-workflow)
- [Mock Mode](#mock-mode)
- [Contributing](#contributing)

---

## Overview

XpenseFlow is a full-stack expense management platform that lets employees submit expenses, track their approval status in real-time, and get reimbursed faster. Managers and admins get a unified dashboard to review, approve, or reject claims — all with automatic currency conversion and OCR-powered receipt scanning.

---

## Features

- **Expense Submission** — create, edit, and submit expense claims with category tagging, descriptions, and receipt uploads
- **OCR Receipt Scanner** — upload a receipt image (JPG/PNG/PDF) and auto-extract vendor, amount, currency, date, and category using Tesseract.js
- **Multi-Currency Support** — automatic conversion to your company's base currency via ExchangeRate-API (with built-in fallback rates for INR, USD, EUR, GBP, JPY)
- **Approval Workflows** — configurable rules: sequential, percentage-based, specific approver, or hybrid
- **Real-Time Approval Tracker** — visual step-by-step progress indicator for each expense
- **Role-Based Access** — three roles: `ADMIN`, `MANAGER`, and `EMPLOYEE`, each with scoped views and actions
- **AI Chatbot** — powered by Google Gemini 2.0 Flash; answers questions about policies, navigation, and expense workflows
- **Insights Dashboard** — charts and analytics (built with Recharts) for spend by category, status breakdown, and trends
- **Supabase Auth** — email/password signup and Google OAuth, with automatic company provisioning on first login
- **Receipt Storage** — receipts uploaded to Supabase Storage, with public URLs stored against each expense

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18, React Router v6, Tailwind CSS, Recharts, Vite |
| Backend | Node.js, Express 5 |
| Database | PostgreSQL via Prisma ORM |
| Auth | Supabase Auth (email/password + Google OAuth) |
| File Storage | Supabase Storage |
| OCR | Tesseract.js |
| AI Chatbot | Google Gemini 2.0 Flash API |
| Currency API | ExchangeRate-API v6 |

---

## Project Structure

```
odooxvitpune26_hackathon-main/
│
├── client/                        # React frontend (Vite)
│   └── src/
│       ├── components/            # Reusable UI components
│       │   ├── ApprovalProgressTracker.jsx
│       │   ├── ApprovalsToReview.jsx
│       │   ├── ChatBot.jsx
│       │   ├── CurrencyAmountInput.jsx
│       │   ├── ExpenseDashboard.jsx
│       │   ├── ExpenseSubmissionModal.jsx
│       │   ├── OCRReceiptScanner.jsx
│       │   └── UserManagementTable.jsx
│       ├── context/
│       │   └── AuthContext.jsx    # Auth state + token management
│       ├── pages/                 # Route-level page components
│       │   ├── Dashboard.jsx
│       │   ├── Approvals.jsx
│       │   ├── Insights.jsx
│       │   ├── Users.jsx
│       │   ├── Login.jsx
│       │   ├── Profile.jsx
│       │   ├── Settings.jsx
│       │   ├── Notifications.jsx
│       │   ├── HelpCenter.jsx
│       │   ├── SecurityPolicy.jsx
│       │   └── SystemStatus.jsx
│       ├── services/              # Axios API wrappers
│       └── lib/
│           └── supabase.js        # Supabase client
│
├── server/                        # Express backend
│   ├── controllers/               # Request handlers
│   │   ├── authController.js
│   │   ├── expenseController.js
│   │   ├── approvalRuleController.js
│   │   └── userController.js
│   ├── routes/                    # Express routers
│   │   ├── auth.js
│   │   ├── expenses.js
│   │   ├── users.js
│   │   ├── approvalRules.js
│   │   └── chat.js
│   ├── services/                  # Business logic
│   │   ├── expenseService.js
│   │   ├── approvalService.js
│   │   ├── currencyService.js
│   │   └── userService.js
│   ├── utils/
│   │   ├── ocr.js                 # Tesseract.js receipt parser
│   │   └── currency.js
│   ├── db/
│   │   └── index.js               # Prisma client instance
│   └── middleware/
│       └── auth.js                # Supabase JWT verification
│
├── prisma/
│   └── schema.prisma              # Database schema
├── data/fixtures/                 # Mock data for MOCK_MODE
├── server.js                      # Express entry point
└── package.json
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- A [Supabase](https://supabase.com) project (free tier works)
- PostgreSQL database (Supabase provides one)

### 1. Clone the repository

```bash
git clone https://github.com/shreyshringare/odooxvitpune26_hackathon.git
cd odooxvitpune26_hackathon
```

### 2. Backend setup

```bash
# Install root dependencies
npm install

# Set up environment variables
cp .env.example .env
# → Fill in the values (see Environment Variables section below)

# Generate Prisma client
npx prisma generate

# Push schema to your database
npx prisma db push

# Start the server
npm start
```

The API will be live at `http://localhost:3000`.

### 3. Frontend setup

```bash
cd client
npm install

# Set up environment variables
cp .env.example .env
# → Set VITE_API_BASE_URL to http://localhost:3000/api

npm run dev
```

The frontend will be live at `http://localhost:5173`.

---

## Environment Variables

### Root `.env` (backend)

| Variable | Description | Required |
|---|---|---|
| `DATABASE_URL` | PostgreSQL connection string from Supabase | ✅ |
| `SUPABASE_URL` | Your Supabase project URL | ✅ |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key (for server-side auth) | ✅ |
| `GEMINI_API_KEY` | Google Gemini API key (for the AI chatbot) | ✅ |
| `EXCHANGE_API_KEY` | ExchangeRate-API v6 key (optional — fallback rates used if absent) | ⬜ |
| `MOCK_MODE` | Set to `true` to use fixture JSON instead of the database | ⬜ |
| `PORT` | Server port (default: `3000`) | ⬜ |

### `client/.env` (frontend)

| Variable | Description |
|---|---|
| `VITE_API_BASE_URL` | Backend API base URL, e.g. `http://localhost:3000/api` |
| `VITE_SUPABASE_URL` | Your Supabase project URL |
| `VITE_SUPABASE_ANON_KEY` | Supabase anon/public key |

---

## API Reference

All routes except `/api/auth/*` require a Bearer token in the `Authorization` header.

### Auth

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/auth/signup` | Register with name, email, password, country — auto-creates company |
| `POST` | `/api/auth/login` | Email/password login |
| `POST` | `/api/auth/google` | Google OAuth login via Supabase access token |

### Expenses

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/expenses` | List all expenses for your company |
| `POST` | `/api/expenses` | Create a new expense (status: DRAFT) |
| `GET` | `/api/expenses/:id` | Get a single expense with approval steps |
| `PUT` | `/api/expenses/:id` | Update an expense |
| `POST` | `/api/expenses/:id/submit` | Submit a draft expense for approval |
| `POST` | `/api/expenses/:id/approve` | Approve a pending expense |
| `POST` | `/api/expenses/:id/reject` | Reject a pending expense (with optional reason) |
| `POST` | `/api/expenses/:id/resubmit` | Move a rejected expense back to DRAFT |
| `POST` | `/api/expenses/ocr` | Upload a receipt image → returns extracted fields |
| `POST` | `/api/expenses/upload-receipt` | Upload receipt to Supabase Storage → returns public URL |

### Users

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/users` | List all users in your company |
| `POST` | `/api/users` | Create a new user |
| `PUT` | `/api/users/:id` | Update user details |

### Approval Rules

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/approval-rules` | List approval rules for your company |
| `POST` | `/api/approval-rules` | Create a new approval rule |
| `PUT` | `/api/approval-rules/:id` | Update an approval rule |
| `DELETE` | `/api/approval-rules/:id` | Soft-delete an approval rule |

### Chat

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/chat` | Send a message to the AI assistant. Body: `{ message, history? }` |

---

## Database Schema

The database has six models:

- **Company** — tenant root; every user and expense belongs to one company
- **User** — supports `ADMIN`, `MANAGER`, and `EMPLOYEE` roles; optional `manager_id` for hierarchy
- **Expense** — stores original and converted amounts, category, receipt URL, and approval state
- **ApprovalRule** — configures how expenses are routed: `SEQUENTIAL`, `PERCENTAGE`, `SPECIFIC`, or `HYBRID`
- **ApprovalRuleApprover** — maps users to rules with step ordering
- **ApprovalStep** — per-expense record of each approver's decision (`PENDING`, `APPROVED`, `REJECTED`, `CANCELLED`)
- **ExchangeRateCache** — caches fetched exchange rates to reduce API calls

---

## Expense Lifecycle

```
DRAFT → SUBMITTED → WAITING_APPROVAL → APPROVED
                                     ↘ REJECTED → DRAFT (resubmit)
```

- A new expense starts in `DRAFT`.
- Submitting transitions it to `WAITING_APPROVAL` and creates an `ApprovalStep` for the appropriate approver (manager or company admin).
- Approving or rejecting the expense updates both the `Expense` status and the pending `ApprovalStep`.
- Rejected expenses can be edited and resubmitted, which resets them to `DRAFT`.

---

## Approval Workflow

Four rule types are supported:

| Rule Type | Behaviour |
|---|---|
| `SEQUENTIAL` | Approvers are notified and must act one at a time, in order |
| `PERCENTAGE` | A configurable percentage of listed approvers must approve |
| `SPECIFIC` | A single named user must approve |
| `HYBRID` | Combination of sequential steps and percentage thresholds |

If no approval rule exists for a company, one is auto-created on the first expense submission.

---

## Mock Mode

Set `MOCK_MODE=true` in your `.env` to bypass the database entirely. The approval service will read from and write to `data/fixtures/mock_rules.json`. Useful for local demos without a database connection.

---

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add your feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## License

This project was built for hackathon and educational purposes. Feel free to use and adapt it.
