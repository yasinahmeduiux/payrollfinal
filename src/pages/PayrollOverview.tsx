import { useState } from 'react';
import { Banknote, Wallet, MinusCircle, FileText, MinusSquare, Download, Eye, EyeOff } from 'lucide-react';
import { cn } from '../lib/utils';

export default function PayrollOverview() {
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});

  const toggleReveal = (id: string) => {
    setRevealed(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const RevealableValue = ({ value, id, className, variant = 'dark' }: { value: string, id: string, className?: string, variant?: 'dark' | 'light' | 'indigo' | 'emerald' | 'rose' }) => {
    const isRevealed = revealed[id];
    return (
      <div 
        onClick={() => toggleReveal(id)}
        className={cn("cursor-pointer group/reveal inline-flex flex-col", className)}
      >
        <span className={cn(
          "transition-all font-black",
          !isRevealed && "blur-md select-none opacity-30",
          isRevealed && variant === 'dark' && "text-slate-900",
          isRevealed && variant === 'light' && "text-white",
          isRevealed && variant === 'indigo' && "text-indigo-600",
          isRevealed && variant === 'emerald' && "text-emerald-500",
          isRevealed && variant === 'rose' && "text-rose-600"
        )}>
          {value}
        </span>
        {!isRevealed && <span className={cn("text-[0.6em] font-black absolute tracking-widest", variant === 'light' ? "text-white/20" : "text-slate-300")}>••••••</span>}
      </div>
    );
  };

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Payroll Records</h2>
          <p className="text-sm font-medium text-slate-500">Comprehensive view of your monthly earnings and deductions</p>
        </div>
        <button className="bg-indigo-600 text-white px-6 py-2.5 rounded-xl text-xs font-black shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition-all flex items-center gap-2">
          <Download size={16} /> Export All
        </button>
      </div>

      {/* EARNINGS OVERVIEW */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-2 h-6 bg-emerald-500 rounded-full"></div>
          <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest leading-none">Earnings Overview</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all">
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center border border-emerald-100">
                <Banknote size={24} className="text-emerald-500" />
              </div>
              <span className="bg-emerald-100 text-emerald-600 text-[10px] font-black px-2 py-1 rounded-lg uppercase">+5% Growth</span>
            </div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Gross Salary</p>
            <h2 className="text-3xl font-black text-slate-900 relative">
              <RevealableValue value="৳ 90,000" id="gross" />
            </h2>
          </div>

          <div className="bg-[#0f172a] rounded-[2rem] p-8 shadow-xl relative overflow-hidden text-white">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
            <div className="relative z-10">
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-6 font-mono">Annual Insights</p>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-slate-400 font-bold uppercase">Yearly Total</span>
                  <RevealableValue value="৳ 1,080,000" id="yearly" variant="light" className="text-sm" />
                </div>
                <div className="flex justify-between items-center border-t border-white/5 pt-4">
                  <span className="text-[10px] text-slate-400 font-bold uppercase">Lifetime Earn</span>
                  <RevealableValue value="৳ 4,500,000" id="lifetime" variant="emerald" className="text-sm" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[2rem] p-8 border-2 border-indigo-50 shadow-xl shadow-indigo-500/5 relative">
            <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center border border-indigo-100 mb-6">
              <Wallet size={24} className="text-indigo-500" />
            </div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Estimated Net Pay</p>
            <h2 className="text-3xl font-black text-indigo-600 relative">
              <RevealableValue value="৳ 75,000" id="net" variant="indigo" />
            </h2>
            <p className="text-[10px] text-slate-400 mt-2 italic font-medium">After current month deductions</p>
          </div>
        </div>
      </section>

      {/* DEDUCTIONS OVERVIEW */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-2 h-6 bg-rose-500 rounded-full"></div>
          <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest leading-none">Deductions Overview</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-rose-600 rounded-[2rem] p-8 shadow-xl shadow-rose-200 relative overflow-hidden group col-span-1 md:col-span-2 text-white">
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -mr-24 -mt-24 blur-3xl transition-transform group-hover:scale-110 duration-700"></div>
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6 border border-white/20">
                  <MinusCircle size={24} className="text-white" />
                </div>
                <p className="text-[10px] font-black text-rose-200 uppercase tracking-widest mb-1">Total Deductions</p>
                <h2 className="text-4xl font-black relative">
                  <RevealableValue value="৳ 15,000" id="deductions_total" variant="light" />
                </h2>
              </div>
              <div className="flex flex-col gap-3">
                <span className="bg-white/20 text-white text-[10px] font-black px-4 py-1.5 rounded-full text-center border border-white/10 backdrop-blur-md">16% OF GROSS</span>
                <div className="space-y-1.5">
                  <div className="flex justify-between text-[8px] font-black text-rose-200 uppercase tracking-widest">
                    <span>Impact</span>
                    <span>Significant</span>
                  </div>
                  <div className="w-32 bg-white/20 h-2 rounded-full overflow-hidden">
                    <div className="bg-white h-full w-[16%] rounded-full shadow-[0_0_8px_rgba(255,255,255,0.5)]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 leading-none underline decoration-rose-100">Income Tax</p>
            <RevealableValue value="৳ 4,500" id="tax" variant="rose" className="text-xl mb-4" />
            <div>
               <span className="text-[8px] font-black text-rose-500 bg-rose-50 px-2.5 py-1 rounded-full uppercase tracking-wider">Auto-Deducted</span>
            </div>
          </div>

          <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 leading-none underline decoration-blue-100">Provident Fund</p>
            <RevealableValue value="৳ 7,000" id="pf" variant="indigo" className="text-xl mb-4" />
            <div>
               <span className="text-[8px] font-black text-blue-500 bg-blue-50 px-2.5 py-1 rounded-full uppercase tracking-wider">Contribution</span>
            </div>
          </div>
        </div>
      </section>

      {/* RECENT HISTORY */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-6">
        <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm overflow-hidden">
          <div className="flex justify-between items-center mb-10">
            <h3 className="text-sm font-black text-slate-900 flex items-center gap-3 uppercase tracking-widest">
              <div className="p-2 bg-emerald-50 rounded-lg text-emerald-500"><FileText size={16} /></div>
              Recent Payslips
            </h3>
            <button className="text-[10px] font-black text-indigo-600 hover:text-indigo-800 uppercase tracking-widest flex items-center gap-1 group">
              View All <div className="group-hover:translate-x-0.5 transition-transform">→</div>
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-separate border-spacing-y-4">
              <thead>
                <tr className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">
                  <th className="px-4">Month</th>
                  <th className="px-4">Net Salary</th>
                  <th className="px-4 text-center">Status</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  { month: 'Apr 2026', value: '৳ 75,000' },
                  { month: 'Mar 2026', value: '৳ 75,000' },
                  { month: 'Feb 2026', value: '৳ 74,500' }
                ].map((row, idx) => (
                  <tr key={idx} className="bg-slate-50/50 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all rounded-2xl group border border-transparent hover:border-slate-100">
                    <td className="py-5 px-6 font-bold text-slate-800 rounded-l-2xl border-l border-y border-transparent group-hover:border-slate-100">{row.month}</td>
                    <td className="py-5 px-6 font-black text-slate-900 relative border-y border-transparent group-hover:border-slate-100">
                      <RevealableValue value={row.value} id={`table_earn_${idx}`} />
                    </td>
                    <td className="py-5 px-6 rounded-r-2xl text-center border-r border-y border-transparent group-hover:border-slate-100">
                      <span className="bg-emerald-100 text-emerald-600 text-[8px] font-black px-3 py-1 rounded-full uppercase shadow-sm">PAID</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm overflow-hidden">
          <div className="flex justify-between items-center mb-10">
            <h3 className="text-sm font-black text-slate-900 flex items-center gap-3 uppercase tracking-widest">
              <div className="p-2 bg-rose-50 rounded-lg text-rose-500"><MinusSquare size={16} /></div>
              Recent Deductions
            </h3>
            <button className="text-[10px] font-black text-indigo-600 hover:text-indigo-800 uppercase tracking-widest flex items-center gap-1 group">
               Full Detail <div className="group-hover:translate-x-0.5 transition-transform">→</div>
            </button>
          </div>
          <div className="overflow-x-auto text-sm">
            <table className="w-full text-left border-separate border-spacing-y-4">
              <thead>
                <tr className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">
                  <th className="px-4">Date</th>
                  <th className="px-4">Type</th>
                  <th className="px-4 text-right">Amount</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { date: '10 Apr 26', type: 'Income Tax', value: '৳ 4,500' },
                  { date: '10 Apr 26', type: 'PF Empl.', value: '৳ 7,000' },
                  { date: '10 Apr 26', type: 'Lunch Cost', value: '৳ 450' }
                ].map((row, idx) => (
                  <tr key={idx} className="bg-slate-50/50 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all rounded-2xl group">
                    <td className="py-5 px-6 font-bold text-slate-800 rounded-l-2xl">{row.date}</td>
                    <td className="py-5 px-6 text-slate-500 font-medium italic lowercase">{row.type}</td>
                    <td className="py-5 px-6 font-black text-rose-600 rounded-r-2xl text-right relative">
                       <RevealableValue value={row.value} id={`table_deduct_${idx}`} variant="rose" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
