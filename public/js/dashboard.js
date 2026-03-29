// ─── DEMO MODE ───────────────────────────────────────────────────────────────
// Set to false on integration day and replace JSON reads with real fetch calls.
const DEMO_MODE = true;

// ─── STATE ───────────────────────────────────────────────────────────────────
let allExpenses = [];
let activeFilter = 'All';
let expandedId = null;

// ─── DATA LOADING ─────────────────────────────────────────────────────────────
async function loadData() {
  if (DEMO_MODE) {
    const res = await fetch('../data/fixtures/mock_cache.json');
    const json = await res.json();
    return json.expenses;
  } else {
    // TODO: Business logic — replace with real API call
    // const res = await fetch('/api/expenses', { headers: { Authorization: `Bearer ${getToken()}` } });
    // return res.json();
  }
}

// ─── INIT ─────────────────────────────────────────────────────────────────────
async function init() {
  allExpenses = await loadData();
  renderStats();
  renderPipeline();
  renderTable();
  renderSidebar();

  document.getElementById('searchInput').addEventListener('input', (e) => {
    renderTable(e.target.value.toLowerCase());
  });
}

// ─── STATS CARDS ──────────────────────────────────────────────────────────────
function renderStats() {
  const total    = allExpenses.reduce((s, e) => s + e.amount, 0);
  const pending  = allExpenses.filter(e => e.status === 'Waiting Approval' || e.status === 'Submitted').reduce((s, e) => s + e.amount, 0);
  const approved = allExpenses.filter(e => e.status === 'Approved').reduce((s, e) => s + e.amount, 0);

  document.getElementById('statsCards').innerHTML = `
    <div class="bg-white border border-slate-200 p-5 rounded-xl flex flex-col gap-3 shadow-sm">
      <div class="flex justify-between items-center">
        <span class="material-symbols-outlined text-slate-400">account_balance_wallet</span>
        <span class="font-mono font-bold text-lg">₹${fmt(total)}</span>
      </div>
      <span class="text-sm font-bold text-slate-500 uppercase tracking-wider">Total Spend</span>
    </div>
    <div class="bg-white border border-slate-200 p-5 rounded-xl flex flex-col gap-3 shadow-sm border-b-4 border-primary ring-1 ring-primary/20">
      <div class="flex justify-between items-center">
        <span class="material-symbols-outlined text-primary" style="font-variation-settings:'FILL' 1">schedule</span>
        <span class="font-mono font-bold text-lg text-primary">₹${fmt(pending)}</span>
      </div>
      <span class="text-sm font-bold text-primary uppercase tracking-wider">Pending Approval</span>
    </div>
    <div class="bg-white border border-slate-200 p-5 rounded-xl flex flex-col gap-3 shadow-sm">
      <div class="flex justify-between items-center">
        <span class="material-symbols-outlined text-secondary">check_circle</span>
        <span class="font-mono font-bold text-lg text-secondary">₹${fmt(approved)}</span>
      </div>
      <span class="text-sm font-bold text-slate-500 uppercase tracking-wider">Approved</span>
    </div>
  `;
}

// ─── STATUS PIPELINE ──────────────────────────────────────────────────────────
const STATUSES = [
  { id: 'Draft',            label: 'Draft',     icon: 'draft',        color: 'primary', activeBorder: 'border-primary ring-primary/10' },
  { id: 'Submitted',        label: 'Submitted', icon: 'send',         color: 'primary', activeBorder: 'border-primary ring-primary/10' },
  { id: 'Waiting Approval', label: 'Waiting',   icon: 'schedule',     color: 'primary', activeBorder: 'border-primary ring-primary/10' },
  { id: 'Approved',         label: 'Approved',  icon: 'check_circle', color: 'secondary', activeBorder: 'border-secondary ring-secondary/10' },
  { id: 'Rejected',         label: 'Rejected',  icon: 'cancel',       color: 'red-500', activeBorder: 'border-red-500 ring-red-500/10' },
];

