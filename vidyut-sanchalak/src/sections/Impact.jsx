import { TrendingUp, Leaf, Users } from 'lucide-react'
import { benefits } from '../data.js'
import { FadeIn } from '../App.jsx'

const groupMeta = {
  Economic: { icon: TrendingUp, color: 'text-amber', bg: 'bg-amber/10' },
  Environmental: { icon: Leaf, color: 'text-sage', bg: 'bg-sage/10' },
  Social: { icon: Users, color: 'text-forest', bg: 'bg-forest/10' },
}

export default function Impact() {
  return (
    <section id="impact" className="max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
      <FadeIn className="max-w-2xl mb-12">
        <span className="text-amber font-semibold text-sm tracking-wide uppercase">Impact</span>
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink mt-2">
          Impact that compounds
        </h2>
        <p className="text-ink/60 mt-4 text-base sm:text-lg">
          Every campus running Vidyut Sanchalak saves money, cuts emissions, and builds resilience —
          simultaneously.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {Object.entries(benefits).map(([group, items], i) => {
          const meta = groupMeta[group]
          return (
            <FadeIn key={group} delay={i * 100}>
              <div className="h-full bg-white rounded-xl border border-forest/10 p-6 shadow-sm">
                <div className={`w-11 h-11 rounded-lg ${meta.bg} ${meta.color} flex items-center justify-center mb-4`}>
                  <meta.icon size={22} aria-hidden="true" />
                </div>
                <h3 className="font-display font-semibold text-lg text-ink mb-3">{group}</h3>
                <ul className="space-y-2.5">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-ink/65">
                      <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${meta.color.replace('text', 'bg')}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          )
        })}
      </div>

      <FadeIn>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 bg-forest rounded-2xl px-8 py-10 text-center sm:text-left">
          <div className="w-20 h-20 rounded-full bg-amber/20 border-2 border-amber flex items-center justify-center shrink-0">
            <Leaf size={32} className="text-amber" aria-hidden="true" />
          </div>
          <div>
            <div className="font-display font-bold text-xl text-cream">
              Net Zero 2070 · Sustainable Smart Campus
            </div>
            <p className="text-cream/60 text-sm mt-1.5">
              Every 100kg of CO₂ avoided equals 5 trees planted — tracked automatically, campus-wide.
            </p>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
