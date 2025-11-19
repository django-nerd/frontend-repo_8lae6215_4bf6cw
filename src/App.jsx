import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <CTA />
      <footer className="mx-auto max-w-7xl px-6 py-10 text-sm text-slate-500">
        © {new Date().getFullYear()} PastelPay. All rights reserved.
      </footer>
    </div>
  )
}

export default App
