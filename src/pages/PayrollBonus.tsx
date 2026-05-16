import { useState } from 'react';
import { Gift, CheckCircle, CalendarClock, Sparkles, TrendingUp, Download, Eye, EyeOff } from 'lucide-react';
import { cn } from '../lib/utils';

export default function PayrollBonus() {
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});

  const toggleReveal = (id: string) => {
    setRevealed(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const Revealable = ({ value, id, variant = 'dark' }: { value: string, id: string, variant?: 'dark' | 'light' }) => {
    const isRevealed = revealed[id];
    return (
      <div onClick={() => toggleReveal(id)} className="cursor-pointer group/reveal inline-flex flex-col relative">
        <span className={cn(
          "transition-all font-black",
          !isRevealed && "blur-md select-none opacity-40",
          isRevealed && variant === 'light' ? "text-white" : "text-slate-900"
        )}>
          {value}
        </span>
        {!isRevealed && <span className={cn("text-[0.6em] absolute tracking-widest leading-none top-1/2 -translate-y-1/2", variant === 'light' ? "text-white/30" : "text-slate-300")}>••••••</span>}
      </div>
    );
  };

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tighter uppercase italic leading-none">Bonus <span className="text-indigo-600 underline decoration-indigo-600/20">Records</span></h2>
          <p className="text-slate-400 font-bold text-[10px] uppercase tracking-[0.2em] mt-3 leading-none italic">Tracking performance incentives & festival rewards</p>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-indigo-600 rounded-[2.5rem] p-8 shadow-2xl shadow-indigo-500/20 relative overflow-hidden text-white group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
          <div className="relative z-10">
            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-10 border border-white/20 backdrop-blur-sm shadow-xl">
              <Gift size={24} className="text-white" />
            </div>
            <p className="text-[10px] font-black text-indigo-200 uppercase tracking-[0.2em] mb-2 leading-none">Total Bonus Earned (YTD)</p>
            <div className="mb-8">
              <h2 className="text-4xl font-black"><Revealable value="৳ 25,000" id="total_bonus" variant="light" /></h2>
            </div>
            <div className="h-1 bg-white/10 rounded-full overflow-hidden">
               <div className="h-full bg-white w-2/3 shadow-[0_0_8px_rgba(255,255,255,1)]"></div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all flex flex-col justify-between">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center border border-emerald-100">
              <CheckCircle size={24} className="text-emerald-500" />
            </div>
            <div>
              <h3 className="text-sm font-black text-slate-900 leading-none">Eid Bonus 2026</h3>
              <span className="bg-emerald-100 text-emerald-600 text-[8px] font-black px-2 py-0.5 rounded-full uppercase mt-1 inline-block">PAID</span>
            </div>
          </div>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Disbursed Amount</p>
          <h4 className="text-2xl font-black text-slate-900 border-b border-slate-50 pb-6 mb-6">
            <Revealable value="৳ 15,000" id="eid_bonus" />
          </h4>
          <button className="w-full py-3.5 bg-slate-900 text-white rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-lg shadow-slate-950/10">
            <Download size={14} /> Download Slip
          </button>
        </div>

        <div className="bg-[#0f172a] rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden text-white flex flex-col justify-between">
           <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl"></div>
           <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 backdrop-blur-sm">
                  <CalendarClock size={24} className="text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-sm font-black text-white leading-none">Year-End Bonus</h3>
                  <span className="bg-indigo-500/20 text-indigo-300 text-[8px] font-black px-2 py-0.5 rounded-full uppercase mt-1 inline-block border border-indigo-500/20">ESTIMATED</span>
                </div>
              </div>
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Expected Payout</p>
              <h4 className="text-2xl font-black text-white border-b border-white/5 pb-6 mb-6">
                <Revealable value="৳ 10,000" id="future_bonus" variant="light" />
              </h4>
           </div>
           <div className="relative z-10 px-4 py-2 bg-white/5 rounded-lg border border-white/5 text-center">
              <p className="text-[9px] font-bold text-indigo-300 uppercase tracking-[0.2em] italic">Schedule: June 2026</p>
           </div>
        </div>
      </div>

      {/* Section 2: Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
          <div className="lg:col-span-8 space-y-8">
              <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm overflow-hidden">
                <div className="flex justify-between items-center mb-10">
                  <h3 className="text-sm font-black text-slate-900 flex items-center gap-3 uppercase tracking-widest">
                    <div className="p-2 bg-indigo-50 rounded-lg text-indigo-500"><Sparkles size={16} /></div>
                    Festival Breakdown
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                   <div className="p-6 bg-slate-50/50 rounded-3xl border border-slate-100 hover:border-indigo-200 transition-all cursor-pointer group" onClick={() => toggleReveal('b_eid')}>
                      <div className="flex justify-between items-start mb-6">
                          <div className="text-2xl">🌙</div>
                          <span className="text-[8px] font-black text-emerald-500 bg-emerald-50 px-2 py-1 rounded-lg uppercase">Applied</span>
                      </div>
                      <h4 className="text-xs font-black text-slate-900 uppercase italic mb-1 tracking-tighter">Eid-ul-Fitr</h4>
                      <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest mb-4">April 2026 cycle</p>
                      <Revealable value="৳ 15,000" id="b_eid" />
                   </div>
                   <div className="p-6 bg-slate-50/50 rounded-3xl border border-slate-100 hover:border-indigo-200 transition-all cursor-pointer group" onClick={() => toggleReveal('b_durga')}>
                      <div className="flex justify-between items-start mb-6">
                          <div className="text-2xl">🪔</div>
                          <span className="text-[8px] font-black text-slate-400 bg-slate-200 px-2 py-1 rounded-lg uppercase">Archive</span>
                      </div>
                      <h4 className="text-xs font-black text-slate-900 uppercase italic mb-1 tracking-tighter">Durga Puja</h4>
                      <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest mb-4">October 2025 cycle</p>
                      <Revealable value="৳ 12,000" id="b_durga" />
                   </div>
                </div>
              </div>

              <div className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-sm overflow-hidden">
                <h3 className="text-sm font-black text-slate-900 mb-10 flex items-center gap-3 uppercase tracking-widest">
                  <div className="p-2 bg-emerald-50 rounded-lg text-emerald-500"><TrendingUp size={16} /></div>
                  Bonus History
                </h3>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-separate border-spacing-y-4">
                        <thead>
                            <tr className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                                <th className="px-6">Timeline</th>
                                <th className="px-6">Description</th>
                                <th className="px-6">Amount</th>
                                <th className="px-6 text-center">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { date: '10 Apr 2026', type: 'Eid-ul-Fitr Bonus', val: '৳ 15,000' },
                                { date: '05 Mar 2026', type: 'Perf. Incentive', val: '৳ 5,000' }
                            ].map((row, i) => (
                                <tr key={i} className="bg-slate-50/50 hover:bg-slate-100 transition-all rounded-3xl group">
                                    <td className="py-5 px-6 font-bold text-slate-900 rounded-l-3xl border-l border-y border-transparent">{row.date}</td>
                                    <td className="py-5 px-6 text-[10px] font-black text-slate-400 uppercase italic tracking-tighter">{row.type}</td>
                                    <td className="py-5 px-6"><Revealable value={row.val} id={`history_${i}`} /></td>
                                    <td className="py-5 px-6 text-center rounded-r-3xl border-r border-y border-transparent">
                                        <span className={cn(
                                            "px-3 py-1 rounded-full text-[8px] font-black uppercase shadow-sm border",
                                            "bg-emerald-50 text-emerald-600 border-emerald-100"
                                        )}>PAID</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
              </div>
          </div>

          <div className="lg:col-span-4 space-y-8">
              <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm flex flex-col h-fit">
                <h3 className="text-sm font-black text-slate-900 mb-8 uppercase tracking-widest">Growth Trend</h3>
                <div className="h-48 flex items-end justify-between gap-4 px-2">
                   <div className="w-full bg-slate-50 rounded-t-xl h-[35%] hover:bg-indigo-50 border border-transparent hover:border-indigo-100 group transition-all relative">
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all bg-slate-900 text-white text-[8px] px-2 py-1 rounded">2024</div>
                   </div>
                   <div className="w-full bg-slate-100 rounded-t-xl h-[60%] hover:bg-indigo-50 border border-transparent hover:border-indigo-100 group transition-all relative">
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all bg-slate-900 text-white text-[8px] px-2 py-1 rounded">2025</div>
                   </div>
                   <div className="w-full bg-indigo-500 rounded-t-xl h-[95%] shadow-xl shadow-indigo-100 group relative">
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all bg-slate-900 text-white text-[8px] px-2 py-1 rounded">Current</div>
                   </div>
                   <div className="w-full bg-slate-50 rounded-t-xl h-[70%] border-2 border-dashed border-slate-100 opacity-30"></div>
                </div>
                <div className="flex justify-between mt-6 px-2 text-[8px] font-black text-slate-400 uppercase tracking-widest">
                    <span>Year 1</span>
                    <span>Year 2</span>
                    <span>Year 3</span>
                    <span>Proj</span>
                </div>
                <div className="mt-10 p-6 bg-indigo-50/50 rounded-3xl border border-indigo-100/50 italic">
                   <p className="text-[11px] text-indigo-600 font-bold leading-relaxed">System prediction: +12% projected bonus increase based on current KPI performance dashboard data.</p>
                </div>
              </div>
          </div>
      </div>
    </div>
  );
}
