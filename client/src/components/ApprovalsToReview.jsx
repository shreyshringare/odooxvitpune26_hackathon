import React, { useState } from 'react';
import ApprovalProgressTracker from './ApprovalProgressTracker';

const ApprovalsToReview = ({ expenses = [], approveExpense, rejectExpense }) => {
  const [expandedId, setExpandedId] = useState(null);
  const [rejectingId, setRejectingId] = useState(null); // which row has the reject textarea open
  const [rejectReason, setRejectReason] = useState('');

  const pendingTotal = expenses
    .filter(e => !e.hasActed && e.status !== 'Approved' && e.status !== 'Rejected')
    .reduce((sum, e) => sum + (typeof e.amount === 'number' ? e.amount : parseFloat(e.amount || 0)), 0);
  const queueDepth = expenses.filter(e => !e.hasActed && e.status !== 'Approved' && e.status !== 'Rejected').length;
  const approvedToday = expenses.filter(e => e.status === 'Approved').length;

  return (
    <div className="w-full">
      <header className="mb-8">
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Approval Queue</h2>
        <p className="text-slate-500 text-sm mt-1">Review and validate pending expense reports and operational requests.</p>
      </header>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Pending Total</p>
          <p className="text-3xl font-mono font-bold text-primary">₹{pendingTotal.toFixed(2)}</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Queue Depth</p>
          <p className="text-3xl font-mono font-bold text-slate-800">{queueDepth}</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Approved Today</p>
          <p className="text-3xl font-mono font-bold text-[#00A09D]">{approvedToday}</p>
        </div>
      </div>

      {/* Approvals Table Container */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead className="bg-gray-50/50 border-b border-gray-100">
              <tr>
                <th className="px-6 py-4 w-12 text-center">
                  <input className="rounded border-gray-300 text-primary focus:ring-primary h-4 w-4" type="checkbox" disabled/>
                </th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-500">Employee</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-500">Description</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-500">Category</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-500">Amount</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-500">Date</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-slate-500">Status</th>
                <th className="px-6 py-4 text-right text-[10px] font-bold uppercase tracking-widest text-slate-500">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {expenses.map((expense) => {
                const hasActed = expense.hasActed || expense.status === 'Approved' || expense.status === 'Rejected';
                const isExpanded = expandedId === expense.id;

                return (
                  <React.Fragment key={expense.id}>
                    <tr 
                      className={`bg-white transition-colors cursor-pointer group ${hasActed ? 'opacity-50 pointer-events-none' : 'hover:bg-gray-50'}`}
                      onClick={() => !hasActed && setExpandedId(isExpanded ? null : expense.id)}
                    >
                      <td className="px-6 py-5 text-center align-top pt-7">
                        <input 
                          className="rounded border-gray-300 text-primary focus:ring-primary h-4 w-4" 
                          type="checkbox"
                          disabled={hasActed}
                        />
                      </td>
                      <td className="px-6 py-5 align-top">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
                            {expense.employeeInitials || 'EX'}
                          </div>
                          <div>
                            <p className="font-bold text-sm text-slate-900">{expense.employeeName}</p>
                            <p className="text-[10px] text-slate-500">{expense.employeeRole || 'Employee'}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-5 align-top">
                        <p className="text-sm font-medium text-slate-800">{expense.description}</p>
                      </td>
                      <td className="px-6 py-5 align-top">
                        <span className="inline-flex px-2 py-0.5 rounded bg-gray-100 text-[9px] font-bold text-slate-500 uppercase">
                          {expense.category}
                        </span>
                      </td>
                      <td className="px-6 py-5 align-top">
                        <p className="font-mono font-bold text-sm text-primary">
                          {expense.currency || '₹'}{typeof expense.amount === 'number' ? expense.amount.toFixed(2) : expense.amount}
                        </p>
                      </td>
                      <td className="px-6 py-5 align-top">
                        <p className="font-mono text-xs text-slate-500">{expense.date}</p>
                      </td>
                      <td className="px-6 py-5 align-top">
                          {expense.status === 'Approved' ? (
                            <span className="inline-flex px-2 py-0.5 rounded bg-green-100 text-[9px] font-bold text-green-700 uppercase">Approved</span>
                          ) : expense.status === 'Rejected' ? (
                            <span className="inline-flex px-2 py-0.5 rounded bg-red-100 text-[9px] font-bold text-red-700 uppercase">Rejected</span>
                          ) : (
                            <span className="inline-flex px-2 py-0.5 rounded bg-orange-100 text-[9px] font-bold text-orange-700 uppercase">{expense.status || 'Pending'}</span>
                          )}
                      </td>
                      <td className="px-6 py-5 text-right align-top">
                        <span className={`material-symbols-outlined text-primary/40 group-hover:text-primary transition-transform ${isExpanded ? 'rotate-180' : ''}`}>
                          keyboard_arrow_down
                        </span>
                      </td>
                    </tr>

                    {isExpanded && !hasActed && (
                      <tr>
                        <td className="p-0" colSpan="8">
                          <div className="bg-gray-50/50 p-8 border-t border-gray-100">
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 max-w-6xl">
                              {/* Receipt Preview */}
                              <div className="col-span-1 md:col-span-4 aspect-[3/4] bg-white border border-gray-200 rounded-xl overflow-hidden relative group cursor-pointer shadow-sm">
                                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50 group-hover:bg-gray-100 transition-all">
                                  <span className="material-symbols-outlined text-4xl text-slate-400 mb-2">image</span>
                                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">View Full Receipt</p>
                                </div>
                              </div>
                              
                              {/* Controls */}
                              <div className="col-span-1 md:col-span-8 space-y-8">
                                  {/* Approval Tracker */}
                                  {/* TODO: Business logic — pass real steps from expense.steps (fetched from API) */}
                                  <ApprovalProgressTracker
                                    type={expense.approvalType || 'sequential'}
                                    steps={expense.steps || []}
                                  />

                                  {/* Action Buttons */}
                                  <div className="space-y-4">
                                    <div className="flex gap-4">
                                      <button
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          // TODO: Business logic — call approveExpense(expense.id) from API
                                          approveExpense(expense.id);
                                          setExpandedId(null);
                                        }}
                                        className="flex-1 bg-primary text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 shadow-lg hover:opacity-90 transition-all"
                                      >
                                        <span className="material-symbols-outlined">check_circle</span> Approve Request
                                      </button>
                                      <button
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          setRejectingId(expense.id);
                                          setRejectReason('');
                                        }}
                                        className="flex-1 bg-white border border-gray-200 text-slate-800 py-4 rounded-xl font-bold flex items-center justify-center gap-3 shadow-sm hover:bg-red-50 hover:border-red-200 hover:text-red-600 transition-all"
                                      >
                                        <span className="material-symbols-outlined">cancel</span> Reject
                                      </button>
                                    </div>

                                    {/* Reject Comment Box — shown inline after clicking Reject */}
                                    {rejectingId === expense.id && (
                                      <div className="bg-red-50 border border-red-100 rounded-xl p-5 space-y-3">
                                        <p className="text-xs font-black text-red-600 uppercase tracking-widest">Reason for Rejection</p>
                                        <textarea
                                          value={rejectReason}
                                          onChange={(e) => setRejectReason(e.target.value)}
                                          onClick={(e) => e.stopPropagation()}
                                          placeholder="Provide a reason so the employee can resubmit correctly..."
                                          rows={3}
                                          className="w-full rounded-lg border border-red-200 bg-white px-4 py-3 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-300 resize-none"
                                        />
                                        <div className="flex gap-3 justify-end">
                                          <button
                                            onClick={(e) => { e.stopPropagation(); setRejectingId(null); }}
                                            className="px-4 py-2 text-sm font-bold text-slate-500 hover:text-slate-700 transition-colors"
                                          >
                                            Cancel
                                          </button>
                                          <button
                                            onClick={(e) => {
                                              e.stopPropagation();
                                              // TODO: Business logic — call rejectExpense(expense.id, rejectReason) from API
                                              rejectExpense(expense.id, rejectReason);
                                              setRejectingId(null);
                                              setExpandedId(null);
                                            }}
                                            className="px-5 py-2 bg-red-600 text-white text-sm font-bold rounded-lg hover:bg-red-700 transition-colors"
                                          >
                                            Confirm Rejection
                                          </button>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                );
              })}
              {expenses.length === 0 && (
                <tr>
                  <td colSpan="8" className="px-6 py-12 text-center text-slate-500 font-medium">
                    No approvals currently pending review.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ApprovalsToReview;