function renderPipeline() {
  document.getElementById('pipeline').innerHTML = STATUSES.map(s => {
    const count = allExpenses.filter(e => e.status === s.id).length;
    const isActive = activeFilter === s.id;
    const borderClass = isActive ? `border-2 ring-4 ${s.activeBorder}` : 'border border-slate-200 hover:border-primary/20';
    const textClass = isActive ? `text-${s.color}` : 'text-slate-700';
    const iconClass = isActive ? `text-${s.color}` : 'text-slate-400';
    return `
      <button onclick="setFilter('${s.id}')"
        class="flex-1 min-w-[180px] p-7 bg-white rounded-2xl shadow-sm text-left group transition-all ${borderClass}">
        <div class="flex justify-between items-start mb-5">
          <span class="material-symbols-outlined transition-colors ${iconClass}">${s.icon}</span>
          <span class="font-mono text-sm font-bold text-${s.color}">${String(count).padStart(2,'0')}</span>
        </div>
        <span class="font-bold text-lg ${textClass}">${s.label}</span>
      </button>`;
  }).join('');
}

function setFilter(id) {
  activeFilter = activeFilter === id ? 'All' : id;
  expandedId = null;
  renderPipeline();
  renderTable();
}

// ─── EXPENSE TABLE ────────────────────────────────────────────────────────────
function renderTable(search = '') {
  let list = allExpenses;
  if (activeFilter !== 'All') list = list.filter(e => e.status === activeFilter);
  if (search) list = list.filter(e =>
    e.description.toLowerCase().includes(search) ||
    e.category.toLowerCase().includes(search) ||
    e.id.toLowerCase().includes(search)
  );

  if (!list.length) {
    document.getElementById('expenseTableBody').innerHTML = `
      <tr><td colspan="5" class="px-8 py-16 text-center text-slate-400 font-medium">No expenses found.</td></tr>`;
    return;
  }

  document.getElementById('expenseTableBody').innerHTML = list.map(e => `
    <tr class="group hover:bg-slate-50/80 transition-colors cursor-pointer" onclick="toggleExpand('${e.id}')">
      <td class="px-8 py-7">
        <div class="flex flex-col">
          <span class="font-bold text-slate-800 text-[15px] group-hover:text-primary transition-colors">${e.description}</span>
          <span class="text-[11px] text-slate-400 font-mono mt-1.5 uppercase tracking-wider">ID: ${e.id}</span>
        </div>
      </td>
      <td class="px-8 py-7">
        <div class="flex flex-col">
          <span class="text-[14px] font-bold text-slate-700">${fmtDate(e.date)}</span>
          <span class="text-[9px] font-black text-secondary bg-secondary/10 px-2.5 py-1 rounded-full mt-2 w-max uppercase tracking-wider">${e.category}</span>
        </div>
      </td>
      <td class="px-8 py-7 text-right">
        <div class="flex flex-col items-end">
          <div class="flex items-baseline gap-1.5">
            <span class="font-mono font-bold text-slate-900 text-[17px]">${fmt(e.amount)}</span>
            <span class="font-mono font-bold text-slate-400 text-xs uppercase">${e.currency}</span>
          </div>
          ${e.localAmount ? `<span class="font-mono text-[11px] text-slate-400 mt-1">(${e.localAmount})</span>` : ''}
        </div>
      </td>
      <td class="px-8 py-7 text-center">${statusBadge(e.status)}</td>
      <td class="px-8 py-7 text-right">
        <span class="material-symbols-outlined text-slate-300 group-hover:text-primary transition-all ${expandedId === e.id ? 'rotate-180' : ''}" style="transition:transform .2s">expand_more</span>
      </td>
    </tr>
    ${expandedId === e.id ? expandedRow(e) : ''}
  `).join('');
}

function toggleExpand(id) {
  expandedId = expandedId === id ? null : id;
  renderTable(document.getElementById('searchInput').value.toLowerCase());
}

function expandedRow(e) {
  return `
    <tr class="bg-slate-50/30">
      <td colspan="5" class="p-0">
        <div class="px-8 py-8 border-l-4 border-primary">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Receipt Preview -->
            <div class="bg-white p-8 rounded-2xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center min-h-[160px] cursor-pointer hover:border-primary/30 transition-all group/r">
              <span class="material-symbols-outlined text-5xl text-slate-200 group-hover/r:text-primary/30 transition-colors mb-3">image</span>
              <p class="font-bold text-slate-500 text-sm">Receipt Preview</p>
              <p class="text-[11px] text-slate-400 font-mono mt-1">${e.receiptName || 'No receipt uploaded'}</p>
            </div>
            <!-- Approval Tracker -->
            <div class="bg-white p-6 rounded-2xl border border-slate-200">
              <p class="text-[10px] uppercase font-black tracking-[0.2em] text-slate-400 mb-4">Approval Tracker</p>
              ${renderApprovalTracker(e.approvalType, e.steps)}
            </div>
          </div>
        </div>
      </td>
    </tr>`;
}

