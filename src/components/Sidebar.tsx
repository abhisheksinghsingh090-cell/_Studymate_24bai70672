import { NavLink, useNavigate } from "react-router-dom";
import { BookOpen, LayoutDashboard, FileText, Brain, ChartNoAxesColumnIncreasing, UserRound, Settings, ShieldCheck, LogOut, GraduationCap, X } from "lucide-react";

const links = [
  { to: "/", label: "Dashboard", icon: LayoutDashboard },
  { to: "/materials", label: "My materials", icon: FileText },
  { to: "/upload", label: "Upload notes", icon: BookOpen },
  { to: "/quiz", label: "Practice quiz", icon: Brain },
  { to: "/analytics", label: "Performance", icon: ChartNoAxesColumnIncreasing },
  { to: "/profile", label: "My profile", icon: UserRound },
  { to: "/settings", label: "Settings", icon: Settings },
  { to: "/admin", label: "Admin panel", icon: ShieldCheck }
];
export default function Sidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  const navigate = useNavigate();
  function logout() { localStorage.removeItem("sm_user"); navigate("/login"); }
  return <>
    {open && <button aria-label="Close menu" onClick={onClose} className="fixed inset-0 z-40 bg-slate-950/40 lg:hidden" />}
    <aside className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-slate-200 bg-white px-4 py-5 transition-transform lg:translate-x-0 ${open ? "translate-x-0" : "-translate-x-full"}`}>
      <div className="mb-9 flex items-center justify-between px-2">
        <div className="flex items-center gap-3"><div className="rounded-xl bg-indigo-600 p-2 text-white"><GraduationCap size={23}/></div><div><div className="text-lg font-extrabold tracking-tight">StudyMate</div><div className="text-xs text-slate-500">Smart study platform</div></div></div>
        <button className="lg:hidden" onClick={onClose}><X size={20}/></button>
      </div>
      <div className="mb-3 px-3 text-[11px] font-bold uppercase tracking-[.15em] text-slate-400">Workspace</div>
      <nav className="flex-1 space-y-1">
        {links.map(({to,label,icon:Icon}) => <NavLink key={to} to={to} end={to === "/"} onClick={onClose} className={({isActive}) => `flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold transition ${isActive ? "bg-indigo-50 text-indigo-700" : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"}`}><Icon size={18}/>{label}</NavLink>)}
      </nav>
      <div className="rounded-2xl bg-indigo-50 p-4"><div className="mb-1 text-sm font-bold text-indigo-900">Keep learning!</div><p className="text-xs leading-5 text-indigo-700">Small study sessions add up. Try a quick quiz today.</p><button onClick={() => {navigate("/quiz");onClose();}} className="mt-3 text-xs font-bold text-indigo-800">Start a quiz →</button></div>
      <button onClick={logout} className="mt-4 flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-slate-500 hover:bg-slate-50"><LogOut size={18}/>Log out</button>
    </aside>
  </>;
}
