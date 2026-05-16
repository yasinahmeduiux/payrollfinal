import { useState } from 'react';
import { Download, FileBadge, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';

export default function TaxPrevious() {
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});
  const [selectedYear, setSelectedYear] = useState('FY 2024-25');

  const toggleReveal = (id: string) => {
    setRevealed(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const Revealable = ({ value, id }: { value: string, id: string }) => {
    const isRevealed = revealed[id];
    return (
      <div onClick={() => toggleReveal(id)} className="cursor-pointer group/reveal inline-flex flex-col relative">
        <span className={cn(
          "transition-all font-black text-slate-900",
          !isRevealed && "blur-md select-none opacity-30"
        )}>
          {value}
        </span>
        {!isRevealed && <span className="text-[0.6em] absolute tracking-widest leading-none top-1/2 -translate-y-1/2 text-slate-300">••••••</span>}
      </div>
    );
  };

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Selection */}
        <div className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-sm flex flex-col h-fit">
          <h3 className="text-sm font-black text-slate-900 mb-8 uppercase tracking-widest underline decoration-indigo-100 underline-offset-4">Select Year</h3>
          <div className="space-y-3">
            {['FY 2024-25', 'FY 2023-24', 'FY 2022-23'].map(year => (
              <button 
                key={year}
                onClick={() => setSelectedYear(year)}
                className={cn(
                  "w-full px-6 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest text-left transition-all border",
                  selectedYear === year ? "bg-indigo-600 text-white border-indigo-600 shadow-lg shadow-indigo-100" : "bg-white text-slate-400 border-slate-100 hover:bg-slate-50 hover:text-slate-600"
                )}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        {/* Historical Summary */}
        <div className="lg:col-span-3 bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-full -mr-16 -mt-16 blur-2xl"></div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 relative z-10">
            <div>
              <h3 className="text-xl font-black text-slate-900 tracking-tighter uppercase italic leading-none">Historical Summary <span className="text-indigo-600">({selectedYear})</span></h3>
              <p className="text-[9px] font-bold text-slate-400 mt-2 uppercase tracking-widest">Archived compliance records</p>
            </div>
            <button className="px-6 py-3 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2 shadow-xl hover:bg-slate-800 transition-all">
              <Download size={14} /> Download Report
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10 relative z-10">
             <div>
                <p className="text-[9px] font-black text-slate-400 uppercase mb-2">Total Income</p>
                <div className="text-lg font-black"><Revealable value="৳ 1,080,000" id="hist_inc" /></div>
             </div>
             <div>
                <p className="text-[9px] font-black text-slate-400 uppercase mb-2">Investments</p>
                <div className="text-lg font-black"><Revealable value="৳ 180,000" id="hist_inv" /></div>
             </div>
             <div>
                <p className="text-[9px] font-black text-slate-400 uppercase mb-2">Total Tax</p>
                <div className="text-lg font-black"><Revealable value="৳ 62,000" id="hist_tax" /></div>
             </div>
             <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100/50 flex flex-col justify-center">
                <p className="text-[9px] font-black text-emerald-600 uppercase mb-1">Final Status</p>
                <p className="text-xs font-black text-emerald-700 uppercase tracking-widest italic">Fully Settled</p>
             </div>
          </div>
        </div>
      </div>

      {/* History Table */}
      <div className="bg-white rounded-[3rem] p-10 border border-slate-100 shadow-sm overflow-hidden">
         <div className="flex justify-between items-center mb-10">
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest underline decoration-indigo-100 underline-offset-4">Transaction History ({selectedYear})</h3>
         </div>
         <div className="overflow-x-auto">
            <table className="w-full text-left border-separate border-spacing-y-4">
                <thead>
                    <tr className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        <th className="px-6">Compliance Date</th>
                        <th className="px-6">AIT Head</th>
                        <th className="px-6">Disbursed Amount</th>
                        <th className="px-6 text-right">Records</th>
                    </tr>
                </thead>
                <tbody className="text-sm">
                    {[
                      { date: '15 Jan 2025', type: 'Vehicle Tax', val: '৳ 2,500' },
                      { date: '10 Dec 2024', type: 'Bank Interest', val: '৳ 1,150' }
                    ].map((row, i) => (
                      <tr key={i} className="bg-slate-50/50 hover:bg-slate-100/50 transition-all rounded-3xl group">
                          <td className="py-5 px-6 font-bold text-slate-800 rounded-l-3xl border-l border-y border-transparent">{row.date}</td>
                          <td className="py-5 px-6 text-slate-500 font-medium italic">{row.type}</td>
                          <td className="py-5 px-6"><Revealable value={row.val} id={`prev_row_${i}`} /></td>
                          <td className="py-5 px-6 text-right rounded-r-3xl border-r border-y border-transparent">
                              <button className="text-indigo-600 font-black text-[9px] uppercase tracking-widest hover:underline flex items-center gap-1 ml-auto">
                                View Proof <FileBadge size={12} />
                              </button>
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
