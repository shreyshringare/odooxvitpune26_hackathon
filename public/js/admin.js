// ─── DEMO MODE ───────────────────────────────────────────────────────────────
const DEMO_MODE = true;

// ─── ROLE GATE ────────────────────────────────────────────────────────────────
// TODO: Business logic — read role from AuthContext / JWT token / session cookie.
// Replace DEMO_ROLE with the actual logged-in user's role.
const DEMO_ROLE = 'Administrator'; // Change to 'Standard Employee' to test gate

function checkRoleAccess() {
  if (DEMO_ROLE !== 'Administrator') {
    document.getElementById('roleGate').classList.remove('hidden');
  }
}

// ─── STATE ────────────────────────────────────────────────────────────────────
let allUsers = [];
let tempPassword = '';

// ─── DATA LOADING ─────────────────────────────────────────────────────────────
async function loadData() {
  if (DEMO_MODE) {
    const res = await fetch('../data/fixtures/mock_cache.json');
    const json = await res.json();
    return json.users;
  } else {
    // TODO: Business logic — fetch from API
    // const res = await fetch('/api/users', { headers: { Authorization: `Bearer ${getToken()}` } });
    // return res.json();
  }
}

// ─── INIT ─────────────────────────────────────────────────────────────────────
async function init() {
  checkRoleAccess();
  if (DEMO_ROLE !== 'Administrator') return;

  allUsers = await loadData();
  renderStats();
  renderTable();
  document.getElementById('searchInput').addEventListener('input', e =>
    renderTable(e.target.value.toLowerCase())
  );
}

// ─── STATS ────────────────────────────────────────────────────────────────────
function renderStats() {
  const total   = allUsers.length;
  const admins  = allUsers.filter(u => u.role === 'Administrator').length;
  const managers= allUsers.filter(u => u.role === 'Department Manager').length;

  document.getElementById('userStats').innerHTML = `
    <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
      <p class="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Total Members</p>
      <p class="text-3xl font-mono font-bold text-primary">${total}</p>
    </div>
    <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
      <p class="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Administrators</p>
      <p class="text-3xl font-mono font-bold text-slate-800">${admins}</p>
    </div>
    <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
      <p class="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Managers</p>
      <p class="text-3xl font-mono font-bold text-secondary">${managers}</p>
    </div>`;
}

// ─── TABLE ────────────────────────────────────────────────────────────────────
function renderTable(search = '') {
  let list = allUsers;
  if (search) list = list.filter(u =>
    u.name.toLowerCase().includes(search) ||
    u.email.toLowerCase().includes(search) ||
    u.role.toLowerCase().includes(search)
  );

  if (!list.length) {
    document.getElementById('usersTableBody').innerHTML =
      `<tr><td colspan="4" class="px-8 py-16 text-center text-slate-400 font-medium">No users found.</td></tr>`;
    return;
  }

  document.getElementById('usersTableBody').innerHTML = list.map(u => `
    <tr class="group hover:bg-slate-50/80 transition-colors">
      <td class="px-8 py-6">
        <div class="flex items-center gap-4">
          <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-black text-sm flex-shrink-0">${u.initials}</div>
          <div>
            <p class="font-bold text-slate-800">${u.name}</p>
            <p class="text-xs text-slate-400 font-mono">${u.email}</p>
          </div>
        </div>
      </td>
      <td class="px-8 py-6">
        <select onchange="updateRole('${u.id}', this.value)"
          class="bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer appearance-none pr-8 relative">
          <option ${u.role==='Standard Employee'?'selected':''}>Standard Employee</option>
          <option ${u.role==='Department Manager'?'selected':''}>Department Manager</option>
          <option ${u.role==='Administrator'?'selected':''}>Administrator</option>
        </select>
      </td>
      <td class="px-8 py-6 text-center">
        <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full ${u.status==='Active'?'bg-emerald-50 text-emerald-600':'bg-slate-100 text-slate-500'} text-[9px] font-black uppercase tracking-wider">
          <span class="w-1.5 h-1.5 rounded-full ${u.status==='Active'?'bg-emerald-500':'bg-slate-400'}"></span>${u.status}
        </span>
      </td>
      <td class="px-8 py-6 text-right">
        <div class="flex items-center justify-end gap-2">
          <button onclick="editUser('${u.id}')"
            class="p-2 text-slate-400 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors" title="Edit">
            <span class="material-symbols-outlined text-lg">edit</span>
          </button>
          <button onclick="deleteUser('${u.id}')"
            class="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors" title="Remove">
            <span class="material-symbols-outlined text-lg">delete</span>
          </button>
        </div>
      </td>
    </tr>`).join('');
}

