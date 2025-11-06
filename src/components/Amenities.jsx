import { motion } from 'framer-motion'
import { Wind, Coffee, CupSoda, Plug, Lightbulb, Wifi, Sandwich, Armchair, Fan, Droplets, Bath, Monitor } from 'lucide-react'

const items = [
  { icon: Wind, label: 'A.C.' },
  { icon: Fan, label: 'Fans' },
  { icon: Armchair, label: 'Personal Workstation' },
  { icon: Droplets, label: 'Water' },
  { icon: Bath, label: 'Toilet' },
  { icon: Coffee, label: 'Tea' },
  { icon: CupSoda, label: 'Coffee' },
  { icon: Sandwich, label: 'Snacks' },
  { icon: Lightbulb, label: 'Lights' },
  { icon: Plug, label: 'Switch Board' },
  { icon: Armchair, label: 'Chair' },
  { icon: Wifi, label: 'High-speed WiFi' },
  { icon: Monitor, label: 'Study Lamp' },
]

export default function Amenities() {
  return (
    <section id="amenities" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">Amenities</h2>
          <p className="mt-2 text-slate-600">Everything you need for a comfortable, distraction-free session.</p>
        </div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {items.map((it, i) => (
            <motion.div
              key={it.label + i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              className="group rounded-2xl bg-white p-4 ring-1 ring-slate-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <div className="h-10 w-10 grid place-items-center rounded-xl bg-gradient-to-br from-indigo-100 to-violet-100 text-indigo-700">
                <it.icon size={18} />
              </div>
              <div className="mt-3 text-sm font-medium text-slate-800">{it.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
