import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative pt-8">
      {/* Background Spline cover */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* soft pastel gradient overlay for readability */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-20 pb-28">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 backdrop-blur px-3 py-1 text-sm text-slate-600 shadow-sm">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400"></span>
            Now accepting waitlist signups
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight text-slate-900">
            Simple, pastel‑perfect banking for modern commerce
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Accept payments, issue virtual cards, and manage cashflow — all in a calm, delightful interface.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <button className="px-5 py-3 rounded-xl bg-indigo-500 text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition">
              Join the waitlist
            </button>
            <button className="px-5 py-3 rounded-xl bg-white text-slate-800 border border-slate-200 hover:bg-slate-50 transition">
              View pricing
            </button>
          </div>
          <div className="mt-8 flex items-center gap-6 text-sm text-slate-500">
            <div className="flex -space-x-2">
              <img className="h-8 w-8 rounded-full border border-white" src="https://i.pravatar.cc/48?img=4" />
              <img className="h-8 w-8 rounded-full border border-white" src="https://i.pravatar.cc/48?img=5" />
              <img className="h-8 w-8 rounded-full border border-white" src="https://i.pravatar.cc/48?img=6" />
            </div>
            <span>Trusted by 2,000+ founders</span>
          </div>
        </div>
      </div>
    </section>
  )
}