// ─── USER ACTIONS ─────────────────────────────────────────────────────────────
function updateRole(id, newRole) {
  // TODO: Business logic — PATCH /api/users/:id with { role: newRole }
  const user = allUsers.find(u => u.id === id);
  if (user) user.role = newRole;
  renderStats();
  showToast('Role Updated', `${user?.name || 'User'} is now ${newRole}.`, false);
}

function editUser(id) {
  // TODO: Business logic — open edit form pre-filled with user data, then PATCH /api/users/:id
  const user = allUsers.find(u => u.id === id);
  if (!user) return;
  const newName = prompt(`Edit name for ${user.email}:`, user.name);
  if (newName && newName.trim()) {
    user.name = newName.trim();
    user.initials = newName.trim().split(' ').map(n => n[0]).join('').toUpperCase().slice(0,2);
    renderTable(document.getElementById('searchInput').value.toLowerCase());
    showToast('User Updated', `${user.name}'s profile has been updated.`, false);
  }
}

function deleteUser(id) {
  // TODO: Business logic — DELETE /api/users/:id with confirmation, then refresh list
  const user = allUsers.find(u => u.id === id);
  if (!user) return;
  if (!confirm(`Remove ${user.name} (${user.email}) from the organization?`)) return;
  allUsers = allUsers.filter(u => u.id !== id);
  renderStats();
  renderTable(document.getElementById('searchInput').value.toLowerCase());
  showToast('User Removed', `${user.name} has been removed.`, false);
}

// ─── ADD EMPLOYEE MODAL ───────────────────────────────────────────────────────
function openAddModal() { document.getElementById('addModal').classList.remove('hidden'); }
function closeAddModal() { document.getElementById('addModal').classList.add('hidden'); }

function submitAddEmployee() {
  const name  = document.getElementById('a_name').value.trim();
  const email = document.getElementById('a_email').value.trim();
  const role  = document.getElementById('a_role').value;

  if (!name || !email) { alert('Name and email are required.'); return; }

  // TODO: Business logic — POST /api/users { name, email, role }
  // Server should generate temp password and return it in the response.
  tempPassword = generateTempPassword();
  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  const newUser = {
    id: 'USR-' + Date.now(),
    name, email, role, initials, status: 'Active'
  };
  allUsers.push(newUser);
  closeAddModal();
  renderStats();
  renderTable();

  // Clear form
  document.getElementById('a_name').value = '';
  document.getElementById('a_email').value = '';
  document.getElementById('a_role').value = 'Standard Employee';

  showToast('Employee Added', `${name} has been onboarded. Share their temp password:`, true);
}

function generateTempPassword() {
  // UI only — real password generated server-side
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789@#!';
  return Array.from({ length: 12 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
}

// ─── EXPORT CSV ───────────────────────────────────────────────────────────────
function exportCSV() {
  const headers = ['ID', 'Name', 'Email', 'Role', 'Status'];
  const rows    = allUsers.map(u => [u.id, u.name, u.email, u.role, u.status]);
  const csv     = [headers, ...rows].map(r => r.map(c => `"${c}"`).join(',')).join('\n');
  const blob    = new Blob([csv], { type: 'text/csv' });
  const url     = URL.createObjectURL(blob);
  const a       = document.createElement('a');
  a.href = url; a.download = 'xpenseflow_users.csv'; a.click();
  URL.revokeObjectURL(url);
}

// ─── TOAST ────────────────────────────────────────────────────────────────────
function showToast(title, msg, showPwd) {
  document.getElementById('toastTitle').textContent = title;
  document.getElementById('toastMsg').textContent   = msg;

  const pwdSection = document.getElementById('toastPwdSection');
  if (showPwd) {
    pwdSection.classList.remove('hidden');
    document.getElementById('toastPwd').textContent = tempPassword;
  } else {
    pwdSection.classList.add('hidden');
  }

  const toast = document.getElementById('toast');
  toast.classList.remove('hidden');
  toast.style.opacity = '0';
  toast.style.transform = 'translateY(20px)';
  requestAnimationFrame(() => {
    toast.style.opacity = '1';
    toast.style.transform = 'translateY(0)';
  });
  setTimeout(hideToast, 8000);
}

function hideToast() {
  const toast = document.getElementById('toast');
  toast.style.opacity = '0';
  toast.style.transform = 'translateY(20px)';
  setTimeout(() => toast.classList.add('hidden'), 300);
}

function copyPassword() {
  navigator.clipboard.writeText(tempPassword).then(() => {
    document.querySelector('#toastPwdSection button').textContent = 'Copied!';
    setTimeout(() => { document.querySelector('#toastPwdSection button').textContent = 'Copy'; }, 2000);
  });
}

// ─── BOOT ────────────────────────────────────────────────────────────────────
init();