// ─── APPROVAL PROGRESS TRACKER ────────────────────────────────────────────────
// Mode A: Sequential  |  Mode B: Percentage  |  Mode C: Specific  |  Mode D: Hybrid
function renderApprovalTracker(type, steps) {
  if (!steps || steps.length === 0) {
    return `<p class="text-xs text-slate-400 italic text-center py-6">No approval steps yet.</p>`;
  }

  if (type === 'sequential') {
    const defaultSteps = steps.length ? steps : [
      { title: 'Line Manager', status: 'approved' },
      { title: 'Finance Review', status: 'pending' },
      { title: 'Executive Sign-off', status: 'queued' }
    ];
    const progressPct = Math.round((defaultSteps.filter(s => s.status === 'approved').length / defaultSteps.length) * 100);
    return `
      <div class="relative py-4">
        <div class="absolute top-[52px] left-8 right-8 h-1 bg-slate-100 rounded-full z-0"></div>
        <div class="absolute top-[52px] left-8 h-1 bg-secondary rounded-full z-0" style="width:${progressPct}%"></div>
        <div class="flex justify-between relative z-10">
          ${defaultSteps.map((s, i) => {
            const bg = s.status === 'approved' ? 'bg-primary text-white' : s.status === 'pending' ? 'bg-secondary text-white' : 'bg-slate-200 text-slate-400 opacity-40';
            const badge = s.status === 'approved' ? `<div class="absolute -bottom-1 -right-1 bg-secondary rounded-full p-0.5 border-2 border-white"><span class="material-symbols-outlined text-white text-[10px]" style="font-variation-settings:'FILL' 1">check</span></div>`
                        : s.status === 'pending'  ? `<div class="absolute -bottom-1 -right-1 bg-amber-500 rounded-full p-0.5 border-2 border-white animate-pulse"><span class="material-symbols-outlined text-white text-[10px]" style="font-variation-settings:'FILL' 1">hourglass_top</span></div>`
                        : `<div class="absolute -bottom-1 -right-1 bg-slate-400 rounded-full p-0.5 border-2 border-white"><span class="material-symbols-outlined text-white text-[10px]" style="font-variation-settings:'FILL' 1">lock</span></div>`;
            return `
              <div class="flex flex-col items-center gap-2 w-24">
                <div class="relative w-12 h-12 rounded-full ${bg} flex items-center justify-center font-bold shadow-md border-4 border-white">${i+1}${badge}</div>
                <span class="text-[9px] font-black uppercase tracking-tight text-center ${s.status === 'queued' ? 'text-slate-400' : 'text-primary'}">${s.title}</span>
              </div>`;
          }).join('')}
        </div>
      </div>`;
  }

  if (type === 'percentage') {
    const d = steps[0] || { title: 'Stakeholder Alignment', current: 60, target: 75 };
    return `
      <div>
        <div class="flex justify-between items-end mb-4">
          <span class="text-3xl font-black text-primary font-mono">${d.current}%</span>
          <span class="text-xs font-bold text-red-500 font-mono">Gate: ${d.target}%</span>
        </div>
        <div class="relative h-3 w-full bg-slate-100 rounded-full mb-2">
          <div class="h-full bg-primary rounded-full" style="width:${d.current}%"></div>
          <div class="absolute top-1/2 -translate-y-1/2 h-6 w-0.5 bg-red-500" style="left:${d.target}%"></div>
        </div>
        <p class="text-[10px] text-slate-400 font-medium">${d.title || 'Quorum vote in progress'}</p>
      </div>`;
  }

  if (type === 'specific') {
    const d = steps[0] || {};
    return `
      <div class="flex items-center gap-4 bg-amber-50 border border-amber-200/50 p-4 rounded-xl">
        <div class="w-12 h-12 rounded-xl bg-amber-500 flex items-center justify-center text-white flex-shrink-0">
          <span class="material-symbols-outlined" style="font-variation-settings:'FILL' 1">star</span>
        </div>
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-2 mb-1">
            <span class="font-black text-primary text-sm">${d.name || 'Approver Required'}</span>
            <span class="bg-amber-100 text-amber-700 text-[9px] px-2 py-0.5 rounded-full font-black uppercase">${d.role || 'Mandatory'}</span>
          </div>
          <p class="text-[11px] text-slate-500">${d.text || 'Manual verification required.'}</p>
        </div>
        <div class="text-right flex-shrink-0">
          <span class="text-[9px] font-black text-amber-600 uppercase block">Awaiting</span>
          ${d.sla ? `<span class="text-[9px] font-mono text-slate-400">SLA: ${d.sla}</span>` : ''}
        </div>
      </div>`;
  }

  if (type === 'hybrid') {
    const a = steps[0] || { pct: 85, validated: true };
    const b = steps[1] || { name: 'Rajesh (CFO)', status: 'Pending' };
    return `
      <div class="grid grid-cols-2 gap-3 relative">
        <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white rounded-full border-2 border-slate-100 flex items-center justify-center text-[10px] font-black text-primary shadow">OR</div>
        <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
          <p class="text-[9px] font-black text-slate-400 uppercase mb-2">Volume</p>
          <span class="text-xl font-black text-secondary font-mono">${a.pct || 85}%</span>
          <div class="h-1.5 w-full bg-white rounded-full mt-2 border border-slate-200">
            <div class="h-full bg-secondary rounded-full" style="width:${a.pct || 85}%"></div>
          </div>
        </div>
        <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
          <p class="text-[9px] font-black text-slate-400 uppercase mb-2">CFO Override</p>
          <div class="flex items-center gap-2">
            <span class="material-symbols-outlined text-primary text-sm">shield_person</span>
            <span class="text-xs font-black text-primary">${b.name || 'CFO'}</span>
          </div>
          <span class="text-[9px] font-black text-amber-600 mt-1 block uppercase">${b.status || 'Pending'}</span>
        </div>
      </div>`;
  }

  return `<p class="text-xs text-slate-400 italic">Unknown tracker type.</p>`;
}

