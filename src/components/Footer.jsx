import { motion } from 'framer-motion'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer id="contact" className="border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-10 md:py-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-sm text-slate-600">
          © {year} Aurora Library. All rights reserved.
        </motion.div>
        <div className="flex items-center gap-6 text-sm">
          <a href="#pricing" className="text-slate-600 hover:text-slate-900">Membership</a>
          <a href="#locations" className="text-slate-600 hover:text-slate-900">Branches</a>
          <a href="mailto:hello@auroralibrary.io" className="text-slate-600 hover:text-slate-900">hello@auroralibrary.io</a>
        </div>
      </div>
    </footer>
  )
}
