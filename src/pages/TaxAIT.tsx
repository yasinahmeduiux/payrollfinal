import { useState } from 'react';
import { FileSignature, Info, ListChecks, ChevronRight, TrendingUp, Filter } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';

export default function TaxAIT() {
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
          !isRevealed && "blur-md select-none opacity-30",
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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* AIT Declaration Form */}
        <div className="lg:col-span-2 bg-white rounded-[3rem] p-10 md:p-12 border border-slate-100 shadow-sm">
          <div className="flex items-center gap-5 mb-10">
            <div className="w-14 h-14 bg-indigo-50 rounded-[1.5rem] flex items-center justify-center border border-indigo-100 shadow-inner">
              <FileSignature size={28} className="text-indigo-600" />
            </div>
            <div>
              <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter italic leading-none">AIT Declaration Form</h3>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-2">Declare your estimated Advance Income Tax</p>
            </div>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); alert("Declaration Submitted Successfully!"); }} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Income Year</label>
                <select required className="w-full px-6 py-4 bg-slate-50 border-none rounded-[1.5rem] font-bold text-slate-800 text-sm outline-none focus:ring-2 focus:ring-indigo-500 shadow-inner">
                  <option>2025-26</option>
                  <option>2024-25</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">AIT Type (Head)</label>
                <select required className="w-full px-6 py-4 bg-slate-50 border-none rounded-[1.5rem] font-bold text-slate-800 text-sm outline-none focus:ring-2 focus:ring-indigo-500 shadow-inner">
                  <option value="">Select Head</option>
                  <option>Vehicle Tax (Section 68)</option>
                  <option>Bank Interest (Section 102)</option>
                  <option>Property Tax (Section 88)</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Estimated Amt (৳)</label>
                <input required type="number" placeholder="0.00" className="w-full px-6 py-4 bg-slate-50 border-none rounded-[1.5rem] font-bold text-slate-800 text-sm outline-none focus:ring-2 focus:ring-indigo-500 shadow-inner" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Reference / Remarks</label>
                <input type="text" placeholder="Optional" className="w-full px-6 py-4 bg-slate-50 border-none rounded-[1.5rem] font-bold text-slate-800 text-sm outline-none focus:ring-2 focus:ring-indigo-500 shadow-inner" />
              </div>
            </div>
            
            <div className="p-8 bg-indigo-50/50 rounded-[2.5rem] border border-indigo-100 italic">
              <div className="flex items-start gap-5">
                <div className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center shadow-md border border-indigo-50 shrink-0">
                  <Info size={20} className="text-indigo-500" />
                </div>
                <div>
                  <h4 className="text-sm font-black text-indigo-900 mb-1 leading-none">Important Compliance Note</h4>
                  <p className="text-[11px] text-indigo-700/80 leading-relaxed font-medium">This declaration is for payroll adjustments. Verified Challans must be provided during the final tax assessment period for final audit.</p>
                </div>
              </div>
            </div>

            <button type="submit" className="w-full py-5 bg-indigo-600 text-white rounded-[1.5rem] font-black text-xs uppercase tracking-widest hover:bg-indigo-700 transition-all shadow-2xl shadow-indigo-500/20 active:scale-[0.98]">
              SUBMIT DECLARATION
            </button>
          </form>
        </div>

        <div className="space-y-8">
          <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm flex flex-col items-center">
            <h3 className="text-sm font-black text-slate-900 mb-8 uppercase tracking-widest w-full text-left underline decoration-indigo-100 underline-offset-4">Eligible AIT Heads</h3>
            <div className="space-y-3 w-full">
              {['Vehicle Tax', 'Bank Interest', 'Savings Cert'].map((head) => (
                <div key={head} className="p-5 bg-slate-50 rounded-2xl flex items-center justify-between group hover:bg-indigo-50 transition-all cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.5)]"></div>
                    <span className="text-[11px] font-black text-slate-700 uppercase">{head}</span>
                  </div>
                  <ChevronRight size={14} className="text-slate-200 group-hover:text-indigo-400 group-hover:translate-x-0.5 transition-all" />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#0f172a] rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
            <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-10 relative z-10 font-mono">Current Summary</h3>
            <div className="space-y-8 relative z-10">
                <div className="flex justify-between items-end">
                    <div onClick={() => toggleReveal('total_decl')} className="cursor-pointer">
                        <p className="text-[9px] font-black text-slate-400 uppercase mb-2">Total Declared</p>
                        <Revealable value="৳ 45,000" id="total_decl" variant="light" />
                    </div>
                    <div className="text-right">
                        <p className="text-[9px] font-black text-emerald-400 uppercase mb-2">Growth</p>
                        <p className="text-sm font-black text-emerald-400 italic">+12%</p>
                    </div>
                </div>
                <div className="space-y-2">
                    <div className="flex justify-between text-[9px] font-black text-slate-500 uppercase">
                        <span>Utilization</span>
                        <span>65%</span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden shadow-inner">
                        <div className="h-full bg-gradient-to-r from-indigo-500 to-emerald-500 w-[65%] rounded-full shadow-[0_0_10px_rgba(99,102,241,0.3)]"></div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-[3rem] p-10 border border-slate-100 shadow-sm overflow-hidden">
        <div className="flex justify-between items-center mb-12">
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest underline decoration-indigo-200 underline-offset-8 decoration-4">Declaration History</h3>
            <button className="p-3 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-all text-slate-400 hover:text-slate-900 shadow-sm">
                <Filter size={18} />
            </button>
        </div>
        <div className="overflow-x-auto">
            <table className="w-full text-left border-separate border-spacing-y-4">
                <thead>
                    <tr className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">
                        <th className="px-6">Timeline</th>
                        <th className="px-6">Fiscal Year</th>
                        <th className="px-6">Category</th>
                        <th className="px-6">Declared Amt</th>
                        <th className="px-6 text-center">Outcome</th>
                    </tr>
                </thead>
                <tbody className="text-sm">
                    {[
                      { date: '12 Feb 2026', yr: '2025-26', head: 'Vehicle Tax', val: '৳ 2,500', st: 'Approved' },
                      { date: '05 Jan 2026', yr: '2025-26', head: 'Bank Interest', val: '৳ 1,200', st: 'Pending' }
                    ].map((row, i) => (
                      <tr key={i} className="bg-slate-50/50 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all rounded-[1.5rem] group border border-transparent hover:border-slate-100">
                          <td className="py-5 px-8 font-bold text-slate-800 rounded-l-[1.5rem] border-l border-y border-transparent group-hover:border-slate-100">{row.date}</td>
                          <td className="py-5 px-8 text-slate-500 font-medium italic underline decoration-slate-200 border-y border-transparent group-hover:border-slate-100">{row.yr}</td>
                          <td className="py-5 px-8 text-[10px] font-black text-slate-400 uppercase tracking-tighter border-y border-transparent group-hover:border-slate-100">{row.head}</td>
                          <td className="py-5 px-8 font-black border-y border-transparent group-hover:border-slate-100"><Revealable value={row.val} id={`history_decl_${i}`} /></td>
                          <td className="py-5 px-8 text-center rounded-r-[1.5rem] border-r border-y border-transparent group-hover:border-slate-100">
                              <span className={cn(
                                "px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest shadow-sm",
                                row.st === 'Approved' ? "bg-emerald-50 text-emerald-600 border border-emerald-100" : "bg-amber-50 text-amber-600 border border-amber-100 animate-pulse"
                              )}>{row.st}</span>
                          </td>
                      </tr>
                    ))}
                </tbody>
            </table>
        </div>
      </div>
    </div>
  );
}
