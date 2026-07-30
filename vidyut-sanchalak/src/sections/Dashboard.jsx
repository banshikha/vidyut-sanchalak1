import { useState, useEffect } from 'react'
import {
  PieChart, Pie, Cell, ResponsiveContainer, Tooltip,
  LineChart, Line, XAxis, YAxis, CartesianGrid, Legend,
  RadialBarChart, RadialBar,
} from 'recharts'
import { Download, TrendingUp, Leaf, BatteryCharging, AlertTriangle, Info, AlertCircle } from 'lucide-react'
import { roles, generationMix, forecastData, alerts } from '../data.js'
import { FadeIn } from '../App.jsx'

const severityStyles = {
  high: { bg: 'bg-red-500/10', text: 'text-red-400', icon: AlertCircle, ring: 'ring-red-500/30' },
  medium: { bg: 'bg-amber/10', text: 'text-amber', icon: AlertTriangle, ring: 'ring-amber/30' },
  low: { bg: 'bg-sage/10', text: 'text-sage', icon: Info, ring: 'ring-sage/30' },
}

function StatCard({ icon: Icon, label, value, accent }) {
  return (
    <div className="bg-slateCard rounded-xl border border-white/5 p-5 flex flex-col justify-between">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-medium text-cream/50 uppercase tracking-wide">{label}</span>
        <Icon size={16} className={accent} aria-hidden="true" />
      </div>
      <div className={`font-display font-bold text-2xl ${accent}`}>{value}</div>
    </div>
  )
}

export default function Dashboard() {
  const [activeRole, setActiveRole] = useState(roles[0])
  const [savings, setSavings] = useState(18.6)

  useEffect(() => {
    const interval = setInterval(() => {
      setSavings((prev) => {
        const drift = (Math.random() - 0.5) * 0.4
        const next = prev + drift
        return Math.max(15, Math.min(22, Number(next.toFixed(1))))
      })
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  const handleExport = (type) => {
    alert(`Exporting ${type} report for ${activeRole} view...`)
  }

  return (
    <section id="dashboard" className="bg-slateDark py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <FadeIn className="max-w-2xl mb-10">
          <span className="text-amber font-semibold text-sm tracking-wide uppercase">Dashboard</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-cream mt-2">
            Command center for campus energy
          </h2>
          <p className="text-cream/50 mt-4 text-base sm:text-lg">
            One console, tailored to whoever is looking at it.
          </p>
        </FadeIn>

        <FadeIn>
          <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
            <div className="flex gap-2 overflow-x-auto pb-1">
              {roles.map((role) => (
                <button
                  key={role}
                  onClick={() => setActiveRole(role)}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap transition-colors ${
                    activeRole === role
                      ? 'bg-amber text-slateDark'
                      : 'bg-white/5 text-cream/60 hover:bg-white/10'
                  }`}
                >
                  {role}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 text-sm text-cream/60">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-pulseDot absolute inline-flex h-full w-full rounded-full bg-sage" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sage" />
              </span>
              Live · {activeRole} view
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-5">
            {/* Generation mix donut */}
            <div className="bg-slateCard rounded-xl border border-white/5 p-5 lg:col-span-1">
              <div className="text-xs font-medium text-cream/50 uppercase tracking-wide mb-2">
                Generation Mix
              </div>
              <div className="h-52">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={generationMix}
                      dataKey="value"
                      nameKey="name"
                      innerRadius={55}
                      outerRadius={80}
                      paddingAngle={3}
                    >
                      {generationMix.map((entry) => (
                        <Cell key={entry.name} fill={entry.color} stroke="none" />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{ background: '#132621', border: 'none', borderRadius: 8, color: '#F7F6F2' }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex flex-wrap gap-3 justify-center mt-1">
                {generationMix.map((g) => (
                  <div key={g.name} className="flex items-center gap-1.5 text-xs text-cream/60">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: g.color }} />
                    {g.name} {g.value}%
                  </div>
                ))}
              </div>
            </div>

            {/* Stat cards */}
            <div className="grid grid-cols-2 gap-5 lg:col-span-1">
              <StatCard icon={TrendingUp} label="Energy Savings" value={`${savings.toFixed(1)}%`} accent="text-sage" />
              <StatCard icon={Leaf} label="CO₂ Avoided" value="124.5t" accent="text-amber" />
              <div className="col-span-2 bg-slateCard rounded-xl border border-white/5 p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-cream/50 uppercase tracking-wide">Battery Utilization</span>
                  <BatteryCharging size={16} className="text-sage" aria-hidden="true" />
                </div>
                <div className="relative h-24">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadialBarChart
                      innerRadius="70%"
                      outerRadius="100%"
                      data={[{ name: 'Utilization', value: 87, fill: '#4A9B7F' }]}
                      startAngle={90}
                      endAngle={-270}
                    >
                      <RadialBar background={{ fill: '#1c332c' }} dataKey="value" cornerRadius={8} />
                    </RadialBarChart>
                  </ResponsiveContainer>
                  <div className="absolute inset-0 flex items-center justify-center font-display font-bold text-xl text-cream">
                    87%
                  </div>
                </div>
                <div className="text-center text-xs text-cream/40 mt-2">15–20% longer battery lifespan</div>
              </div>
            </div>

            {/* Alerts */}
            <div className="bg-slateCard rounded-xl border border-white/5 p-5 lg:col-span-1">
              <div className="text-xs font-medium text-cream/50 uppercase tracking-wide mb-3">Alerts</div>
              <div className="space-y-2.5">
                {alerts.map((a, i) => {
                  const s = severityStyles[a.severity]
                  return (
                    <div key={i} className={`flex items-start gap-2.5 rounded-lg p-2.5 ${s.bg}`}>
                      <s.icon size={15} className={`${s.text} mt-0.5 shrink-0`} aria-hidden="true" />
                      <div>
                        <div className="text-xs text-cream/80 leading-snug">{a.text}</div>
                        <div className="text-[11px] text-cream/40 mt-0.5">{a.time}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="bg-slateCard rounded-xl border border-white/5 p-5 mb-6">
            <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
              <span className="text-xs font-medium text-cream/50 uppercase tracking-wide">
                Forecast vs Actual (24h)
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => handleExport('CSV')}
                  className="flex items-center gap-1.5 text-xs font-semibold bg-white/5 hover:bg-white/10 text-cream/70 px-3 py-1.5 rounded-md transition-colors"
                >
                  <Download size={13} /> CSV
                </button>
                <button
                  onClick={() => handleExport('PDF')}
                  className="flex items-center gap-1.5 text-xs font-semibold bg-amber/10 hover:bg-amber/20 text-amber px-3 py-1.5 rounded-md transition-colors"
                >
                  <Download size={13} /> PDF Report
                </button>
              </div>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={forecastData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1c332c" />
                  <XAxis dataKey="hour" stroke="#8aa39a" fontSize={11} tickLine={false} />
                  <YAxis stroke="#8aa39a" fontSize={11} tickLine={false} />
                  <Tooltip contentStyle={{ background: '#0B1512', border: '1px solid #1c332c', borderRadius: 8, color: '#F7F6F2' }} />
                  <Legend wrapperStyle={{ fontSize: 12, color: '#cfd8d4' }} />
                  <Line type="monotone" dataKey="forecast" stroke="#4A9B7F" strokeWidth={2} dot={false} name="Forecast (kW)" />
                  <Line type="monotone" dataKey="actual" stroke="#E8963A" strokeWidth={2} dot={false} name="Actual (kW)" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
