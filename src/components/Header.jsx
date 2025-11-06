import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Library, Search, Phone, Menu } from 'lucide-react'
import { gsap } from 'gsap'

export default function Header() {
  const barRef = useRef(null)

  useEffect(() => {
    if (!barRef.current) return
    gsap.fromTo(
      barRef.current,
      { width: 0, opacity: 0 },
      { width: '100%', opacity: 1, duration: 1.2, ease: 'power3.out' }
    )
  }, [])

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.a
          href="#"
          className="flex items-center gap-3"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white shadow-lg shadow-indigo-500/20">
            <Library size={22} />
          </span>
          <div className="leading-tight">
            <p className="font-semibold text-slate-900">Aurora Library</p>
            <p className="text-xs text-slate-500">Study • Work • Create</p>
          </div>
        </motion.a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
          <a className="hover:text-slate-900" href="#amenities">Amenities</a>
          <a className="hover:text-slate-900" href="#pricing">Pricing</a>
          <a className="hover:text-slate-900" href="#locations">Locations</a>
          <a className="hover:text-slate-900" href="#contact">Contact</a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm bg-white border border-slate-200 hover:border-slate-300 text-slate-700 shadow-sm">
            <Search size={16} />
            Search
          </button>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 shadow-lg shadow-slate-900/20"
          >
            <Phone size={16} />
            Call Us
          </a>
        </div>

        <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl border border-slate-200 text-slate-700">
          <Menu size={18} />
        </button>
      </div>
      <div ref={barRef} className="h-[2px] bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500" />
    </header>
  )
}
