export default function PageTitle({ eyebrow, title, description, action }: { eyebrow?: string; title: string; description?: string; action?: React.ReactNode }) {
  return <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div>{eyebrow && <div className="mb-2 text-xs font-bold uppercase tracking-widest text-indigo-600">{eyebrow}</div>}<h2 className="text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl">{title}</h2>{description && <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">{description}</p>}</div>{action}</div>;
}
