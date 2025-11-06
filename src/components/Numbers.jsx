import { useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { gsap } from 'gsap'

function useCountUp(target = 1000, duration = 1.6) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obj = { val: 0 }
    const tween = gsap.to(obj, {
      val: target,
      duration,
      ease: 'power3.out',
      onUpdate: () => {
        el.textContent = Math.floor(obj.val).toLocaleString()
      },
    })
    return () => tween.kill()
  }, [target, duration])
  return ref
}

export default function Numbers() {
  const ref1 = useCountUp(3, 1.2)
  const ref2 = useCountUp(1200, 1.6)
  const ref3 = useCountUp(7, 1.2)
  const controls = useAnimation()

  useEffect(() => {
    controls.start({ opacity: 1, y: 0, transition: { duration: 0.6 } })
  }, [controls])

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 gap-6">
        {[{ label: 'Libraries', ref: ref1 }, { label: 'Subscriptions', ref: ref2 }, { label: 'Years of Experience', ref: ref3 }].map((item) => (
          <motion.div key={item.label} initial={{ opacity: 0, y: 10 }} animate={controls} className="rounded-2xl p-8 ring-1 ring-slate-200 bg-gradient-to-br from-slate-50 to-white shadow-sm">
            <div className="text-4xl font-semibold text-slate-900">
              <span ref={item.ref}>0</span>
              {item.label === 'Subscriptions' ? '+' : ''}
            </div>
            <div className="mt-1 text-sm text-slate-600">{item.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
