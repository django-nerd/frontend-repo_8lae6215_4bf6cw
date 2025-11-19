import React from 'react'

const tiers = [
  { name: 'Starter', price: 'Free', desc: 'For testing and prototypes', features: ['Up to 1K transactions/mo', '2 team members', 'Email support'], color: 'from-sky-200 to-indigo-200' },
  { name: 'Growth', price: '$49', desc: 'For small teams scaling up', features: ['Up to 100K transactions/mo', '10 team members', 'Priority support'], color: 'from-rose-200 to-pink-200' },
  { name: 'Scale', price: 'Custom', desc: 'For high‑volume businesses', features: ['Unlimited transactions', 'SAML/SSO', 'Dedicated manager'], color: 'from-emerald-200 to-teal-200' },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="grid md:grid-cols-3 gap-6">
        {tiers.map((t) => (
          <div key={t.name} className="rounded-2xl border border-slate-200 bg-white/80 backdrop-blur p-6 shadow-sm">
            <div className={`inline-flex rounded-full bg-gradient-to-r ${t.color} px-3 py-1 text-xs text-slate-700`}>{t.name}</div>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-3xl font-semibold text-slate-900">{t.price}</span>
              {t.price !== 'Custom' && <span className="text-slate-500">/mo</span>}
            </div>
            <p className="mt-2 text-slate-600 text-sm">{t.desc}</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              {t.features.map((f) => <li key={f} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-slate-400"></span>{f}</li>)}
            </ul>
            <button className="mt-6 w-full rounded-xl bg-slate-900 text-white py-2.5 hover:-translate-y-0.5 hover:shadow transition">Select</button>
          </div>
        ))}
      </div>
    </section>
  )
}
