import React from 'react'
import { ShieldCheck, CreditCard, LineChart, Globe } from 'lucide-react'

const features = [
  {
    title: 'Virtual & physical cards',
    desc: 'Issue cards in seconds with spend controls and pastel-perfect designs.',
    icon: CreditCard,
    color: 'from-rose-200 to-pink-200',
  },
  {
    title: 'Global payments',
    desc: 'Multi-currency support with transparent FX and real-time tracking.',
    icon: Globe,
    color: 'from-sky-200 to-cyan-200',
  },
  {
    title: 'Advanced analytics',
    desc: 'Understand revenue and costs with clean, actionable dashboards.',
    icon: LineChart,
    color: 'from-violet-200 to-indigo-200',
  },
  {
    title: 'Bank‑grade security',
    desc: 'Encryption, tokenization, and continuous monitoring baked in.',
    icon: ShieldCheck,
    color: 'from-emerald-200 to-teal-200',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f) => (
          <div key={f.title} className="group rounded-2xl border border-slate-200 bg-white/80 backdrop-blur p-6 shadow-sm hover:shadow-md transition">
            <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center shadow`}> 
              <f.icon className="h-6 w-6 text-slate-700" />
            </div>
            <h3 className="mt-4 font-semibold text-slate-900">{f.title}</h3>
            <p className="mt-1 text-slate-600 text-sm">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
