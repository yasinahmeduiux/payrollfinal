import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Banknote, Calendar, Sparkles, FileText, Eye, EyeOff } from 'lucide-react';
import { useUser } from '../context/UserContext';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';

export default function Dashboard() {
  const { currentUser } = useUser();
  const [visibleSalaries, setVisibleSalaries] = useState<Record<string, boolean>>({});

  const toggleSalary = (id: string) => {
    setVisibleSalaries(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const [dateInfo, setDateInfo] = useState({ current: '', next: '' });

  useEffect(() => {
    const months = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
    const now = new Date();
    const nextDate = new Date();
    nextDate.setMonth(now.getMonth() + 1);
    
    setDateInfo({
      current: `${months[now.getMonth()]} ${now.getFullYear()}`,
      next: `PAY ON 24 ${months[nextDate.getMonth()]}`
    });
  }, []);

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom duration-700 pb-20">
      {/* HEADER: User Info */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 bg-white p-10 rounded-[3.5rem] shadow-sm border border-slate-100/50">
        <div className="flex items-center gap-8">
          <div id="home-user-avatar" className="w-24 h-24 rounded-[2.5rem] shadow-2xl shadow-indigo-100 overflow-hidden shrink-0 border-4 border-slate-50">
            <img src={currentUser.avatar} className="w-full h-full object-cover" alt="Profile" />
          </div>
          <div>
            <h2 id="home-user-name" className="text-4xl font-black text-slate-900 tracking-tighter uppercase italic leading-none mb-3">
              {currentUser.name}
            </h2>
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-[10px] font-black text-slate-400 bg-slate-50 px-3 py-1.5 rounded-full uppercase tracking-widest border border-slate-100">ID: {currentUser.id}</span>
              <span className="text-[10px] font-black text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-full uppercase tracking-widest border border-indigo-100 italic">Analytics & AI</span>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-50 rounded-full border border-emerald-100">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse shadow-sm shadow-emerald-200"></span>
                <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Tax Verified</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PRIORITY SALARY CARDS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Card 1: Current Month Salary */}
        <div className="group bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-emerald-500/10 transition-all relative overflow-hidden">
          <div className="flex items-start justify-between mb-8">
            <div className="bg-emerald-50 p-4 rounded-2xl text-emerald-600 border border-emerald-100">
              <Banknote size={24} />
            </div>
            <div className="text-right">
              <span className="px-4 py-1.5 bg-emerald-50 text-emerald-600 rounded-full text-[9px] font-black uppercase tracking-[0.2em] border border-emerald-100">
                {dateInfo.current}
              </span>
            </div>
          </div>
          <div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-3">Current Month Salary</p>
            <div className="flex items-baseline gap-3">
              <h3 className={cn(
                "text-3xl md:text-4xl font-black text-slate-900 tracking-tighter italic transition-all",
                !visibleSalaries['current'] && "blur-md select-none opacity-50"
              )}>
                ৳ 71,400
              </h3>
              {!visibleSalaries['current'] && <span className="text-sm font-bold text-slate-300">৳ ••••••••</span>}
            </div>
            <p className="text-[8px] font-bold text-slate-400 uppercase mt-5 tracking-[0.2em] italic">Net Payable Amount · Predicted</p>
          </div>
          <button 
            onClick={() => toggleSalary('current')}
            className="absolute bottom-8 right-8 p-2.5 bg-slate-50 rounded-xl text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-all"
          >
            {visibleSalaries['current'] ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>

        {/* Card 2: Next Month Salary */}
        <div className="group bg-[#0f172a] p-8 rounded-[2.5rem] border border-slate-800 shadow-2xl relative overflow-hidden text-white">
          <div className="absolute -right-16 -top-16 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <div className="flex items-start justify-between mb-8">
              <div className="bg-indigo-600 p-4 rounded-2xl text-white shadow-xl shadow-indigo-600/20">
                <Calendar size={24} />
              </div>
              <div className="text-right">
                <span className="px-4 py-1.5 bg-indigo-500/20 text-indigo-300 rounded-full text-[9px] font-black uppercase tracking-[0.2em] border border-indigo-500/30">
                  {dateInfo.next}
                </span>
              </div>
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-3">Next Month Salary</p>
              <div className="flex items-baseline gap-3">
                <h3 className={cn(
                  "text-3xl md:text-4xl font-black text-white tracking-tighter italic transition-all",
                  !visibleSalaries['next'] && "blur-md select-none opacity-50"
                )}>
                  ৳ 72,500
                </h3>
                {!visibleSalaries['next'] && <span className="text-sm font-bold text-slate-600 text-white/50">৳ ••••••••</span>}
                <span className="text-[9px] font-black text-indigo-400 uppercase tracking-widest ml-2">Est.</span>
              </div>
              <p className="text-[8px] font-bold text-slate-500 uppercase mt-5 tracking-[0.2em] italic">Scheduled for next cycle</p>
            </div>
          </div>
          <button 
            onClick={() => toggleSalary('next')}
            className="absolute bottom-8 right-8 p-2.5 bg-slate-800 rounded-xl text-slate-500 hover:text-indigo-400 transition-all z-20"
          >
            {visibleSalaries['next'] ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>
      </div>

      {/* Quick Access Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <NavLink to="/offers" className="bg-white p-8 rounded-[2.5rem] text-slate-900 flex items-center justify-between group hover:shadow-2xl transition-all border border-slate-100 no-underline">
          <div>
            <h3 className="text-xl md:text-2xl font-black italic tracking-tighter uppercase mb-1">Offers & <span className="text-emerald-500">Benefits</span></h3>
            <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">View all employee perks</p>
          </div>
          <div className="bg-slate-50 p-4 rounded-2xl group-hover:bg-indigo-600 group-hover:text-white transition-all">
            <Sparkles size={20} />
          </div>
        </NavLink>

        <NavLink to="/payroll/overview" className="bg-white p-8 rounded-[2.5rem] text-slate-900 flex items-center justify-between group shadow-sm border border-slate-100 hover:border-indigo-600/30 transition-all no-underline">
          <div>
            <h3 className="text-xl md:text-2xl font-black italic tracking-tighter uppercase mb-1">Monthly <span className="text-indigo-600 underline">Records</span></h3>
            <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Check your earnings history</p>
          </div>
          <div className="bg-slate-50 p-4 rounded-2xl group-hover:bg-indigo-600 group-hover:text-white transition-all">
            <FileText size={20} />
          </div>
        </NavLink>
      </div>
    </div>
  );
}
