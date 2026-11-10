import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GraduationCap, Mail, Lock, ArrowRight } from "lucide-react";
export default function Login() {
  const [email,setEmail]=useState(""); const [password,setPassword]=useState(""); const [error,setError]=useState("");
  const navigate=useNavigate();
  function submit(e:React.FormEvent){e.preventDefault(); if(!email.includes("@") || password.length<6){setError("Enter a valid email and a password with at least 6 characters.");return;} const user={name:email.split("@")[0],email}; localStorage.setItem("sm_user",JSON.stringify(user)); navigate("/");}
  return <div className="grid min-h-screen bg-white lg:grid-cols-2">
    <div className="flex items-center justify-center px-6 py-12"><div className="w-full max-w-md">
      <Link to="/login" className="mb-12 inline-flex items-center gap-3"><span className="rounded-xl bg-indigo-600 p-2 text-white"><GraduationCap/></span><span className="text-xl font-extrabold">StudyMate</span></Link>
      <div className="mb-8"><p className="mb-2 text-sm font-bold text-indigo-600">WELCOME BACK</p><h1 className="text-3xl font-extrabold">Sign in to your account</h1><p className="mt-2 text-sm text-slate-500">Continue your learning journey with StudyMate.</p></div>
      <form onSubmit={submit} className="space-y-5"><label className="block text-sm font-semibold">Email address<div className="mt-2 flex items-center gap-3 rounded-xl border border-slate-200 px-4"><Mail size={18} className="text-slate-400"/><input value={email} onChange={e=>setEmail(e.target.value)} type="email" placeholder="you@example.com" className="w-full py-3 outline-none" required/></div></label><label className="block text-sm font-semibold">Password<div className="mt-2 flex items-center gap-3 rounded-xl border border-slate-200 px-4"><Lock size={18} className="text-slate-400"/><input value={password} onChange={e=>setPassword(e.target.value)} type="password" placeholder="At least 6 characters" className="w-full py-3 outline-none" required/></div></label>{error&&<p className="text-sm text-rose-600">{error}</p>}<button className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 py-3.5 font-bold text-white hover:bg-indigo-700">Sign in <ArrowRight size={18}/></button></form>
      <p className="mt-7 text-center text-sm text-slate-500">New to StudyMate? <Link className="font-bold text-indigo-600" to="/register">Create an account</Link></p><p className="mt-5 text-center text-xs text-slate-400">Demo mode: any valid email and 6+ character password.</p>
    </div></div>
    <div className="hidden flex-col justify-between bg-gradient-to-br from-indigo-700 via-indigo-600 to-violet-700 p-12 text-white lg:flex"><div className="text-sm font-semibold text-indigo-100">YOUR PERSONAL STUDY SPACE</div><div><div className="mb-6 max-w-lg text-5xl font-extrabold leading-tight">Study smarter.<br/>Understand deeper.</div><p className="max-w-md text-lg leading-8 text-indigo-100">Turn your notes into summaries, practice quizzes and meaningful progress insights.</p></div><div className="text-sm text-indigo-200">© 2026 StudyMate</div></div>
  </div>;
}
