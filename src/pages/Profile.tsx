import { User, Mail, Shield, MapPin, Calendar, Camera } from 'lucide-react';
import { useUser } from '../context/UserContext';
import { motion } from 'motion/react';

export default function Profile() {
  const { currentUser } = useUser();

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom duration-700">
      <div className="relative">
        <div className="h-48 bg-gradient-to-r from-indigo-600 to-emerald-500 rounded-[3rem] shadow-xl"></div>
        <div className="absolute -bottom-16 left-10 flex items-end gap-6">
          <div className="relative group">
            <div className="w-40 h-40 rounded-[2.5rem] border-8 border-white shadow-2xl overflow-hidden bg-white">
              <img src={currentUser.avatar} alt="Profile" className="w-full h-full object-cover" />
            </div>
            <button className="absolute bottom-2 right-2 p-3 bg-white rounded-2xl shadow-lg text-slate-600 hover:text-indigo-600 transition-all opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100">
              <Camera size={20} />
            </button>
          </div>
          <div className="pb-4">
            <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase italic">{currentUser.name}</h1>
            <p className="text-slate-400 font-bold uppercase tracking-[0.2em] text-[10px] flex items-center gap-2">
              <Shield size={12} className="text-emerald-500" /> {currentUser.role} · ID: {currentUser.id}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16">
        <div className="md:col-span-2 space-y-8">
          <section className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-6">
            <h2 className="text-xl font-black tracking-tighter uppercase italic text-slate-900 border-b border-slate-50 pb-4 flex items-center gap-3">
              <User size={20} className="text-indigo-600" />
              Personal Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { label: 'Display Name', value: currentUser.name, icon: User },
                { label: 'Email Address', value: `${currentUser.id}@company.com`, icon: Mail },
                { label: 'Base Location', value: 'Dhaka, Bangladesh', icon: MapPin },
                { label: 'Date Joined', value: '12 MAR 2021', icon: Calendar },
              ].map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{item.label}</p>
                  <p className="text-sm font-bold text-slate-700">{item.value}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-6">
            <h2 className="text-xl font-black tracking-tighter uppercase italic text-slate-900 border-b border-slate-50 pb-4 flex items-center gap-3">
              <Shield size={20} className="text-emerald-500" />
              Security Settings
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div>
                  <p className="text-sm font-bold text-slate-700">Two-Factor Authentication</p>
                  <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Enhanced security for your payroll access</p>
                </div>
                <div className="w-12 h-6 bg-emerald-500 rounded-full relative shadow-inner">
                  <div className="absolute right-1 top-1 bottom-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="space-y-8">
          <div className="bg-[#0f172a] p-8 rounded-[2.5rem] text-white space-y-6 shadow-2xl relative overflow-hidden">
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl"></div>
            <h3 className="text-lg font-black tracking-tighter uppercase italic relative z-10">Verification Status</h3>
            <div className="space-y-4 relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                <p className="text-[10px] font-black uppercase tracking-widest text-emerald-400">Identity Verified</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                <p className="text-[10px] font-black uppercase tracking-widest text-emerald-400">TIN Validated</p>
              </div>
              <div className="flex items-center gap-3 text-slate-500">
                <div className="w-2 h-2 rounded-full bg-slate-600"></div>
                <p className="text-[10px] font-black uppercase tracking-widest">Biometrics Pending</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
