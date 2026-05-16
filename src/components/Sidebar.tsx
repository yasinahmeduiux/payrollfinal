import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Sparkles, 
  FileText, 
  ShieldCheck, 
  PiggyBank, 
  Banknote, 
  TrendingUp, 
  UploadCloud, 
  CheckSquare, 
  ChevronDown, 
  ChevronUp,
  User,
  Layers
} from 'lucide-react';
import { useUser } from '../context/UserContext';
import { cn } from '../lib/utils';

export function Sidebar() {
  const { currentUser, switchUser } = useUser();
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const toggleSubmenu = (name: string) => {
    setActiveSubmenu(activeSubmenu === name ? null : name);
  };

  const USERS = [
    { initials: "SM", avatar: "https://i.pravatar.cc/300?u=989800", name: "Shihal Munim Hasan", id: "989800" },
    { initials: "MH", avatar: "https://i.pravatar.cc/300?u=989801", name: "Monahil Hossain", id: "989801" },
    { initials: "KM", avatar: "https://i.pravatar.cc/300?u=989802", name: "Khalid Mridha", id: "989802" },
  ];

  return (
    <aside className="w-72 bg-[#0f172a] text-slate-300 flex flex-col border-r border-slate-800 h-screen sticky top-0 shrink-0 overflow-y-auto">
      {/* Logo */}
      <div className="p-6 flex items-center gap-3">
        <div className="bg-emerald-500 p-2 rounded-xl text-white">
          <Layers size={20} />
        </div>
        <span className="text-xl font-bold text-white">Payroll App</span>
      </div>

      {/* User Switcher */}
      <div className="relative border-b border-slate-800/50">
        <div 
          onClick={() => setUserDropdownOpen(!userDropdownOpen)}
          className="px-6 py-4 flex items-center gap-3 hover:bg-slate-800/30 transition-colors cursor-pointer"
        >
          <div className="w-12 h-12 bg-emerald-500/10 text-emerald-400 rounded-xl flex items-center justify-center font-bold border border-emerald-500/20 shrink-0 overflow-hidden">
            <img src={currentUser.avatar} alt={currentUser.initials} className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <p className="text-sm font-bold text-white truncate">{currentUser.name}</p>
              <ChevronDown size={14} className={cn("text-slate-500 transition-transform", userDropdownOpen && "rotate-180")} />
            </div>
            <p className="text-[10px] text-slate-500 uppercase tracking-widest leading-none mt-1">ID: {currentUser.id}</p>
          </div>
        </div>

        {userDropdownOpen && (
          <div className="absolute left-4 right-4 top-full bg-[#1e293b] border border-slate-700 rounded-2xl shadow-2xl z-50 py-2 mt-1 animate-in fade-in slide-in-from-top-2 duration-200">
            <p className="px-4 py-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest border-b border-slate-700 mb-1">Switch Account</p>
            {USERS.map((user, idx) => (
              <button 
                key={user.id}
                onClick={() => { switchUser(idx); setUserDropdownOpen(false); }}
                className="w-full px-4 py-3 flex items-center gap-3 hover:bg-slate-700/50 transition-all text-left"
              >
                <img src={user.avatar} className="w-8 h-8 rounded-lg object-cover border border-emerald-500/20" alt={user.initials} />
                <div>
                  <p className="text-xs font-bold text-white">{user.name}</p>
                  <p className="text-[9px] text-slate-500 uppercase">ID: {user.id}</p>
                </div>
              </button>
            ))}
            <div className="border-t border-slate-700 mt-1 pt-1">
              <NavLink to="/profile" className="nav-link w-full px-4 py-2 text-[10px] uppercase font-black text-slate-400 hover:text-white flex items-center gap-2 border-none bg-transparent">
                <User size={12} /> View Full Profile
              </NavLink>
            </div>
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1 custom-scrollbar overflow-y-auto">
        <NavLink to="/" end className={({ isActive }) => cn("nav-link", isActive && "active")}>
          <LayoutDashboard size={20} />
          <span>Home</span>
        </NavLink>

        <NavLink to="/offers" className={({ isActive }) => cn("nav-link", isActive && "active")}>
          <Sparkles size={20} />
          <span>Offers & Benefits</span>
        </NavLink>

        {/* Payroll Submenu */}
        <div className="nav-group">
          <button 
            onClick={() => toggleSubmenu('payroll')}
            className="nav-link w-full justify-between"
          >
            <div className="flex items-center gap-3">
              <FileText size={20} />
              <span>Payroll</span>
            </div>
            {activeSubmenu === 'payroll' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
          {activeSubmenu === 'payroll' && (
            <div className="submenu space-y-1 mt-1 ml-4 border-l border-slate-800 pl-2">
              <NavLink to="/payroll/overview" className={({ isActive }) => cn("nav-link py-2", isActive && "active")}>Monthly Overview</NavLink>
              <NavLink to="/payroll/bonus" className={({ isActive }) => cn("nav-link py-2", isActive && "active")}>Bonus Records</NavLink>
            </div>
          )}
        </div>

        {/* Tax Submenu */}
        <div className="nav-group">
          <button 
            onClick={() => toggleSubmenu('tax')}
            className="nav-link w-full justify-between"
          >
            <div className="flex items-center gap-3">
              <ShieldCheck size={20} />
              <span>Tax Management</span>
            </div>
            {activeSubmenu === 'tax' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
          {activeSubmenu === 'tax' && (
            <div className="submenu space-y-1 mt-1 ml-4 border-l border-slate-800 pl-2">
              <NavLink to="/tax/current" className={({ isActive }) => cn("nav-link py-2", isActive && "active")}>Current Year</NavLink>
              <NavLink to="/tax/previous" className={({ isActive }) => cn("nav-link py-2", isActive && "active")}>Previous Year</NavLink>
              <NavLink to="/tax/ait" className={({ isActive }) => cn("nav-link py-2", isActive && "active")}>AIT Declaration</NavLink>
              <NavLink to="/tax/investment" className={({ isActive }) => cn("nav-link py-2", isActive && "active")}>Investment Declaration</NavLink>
              <NavLink to="/tax/ack" className={({ isActive }) => cn("nav-link py-2", isActive && "active")}>Acknowledgement</NavLink>
            </div>
          )}
        </div>

        {/* Retiral Submenu */}
        <div className="nav-group">
          <button 
            onClick={() => toggleSubmenu('retiral')}
            className="nav-link w-full justify-between"
          >
            <div className="flex items-center gap-3">
              <PiggyBank size={20} />
              <span>Retiral Benefits</span>
            </div>
            {activeSubmenu === 'retiral' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
          {activeSubmenu === 'retiral' && (
            <div className="submenu space-y-1 mt-1 ml-4 border-l border-slate-800 pl-2">
              <NavLink to="/retiral/pf" className={({ isActive }) => cn("nav-link py-2", isActive && "active")}>Provident Fund</NavLink>
              <NavLink to="/retiral/gf" className={({ isActive }) => cn("nav-link py-2", isActive && "active")}>Gratuity Fund</NavLink>
            </div>
          )}
        </div>

        {/* Loan Submenu */}
        <div className="nav-group">
          <button 
            onClick={() => toggleSubmenu('loan')}
            className="nav-link w-full justify-between"
          >
            <div className="flex items-center gap-3">
              <Banknote size={20} />
              <span>Loan</span>
            </div>
            {activeSubmenu === 'loan' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
          {activeSubmenu === 'loan' && (
            <div className="submenu space-y-1 mt-1 ml-4 border-l border-slate-800 pl-2">
              <NavLink to="/loan/status" className={({ isActive }) => cn("nav-link py-2", isActive && "active")}>Current Loan</NavLink>
              <NavLink to="/loan/apply" className={({ isActive }) => cn("nav-link py-2", isActive && "active")}>Apply for Loan</NavLink>
              <NavLink to="/loan/topup" className={({ isActive }) => cn("nav-link py-2", isActive && "active")}>Loan Top Up</NavLink>
              <NavLink to="/loan/settlement" className={({ isActive }) => cn("nav-link py-2", isActive && "active")}>Loan Settlement</NavLink>
            </div>
          )}
        </div>

        <NavLink to="/insights" className={({ isActive }) => cn("nav-link", isActive && "active")}>
          <TrendingUp size={20} />
          <span>Salary Insights</span>
        </NavLink>

        {/* Role Based Actions */}
        <div className="pt-4 mt-4 border-t border-slate-800/50 space-y-1">
          <p className="px-4 text-[10px] font-bold text-slate-500 uppercase mb-2">Actions</p>
          
          {currentUser.name === "Monahil Hossain" && (
            <NavLink to="/uploads" className={({ isActive }) => cn("nav-link", isActive && "active")}>
              <UploadCloud size={20} />
              <span>Uploads</span>
            </NavLink>
          )}

          {currentUser.name === "Khalid Mridha" && (
            <NavLink to="/approvals" className={({ isActive }) => cn("nav-link", isActive && "active")}>
              <CheckSquare size={20} />
              <span>Approvals</span>
            </NavLink>
          )}
        </div>
      </nav>
    </aside>
  );
}
