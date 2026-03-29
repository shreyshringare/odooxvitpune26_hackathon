// ─── DEMO MODE ───────────────────────────────────────────────────────────────
const DEMO_MODE = true;

// ─── STATE ────────────────────────────────────────────────────────────────────
let allExpenses = [];
let expandedId  = null;
let rejectingId = null;
let selectedIds = new Set();

// ─── DATA LOADING ─────────────────────────────────────────────────────────────
async function loadData() {
  if (DEMO_MODE) {
    const res = await fetch('../data/fixtures/mock_cache.json');
    const json = await res.json();
    // Show only expenses that need approval (manager view)
    return json.expenses.filter(e => e.status === 'Waiting Approval' || e.status === 'Submitted');
  } else {
    // TODO: Business logic — fetch only expenses pending THIS manager's approval
    // const res = await fetch('/api/expenses?status=pending&assignedTo=me', { headers: { Authorization: `Bearer ${getToken()}` } });
    // return res.json();
  }
}

// ─── INIT ─────────────────────────────────────────────────────────────────────
async function init() {
  allExpenses = await loadData();
  renderSummaryCards();
  renderTable();
  document.getElementById('searchInput').addEventListener('input', e => renderTable(e.target.value.toLowerCase()));
}

// ─── SUMMARY CARDS ────────────────────────────────────────────────────────────
function renderSummaryCards() {
  const pending   = allExpenses.filter(e => !e.hasActed);
  const pendingAmt= pending.reduce((s, e) => s + e.amount, 0);
  const approved  = allExpenses.filter(e => e.status === 'Approved').length;

  document.getElementById('summaryCards').innerHTML = `
    <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
      <p class="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Pending Total</p>
      <p class="text-3xl font-mono font-bold text-primary">₹${fmt(pendingAmt)}</p>
    </div>
    <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
      <p class="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Queue Depth</p>
      <p class="text-3xl font-mono font-bold text-slate-800">${pending.length}</p>
    </div>
    <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
      <p class="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Approved Today</p>
      <p class="text-3xl font-mono font-bold text-secondary">${approved}</p>
    </div>`;
}

// ─── TABLE ────────────────────────────────────────────────────────────────────
function renderTable(search = '') {
  let list = allExpenses;
  if (search) list = list.filter(e =>
    e.description.toLowerCase().includes(search) ||
    e.employeeName.toLowerCase().includes(search) ||
    e.category.toLowerCase().includes(search)
  );

  if (!list.length) {
    document.getElementById('approvalsTableBody').innerHTML =
      `<tr><td colspan="8" class="px-8 py-16 text-center text-slate-400 font-medium">No approvals pending.</td></tr>`;
    return;
  }

  document.getElementById('approvalsTableBody').innerHTML = list.map(e => {
    const acted   = e.hasActed || e.status === 'Approved' || e.status === 'Rejected';
    const isOpen  = expandedId === e.id;
    const checked = selectedIds.has(e.id);

    return `
      <tr class="group ${acted ? 'opacity-50 pointer-events-none' : 'hover:bg-slate-50/80 cursor-pointer'} transition-colors"
          onclick="toggleExpand('${e.id}', event)">
        <td class="px-6 py-5 text-center" onclick="event.stopPropagation()">
          <input type="checkbox" ${checked?'checked':''} ${acted?'disabled':''} onchange="toggleSelect('${e.id}', this)"
            class="rounded border-gray-300 text-primary focus:ring-primary h-4 w-4"/>
        </td>
        <td class="px-6 py-5">
          <div class="flex items-center gap-3">
            <div class="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary font-black text-xs flex-shrink-0">
              ${e.employeeInitials}
            </div>
            <div>
              <p class="font-bold text-sm text-slate-800">${e.employeeName}</p>
              <p class="text-[10px] text-slate-400">${e.employeeRole}</p>
            </div>
          </div>
        </td>
        <td class="px-6 py-5">
          <p class="text-sm font-medium text-slate-800 line-clamp-1">${e.description}</p>
          <p class="text-[10px] font-mono text-slate-400">${e.id}</p>
        </td>
        <td class="px-6 py-5">
          <span class="inline-flex px-2.5 py-1 rounded-full bg-secondary/10 text-[9px] font-black text-secondary uppercase tracking-wider">${e.category}</span>
        </td>
        <td class="px-6 py-5 text-right">
          <p class="font-mono font-bold text-sm text-primary">₹${fmt(e.amount)}</p>
          ${e.localAmount ? `<p class="font-mono text-[10px] text-slate-400">${e.localAmount}</p>` : ''}
        </td>
        <td class="px-6 py-5"><p class="font-mono text-xs text-slate-500">${fmtDate(e.date)}</p></td>
        <td class="px-6 py-5 text-center">${statusBadge(e.status)}</td>
        <td class="px-6 py-5 text-right">
          <span class="material-symbols-outlined text-slate-300 group-hover:text-primary transition-all" style="transform:rotate(${isOpen?'180deg':'0deg'});transition:transform .2s">expand_more</span>
        </td>
      </tr>
      ${isOpen && !acted ? expandedRow(e) : ''}`;
  }).join('');

  // Show/hide bulk approve button
  document.getElementById('bulkApproveBtn').classList.toggle('hidden', selectedIds.size === 0);
}

