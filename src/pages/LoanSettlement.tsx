import { useState } from 'react';
import { Calculator, CheckSquare, MinusSquare, Info, CheckCircle2, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

export default function LoanSettlement() {
  const [selectedType, setSelectedType] = useState<'full' | 'partial' | null>(null);
  const [partialAmount, setPartialAmount] = useState<string>('');
  const [showSuccess, setShowSuccess] = useState(false);
  
  const remainingProjected = 115000;
  const currentPartial = parseFloat(partialAmount) || 0;
  const newBalance = Math.max(0, remainingProjected - currentPartial);

  const [revealed, setRevealed] = useState<Record<string, boolean>>({});
  const toggleReveal = (id: string) => setRevealed(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-4">
        {/* Settlement Summary */}
        <div className="lg:col-span-2 bg-white rounded-[3.5rem] p-10 md:p-12 border border-slate-100 shadow-sm relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-48 h-48 bg-amber-50/50 rounded-full blur-3xl -mr-24 -mt-24 group-hover:bg-amber-100 transition-all duration-700"></div>
          <div className="flex items-center gap-6 mb-12 relative z-10">
            <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center border border-amber-100 shadow-inner group-hover:scale-110 transition-transform">
              <Calculator size={28} className="text-amber-500" />
            </div>
            <div>
              <h3 className="text-3xl font-black text-slate-900 uppercase italic tracking-tighter leading-none">Settlement Brief</h3>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-2 leading-none">Institutional audit of outstanding capital</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-1 relative z-10">
            <div className="p-8 bg-rose-50/50 border-2 border-rose-100 rounded-[2.5rem] shadow-sm group/card transition-all hover:bg-rose-50 cursor-pointer" onClick={() => toggleReveal('s_rem')}>
              <p className="text-[10px] font-black text-rose-600 uppercase tracking-widest mb-3 leading-none italic underline decoration-rose-200">Current Residual</p>
              <h4 className={cn("text-3xl font-black text-rose-700 italic tracking-tighter transition-all leading-none", !revealed['s_rem'] && "blur-md opacity-20")}>৳ 1,15,000</h4>
              {!revealed['s_rem'] && <span className="absolute bottom-10 left-8 text-[0.6em] font-black text-rose-200 tracking-widest">••••••</span>}
            </div>
            <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 shadow-inner hover:bg-slate-100 transition-all cursor-pointer" onClick={() => toggleReveal('s_paid')}>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 leading-none italic">Total Cleared</p>
              <h4 className={cn("text-3xl font-black text-slate-900 italic tracking-tighter transition-all leading-none", !revealed['s_paid'] && "blur-md opacity-20")}>৳ 85,000</h4>
              {!revealed['s_paid'] && <span className="absolute bottom-10 left-8 text-[0.6em] font-black text-slate-300 tracking-widest">••••••</span>}
            </div>
            <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 shadow-inner flex flex-col justify-center">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 leading-none italic">Queue Duration</p>
              <h4 className="text-3xl font-black text-slate-900 italic tracking-tighter transition-all leading-none">14 <span className="text-xs uppercase not-italic text-slate-300">Mo</span></h4>
            </div>
          </div>
        </div>

        {/* Projection Card */}
        <div className="bg-indigo-900 rounded-[3.5rem] p-10 text-white relative overflow-hidden shadow-2xl shadow-indigo-100 flex flex-col justify-between group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full -mr-32 -mt-32 blur-3xl transition-transform group-hover:scale-125"></div>
            <div className="relative z-10 h-full flex flex-col">
                <h3 className="text-[10px] font-black mb-12 uppercase tracking-[0.4em] text-indigo-300 italic border-l-2 border-indigo-400 pl-4 leading-none">Protocol Projection</h3>
                <div className="space-y-10 flex-1 flex flex-col justify-center">
                    <div className="flex justify-between items-center px-4">
                        <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest leading-none">Ledger Base</span>
                        <span className="text-lg font-black italic tracking-tighter">৳ 1,15,000</span>
                    </div>
                    <div className="flex justify-between items-center px-4 relative">
                        <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest leading-none">Settle Target</span>
                        <span className="text-xl font-black text-emerald-400 italic tracking-tighter transition-all">- ৳{currentPartial.toLocaleString()}</span>
                    </div>
                    <div className="pt-10 border-t border-white/10 flex justify-between items-end px-4">
                        <span className="text-[10px] font-black text-indigo-200 uppercase tracking-widest leading-none mb-1 italic underline decoration-indigo-700 underline-offset-4">Net Remaining</span>
                        <span className="text-4xl font-black italic tracking-tighter drop-shadow-2xl">৳{newBalance.toLocaleString()}</span>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Options */}
        <div className="lg:col-span-2 bg-white rounded-[3.5rem] p-10 md:p-12 border border-slate-100 shadow-sm">
          <h3 className="text-sm font-black text-slate-900 mb-12 uppercase tracking-widest underline decoration-indigo-100 underline-offset-8 decoration-4 leading-none italic">Settlement Directives</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <button 
                onClick={() => { setSelectedType('full'); setPartialAmount(remainingProjected.toString()); }}
                className={cn(
                    "p-10 border-4 rounded-[3rem] transition-all group/opt text-left relative overflow-hidden",
                    selectedType === 'full' ? "bg-indigo-600 border-indigo-600 shadow-2xl shadow-indigo-100 text-white translate-y-[-4px]" : "bg-slate-50/50 border-slate-100 hover:border-indigo-200 text-slate-900"
                )}
            >
                <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-inner transition-all", selectedType === 'full' ? "bg-white/10 text-white scale-110" : "bg-white text-slate-300 group-hover/opt:text-indigo-600 shadow-md")}>
                    <CheckSquare size={32} />
                </div>
                <h4 className="text-xl font-black uppercase italic tracking-tighter leading-none mb-3">Terminate Contract</h4>
                <p className={cn("text-xs font-medium leading-relaxed italic opacity-80", selectedType === 'full' ? "text-indigo-100" : "text-slate-500")}>Auto-close the entire institutional debt cycle for a net outcome of zero residual liability.</p>
                {selectedType === 'full' && (
                    <motion.div layoutId="sel-bg" className="absolute -right-4 -bottom-4 text-9xl font-black text-white/5 select-none pointer-events-none">FULL</motion.div>
                )}
            </button>

            <div 
                onClick={() => setSelectedType('partial')}
                className={cn(
                    "p-10 border-4 rounded-[3rem] transition-all group/opt text-left relative overflow-hidden cursor-pointer",
                    selectedType === 'partial' ? "bg-indigo-600 border-indigo-600 shadow-2xl shadow-indigo-100 text-white translate-y-[-4px]" : "bg-slate-50/50 border-slate-100 hover:border-indigo-200 text-slate-900"
                )}
            >
                <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-inner transition-all", selectedType === 'partial' ? "bg-white/10 text-white scale-110" : "bg-white text-slate-300 group-hover/opt:text-indigo-600 shadow-md")}>
                    <MinusSquare size={32} />
                </div>
                <h4 className="text-xl font-black uppercase italic tracking-tighter leading-none mb-3">Partial Servicing</h4>
                <p className={cn("text-xs font-medium leading-relaxed italic opacity-80", selectedType === 'partial' ? "text-indigo-100" : "text-slate-500")}>Inject manual capital to lower the principal base index and restructure monthly EMI impact.</p>
                
                {selectedType === 'partial' && (
                    <div className="mt-8 animate-in slide-in-from-top duration-300">
                        <input 
                            type="number" 
                            autoFocus
                            placeholder="Enter Custom capital..."
                            value={partialAmount}
                            onChange={(e) => setPartialAmount(e.target.value)}
                            onClick={(e) => e.stopPropagation()}
                            className="w-full bg-white/10 border-2 border-white/20 rounded-2xl py-4 px-6 font-black text-white placeholder-indigo-300/50 focus:outline-none focus:border-white focus:bg-white/20 transition-all text-sm shadow-inner"
                        />
                    </div>
                )}
            </div>
          </div>

          <div className="mt-14 space-y-6 pt-10 border-t-2 border-slate-50">
            <div className="flex items-center gap-4">
               <div className="w-1 h-1 rounded-full bg-indigo-400"></div>
               <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Protocol V-7 Execution Queue</p>
            </div>
            <button 
                onClick={() => { if(!selectedType || (selectedType==='partial' && !currentPartial)) return; setShowSuccess(true); }}
                className={cn(
                    "w-full py-6 rounded-[2.2rem] font-black text-xs uppercase tracking-[0.2em] transition-all shadow-2xl active:scale-95",
                    selectedType ? "bg-indigo-600 text-white hover:bg-slate-900 shadow-indigo-500/20" : "bg-slate-100 text-slate-300 cursor-not-allowed shadow-none"
                )}
            >
                FINALIZE INSTITUTIONAL SETTLEMENT
            </button>
          </div>
        </div>

        {/* Support */}
        <div className="space-y-8 flex flex-col h-full">
          <div className="bg-white rounded-[3rem] p-10 border border-slate-100 shadow-sm flex flex-col overflow-hidden group">
            <h3 className="text-sm font-black text-slate-900 mb-10 uppercase tracking-widest leading-none italic underline decoration-indigo-100 underline-offset-8">Historic Settlement Queue</h3>
            <div className="space-y-6">
                {[
                  { type: 'Partial Injection', date: '15 Jan 2026', val: '৳ 25,000', st: 'Verified' },
                  { type: 'Initial Drawdown', date: '01 Oct 2025', val: '৳ 2,00,000', st: 'Contracted' }
                ].map((row, i) => (
                  <div key={i} className="flex justify-between items-center transition-all p-5 hover:bg-slate-50 rounded-2xl border border-transparent hover:border-slate-100 group/row cursor-default">
                    <div>
                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest italic mb-2 leading-none group-hover/row:text-indigo-400">{row.type}</p>
                        <p className="text-xs font-bold text-slate-700 font-mono italic">{row.date}</p>
                    </div>
                    <div className="text-right">
                        <p className="text-sm font-black text-slate-900 italic tracking-tighter mb-1 leading-none">{row.val}</p>
                        <span className="text-[7.5px] font-black uppercase text-emerald-500 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">{row.st}</span>
                    </div>
                  </div>
                ))}
            </div>
            <button className="mt-12 text-[9px] font-black text-indigo-400 flex items-center justify-center gap-2 group-hover:underline uppercase tracking-[0.2em] transition-all">
                Full Servicing Transcript <ChevronRight size={12} />
            </button>
          </div>

          <div className="bg-rose-50 p-10 rounded-[3rem] border border-rose-100 relative overflow-hidden group/alert">
            <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/5 rounded-full blur-2xl -mr-16 -mt-16 group-hover/alert:scale-125 transition-transform duration-700"></div>
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg shadow-rose-200/50 mb-8 relative z-10">
                <Info size={24} className="text-rose-500" />
            </div>
            <h4 className="text-sm font-black text-rose-900 uppercase italic mb-4 tracking-tighter relative z-10 leading-none">Liquidity Warning</h4>
            <p className="text-[11px] text-rose-700 font-medium leading-relaxed italic border-l-2 border-rose-400 pl-4 relative z-10">
                Manual settlement transactions are immediate and irreversible once dispatched to the institutional treasury account. Please verify all capital injections before clearance.
            </p>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showSuccess && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-950/80 backdrop-blur-2xl px-4">
             <motion.div 
               initial={{ opacity: 0, scale: 0.9, y: 100 }}
               animate={{ opacity: 1, scale: 1, y: 0 }}
               className="bg-white rounded-[4rem] p-12 max-w-lg w-full text-center shadow-[0_40px_100px_rgba(0,0,0,0.5)] border border-slate-100 relative"
             >
                <div className="w-24 h-24 bg-emerald-50 text-emerald-600 rounded-[2.5rem] border border-emerald-100 mx-auto mb-10 flex items-center justify-center shadow-xl shadow-emerald-500/10">
                    <CheckCircle2 size={48} className="animate-in zoom-in" />
                </div>
                <h3 className="text-4xl font-black text-slate-900 tracking-tighter uppercase italic leading-none mb-4">Settlement <br/><span className="text-indigo-600 underline decoration-indigo-200">Successful</span></h3>
                <p className="text-slate-400 font-medium italic text-sm mb-12 leading-relaxed">Systematic capital injection has been successfully valuated and dispatched to the servicing queue. Ledger updates will occur in the next synchronization cycle.</p>
                <button 
                   onClick={() => { setShowSuccess(false); setSelectedType(null); setPartialAmount(''); }}
                   className="w-full py-5 bg-slate-900 text-white rounded-[2rem] font-black text-xs uppercase tracking-widest hover:bg-slate-800 transition-all shadow-2xl active:scale-95"
                >
                    BACK TO DASHBOARD
                </button>
             </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
