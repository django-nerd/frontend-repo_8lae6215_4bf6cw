import React from 'react'
import { Menu, Sparkles } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="relative z-20">
      <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-pink-200 via-fuchsia-200 to-indigo-200 flex items-center justify-center shadow-sm">
            <Sparkles className="h-5 w-5 text-indigo-500" />
          </div>
          <span className="font-semibold text-slate-800">PastelPay</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-slate-600">
          <a href="#features" className="hover:text-slate-900 transition">Features</a>
          <a href="#pricing" className="hover:text-slate-900 transition">Pricing</a>
          <a href="#faq" className="hover:text-slate-900 transition">FAQ</a>
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <button className="px-4 py-2 text-slate-700 hover:text-slate-900">Sign in</button>
          <button className="px-4 py-2 rounded-xl bg-indigo-500 text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition">Get started</button>
        </div>
        <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl bg-white/70 backdrop-blur border border-white/60 text-slate-700">
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </header>
  )
}
