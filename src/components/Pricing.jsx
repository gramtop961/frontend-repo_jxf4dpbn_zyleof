import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const tiers = [
  {
    name: 'Day Pass',
    price: '₹199',
    desc: 'Perfect for quick sprints and exam prep days.',
    features: ['All amenities', '8am – 8pm access', 'High-speed WiFi', 'Quiet zones'],
  },
  {
    name: 'Monthly',
    price: '₹1499',
    highlighted: true,
    desc: 'Best for regulars who love a dedicated space.',
    features: ['24/6 access', 'Reserved desk option', 'Complimentary beverages', 'Priority support'],
  },
  {
    name: 'Quarterly',
    price: '₹3999',
    desc: 'Commit long-term and save more.',
    features: ['24/6 access', 'Locker facility', 'Guest passes', 'Workshop invites'],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">Simple, transparent pricing</h2>
          <p className="mt-2 text-slate-600">Choose a plan that fits the way you study or work.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`relative rounded-3xl p-6 ring-1 ring-slate-200 bg-gradient-to-br from-slate-50 to-white shadow-sm ${
                t.highlighted ? 'border-2 border-indigo-500 ring-indigo-200 shadow-indigo-500/10' : ''
              }`}
            >
              {t.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-medium bg-indigo-600 text-white px-2.5 py-0.5 rounded-full shadow">Popular</span>
              )}
              <div className="text-sm text-slate-500">{t.name}</div>
              <div className="mt-1 text-3xl font-semibold text-slate-900">{t.price}</div>
              <p className="mt-2 text-sm text-slate-600">{t.desc}</p>
              <ul className="mt-6 space-y-2">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="mt-0.5 text-emerald-600"><Check size={16} /></span>
                    {f}
                  </li>
                ))}
              </ul>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-2.5 text-sm font-medium shadow ${
                  t.highlighted ? 'bg-slate-900 text-white' : 'bg-white border border-slate-200 text-slate-800'
                }`}
              >
                Choose {t.name}
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
