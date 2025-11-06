import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative pt-28 lg:pt-32">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Qe6dlWJktclXcUBS/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center min-h-[70vh]">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900"
            >
              Read, Create, Focus — your modern study hub.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="mt-4 text-lg text-gray-600"
            >
              Premium workstations, silent zones, high-speed Wi‑Fi, and artisanal brews. Designed for deep work and delightful breaks.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-8 flex items-center gap-3"
            >
              <a
                href="#pricing"
                className="inline-flex items-center rounded-full bg-indigo-600 text-white text-sm font-medium px-5 py-3 hover:bg-indigo-700 shadow"
              >
                Get Membership
              </a>
              <a
                href="#amenities"
                className="inline-flex items-center rounded-full bg-white text-gray-900 text-sm font-medium px-5 py-3 ring-1 ring-gray-200 hover:ring-gray-300"
              >
                Explore Amenities
              </a>
            </motion.div>
          </div>
          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
}
