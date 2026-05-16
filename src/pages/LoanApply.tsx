import { useState, useMemo } from 'react';
import { CheckCircle, Calculator, Info, FileText, X, AlertCircle } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

export default function LoanApply() {
  const [amount, setAmount] = useState<string>('0');
  const [duration, setDuration] = useState<string>('24');
  const [showConfirm, setShowConfirm] = useState(false);
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});

  const toggleReveal = (id: string) => {
    setRevealed(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const calculation = useMemo(() => {
    const p = parseFloat(amount) || 0;
    const n = parseInt(duration) || 24;
    const r = 0.09 / 12; // 9% P.A. monthly

    if (p <= 0) return { emi: 0, total: 0, interest: 0 };

    const emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const total = emi * n;
    return {
      emi: Math.round(emi),
      total: Math.round(total),
      interest: Math.round(total - p)
    };
  }, [amount, duration]);

  const Revealable = ({ value, id, variant = 'dark' }: { value: string, id: string, variant?: 'dark' | 'indigo' | 'emerald' }) => {
    const isRevealed = revealed[id];
    return (
      <div onClick={() => toggleReveal(id)} className="cursor-pointer group/reveal inline-flex flex-col relative leading-none">
        <span className={cn(
          "transition-all font-black text-xl leading-none",
          !isRevealed && "blur-md select-none opacity-40",
          isRevealed && variant === 'indigo' ? "text-indigo-600" : isRevealed && variant === 'emerald' ? "text-emerald-700" : "text-slate-900"
        )}>
          {value}
        </span>
        {!isRevealed && <span className="text-[0.6em] absolute tracking-widest leading-none top-1/2 -translate-y-1/2 text-slate-300">••••</span>}
      </div>
    );
  };

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-4">
        {/* Eligibility Card */}
        <div className="lg:col-span-2 bg-white rounded-[3.5rem] p-10 md:p-12 border border-slate-100 shadow-sm relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50/50 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-indigo-100 transition-all duration-700"></div>
          <div className="flex items-center gap-6 mb-12 relative z-10">
            <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center border border-indigo-100 shadow-inner group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500">
              <CheckCircle size={28} />
            </div>
            <div>
              <h3 className="text-3xl font-black text-slate-900 uppercase italic tracking-tighter leading-none">Limit Eligibility</h3>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-2">Calculated from institutional PF reserves</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 relative z-10">
            <div className="p-8 bg-slate-50 rounded-[2.2rem] border border-slate-100 shadow-inner">
               <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-3 italic">PF Servicing Balance</p>
               <Revealable value="৳ 8,45,000" id="pf_bal" />
            </div>
            <div className="p-8 bg-indigo-50/50 border-2 border-indigo-100 rounded-[2.2rem] shadow-sm">
               <p className="text-[9px] font-black text-indigo-400 uppercase tracking-widest mb-3 italic leading-none">Net Borrowable (80%)</p>
               <Revealable value="৳ 6,76,000" id="pf_elig" variant="indigo" />
            </div>
            <div className="p-8 bg-emerald-50 rounded-[2.2rem] border-2 border-emerald-100/50 shadow-sm">
               <p className="text-[9px] font-black text-emerald-600 uppercase tracking-widest mb-3 italic leading-none">Disbursement Ceiling</p>
               <Revealable value="৳ 6,76,000" id="pf_ceil" variant="emerald" />
            </div>
          </div>

          <div className="space-y-6 relative z-10 border-t border-slate-50 pt-10">
              <div className="flex justify-between items-center px-4">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest italic decoration-slate-100 underline underline-offset-4">Empl. Fund Contribution (Valuation)</span>
                  <Revealable value="৳ 4,22,500" id="empl_v" />
              </div>
              <div className="flex justify-between items-center px-4">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest italic decoration-slate-100 underline underline-offset-4">Employer Matching (Valuation)</span>
                  <Revealable value="৳ 4,22,500" id="emplr_v" />
              </div>
          </div>
        </div>

        {/* APR Card */}
        <div className="bg-indigo-900 rounded-[3.5rem] p-10 text-white relative overflow-hidden shadow-2xl shadow-indigo-100 flex flex-col justify-between group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/10 rounded-full -mr-24 -mt-24 blur-3xl transition-transform group-hover:scale-125 duration-1000"></div>
            <div className="relative z-10">
                <h3 className="text-[10px] font-black mb-10 uppercase tracking-[0.4em] text-indigo-300 italic border-l-2 border-indigo-400 pl-4">Servicing APR</h3>
                <div className="flex items-baseline gap-4 mb-2">
                    <span className="text-8xl font-black italic tracking-tighter leading-none drop-shadow-2xl">9.0</span>
                    <span className="text-3xl font-black text-indigo-400 italic font-mono">%</span>
                </div>
                <p className="text-[11px] font-bold text-indigo-100 mt-4 uppercase tracking-[0.2em] leading-relaxed">Reducing Balance Optimization · Per Annum</p>
            </div>
            <div className="mt-12 p-6 bg-white/5 rounded-[1.8rem] border border-white/10 backdrop-blur-md relative z-10 italic shadow-2xl">
                <p className="text-[11px] font-medium text-indigo-100/80 leading-relaxed">"Preferential institutional rates exclusive to validated employee profiles."</p>
            </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Application Form */}
        <div className="lg:col-span-2 bg-white rounded-[3rem] p-10 md:p-12 border border-slate-100 shadow-sm">
          <h3 className="text-sm font-black text-slate-900 mb-12 uppercase tracking-widest underline decoration-indigo-100 underline-offset-8 decoration-4 leading-none">Credit Application Entry</h3>
          <form className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 italic leading-none">Desired Capital (৳)</label>
                <div className="relative">
                   <span className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 font-black text-lg">৳</span>
                   <input 
                    type="number" 
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full bg-slate-50 border-2 border-slate-100 rounded-[1.5rem] py-5 pl-10 pr-6 font-black text-lg text-slate-900 focus:outline-none focus:border-indigo-600 focus:bg-white transition-all shadow-inner" 
                   />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 italic leading-none">Capital Purpose</label>
                <select className="w-full bg-slate-50 border-2 border-slate-100 rounded-[1.5rem] py-5 px-6 font-black text-slate-900 focus:outline-none focus:border-indigo-600 focus:bg-white transition-all appearance-none cursor-pointer shadow-inner">
                  <option>Institutional Personal Loan</option>
                  <option>Estate Construction / Reniv.</option>
                  <option>Critical Healthcare Event</option>
                  <option>Academic Infrastructure</option>
                </select>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 italic leading-none">Tenure Contract (Months)</label>
                <select 
                   value={duration}
                   onChange={(e) => setDuration(e.target.value)}
                   className="w-full bg-slate-50 border-2 border-slate-100 rounded-[1.5rem] py-5 px-6 font-black text-slate-900 focus:outline-none focus:border-indigo-600 focus:bg-white transition-all appearance-none cursor-pointer shadow-inner"
                >
                  <option value="12">12 Months (Short Term)</option>
                  <option value="24">24 Months (Standard)</option>
                  <option value="36">36 Months (Extended)</option>
                  <option value="48">48 Months (Max Tenure)</option>
                </select>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 italic leading-none">Justification Brief</label>
                <input type="text" placeholder="Reason for capital..." className="w-full bg-slate-50 border-2 border-slate-100 rounded-[1.5rem] py-5 px-6 font-black text-slate-900 focus:outline-none focus:border-indigo-600 focus:bg-white transition-all shadow-inner" />
              </div>
            </div>
            
            <button 
              type="button" 
              onClick={() => setShowConfirm(true)}
              className="w-full py-6 bg-indigo-600 text-white rounded-[2rem] font-black text-xs uppercase tracking-[0.2em] hover:bg-indigo-700 transition-all shadow-2xl shadow-indigo-500/20 active:scale-[0.98]"
            >
              INITIALIZE LOGISTICS VERIFICATION
            </button>
          </form>
        </div>

        {/* Live Preview */}
        <div className="bg-white rounded-[3rem] p-10 border border-slate-100 shadow-sm flex flex-col justify-between transition-all hover:bg-slate-50/50">
            <div>
                <h3 className="text-sm font-black text-slate-900 mb-12 uppercase tracking-widest italic leading-none">Simulation Ledger</h3>
                <div className="space-y-10">
                    <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 shadow-inner group/emi overflow-hidden relative">
                        <div className="absolute right-0 bottom-0 text-7xl font-black text-indigo-600/5 group-hover/emi:scale-110 transition-transform">PAY</div>
                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-3 leading-none italic relative z-10">Servicing EMI (Equated)</p>
                        <p className="text-5xl font-black text-indigo-600 tracking-tighter italic relative z-10 leading-none">৳{calculation.emi.toLocaleString()}</p>
                    </div>
                    <div className="space-y-6 pt-4">
                        <div className="flex justify-between items-center px-4">
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest italic decoration-slate-100 underline underline-offset-4">Aggregate Liquidity</span>
                            <span className="text-sm font-black text-slate-900 italic tracking-tighter">৳{calculation.total.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center px-4">
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest italic decoration-slate-100 underline underline-offset-4">Capitalization Int.</span>
                            <span className="text-sm font-black text-rose-500 italic tracking-tighter">৳{calculation.interest.toLocaleString()}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-12 p-6 bg-amber-50 rounded-[1.8rem] border-2 border-amber-100/50 flex items-start gap-4">
                <AlertCircle size={20} className="text-amber-500 shrink-0 mt-0.5" />
                <p className="text-[10px] font-bold text-amber-700 leading-relaxed italic uppercase tracking-tighter">EMI servicing will be auto-debited from institutional payroll ledger accounts.</p>
            </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      <AnimatePresence>
        {showConfirm && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-950/80 backdrop-blur-2xl">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 100 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 100 }}
              className="bg-white rounded-[4rem] p-12 max-w-md w-full shadow-[0_50px_100px_rgba(0,0,0,0.5)] relative border border-slate-100 text-center"
            >
              <div className="w-24 h-24 bg-indigo-50 rounded-[2.5rem] flex items-center justify-center mx-auto mb-10 border border-indigo-100 shadow-inner group">
                <FileText size={40} className="text-indigo-600 group-hover:rotate-12 transition-transform duration-500" />
              </div>
              <h3 className="text-3xl font-black text-slate-900 uppercase italic tracking-tighter leading-none mb-3">Verification Brief</h3>
              <p className="text-xs font-medium text-slate-400 mb-12 leading-relaxed italic">Review institutional financing metrics before finalizing statutory disbursement sequence.</p>
              
              <div className="space-y-6 mb-12">
                <div className="flex justify-between items-center p-5 bg-slate-50 rounded-2xl border border-slate-100 shadow-inner">
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Target Capital</span>
                    <span className="text-lg font-black text-slate-900 italic tracking-tighter">৳{parseFloat(amount).toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center p-5 bg-slate-50 rounded-2xl border border-slate-100 shadow-inner">
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Cycle Duration</span>
                    <span className="text-lg font-black text-slate-900 italic tracking-tighter">{duration} Months</span>
                </div>
                <div className="flex justify-between items-center p-5 bg-indigo-50 rounded-2xl border border-indigo-100 shadow-inner">
                    <span className="text-[9px] font-black text-indigo-400 uppercase tracking-widest">Servicing EMI</span>
                    <span className="text-lg font-black text-indigo-600 italic tracking-tighter">৳{calculation.emi.toLocaleString()}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button 
                  onClick={() => setShowConfirm(false)}
                  className="py-5 bg-slate-50 text-slate-500 rounded-3xl font-black text-[10px] uppercase tracking-widest hover:bg-slate-100 active:scale-95 transition-all shadow-inner"
                >
                  DISCARD
                </button>
                <button 
                  onClick={() => { alert("Application Dispatched!"); setShowConfirm(false); }}
                  className="py-5 bg-indigo-600 text-white rounded-3xl font-black text-[10px] uppercase tracking-widest hover:bg-indigo-700 active:scale-95 transition-all shadow-2xl shadow-indigo-500/30"
                >
                  DISPATCH LOGS
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
