import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Library, Menu } from "lucide-react";

export default function Header({ onJoin }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled ? "backdrop-blur-md bg-slate-900/60 shadow-inner" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all ${scrolled ? "h-14" : "h-16"}`}>
          <motion.a
            href="#"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <Library className={`w-6 h-6 text-indigo-400 transition-transform ${scrolled ? "scale-95" : "scale-100"}`} />
            <span className="font-semibold text-lg tracking-tight text-white">Aurora Library</span>
          </motion.a>

          <nav className="hidden md:flex items-center gap-8">
            {[
              ["Amenities", "#amenities"],
              ["Pricing", "#pricing"],
              ["Locations", "#locations"],
            ].map(([label, href], i) => (
              <motion.a
                key={label}
                href={href}
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * (i + 1) }}
                className="text-sm text-slate-300 hover:text-white"
              >
                {label}
              </motion.a>
            ))}
            <button
              onClick={onJoin}
              className="inline-flex items-center rounded-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400 text-white text-sm font-medium px-4 py-2 shadow-lg shadow-fuchsia-500/20"
            >
              Join Now
            </button>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-200 hover:bg-white/10"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/80 backdrop-blur">
          <div className="px-4 py-3 space-y-2">
            <a href="#amenities" className="block py-2 text-slate-100">Amenities</a>
            <a href="#pricing" className="block py-2 text-slate-100">Pricing</a>
            <a href="#locations" className="block py-2 text-slate-100">Locations</a>
            <button onClick={onJoin} className="inline-flex items-center rounded-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400 text-white text-sm font-medium px-4 py-2">
              Join Now
            </button>
          </div>
        </div>
      )}
      <div className="h-0.5 bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400"></div>
    </header>
  );
}
