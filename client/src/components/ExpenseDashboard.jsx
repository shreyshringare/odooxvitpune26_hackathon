import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ApprovalProgressTracker from './ApprovalProgressTracker';
import ExpenseSubmissionModal from './ExpenseSubmissionModal';
import ChatBot from './ChatBot';

const ExpenseDashboard = ({ expenses = [], filter, setFilter, expandedId, setExpandedId, loading = false, error = null, onRefresh }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const statuses = [
    { id: 'Draft',            label: 'Draft',     icon: 'draft',        activeText: 'text-primary',   hoverText: 'group-hover:text-primary',   activeBorder: 'border-primary ring-primary/5' },
    { id: 'Submitted',        label: 'Submitted', icon: 'send',         activeText: 'text-primary',   hoverText: 'group-hover:text-primary',   activeBorder: 'border-primary ring-primary/5' },
    { id: 'Waiting Approval', label: 'Waiting',   icon: 'schedule',     activeText: 'text-primary',   hoverText: 'group-hover:text-primary',   activeBorder: 'border-primary ring-primary/5' },
    { id: 'Approved',         label: 'Approved',  icon: 'check_circle', activeText: 'text-secondary', hoverText: 'group-hover:text-secondary', activeBorder: 'border-secondary ring-secondary/5' },
    { id: 'Rejected',         label: 'Rejected',  icon: 'cancel',       activeText: 'text-red-500',   hoverText: 'group-hover:text-red-500',  activeBorder: 'border-red-500 ring-red-500/5' },
  ];

  const filteredExpenses = filter && filter !== 'All'
    ? expenses.filter(e => e.status === filter)
    : expenses;

  const totalSpend = expenses
    .reduce((sum, e) => sum + (typeof e.amount === 'number' ? e.amount : parseFloat(e.amount || 0)), 0);

  const pendingAmount = expenses
    .filter(e => e.status === 'Waiting Approval' || e.status === 'Submitted')
    .reduce((sum, e) => sum + (typeof e.amount === 'number' ? e.amount : parseFloat(e.amount || 0)), 0);

  const approvedAmount = expenses
    .filter(e => e.status === 'Approved')
    .reduce((sum, e) => sum + (typeof e.amount === 'number' ? e.amount : parseFloat(e.amount || 0)), 0);

  const handleNewExpense = (formData) => {
    setIsModalOpen(false);
    // Trigger a fresh fetch from the backend
    if (onRefresh) onRefresh();
  };

  const handleExportCSV = () => {
    if (!filteredExpenses.length) return;
    
    // Create CSV header (using the keys of the first object)
    const headers = ['id', 'description', 'category', 'amount', 'currency', 'status', 'date'];
    
    // Convert array of objects to CSV rows
    const csvRows = [];
    csvRows.push(headers.join(',')); // Add header row

    for (const expense of filteredExpenses) {
      const values = headers.map(header => {
        const value = expense[header] === undefined ? '' : String(expense[header]);
        // Escape quotes and handle commas
        return `"${value.replace(/"/g, '""')}"`;
      });
      csvRows.push(values.join(','));
    }

    // Trigger download
    const blob = new Blob([csvRows.join('\n')], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `xpenseflow_export_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const navItems = [
    { icon: 'dashboard',     label: 'Dashboard',        active: true, href: '/' },
    { icon: 'fact_check',    label: 'Approvals',        href: '/approvals' },
    { icon: 'insights',      label: 'Insights',         href: '/insights' },
    { icon: 'group',         label: 'User Management',  href: '/users' },
  ];

  return (
    <div className="flex min-h-screen bg-background text-slate-900 antialiased font-sans">

      {/* ── Top Nav Bar ─────────────────────────────────────────────────── */}
      <header className="fixed top-0 w-full z-50 bg-white border-b border-gray-100 flex items-center justify-between px-8 h-20">
        {/* Logo + Search */}
        <div className="flex items-center gap-12">
          <Link className="flex flex-col" to="/">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-white font-black text-sm">XF</div>
              <span className="text-2xl font-black text-primary tracking-tight">XpenseFlow</span>
            </div>
            <span className="text-[10px] font-bold text-slate-400 tracking-[0.2em] mt-1 uppercase">Enterprise Edition</span>
          </Link>
          <div className="hidden md:flex items-center gap-4 bg-slate-100/80 px-4 py-2.5 rounded-lg">
            <span className="material-symbols-outlined text-slate-400 text-lg">search</span>
            <input
              className="bg-transparent border-none focus:ring-0 text-sm w-96 font-sans placeholder-slate-400 outline-none"
              placeholder="Search transactions..."
              type="text"
            />
          </div>
        </div>

        {/* Actions + Profile */}
        <div className="flex items-center gap-6">
          <Link to="/notifications" aria-label="Notifications" className="relative text-slate-500 hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-2xl">notifications</span>
            <span className="absolute top-0 right-0 w-2 h-2 bg-primary rounded-full border-2 border-white"></span>
          </Link>
          <Link to="/settings" aria-label="Settings" className="text-slate-500 hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-2xl">settings</span>
          </Link>
          <Link to="/profile" className="flex items-center gap-3 pl-4 border-l border-slate-100 hover:opacity-80 transition-opacity">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-bold text-slate-800 leading-tight">Alex Rivera</p>
              <p className="text-[10px] font-medium text-slate-400">Admin Access</p>
            </div>
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/10">
              <img
                alt="User profile"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMSmNziOuClyivuRETy4z9tXEaJ5YwHZrOHQH1krW6LKhzJ2C4H4kljwm1Wc57BsdKqWN6v2GczSblTP_3kgXe38R-9Xy-SqyLkNKbMf2hY6ERJK9JLFa-RKQX8Pseq1XMCMmQaYxDEuvmJfSzhMHIGU7weEjuZRx-GWKSNR2DNbGW9F_XTLeacuWmNE8dFRcFcitvi_Llzq_TNnJ6uVIUtdPkh28A_gABKebVKxH0MyZcMfTJqMGn4Ia79JhWyenCg2mOs6XM3iTM"
              />
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
              className={`flex items-center px-4 py-3.5 rounded-xl transition-all duration-200 ${
                item.active
                  ? 'bg-white text-primary shadow-sm font-bold'
                  : 'text-slate-500 hover:bg-white hover:text-primary font-bold'
              }`}
            >
              <span className="material-symbols-outlined mr-4 text-[22px]">{item.icon}</span>
              <span className="text-[14px]">{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="px-6 mb-6">
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full py-4 bg-primary text-white font-bold rounded-xl flex items-center justify-center gap-2 shadow-xl shadow-primary/30 hover:bg-primary/95 active:scale-[0.98] transition-all"
          >
            <span className="material-symbols-outlined text-xl">add</span>
            New Report
          </button>
        </div>

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
        <div className="max-w-[1400px] mx-auto p-10 space-y-10">

          {/* Dashboard Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-4xl font-black text-primary mb-2">My Expenses</h2>
              <p className="text-slate-500 font-medium">Curating your financial intelligence and transactional flow.</p>
            </div>
            <div className="flex gap-3">
              <button onClick={handleExportCSV} className="px-6 py-3.5 border-2 border-slate-200 text-primary font-bold rounded-xl hover:bg-slate-50 transition-colors flex items-center gap-2">
                <span className="material-symbols-outlined text-lg">download</span>
                Export CSV
              </button>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-primary text-white px-8 py-3.5 rounded-xl font-bold flex items-center gap-2 shadow-xl shadow-primary/25 hover:translate-y-[-2px] active:scale-95 transition-all"
              >
                <span className="material-symbols-outlined">add_circle</span>
                New Expense
              </button>
            </div>
          </div>

          {/* Stats Cards */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white border border-slate-200 p-5 rounded-xl flex flex-col gap-3 shadow-sm">
              <div className="flex justify-between items-center">
                <span className="material-symbols-outlined text-slate-400">account_balance_wallet</span>
                <span className="font-mono font-bold text-lg">${totalSpend.toFixed(2)}</span>
              </div>
              <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">Total Spend</span>
            </div>
            <div className="bg-white border border-slate-200 p-5 rounded-xl flex flex-col gap-3 shadow-sm border-b-4 border-b-primary ring-1 ring-primary/20">
              <div className="flex justify-between items-center">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>schedule</span>
                <span className="font-mono font-bold text-lg text-primary">${pendingAmount.toFixed(2)}</span>
              </div>
              <span className="text-sm font-bold text-primary uppercase tracking-wider">Pending Approval</span>
            </div>
            <div className="bg-white border border-slate-200 p-5 rounded-xl flex flex-col gap-3 shadow-sm">
              <div className="flex justify-between items-center">
                <span className="material-symbols-outlined text-secondary">check_circle</span>
                <span className="font-mono font-bold text-lg text-secondary">${approvedAmount.toFixed(2)}</span>
              </div>
              <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">Approved</span>
            </div>
          </section>

          {/* Status Pipeline */}
          <div className="flex gap-5 overflow-x-auto pb-2 hide-scrollbar">
            {statuses.map(s => {
              const isActive = filter === s.id;
              const count = expenses.filter(e => e.status === s.id).length;
              return (
                <button
                  key={s.id}
                  onClick={() => setFilter(isActive ? 'All' : s.id)}
                  className={`flex-1 min-w-[180px] p-7 bg-white rounded-2xl shadow-sm text-left group transition-all ${
                    isActive
                      ? `border-2 ring-4 ${s.activeBorder}`
                      : 'border border-slate-200 hover:border-primary/20'
                  }`}
                >
                  <div className="flex justify-between items-start mb-5">
                    <span className={`material-symbols-outlined transition-colors ${isActive ? s.activeText : `text-slate-400 ${s.hoverText}`}`}>
                      {s.icon}
                    </span>
                    <span className={`font-mono text-sm font-bold ${s.activeText}`}>
                      {String(count).padStart(2, '0')}
                    </span>
                  </div>
                  <span className={`font-bold text-lg ${isActive ? s.activeText : 'text-slate-700'}`}>
                    {s.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

            {/* Data Table */}
            <div className="lg:col-span-8 bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden flex flex-col">
              {loading ? (
                <div className="flex items-center justify-center py-20">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                  <span className="ml-3 text-sm text-slate-500 font-medium">Loading expenses…</span>
                </div>
              ) : error ? (
                <div className="m-6 bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-xl text-sm font-medium">
                  ⚠️ {error} — Is the backend running on port 3000?
                </div>
              ) : filteredExpenses.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 text-slate-400">
                  <span className="material-symbols-outlined text-5xl mb-3">receipt_long</span>
                  <p className="font-bold text-lg text-slate-500">No expenses found</p>
                  <p className="text-sm mt-1">Create your first expense to get started.</p>
                </div>
              ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-slate-50/50 border-b border-slate-100">
                    <tr>
                      <th className="px-8 py-5 text-[10px] uppercase tracking-[0.2em] text-slate-400 font-black">Description</th>
                      <th className="px-8 py-5 text-[10px] uppercase tracking-[0.2em] text-slate-400 font-black">Date &amp; Category</th>
                      <th className="px-8 py-5 text-[10px] uppercase tracking-[0.2em] text-slate-400 font-black text-right">Amount</th>
                      <th className="px-8 py-5 text-[10px] uppercase tracking-[0.2em] text-slate-400 font-black text-center">Status</th>
                      <th className="px-8 py-5 w-16"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {filteredExpenses.map(expense => (
                      <React.Fragment key={expense.id}>
                        {/* Row */}
                        <tr
                          className="group hover:bg-slate-50/80 transition-colors cursor-pointer"
                          onClick={() => setExpandedId(expandedId === expense.id ? null : expense.id)}
                        >
                          <td className="px-8 py-7">
                            <div className="flex flex-col">
                              <span className="font-bold text-slate-800 text-[15px] group-hover:text-primary transition-colors">
                                {expense.description}
                              </span>
                              <span className="text-[11px] text-slate-400 font-mono mt-1.5 uppercase tracking-wider">
                                ID: {expense.id}
                              </span>
                            </div>
                          </td>
                          <td className="px-8 py-7">
                            <div className="flex flex-col">
                              <span className="text-[14px] font-bold text-slate-700">{expense.date}</span>
                              <span className="text-[9px] font-black text-secondary bg-secondary/10 px-2.5 py-1 rounded-full mt-2 w-max uppercase tracking-wider">
                                {expense.category}
                              </span>
                            </div>
                          </td>
                          <td className="px-8 py-7 text-right">
                            <div className="flex flex-col items-end">
                              <div className="flex items-baseline gap-1.5">
                                <span className="font-mono font-bold text-slate-900 text-[17px]">
                                  {typeof expense.amount === 'number' ? expense.amount.toFixed(2) : expense.amount}
                                </span>
                                <span className="font-mono font-bold text-slate-400 text-xs uppercase">
                                  {expense.currency || 'USD'}
                                </span>
                              </div>
                              {expense.localAmount && (
                                <span className="font-mono text-[11px] text-slate-400 mt-1">({expense.localAmount})</span>
                              )}
                            </div>
                          </td>
                          <td className="px-8 py-7 text-center">
                            {expense.status === 'Waiting Approval' ? (
                              <div className="inline-flex flex-col items-center bg-slate-100/60 rounded-xl px-4 py-2">
                                <span className="text-[9px] font-black uppercase tracking-[0.15em] text-slate-500">Waiting</span>
                                <span className="text-[9px] font-black uppercase tracking-[0.15em] text-slate-500">Approval</span>
                              </div>
                            ) : expense.status === 'Approved' ? (
                              <div className="inline-flex items-center bg-emerald-50 rounded-full px-4 py-1.5">
                                <span className="text-[9px] font-black uppercase tracking-[0.15em] text-emerald-600">Approved</span>
                              </div>
                            ) : expense.status === 'Rejected' ? (
                              <div className="inline-flex items-center bg-red-50 rounded-full px-4 py-1.5">
                                <span className="text-[9px] font-black uppercase tracking-[0.15em] text-red-600">Rejected</span>
                              </div>
                            ) : (
                              <div className="inline-flex items-center bg-slate-50 rounded-full px-4 py-1.5">
                                <span className="text-[9px] font-black uppercase tracking-[0.15em] text-slate-600">{expense.status}</span>
                              </div>
                            )}
                          </td>
                          <td className="px-8 py-7 text-right">
                            <span className={`material-symbols-outlined text-slate-300 group-hover:text-primary transition-all ${expandedId === expense.id ? 'rotate-180' : ''}`}>
                              expand_more
                            </span>
                          </td>
                        </tr>

                        {/* Expanded Row */}
                        {expandedId === expense.id && (
                          <tr className="bg-slate-50/30">
                            <td className="p-0" colSpan="5">
                              <div className="px-8 py-8 border-l-4 border-primary">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                  {/* Receipt Preview */}
                                  <div className="bg-white p-8 rounded-2xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center group/receipt cursor-pointer hover:border-primary/30 transition-all">
                                    <span className="material-symbols-outlined text-5xl text-slate-200 group-hover/receipt:text-primary/30 transition-colors mb-4">
                                      image
                                    </span>
                                    <p className="font-bold text-slate-500 text-sm">Receipt Preview</p>
                                    <p className="text-[11px] text-slate-400 font-mono mt-1">
                                      {expense.receiptName || 'scanned_receipt.pdf'}
                                    </p>
                                    <button className="mt-4 text-[10px] font-black text-secondary underline uppercase tracking-tighter">
                                      View Full Document
                                    </button>
                                  </div>

                                  {/* Approval Tracker */}
                                  <div className="bg-white p-4 rounded-2xl border border-slate-200">
                                    <p className="text-[10px] uppercase font-black tracking-[0.2em] text-slate-400 mb-4">Approval Tracker</p>
                                    {/* TODO: Business logic — pass real steps from expense.steps (fetched from API) */}
                                    <ApprovalProgressTracker
                                      type={expense.approvalType || 'sequential'}
                                      steps={expense.steps || []}
                                    />
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                        )}
                      </React.Fragment>
                    ))}

                    {filteredExpenses.length === 0 && (
                      <tr>
                        <td colSpan="5" className="px-8 py-16 text-center text-slate-500 font-medium">
                          No expenses found matching the selected filter.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-6">
              {/* Pending Reimbursement */}
              <div className="bg-primary p-8 rounded-3xl shadow-2xl shadow-primary/20 relative overflow-hidden text-white">
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -mr-24 -mt-24 blur-3xl"></div>
                <div className="absolute top-0 right-0 p-4 opacity-20">
                  <span className="material-symbols-outlined text-6xl">account_balance</span>
                </div>
                <div className="relative z-10">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] mb-6 opacity-60">Pending Reimbursement</p>
                  <div className="flex flex-col gap-1 mb-10">
                    <span className="text-4xl font-black font-mono tracking-tighter">
                      {pendingAmount > 0 ? pendingAmount.toLocaleString('en-IN', { minimumFractionDigits: 2 }) : '74,210.00'}
                    </span>
                    <span className="text-[10px] font-black opacity-80 uppercase tracking-[0.2em] mt-1">Indian Rupees</span>
                  </div>
                  <div className="flex items-center gap-2.5 bg-white/10 w-max px-4 py-2 rounded-xl">
                    <span className="material-symbols-outlined text-secondary text-lg">trending_up</span>
                    <span className="text-[11px] font-bold">+12% from last month</span>
                  </div>
                </div>
              </div>

              {/* Volume by Category */}
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                <h4 className="text-[11px] uppercase font-black tracking-[0.2em] mb-8 text-primary">Top Categories</h4>
                <div className="space-y-6">
                  {[
                    { label: 'Travel',   pct: 45, color: 'bg-primary' },
                    { label: 'Meals',    pct: 30, color: 'bg-secondary' },
                    { label: 'Software', pct: 25, color: 'bg-slate-400' },
                  ].map(({ label, pct, color }) => (
                    <div key={label} className="space-y-2">
                      <div className="flex justify-between text-[13px] font-bold text-slate-800">
                        <span>{label}</span>
                        <span className="font-mono">{pct}%</span>
                      </div>
                      <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div className={`h-full ${color} rounded-full transition-all duration-1000`} style={{ width: `${pct}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Policy Card */}
              <div className="p-8 rounded-3xl bg-white border-2 border-dashed border-slate-200 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-5">
                  <span className="material-symbols-outlined text-3xl text-slate-300">menu_book</span>
                </div>
                <h4 className="font-black text-primary mb-3 text-sm uppercase tracking-[0.2em]">Policy Guide</h4>
                <p className="text-[13px] text-slate-500 leading-relaxed font-medium">
                  All expense reports exceeding <span className="font-mono font-bold">₹ 50,000</span> require a minimum of two executive approvals and original tax-compliant invoices.
                </p>
                <button 
                  onClick={() => alert("Downloading Policy Guide...")}
                  className="mt-6 text-[10px] font-black uppercase tracking-[0.2em] text-primary hover:text-primary/80 border-b-2 border-primary/20 pb-1 transition-all"
                >
                  Download Guide
                </button>
              </div>
            </aside>
          </div>

          {/* Footer */}
          <footer className="flex items-center justify-between pt-10 border-t border-slate-100 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
            <div className="flex gap-8">
              <Link to="/security" className="hover:text-primary">Security Policy</Link>
              <Link to="/compliance" className="hover:text-primary">Compliance API</Link>
              <Link to="/status" className="hover:text-primary">System Status</Link>
            </div>
            <span>© 2026 XpenseFlow Enterprise Solutions</span>
          </footer>
        </div>
      </main>

      {/* ── Mobile Navigation ───────────────────────────────────────────── */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-slate-200 flex items-center justify-around py-4 z-50">
        <Link to="/" className="flex flex-col items-center gap-1 text-primary">
          <span className="material-symbols-outlined">dashboard</span>
          <span className="text-[10px] font-bold">Home</span>
        </Link>
        <div className="px-4 -mt-10">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-primary text-white p-4 rounded-2xl shadow-xl shadow-primary/40 flex items-center justify-center"
          >
            <span className="material-symbols-outlined">add</span>
          </button>
        </div>
        <Link to="/approvals" className="flex flex-col items-center gap-1 text-slate-400">
          <span className="material-symbols-outlined">fact_check</span>
          <span className="text-[10px] font-bold">Approvals</span>
        </Link>
        <Link to="/profile" className="flex flex-col items-center gap-1 text-slate-400">
          <span className="material-symbols-outlined">person</span>
          <span className="text-[10px] font-bold">Profile</span>
        </Link>
      </nav>

      {/* ── Expense Submission Modal ────────────────────────────────────── */}
      {isModalOpen && (
        <ExpenseSubmissionModal
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleNewExpense}
        />
      )}

      {/* ── Floating Helper + ChatBot ─────────────────────────────────── */}
      <ChatBot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsChatOpen(prev => !prev)}
          className={`w-12 h-12 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all ring-1 ring-primary/5 ${
            isChatOpen ? 'bg-primary text-white' : 'bg-white text-primary'
          }`}
        >
          <span className="material-symbols-outlined">{isChatOpen ? 'close' : 'support_agent'}</span>
        </button>
      </div>

    </div>
  );
};

export default ExpenseDashboard;
