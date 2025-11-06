import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'

const branches = [
  {
    title: 'Central Branch',
    address: '12 Aurora Plaza, City Center, Metropolis 420001',
  },
  {
    title: 'North Branch',
    address: '88 Skyline Avenue, North District, Metropolis 420019',
  },
  {
    title: 'Riverside Branch',
    address: '5 Quill Street, Riverside Park, Metropolis 420033',
  },
]

export default function Locations() {
  return (
    <section id="locations" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">Our branches</h2>
          <p className="mt-2 text-slate-600">Find a calm, inspiring desk near you.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {branches.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm"
            >
              <div className="flex items-start gap-3">
                <span className="h-10 w-10 inline-flex items-center justify-center rounded-xl bg-indigo-50 text-indigo-700">
                  <MapPin size={18} />
                </span>
                <div>
                  <div className="font-medium text-slate-900">{b.title}</div>
                  <div className="text-sm text-slate-600 mt-1">{b.address}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
