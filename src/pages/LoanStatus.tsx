import { useState } from 'react';
import { Landmark, Info, Download, CheckCircle, CreditCard } from 'lucide-react';
import { cn } from '../lib/utils';

export default function LoanStatus() {
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});

  const toggleReveal = (id: string) => {
    setRevealed(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const Revealable = ({ value, id, variant = 'dark' }: { value: string, id: string, variant?: 'dark' | 'light' | 'emerald' | 'rose' | 'indigo' }) => {
    const isRevealed = revealed[id];
    return (
      <div onClick={() => toggleReveal(id)} className="cursor-pointer group/reveal inline-flex flex-col relative leading-none">
        <span className={cn(
          "transition-all font-black",
          !isRevealed && "blur-lg select-none opacity-20",
          isRevealed && variant === 'light' ? "text-white" : variant === 'emerald' ? "text-emerald-300" : variant === 'rose' ? "text-rose-300" : variant === 'indigo' ? "text-indigo-600" : "text-slate-900"
        )}>
          {value}
        </span>
        {!isRevealed && <span className={cn("text-[0.4em] absolute tracking-[0.5em] leading-none top-1/2 -translate-y-1/2 font-black", variant === 'light' ? "text-white/40" : "text-slate-300")}>••••••</span>}
      </div>
    );
  };

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-4">
        {/* Loan Status Card (Hero) */}
        <div className="lg:col-span-2 bg-indigo-600 rounded-[3.5rem] p-10 text-white relative overflow-hidden shadow-2xl shadow-indigo-200 group">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -mr-40 -mt-40 blur-3xl transition-transform group-hover:scale-110 duration-1000"></div>
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-12">
              <div>
                <span className="bg-indigo-400/30 text-indigo-100 text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest border border-indigo-400/30 backdrop-blur-md">Personal Loan (PF Basis)</span>
                <h2 className="text-5xl font-black mt-6 italic tracking-tighter uppercase underline decoration-indigo-400/50 underline-offset-8">Loan Status</h2>
              </div>
              <div className="w-16 h-16 bg-white/10 rounded-3xl flex items-center justify-center border border-white/20 backdrop-blur-md shadow-2xl group-hover:rotate-12 transition-transform">
                <Landmark size={32} className="text-white" />
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-8">
              <div className="flex flex-col gap-2">
                <p className="text-[10px] font-black text-indigo-200 uppercase tracking-widest leading-none">Total Principal</p>
                <div className="text-3xl font-black leading-none"><Revealable value="৳ 2,00,000" id="l_total" variant="light" /></div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[10px] font-black text-indigo-200 uppercase tracking-widest leading-none">Paid Aggregate</p>
                <div className="text-3xl font-black leading-none"><Revealable value="৳ 85,000" id="l_paid" variant="emerald" /></div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[10px] font-black text-indigo-200 uppercase tracking-widest leading-none">Net Outstanding</p>
                <div className="text-3xl font-black leading-none"><Revealable value="৳ 1,15,000" id="l_rem" variant="rose" /></div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-14 space-y-3">
              <div className="flex justify-between text-[10px] font-black text-indigo-100 uppercase tracking-widest italic">
                <span>Instalment Progress</span>
                <span className="bg-white/10 px-2 py-0.5 rounded border border-white/10">42.5% Completed</span>
              </div>
              <div className="w-full bg-indigo-900/50 h-3 rounded-full overflow-hidden shadow-inner border border-white/5 p-0.5">
                <div className="bg-gradient-to-r from-emerald-400 to-emerald-200 h-full w-[42.5%] rounded-full shadow-[0_0_15px_rgba(52,211,153,0.4)] transition-all duration-1000 delay-300"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Loan Details Card */}
        <div className="bg-white rounded-[3rem] p-10 border border-slate-100 shadow-sm flex flex-col justify-between group hover:border-indigo-600/20 transition-all">
          <div>
            <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-8 border border-indigo-100 shadow-inner group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500">
              <Info size={28} />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-8 uppercase italic underline decoration-slate-100 underline-offset-4 tracking-tighter">Finance Brief</h3>
            
            <div className="space-y-8">
              <div className="flex justify-between items-center pb-4 border-b border-slate-50">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Interest Index</span>
                <span className="text-sm font-black text-slate-900 font-mono tracking-tighter italic">9.0% P.A.</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-slate-50">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Equated Empl. (EMI)</span>
                <Revealable value="৳ 8,500" id="l_emi" variant="indigo" />
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-slate-50">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Tenure Contract</span>
                <span className="text-sm font-black text-slate-900 tracking-tighter uppercase italic">24 Months</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Cycle Activation</span>
                <span className="text-sm font-black text-slate-900 tracking-tighter uppercase italic underline decoration-slate-100">Oct 2025</span>
              </div>
            </div>
          </div>
          <button className="mt-12 w-full py-4 bg-slate-900 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-slate-800 transition-all shadow-2xl active:scale-95">
            INITIATE EARLY SETTLEMENT
          </button>
        </div>
      </div>

      {/* History Table */}
      <div className="bg-white rounded-[3.5rem] p-10 md:p-12 border border-slate-100 shadow-sm overflow-hidden">
        <div className="flex justify-between items-center mb-12">
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest underline decoration-indigo-200 underline-offset-8 decoration-4">Servicing History</h3>
            <button className="p-3 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-all text-slate-400 hover:text-slate-900 shadow-inner">
                <Download size={18} />
            </button>
        </div>
        <div className="overflow-x-auto">
            <table className="w-full text-left border-separate border-spacing-y-4">
                <thead>
                    <tr className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em] leading-none">
                        <th className="px-6">Bill Month</th>
                        <th className="px-6">Serviced Amt</th>
                        <th className="px-6">Residual Balance</th>
                        <th className="px-6 text-center">Protocol</th>
                    </tr>
                </thead>
                <tbody className="text-sm">
                    {[
                      { month: 'April 2026', emi: '৳ 8,500', rem: '৳ 1,15,000' },
                      { month: 'March 2026', emi: '৳ 8,500', rem: '৳ 1,23,500' }
                    ].map((row, i) => (
                      <tr key={i} className="bg-slate-50/50 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all rounded-[1.8rem] group border border-transparent hover:border-slate-100">
                          <td className="py-6 px-10 font-bold text-slate-800 rounded-l-[1.8rem] border-l border-y border-transparent group-hover:border-slate-100">{row.month}</td>
                          <td className="py-6 px-10 border-y border-transparent group-hover:border-slate-100 font-black text-slate-900">
                             <div onClick={() => toggleReveal(`row_emi_${i}`)} className="cursor-pointer group/reveal inline-flex flex-col relative leading-none">
                                <span className={cn("transition-all font-black text-slate-900", !revealed[`row_emi_${i}`] && "blur-md select-none opacity-30")}>{row.emi}</span>
                                {!revealed[`row_emi_${i}`] && <span className="text-[0.7em] absolute tracking-widest leading-none top-1/2 -translate-y-1/2 text-slate-300">••••</span>}
                             </div>
                          </td>
                          <td className="py-6 px-10 border-y border-transparent group-hover:border-slate-100 text-slate-400 font-medium italic">
                             <div onClick={() => toggleReveal(`row_rem_${i}`)} className="cursor-pointer group/reveal inline-flex flex-col relative leading-none">
                                <span className={cn("transition-all font-black text-slate-400", !revealed[`row_rem_${i}`] && "blur-md select-none opacity-30")}>{row.rem}</span>
                                {!revealed[`row_rem_${i}`] && <span className="text-[0.7em] absolute tracking-widest leading-none top-1/2 -translate-y-1/2 text-slate-300">••••</span>}
                             </div>
                          </td>
                          <td className="py-6 px-10 text-center rounded-r-[1.8rem] border-r border-y border-transparent group-hover:border-slate-100">
                              <span className="bg-emerald-50 text-emerald-600 text-[9px] font-black px-4 py-2 rounded-full uppercase tracking-widest border border-emerald-100 shadow-sm transition-all group-hover:bg-emerald-600 group-hover:text-white">Auto-Debit</span>
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
