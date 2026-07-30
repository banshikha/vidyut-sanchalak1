import { useState, useEffect, useRef } from 'react'
import { Zap, Menu, X, Leaf } from 'lucide-react'
import { navLinks } from './data.js'
import Hero from './sections/Hero.jsx'
import Features from './sections/Features.jsx'
import Technology from './sections/Technology.jsx'
import Dashboard from './sections/Dashboard.jsx'
import Impact from './sections/Impact.jsx'
import About from './sections/About.jsx'

// Reusable animated stat counter, used across Hero/Impact/Dashboard
export function useCountUp(target, duration = 1400) {
  const [value, setValue] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const start = performance.now()
          const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setValue(Math.round(target * eased))
            if (progress < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.4 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return [value, ref]
}

// Small reusable fade-in-on-mount wrapper
export function FadeIn({ children, delay = 0, className = '' }) {
  return (
    <div
      className={`animate-fadeInUp ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollTo = (href) => {
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur border-b border-forest/10">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-5 sm:px-8 py-3.5">
        <a href="#" className="flex items-center gap-2 font-display font-bold text-forest text-lg">
          <span className="w-8 h-8 rounded-lg bg-forest text-cream flex items-center justify-center hex-motif">
            <Zap size={18} />
          </span>
          Vidyut Sanchalak
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="text-sm font-medium text-ink/70 hover:text-forest transition-colors"
            >
              {l.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => scrollTo('#about')}
          className="hidden md:inline-block bg-amber hover:bg-amber/90 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors shadow-sm"
        >
          Request Demo
        </button>

        <button className="md:hidden text-forest" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-cream border-t border-forest/10 px-5 py-4 flex flex-col gap-3">
          {navLinks.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="text-left text-sm font-medium text-ink/80 py-1"
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('#about')}
            className="bg-amber text-white text-sm font-semibold px-5 py-2.5 rounded-lg mt-1"
          >
            Request Demo
          </button>
        </div>
      )}
    </header>
  )
}

function Footer() {
  return (
    <footer className="bg-forest text-cream/80">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 font-display font-bold text-cream text-lg">
            <span className="w-7 h-7 rounded-lg bg-amber text-forest flex items-center justify-center hex-motif">
              <Zap size={16} />
            </span>
            Vidyut Sanchalak
          </div>
          <p className="text-sm mt-2 text-cream/60">Intelligent Energy. Sustainable Future.</p>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-amber transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 bg-forest/40 border border-sage/30 rounded-full px-4 py-2 text-xs font-medium text-sage">
          <Leaf size={14} />
          Net Zero 2070 Aligned
        </div>
      </div>
      <div className="border-t border-cream/10 text-center text-xs text-cream/50 py-4">
        © {new Date().getFullYear()} Vidyut Sanchalak — Team Velox. All rights reserved.
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="font-body">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Technology />
        <Dashboard />
        <Impact />
        <About />
      </main>
      <Footer />
    </div>
  )
}
