import React, { useState } from 'react';
import { 
  Banknote, 
  Wallet, 
  Gift, 
  CalendarDays, 
  TrendingUp, 
  UsersRound, 
  HeartHandshake, 
  Car, 
  Stethoscope, 
  HeartPulse, 
  ShieldCheck, 
  GraduationCap, 
  PiggyBank, 
  Coins, 
  Landmark, 
  Utensils, 
  Palmtree, 
  Clock, 
  Laptop,
  Eye,
  EyeOff,
  X,
  CheckCircle,
  ChevronRight
} from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

interface Benefit {
  id: number;
  title: string;
  icon: any;
  type: 'hidden' | 'input' | 'static' | 'mixed';
  value?: string;
  desc: string;
}

const BENEFITS: Benefit[] = [
  { id: 1, title: "Basic Salary", icon: Banknote, type: "hidden", value: "75,000", desc: "Core fixed monthly pay." },
  { id: 2, title: "Gross Salary", icon: Wallet, type: "hidden", value: "1,15,400", desc: "Total pay before deductions." },
  { id: 3, title: "Festival Bonus", icon: Gift, type: "hidden", value: "37,500", desc: "Twice a year reward." },
  { id: 4, title: "Quarterly Bonus", icon: CalendarDays, type: "input", desc: "Performance-based incentive" },
  { id: 5, title: "Yearly Bonus", icon: TrendingUp, type: "input", desc: "Annual target-based bonus" },
  { id: 6, title: "WPPF", icon: UsersRound, type: "input", desc: "Profit participation benefit" },
  { id: 7, title: "WWF", icon: HeartHandshake, type: "input", desc: "Welfare fund allocation." },
  { id: 8, title: "Transportation Allowance", icon: Car, type: "input", desc: "Allowance for commuting expenses" },
  { id: 9, title: "Executive Health Check-Up", icon: Stethoscope, type: "input", desc: "Executive diagnostic healthcare benefit" },
  { id: 10, title: "Health Insurance", icon: HeartPulse, type: "mixed", value: "5,00,000", desc: "Family medical coverage" },
  { id: 11, title: "Life Insurance", icon: ShieldCheck, type: "input", desc: "Secured life coverage." },
  { id: 12, title: "Child Education Allowance", icon: GraduationCap, type: "static", value: "13,000 TK", desc: "Monthly per child allowance." },
  { id: 13, title: "Provident Fund (PF)", icon: PiggyBank, type: "input", desc: "Retirement savings." },
  { id: 14, title: "Gratuity Fund (GF)", icon: Coins, type: "input", desc: "Long-term service reward." },
  { id: 15, title: "PF Loan", icon: Landmark, type: "input", desc: "Emergency loan facility." },
  { id: 16, title: "Subsidised Food", icon: Utensils, type: "input", desc: "Cafeteria meal support." },
  { id: 17, title: "Leave Benefits", icon: Palmtree, type: "input", desc: "Annual and casual leaves." },
  { id: 18, title: "Overtime", icon: Clock, type: "input", desc: "Extra hours calculation." },
  { id: 19, title: "Leave Encashment", icon: Banknote, type: "input", desc: "Monetizing unused leaves." },
  { id: 20, title: "Tools of Trade", icon: Laptop, type: "mixed", value: "45,000", desc: "Hardware and tech budget." }
];

