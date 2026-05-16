import React, { useState } from 'react';
import { Download, Paperclip, Send, FileSpreadsheet, Check, Clock, Circle, CheckCircle, X, Info, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

interface UploadRecord {
  id: number;
  name: string;
  type: string;
  date: string;
  time: string;
  status: 'Pending Review' | 'Approved' | 'Rejected' | 'Submitted';
  reason: string;
  comment: string;
}

export default function Uploads() {
  const [uploads, setUploads] = useState<UploadRecord[]>([
    { id: 1, name: 'salary_apr_26.csv', type: 'Salary Records', date: 'April 15, 2026', time: '10:45 AM', status: 'Pending Review', reason: 'Monthly payout processing', comment: 'Includes bonuses for Sales team.' },
    { id: 2, name: 'bonus_q1_fest.csv', type: 'Bonus Disbursements', date: 'April 10, 2026', time: '02:30 PM', status: 'Approved', reason: 'Q1 Performance rewards', comment: 'Verified by Dept Head.' },
    { id: 3, name: 'tax_decl_batch.csv', type: 'Tax Declaration Docs', date: 'April 02, 2026', time: '09:15 AM', status: 'Rejected', reason: 'Yearly tax compliance', comment: 'File corrupted during upload.' }
  ]);

  const [selectedType, setSelectedType] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [reason, setReason] = useState('');
  const [comment, setComment] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [detailItem, setDetailItem] = useState<UploadRecord | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) setFile(e.target.files[0]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!file || !selectedType || !reason) {
      alert("Missing required fields");
      return;
    }

    const newUpload: UploadRecord = {
      id: Date.now(),
      name: file.name,
      type: selectedType,
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'Submitted',
      reason,
      comment
    };

    setUploads([newUpload, ...uploads]);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 5000);
    
    // Reset
    setFile(null);
    setSelectedType('');
    setReason('');
    setComment('');
  };

  const lastSuccessful = uploads.find(u => u.status === 'Approved' || u.status === 'Pending Review');

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-4xl font-black text-slate-900 tracking-tighter uppercase italic leading-none">Upload <span className="text-indigo-600">Management</span></h2>
          <p className="text-slate-400 font-bold text-[10px] uppercase tracking-[0.3em] mt-3 leading-none italic">Institutional ledger submission & synchronization</p>
        </div>
      </div>

      {/* User Status Card */}
      <div className="bg-white p-10 rounded-[3.5rem] shadow-sm border border-slate-100 flex items-center justify-between group overflow-hidden relative">
        <div className="absolute left-0 top-0 w-1 h-full bg-indigo-600 opacity-20 transition-all group-hover:opacity-100"></div>
        <div className="flex items-center gap-10 relative z-10">
            <div className="w-24 h-24 bg-indigo-600 rounded-[2.5rem] flex items-center justify-center text-4xl font-black text-white shadow-2xl shadow-indigo-200 group-hover:scale-110 transition-transform duration-700 italic underline decoration-white/20">
                MH
            </div>
            <div>
                <h2 className="text-3xl font-black text-slate-900 tracking-tighter uppercase italic leading-none mb-2">Monahil Hossain</h2>
                <div className="flex items-center gap-4">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">HR Operations Specialist</p>
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div>
                    <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest leading-none underline underline-offset-4 decoration-indigo-100">Authorized Uploader</p>
                </div>
            </div>
        </div>
        <div className="hidden lg:block text-right relative z-10">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-3 italic">Servicing Status</p>
            <div className="bg-emerald-50 px-6 py-3 rounded-2xl border border-emerald-100 flex items-center gap-4 shadow-sm">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(52,211,153,1)]"></div>
                <p className="text-xs font-black text-emerald-600 uppercase tracking-widest">Active for Institutional Submissions</p>
            </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">
        <div className="lg:col-span-8 space-y-10">
            {/* Form */}
            <div className="bg-white p-12 rounded-[4rem] shadow-sm border border-slate-100 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-50 rounded-full blur-3xl -mr-24 -mt-24 group-hover:bg-indigo-100 transition-all duration-1000"></div>
                <div className="flex items-center justify-between mb-12 relative z-10">
                    <div>
                        <h3 className="text-2xl font-black text-slate-900 uppercase italic tracking-tighter underline decoration-slate-100 underline-offset-8 decoration-4 leading-none">Initialize submission</h3>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-4">Statutory CSV synchronization session</p>
                    </div>
                    <button className="px-6 py-3.5 bg-slate-50 text-slate-500 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-950 hover:text-white transition-all border border-slate-100 shadow-inner flex items-center gap-3 active:scale-95 invisible md:visible">
                        <Download size={14} /> Sample Format
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 italic leading-none">Ledger Component</label>
                            <select 
                                value={selectedType}
                                onChange={(e) => setSelectedType(e.target.value)}
                                className="w-full bg-slate-50 border-2 border-slate-100 rounded-[1.5rem] py-4 px-6 font-black text-slate-900 focus:outline-none focus:border-indigo-600 transition-all appearance-none cursor-pointer shadow-inner"
                            >
                                <option value="" disabled>Select Logical Type</option>
                                <option>Salary Records</option>
                                <option>Tax Declaration Docs</option>
                                <option>Bonus Disbursements</option>
                                <option>Allowance Adjustments</option>
                            </select>
                        </div>
                        <div className="space-y-3">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 italic leading-none">Target File (CSV)</label>
                            <div className="relative group/file">
                                <input type="file" accept=".csv" onChange={handleFileChange} className="hidden" id="main-file-input" />
                                <div 
                                    onClick={() => document.getElementById('main-file-input')?.click()}
                                    className="w-full bg-slate-50 border-2 border-dashed border-slate-200 rounded-[1.5rem] py-4 px-6 font-black text-slate-500 flex items-center justify-between cursor-pointer group-hover/file:border-indigo-400 group-hover/file:bg-indigo-50/30 transition-all shadow-inner"
                                >
                                    <span className={cn("text-xs truncate italic leading-none", file && "text-slate-900")}>
                                        {file ? file.name : "Select Ledger File..."}
                                    </span>
                                    <Paperclip size={18} className={cn("transition-colors", file ? "text-indigo-600" : "text-slate-300")} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 italic leading-none">Submission Objective</label>
                        <textarea 
                            value={reason}
                            onChange={(e) => setReason(e.target.value)}
                            className="w-full bg-slate-50 border-2 border-slate-100 rounded-[2.2rem] py-5 px-8 font-bold text-slate-900 focus:outline-none focus:border-indigo-600 transition-all min-h-[140px] resize-none shadow-inner italic" 
                            placeholder="State the structural purpose of this synchronization..."
                        ></textarea>
                    </div>

                    <div className="pt-6 flex justify-end">
                        <button type="submit" className="w-full md:w-auto px-16 py-5 bg-indigo-600 hover:bg-slate-900 text-white rounded-[2.2rem] font-black text-xs uppercase tracking-[0.2em] transition-all shadow-2xl shadow-indigo-500/20 flex items-center justify-center gap-4 active:scale-95 group/btn">
                            <span>DISPATCH TO REGISTRY</span>
                            <Send size={16} className="group-hover/btn:translate-x-1 group-hover/btn:translate-y-[-1px] transition-transform" />
                        </button>
                    </div>
                </form>
            </div>

            {/* History */}
            <div className="bg-white rounded-[4rem] shadow-sm border border-slate-100 overflow-hidden">
                <div className="p-10 border-b border-slate-50 flex items-center justify-between bg-slate-50/30">
                    <div>
                        <h3 className="text-xl font-black text-slate-900 uppercase italic tracking-tighter leading-none underline decoration-indigo-100 underline-offset-8 decoration-4">Submission Queue</h3>
                        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-4">Institutional transaction audit trails</p>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-separate border-spacing-0">
                        <thead>
                            <tr className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em] border-b border-slate-50 leading-none">
                                <th className="py-8 px-10">Subject</th>
                                <th className="py-8 px-6">Domain</th>
                                <th className="py-8 px-6">Timestamp</th>
                                <th className="py-8 px-6 text-center">Status</th>
                                <th className="py-8 px-10 text-right">Brief</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm">
                            {uploads.map(u => (
                                <tr key={u.id} className="hover:bg-slate-50 transition-all group border-b border-slate-50">
                                    <td className="py-8 px-10 font-bold italic truncate max-w-[180px] text-slate-900 underline decoration-slate-100 group-hover:decoration-indigo-200 transition-all">{u.name}</td>
                                    <td className="py-8 px-6 text-[10px] font-black uppercase text-slate-400 tracking-tighter italic">{u.type}</td>
                                    <td className="py-8 px-6 text-[10px] font-bold text-slate-400 font-mono italic">{u.date}</td>
                                    <td className="py-8 px-6 text-center">
                                        <span className={cn(
                                            "px-4 py-1.5 rounded-full text-[8.5px] font-black uppercase tracking-[0.1em] border shadow-sm",
                                            u.status === 'Approved' ? "bg-emerald-50 text-emerald-600 border-emerald-100" :
                                            u.status === 'Rejected' ? "bg-rose-50 text-rose-600 border-rose-100" :
                                            "bg-amber-50 text-amber-500 border-amber-100 animate-pulse"
                                        )}>{u.status}</span>
                                    </td>
                                    <td className="py-8 px-10 text-right">
                                        <button 
                                            onClick={() => setDetailItem(u)}
                                            className="text-indigo-600 hover:text-indigo-800 text-[10px] font-black uppercase tracking-widest flex items-center gap-3 justify-end ml-auto group/lnk"
                                        >
                                            <span>Full Brief</span>
                                            <ArrowRight size={14} className="group-hover/lnk:translate-x-1.5 transition-transform" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div className="lg:col-span-4 space-y-8">
            {/* Last Success */}
            <div className="bg-[#0f172a] p-12 rounded-[4rem] shadow-2xl text-white border border-slate-800 relative overflow-hidden h-fit group/last">
                <div className="absolute -top-10 -right-10 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-1000"></div>
                <div className="relative z-10 flex flex-col justify-between h-full">
                    <div>
                        <p className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.3em] mb-10 leading-none italic border-l-2 border-indigo-600 pl-4">Institutional Synchronizer</p>
                        {lastSuccessful ? (
                           <>
                            <div className="flex items-center gap-6 mb-10">
                                <div className="w-16 h-16 bg-white/5 rounded-3xl flex items-center justify-center border border-white/10 backdrop-blur-md shadow-2xl group-hover:scale-110 transition-transform">
                                    <FileSpreadsheet size={32} className="text-indigo-400 drop-shadow-lg" />
                                </div>
                                <div className="min-w-0">
                                    <h4 className="text-2xl font-black tracking-tighter uppercase italic truncate underline decoration-indigo-600 underline-offset-8">{lastSuccessful.name}</h4>
                                    <p className="text-[9px] text-slate-500 font-black uppercase tracking-widest mt-4 italic font-mono">{lastSuccessful.date} · {lastSuccessful.time}</p>
                                </div>
                            </div>
                            
                            {/* Workflow */}
                            <div className="space-y-10 mt-16 pt-10 border-t border-white/5">
                                <div className="flex justify-between items-center px-2">
                                    <p className="text-[9px] font-black text-indigo-300 uppercase tracking-widest italic">Compliance Status</p>
                                    <span className="bg-emerald-500/20 text-emerald-400 text-[8px] font-black px-3 py-1 rounded-full uppercase tracking-widest border border-emerald-400/20 shadow-lg shadow-emerald-500/10 active-status">{lastSuccessful.status}</span>
                                </div>
                                
                                <div className="relative flex justify-between items-center px-4 h-0.5 bg-white/5 rounded-full">
                                    <div className="absolute h-full bg-indigo-500 left-0 transition-all duration-1000" style={{ width: '66%' }}></div>
                                    <div className="w-8 h-8 rounded-full bg-indigo-500 border-8 border-[#0f172a] shadow-xl flex items-center justify-center relative translate-y-[-1px] group-hover:scale-110 transition-transform">
                                        <Check size={14} className="text-white" />
                                        <span className="absolute -bottom-10 text-[9px] font-black uppercase text-indigo-400 italic">LOGGED</span>
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-amber-500 border-8 border-[#0f172a] shadow-xl flex items-center justify-center relative translate-y-[-1px] group-hover:scale-110 transition-transform">
                                        <Clock size={14} className="text-white" />
                                        <span className="absolute -bottom-10 text-[9px] font-black uppercase text-amber-500 italic">SEC REW</span>
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-slate-800 border-8 border-[#0f172a] shadow-xl flex items-center justify-center relative translate-y-[-1px] opacity-20">
                                        <span className="absolute -bottom-10 text-[9px] font-black uppercase text-slate-600 italic">SYNC</span>
                                    </div>
                                </div>
                            </div>
                           </>
                        ) : <p className="italic text-slate-500 font-medium">No recent uploads identified in current session.</p>}
                    </div>
                </div>
            </div>

            {/* Guides */}
            <div className="bg-slate-50 p-12 rounded-[3.5rem] border border-slate-100 h-fit group/guides transition-all hover:bg-white hover:shadow-xl hover:shadow-slate-100">
                <div className="w-12 h-12 bg-white rounded-[1.5rem] flex items-center justify-center shadow-lg mb-8 group-hover/guides:rotate-12 transition-transform">
                    <Info size={24} className="text-indigo-600" />
                </div>
                <h4 className="text-xs font-black text-slate-900 uppercase italic mb-6 tracking-tighter underline underline-offset-8 decoration-indigo-100">Structural Protocols</h4>
                <ul className="space-y-6">
                    <li className="flex items-start gap-5">
                        <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-2 shrink-0 shadow-[0_0_8px_rgba(99,102,241,1)]"></div>
                        <p className="text-[11.5px] text-slate-500 font-medium leading-relaxed italic border-l-2 border-slate-100 pl-4 group-hover/guides:border-indigo-200 transition-all">Institutional ledger strictly accepts CSV formatting. Incorrect schema index will trigger automatic rejection script.</p>
                    </li>
                    <li className="flex items-start gap-5">
                        <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-2 shrink-0 shadow-[0_0_8px_rgba(99,102,241,1)]"></div>
                        <p className="text-[11.5px] text-slate-500 font-medium leading-relaxed italic border-l-2 border-slate-100 pl-4 group-hover/guides:border-indigo-200 transition-all">Verification duration: 24-48 business hours via Institutional Finance compliance desk.</p>
                    </li>
                </ul>
            </div>
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {detailItem && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-6 bg-slate-950/80 backdrop-blur-2xl">
             <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 100 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 100 }}
              className="bg-white rounded-[4rem] p-12 max-w-lg w-full shadow-[0_50px_100px_rgba(0,0,0,0.5)] border border-slate-100 relative overflow-hidden"
             >
                <button onClick={() => setDetailItem(null)} className="absolute top-10 right-10 p-3 bg-slate-50 text-slate-400 rounded-2xl hover:text-rose-500 transition-all"><X size={20}/></button>
                <h3 className="text-3xl font-black text-slate-900 uppercase italic tracking-tighter leading-none mb-12 underline decoration-indigo-100 underline-offset-8 decoration-10">Brief Details</h3>
                
                <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                        <div className="bg-slate-50 p-6 rounded-[2rem] border border-slate-100 shadow-inner">
                            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-3 leading-none italic">Arrival Date</p>
                            <p className="text-[13px] font-bold text-slate-900 font-mono uppercase italic">{detailItem.date}</p>
                        </div>
                        <div className="p-6 rounded-[2rem] border-2 border-slate-100 flex flex-col justify-center bg-slate-50/30">
                            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-3 leading-none italic">Compliance</p>
                            <p className="text-[13px] font-black text-indigo-600 uppercase italic tracking-tighter">{detailItem.status}</p>
                        </div>
                    </div>

                    <div className="bg-slate-900 p-10 rounded-[3rem] text-white shadow-2xl group/brief relative overflow-hidden">
                        <div className="absolute right-0 bottom-0 opacity-10 text-9xl font-black group-hover/brief:scale-110 transition-transform">WHY</div>
                        <p className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em] mb-4 leading-none italic border-b border-indigo-900 pb-3">Structural Rationale</p>
                        <p className="text-xs font-medium text-slate-300 leading-relaxed italic border-l-2 border-indigo-500 pl-6 py-1 relative z-10">{detailItem.reason}</p>
                    </div>

                    <div className="bg-indigo-50/50 p-10 rounded-[3rem] border border-indigo-100/50 italic">
                        <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-4 leading-none underline decoration-indigo-200">Institutional Notes</p>
                        <p className="text-xs font-medium text-slate-600 leading-relaxed pl-6 border-l-2 border-indigo-200">{detailItem.comment || 'No secondary audit notes identified.'}</p>
                    </div>
                </div>

                <button 
                   onClick={() => setDetailItem(null)}
                   className="w-full py-5 bg-slate-900 text-white rounded-[2rem] font-black text-xs uppercase tracking-widest hover:bg-slate-800 transition-all shadow-2xl active:scale-95 mt-12"
                >
                    CLOSE BRIEFING
                </button>
             </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
            <motion.div 
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                className="fixed bottom-10 right-10 z-[120] bg-emerald-500 p-6 rounded-[2.5rem] shadow-[0_20px_50px_rgba(16,185,129,0.3)] text-white flex items-center justify-between gap-6 border-2 border-emerald-400/50"
            >
                <div className="flex items-center gap-5">
                    <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center border border-white/20 shadow-xl scale-110">
                        <CheckCircle size={28} />
                    </div>
                    <div>
                        <p className="text-lg font-black uppercase tracking-tighter italic leading-none mb-1">Queue Synchronization Successful</p>
                        <p className="text-[10px] font-bold text-emerald-100 uppercase tracking-widest">Added to institutional audit ledger.</p>
                    </div>
                </div>
                <button onClick={() => setShowToast(false)} className="text-white/40 hover:text-white transition-colors p-2"><X size={20} /></button>
            </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
