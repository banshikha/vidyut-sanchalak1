import { useState } from 'react'
import { Send, GraduationCap, Cpu, CheckCircle2 } from 'lucide-react'
import { teamInfo } from '../data.js'
import { FadeIn } from '../App.jsx'

export default function About() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setSubmitted(true)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="about" className="bg-forest/5 py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <FadeIn className="lg:col-span-2">
            <span className="text-amber font-semibold text-sm tracking-wide uppercase">About</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink mt-2 mb-5">
              {teamInfo.name}
            </h2>
            <p className="text-ink/70 text-base leading-relaxed mb-6">{teamInfo.blurb}</p>

            <div className="flex items-start gap-3 mb-4">
              <GraduationCap size={18} className="text-sage mt-0.5 shrink-0" aria-hidden="true" />
              <p className="text-sm text-ink/60">{teamInfo.research}</p>
            </div>

            <div className="flex items-start gap-3">
              <Cpu size={18} className="text-amber mt-0.5 shrink-0" aria-hidden="true" />
              <p className="text-sm text-ink/60">{teamInfo.prototype}</p>
            </div>
          </FadeIn>

          <FadeIn delay={100} className="lg:col-span-3">
            <div className="bg-white rounded-2xl border border-forest/10 p-6 sm:p-8 shadow-sm">
              <h3 className="font-display font-semibold text-xl text-ink mb-1.5">Request a demo</h3>
              <p className="text-sm text-ink/55 mb-6">
                Tell us about your campus and we'll be in touch.
              </p>

              {submitted && (
                <div className="flex items-center gap-2 bg-sage/10 text-sage text-sm font-medium rounded-lg px-4 py-3 mb-5">
                  <CheckCircle2 size={18} aria-hidden="true" />
                  Thanks — we've received your message and will reach out shortly.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-ink/60 mb-1.5">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-forest/15 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sage/40"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-ink/60 mb-1.5">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-forest/15 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sage/40"
                    placeholder="you@campus.edu"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-ink/60 mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-forest/15 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sage/40 resize-none"
                    placeholder="Tell us about your campus energy setup..."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-forest hover:bg-forest/90 text-cream font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  Send message <Send size={16} aria-hidden="true" />
                </button>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
