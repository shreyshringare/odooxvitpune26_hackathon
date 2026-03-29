import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Settings = () => {
  const navigate = useNavigate();
  const [preferences, setPreferences] = useState({ emailAlerts: true, pushAlerts: false, darkMode: false, autoApprove: false });

  const toggle = (key) => setPreferences(p => ({ ...p, [key]: !p[key] }));

  return (
    <div className="flex min-h-screen bg-background text-slate-900 font-sans p-10">
      <div className="max-w-4xl mx-auto w-full space-y-8">
        <header className="flex items-center gap-4 mb-10">
          <button onClick={() => navigate(-1)} className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-slate-400 hover:text-primary transition-colors">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight">System Settings</h1>
            <p className="text-slate-500 text-sm mt-1">Manage global preferences and automation rules.</p>
          </div>
        </header>

        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-10">
          <div className="space-y-8">
            <div className="flex items-center justify-between border-b border-slate-50 pb-8">
              <div>
                <h4 className="font-bold text-slate-800 text-lg">Push Notifications</h4>
                <p className="text-sm text-slate-500 mt-1">Receive alerts on your mobile device for pending approvals.</p>
              </div>
              <button onClick={() => toggle('pushAlerts')} className={`w-14 h-8 rounded-full p-1 transition-colors ${preferences.pushAlerts ? 'bg-primary' : 'bg-slate-200'}`}>
                <div className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform ${preferences.pushAlerts ? 'translate-x-6' : ''}`}></div>
              </button>
            </div>
            <div className="flex items-center justify-between border-b border-slate-50 pb-8">
              <div>
                <h4 className="font-bold text-slate-800 text-lg">Email Digest</h4>
                <p className="text-sm text-slate-500 mt-1">Daily summary of all team expenses submitted.</p>
              </div>
              <button onClick={() => toggle('emailAlerts')} className={`w-14 h-8 rounded-full p-1 transition-colors ${preferences.emailAlerts ? 'bg-primary' : 'bg-slate-200'}`}>
                <div className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform ${preferences.emailAlerts ? 'translate-x-6' : ''}`}></div>
              </button>
            </div>
            <div className="flex items-center justify-between border-b border-slate-50 pb-8">
              <div>
                <h4 className="font-bold text-slate-800 text-lg">Dark Mode Appearance</h4>
                <p className="text-sm text-slate-500 mt-1">Switch to a darker theme for the dashboard interface.</p>
              </div>
              <button onClick={() => toggle('darkMode')} className={`w-14 h-8 rounded-full p-1 transition-colors ${preferences.darkMode ? 'bg-primary' : 'bg-slate-200'}`}>
                <div className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform ${preferences.darkMode ? 'translate-x-6' : ''}`}></div>
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-bold text-slate-800 text-lg">Auto-Approve Under ₹1000</h4>
                <p className="text-sm text-slate-500 mt-1">Automatically approve petty cash requests bypassing standard workflow.</p>
              </div>
              <button onClick={() => toggle('autoApprove')} className={`w-14 h-8 rounded-full p-1 transition-colors ${preferences.autoApprove ? 'bg-primary' : 'bg-slate-200'}`}>
                <div className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform ${preferences.autoApprove ? 'translate-x-6' : ''}`}></div>
              </button>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-100 flex justify-end gap-4">
            <button onClick={() => navigate(-1)} className="px-6 py-3 font-bold text-slate-500 hover:text-slate-800 transition-colors">Cancel</button>
            <button onClick={() => navigate(-1)} className="px-8 py-3 bg-primary text-white font-bold rounded-xl shadow-lg hover:bg-primary/90 transition-all">Save Changes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
