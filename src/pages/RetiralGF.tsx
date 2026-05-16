import { useState } from 'react';
import { BookOpen, Download, FileBadge, Send, Award, Calculator, Eye, Info, X, CheckCircle } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

export default function RetiralGF() {
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});
  const [showPreview, setShowPreview] = useState(false);

  const toggleReveal = (id: string) => {
    setRevealed(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const Revealable = ({ value, id, variant = 'dark' }: { value: string, id: string, variant?: 'dark' | 'light' | 'indigo' }) => {
    const isRevealed = revealed[id];
    return (
      <div onClick={() => toggleReveal(id)} className="cursor-pointer group/reveal inline-flex flex-col relative leading-none">
        <span className={cn(
          "transition-all font-black text-2xl md:text-5xl",
          !isRevealed && "blur-lg select-none opacity-20",
          isRevealed && variant === 'light' ? "text-white" : variant === 'indigo' ? "text-indigo-900" : "text-slate-900"
        )}>
          {value}
        </span>
        {!isRevealed && <span className={cn("text-[0.4em] absolute tracking-[0.5em] leading-none top-1/2 -translate-y-1/2 font-black italic", variant === 'light' ? "text-white/40" : "text-slate-300")}>••••••</span>}
      </div>
    );
  };

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase italic leading-none">Gratuity <span className="text-indigo-600 underline decoration-indigo-200">Fund</span></h1>
          <p className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-3 leading-none italic">Long-term institutional service recognition records</p>
        </div>
        <div className="flex items-center flex-wrap gap-3">
            <button className="px-5 py-3 bg-white border border-slate-100 text-slate-500 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-50 hover:text-indigo-600 transition-all shadow-sm">
                <BookOpen size={14} className="inline mr-2" /> Policy Overview
            </button>
            <button className="px-5 py-3 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-800 transition-all shadow-xl active:scale-95">
                <FileBadge size={14} className="inline mr-2" /> Download Cert
            </button>
            <button className="px-5 py-3 bg-indigo-50 text-indigo-700 border border-indigo-100 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-indigo-100 transition-all shadow-sm active:scale-95">
                <Send size={14} className="inline mr-2" /> Request Statement
            </button>
        </div>
      </div>

      {/* Hero & Selection */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-4">
        <div className="lg:col-span-2 bg-indigo-900 rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl shadow-indigo-200 group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full -mr-48 -mt-48 blur-3xl transition-transform group-hover:scale-110 duration-1000"></div>
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-16 animate-in slide-in-from-top duration-700">
                <div className="w-16 h-16 bg-white/10 rounded-3xl flex items-center justify-center border border-white/20 backdrop-blur-md shadow-2xl">
                    <Award size={32} className="text-white drop-shadow-xl" />
                </div>
                <div className="text-right">
                    <span className="bg-emerald-500/20 text-emerald-400 text-[10px] font-black px-4 py-2 rounded-full border border-emerald-500/30 uppercase tracking-widest shadow-lg shadow-emerald-500/10">Full Eligibility Attained</span>
                    <p className="text-[10px] text-indigo-400 mt-6 font-bold uppercase tracking-[0.3em] italic">Continuous Tenure</p>
                    <p className="text-3xl font-black text-white italic tracking-tighter mt-1">5Y · 4M · 12D</p>
                </div>
            </div>
            
            <div>
                <p className="text-[10px] font-black text-indigo-200 uppercase tracking-[0.4em] mb-4 leading-none italic">Estimated Total Accrual</p>
                <div className="mb-12">
                   <Revealable value="৳ 4,25,000" id="total_gf" variant="light" />
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-white/10 uppercase tracking-widest">
                    <div>
                        <p className="text-[8px] font-black text-indigo-400 mb-2 leading-none">Last Basic</p>
                        <p className="text-sm font-black text-white cursor-pointer" onClick={() => toggleReveal('gf_basic')}>
                           {revealed['gf_basic'] ? '৳ 45,000' : '৳ ••••••'}
                        </p>
                    </div>
                    <div>
                        <p className="text-[8px] font-black text-indigo-400 mb-2 leading-none">Factor</p>
                        <p className="text-sm font-black text-white italic">15 / 26</p>
                    </div>
                    <div>
                        <p className="text-[8px] font-black text-indigo-400 mb-2 leading-none">Vesting Status</p>
                        <p className="text-sm font-black text-emerald-400">PASSED</p>
                    </div>
                    <div>
                        <p className="text-[8px] font-black text-indigo-400 mb-2 leading-none">Next Milestone</p>
                        <p className="text-sm font-black text-white opacity-60">6 Years</p>
                    </div>
                </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[3rem] p-10 border border-slate-100 shadow-sm flex flex-col justify-between group hover:border-indigo-600/20 transition-all">
          <div>
            <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-8 border border-indigo-100 shadow-inner group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500">
              <Calculator size={28} />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-3 tracking-tighter uppercase italic leading-none">Payout Preview</h3>
            <p className="text-xs font-medium text-slate-500 mb-10 leading-relaxed italic border-l-2 border-slate-100 pl-4">Simulate your institutional gratuity payout based on target departure dates for retirement planning.</p>
            
            <div className="space-y-4">
              <div className="p-6 bg-slate-50/50 rounded-[1.8rem] border border-slate-100 group/input focus-within:border-indigo-600 transition-all shadow-inner">
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3 leading-none italic">Departure Valuation Date</p>
                <input type="date" className="w-full bg-transparent border-none text-base font-black text-slate-900 outline-none uppercase tracking-tighter" defaultValue="2027-12-31" />
              </div>
            </div>
          </div>
          <button 
            onClick={() => setShowPreview(true)}
            className="w-full mt-10 py-5 bg-indigo-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-indigo-700 transition-all shadow-2xl shadow-indigo-500/20 active:scale-95 flex items-center justify-center gap-3"
          >
            VALUATE PAYOUT <div className="p-1 bg-white/20 rounded-lg"><Eye size={12} /></div>
          </button>
        </div>
      </div>

      {/* Breakdown Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
        <div className="lg:col-span-8 bg-white rounded-[3.5rem] p-10 md:p-12 border border-slate-100 shadow-sm overflow-hidden">
            <h3 className="text-sm font-black text-slate-900 mb-12 uppercase tracking-widest underline decoration-indigo-200 underline-offset-8 decoration-4">Calculation Methodology</h3>
            <div className="flex flex-col md:flex-row gap-8 items-stretch mb-12">
                <div className="flex-1 p-8 bg-slate-50/50 rounded-[2.5rem] border border-slate-100 shadow-inner relative group/math overflow-hidden">
                    <div className="absolute -left-4 -bottom-4 text-9xl font-black text-slate-900/5 group-hover/math:scale-110 transition-transform">Σ</div>
                    <p className="text-[10px] font-black text-slate-400 uppercase mb-8 leading-none italic tracking-widest underline decoration-slate-200 underline-offset-4">Statutory Formula</p>
                    <div className="flex items-center gap-6 relative z-10">
                        <div className="text-center bg-white p-3 rounded-2xl border border-slate-100 shadow-sm">
                            <p className="text-xl font-black text-slate-900">15</p>
                            <div className="h-0.5 bg-slate-300 w-full my-1 rounded-full"></div>
                            <p className="text-xl font-black text-slate-900">26</p>
                        </div>
                        <span className="text-xl font-black text-slate-200">×</span>
                        <div className="bg-white p-3 px-5 rounded-2xl border border-slate-100 shadow-sm">
                            <p className="text-[8px] font-black text-slate-400 uppercase mb-1">Basic Pay</p>
                            <p className="text-lg font-black text-slate-900">৳ 45,000</p>
                        </div>
                        <span className="text-xl font-black text-slate-200">×</span>
                        <div className="bg-white p-3 px-5 rounded-2xl border border-slate-100 shadow-sm">
                            <p className="text-[8px] font-black text-slate-400 uppercase mb-1">Tenure</p>
                            <p className="text-lg font-black text-slate-900">5.33 Y</p>
                        </div>
                    </div>
                </div>
                <div className="flex-1 bg-indigo-50 border-2 border-indigo-100/50 rounded-[2.5rem] p-10 flex flex-col justify-center relative overflow-hidden group/final">
                    <div className="absolute right-0 bottom-0 w-32 h-32 bg-indigo-600/5 rounded-full blur-2xl -mr-16 -mt-16 group-hover/final:scale-110 transition-transform duration-700"></div>
                    <p className="text-[10px] font-black text-indigo-400 uppercase mb-3 leading-none italic tracking-widest relative z-10">Final Calculation</p>
                    <div className="relative z-10" onClick={() => toggleReveal('calc_final')}>
                        <Revealable value="৳ 4,25,000" id="calc_final" variant="indigo" />
                    </div>
                    <p className="text-[9px] text-indigo-600/60 mt-6 font-bold tracking-widest relative z-10">Subject to withholding tax (S.102)</p>
                </div>
            </div>

            <div className="p-8 bg-amber-50 rounded-[2.5rem] border border-amber-100 flex items-start gap-6 shadow-inner animate-in zoom-in duration-700">
                <div className="w-14 h-14 bg-white rounded-3xl flex items-center justify-center shadow-lg shadow-amber-200/50 shrink-0 border border-amber-50">
                    <Info size={28} className="text-amber-500" />
                </div>
                <div>
                    <h4 className="text-base font-black text-amber-900 mb-2 uppercase italic leading-none tracking-tighter">Tenure Milestone Reached</h4>
                    <p className="text-xs text-amber-700/80 leading-relaxed italic font-medium">Under the Corporate Gratuity Trust Bylaws (Rev. 2024), institutional benefits are payable after 5 years of uninterrupted tenure. You have achieved 100% eligibility for the employer contribution pool.</p>
                </div>
            </div>
        </div>

        <div className="lg:col-span-4 space-y-8 h-full">
            <div className="bg-white rounded-[3rem] p-10 border border-slate-100 shadow-sm flex flex-col justify-between h-full group">
                <div>
                    <h3 className="text-sm font-black text-slate-900 mb-8 uppercase tracking-widest underline decoration-indigo-100 underline-offset-8">Data Export Hub</h3>
                    <p className="text-xs font-medium text-slate-400 mb-12 leading-relaxed italic">Generate official institutional records for personal portfolio auditing or banking applications.</p>
                    <div className="space-y-4">
                        <button className="w-full py-5 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-800 transition-all flex items-center justify-center gap-3 shadow-2xl shadow-slate-950/20 group-hover:translate-x-1 group-hover:translate-y-[-2px]">
                            <Download size={16} /> Download PDF Report
                        </button>
                        <button className="w-full py-5 bg-slate-50 text-slate-500 border border-slate-100 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-100 hover:text-slate-900 transition-all flex items-center justify-center gap-3 shadow-inner">
                            <Download size={16} /> Export Aggregated CSV
                        </button>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* Payout Preview Modal */}
      <AnimatePresence>
        {showPreview && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-slate-950/80 backdrop-blur-2xl">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 100 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 100 }}
              className="bg-white rounded-[4rem] p-12 max-w-xl w-full shadow-[0_50px_100px_rgba(0,0,0,0.5)] relative border border-slate-100 overflow-hidden"
            >
              <button 
                onClick={() => setShowPreview(false)}
                className="absolute top-10 right-10 p-3 text-slate-400 hover:text-slate-900 bg-slate-50 rounded-2xl"
              >
                <X size={20} />
              </button>

              <div className="flex items-center gap-6 mb-12">
                  <div className="w-16 h-16 bg-indigo-50 rounded-3xl flex items-center justify-center text-indigo-600 shadow-inner border border-indigo-100">
                      <Award size={32} />
                  </div>
                  <div>
                      <h3 className="text-3xl font-black text-slate-900 uppercase italic tracking-tighter leading-none">Valuation Result</h3>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-2">Projected for Dec 2027</p>
                  </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 shadow-inner">
                      <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-4 italic">Total Years (Proj.)</p>
                      <h4 className="text-3xl font-black text-slate-900 tracking-tighter italic">7.0 <span className="text-sm font-bold text-slate-300 not-italic uppercase">Years</span></h4>
                  </div>
                  <div className="p-8 bg-indigo-600 rounded-[2.5rem] text-white shadow-2xl shadow-indigo-500/30">
                      <p className="text-[9px] font-black text-indigo-200 uppercase tracking-widest mb-4 italic">Estimated Payout</p>
                      <h4 className="text-3xl font-black tracking-tighter italic underline decoration-white/30 decoration-4">৳ 6,05,769</h4>
                  </div>
              </div>

              <div className="p-8 bg-emerald-50 rounded-[2.5rem] border-2 border-emerald-100/50 mb-12">
                  <p className="text-xs text-emerald-800 font-medium leading-relaxed italic flex gap-3">
                      <CheckCircle size={18} className="shrink-0 text-emerald-500" />
                      Valuation assumes no changes to base salary and active continuous tenure until the target date. Actual payout may vary based on final institutional audit.
                  </p>
              </div>

              <button 
                onClick={() => setShowPreview(false)}
                className="w-full py-5 bg-slate-900 text-white rounded-[2rem] font-black text-xs uppercase tracking-widest hover:bg-slate-800 transition-all shadow-2xl active:scale-95"
              >
                CLOSE VALUATION BRIEF
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
