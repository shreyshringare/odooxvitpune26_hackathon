import React from 'react';

const ApprovalProgressTracker = ({ type = 'sequential', steps = [] }) => {
  // Mode 1: Sequential
  if (type === 'sequential') {
    return (
      <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm w-full">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-50">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00A09D]"></span>
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#714B67]">Sequential Mode</h3>
          </div>
          <span className="text-[10px] bg-slate-50 px-3 py-1.5 rounded-lg font-mono text-slate-500 font-bold">LOGIC: LINEAR_CHAIN</span>
        </div>
        <div className="flex items-center w-full max-w-2xl mx-auto justify-between relative py-6">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 z-0 rounded-full"></div>
          <div className="absolute top-1/2 left-0 w-1/2 h-1 bg-[#00A09D] -translate-y-1/2 z-0 rounded-full"></div>
          
          {(steps.length > 0 ? steps : [
            { title: 'Line Manager', status: 'approved' },
            { title: 'Finance Review', status: 'pending' },
            { title: 'Executive Sign-off', status: 'queued' }
          ]).map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center gap-3">
              <div className="relative group">
                <div className={`w-14 h-14 rounded-full border-4 border-white shadow-md flex items-center justify-center font-bold text-lg
                  ${step.status === 'approved' ? 'bg-[#714B67] text-white' : step.status === 'pending' ? 'bg-[#00A09D] text-white' : 'bg-slate-200 text-slate-400 opacity-30 grayscale'}
                `}>
                  {idx + 1}
                </div>
                {step.status === 'approved' && (
                  <div className="absolute -bottom-1 -right-1 bg-[#00A09D] text-white rounded-full p-1 shadow-md flex items-center justify-center border-2 border-white">
                    <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                  </div>
                )}
                {step.status === 'pending' && (
                  <div className="absolute -bottom-1 -right-1 bg-amber-500 text-white rounded-full p-1 shadow-md flex items-center justify-center border-2 border-white animate-pulse block">
                    <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>hourglass_top</span>
                  </div>
                )}
                {step.status === 'queued' && (
                  <div className="absolute -bottom-1 -right-1 bg-slate-400 text-white rounded-full p-1 shadow-md flex items-center justify-center border-2 border-white">
                    <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>lock</span>
                  </div>
                )}
              </div>
              <span className={`text-[10px] font-black uppercase tracking-tighter ${step.status === 'queued' ? 'text-slate-400' : 'text-[#714B67]'}`}>
                {step.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Mode 2: Percentage
  if (type === 'percentage') {
    const data = steps[0] || { current: 60, target: 75, title: 'Stakeholder Alignment' };
    return (
      <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm w-full">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00A09D]"></span>
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#714B67]">Percentage Mode</h3>
          </div>
          <span className="text-[10px] bg-slate-50 px-3 py-1.5 rounded-lg font-mono text-slate-500 font-bold">LOGIC: QUORUM_VOLUME</span>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-end md:items-center mb-6">
          <div>
            <span className="text-4xl font-black text-[#714B67] tracking-tighter">{data.current}%</span>
            <span className="text-slate-400 font-bold ml-2 text-sm uppercase">{data.title}</span>
          </div>
          <div className="text-right">
            <span className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-widest">Threshold Target</span>
            <div className="text-lg text-red-600 font-bold tracking-tight font-mono">{data.target}.00%</div>
          </div>
        </div>
        <div className="relative h-4 w-full bg-slate-100 rounded-full mb-6">
          <div className="h-full bg-[#714B67] rounded-full shadow-inner" style={{ width: `${data.current}%` }}></div>
          <div className="absolute top-1/2 -translate-y-1/2 h-8 w-1 bg-red-600 z-20" style={{ left: `${data.target}%` }}>
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-bold text-red-600 uppercase tracking-widest bg-white px-1">
              Gate Threshold
            </div>
          </div>
        </div>
        <div className="flex gap-6 border-t border-slate-50 pt-4">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#714B67]"></span>
            <span className="text-[11px] text-slate-500 font-bold uppercase">Approved Quorum</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-slate-100 border border-slate-200"></span>
            <span className="text-[11px] text-slate-500 font-bold uppercase">Pending Votes</span>
          </div>
        </div>
      </div>
    );
  }

  // Mode 3: Specific
  if (type === 'specific') {
    const data = steps[0] || { name: 'Rajesh (CFO)', role: 'Mandatory', text: 'The final fiscal validation requires manual verification from the Chief Financial Officer before funds release.', status: 'Pending' };
    return (
      <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm w-full">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00A09D]"></span>
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#714B67]">Specific Approver Mode</h3>
          </div>
          <span className="text-[10px] bg-slate-50 px-3 py-1.5 rounded-lg font-mono text-slate-500 font-bold">LOGIC: KEY_ROLE_MANDATE</span>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-amber-50/50 border border-amber-200/50 p-6 rounded-2xl">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-amber-500 flex items-center justify-center text-white shadow-lg">
              <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h4 className="text-lg font-black text-[#714B67]">{data.name}</h4>
                <span className="bg-amber-100 text-amber-700 text-[9px] px-2 py-0.5 rounded-full font-black uppercase tracking-widest">{data.role}</span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed max-w-lg">{data.text}</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="bg-white border border-amber-200 text-amber-700 px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 shadow-sm">
              <span className="material-symbols-outlined text-lg opacity-80">hourglass_empty</span>
              Awaiting Signature
            </div>
            <span className="text-[10px] font-mono text-slate-400 font-medium">SLA EXPIRES IN 24H</span>
          </div>
        </div>
      </div>
    );
  }

  // Mode 4: Hybrid
  if (type === 'hybrid') {
    return (
      <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm relative overflow-hidden w-full">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00A09D]"></span>
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#714B67]">Hybrid Mode</h3>
          </div>
          <span className="text-[10px] bg-slate-50 px-3 py-1.5 rounded-lg font-mono text-slate-500 font-bold">LOGIC: CONDITIONAL_OR</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative items-stretch mb-8">
          {/* OR Badge */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white text-[#714B67] text-xs font-black border-2 border-slate-50 shadow-md">
              OR
          </div>
          
          {/* Condition A */}
          <div className="bg-slate-50/50 p-6 rounded-2xl border border-slate-200/40 flex flex-col justify-center">
            <h5 className="text-[11px] font-black text-slate-400 mb-4 uppercase tracking-wider">Condition A: Volume</h5>
            <div className="space-y-3">
              <div className="flex justify-between items-baseline">
                <span className="text-2xl font-black text-[#00A09D] font-mono">85%</span>
                <span className="text-[9px] text-[#00A09D] font-black uppercase px-2 py-0.5 bg-teal-50 rounded-md">Validated</span>
              </div>
              <div className="h-2 w-full bg-white rounded-full overflow-hidden border border-slate-200">
                <div className="h-full bg-[#00A09D]" style={{ width: '85%' }}></div>
              </div>
              <p className="text-[11px] text-slate-400 font-medium italic">Automated pass-through threshold exceeded.</p>
            </div>
          </div>
          
          {/* Condition B */}
          <div className="bg-slate-50/50 p-6 rounded-2xl border border-slate-200/40 flex flex-col justify-center">
            <h5 className="text-[11px] font-black text-slate-400 mb-4 uppercase tracking-wider">Condition B: CFO Approval</h5>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200/60 flex items-center justify-center">
                <span className="material-symbols-outlined text-[#714B67]">shield_person</span>
              </div>
              <div>
                <div className="text-sm font-black text-[#714B67] tracking-tight">Rajesh (CFO)</div>
                <div className="text-[9px] font-mono text-slate-400 uppercase font-bold">Override Power</div>
              </div>
            </div>
            <div className="pt-3 border-t border-slate-200/40">
              <span className="text-[10px] font-black text-amber-600 uppercase">Status: Pending</span>
            </div>
          </div>
        </div>
        <div className="bg-teal-50/80 p-5 rounded-xl flex items-start gap-3 border border-teal-100">
          <span className="material-symbols-outlined text-[#00A09D] text-xl">info</span>
          <p className="text-xs text-[#006a68] font-medium leading-relaxed">
              This request follows a <strong>Hybrid Logic Pattern</strong>. Approval is granted if 75%+ quorum is reached OR if manual override is provided. 
              <span className="underline decoration-[#00A09D]/30 ml-1">Current status: System approved via Condition A.</span>
          </p>
        </div>
      </div>
    );
  }

  return null;
};

export default ApprovalProgressTracker;
