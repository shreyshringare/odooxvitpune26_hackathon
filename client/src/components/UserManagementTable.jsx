import React, { useState } from 'react';
import { updateUserRole, deleteUser, createUser } from '../services/userApi';

const UserManagementTable = ({ users = [], onUsersChange }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', role: 'EMPLOYEE' });
  const [submitting, setSubmitting] = useState(false);

  // Fallback map so the table looks nice
  const roleDisplay = {
    'ADMIN': 'Administrator',
    'MANAGER': 'Department Manager',
    'EMPLOYEE': 'Standard Employee'
  };

  const handleRoleChange = async (id, newRole) => {
    try {
      await updateUserRole(id, newRole);
      onUsersChange();
    } catch (err) {
      console.error('Failed to update role', err);
      alert('Failed to update role: ' + (err.response?.data?.error || err.message));
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this user?')) return;
    try {
      await deleteUser(id);
      onUsersChange();
    } catch (err) {
      console.error('Failed to delete user', err);
      alert('Failed to delete user: ' + (err.response?.data?.error || err.message));
    }
  };

  const handleAddUser = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await createUser(formData);
      setIsModalOpen(false);
      onUsersChange();
      // Show temp password if it was generated
      if (res.tempPassword) {
        alert(`User created! Their temporary password is: ${res.tempPassword}`);
      }
      setFormData({ name: '', email: '', role: 'EMPLOYEE' });
    } catch (err) {
      console.error('Failed to create user', err);
      alert('Failed to create user: ' + (err.response?.data?.error || err.message));
    } finally {
      setSubmitting(false);
    }
  };

  const handleExportCSV = () => {
    if (!users.length) return;
    
    const headers = ['id', 'name', 'email', 'role'];
    const csvRows = [headers.join(',')];

    for (const user of users) {
      const values = headers.map(header => `"${(user[header] || '').replace(/"/g, '""')}"`);
      csvRows.push(values.join(','));
    }

    const blob = new Blob([csvRows.join('\n')], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `xpenseflow_users_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="p-8 max-w-7xl mx-auto flex-grow w-full">
      <header className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-black tracking-tight text-slate-900">User Management</h1>
          <p className="text-sm text-slate-500 font-medium mt-1">Record and manage organization-wide access controls.</p>
        </div>
        <div className="flex gap-3">
          <button onClick={handleExportCSV} className="bg-white border border-slate-200 text-slate-600 px-5 py-2.5 rounded-lg font-bold text-sm hover:bg-slate-50 transition-all flex items-center gap-2">
            <span className="material-symbols-outlined text-lg">upload</span>
            Export CSV
          </button>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-[#714B67] text-white px-5 py-2.5 rounded-lg font-bold text-sm hover:bg-[#5f3b56] transition-all flex items-center gap-2 shadow-sm"
          >
            <span className="material-symbols-outlined text-lg">person_add</span>
            Add Employee
          </button>
        </div>
      </header>

      {/* Card-based Table */}
      <div className="bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-white border-b border-slate-100">
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Name & Email</th>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Role</th>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {users.map(user => (
                <tr key={user.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-black text-xs ${
                        user.role === 'ADMIN' ? 'bg-[#fdf8fa] text-[#714B67]' : 'bg-teal-50 text-[#00A09D]'
                      }`}>
                        {user.name ? user.name.substring(0, 2).toUpperCase() : 'US'}
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold text-slate-900 text-sm">{user.name}</span>
                        <span className="text-[11px] font-mono text-slate-400">{user.email || `UID: ${user.id}`}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <div className="relative inline-block w-48">
                      <select 
                        value={user.role || 'EMPLOYEE'} 
                        onChange={(e) => handleRoleChange(user.id, e.target.value)}
                        className={`w-full appearance-none px-3 py-1.5 rounded font-sans text-[10px] font-black border focus:ring-1 focus:outline-none transition-all uppercase cursor-pointer ${
                          user.role === 'ADMIN' 
                            ? 'bg-[#fdf8fa] text-[#714B67] border-[#f4e2eb] focus:border-[#714B67] focus:ring-[#714B67]/20' 
                            : 'bg-teal-50 text-[#00A09D] border-teal-100 focus:border-[#00A09D] focus:ring-[#00A09D]/20'
                        }`}
                      >
                        <option value="ADMIN">Administrator</option>
                        <option value="MANAGER">Department Manager</option>
                        <option value="EMPLOYEE">Standard Employee</option>
                      </select>
                      <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-current text-sm opacity-50">unfold_more</span>
                    </div>
                  </td>
                  <td className="px-8 py-5 text-right">
                    <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button 
                        onClick={() => handleDelete(user.id)} 
                        className="p-2 text-slate-400 hover:text-red-500 transition-all rounded-lg hover:bg-red-50"
                        title="Delete User"
                      >
                        <span className="material-symbols-outlined text-[20px]">delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {users.length === 0 && (
                <tr>
                  <td colSpan="3" className="px-8 py-10 text-center text-slate-500 font-medium">
                    No users found. Add an employee to get started.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add User Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden ring-1 ring-black/5">
            <div className="p-10">
              <div className="flex justify-between items-start mb-10">
                <div>
                  <h2 className="text-2xl font-black tracking-tight text-slate-900">Add New Employee</h2>
                  <p className="text-slate-400 font-medium text-sm mt-1">Configure organizational identity and flow.</p>
                </div>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="text-slate-400 hover:text-slate-900 p-2 hover:bg-slate-50 rounded-full transition-all"
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>
              <form className="space-y-6" onSubmit={handleAddUser}>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Full Identity Name</label>
                  <input 
                    required 
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-[#FAFAFA] border-none focus:ring-2 focus:ring-[#714B67]/20 transition-all px-5 py-4 rounded-xl text-slate-900 font-sans text-sm placeholder:text-slate-300 shadow-inner" 
                    placeholder="e.g. Eleanor Shellstrop" 
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Work Correspondence Email</label>
                  <input 
                    required 
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-[#FAFAFA] border-none focus:ring-2 focus:ring-[#714B67]/20 transition-all px-5 py-4 rounded-xl text-slate-900 font-mono text-sm placeholder:text-slate-300 shadow-inner" 
                    placeholder="e.g. e.shellstrop@arch.io" 
                    type="email"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Access Protocol Role</label>
                  <div className="relative">
                    <select 
                      name="role"
                      value={formData.role}
                      onChange={(e) => setFormData({...formData, role: e.target.value})}
                      className="w-full bg-[#FAFAFA] border-none focus:ring-2 focus:ring-[#714B67]/20 transition-all px-5 py-4 rounded-xl text-slate-900 appearance-none font-bold text-sm shadow-inner cursor-pointer"
                    >
                      <option value="EMPLOYEE">Standard Employee</option>
                      <option value="MANAGER">Department Manager</option>
                      <option value="ADMIN">System Administrator</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">unfold_more</span>
                  </div>
                </div>
                <div className="pt-10 flex items-center justify-end gap-6">
                  <button 
                    onClick={() => setIsModalOpen(false)}
                    className="text-sm text-slate-900 font-bold hover:text-[#714B67] transition-all" 
                    type="button"
                  >
                    Cancel Action
                  </button>
                  <button disabled={submitting} className="px-10 py-4 bg-[#714B67] text-white font-black rounded-xl shadow-lg hover:bg-[#5f3b56] active:scale-[0.98] transition-all text-sm disabled:opacity-50" type="submit">
                      {submitting ? 'Saving...' : 'Save Profile'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserManagementTable;
