import { useState } from 'react';
import { BookOpen, Download, FileBadge, Send, Wallet, TrendingUp, PieChart, ShieldCheck, FileText, Table } from 'lucide-react';
import { cn } from '../lib/utils';

export default function RetiralPF() {
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});

  const toggleReveal = (id: string) => {
    setRevealed(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const Revealable = ({ value, id, variant = 'dark' }: { value: string, id: string, variant?: 'dark' | 'light' | 'emerald' | 'blue' }) => {
    const isRevealed = revealed[id];
    return (
      <div onClick={() => toggleReveal(id)} className="cursor-pointer group/reveal inline-flex flex-col relative">
        <span className={cn(
          "transition-all font-black text-2xl md:text-5xl",
          !isRevealed && "blur-lg select-none opacity-20",
          isRevealed && variant === 'light' ? "text-white" : variant === 'blue' ? "text-blue-600" : "text-slate-900"
        )}>
          {value}
        </span>
        {!isRevealed && <span className={cn("text-[0.4em] absolute tracking-[0.5em] leading-none top-1/2 -translate-y-1/2 font-black", variant === 'light' ? "text-white/40" : "text-slate-300")}>••••••</span>}
      </div>
    );
  };

  const TableRevealable = ({ value, id, variant = 'dark' }: { value: string, id: string, variant?: string }) => {
      const isRevealed = revealed[id];
      return (
        <div onClick={() => toggleReveal(id)} className="cursor-pointer group/reveal inline-flex flex-col relative">
           <span className={cn(
            "transition-all font-black",
            !isRevealed && "blur-md select-none opacity-40",
            variant === 'emerald' ? "text-emerald-600" : variant === 'blue' ? "text-blue-600" : "text-slate-900"
          )}>
            {value}
          </span>
          {!isRevealed && <span className="text-[0.7em] absolute tracking-widest leading-none top-1/2 -translate-y-1/2 text-slate-300">••••</span>}
        </div>
      );
  }

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div className="flex-1">
          <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase italic leading-none">Provident <span className="text-indigo-600 underline decoration-indigo-200">Fund</span></h1>
          <p className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-3 leading-none italic">Institutional retirement security & trust records</p>
        </div>
        <div className="flex items-center flex-wrap gap-3">
            <button className="px-5 py-3 bg-white border border-slate-100 text-slate-500 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-50 hover:text-indigo-600 transition-all shadow-sm">
                <BookOpen size={14} className="inline mr-2" /> Policy
            </button>
            <button className="px-5 py-3 bg-indigo-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:shadow-indigo-500/30 transition-all shadow-lg shadow-indigo-500/10 active:scale-95">
                <Download size={14} className="inline mr-2" /> Full Statement
            </button>
            <button className="px-5 py-3 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-800 transition-all shadow-xl active:scale-95">
                <FileBadge size={14} className="inline mr-2" /> Ready Cert
            </button>
        </div>
      </div>

      {/* Top Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-indigo-600 rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl shadow-indigo-500/20 group">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -mr-40 -mt-40 blur-3xl transition-transform group-hover:scale-110 duration-1000"></div>
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div className="flex justify-between items-start mb-20 animate-in slide-in-from-top duration-700">
                <div className="w-16 h-16 bg-white/10 rounded-3xl flex items-center justify-center border border-white/20 backdrop-blur-md shadow-2xl">
                    <Wallet size={32} className="text-white drop-shadow-lg" />
                </div>
                <div className="flex items-center gap-2 bg-emerald-400 group-hover:bg-emerald-300 transition-colors text-indigo-900 text-[10px] font-black px-4 py-2 rounded-full shadow-lg cursor-default scale-110">
                    <TrendingUp size={12} /> +8.5% INT
                </div>
            </div>
            <div>
                <p className="text-[10px] font-black text-indigo-200 uppercase tracking-[0.4em] mb-4 leading-none italic">Aggregated EPF Balance</p>
                <div className="mb-10">
                   <Revealable value="৳ 8,45,000" id="total_pf" variant="light" />
                </div>
                <div className="flex items-center gap-4 pt-10 border-t border-white/10">
                   <p className="text-[9px] font-bold text-indigo-300 uppercase tracking-widest italic">Official Valuation Date: April 10, 2026</p>
                   <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></div>
                </div>
            </div>
          </div>
        </div>

        <div className="space-y-8 flex flex-col">
          <div className="bg-white rounded-[3rem] p-10 border border-slate-100 shadow-sm flex flex-col justify-between flex-1 group hover:border-indigo-600/20 transition-all">
             <div className="flex justify-between items-start mb-12">
                <div>
                  <h3 className="text-sm font-black text-slate-900 uppercase italic tracking-tighter decoration-emerald-200 underline underline-offset-4 decoration-4 mb-2">Contribution Mix</h3>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Monthly statutory record</p>
                </div>
                <div className="p-3 bg-emerald-50 rounded-2xl text-emerald-500 shadow-inner group-hover:rotate-12 transition-transform duration-500">
                   <PieChart size={20} />
                </div>
             </div>
             <div className="space-y-6">
                <div className="flex justify-between items-center p-6 bg-slate-50/50 rounded-3xl border border-slate-100 group/item hover:bg-slate-50 transition-all cursor-pointer" onClick={() => toggleReveal('empl_cont')}>
                   <div>
                      <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest italic mb-1 leading-none">Employee (10%)</p>
                      <TableRevealable value="৳ 7,000" id="empl_cont" variant="blue" />
                   </div>
                   <div className="w-1.5 h-10 bg-indigo-500 rounded-full shadow-[0_0_8px_rgba(99,102,241,0.5)]"></div>
                </div>
                <div className="flex justify-between items-center p-6 bg-slate-50/50 rounded-3xl border border-slate-100 group/item hover:bg-slate-50 transition-all cursor-pointer" onClick={() => toggleReveal('emplr_cont')}>
                   <div>
                      <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest italic mb-1 leading-none">Employer (10%)</p>
                      <TableRevealable value="৳ 7,000" id="emplr_cont" variant="emerald" />
                   </div>
                   <div className="w-1.5 h-10 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(52,211,153,0.5)]"></div>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* Middle Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
          <div className="lg:col-span-8 space-y-8">
              <div className="bg-white rounded-[3.5rem] p-10 md:p-12 border border-slate-100 shadow-sm overflow-hidden">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
                   <div>
                    <h3 className="text-xl font-black text-slate-900 uppercase italic tracking-tighter leading-none decoration-indigo-200 underline underline-offset-8">Statement Preview</h3>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-3">Fiscal Year Quarter 1-2</p>
                   </div>
                   <div className="flex items-center gap-3 bg-slate-50 p-2 rounded-2xl border border-slate-100 shadow-inner">
                      <input type="date" className="bg-transparent border-none text-[9px] font-black text-slate-500 uppercase outline-none px-3" defaultValue="2026-01-01" />
                      <span className="text-slate-300 font-bold">/</span>
                      <input type="date" className="bg-transparent border-none text-[9px] font-black text-slate-500 uppercase outline-none px-3" defaultValue="2026-04-30" />
                   </div>
                </div>
                
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-separate border-spacing-y-4">
                        <thead>
                            <tr className="text-[9px] font-black text-slate-300 uppercase tracking-[0.2em] leading-none">
                                <th className="px-6">Timeline</th>
                                <th className="px-6">Employee</th>
                                <th className="px-6">Employer</th>
                                <th className="px-6">Int. Accrued</th>
                                <th className="px-6 text-right">Running Net</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm">
                            {['April 2026', 'March 2026'].map((month, i) => (
                                <tr key={i} className="bg-slate-50/50 hover:bg-white hover:shadow-xl hover:shadow-slate-100/80 transition-all rounded-[1.8rem] group">
                                    <td className="py-6 px-8 font-bold text-slate-800 rounded-l-[1.8rem] border-l border-y border-transparent group-hover:border-slate-100">{month}</td>
                                    <td className="py-6 px-8 border-y border-transparent group-hover:border-slate-100"><TableRevealable value="৳ 7,000" id={`row_${i}_e`} /></td>
                                    <td className="py-6 px-8 border-y border-transparent group-hover:border-slate-100"><TableRevealable value="৳ 7,000" id={`row_${i}_er`} /></td>
                                    <td className="py-6 px-8 border-y border-transparent group-hover:border-slate-100"><TableRevealable value="৳ 450" id={`row_${i}_i`} variant="emerald" /></td>
                                    <td className="py-6 px-8 text-right rounded-r-[1.8rem] border-r border-y border-transparent group-hover:border-slate-100 bg-slate-100/30 group-hover:bg-transparent">
                                        <TableRevealable value={i === 0 ? "৳ 8,45,000" : "৳ 8,30,550"} id={`row_${i}_tot`} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="flex justify-end gap-3 mt-12 pt-8 border-t border-slate-50">
                    <button className="px-6 py-3 bg-slate-50 hover:bg-slate-100 text-slate-600 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all flex items-center gap-2 border border-slate-100">
                        <FileText size={14} /> PDF
                    </button>
                    <button className="px-6 py-3 bg-slate-50 hover:bg-slate-100 text-slate-600 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all flex items-center gap-2 border border-slate-100">
                        <Table size={14} /> EXCEL
                    </button>
                </div>
              </div>
          </div>

          <div className="lg:col-span-4 space-y-8">
              <div className="bg-white rounded-[3rem] p-10 border border-slate-100 shadow-sm flex flex-col group h-full justify-between">
                <h3 className="text-sm font-black text-slate-900 mb-10 uppercase tracking-widest italic decoration-indigo-200 underline underline-offset-8">Growth Index</h3>
                <div className="flex-1 flex items-end justify-between gap-3 px-4 min-h-[220px]">
                    {[40, 55, 70, 95].map((h, i) => (
                        <div key={i} className={cn(
                            "w-full rounded-t-2xl transition-all duration-700 delay-150 transform origin-bottom hover:scale-x-110 relative group/bar cursor-default",
                            i === 3 ? "bg-indigo-600 shadow-xl shadow-indigo-100" : "bg-slate-100 hover:bg-indigo-100"
                        )} style={{ height: `${h}%` }}>
                            <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover/bar:opacity-100 transition-all bg-slate-900 text-white text-[8px] font-black px-2 py-1 rounded whitespace-nowrap z-20">
                                {['Jan', 'Feb', 'Mar', 'Apr'][i]} Evaluation
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-10 pt-10 border-t border-slate-50 flex items-center justify-between">
                   <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Avg Growth</p>
                   <p className="text-sm font-black text-indigo-600 italic">+৳14,400 <span className="text-[10px] text-slate-300 not-italic">/ MO</span></p>
                </div>
              </div>

              <div className="bg-[#0f172a] rounded-[2.5rem] p-10 text-white relative overflow-hidden group">
                <div className="absolute -right-8 -top-8 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl"></div>
                <div className="relative z-10">
                   <h4 className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-6 italic leading-none underline decoration-indigo-900 border-indigo-900">Legal Compliance</h4>
                   <p className="text-[11px] text-slate-500 font-medium leading-relaxed italic border-l-2 border-indigo-500 pl-4 group-hover:text-slate-400 transition-colors">
                     The Provident Fund Trust operations are governed by NBR guidelines 2026. Audit reports for FY 2025 are available on request at the HR Compliance Hub.
                   </p>
                   <button className="mt-8 text-[9px] font-black text-indigo-400 uppercase tracking-[0.2em] flex items-center gap-2 group/btn">
                      Verify Trust Status <TrendingUp size={12} className="group-hover:translate-y-[-2px] group-hover:translate-x-[2px] transition-transform" />
                   </button>
                </div>
              </div>
          </div>
      </div>
    </div>
  );
}
