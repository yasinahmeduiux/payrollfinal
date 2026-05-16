import { useState } from 'react';
import { Calendar, BarChart, Layers, Sparkles, Calculator, BarChart3, ChevronRight, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

export default function SalaryInsights() {
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});
  const [calcCurrent, setCalcCurrent] = useState('90000');
  const [calcPercent, setCalcPercent] = useState('8');

  const toggleReveal = (id: string) => setRevealed(prev => ({ ...prev, [id]: !prev[id] }));

  const Revealable = ({ value, id, variant = 'dark' }: { value: string, id: string, variant?: 'dark' | 'emerald' | 'blue' | 'indigo' | 'light' }) => {
    const isRevealed = revealed[id];
    return (
      <div 
        onClick={() => toggleReveal(id)}
        className="cursor-pointer group/reveal inline-flex flex-col relative"
      >
        <span className={cn(
          "transition-all font-black",
          !isRevealed && "blur-lg select-none opacity-20",
          isRevealed && variant === 'emerald' ? "text-emerald-500" : variant === 'blue' ? "text-blue-500" : variant === 'indigo' ? "text-indigo-600" : "text-slate-900"
        )}>
          {value}
        </span>
        {!isRevealed && <span className="text-[0.6em] absolute tracking-widest leading-none top-1/2 -translate-y-1/2 text-slate-300">••••••</span>}
      </div>
    );
  };

  const calcResult = parseInt(calcCurrent) + (parseInt(calcCurrent) * (parseInt(calcPercent) / 100) || 0);

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-24">
      {/* GROUP 1: Salary Overview */}
      <section>
        <div className="flex items-center gap-4 mb-10">
            <div className="w-2.5 h-10 bg-emerald-500 rounded-full shadow-lg shadow-emerald-500/20"></div>
            <h3 className="text-3xl font-black text-slate-900 tracking-tighter uppercase italic leading-none">Salary Overview</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-[3rem] p-10 border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-emerald-500/10 transition-all group overflow-hidden relative">
                <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-50 rounded-full blur-2xl -mr-12 -mt-12 group-hover:bg-emerald-100 transition-all duration-700"></div>
                <div className="flex items-center gap-5 mb-8 relative z-10">
                    <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center border border-emerald-100 shadow-inner group-hover:scale-110 transition-transform">
                        <Calendar size={24} className="text-emerald-500" />
                    </div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] italic">Monthly Servicing</p>
                </div>
                <div className="relative z-10">
                    <h2 className="text-4xl font-black text-slate-900 leading-none">
                        <Revealable value="৳ 90,000" id="s_mon" />
                    </h2>
                </div>
            </div>

            <div className="bg-white rounded-[3rem] p-10 border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all group overflow-hidden relative">
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-full blur-2xl -mr-12 -mt-12 group-hover:bg-blue-100 transition-all duration-700"></div>
                <div className="flex items-center gap-5 mb-8 relative z-10">
                    <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center border border-blue-100 shadow-inner group-hover:scale-110 transition-transform">
                        <BarChart size={24} className="text-blue-500" />
                    </div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] italic">Aggregated Annual</p>
                </div>
                <div className="relative z-10">
                    <h2 className="text-4xl font-black text-slate-900 leading-none">
                        <Revealable value="৳ 1,080,000" id="s_yr" />
                    </h2>
                </div>
            </div>

            <div className="bg-white rounded-[3rem] p-10 border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-indigo-500/10 transition-all group overflow-hidden relative">
                <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-50 rounded-full blur-2xl -mr-12 -mt-12 group-hover:bg-indigo-100 transition-all duration-700"></div>
                <div className="flex items-center gap-4 mb-8 relative z-10">
                    <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center border border-indigo-100 shadow-inner group-hover:scale-110 transition-transform">
                        <Layers size={21} className="text-indigo-500" />
                    </div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] italic">Tenure Earnings</p>
                </div>
                <div className="relative z-10">
                    <h2 className="text-4xl font-black text-slate-900 leading-none">
                        <Revealable value="৳ 4,500,000" id="s_life" />
                    </h2>
                </div>
            </div>
        </div>
      </section>

      {/* GROUP 2: Increment Insights */}
      <section>
        <div className="flex items-center gap-4 mb-10">
            <div className="w-2.5 h-10 bg-indigo-600 rounded-full shadow-lg shadow-indigo-600/20"></div>
            <h3 className="text-3xl font-black text-slate-900 tracking-tighter uppercase italic leading-none">Increment Tracking</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-[3rem] p-10 border border-slate-100 shadow-sm transition-all group">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-6 italic">Current Increment Status</p>
                <div className="flex items-end gap-5">
                    <h2 className="text-7xl font-black text-emerald-500 italic tracking-tighter leading-none group-hover:scale-110 transition-transform">8%</h2>
                    <div className="mb-1">
                        <Revealable value="+৳ 6,667" id="inc_amt" variant="emerald" />
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-[3rem] p-10 border border-slate-100 shadow-sm group">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-10 italic">Performance Trend</p>
                <div className="flex items-end gap-3 h-24 px-2">
                    <div className="flex-1 bg-slate-50 rounded-t-xl h-[40%] hover:bg-slate-100 transition-all border border-transparent hover:border-slate-200"></div>
                    <div className="flex-1 bg-slate-100 rounded-t-xl h-[65%] hover:bg-slate-200 transition-all border border-transparent hover:border-slate-300"></div>
                    <div className="flex-1 bg-indigo-500 rounded-t-xl h-[100%] shadow-xl shadow-indigo-100 hover:bg-indigo-600 transition-all group-hover:translate-y-[-4px]"></div>
                </div>
                <div className="flex justify-between mt-6 px-2 text-[9px] font-black text-slate-400 uppercase tracking-widest">
                    <span>CY 2024</span><span>CY 2025</span><span className="text-indigo-600 italic underline">CY 2026</span>
                </div>
            </div>

            <div className="bg-white rounded-[3rem] p-10 border border-slate-100 shadow-sm overflow-hidden group">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-10 italic leading-none">History Chain</p>
                <div className="space-y-8 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-1 before:bg-slate-50 overflow-hidden">
                    {[
                        { yr: '2026', p: '+10%', c: 'bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]' },
                        { yr: '2025', p: '+7%', c: 'bg-slate-200 opacity-60' },
                        { yr: '2024', p: '+5%', c: 'bg-slate-100 opacity-40' }
                    ].map((row, i) => (
                        <div key={i} className="relative pl-12 group/row transition-all hover:translate-x-2">
                            <div className={cn("absolute left-0 top-1 w-6 h-6 rounded-full border-4 border-white shadow-md z-10", row.c)}></div>
                            <p className="text-[10px] font-black text-slate-300 uppercase leading-none mb-1 italic">{row.yr} AUDIT</p>
                            <p className="text-lg font-black text-slate-900 italic tracking-tighter leading-none group-hover/row:text-indigo-600 transition-colors uppercase">{row.p}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* GROUP 3: Smart Insights */}
      <section>
        <div className="flex items-center gap-4 mb-10">
            <div className="w-2.5 h-10 bg-indigo-900 rounded-full shadow-lg shadow-indigo-950/20"></div>
            <h3 className="text-3xl font-black text-slate-900 tracking-tighter uppercase italic leading-none">Institutional Intelligence</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Forecast Card */}
            <div className="bg-[#0f172a] rounded-[3.5rem] p-10 border border-slate-800 shadow-2xl relative overflow-hidden group/intel h-full flex flex-col justify-between text-white">
                <div className="absolute -top-16 -right-16 w-48 h-48 bg-indigo-600/10 rounded-full blur-3xl group-hover/intel:scale-125 transition-transform duration-1000"></div>
                <div className="relative z-10">
                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-10 border border-white/10 backdrop-blur-md shadow-2xl group-hover/intel:rotate-12 transition-transform">
                        <Sparkles size={28} className="text-indigo-400" />
                    </div>
                    <h4 className="text-xl font-black text-white italic tracking-tighter uppercase mb-2 underline decoration-indigo-700 underline-offset-8">Growth Forecast</h4>
                    <p className="text-[11px] text-slate-400 font-medium leading-relaxed italic mb-10 border-l-2 border-indigo-900 pl-4 py-1">Optimized target based on structural performance indices and institutional market reliability.</p>
                    
                    <div className="space-y-6 pt-4 border-t border-white/5">
                        <div className="flex justify-between items-center px-2 cursor-pointer" onClick={() => toggleReveal('s_curr_intel')}>
                            <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Base Baseline</span>
                            <Revealable value="৳ 90,000" id="s_curr_intel" variant="light" />
                        </div>
                        <div className="flex justify-between items-center px-2 border-y border-white/5 py-4">
                            <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Suggested Index</span>
                            <span className="text-xl font-black text-emerald-400 italic tracking-tighter">+8.0%</span>
                        </div>
                        <div className="flex justify-between items-center px-2 cursor-pointer" onClick={() => toggleReveal('s_target_intel')}>
                            <span className="text-[9px] font-black text-indigo-400 uppercase tracking-widest italic decoration-indigo-900 underline underline-offset-4">Valuated Destination</span>
                            <Revealable value="৳ 97,200" id="s_target_intel" variant="indigo" />
                        </div>
                    </div>
                </div>
                <div className="relative z-10 pt-10 text-center">
                   <p className="text-[9px] font-black text-indigo-500 uppercase tracking-[0.3em] font-mono animate-pulse">Computing predictive model...</p>
                </div>
            </div>

            {/* Calculator */}
            <div className="bg-white rounded-[3rem] p-10 border border-slate-100 shadow-sm flex flex-col group h-full">
                <h4 className="text-sm font-black text-slate-900 mb-10 uppercase tracking-widest italic underline decoration-indigo-100 underline-offset-8 decoration-4 leading-none flex items-center justify-between">
                   Simulate Outcome <Calculator size={16} className="text-slate-200 group-hover:text-indigo-600 transition-colors" />
                </h4>
                <div className="space-y-8 flex-1 flex flex-col justify-center">
                    <div className="space-y-3">
                        <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1 italic leading-none">Starting Capital (৳)</label>
                        <div className="relative">
                           <span className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 font-black">৳</span>
                           <input 
                            type="number" 
                            value={calcCurrent}
                            onChange={(e) => setCalcCurrent(e.target.value)}
                            className="w-full bg-slate-50 border-2 border-slate-100 rounded-[1.5rem] py-4 pl-10 pr-6 font-black text-slate-900 focus:outline-none focus:border-indigo-600 transition-all shadow-inner" 
                           />
                        </div>
                    </div>
                    <div className="space-y-3">
                        <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1 italic leading-none">Extension Factor (%)</label>
                        <div className="relative">
                           <span className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 font-black">%</span>
                           <input 
                            type="number" 
                            value={calcPercent}
                            onChange={(e) => setCalcPercent(e.target.value)}
                            className="w-full bg-slate-50 border-2 border-slate-100 rounded-[1.5rem] py-4 pl-6 pr-10 font-black text-slate-900 focus:outline-none focus:border-indigo-600 transition-all shadow-inner" 
                           />
                        </div>
                    </div>
                </div>
                <div className="pt-10 mt-10 border-t-2 border-slate-50 flex items-end justify-between px-2 cursor-pointer group/res" onClick={() => toggleReveal('calc_res')}>
                    <div>
                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none mb-2 mb-1 italic underline decoration-slate-100 transition-all group-hover/res:decoration-indigo-200">Aggregated Net Proj.</p>
                        <h3 className="text-3xl font-black text-indigo-600 italic tracking-tighter leading-none transition-all group-hover/res:translate-x-2">
                           {revealed['calc_res'] ? `৳ ${calcResult.toLocaleString()}` : `৳ ••••••`}
                        </h3>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-2xl text-slate-200 group-hover/res:bg-indigo-50 group-hover/res:text-indigo-600 transition-all">
                       <ArrowRight size={20} />
                    </div>
                </div>
            </div>

            {/* Comparison */}
            <div className="bg-white rounded-[3rem] p-10 border border-slate-100 shadow-sm flex flex-col group h-full">
                <h4 className="text-sm font-black text-slate-900 mb-10 uppercase tracking-widest italic underline decoration-indigo-100 underline-offset-8 decoration-4 leading-none flex items-center justify-between">
                   Benchmark Indices <BarChart3 size={16} className="text-slate-200 group-hover:text-emerald-600 transition-colors" />
                </h4>
                <div className="space-y-10 flex-1 flex flex-col justify-center">
                    {[
                        { label: 'Your Trajectory', p: '88%', c: 'bg-indigo-600 shadow-[0_0_10px_rgba(99,102,241,0.5)]' },
                        { label: 'Institutional Avg', p: '65%', c: 'bg-slate-400' },
                        { label: 'Sector Benchmark', p: '72%', c: 'bg-emerald-500 shadow-[0_0_10px_rgba(52,211,153,0.3)]' }
                    ].map((row, i) => (
                        <div key={i} className="space-y-3 group/row transition-all hover:translate-x-1">
                            <div className="flex justify-between items-end leading-none">
                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest group-hover/row:text-slate-600 transition-colors">{row.label}</span>
                                <span className={cn("text-xs font-black italic tracking-tighter", i === 0 ? "text-indigo-600" : "text-slate-400")}>{row.p}</span>
                            </div>
                            <div className="h-2 w-full bg-slate-50 rounded-full overflow-hidden shadow-inner border border-slate-100 p-0.5">
                                <div className={cn("h-full rounded-full transition-all duration-1000 delay-300", row.c)} style={{ width: row.p }}></div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-10 pt-10 border-t border-slate-100 flex items-center justify-center gap-2 grayscale group-hover:grayscale-0 transition-all opacity-20 group-hover:opacity-100">
                   <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
                   <p className="text-[8px] font-black text-slate-300 uppercase tracking-[0.3em]">Verified Audit Data FY 2026</p>
                </div>
            </div>
        </div>
      </section>

      {/* Footnote */}
      <div className="bg-slate-900/5 p-12 rounded-[4rem] border-2 border-dashed border-slate-100 text-center relative overflow-hidden group">
         <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-200 to-transparent"></div>
         <p className="text-sm font-black text-slate-300 uppercase italic tracking-[0.5em] mb-4 group-hover:tracking-[0.6em] transition-all duration-1000">Logistics & Compliance Ledger</p>
         <p className="text-xs font-medium text-slate-400/60 leading-relaxed italic max-w-2xl mx-auto border-t border-slate-100 pt-6">All valuated trajectories and simulation records are provided for structural planning within the institutional dashboard. Final statutory disbursal outcomes are governed by individual KPI performance audits and institutional annual budget reviews.</p>
      </div>
    </div>
  );
}
