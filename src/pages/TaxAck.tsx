import React, { useState } from 'react';
import { FileCheck2, FileUp, AlertTriangle, Download, X, CheckCircle } from 'lucide-react';
import { cn } from '../lib/utils';

export default function TaxAck() {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) setFile(e.target.files[0]);
  };

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Acknowledgement Form */}
        <div className="lg:col-span-2 bg-white rounded-[3.5rem] p-10 md:p-12 border border-slate-100 shadow-sm relative overflow-hidden">
          <div className="flex items-center gap-6 mb-12">
            <div className="w-16 h-16 bg-emerald-50 rounded-[1.8rem] flex items-center justify-center border border-emerald-100 shadow-inner group-hover:bg-emerald-100 transition-colors">
              <FileCheck2 size={32} className="text-emerald-500" />
            </div>
            <div>
              <h3 className="text-2xl font-black text-slate-900 uppercase italic tracking-tighter leading-none">Acknowledgement Submission</h3>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-2">Upload your official tax return acknowledgement slip</p>
            </div>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); alert("Acknowledgement Uploaded!"); }} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Income Year</label>
                <select required className="w-full px-6 py-4 bg-slate-50 border-none rounded-[1.5rem] font-bold text-slate-800 text-sm outline-none focus:ring-2 focus:ring-emerald-500 shadow-inner transition-all">
                  <option>2024-25</option>
                  <option>2023-24</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">E-TIN Number</label>
                <input required type="text" placeholder="12-digit TIN" className="w-full px-6 py-4 bg-slate-50 border-none rounded-[1.5rem] font-bold text-slate-800 text-sm outline-none focus:ring-2 focus:ring-emerald-500 shadow-inner transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Tax Circle</label>
                <input required type="text" placeholder="e.g. 125" className="w-full px-6 py-4 bg-slate-50 border-none rounded-[1.5rem] font-bold text-slate-800 text-sm outline-none focus:ring-2 focus:ring-emerald-500 shadow-inner transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Tax Zone</label>
                <input required type="text" placeholder="e.g. Zone 11" className="w-full px-6 py-4 bg-slate-50 border-none rounded-[1.5rem] font-bold text-slate-800 text-sm outline-none focus:ring-2 focus:ring-emerald-500 shadow-inner transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Slip Serial</label>
                <input required type="text" placeholder="From Ack Slip" className="w-full px-6 py-4 bg-slate-50 border-none rounded-[1.5rem] font-bold text-slate-800 text-sm outline-none focus:ring-2 focus:ring-emerald-500 shadow-inner transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Submission Date</label>
                <input required type="date" className="w-full px-6 py-4 bg-slate-50 border-none rounded-[1.5rem] font-bold text-slate-800 text-sm outline-none focus:ring-2 focus:ring-emerald-500 shadow-inner transition-all" />
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-5 bg-slate-50 rounded-[1.5rem] border border-slate-100 shadow-inner">
              <input type="checkbox" id="extension" className="w-6 h-6 rounded-lg text-emerald-600 focus:ring-emerald-500 border-slate-300" />
              <label htmlFor="extension" className="text-xs font-black text-slate-600 uppercase tracking-widest cursor-pointer">Official Time Extension Taken?</label>
            </div>

            <div className="relative group overflow-hidden">
              <input type="file" id="ack-file" className="hidden" onChange={handleFileChange} />
              <label htmlFor="ack-file" className={cn(
                "flex flex-col items-center justify-center w-full min-h-[160px] border-4 border-dashed rounded-[2.5rem] cursor-pointer transition-all relative z-10",
                file ? "bg-emerald-50/50 border-emerald-200" : "bg-slate-50 border-slate-100 hover:bg-slate-100 hover:border-emerald-300"
              )}>
                <div className="flex flex-col items-center justify-center p-8 text-center">
                    {file ? (
                        <>
                            <CheckCircle size={40} className="text-emerald-500 mb-4 animate-in zoom-in" />
                            <p className="text-sm font-black text-emerald-600 uppercase tracking-tighter italic">Document Selected</p>
                            <p className="text-[10px] text-slate-400 font-bold mt-2 font-mono">{file.name}</p>
                        </>
                    ) : (
                        <>
                            <FileUp size={40} className="text-slate-300 group-hover:text-emerald-400 group-hover:scale-110 transition-all duration-500 mb-4" />
                            <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">Upload Acknowledgement Receipt</p>
                            <p className="text-[9px] text-slate-300 uppercase tracking-widest mt-2 font-bold italic">Max size: 5MB (PDF/JPG/PNG)</p>
                        </>
                    )}
                </div>
              </label>
            </div>

            <button type="submit" className="w-full py-5 bg-slate-900 text-white rounded-[1.8rem] font-black text-xs uppercase tracking-widest hover:bg-slate-800 transition-all shadow-2xl shadow-slate-950/20 active:scale-[0.98]">
              COMPLETE SUBMISSION
            </button>
          </form>
        </div>

        <div className="space-y-8">
          <div className="bg-rose-50 rounded-[3rem] p-10 border-2 border-rose-100/50 relative overflow-hidden shadow-sm">
            <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg shadow-rose-200/50 mb-8 relative z-10 border border-rose-50">
              <AlertTriangle size={28} className="text-rose-500" />
            </div>
            <h3 className="text-xl font-black text-rose-900 uppercase italic tracking-tighter leading-none mb-3 relative z-10">Deadline Alert</h3>
            <p className="text-xs font-medium text-rose-700/80 mb-8 leading-relaxed italic relative z-10">Final date for submitting FY 2024-25 acknowledgement is <span className="font-black text-rose-800 underline decoration-rose-300 underline-offset-4">Nov 30, 2025</span>.</p>
            <div className="p-5 bg-white/60 rounded-2xl relative z-10 border border-white/50 backdrop-blur-sm">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-black text-rose-800 uppercase tracking-widest">Compliance Status</span>
                <span className="text-[10px] font-black text-rose-600 bg-rose-100 px-3 py-1 rounded-full uppercase animate-pulse">PENDING</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[3rem] p-10 border border-slate-100 shadow-sm">
            <h3 className="text-sm font-black text-slate-900 mb-10 uppercase tracking-widest underline decoration-indigo-100 underline-offset-8">Submission Statistics</h3>
            <div className="space-y-8">
                <div className="flex items-center gap-5">
                    <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center border border-emerald-100 shadow-inner">
                        <span className="text-lg font-black text-emerald-600 italic">4</span>
                    </div>
                    <div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Years Submitted</p>
                        <p className="text-xs font-bold text-slate-700 font-mono underline decoration-slate-100 italic">FY 2020 - 2024</p>
                    </div>
                </div>
                <div className="flex items-center gap-5">
                    <div className="w-12 h-12 bg-rose-50 rounded-2xl flex items-center justify-center border border-rose-100 shadow-inner">
                        <span className="text-lg font-black text-rose-600 italic">1</span>
                    </div>
                    <div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Incomplete records</p>
                        <p className="text-xs font-bold text-slate-700 font-mono italic underline decoration-rose-50">FY 2024-25</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-[3rem] p-10 border border-slate-100 shadow-sm overflow-hidden">
        <h3 className="text-sm font-black text-slate-900 mb-12 uppercase tracking-widest underline decoration-indigo-200 underline-offset-8 decoration-4">ACK History Queue</h3>
        <div className="overflow-x-auto">
            <table className="w-full text-left border-separate border-spacing-y-4">
                <thead>
                    <tr className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">
                        <th className="px-8">Inc. Year</th>
                        <th className="px-8">Registered E-TIN</th>
                        <th className="px-8">Proc. Date</th>
                        <th className="px-8">Status</th>
                        <th className="px-8 text-right">Utility</th>
                    </tr>
                </thead>
                <tbody className="text-sm">
                    {[
                      { yr: '2023-24', tin: '123456789012', date: '15 Nov 2024', st: 'Verified' },
                      { yr: '2022-23', tin: '123456789012', date: '20 Nov 2023', st: 'Verified' }
                    ].map((row, i) => (
                      <tr key={i} className="bg-slate-50/50 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all rounded-[1.8rem] group border border-transparent hover:border-slate-100">
                          <td className="py-6 px-10 font-bold text-slate-800 rounded-l-[1.8rem] italic underline decoration-slate-200">{row.yr}</td>
                          <td className="py-6 px-10 text-slate-500 font-medium font-mono">{row.tin}</td>
                          <td className="py-6 px-10 text-[10px] font-black text-slate-400 uppercase tracking-widest">{row.date}</td>
                          <td className="py-6 px-10">
                              <span className="bg-emerald-50 text-emerald-600 text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest border border-emerald-100 shadow-sm">Verified</span>
                          </td>
                          <td className="py-6 px-10 text-right rounded-r-[1.8rem]">
                              <button className="p-3 bg-white rounded-xl shadow-md hover:scale-110 transition-all text-slate-400 hover:text-emerald-500">
                                  <Download size={16} />
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
