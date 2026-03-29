import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import ApprovalsToReview from '../components/ApprovalsToReview';
import { listExpenses, approveExpense as apiApprove, rejectExpense as apiReject } from '../services/expenseApi';

const navItems = [
  { icon: 'dashboard',    label: 'Dashboard',       href: '/' },
  { icon: 'fact_check',   label: 'Approvals',       href: '/approvals', active: true },
  { icon: 'insights',     label: 'Insights',        href: '/insights' },
  { icon: 'group',        label: 'User Management', href: '/users' },
];

/**
 * Maps backend expense → shape expected by ApprovalsToReview component
 */
function mapToApproval(exp) {
  const name = exp.paid_by || 'Employee';
  const initials = name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
  return {
    id: exp.id,
    employeeName: name,
    employeeInitials: initials || 'EE',
    employeeRole: 'Employee',
    description: exp.description || 'Untitled',
    category: exp.category || 'Misc',
    amount: exp.original_amount,
    currency: exp.original_currency === 'INR' ? '₹' : exp.original_currency || '₹',
    date: exp.expense_date
      ? new Date(exp.expense_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
      : 'N/A',
    status: exp.status === 'WAITING_APPROVAL' ? 'Waiting Approval' : exp.status,
    approvalType: 'sequential',
    steps: [
      { title: 'Manager Review', status: 'pending' },
      { title: 'Finance Approval', status: 'queued' },
    ],
  };
}

const Approvals = () => {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPending = useCallback(async () => {
    try {
      setLoading(true);
      const all = await listExpenses();
      // Only show expenses that are waiting for approval
      const pending = (all || [])
        .filter(e => e.status === 'WAITING_APPROVAL')
        .map(mapToApproval);
      setExpenses(pending);
      setError(null);
    } catch (err) {
      console.error('Failed to fetch approvals:', err);
      setError(err.message);
      setExpenses([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPending();
  }, [fetchPending]);

  const handleApprove = async (id) => {
    try {
      await apiApprove(id);
      // Refresh the list from the backend
      fetchPending();
    } catch (err) {
      console.error('Approve failed:', err);
      alert(err.response?.data?.message || err.message || 'Failed to approve');
    }
  };

  const handleReject = async (id, reason) => {
    try {
      await apiReject(id, reason);
      fetchPending();
    } catch (err) {
      console.error('Reject failed:', err);
      alert(err.response?.data?.message || err.message || 'Failed to reject');
    }
  };

  return (
    <div className="flex min-h-screen bg-background text-slate-900 antialiased font-sans">

      {/* ── Top Nav Bar ─────────────────────────────────────────────────── */}
      <header className="fixed top-0 w-full z-50 bg-white border-b border-gray-100 flex items-center justify-between px-8 h-20">
        <div className="flex items-center gap-12">
          <Link to="/" className="flex flex-col">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-white font-black text-sm">XF</div>
              <span className="text-2xl font-black text-primary tracking-tight">XpenseFlow</span>
            </div>
            <span className="text-[10px] font-bold text-slate-400 tracking-[0.2em] mt-1 uppercase">Enterprise Edition</span>
          </Link>
          <div className="hidden md:flex items-center gap-4 bg-slate-100/80 px-4 py-2.5 rounded-lg">
            <span className="material-symbols-outlined text-slate-400 text-lg">search</span>
            <input className="bg-transparent border-none focus:ring-0 text-sm w-96 outline-none placeholder-slate-400" placeholder="Search approvals..." type="text" />
          </div>
        </div>
        <div className="flex items-center gap-6">
          <Link to="/notifications" className="relative text-slate-500 hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-2xl">notifications</span>
            <span className="absolute top-0 right-0 w-2 h-2 bg-primary rounded-full border-2 border-white"></span>
          </Link>
          <Link to="/settings" className="text-slate-500 hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-2xl">settings</span>
          </Link>
          <Link to="/profile" className="flex items-center gap-3 pl-4 border-l border-slate-100 hover:opacity-80 transition-opacity">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-bold text-slate-800 leading-tight">Alex Rivera</p>
              <p className="text-[10px] font-medium text-slate-400">Admin Access</p>
            </div>
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/10">
              <img alt="User profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMSmNziOuClyivuRETy4z9tXEaJ5YwHZrOHQH1krW6LKhzJ2C4H4kljwm1Wc57BsdKqWN6v2GczSblTP_3kgXe38R-9Xy-SqyLkNKbMf2hY6ERJK9JLFa-RKQX8Pseq1XMCMmQaYxDEuvmJfSzhMHIGU7weEjuZRx-GWKSNR2DNbGW9F_XTLeacuWmNE8dFRcFcitvi_Llzq_TNnJ6uVIUtdPkh28A_gABKebVKxH0MyZcMfTJqMGn4Ia79JhWyenCg2mOs6XM3iTM" />
            </div>
          </Link>
        </div>
      </header>

      {/* ── Side Nav Bar ────────────────────────────────────────────────── */}
      <aside className="h-screen w-72 fixed left-0 top-0 pt-20 bg-sidebar-bg flex flex-col z-40 border-r border-slate-200/50">
        <nav className="flex-1 px-4 py-6 space-y-1">
          {navItems.map(item => (
            <Link
              key={item.label}
              to={item.href}
              className={`flex items-center px-4 py-3.5 rounded-xl transition-all duration-200 font-bold ${
                item.active ? 'bg-white text-primary shadow-sm' : 'text-slate-500 hover:bg-white hover:text-primary'
              }`}
            >
              <span className="material-symbols-outlined mr-4 text-[22px]">{item.icon}</span>
              <span className="text-[14px]">{item.label}</span>
            </Link>
          ))}
        </nav>
        <div className="px-4 pb-10 space-y-1 border-t border-slate-200/50 pt-4">
          <Link to="/help" className="flex items-center text-slate-400 hover:text-primary px-4 py-2 transition-colors">
            <span className="material-symbols-outlined mr-4 text-[20px]">help</span>
            <span className="font-bold text-xs uppercase tracking-wider">Help Center</span>
          </Link>
          <Link to="/login" className="flex items-center text-slate-400 hover:text-primary px-4 py-2 transition-colors">
            <span className="material-symbols-outlined mr-4 text-[20px]">logout</span>
            <span className="font-bold text-xs uppercase tracking-wider">Logout</span>
          </Link>
        </div>
      </aside>

      {/* ── Main Content ────────────────────────────────────────────────── */}
      <main className="ml-72 pt-20 min-h-screen bg-background flex-1">
        <div className="max-w-[1400px] mx-auto p-10">
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              <span className="ml-3 text-sm text-slate-500 font-medium">Loading approvals…</span>
            </div>
          ) : error ? (
            <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-xl text-sm font-medium">
              Failed to load approvals: {error}
            </div>
          ) : (
            <ApprovalsToReview
              expenses={expenses}
              approveExpense={handleApprove}
              rejectExpense={handleReject}
            />
          )}
        </div>
      </main>

    </div>
  );
};

export default Approvals;
