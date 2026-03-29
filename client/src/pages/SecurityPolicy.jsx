import React from 'react';
import { useNavigate } from 'react-router-dom';

const SecurityPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-background text-slate-900 font-sans p-10">
      <div className="max-w-4xl mx-auto w-full space-y-8">
        <header className="flex items-center gap-4 mb-10">
          <button onClick={() => navigate(-1)} className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-slate-400 hover:text-primary transition-colors">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight">Enterprise Security Policy</h1>
            <p className="text-slate-500 text-sm mt-1">Data compliance, cryptography protocols, and platform architecture constraints.</p>
          </div>
        </header>

        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-10 space-y-8">
          <section>
            <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2 mb-4">1. Data Encryption Standards</h2>
            <p className="text-slate-500 text-sm leading-relaxed mb-4">
              All data transmitted to and from the XpenseFlow platform is encrypted in transit using industry-standard Transport Layer Security (TLS 1.3). Static data at rest, including user identities, OCR-extracted receipts, and audit logs, are encrypted via AES-256 standard encryption keys hosted inside dedicated secure enclaves.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2 mb-4">2. Role-Based Access Controls (RBAC)</h2>
            <p className="text-slate-500 text-sm leading-relaxed mb-4">
              The application explicitly isolates permissions into three distinct tiers: Employee, Department Manager, and System Administrator. Zero-Trust architecture is applied to every network API call enforcing token validation. 
            </p>
            <ul className="list-disc pl-5 text-sm space-y-2 text-slate-500">
              <li>MFA (Multi-Factor Authentication) is mandatory for Administrator and Manager roles.</li>
              <li>SAML 2.0 / SSO integrations bypass password requirements mapped strictly to the enterprise identity provider.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2 mb-4">3. Incident Response</h2>
            <p className="text-slate-500 text-sm leading-relaxed mb-4">
              In the advent of an anomaly, XpenseFlow's SOC retains real-time automated breach prevention triggers (WAF & DDoS Mitigation). Should an explicit compromise be verified, our protocol binds to a 4-hour SLA alert parameter to immediately notify mapped IT executives and revoke all localized session tokens across the tenant instance.
            </p>
          </section>

          <div className="mt-10 pt-6 border-t border-slate-100 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
            LAST REVISED: OCTOBER 2026 • CONFIDENTIAL & PROPRIETARY
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityPolicy;
