import { HandCoins, Sparkles, ArrowRight, Info } from 'lucide-react';
import { cn } from '../lib/utils';

export default function LoanTopUp() {
  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom duration-500 pb-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-4xl font-black text-slate-900 tracking-tighter uppercase italic leading-none">Loan <span className="text-indigo-600 underline decoration-indigo-200 underline-offset-8">Top Up</span></h2>
          <p className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-3 leading-none italic">Institutional consolidation and secondary liquidity management</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
        {/* Active Balance Card */}
        <div className="bg-white p-10 rounded-[3.5rem] shadow-sm border border-slate-100 flex flex-col justify-between group hover:border-indigo-600/30 transition-all duration-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50/50 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-indigo-50 transition-all duration-700"></div>
            <div className="relative z-10">
                <div className="flex items-center justify-between mb-12 animate-in slide-in-from-top duration-700">
                    <div className="bg-rose-50 p-5 rounded-3xl text-rose-600 border border-rose-100 shadow-inner group-hover:rotate-12 transition-transform">
                        <HandCoins size={28} />
                    </div>
                    <span className="text-[9px] font-black text-rose-500 bg-rose-50 px-4 py-2 rounded-full uppercase tracking-widest border border-rose-100 shadow-sm transition-all group-hover:scale-110">Servicing Balance</span>
                </div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 leading-none italic underline decoration-slate-100">Historical Residual Debt</p>
                <div className="flex items-baseline gap-4 mb-4">
                    <h3 className="text-5xl font-black text-slate-900 tracking-tighter italic">৳ 45,000</h3>
                    <span className="text-sm font-black text-slate-200 uppercase tracking-widest">REM</span>
                </div>
                <p className="text-[11px] text-slate-500 font-medium leading-relaxed italic border-l-2 border-slate-200 pl-4 py-1">Aggregated outstanding capital across active servicing cycles in the institutional payroll ledger.</p>
            </div>
            <div className="mt-12 pt-8 border-t border-slate-50 flex items-center justify-between relative z-10">
                <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Audit Ref: APR-10-2026-XQ</span>
                <div className="p-2 bg-slate-50 rounded-xl text-slate-300 group-hover:text-indigo-600 transition-colors">
                    <Info size={14} />
                </div>
            </div>
        </div>

        {/* Top-Up Card */}
        <div className="bg-[#0f172a] p-10 rounded-[3.5rem] shadow-2xl text-white flex flex-col justify-between group hover:shadow-indigo-500/20 transition-all duration-700 border border-slate-800 relative overflow-hidden">
            <div className="absolute -right-32 -top-32 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-1000"></div>
            <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                    <div className="flex items-center justify-between mb-12">
                        <div className="bg-indigo-600 p-5 rounded-3xl text-white shadow-2xl shadow-indigo-600/30 border border-white/10 backdrop-blur-md group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                            <Sparkles size={28} className="drop-shadow-lg" />
                        </div>
                        <span className="text-[9px] font-black text-emerald-400 bg-emerald-500/10 px-4 py-2 rounded-full uppercase tracking-widest border border-emerald-500/20 backdrop-blur-md shadow-lg animate-pulse">Approved for Instant Credit</span>
                    </div>
                    <p className="text-[10px] font-black text-indigo-300 uppercase tracking-widest mb-3 leading-none italic underline decoration-white/5">Available Top-up Ceiling</p>
                    <div className="flex items-baseline gap-4 mb-4">
                        <h3 className="text-5xl font-black text-white tracking-tighter italic drop-shadow-2xl">৳ 1,25,000</h3>
                        <span className="text-[11px] font-black text-indigo-400 uppercase tracking-widest bg-white/5 px-2 py-0.5 rounded italic">MAX</span>
                    </div>
                    <p className="text-[11px] text-slate-400 font-medium leading-relaxed italic border-l-2 border-indigo-400/30 pl-4 py-1">Consolidation index based on your current PF valuation and historic repayment reliability indicators.</p>
                </div>
                <div className="mt-12 animate-in slide-in-from-bottom duration-1000 delay-300">
                    <button className="w-full py-6 bg-indigo-600 hover:bg-indigo-500 text-white rounded-[1.8rem] font-black text-xs uppercase tracking-[0.2em] transition-all shadow-2xl shadow-indigo-600/40 flex items-center justify-center gap-4 active:scale-95 group/btn">
                        <span>INITIATE TOP-UP SEQUENCE</span>
                        <ArrowRight size={18} className="group-hover/btn:translate-x-1.5 transition-transform" />
                    </button>
                </div>
            </div>
        </div>
      </div>

      {/* Summary Ledger */}
      <div className="bg-slate-50/80 rounded-[4rem] p-12 md:p-14 border border-slate-100 shadow-inner mt-12 relative overflow-hidden group/ledger">
        <div className="absolute -left-20 -bottom-20 text-[18rem] font-black text-slate-900/5 select-none pointer-events-none group-hover/ledger:scale-110 transition-transform duration-1000 uppercase italic">Ledger</div>
        <h3 className="text-xl font-black text-slate-900 uppercase italic mb-12 tracking-tighter underline decoration-indigo-200 underline-offset-8 decoration-4 relative z-10">Structural Consolidation Summary</h3>
        
        <div className="space-y-8 relative z-10">
            <div className="flex items-center justify-between p-8 bg-white/60 rounded-[2.2rem] border border-white hover:bg-white transition-all shadow-sm group/row">
                <div className="flex items-center gap-8">
                    <div className="bg-slate-50 p-4 rounded-2xl text-slate-400 font-black text-[10px] uppercase tracking-widest shadow-inner group-hover/row:bg-slate-900 group-hover/row:text-white transition-colors duration-500">PHASE 01</div>
                    <div>
                        <p className="text-sm font-black text-slate-900 uppercase italic tracking-tighter underline decoration-slate-100 mb-1">Settlement of History</p>
                        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Auto-closing active residual contracts</p>
                    </div>
                </div>
                <p className="text-xl font-black text-rose-500 italic tracking-tighter">- ৳ 45,000</p>
            </div>

            <div className="flex items-center justify-between p-8 bg-white/60 rounded-[2.2rem] border border-white hover:bg-white transition-all shadow-sm group/row">
                <div className="flex items-center gap-8">
                    <div className="bg-indigo-50 p-4 rounded-2xl text-indigo-400 font-black text-[10px] uppercase tracking-widest shadow-inner group-hover/row:bg-indigo-600 group-hover/row:text-white transition-colors duration-500">PHASE 02</div>
                    <div>
                        <p className="text-sm font-black text-slate-900 uppercase italic tracking-tighter underline decoration-slate-100 mb-1">Fresh Capital Influx</p>
                        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Aggregated consolidated disbursement</p>
                    </div>
                </div>
                <p className="text-xl font-black text-emerald-500 italic tracking-tighter">+ ৳ 1,70,000</p>
            </div>

            <div className="pt-14 border-t-2 border-slate-200/50 mt-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div className="flex-1">
                    <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 bg-indigo-50 border border-indigo-100 rounded-full">
                        <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full animate-pulse shadow-[0_0_8px_rgba(99,102,241,0.5)]"></span>
                        <span className="text-[9px] font-black text-indigo-600 uppercase tracking-[0.2em] italic">Instant Processing Available</span>
                    </div>
                    <h4 className="text-4xl font-black text-slate-900 tracking-tighter uppercase italic leading-none mb-3">Net Capital <br/><span className="text-indigo-600 underline decoration-indigo-100 decoration-8 underline-offset-4">to Institutional Account</span></h4>
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest leading-relaxed">Liquid funds remaining after systematic cross-cycle liability deduction</p>
                </div>
                <div className="text-left md:text-right shrink-0">
                    <div className="inline-block p-8 bg-indigo-600 rounded-[3rem] shadow-2xl relative overflow-hidden group/final animate-in zoom-in duration-1000 delay-500">
                        <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-3xl group-hover/final:scale-125 transition-transform duration-1000"></div>
                        <h4 className="text-5xl font-black text-white tracking-tighter italic relative z-10 leading-none drop-shadow-lg">৳ 1,25,000</h4>
                        <p className="text-[10px] font-black text-indigo-200 uppercase tracking-[0.3em] mt-6 italic relative z-10 border-t border-white/10 pt-4 leading-none text-center">Protocol V-7 Clearance: OK</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
