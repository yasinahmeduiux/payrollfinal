import { useLocation } from 'react-router-dom';
import { Bell, Menu, Globe } from 'lucide-react';
import { cn } from '../lib/utils';

const ROUTE_MAP: Record<string, { title: string, subdomain: string }> = {
  '/': { title: 'Financial Dashboard', subdomain: 'home' },
  '/offers': { title: 'Offers & Benefits', subdomain: 'perks' },
  '/payroll/overview': { title: 'Monthly Overview', subdomain: 'records' },
  '/payroll/bonus': { title: 'Bonus Records', subdomain: 'bonus' },
  '/tax/current': { title: 'Current Year Tax', subdomain: 'tax' },
  '/tax/previous': { title: 'Previous Year Tax', subdomain: 'archive' },
  '/tax/ait': { title: 'AIT Declaration', subdomain: 'declare' },
  '/tax/investment': { title: 'Investment Declaration', subdomain: 'invest' },
  '/tax/ack': { title: 'Acknowledgement', subdomain: 'proof' },
  '/retiral/pf': { title: 'Provident Fund', subdomain: 'retired' },
  '/retiral/gf': { title: 'Gratuity Fund', subdomain: 'rewards' },
  '/loan/status': { title: 'Current Loan', subdomain: 'credit' },
  '/loan/apply': { title: 'Apply for Loan', subdomain: 'loan' },
  '/loan/topup': { title: 'Loan Top Up', subdomain: 'topup' },
  '/loan/settlement': { title: 'Loan Settlement', subdomain: 'settle' },
  '/insights': { title: 'Salary Insights', subdomain: 'growth' },
  '/uploads': { title: 'Upload Management', subdomain: 'upload' },
  '/approvals': { title: 'Approval Management', subdomain: 'ops' },
  '/profile': { title: 'Corporate Profile', subdomain: 'me' },
};

export function Header() {
  const location = useLocation();
  const currentRoute = ROUTE_MAP[location.pathname] || { title: 'Payroll App', subdomain: 'app' };

  return (
    <header className="h-20 bg-white border-b border-slate-100 px-8 flex items-center justify-between sticky top-0 z-30 shrink-0">
      <div className="flex items-center gap-6">
        <button className="lg:hidden p-2 text-slate-600 hover:bg-slate-50 rounded-xl transition-all">
          <Menu size={24} />
        </button>
        <div className="flex flex-col">
          <h1 id="page-header-title" className="text-2xl font-black text-slate-900 tracking-tighter uppercase italic leading-none">
            {currentRoute.title.split(' ')[0]} <span className="text-indigo-600 underline decoration-indigo-600/20">{currentRoute.title.split(' ').slice(1).join(' ')}</span>
          </h1>
          <div className="flex items-center gap-2 mt-1 px-2 py-0.5 bg-slate-50 rounded-lg border border-slate-100 w-fit">
            <Globe size={10} className="text-slate-400" />
            <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest leading-none">
              {currentRoute.subdomain}.payroll.app
            </span>
          </div>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-2xl border border-slate-100">
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
          <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">System Online</span>
        </div>
        <button className="relative p-2.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all">
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
      </div>
    </header>
  );
}