function toggleExpand(id, e) {
  if (e && e.target.type === 'checkbox') return;
  expandedId = expandedId === id ? null : id;
  renderTable(document.getElementById('searchInput').value.toLowerCase());
}

function expandedRow(e) {
  return `
    <tr>
      <td colspan="8" class="p-0">
        <div class="bg-slate-50/50 px-8 py-8 border-l-4 border-primary border-t border-slate-100">
          <div class="grid grid-cols-1 md:grid-cols-12 gap-8 max-w-5xl">
            <!-- Receipt -->
            <div class="md:col-span-4">
              <div class="aspect-[3/4] bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col items-center justify-center cursor-pointer hover:bg-slate-50 transition-all shadow-sm">
                <span class="material-symbols-outlined text-5xl text-slate-300 mb-2">image</span>
                <p class="text-[10px] font-bold uppercase tracking-widest text-slate-400">View Full Receipt</p>
                <p class="text-[10px] font-mono text-slate-300 mt-1">${e.receiptName || 'No receipt'}</p>
              </div>
            </div>
            <!-- Tracker + Actions -->
            <div class="md:col-span-8 space-y-6">
              <div class="bg-white p-6 rounded-2xl border border-slate-200">
                <p class="text-[10px] uppercase font-black tracking-[0.2em] text-slate-400 mb-4">Approval Tracker</p>
                ${renderApprovalTracker(e.approvalType, e.steps)}
              </div>
              <!-- Approve / Reject -->
              <div class="flex gap-4">
                <button onclick="approveExpense('${e.id}', event)"
                  class="flex-1 bg-primary text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg hover:opacity-90 transition-all">
                  <span class="material-symbols-outlined">check_circle</span>Approve Request
                </button>
                <button onclick="openRejectModal('${e.id}', event)"
                  class="flex-1 bg-white border border-slate-200 text-slate-700 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-red-50 hover:border-red-200 hover:text-red-600 transition-all">
                  <span class="material-symbols-outlined">cancel</span>Reject
                </button>
              </div>
              ${e.remarks ? `<div class="bg-amber-50 border border-amber-100 rounded-xl px-5 py-3"><p class="text-xs font-bold text-amber-700">Remarks:</p><p class="text-xs text-amber-900 mt-1">${e.remarks}</p></div>` : ''}
            </div>
          </div>
        </div>
      </td>
    </tr>`;
}

// ─── APPROVAL ACTIONS ─────────────────────────────────────────────────────────
function approveExpense(id, event) {
  if (event) event.stopPropagation();
  // TODO: Business logic — POST /api/expenses/:id/approve with auth header
  const exp = allExpenses.find(e => e.id === id);
  if (exp) { exp.status = 'Approved'; exp.hasActed = true; }
  expandedId = null;
  selectedIds.delete(id);
  renderSummaryCards();
  renderTable();
}

function openRejectModal(id, event) {
  if (event) event.stopPropagation();
  rejectingId = id;
  document.getElementById('rejectReason').value = '';
  document.getElementById('rejectModal').classList.remove('hidden');
}

