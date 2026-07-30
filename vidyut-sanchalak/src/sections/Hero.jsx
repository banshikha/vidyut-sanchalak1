import { ArrowRight, PlayCircle } from 'lucide-react'
import { useCountUp, FadeIn } from '../App.jsx'

function StatCounter({ value, suffix = '', displayOverride, label }) {
  const [count, ref] = useCountUp(value)
  return (
    <div ref={ref} className="text-center sm:text-left">
      <div className="font-display font-bold text-3xl sm:text-4xl text-forest">
        {displayOverride ? displayOverride : `${count}${suffix}`}
      </div>
      <div className="text-xs sm:text-sm text-ink/60 mt-1">{label}</div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-cream via-cream to-sage/10">
      {/* Hexagon motif background accents */}
      <div className="absolute -top-16 -right-16 w-72 h-72 bg-sage/10 hex-motif" aria-hidden="true" />
      <div className="absolute bottom-0 -left-20 w-64 h-64 bg-amber/10 hex-motif" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 pt-16 sm:pt-24 pb-16 sm:pb-20">
        <FadeIn className="max-w-3xl">
          <span className="inline-block bg-forest/10 text-forest text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
            Virtual Power Plant SaaS for Campuses
          </span>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-[1.1] text-ink">
            Intelligent Energy.{' '}
            <span className="text-forest">Sustainable Future.</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-ink/70 max-w-2xl">
            Vidyut Sanchalak is an AI-orchestrated Virtual Power Plant platform that unifies solar,
            wind, battery, and grid into one intelligent system — giving campuses the forecasting
            and control they need to cut costs and carbon at once.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#dashboard"
              className="inline-flex items-center gap-2 bg-forest hover:bg-forest/90 text-cream font-semibold px-6 py-3.5 rounded-lg transition-colors shadow-sm"
            >
              Explore the Dashboard <ArrowRight size={18} />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 bg-white hover:bg-white/70 text-forest font-semibold px-6 py-3.5 rounded-lg border border-forest/15 transition-colors"
            >
              <PlayCircle size={18} /> Request a Demo
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={150}>
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 bg-white/70 backdrop-blur rounded-2xl border border-forest/10 p-6 sm:p-8 shadow-sm">
            <StatCounter value={90} suffix="%+" label="Forecast accuracy" />
            <StatCounter value={60} displayOverride="30–60%" label="Grid dependence cut" />
            <StatCounter value={25} suffix="%" label="Battery efficiency gain" />
            <StatCounter value={35} displayOverride="15–35%" label="Bill savings" />
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
