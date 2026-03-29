import React, { useState, useEffect, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts';
import { listExpenses } from '../services/expenseApi';

const COLORS = ['#714B67', '#00A09D', '#e9b8d9', '#4e444a', '#d1c3ca', '#8bb4b2'];

const Insights = () => {
  const navigate = useNavigate();
  const [timeRange, setTimeRange] = useState('YTD');
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchInsightsData = async () => {
    try {
      setLoading(true);
      const data = await listExpenses();
      setExpenses(data);
    } catch (err) {
      console.error('Failed to load expenses for insights', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInsightsData();
  }, []);

  // Process data purely based on timeRange
  const activeData = useMemo(() => {
    const defaultData = {
      trends: [],
      categories: [{ name: 'No Data', value: 1 }],
      kpi: { 
        spendDelta: '0%', spendColor: 'text-slate-500 bg-slate-50', 
        timeDelta: '0d', timeColor: 'text-slate-500 bg-slate-50', 
        compDelta: '0%', compColor: 'text-slate-500 bg-slate-50', 
        avgTime: '0 Days', compliance: '100%', topCat: 'None', icon: 'remove' 
      }
    };

    if (!expenses || expenses.length === 0) return defaultData;

    const now = new Date();
    // Filter by timeframe
    const filteredExpenses = expenses.filter(exp => {
      if (!exp.expense_date) return false;
      const d = new Date(exp.expense_date);
      if (timeRange === '1M') {
        const diff = (now - d) / (1000 * 60 * 60 * 24);
        return diff <= 30;
      } else if (timeRange === '3M') {
        const diff = (now - d) / (1000 * 60 * 60 * 24);
        return diff <= 90;
      } else if (timeRange === '6M') {
        const diff = (now - d) / (1000 * 60 * 60 * 24);
        return diff <= 180;
      } else {
        // YTD
        return d.getFullYear() === now.getFullYear();
      }
    });

    if (filteredExpenses.length === 0) return defaultData;

    // Aggregate trends (by month for 3M/6M/YTD, by week for 1M)
    const trendsMap = {};
    filteredExpenses.forEach(exp => {
      const d = new Date(exp.expense_date);
      let key = '';
      if (timeRange === '1M') {
        // Week number in the month
        const week = Math.ceil(d.getDate() / 7);
        key = `Week ${week}`;
      } else {
        key = d.toLocaleString('en-US', { month: 'short' });
      }

      if (!trendsMap[key]) trendsMap[key] = 0;
      // using original_amount as a proxy for spend. Real app would do currency conversion.
      trendsMap[key] += Number(exp.original_amount || 0);
    });

    const trends = Object.keys(trendsMap).map(k => ({ month: k, spend: trendsMap[k] }));

    // Aggregate categories
    const catMap = {};
    let totalSpend = 0;
    filteredExpenses.forEach(exp => {
      const cat = exp.category || 'Other';
      if (!catMap[cat]) catMap[cat] = 0;
      const amt = Number(exp.original_amount || 0);
      catMap[cat] += amt;
      totalSpend += amt;
    });

    const categories = Object.keys(catMap).map(cat => ({
      name: cat,
      value: Math.round((catMap[cat] / (totalSpend || 1)) * 100)
    })).sort((a,b) => b.value - a.value);

    const topCat = categories.length > 0 ? categories[0].name : 'None';
    
    // Icon mapping for top category
    const icons = {
      'Travel': 'flight_takeoff',
      'Meals': 'restaurant',
      'Office': 'chair_alt',
      'Subscription': 'autorenew',
      'Other': 'receipt_long'
    };

    return {
      trends,
      categories,
      kpi: {
        spendDelta: '+2%', // Mocked
        spendColor: 'text-emerald-500 bg-emerald-50',
        timeDelta: '-0.1d',
        timeColor: 'text-emerald-500 bg-emerald-50',
        compDelta: '0%',
        compColor: 'text-slate-500 bg-slate-50',
        avgTime: '1.5 Days',
        compliance: '98%',
        topCat,
        icon: icons[topCat] || 'receipt_long',
        totalSpend
      }
    };
  }, [expenses, timeRange]);

  const totalSpend = activeData.kpi.totalSpend || 0;

  const navItems = [
    { icon: 'dashboard',     label: 'Dashboard',        href: '/' },
    { icon: 'fact_check',    label: 'Approvals',        href: '/approvals' },
    { icon: 'insights',      label: 'Insights',         href: '/insights', active: true },
    { icon: 'group',         label: 'User Management',  href: '/users' },
  ];

  return (
    <div className="flex min-h-screen bg-background text-slate-900 antialiased font-sans">

      {/* ── Top Nav Bar ─────────────────────────────────────────────────── */}
      <header className="fixed top-0 w-full z-50 bg-white border-b border-gray-100 flex items-center justify-between px-8 h-20">
        {/* Logo + Search */}
        <div className="flex items-center gap-12">
          <Link className="flex flex-col" to="/">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-white font-black text-sm">XF</div>
              <span className="text-2xl font-black text-primary tracking-tight">XpenseFlow</span>
            </div>
            <span className="text-[10px] font-bold text-slate-400 tracking-[0.2em] mt-1 uppercase">Enterprise Edition</span>
          </Link>
          <div className="hidden md:flex items-center gap-4 bg-slate-100/80 px-4 py-2.5 rounded-lg">
            <span className="material-symbols-outlined text-slate-400 text-lg">search</span>
            <input
              className="bg-transparent border-none focus:ring-0 text-sm w-96 font-sans placeholder-slate-400 outline-none"
              placeholder="Search transactions..."
              type="text"
            />
          </div>
        </div>

        {/* Actions + Profile */}
        <div className="flex items-center gap-6">
          <Link to="/notifications" aria-label="Notifications" className="relative text-slate-500 hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-2xl">notifications</span>
            <span className="absolute top-0 right-0 w-2 h-2 bg-primary rounded-full border-2 border-white"></span>
          </Link>
          <Link to="/settings" aria-label="Settings" className="text-slate-500 hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-2xl">settings</span>
          </Link>
          <Link to="/profile" className="flex items-center gap-3 pl-4 border-l border-slate-100 hover:opacity-80 transition-opacity">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-bold text-slate-800 leading-tight">Alex Rivera</p>
              <p className="text-[10px] font-medium text-slate-400">Admin Access</p>
            </div>
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/10">
              <img alt="User profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMSmNziOuClyivuRETy4z9tXEaJ5YwHZrOHQH1krW6LKhzJ2C4H4kljwm1Wc57BsdKqWN6v2GczSblTP_3kgXe38R-9Xy-SqyLkNKbMf2hY6ERJK9JLFa-RKQX8Pseq1XMCMmQaYxDEuvmJfSzhMHIGU7weEjuZRx-GWKSNR2DNbGW9F_XTLeacuWmNE8dFRcFcitvi_Llzq_TNnJ6uVIUtdPkh28A_gABKebVKxH0MyZcMfTJqMGn4Ia79JhWyenCg2mOs6XM3iTM" />
            </div>
          </Link>
        </div>
      </header>

      {/* ── Side Nav Bar ────────────────────────────────────────────────── */}
      <aside className="h-screen w-72 fixed left-0 top-0 pt-20 bg-sidebar-bg flex flex-col z-40 border-r border-slate-200/50">
        <nav className="flex-1 px-4 py-6 space-y-1">
          {navItems.map(item => (
            <Link
              key={item.label}
              to={item.href}
              className={`flex items-center px-4 py-3.5 rounded-xl transition-all duration-200 ${
                item.active
                  ? 'bg-white text-primary shadow-sm font-bold'
                  : 'text-slate-500 hover:bg-white hover:text-primary font-bold'
              }`}
            >
              <span className="material-symbols-outlined mr-4 text-[22px]">{item.icon}</span>
              <span className="text-[14px]">{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="px-4 pb-10 space-y-1 border-t border-slate-200/50 pt-4">
          <Link to="/help" className="flex items-center text-slate-400 hover:text-primary px-4 py-2 transition-colors">
            <span className="material-symbols-outlined mr-4 text-[20px]">help</span>
            <span className="font-bold text-xs uppercase tracking-wider">Help Center</span>
          </Link>
          <Link to="/login" className="flex items-center text-slate-400 hover:text-primary px-4 py-2 transition-colors">
            <span className="material-symbols-outlined mr-4 text-[20px]">logout</span>
            <span className="font-bold text-xs uppercase tracking-wider">Logout</span>
          </Link>
        </div>
      </aside>

      {/* ── Main Content ────────────────────────────────────────────────── */}
      <main className="ml-72 pt-20 min-h-screen bg-background flex-1 flex flex-col">
        {loading ? (
          <div className="flex items-center justify-center flex-grow py-20">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            <span className="ml-3 text-sm text-slate-500 font-medium">Loading insights data…</span>
          </div>
        ) : (
          <div className="p-8 max-w-7xl mx-auto w-full flex-1">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div>
                <h1 className="text-3xl font-black text-slate-900 tracking-tight">Business Insights</h1>
                <p className="text-slate-500 text-sm mt-1">Holistic view of organizational spending patterns and compliance.</p>
              </div>
              <div className="flex gap-2 p-1 bg-slate-100 rounded-xl">
                {['1M', '3M', '6M', 'YTD'].map(range => (
                  <button
                    key={range}
                    onClick={() => setTimeRange(range)}
                    className={`px-4 py-2 font-bold text-xs rounded-lg transition-all ${
                      timeRange === range ? 'bg-white text-primary shadow-sm' : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    {range}
                  </button>
                ))}
              </div>
            </div>

            {/* KPI Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined">payments</span>
                  </div>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${activeData.kpi.spendColor}`}>{activeData.kpi.spendDelta}</span>
                </div>
                <p className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-1">Total Period Spend</p>
                <h3 className="text-2xl font-black font-mono tracking-tighter text-slate-800">₹{totalSpend.toLocaleString(undefined, { maximumFractionDigits: 0 })}</h3>
              </div>
              
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-500 flex items-center justify-center">
                    <span className="material-symbols-outlined">timer</span>
                  </div>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${activeData.kpi.timeColor}`}>{activeData.kpi.timeDelta}</span>
                </div>
                <p className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-1">Avg Approval Time</p>
                <h3 className="text-2xl font-black font-mono tracking-tighter text-slate-800">{activeData.kpi.avgTime}</h3>
              </div>

              <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-500 flex items-center justify-center">
                    <span className="material-symbols-outlined">verified</span>
                  </div>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${activeData.kpi.compColor}`}>{activeData.kpi.compDelta}</span>
                </div>
                <p className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-1">Policy Compliance</p>
                <h3 className="text-2xl font-black font-mono tracking-tighter text-slate-800">{activeData.kpi.compliance}</h3>
              </div>

              <div className="bg-primary p-6 rounded-3xl shadow-lg border border-primary relative overflow-hidden text-white">
                <div className="absolute right-0 top-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-white/20 text-white flex items-center justify-center mb-4">
                      <span className="material-symbols-outlined">{activeData.kpi.icon}</span>
                    </div>
                    <p className="text-[11px] font-black uppercase tracking-widest text-white/70 mb-1">Top Category</p>
                    <h3 className="text-2xl font-black tracking-tight">{activeData.kpi.topCat}</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Spline Chart */}
              <div className="lg:col-span-2 bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col">
                <h3 className="text-lg font-bold text-slate-800 mb-2">Spending Volume Trend</h3>
                <p className="text-sm text-slate-500 mb-8">Visualization of approved expenses over the selected {timeRange} period.</p>
                
                <div className="flex-1 min-h-[300px] w-full mt-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={activeData.trends} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                      <defs>
                        <linearGradient id="colorSpend" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#714B67" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#714B67" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                      <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} dy={10} />
                      <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} tickFormatter={(val) => `₹${(val||0).toLocaleString()}`} />
                      <Tooltip 
                        contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)' }}
                        formatter={(value) => [`₹${(value||0).toLocaleString()}`, 'Spend']}
                        labelStyle={{ color: '#94a3b8', fontWeight: 'bold', marginBottom: '4px' }}
                      />
                      <Area type="monotone" dataKey="spend" stroke="#714B67" strokeWidth={3} fillOpacity={1} fill="url(#colorSpend)" activeDot={{ r: 6, strokeWidth: 0, fill: '#714B67' }} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Doughnut Chart */}
              <div className="lg:col-span-1 bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col">
                <h3 className="text-lg font-bold text-slate-800 mb-2">Category Distribution</h3>
                <p className="text-sm text-slate-500 mb-4">Breakdown of total volume</p>
                
                <div className="flex-1 w-full min-h-[250px] flex items-center justify-center relative">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={activeData.categories}
                        cx="50%"
                        cy="50%"
                        innerRadius={70}
                        outerRadius={100}
                        paddingAngle={2}
                        dataKey="value"
                        stroke="none"
                      >
                        {activeData.categories.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}
                        formatter={(value) => [`${value}%`]}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                  {/* Center text for Donut */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                    <span className="text-3xl font-black text-slate-800">100%</span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Total</span>
                  </div>
                </div>

                {/* Custom Legend */}
                <div className="mt-4 space-y-3">
                  {activeData.categories.map((entry, idx) => (
                    <div key={entry.name} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[idx] }}></div>
                        <span className="text-sm font-bold text-slate-700">{entry.name}</span>
                      </div>
                      <span className="font-mono text-sm text-slate-500">{entry.value}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Footer */}
        <footer className="mt-auto flex items-center justify-between p-10 border-t border-slate-100 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 bg-white">
          <div className="flex gap-8">
            <Link to="/security" className="hover:text-primary">Security Policy</Link>
            <Link to="/compliance" className="hover:text-primary">Compliance API</Link>
            <Link to="/status" className="hover:text-primary">System Status</Link>
          </div>
          <span>© 2026 XpenseFlow Enterprise Solutions</span>
        </footer>
      </main>
    </div>
  );
};

export default Insights;
