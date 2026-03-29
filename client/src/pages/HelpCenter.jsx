import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const HelpCenter = () => {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    { q: "How do I submit a new expense?", a: "Click the '+ New Expense' button on the dashboard, fill in the details, attach your receipt, and click 'Submit'. It will be sent to your line manager." },
    { q: "What is the approval process?", a: "Most expenses require Line Manager approval. Amounts over ₹50,000 also require Finance Review." },
    { q: "How long does reimbursement take?", a: "Once fully approved, reimbursements are typically processed within 3-5 business days." },
    { q: "I lost my receipt. Can I still claim?", a: "Please contact the Finance Team directly with a valid explanation and alternative proof of purchase." }
  ];

  return (
    <div className="flex min-h-screen bg-background text-slate-900 font-sans p-10">
      <div className="max-w-4xl mx-auto w-full space-y-8">
        <header className="flex items-center gap-4 mb-10">
          <button onClick={() => navigate(-1)} className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-slate-400 hover:text-primary transition-colors">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight">Help Center</h1>
            <p className="text-slate-500 text-sm mt-1">Need assistance? We're here to help.</p>
          </div>
        </header>

        <section className="bg-primary text-white p-10 rounded-3xl shadow-lg relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-4">Contact Support</h2>
            <p className="text-white/80 max-w-lg mb-8">Our enterprise support team is available 24/7 for urgent expense requests, platform issues, and policy clarifications.</p>
            <div className="flex gap-4">
              <a href="mailto:support@xpenseflow.io?subject=Urgent%20Support%20Ticket" className="bg-white text-primary font-bold px-6 py-3 rounded-xl shadow-md hover:bg-slate-50 transition-colors inline-block text-center">Open Support Ticket</a>
              <a href="tel:+18005550199" className="bg-white/10 text-white font-bold px-6 py-3 rounded-xl hover:bg-white/20 transition-colors inline-block text-center">Call Hotline</a>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6 mt-10">Frequently Asked Questions</h3>
          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx} 
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className={`bg-white p-6 rounded-2xl border ${isOpen ? 'border-primary/30 shadow-md ring-4 ring-primary/5' : 'border-slate-100 shadow-sm hover:border-primary/20'} transition-all cursor-pointer group`}
                >
                  <div className="flex justify-between items-center">
                    <h4 className={`font-bold text-lg transition-colors ${isOpen ? 'text-primary' : 'text-slate-800 group-hover:text-primary'}`}>{faq.q}</h4>
                    <span className={`material-symbols-outlined text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>expand_more</span>
                  </div>
                  {isOpen && (
                    <p className="text-slate-500 text-sm leading-relaxed mt-4 pt-4 border-t border-slate-100 animate-in slide-in-from-top-2 fade-in duration-200">{faq.a}</p>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default HelpCenter;
