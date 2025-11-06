import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { gsap } from 'gsap'

export default function Hero() {
  const headlineRef = useRef(null)
  const statsRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    tl.fromTo(headlineRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9 })
      .fromTo(statsRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, '-=0.4')
  }, [])

  return (
    <section className="relative pt-20 md:pt-28 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div ref={headlineRef} className="relative z-10">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 text-indigo-700 px-3 py-1 text-xs font-medium ring-1 ring-indigo-200">
              Modern Library & Workstation
            </span>
          </motion.div>
          <h1 className="mt-4 font-semibold tracking-tight text-4xl md:text-6xl text-slate-900">
            Focused minds build better futures
          </h1>
          <p className="mt-4 text-slate-600 text-lg max-w-xl">
            Calm, inspiring spaces designed for deep work and meaningful learning. Reserve your desk, sip your coffee, and get in the zone.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <motion.a href="#pricing" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-slate-900 text-white font-medium shadow-lg shadow-slate-900/20">
              Get Membership
            </motion.a>
            <motion.a href="#amenities" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white border border-slate-200 text-slate-700 font-medium">
              Explore Amenities
            </motion.a>
          </div>

          <div ref={statsRef} className="mt-10 grid grid-cols-3 gap-4">
            {[
              { label: 'Libraries', value: '3+' },
              { label: 'Subscriptions', value: '1.2k+' },
              { label: 'Years', value: '7+' },
            ].map((s) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-2xl bg-white p-4 ring-1 ring-slate-200 shadow-sm">
                <div className="text-2xl font-semibold text-slate-900">{s.value}</div>
                <div className="text-xs uppercase tracking-wider text-slate-500">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative h-[420px] md:h-[560px]">
          <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl ring-1 ring-slate-200">
            <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
          <div className="pointer-events-none absolute -inset-8 bg-gradient-to-tr from-indigo-200/30 via-sky-100/30 to-emerald-200/30 blur-3xl rounded-[3rem]" />
        </div>
      </div>
    </section>
  )
}
