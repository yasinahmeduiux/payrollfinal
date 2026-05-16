import { useState } from 'react';
import { Landmark, Clock, UploadCloud, Download, Eye, FileText } from 'lucide-react';
import { cn } from '../lib/utils';

export default function TaxCurrent() {
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});

  const toggleReveal = (id: string) => {
    setRevealed(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const Revealable = ({ value, id, variant = 'dark' }: { value: string, id: string, variant?: 'dark' | 'light' | 'indigo' | 'emerald' | 'rose' }) => {
    const isRevealed = revealed[id];
    return (
      <div 
        onClick={() => toggleReveal(id)}
        className="cursor-pointer group/reveal inline-flex flex-col relative"
      >
        <span className={cn(
          "transition-all font-black",
          !isRevealed && "blur-md select-none opacity-30",
          isRevealed && variant === 'light' ? "text-white" : variant === 'emerald' ? "text-emerald-400" : variant === 'rose' ? "text-rose-400" : "text-slate-900"
        )}>
          {value}
        </span>
        {!isRevealed && <span className={cn("text-[0.6em] absolute tracking-widest leading-none top-1/2 -translate-y-1/2", variant === 'light' ? "text-white/30" : "text-slate-300")}>••••••</span>}
      </div>
    );
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Tax Summary Card (Hero) */}
        <div className="lg:col-span-2 bg-slate-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-2xl shadow-slate-200">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-10">
              <div>
                <span className="bg-indigo-500/20 text-indigo-300 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest border border-indigo-500/30">Fiscal Year 2025-26</span>
                <h2 className="text-4xl font-black mt-4 italic tracking-tighter uppercase underline decoration-indigo-500/30">Tax Summary</h2>
              </div>
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center border border-white/10 backdrop-blur-md">
                <Landmark size={28} className="text-white" />
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-8">
              <div className="flex flex-col gap-1">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Total Income</p>
                <div className="text-2xl font-black"><Revealable value="৳ 1,250,000" id="total_inc" variant="light" /></div>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Investment</p>
                <div className="text-2xl font-black"><Revealable value="৳ 250,000" id="total_inv" variant="light" /></div>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Total Tax</p>
                <div className="text-2xl font-black"><Revealable value="৳ 85,000" id="total_tax" variant="light" /></div>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">AIT Paid</p>
                <div className="text-2xl font-black"><Revealable value="৳ 45,000" id="ait_paid" variant="emerald" /></div>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Due Tax</p>
                <div className="text-2xl font-black"><Revealable value="৳ 40,000" id="due_tax" variant="rose" /></div>
              </div>
            </div>
          </div>
        </div>

        {/* Upload Management Card */}
        <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm flex flex-col justify-between group">
          <div>
            <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center mb-6 border border-amber-100 group-hover:bg-amber-100 transition-colors duration-500">
              <Clock size={24} className="text-amber-500" />
            </div>
            <h3 className="text-xl font-black text-slate-900 mb-2 uppercase italic tracking-tighter">Submission Deadline</h3>
            <p className="text-xs font-medium text-slate-500 mb-8 leading-relaxed italic">Upload your investment proofs before the portal closes for the final assessment cycle.</p>
            
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Time Remaining</span>
                <span className="text-sm font-black text-amber-600">14 Days Left</span>
              </div>
              <div className="w-full bg-slate-50 h-3 rounded-full overflow-hidden shadow-inner">
                <div className="bg-gradient-to-r from-amber-400 to-amber-600 h-full w-[70%] rounded-full shadow-[0_0_10px_rgba(245,158,11,0.3)]"></div>
              </div>
            </div>
          </div>
          <div className="mt-10 p-4 bg-slate-50 rounded-2xl border border-slate-100 italic">
            <p className="text-[10.5px] font-bold text-slate-500 leading-relaxed text-center">"Portal lock date: May 30, 2026"</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* AIT Monthly Tracker Card */}
        <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm">
          <div className="flex justify-between items-center mb-10">
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest underline decoration-indigo-100 underline-offset-4">AIT Monthly Tracker</h3>
            <select className="bg-slate-50 border-none rounded-xl px-4 py-2 text-[10px] font-black text-slate-600 outline-none focus:ring-2 focus:ring-indigo-500 shadow-inner italic">
              <option>April 2026</option>
              <option>March 2026</option>
            </select>
          </div>
          <div className="space-y-4">
            {[
              { type: 'Vehicle Tax', val: '৳ 2,500' },
              { type: 'Bank Interest', val: '৳ 1,200' }
            ].map((row, idx) => (
              <div key={idx} className="p-5 bg-slate-50/50 rounded-2xl flex justify-between items-center border border-transparent hover:border-slate-200 transition-all cursor-pointer" onClick={() => toggleReveal(`ait_track_${idx}`)}>
                <div>
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1 italic">Type</p>
                  <p className="text-xs font-black text-slate-800 uppercase tracking-tighter">{row.type}</p>
                </div>
                <Revealable value={row.val} id={`ait_track_${idx}`} />
              </div>
            ))}
          </div>
        </div>

        {/* Quick Declaration Entry */}
        <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm">
          <h3 className="text-sm font-black text-slate-900 mb-8 uppercase tracking-widest underline decoration-indigo-100 underline-offset-4">New AIT Entry</h3>
          <div className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[9px] font-black text-slate-400 uppercase ml-1">Fiscal Year</label>
                <select className="w-full px-4 py-3 bg-slate-50 border-none rounded-xl font-bold text-slate-800 text-xs shadow-inner">
                  <option>2025-26</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="text-[9px] font-black text-slate-400 uppercase ml-1">Type</label>
                <select className="w-full px-4 py-3 bg-slate-50 border-none rounded-xl font-bold text-slate-800 text-xs shadow-inner">
                  <option>Vehicle</option>
                  <option>Interest</option>
                </select>
              </div>
            </div>
            <div className="space-y-1.5">
               <label className="text-[9px] font-black text-slate-400 uppercase ml-1">Amount (৳)</label>
               <input type="number" placeholder="Enter amount..." className="w-full px-4 py-3 bg-slate-50 border-none rounded-xl font-bold text-slate-800 text-xs shadow-inner focus:ring-2 focus:ring-indigo-500 outline-none" />
            </div>
            
            <div className="relative group cursor-pointer">
              <div className="w-full h-24 border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center bg-slate-50 group-hover:border-indigo-400 transition-all">
                <UploadCloud size={24} className="text-slate-300 group-hover:text-indigo-400 mb-2" />
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Challan Copy</p>
              </div>
            </div>
            
            <button className="w-full py-4 bg-indigo-600 text-white rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-500/20">
              Submit Entry
            </button>
          </div>
        </div>

        {/* Data Export */}
        <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-black text-slate-900 mb-6 uppercase tracking-widest underline decoration-indigo-100 underline-offset-4">Data Utility</h3>
            <p className="text-xs font-medium text-slate-500 mb-8 leading-relaxed italic">Download your current fiscal year tax data for personal record keeping or external reporting.</p>
          </div>
          <div className="space-y-4">
            <button className="w-full py-3.5 bg-slate-900 text-white rounded-xl font-black text-[10px] uppercase hover:bg-slate-800 transition-all flex items-center justify-center gap-3 shadow-lg shadow-slate-950/10">
              <FileText size={16} /> Download CSV Report
            </button>
            <button className="w-full py-3.5 bg-indigo-50 text-indigo-600 rounded-xl font-black text-[10px] uppercase hover:bg-indigo-100 transition-all flex items-center justify-center gap-3">
              <Download size={16} /> Export Raw Data
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