function closeRejectModal() {
  rejectingId = null;
  document.getElementById('rejectModal').classList.add('hidden');
}

function confirmReject() {
  const reason = document.getElementById('rejectReason').value.trim();
  if (!reason) { document.getElementById('rejectReason').focus(); return; }
  // TODO: Business logic — POST /api/expenses/:id/reject with { reason } + auth header
  const exp = allExpenses.find(e => e.id === rejectingId);
  if (exp) { exp.status = 'Rejected'; exp.hasActed = true; exp.rejectReason = reason; }
  closeRejectModal();
  expandedId = null;
  selectedIds.delete(rejectingId);
  renderSummaryCards();
  renderTable();
}

// ─── BULK ACTIONS ─────────────────────────────────────────────────────────────
function toggleSelectAll(checkbox) {
  const pending = allExpenses.filter(e => !e.hasActed && e.status !== 'Approved' && e.status !== 'Rejected');
  if (checkbox.checked) { pending.forEach(e => selectedIds.add(e.id)); }
  else { selectedIds.clear(); }
  renderTable();
}

function toggleSelect(id, checkbox) {
  if (checkbox.checked) selectedIds.add(id);
  else selectedIds.delete(id);
  renderTable();
}

function bulkApprove() {
  // TODO: Business logic — POST /api/expenses/bulk-approve with { ids: [...] }
  selectedIds.forEach(id => {
    const exp = allExpenses.find(e => e.id === id);
    if (exp) { exp.status = 'Approved'; exp.hasActed = true; }
  });
  selectedIds.clear();
  renderSummaryCards();
  renderTable();
}

