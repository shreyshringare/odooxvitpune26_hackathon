import React from 'react';
import { useNavigate } from 'react-router-dom';

const SystemStatus = () => {
  const navigate = useNavigate();

  const services = [
    { name: "Global API Routing", status: "Operational", uptime: "99.99%", latency: "42ms" },
    { name: "OCR Processing Engine", status: "Operational", uptime: "99.95%", latency: "215ms" },
    { name: "Notification Services", status: "Degraded", uptime: "98.12%", latency: "800ms" },
    { name: "Identity & Auth (SSO)", status: "Operational", uptime: "100.0%", latency: "29ms" },
    { name: "Data Warehouse Vault", status: "Operational", uptime: "99.99%", latency: "105ms" }
  ];

  return (
    <div className="flex min-h-screen bg-background text-slate-900 font-sans p-10">
      <div className="max-w-4xl mx-auto w-full space-y-8">
        <header className="flex items-center gap-4 mb-10">
          <button onClick={() => navigate(-1)} className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-slate-400 hover:text-primary transition-colors">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight">System Status Dashboard</h1>
            <p className="text-slate-500 text-sm mt-1">Real-time uptime and incident reporting for platform infrastructure.</p>
          </div>
        </header>

        {/* Global Status Banner */}
        <div className="bg-emerald-500 rounded-3xl p-8 text-white shadow-lg shadow-emerald-500/20 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
          <div className="relative z-10 flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-black tracking-tight mb-2">All Systems Operational</h2>
              <p className="text-emerald-100 font-medium text-sm">Last incident reported 14 days ago. Everything is running smoothly.</p>
            </div>
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
              <span className="material-symbols-outlined text-4xl">check_circle</span>
            </div>
          </div>
        </div>

        {/* Services List */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="px-8 py-6 border-b border-slate-100 bg-slate-50/50">
            <h3 className="text-sm font-black uppercase tracking-widest text-slate-500">Infrastructure Elements</h3>
          </div>
          <div className="divide-y divide-slate-50">
            {services.map((svc) => (
              <div key={svc.name} className="p-8 flex items-center justify-between hover:bg-slate-50 transition-colors">
                <div>
                  <h4 className="font-bold text-slate-800 text-lg">{svc.name}</h4>
                  <div className="flex gap-4 mt-2">
                    <span className="text-xs font-mono text-slate-400">UPTIME: <span className="text-slate-600 font-bold">{svc.uptime}</span></span>
                    <span className="text-xs font-mono text-slate-400">LATENCY: <span className="text-slate-600 font-bold">{svc.latency}</span></span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`text-sm font-bold ${svc.status === 'Operational' ? 'text-emerald-500' : 'text-amber-500'}`}>
                    {svc.status}
                  </span>
                  <div className={`w-3 h-3 rounded-full ${svc.status === 'Operational' ? 'bg-emerald-500 shadow-[0_0_10px_2px_rgba(16,185,129,0.3)] animate-pulse' : 'bg-amber-500'}`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemStatus;
