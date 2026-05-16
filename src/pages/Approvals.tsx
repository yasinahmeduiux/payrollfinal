import { useState } from 'react';
import { Check, X, Clock, FileText, User, Calendar, Filter, Share2, Info, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

interface ApprovalRequest {
  id: number;
  subject: string;
  type: string;
  initiator: string;
  empId: string;
  date: string;
  status: 'Pending' | 'Approved' | 'Rejected';
  priority: 'High' | 'Normal' | 'Low';
  details: string;
  history: { action: string, user: string, time: string }[];
}

export default function Approvals() {
  const [requests, setRequests] = useState<ApprovalRequest[]>([
    { 
      id: 1, 
      subject: 'Annual Increment V-2', 
      type: 'Salary Adjustment', 
      initiator: 'Rafid Ahsan', 
      empId: 'EMP-1025', 
      date: 'April 20, 2026', 
      status: 'Pending', 
      priority: 'High',
      details: 'Based on Q1 Performance Index exceeding institutional targets by 15%. Proposed increment: 12%.',
      history: [
          { action: 'Initiated', user: 'Rafid Ahsan', time: '10:00 AM' },
          { action: 'Dept Verified', user: 'Lina Kabir', time: '02:30 PM' }
      ]
    },
    { 
      id: 2, 
      subject: 'Relocation Allowance', 
      type: 'Expense Reimbursement', 
      initiator: 'Sarah Zaman', 
      empId: 'EMP-2204', 
      date: 'April 18, 2026', 
      status: 'Approved', 
      priority: 'Normal',
      details: 'Relocation expenses for Sydney office transfer. All receipts verified.',
      history: [
          { action: 'Initiated', user: 'Sarah Zaman', time: '09:00 AM' },
          { action: 'Approved', user: 'Monahil H.', time: '04:15 PM' }
      ]
    },
    { 
      id: 3, 
      subject: 'PF Loan Settlement', 
      type: 'Retiral Adjustment', 
      initiator: 'Tanvir Hossain', 
      empId: 'EMP-0552', 
      date: 'April 15, 2026', 
      status: 'Rejected', 
      priority: 'Normal',
      details: 'Early settlement request without sufficient liquidation buffer specified in NBR index.',
      history: [
          { action: 'Initiated', user: 'Tanvir Hossain', time: '11:15 AM' },
          { action: 'Rejected', user: 'Finance Desk', time: '01:00 PM' }
      ]
    }
  ]);

  const [activeItem, setActiveItem] = useState<ApprovalRequest | null>(null);
  const [filter, setFilter] = useState<'All' | 'Pending' | 'Approved'>('All');

  const filteredRequests = requests.filter(r => filter === 'All' || r.status === filter);

  const handleAction = (id: number, status: 'Approved' | 'Rejected') => {
    setRequests(prev => prev.map(r => r.id === id ? { ...r, status } : r));
    setActiveItem(null);
  };

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-4xl font-black text-slate-900 tracking-tighter uppercase italic leading-none">Approval <span className="text-indigo-600 underline decoration-indigo-200 underline-offset-8">Hub</span></h2>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-3 leading-none italic">Institutional authority & verification decision nodes</p>
        </div>
        <div className="flex items-center gap-3 bg-white p-2 rounded-3xl border border-slate-100 shadow-inner">
            {['All', 'Pending', 'Approved'].map((f) => (
                <button 
                  key={f}
                  onClick={() => setFilter(f as any)}
                  className={cn(
                    "px-6 py-3 rounded-2xl text-[9px] font-black uppercase tracking-widest transition-all",
                    filter === f ? "bg-slate-900 text-white shadow-xl" : "text-slate-400 hover:text-slate-600 hover:bg-slate-50"
                  )}
                >
                  {f}
                </button>
            ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-4">
        {/* Main List */}
        <div className="lg:col-span-8 space-y-6">
            <AnimatePresence mode="popLayout">
                {filteredRequests.map((req) => (
                    <motion.div 
                        key={req.id}
                        layout
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className={cn(
                            "bg-white rounded-[3rem] border transition-all group overflow-hidden relative cursor-pointer",
                            activeItem?.id === req.id ? "border-indigo-600 shadow-2xl shadow-indigo-100 translate-y-[-4px]" : "border-slate-100 hover:border-indigo-200 hover:shadow-xl hover:shadow-slate-100"
                        )}
                        onClick={() => setActiveItem(req)}
                    >
                        <div className="p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 md:gap-12 relative z-10">
                            <div className="bg-slate-50 p-6 rounded-[2.2rem] border border-slate-100 shadow-inner group-hover:bg-slate-900 group-hover:text-white transition-all duration-500 relative flex-shrink-0">
                                <FileText size={28} />
                                <div className={cn(
                                    "absolute -top-2 -right-2 w-5 h-5 rounded-full border-4 border-white shadow-md animate-pulse",
                                    req.priority === 'High' ? "bg-rose-500" : "bg-indigo-400"
                                )}></div>
                            </div>
                            
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-4 mb-3">
                                    <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest italic font-mono">{req.empId}</span>
                                    <span className={cn(
                                        "px-3 py-1 rounded-full text-[8.5px] font-black uppercase tracking-widest border",
                                        req.status === 'Pending' ? "bg-amber-50 text-amber-500 border-amber-100" :
                                        req.status === 'Approved' ? "bg-emerald-50 text-emerald-500 border-emerald-100" :
                                        "bg-rose-50 text-rose-500 border-rose-100"
                                    )}>{req.status}</span>
                                </div>
                                <h4 className="text-2xl font-black text-slate-900 tracking-tighter uppercase italic truncate leading-none mb-1 group-hover:text-indigo-600 transition-colors uppercase decoration-slate-100 group-hover:decoration-indigo-100 underline underline-offset-8 decoration-4">{req.subject}</h4>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-4 italic">{req.type} · Initialized {req.date}</p>
                            </div>

                            <div className="text-center md:text-right flex-shrink-0">
                                <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest mb-3 leading-none italic">Decision Status</p>
                                {req.status === 'Pending' ? (
                                    <div className="flex items-center gap-2">
                                        <button 
                                            onClick={(e) => { e.stopPropagation(); handleAction(req.id, 'Rejected'); }}
                                            className="p-4 bg-rose-50 text-rose-500 rounded-2xl hover:bg-rose-600 hover:text-white transition-all shadow-sm active:scale-95 border border-rose-100"
                                        >
                                            <X size={18} />
                                        </button>
                                        <button 
                                            onClick={(e) => { e.stopPropagation(); handleAction(req.id, 'Approved'); }}
                                            className="p-4 bg-emerald-50 text-emerald-500 rounded-2xl hover:bg-emerald-600 hover:text-white transition-all shadow-sm active:scale-95 border border-emerald-100"
                                        >
                                            <Check size={18} />
                                        </button>
                                    </div>
                                ) : (
                                    <div className="flex items-center gap-2 justify-end text-slate-300 group-hover:text-slate-900 transition-colors">
                                        <p className="text-[10px] font-black uppercase italic tracking-widest">Final Audit</p>
                                        <CheckCircle2 size={18} />
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>

        {/* Sidebar / Detail */}
        <div className="lg:col-span-4 lg:sticky lg:top-8 h-fit space-y-8">
            <AnimatePresence mode="wait">
                {activeItem ? (
                    <motion.div 
                        key={activeItem.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="bg-white rounded-[4rem] p-10 border border-slate-100 shadow-2xl shadow-indigo-100 overflow-hidden relative group"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:bg-indigo-100 duration-1000"></div>
                        <div className="relative z-10">
                            <button 
                                onClick={() => setActiveItem(null)}
                                className="absolute top-0 right-0 p-3 bg-slate-50 text-slate-400 rounded-2xl hover:text-slate-900 transition-all shadow-inner"
                            >
                                <X size={16} />
                            </button>

                            <h3 className="text-sm font-black text-slate-900 mb-10 uppercase tracking-[0.2em] italic decoration-indigo-200 underline underline-offset-8 decoration-4 leading-none">Logical Briefing</h3>
                            
                            <div className="space-y-10">
                                <section>
                                    <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-6 italic leading-none border-b border-slate-50 pb-3">Structural Context</p>
                                    <p className="text-xs font-medium text-slate-500 leading-relaxed italic border-l-2 border-indigo-100 pl-6 py-1 transition-all hover:text-slate-700">"{activeItem.details}"</p>
                                </section>

                                <section>
                                    <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-8 italic leading-none border-b border-slate-50 pb-3">Audit Registry</p>
                                    <div className="space-y-6">
                                        {activeItem.history.map((h, i) => (
                                            <div key={i} className="flex items-center gap-6 group/item transition-all hover:translate-x-1">
                                                <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-300 group-hover/item:bg-slate-900 group-hover/item:text-white transition-all shadow-inner">
                                                    <Clock size={16} />
                                                </div>
                                                <div>
                                                    <p className="text-[10px] font-black text-slate-900 uppercase italic tracking-tighter leading-none mb-1 underline decoration-slate-100">{h.action}</p>
                                                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{h.user} · {h.time}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                <div className="pt-8 border-t border-slate-50 flex items-center justify-between">
                                    {activeItem.status === 'Pending' ? (
                                        <div className="flex flex-col w-full gap-4">
                                            <button 
                                                onClick={() => handleAction(activeItem.id, 'Approved')}
                                                className="w-full py-5 bg-indigo-600 text-white rounded-3xl font-black text-[10px] uppercase tracking-widest hover:bg-slate-900 transition-all shadow-2xl active:scale-95 group/btn"
                                            >
                                                EXECUTE APPROVAL <ChevronRight size={14} className="inline ml-2 group-hover/btn:translate-x-1 transition-transform" />
                                            </button>
                                            <button className="w-full py-4 bg-slate-50 text-slate-400 border border-slate-100 rounded-3xl font-black text-[10px] uppercase tracking-widest hover:bg-rose-50 hover:text-rose-500 transition-all shadow-inner">
                                                DISCARD TO REVISION
                                            </button>
                                        </div>
                                    ) : (
                                        <div className="w-full p-6 bg-slate-50 rounded-[2rem] border border-slate-100 text-center animate-in zoom-in duration-500">
                                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] italic mb-3">Audit Finalized</p>
                                            <p className="text-sm font-black text-slate-900 uppercase italic tracking-tighter decoration-emerald-200 underline underline-offset-4 leading-none">Decision Synced</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="bg-slate-50 rounded-[3.5rem] p-12 border-2 border-dashed border-slate-100 text-center flex flex-col items-center justify-center min-h-[400px] group transition-all hover:bg-white hover:shadow-xl hover:shadow-slate-100"
                    >
                        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-slate-200 mb-8 shadow-sm group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                            <Filter size={32} />
                        </div>
                        <h4 className="text-xl font-black text-slate-900 uppercase italic tracking-tighter mb-4 opacity-40 group-hover:opacity-100 transition-opacity">Logical Waitstate</h4>
                        <p className="text-[11px] text-slate-400 font-medium leading-relaxed italic max-w-[200px]">Select a pending decision node from the institutional registry to view full structural briefing.</p>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Quick Stats */}
            <div className="bg-[#0f172a] rounded-[3rem] p-10 text-white relative overflow-hidden group/stats">
                <div className="absolute -right-20 -top-20 text-[10rem] font-black text-white/5 select-none transition-transform duration-1000 group-hover/stats:scale-110 uppercase italic">04</div>
                <div className="relative z-10">
                    <h4 className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-10 leading-none italic border-l-2 border-indigo-600 pl-4">Institutional Velocity</h4>
                    <div className="space-y-8">
                        <div className="flex justify-between items-end border-b border-white/5 pb-4 group/row cursor-default">
                            <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest group-hover/row:text-white transition-colors">Pending Quorum</span>
                            <span className="text-2xl font-black italic tracking-tighter">{requests.filter(r=>r.status==='Pending').length}</span>
                        </div>
                        <div className="flex justify-between items-end border-b border-white/5 pb-4 group/row cursor-default">
                            <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest group-hover/row:text-white transition-colors">Success Ratio</span>
                            <span className="text-2xl font-black text-emerald-400 italic tracking-tighter">98%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

function CheckCircle2(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
            <path d="m9 12 2 2 4-4" />
        </svg>
    )
}
