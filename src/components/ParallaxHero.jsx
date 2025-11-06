import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

export default function ParallaxHero({ onJoin }) {
  const containerRef = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY || window.pageYOffset);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const translateY = Math.min(offset * 0.2, 100);

  return (
    <section ref={containerRef} className="relative pt-28 lg:pt-32 overflow-hidden min-h-[86vh]">
      {/* 3D Spline scene with parallax */}
      <div
        className="absolute inset-0 will-change-transform"
        style={{ transform: `translate3d(0, ${translateY}px, 0)` }}
      >
        <Spline
          scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Grainy dark gradient overlay tuned for interactivity */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(168,85,247,0.18),transparent_60%),radial-gradient(800px_400px_at_100%_20%,rgba(56,189,248,0.16),transparent_60%)]" />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-slate-950/30 via-slate-950/40 to-slate-950" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center min-h-[80vh]">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white"
            >
              Focus-first libraries for modern learners.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.7, ease: "easeOut" }}
              className="mt-4 text-lg text-slate-300 max-w-xl"
            >
              Deep work desks, silent floors, and artisan coffee powered by high‑speed Wi‑Fi. Designed for momentum.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22, duration: 0.7, ease: "easeOut" }}
              className="mt-8 flex items-center gap-3"
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={onJoin}
                className="inline-flex items-center rounded-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400 text-white text-sm font-medium px-5 py-3 shadow-lg shadow-fuchsia-500/20"
              >
                Get Membership
              </motion.button>
              <a
                href="#amenities"
                className="inline-flex items-center rounded-full bg-white/10 text-white text-sm font-medium px-5 py-3 ring-1 ring-white/20 hover:bg-white/15"
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
