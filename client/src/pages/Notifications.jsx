import React from 'react';
import { useNavigate } from 'react-router-dom';

const Notifications = () => {
  const navigate = useNavigate();

  const notificationsList = [
    { id: 1, type: 'Approved', title: 'Expense Approved', message: 'Your business lunch expense (₹1,240) was approved by your manager.', time: '2 hours ago', icon: 'check_circle', color: 'text-secondary bg-secondary/10' },
    { id: 2, type: 'Rejected', title: 'Expense Rejected', message: 'Travel expense (₹42,800) was rejected due to missing compliance forms.', time: '1 day ago', icon: 'cancel', color: 'text-red-500 bg-red-50' },
    { id: 3, type: 'Policy', title: 'New Policy Update', message: 'The Q4 employee travel policy has been updated. Please review before booking flights.', time: '3 days ago', icon: 'menu_book', color: 'text-slate-400 bg-slate-50' },
    { id: 4, type: 'Payment', title: 'Payment Processing', message: 'Reimbursement for Software License (₹14,200) has been dispatched to your bank.', time: '1 week ago', icon: 'account_balance_wallet', color: 'text-primary bg-primary/10' },
  ];

  return (
    <div className="flex min-h-screen bg-background text-slate-900 font-sans p-10">
      <div className="max-w-3xl mx-auto w-full space-y-8">
        <header className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-4">
            <button onClick={() => navigate(-1)} className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-slate-400 hover:text-primary transition-colors">
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <div>
              <h1 className="text-3xl font-black text-slate-900 tracking-tight">Updates & Alerts</h1>
              <p className="text-slate-500 text-sm mt-1">Review your recent notifications and activity.</p>
            </div>
          </div>
          <button className="text-xs font-bold text-primary hover:text-primary/80 uppercase tracking-widest bg-white px-5 py-2.5 rounded-lg shadow-sm">Mark all read</button>
        </header>

        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
          <ul className="divide-y divide-slate-50">
            {notificationsList.map(n => (
              <li key={n.id} className="p-6 hover:bg-slate-50/50 transition-colors flex gap-5 cursor-pointer group">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${n.color}`}>
                  <span className="material-symbols-outlined">{n.icon}</span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-bold text-slate-800 text-[15px] group-hover:text-primary transition-colors">{n.title}</h4>
                    <span className="text-[11px] font-mono font-medium text-slate-400">{n.time}</span>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed">{n.message}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