// ─── SIDEBAR WIDGETS ──────────────────────────────────────────────────────────
function renderSidebar() {
  const pending = allExpenses
    .filter(e => e.status === 'Waiting Approval' || e.status === 'Submitted')
    .reduce((s, e) => s + e.amount, 0);

  document.getElementById('sidebarWidgets').innerHTML = `
    <!-- Pending Reimbursement -->
    <div class="bg-primary p-8 rounded-3xl shadow-2xl shadow-primary/20 relative overflow-hidden text-white mb-6">
      <div class="absolute top-0 right-0 p-4 opacity-10"><span class="material-symbols-outlined text-7xl">account_balance</span></div>
      <p class="text-[10px] font-black uppercase tracking-[0.2em] mb-4 opacity-60">Pending Reimbursement</p>
      <div class="mb-8">
        <span class="text-4xl font-black font-mono tracking-tighter">₹${fmt(pending || 74210)}</span>
        <p class="text-[10px] font-bold opacity-70 uppercase tracking-widest mt-1">Indian Rupees</p>
      </div>
      <div class="flex items-center gap-2 bg-white/10 w-max px-3 py-1.5 rounded-xl text-xs font-bold">
        <span class="material-symbols-outlined text-secondary text-sm">trending_up</span>+12% from last month
      </div>
    </div>

    <!-- Volume by Category -->
    <div class="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm mb-6">
      <h4 class="text-[11px] uppercase font-black tracking-[0.2em] mb-7 text-primary">Top Categories</h4>
      <div class="space-y-5">
        ${[{l:'Travel',p:45,c:'bg-primary'},{l:'Meals',p:30,c:'bg-secondary'},{l:'Software',p:25,c:'bg-slate-400'}].map(x=>`
          <div>
            <div class="flex justify-between text-xs font-bold text-slate-800 mb-2"><span>${x.l}</span><span class="font-mono">${x.p}%</span></div>
            <div class="h-2 bg-slate-100 rounded-full overflow-hidden"><div class="${x.c} h-full rounded-full" style="width:${x.p}%"></div></div>
          </div>`).join('')}
      </div>
    </div>

    <!-- Policy Reminder -->
    <div class="p-7 rounded-3xl bg-white border-2 border-dashed border-slate-200 flex flex-col items-center text-center">
      <div class="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-4">
        <span class="material-symbols-outlined text-3xl text-slate-300">menu_book</span>
      </div>
      <h4 class="font-black text-primary mb-2 text-sm uppercase tracking-[0.15em]">Policy Guide</h4>
      <p class="text-[12px] text-slate-500 leading-relaxed font-medium">All reports exceeding <span class="font-mono font-bold">₹50,000</span> require two executive approvals and original tax-compliant invoices.</p>
      <button class="mt-5 text-[10px] font-black uppercase tracking-[0.2em] text-primary hover:text-primary/80 border-b-2 border-primary/20 pb-0.5 transition-all">Download Guide</button>
    </div>`;
}

