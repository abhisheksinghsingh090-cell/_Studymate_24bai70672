import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Bell, Menu, Search } from "lucide-react";
import Sidebar from "./Sidebar";

const titles: Record<string,string> = {
  "/":"Dashboard", "/materials":"My materials", "/upload":"Upload notes", "/quiz":"Practice quiz",
  "/analytics":"Performance analytics", "/profile":"My profile", "/settings":"Settings", "/admin":"Admin panel"
};
export default function Layout() {
  const [open,setOpen] = useState(false);
  const location = useLocation();
  const title = titles[location.pathname] || "StudyMate";
  let user = { name: "Student", email: "student@example.com" };
  try { user = JSON.parse(localStorage.getItem("sm_user") || "null") || user; } catch {}
  return <div className="min-h-screen bg-[#f7f8fc]">
    <Sidebar open={open} onClose={() => setOpen(false)}/>
    <div className="min-h-screen lg:pl-64">
      <header className="sticky top-0 z-30 flex h-[76px] items-center justify-between border-b border-slate-200 bg-white/90 px-5 backdrop-blur md:px-8">
        <div className="flex items-center gap-3"><button className="rounded-lg p-2 hover:bg-slate-100 lg:hidden" onClick={() => setOpen(true)}><Menu size={21}/></button><div><div className="text-xs text-slate-400">StudyMate / Workspace</div><h1 className="text-lg font-bold text-slate-900">{title}</h1></div></div>
        <div className="flex items-center gap-3"><div className="hidden items-center gap-2 rounded-xl bg-slate-100 px-3 py-2 text-sm text-slate-400 md:flex"><Search size={16}/>Search your workspace</div><button className="relative rounded-xl p-2 text-slate-500 hover:bg-slate-100"><Bell size={19}/><span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-rose-500"/></button><div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-700">{user.name?.[0]?.toUpperCase() || "S"}</div></div>
      </header>
      <main className="mx-auto max-w-[1440px] p-5 md:p-8"><Outlet/></main>
    </div>
  </div>;
}
