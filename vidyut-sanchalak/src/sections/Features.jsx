import { Check, X } from 'lucide-react'
import { features, comparisonRows, comparisonData } from '../data.js'
import { FadeIn } from '../App.jsx'

function FeatureCard({ icon: Icon, title, desc, index }) {
  return (
    <FadeIn delay={index * 60}>
      <div className="h-full bg-white rounded-xl border border-forest/10 p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
        <div className="w-11 h-11 rounded-lg bg-forest/10 text-forest flex items-center justify-center mb-4">
          <Icon size={22} aria-hidden="true" />
        </div>
        <h3 className="font-display font-semibold text-ink text-base mb-1.5">{title}</h3>
        <p className="text-sm text-ink/60 leading-relaxed">{desc}</p>
      </div>
    </FadeIn>
  )
}

export default function Features() {
  return (
    <section id="features" className="max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
      <FadeIn className="max-w-2xl mb-12">
        <span className="text-amber font-semibold text-sm tracking-wide uppercase">Features</span>
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink mt-2">
          One platform, every energy asset
        </h2>
        <p className="text-ink/60 mt-4 text-base sm:text-lg">
          Vidyut Sanchalak brings monitoring, forecasting, and control together — so campus
          facility teams act on insight instead of chasing data.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-20">
        {features.map((f, i) => (
          <FeatureCard key={f.title} {...f} index={i} />
        ))}
      </div>

      <FadeIn className="max-w-2xl mb-8">
        <span className="text-amber font-semibold text-sm tracking-wide uppercase">Comparison</span>
        <h3 className="font-display font-bold text-2xl sm:text-3xl text-ink mt-2">
          How we stack up
        </h3>
      </FadeIn>

      <FadeIn>
        <div className="overflow-x-auto rounded-xl border border-forest/10 shadow-sm">
          <table className="min-w-full bg-white text-sm">
            <thead>
              <tr className="bg-forest text-cream">
                <th className="text-left font-display font-semibold px-5 py-4 whitespace-nowrap">Capability</th>
                {Object.keys(comparisonData).map((vendor) => (
                  <th
                    key={vendor}
                    className={`px-5 py-4 font-display font-semibold whitespace-nowrap text-center ${
                      vendor === 'Vidyut Sanchalak' ? 'text-amber' : ''
                    }`}
                  >
                    {vendor}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, i) => (
                <tr key={row} className={i % 2 === 0 ? 'bg-cream/60' : 'bg-white'}>
                  <td className="px-5 py-3.5 font-medium text-ink whitespace-nowrap">{row}</td>
                  {Object.keys(comparisonData).map((vendor) => {
                    const has = comparisonData[vendor][i]
                    return (
                      <td key={vendor} className="px-5 py-3.5 text-center">
                        {has ? (
                          <Check size={18} className="inline text-sage" aria-label="Yes" />
                        ) : (
                          <X size={18} className="inline text-ink/25" aria-label="No" />
                        )}
                      </td>
                    )
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </FadeIn>
    </section>
  )
}