// ─── MODAL ────────────────────────────────────────────────────────────────────
function openNewExpenseModal() { document.getElementById('expenseModal').classList.remove('hidden'); }
function closeNewExpenseModal() { document.getElementById('expenseModal').classList.add('hidden'); }

function submitNewExpense() {
  const desc   = document.getElementById('m_desc').value.trim();
  const cat    = document.getElementById('m_cat').value;
  const date   = document.getElementById('m_date').value;
  const amount = parseFloat(document.getElementById('m_amount').value) || 0;
  if (!desc || !cat || !date) { alert('Please fill in all required fields.'); return; }

  // TODO: Business logic — POST to /api/expenses, then reload list from API.
  const newExpense = {
    id: 'EXP-' + Date.now(),
    employeeName: 'Alex Rivera', employeeInitials: 'AR', employeeRole: 'Admin',
    description: desc, category: cat, date, amount, currency: 'INR',
    localAmount: null, status: 'Draft', receiptName: null,
    approvalType: 'sequential', steps: [], remarks: ''
  };
  allExpenses.unshift(newExpense);
  closeNewExpenseModal();
  renderStats(); renderPipeline(); renderTable(); renderSidebar();
}

// ─── HELPERS ──────────────────────────────────────────────────────────────────
function fmt(n) { return Number(n).toLocaleString('en-IN', { minimumFractionDigits: 2 }); }
function fmtDate(d) {
  if (!d) return '—';
  try { return new Date(d).toLocaleDateString('en-IN', { day:'2-digit', month:'short', year:'numeric' }); }
  catch { return d; }
}

function statusBadge(status) {
  const map = {
    'Waiting Approval': `<div class="inline-flex flex-col items-center bg-slate-100/60 rounded-xl px-3 py-1.5"><span class="text-[9px] font-black uppercase tracking-[0.1em] text-slate-500">Waiting</span><span class="text-[9px] font-black uppercase tracking-[0.1em] text-slate-500">Approval</span></div>`,
    'Approved':         `<div class="inline-flex items-center bg-emerald-50 rounded-full px-4 py-1.5"><span class="text-[9px] font-black uppercase tracking-[0.1em] text-emerald-600">Approved</span></div>`,
    'Rejected':         `<div class="inline-flex items-center bg-red-50 rounded-full px-4 py-1.5"><span class="text-[9px] font-black uppercase tracking-[0.1em] text-red-600">Rejected</span></div>`,
    'Submitted':        `<div class="inline-flex items-center bg-blue-50 rounded-full px-4 py-1.5"><span class="text-[9px] font-black uppercase tracking-[0.1em] text-blue-600">Submitted</span></div>`,
    'Draft':            `<div class="inline-flex items-center bg-slate-50 rounded-full px-4 py-1.5"><span class="text-[9px] font-black uppercase tracking-[0.1em] text-slate-600">Draft</span></div>`,
  };
  return map[status] || `<div class="inline-flex items-center bg-slate-50 rounded-full px-4 py-1.5"><span class="text-[9px] font-black uppercase text-slate-600">${status}</span></div>`;
}

// ─── BOOT ────────────────────────────────────────────────────────────────────
init();