export default function OffersBenefits() {
  const [visibleSalaries, setVisibleSalaries] = useState<Record<number, boolean>>({});
  const [selectedBenefit, setSelectedBenefit] = useState<Benefit | null>(null);

  const toggleVisibility = (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    setVisibleSalaries(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const priorityIds = [1, 2, 3];
  const incentivesIds = [4, 5, 6];
  const healthcareIds = [8, 9, 10];
  const otherIds = BENEFITS.filter(b => !priorityIds.includes(b.id) && !incentivesIds.includes(b.id) && !healthcareIds.includes(b.id)).map(b => b.id);

  const renderBenefitCard = (b: Benefit, size: 'small' | 'large' = 'small') => {
    const Icon = b.icon;
    const isVisible = visibleSalaries[b.id];
    const hasInput = b.type === 'input' || b.type === 'mixed';

    return (
      <div 
        key={b.id}
        onClick={() => setSelectedBenefit(b)}
        className={cn(
          "benefit-card p-6 rounded-[2rem] transition-all cursor-pointer group relative overflow-hidden",
          size === 'large' ? "md:p-8" : "p-4 md:p-6",
          b.id === 1 ? "bg-indigo-600 text-white shadow-xl shadow-indigo-500/20" : 
          b.id === 2 ? "bg-slate-900 text-white shadow-xl shadow-slate-900/20" :
          b.id === 10 ? "bg-emerald-600 text-white shadow-xl shadow-emerald-500/20" :
          "bg-white text-slate-900 border border-slate-100 shadow-sm hover:border-indigo-600/30"
        )}
      >
        <div className="absolute -right-16 -top-16 w-64 h-64 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-all"></div>
        
        <div className="relative z-10 flex flex-col h-full justify-between">
          <div>
            <div className="flex items-start justify-between mb-6">
              <div className={cn(
                "p-3 rounded-2xl border transition-all duration-500",
                b.id === 1 || b.id === 2 || b.id === 10 ? "bg-white/10 border-white/20 text-white group-hover:bg-white group-hover:text-indigo-600" : "bg-slate-50 border-slate-100 text-slate-600 group-hover:bg-indigo-600 group-hover:text-white"
              )}>
                <Icon size={size === 'large' ? 24 : 20} />
              </div>
              <div className="flex flex-col items-end gap-2">
                {hasInput && (
                  <div className="flex items-center gap-1.5 px-2 py-1 bg-white/10 rounded-full border border-white/20 backdrop-blur-md">
                    <span className="w-1 h-1 bg-amber-400 rounded-full animate-pulse"></span>
                    <span className="text-[7px] font-black text-white uppercase tracking-widest">Input Active</span>
                  </div>
                )}
                {size === 'large' && b.id === 3 && (
                  <span className="px-3 py-1 bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 rounded-full text-[8px] font-black uppercase tracking-widest">Twice Yearly</span>
                )}
              </div>
            </div>

            <h3 className={cn(
              "font-black uppercase italic tracking-tighter mb-0.5",
              size === 'large' ? "text-xl md:text-2xl" : "text-sm"
            )}>
              {b.title}
            </h3>
            <p className={cn(
              "font-bold uppercase tracking-[0.1em] mb-6 leading-relaxed italic",
              b.id === 1 || b.id === 2 || b.id === 10 ? "text-white/60" : "text-slate-400",
              size === 'large' ? "text-[10px]" : "text-[8px]"
            )}>
              {b.desc}
            </p>
          </div>

          {(b.type === 'hidden' || b.type === 'mixed') && (
            <div className={cn(
              "flex items-center justify-between p-4 rounded-xl border backdrop-blur-sm",
              b.id === 1 || b.id === 2 || b.id === 10 ? "bg-white/5 border-white/10" : "bg-slate-50 border-slate-100"
            )}>
              <div>
                {isVisible ? (
                  <p className="font-black tracking-tighter text-lg">৳ {b.value}</p>
                ) : (
                  <p className={cn("font-black tracking-[0.3em] text-lg", b.id === 1 || b.id === 2 || b.id === 10 ? "text-white/30" : "text-slate-300")}>••••••</p>
                )}
              </div>
              <button 
                onClick={(e) => toggleVisibility(e, b.id)}
                className={cn(
                  "p-1.5 rounded-lg transition-all shadow-sm",
                  b.id === 1 || b.id === 2 || b.id === 10 ? "text-white/40 hover:text-white hover:bg-white/10" : "text-slate-300 hover:text-indigo-600 hover:bg-white"
                )}
              >
                {isVisible ? <EyeOff size={14} /> : <Eye size={14} />}
              </button>
            </div>
          )}

          {b.type === 'static' && (
            <div className="bg-indigo-600 p-5 rounded-2xl flex items-center justify-between border border-indigo-500 shadow-lg shadow-indigo-500/20 text-white">
              <span className="text-xl font-black italic tracking-tighter">{b.value}</span>
              <CheckCircle size={20} className="text-indigo-200" />
            </div>
          )}

          {b.type === 'input' && (
            <div className="mt-auto">
              <div className="h-1 bg-slate-100 rounded-full overflow-hidden w-full">
                <div className="h-full bg-indigo-500 w-1/3 opacity-20 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom duration-500 pb-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tighter uppercase italic leading-none">Offers & <span className="text-indigo-600">Benefits</span></h2>
          <p className="text-slate-400 font-bold text-[10px] uppercase tracking-[0.2em] mt-3">Personalized compensation and perks overview</p>
        </div>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all shadow-xl shadow-indigo-500/20 flex items-center gap-3">
          Download Handbook (PDF)
        </button>
      </div>

      {/* Sections */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-2 h-8 bg-indigo-600 rounded-full shadow-lg shadow-indigo-500/20"></div>
          <h2 className="text-xl font-black text-slate-800 uppercase tracking-tighter italic">Core Compensation</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {priorityIds.map(id => renderBenefitCard(BENEFITS.find(b => b.id === id)!, 'large'))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-2 h-8 bg-emerald-500 rounded-full shadow-lg shadow-emerald-500/20"></div>
          <h2 className="text-xl font-black text-slate-800 uppercase tracking-tighter italic">Incentives & Bonuses</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {incentivesIds.map(id => renderBenefitCard(BENEFITS.find(b => b.id === id)!))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-2 h-8 bg-blue-500 rounded-full shadow-lg shadow-blue-500/20"></div>
          <h2 className="text-xl font-black text-slate-800 uppercase tracking-tighter italic">Healthcare & Logistics</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {healthcareIds.map(id => renderBenefitCard(BENEFITS.find(b => b.id === id)!))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-2 h-8 bg-slate-300 rounded-full"></div>
          <h2 className="text-xl font-black text-slate-800 uppercase tracking-tighter italic">Other Benefits & Perks</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {otherIds.map(id => renderBenefitCard(BENEFITS.find(b => b.id === id)!))}
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedBenefit && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-slate-950/80 backdrop-blur-xl animate-in fade-in duration-300">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-[3rem] p-10 max-w-lg w-full shadow-2xl relative"
            >
              <button 
                onClick={() => setSelectedBenefit(null)}
                className="absolute top-8 right-8 p-3 text-slate-400 hover:text-slate-900 transition-colors bg-slate-50 rounded-2xl border border-slate-100"
              >
                <X size={20} />
              </button>
              
              <div className="flex items-center gap-6 mb-10">
                <div className="bg-indigo-50 p-5 rounded-[2rem] text-indigo-600 border border-indigo-100 shadow-inner">
                  <selectedBenefit.icon size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900 uppercase italic tracking-tighter">{selectedBenefit.title}</h3>
                  <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mt-1">Employee Benefit Plan</p>
                </div>
              </div>
              
              <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 mb-10 italic shadow-inner">
                <p className="text-sm font-medium text-slate-500 leading-relaxed">{selectedBenefit.desc}</p>
                <div className="mt-4 flex items-center gap-2">
                   <div className="w-1 h-1 bg-indigo-400 rounded-full"></div>
                   <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Policy valid until FY 2026</p>
                </div>
              </div>

              {(selectedBenefit.type === 'input' || selectedBenefit.type === 'mixed') && (
                <div className="space-y-4">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Declare Target Amount (৳)</label>
                  <div className="relative">
                    <span className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 font-black text-xl">৳</span>
                    <input 
                      type="number" 
                      className="w-full bg-slate-50 border-2 border-slate-100 rounded-[1.5rem] py-5 pl-12 pr-6 font-black text-xl text-slate-900 focus:outline-none focus:border-indigo-600 focus:bg-white transition-all shadow-inner" 
                      placeholder="0.00" 
                    />
                  </div>
                </div>
              )}

              <div className="mt-12 flex gap-4">
                <button 
                  onClick={() => setSelectedBenefit(null)}
                  className="flex-1 py-5 bg-slate-900 text-white rounded-[2rem] text-[10px] font-black uppercase tracking-widest hover:bg-slate-800 transition-all shadow-xl shadow-slate-950/20"
                >
                  SAVE & CONFIRM
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
