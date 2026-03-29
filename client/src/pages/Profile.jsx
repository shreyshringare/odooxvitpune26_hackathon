import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [avatarStr, setAvatarStr] = useState("https://lh3.googleusercontent.com/aida-public/AB6AXuDMSmNziOuClyivuRETy4z9tXEaJ5YwHZrOHQH1krW6LKhzJ2C4H4kljwm1Wc57BsdKqWN6v2GczSblTP_3kgXe38R-9Xy-SqyLkNKbMf2hY6ERJK9JLFa-RKQX8Pseq1XMCMmQaYxDEuvmJfSzhMHIGU7weEjuZRx-GWKSNR2DNbGW9F_XTLeacuWmNE8dFRcFcitvi_Llzq_TNnJ6uVIUtdPkh28A_gABKebVKxH0MyZcMfTJqMGn4Ia79JhWyenCg2mOs6XM3iTM");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatarStr(URL.createObjectURL(file));
    }
  };

  return (
    <div className="flex min-h-screen bg-background text-slate-900 font-sans p-10">
      <div className="max-w-4xl mx-auto w-full space-y-8">
        <header className="flex items-center gap-4 mb-10">
          <button onClick={() => navigate(-1)} className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-slate-400 hover:text-primary transition-colors">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight">Account Profile</h1>
            <p className="text-slate-500 text-sm mt-1">Manage your identity and authentication details.</p>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1 bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-centertext-center">
            <div 
              onClick={() => fileInputRef.current?.click()}
              className="w-32 h-32 rounded-full overflow-hidden border-4 border-slate-50 mb-6 mx-auto relative group cursor-pointer"
            >
              <img src={avatarStr} alt="Avatar" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-xs uppercase tracking-widest backdrop-blur-sm">Update</div>
              <input 
                type="file" 
                accept="image/*" 
                className="hidden" 
                ref={fileInputRef} 
                onChange={handleImageChange} 
              />
            </div>
            <h2 className="text-xl font-bold text-slate-900 text-center">Alex Rivera</h2>
            <p className="text-sm font-medium text-slate-400 text-center">System Administrator</p>
            <div className="mt-8 pt-8 border-t border-slate-100 w-full flex flex-col gap-3">
              <button onClick={() => navigate('/login')} className="flex items-center gap-3 text-red-500 font-bold hover:bg-red-50 px-4 py-2 rounded-lg transition-colors mx-auto">
                <span className="material-symbols-outlined">logout</span>
                Secure Logout
              </button>
            </div>
          </div>

          <div className="col-span-2 bg-white rounded-3xl shadow-sm border border-slate-100 p-10">
            <h3 className="font-bold text-slate-800 text-xl border-b border-slate-100 pb-4 mb-8">Personal Information</h3>
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">First Name</label>
                  <input type="text" defaultValue="Alex" className="w-full bg-[#FAFAFA] border-none focus:ring-2 focus:ring-[#714B67]/20 px-5 py-4 rounded-xl text-slate-900 font-bold text-sm shadow-inner" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Last Name</label>
                  <input type="text" defaultValue="Rivera" className="w-full bg-[#FAFAFA] border-none focus:ring-2 focus:ring-[#714B67]/20 px-5 py-4 rounded-xl text-slate-900 font-bold text-sm shadow-inner" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
                <input type="email" defaultValue="alex.rivera@xpenseflow.io" disabled className="w-full bg-[#FAFAFA] border-none px-5 py-4 rounded-xl text-slate-400 font-mono text-sm shadow-inner cursor-not-allowed opacity-70" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Department</label>
                <input type="text" defaultValue="Finance Technology" disabled className="w-full bg-[#FAFAFA] border-none px-5 py-4 rounded-xl text-slate-400 font-sans font-bold text-sm shadow-inner cursor-not-allowed opacity-70" />
              </div>
            </div>
            <div className="flex justify-end mt-12">
              <button onClick={() => navigate(-1)} className="px-8 py-3 bg-primary text-white font-bold rounded-xl shadow-lg hover:bg-primary/90 transition-all">Save Changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
