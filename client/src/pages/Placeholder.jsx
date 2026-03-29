import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Placeholder = ({ title = "Feature Coming Soon" }) => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-background text-slate-900 font-sans items-center justify-center p-6">
      <div className="text-center max-w-md bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
          <span className="material-symbols-outlined text-4xl">construction</span>
        </div>
        <h1 className="text-2xl font-black text-slate-900 mb-2">{title}</h1>
        <p className="text-slate-500 text-sm mb-8 leading-relaxed">
          This module is currently under active development. Your engineering team will connect the business logic and API integrations here soon.
        </p>
        <button 
          onClick={() => navigate(-1)}
          className="bg-primary hover:bg-primary/90 text-white font-bold py-3.5 px-8 rounded-xl shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 w-full"
        >
          <span className="material-symbols-outlined">arrow_back</span>
          Go Back
        </button>
      </div>
    </div>
  );
};

export default Placeholder;
