import { useState } from 'react';
import { PlusCircle, UploadCloud, Calculator, Info, CheckCircle, ShieldCheck } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

export default function TaxInvestment() {
  const [showSuccess, setShowSuccess] = useState(false);

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom duration-500 pb-20">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tighter uppercase italic leading-none">Investment <span className="text-indigo-600 underline decoration-indigo-200">Declaration</span></h2>
          <p className="text-slate-400 font-bold text-[10px] uppercase tracking-[0.2em] mt-3 leading-none italic">Declare your investments to optimize tax deductions for FY 2026</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="px-4 py-1.5 bg-amber-50 text-amber-600 text-[10px] font-black rounded-full uppercase tracking-widest border border-amber-100 shadow-sm animate-pulse">Submission Window Open</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-4">
        <div className="lg:col-span-2 space-y-8">
          {/* Step 1: Add Investment */}
          <div className="bg-white p-10 rounded-[3.5rem] shadow-sm border border-slate-100 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50/30 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-indigo-100 transition-all duration-700"></div>
            <div className="flex items-center justify-between mb-10 relative z-10">
              <div className="flex items-center gap-5">
                <div className="bg-indigo-50 p-4 rounded-2xl text-indigo-600 shadow-inner border border-indigo-100">
                  <PlusCircle size={24} />
                </div>
                <h3 className="text-xl font-black text-slate-900 uppercase italic tracking-tighter">Add New Investment</h3>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 leading-none italic">Investment Category</label>
                <select className="w-full bg-slate-50 border-2 border-slate-100 rounded-[1.5rem] py-4 px-6 font-black text-slate-900 focus:outline-none focus:border-indigo-600 focus:bg-white transition-all appearance-none cursor-pointer shadow-inner">
                  <option>Life Insurance Premium</option>
                  <option>Home Loan Interest</option>
                  <option>Mutual Funds / DPS</option>
                  <option>Govt. Savings Certificate</option>
                  <option>Donations (Charity)</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 leading-none italic">Proposed Amount (৳)</label>
                <div className="relative">
                   <span className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 font-black">৳</span>
                   <input type="number" placeholder="0.00" className="w-full bg-slate-50 border-2 border-slate-100 rounded-[1.5rem] py-4 pl-10 pr-6 font-black text-slate-900 focus:outline-none focus:border-indigo-600 focus:bg-white transition-all shadow-inner" />
                </div>
              </div>
            </div>

            {/* Step 2: Upload Proof */}
            <div className="mt-10 space-y-4 relative z-10">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 flex items-center gap-2 italic">
                <div className="w-4 h-4 rounded-full bg-indigo-600 text-white flex items-center justify-center text-[7px] font-black not-italic shadow-lg shadow-indigo-100">2</div>
                Step 02: Upload Proof Documents
              </label>
              <div className="border-4 border-dashed border-slate-100 rounded-[3rem] p-12 flex flex-col items-center justify-center text-center group/uploader hover:border-indigo-200 transition-all cursor-pointer bg-slate-50/50 hover:bg-indigo-50/30">
                <div className="bg-white p-5 rounded-3xl shadow-lg mb-4 group-hover/uploader:scale-110 group-hover/uploader:rotate-3 transition-all duration-500 border border-slate-50">
                  <UploadCloud size={32} className="text-slate-300 group-hover/uploader:text-indigo-600 transition-colors" />
                </div>
                <p className="text-sm font-black text-slate-600 uppercase tracking-tighter italic">Drag and drop receipts or <span className="text-indigo-600 underline">browse</span></p>
                <p className="text-[9px] text-slate-300 uppercase font-bold tracking-widest mt-2">Maximum file size: 5MB (PDF, JPG, PNG)</p>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-50 flex items-center justify-end relative z-10">
              <button className="px-10 py-5 bg-slate-900 text-white rounded-[1.8rem] font-black text-xs uppercase tracking-widest hover:bg-slate-800 transition-all shadow-2xl shadow-slate-950/20 active:scale-[0.98]">
                ADD TO DECLARATION QUEUE
              </button>
            </div>
          </div>

          <div className="bg-slate-50/80 rounded-[3.5rem] p-10 border border-slate-100 italic shadow-inner">
            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-10 flex items-center gap-3">
               <span className="w-1 h-1 rounded-full bg-indigo-400"></span>
               Active Queue (FY 2026)
            </h4>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-[2rem] border border-slate-100 flex items-center justify-between group hover:border-indigo-200 transition-all shadow-sm">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center border border-blue-100 shadow-inner group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500">
                    <ShieldCheck size={28} />
                  </div>
                  <div>
                    <p className="text-sm font-black text-slate-900 uppercase italic tracking-tighter">Life Insurance Premium</p>
                    <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest mt-1">Receipt: verified_policy_receipt.pdf</p>
                  </div>
                </div>
                <div className="text-right">
                    <p className="text-xl font-black text-slate-900 tracking-tighter italic">৳ 45,000</p>
                    <span className="text-[8px] font-black text-emerald-500 uppercase tracking-widest">Pre-Verified</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-[#0f172a] p-10 rounded-[3.5rem] shadow-2xl text-white border border-slate-800 relative overflow-hidden h-full flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="relative z-10">
                <div className="flex items-center gap-5 mb-12">
                  <div className="bg-emerald-500/20 p-4 rounded-2xl text-emerald-400 border border-emerald-500/20 backdrop-blur-md shadow-xl">
                    <Calculator size={28} />
                  </div>
                  <h3 className="text-xl font-black tracking-tighter uppercase italic leading-none underline decoration-emerald-500/30 underline-offset-8">Tax Saving<br/>Estimator</h3>
                </div>

                <div className="space-y-8 mb-12">
                  <div className="flex items-center justify-between items-end border-b border-white/5 pb-6">
                    <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest leading-none">Aggregated<br/>Investment</p>
                    <p className="font-black text-3xl tracking-tighter italic underline decoration-indigo-400 text-indigo-400">৳ 45,000</p>
                  </div>
                  <div className="flex items-center justify-between items-end border-b border-white/5 pb-6">
                    <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest leading-none">Eligible Max<br/>Limit (Fiscal)</p>
                    <p className="font-black text-sm text-emerald-400 uppercase tracking-[0.2em] italic">UNLIMITED</p>
                  </div>
                  <div className="pt-4">
                    <p className="text-[10px] text-amber-400 font-black uppercase tracking-[0.3em] mb-3 leading-none italic">Est. Monthly Tax Saving</p>
                    <h4 className="text-5xl font-black text-white italic tracking-tighter leading-none">৳ 1,250</h4>
                  </div>
                </div>
            </div>

            <div className="relative z-10 space-y-6 pt-10 border-t border-white/5">
                <div className="flex items-center justify-center gap-3">
                   <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(52,211,153,1)]"></div>
                   <span className="text-[9px] font-black text-emerald-400 uppercase tracking-widest italic">Declaration Draft Validated</span>
                </div>
                <button 
                  onClick={() => setShowSuccess(true)}
                  className="w-full py-5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-[1.8rem] font-black text-xs uppercase tracking-widest transition-all shadow-2xl shadow-indigo-500/20 active:scale-[0.98]"
                >
                  SUBMIT FINAL DECLARATION
                </button>
            </div>
          </div>

          <div className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-sm">
            <div className="w-10 h-10 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 border border-indigo-100">
               <Info size={20} className="text-indigo-600" />
            </div>
            <h4 className="text-xs font-black text-slate-900 uppercase mb-4 italic tracking-tighter underline underline-offset-4 decoration-slate-100">Compliance Guidelines</h4>
            <p className="text-[11px] text-slate-500 font-medium leading-relaxed italic border-l-2 border-indigo-200 pl-4">
              Declarations must be finalized before the 20th of each month for inclusion in the current payroll cycle. Scanned original proofs are mandatory for statutory auditing according to NBR 2026 standards. Late submissions will rollover.
            </p>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showSuccess && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-950/80 backdrop-blur-2xl">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotateY: 90 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              className="bg-white rounded-[4rem] p-12 max-w-lg w-full text-center shadow-[0_40px_100px_rgba(0,0,0,0.5)] relative border border-slate-100"
            >
              <div className="w-28 h-24 bg-emerald-50 text-emerald-600 rounded-[2.5rem] flex items-center justify-center mx-auto mb-10 border border-emerald-100 shadow-xl shadow-emerald-500/10">
                <CheckCircle size={48} className="animate-in zoom-in" />
              </div>
              <h2 className="text-4xl font-black text-slate-900 tracking-tighter uppercase italic mb-4 leading-none">Declaration <br/><span className="text-indigo-600 underline decoration-indigo-200">Submitted</span></h2>
              <p className="text-slate-500 font-medium mb-12 leading-relaxed italic text-sm">Your investment portfolio for FY 2026 has been successfully logged into the institutional registry. HR/Pay team will verify documentation within 48 business hours.</p>
              
              <div className="bg-slate-50 p-8 rounded-[2.5rem] border-2 border-slate-100 mb-12 shadow-inner group">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-2 font-mono">Blockchain Conf. ID</p>
                <p className="text-2xl font-black text-slate-900 font-mono tracking-widest group-hover:text-indigo-600 transition-colors cursor-default">INV-2026-X8B2</p>
              </div>

              <button 
                onClick={() => setShowSuccess(false)}
                className="w-full py-5 bg-slate-900 text-white rounded-[2rem] font-black text-xs uppercase tracking-widest hover:bg-slate-800 transition-all shadow-2xl active:scale-95"
              >
                RETURN TO FINANCE HUB
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
