import React from 'react'

export default function CTA() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-rose-50 via-indigo-50 to-emerald-50 p-10 text-center shadow-sm">
        <h3 className="text-2xl sm:text-3xl font-semibold text-slate-900">Ready to bring calm to your finances?</h3>
        <p className="mt-2 text-slate-600">Join thousands using PastelPay to issue cards and accept payments with ease.</p>
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <input placeholder="Enter your email" className="w-full sm:w-80 rounded-xl border border-slate-200 bg-white/80 px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-200" />
          <button className="w-full sm:w-auto px-5 py-3 rounded-xl bg-indigo-500 text-white shadow hover:shadow-md hover:-translate-y-0.5 transition">Join the waitlist</button>
        </div>
      </div>
    </section>
  )
}