// ─── APPROVAL TRACKER (shared component) ─────────────────────────────────────
function renderApprovalTracker(type, steps) {
  if (!steps || steps.length === 0)
    return `<p class="text-xs text-slate-400 italic text-center py-4">No approval trail yet.</p>`;

  if (type === 'sequential') {
    const pct = Math.round((steps.filter(s => s.status === 'approved').length / steps.length) * 100);
    return `
      <div class="relative py-4">
        <div class="absolute top-[52px] left-8 right-8 h-1 bg-slate-100 rounded-full z-0"></div>
        <div class="absolute top-[52px] left-8 h-1 bg-secondary rounded-full z-0" style="width:${pct}%"></div>
        <div class="flex justify-between relative z-10">
          ${steps.map((s, i) => {
            const bg = s.status === 'approved' ? 'bg-primary text-white' : s.status === 'pending' ? 'bg-secondary text-white' : 'bg-slate-200 text-slate-400 opacity-40';
            const badge = s.status === 'approved'
              ? `<div class="absolute -bottom-1 -right-1 bg-secondary rounded-full p-0.5 border-2 border-white"><span class="material-symbols-outlined text-white" style="font-size:10px;font-variation-settings:'FILL' 1">check</span></div>`
              : s.status === 'pending'
              ? `<div class="absolute -bottom-1 -right-1 bg-amber-500 rounded-full p-0.5 border-2 border-white animate-pulse"><span class="material-symbols-outlined text-white" style="font-size:10px;font-variation-settings:'FILL' 1">hourglass_top</span></div>`
              : `<div class="absolute -bottom-1 -right-1 bg-slate-400 rounded-full p-0.5 border-2 border-white"><span class="material-symbols-outlined text-white" style="font-size:10px;font-variation-settings:'FILL' 1">lock</span></div>`;
            const sub = s.actor ? `<span class="text-[8px] text-slate-400 font-mono block text-center mt-0.5">${s.actor}</span>` : '';
            return `
              <div class="flex flex-col items-center gap-2 w-28">
                <div class="relative w-12 h-12 rounded-full ${bg} flex items-center justify-center font-bold shadow-md border-4 border-white">${i+1}${badge}</div>
                <span class="text-[9px] font-black uppercase tracking-tight text-center ${s.status==='queued'?'text-slate-400':'text-primary'}">${s.title}</span>
                ${sub}
              </div>`;
          }).join('')}
        </div>
      </div>`;
  }

  if (type === 'percentage') {
    const d = steps[0];
    return `
      <div>
        <div class="flex justify-between items-end mb-3">
          <span class="text-3xl font-black text-primary font-mono">${d.current}%</span>
          <span class="text-xs font-bold text-red-500 font-mono">Gate: ${d.target}%</span>
        </div>
        <div class="relative h-3 bg-slate-100 rounded-full mb-2">
          <div class="h-full bg-primary rounded-full" style="width:${d.current}%"></div>
          <div class="absolute top-1/2 -translate-y-1/2 h-6 w-0.5 bg-red-500" style="left:${d.target}%"></div>
        </div>
        <p class="text-[10px] text-slate-400">${d.title}</p>
      </div>`;
  }

  if (type === 'specific') {
    const d = steps[0];
    return `
      <div class="flex items-center gap-4 bg-amber-50 border border-amber-200/50 p-4 rounded-xl">
        <div class="w-12 h-12 rounded-xl bg-amber-500 flex items-center justify-center text-white flex-shrink-0">
          <span class="material-symbols-outlined" style="font-variation-settings:'FILL' 1">star</span>
        </div>
        <div class="flex-1">
          <div class="flex items-center gap-2 mb-1">
            <span class="font-black text-primary text-sm">${d.name}</span>
            <span class="bg-amber-100 text-amber-700 text-[9px] px-2 py-0.5 rounded-full font-black uppercase">${d.role}</span>
          </div>
          <p class="text-[11px] text-slate-500">${d.text}</p>
        </div>
        <span class="text-[9px] font-black text-amber-600 uppercase whitespace-nowrap">${d.status}<br/>${d.sla?`SLA: ${d.sla}`:''}</span>
      </div>`;
  }

  if (type === 'hybrid') {
    return `
      <div class="grid grid-cols-2 gap-3 relative">
        <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white rounded-full border-2 border-slate-100 flex items-center justify-center text-[10px] font-black text-primary shadow">OR</div>
        <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
          <p class="text-[9px] font-black text-slate-400 uppercase mb-2">Volume Quorum</p>
          <span class="text-xl font-black text-secondary font-mono">85%</span>
          <div class="h-1.5 w-full bg-white rounded-full mt-2 border border-slate-200">
            <div class="h-full bg-secondary rounded-full" style="width:85%"></div>
          </div>
          <span class="text-[9px] font-black text-secondary mt-1 block">Validated</span>
        </div>
        <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
          <p class="text-[9px] font-black text-slate-400 uppercase mb-2">CFO Override</p>
          <div class="flex items-center gap-1.5">
            <span class="material-symbols-outlined text-primary text-sm">shield_person</span>
            <span class="text-xs font-black text-primary">Rajesh (CFO)</span>
          </div>
          <span class="text-[9px] font-black text-amber-600 mt-1 block uppercase">Pending</span>
        </div>
      </div>`;
  }

  return '';
}

// ─── HELPERS ──────────────────────────────────────────────────────────────────
function fmt(n) { return Number(n).toLocaleString('en-IN', { minimumFractionDigits: 2 }); }
function fmtDate(d) {
  if (!d) return '—';
  try { return new Date(d).toLocaleDateString('en-IN', { day:'2-digit', month:'short', year:'numeric' }); }
  catch { return d; }
}

function statusBadge(s) {
  const map = {
    'Waiting Approval': `<span class="inline-flex px-3 py-1 rounded-xl bg-slate-100 text-[9px] font-black text-slate-500 uppercase">Waiting</span>`,
    'Submitted':        `<span class="inline-flex px-3 py-1 rounded-full bg-blue-50 text-[9px] font-black text-blue-600 uppercase">Submitted</span>`,
    'Approved':         `<span class="inline-flex px-3 py-1 rounded-full bg-emerald-50 text-[9px] font-black text-emerald-600 uppercase">Approved</span>`,
    'Rejected':         `<span class="inline-flex px-3 py-1 rounded-full bg-red-50 text-[9px] font-black text-red-600 uppercase">Rejected</span>`,
  };
  return map[s] || `<span class="inline-flex px-3 py-1 rounded-full bg-slate-50 text-[9px] font-black text-slate-600 uppercase">${s}</span>`;
}

// ─── BOOT ─────────────────────────────────────────────────────────────────────
init();
