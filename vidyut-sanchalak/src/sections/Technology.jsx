import { ArrowRight } from 'lucide-react'
import { techBadges, architectureSteps, services } from '../data.js'
import { FadeIn } from '../App.jsx'

export default function Technology() {
  return (
    <section id="technology" className="bg-forest/5 py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <FadeIn className="max-w-2xl mb-12">
          <span className="text-amber font-semibold text-sm tracking-wide uppercase">Technology</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink mt-2">
            Built on a proven, open stack
          </h2>
          <p className="text-ink/60 mt-4 text-base sm:text-lg">
            No proprietary hardware. Vidyut Sanchalak speaks the protocols your campus already uses.
          </p>
        </FadeIn>

        <FadeIn>
          <div className="flex flex-wrap gap-3 mb-16">
            {techBadges.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="flex items-center gap-2 bg-white border border-forest/10 rounded-full px-4 py-2.5 text-sm font-medium text-ink/80 shadow-sm"
              >
                <Icon size={16} className="text-sage" aria-hidden="true" />
                {label}
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn>
          <div className="bg-white rounded-2xl border border-forest/10 p-6 sm:p-10 shadow-sm">
            <h3 className="font-display font-semibold text-xl text-ink mb-8 text-center">
              Simplified architecture
            </h3>

            <div className="flex flex-col lg:flex-row items-stretch gap-6">
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-4 gap-4 items-center">
                {architectureSteps.map((step, i) => (
                  <div key={step.label} className="flex sm:contents items-center">
                    <div className="flex-1 flex flex-col items-center text-center bg-cream rounded-xl border border-forest/10 px-4 py-6">
                      <div className="w-11 h-11 rounded-lg bg-forest text-cream flex items-center justify-center mb-3">
                        <step.icon size={20} aria-hidden="true" />
                      </div>
                      <div className="font-display font-semibold text-sm text-ink">{step.label}</div>
                      <div className="text-xs text-ink/55 mt-1">{step.desc}</div>
                    </div>
                    {i < architectureSteps.length - 1 && (
                      <div className="hidden sm:flex items-center justify-center px-1 text-sage" aria-hidden="true">
                        <ArrowRight size={20} />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="lg:w-64 bg-cream rounded-xl border border-forest/10 p-5">
                <div className="font-display font-semibold text-sm text-ink mb-3">Supporting Services</div>
                <ul className="space-y-2">
                  {services.map((s) => (
                    <li key={s} className="flex items-center gap-2 text-sm text-ink/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber" aria-hidden="true" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
