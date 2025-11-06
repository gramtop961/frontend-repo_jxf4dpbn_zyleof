import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Library, Menu } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${
      scrolled ? "backdrop-blur bg-white/70 shadow" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <motion.a
            href="#"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <Library className="w-6 h-6 text-indigo-600" />
            <span className="font-semibold text-lg tracking-tight">Aurora Library</span>
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
                transition={{ delay: 0.1 * (i + 1) }}
                className="text-sm text-gray-700 hover:text-gray-900"
              >
                {label}
              </motion.a>
            ))}
            <a
              href="#pricing"
              className="inline-flex items-center rounded-full bg-indigo-600 text-white text-sm font-medium px-4 py-2 hover:bg-indigo-700 shadow"
            >
              Join Now
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="px-4 py-3 space-y-2">
            <a href="#amenities" className="block py-2">Amenities</a>
            <a href="#pricing" className="block py-2">Pricing</a>
            <a href="#locations" className="block py-2">Locations</a>
            <a href="#pricing" className="inline-flex items-center rounded-full bg-indigo-600 text-white text-sm font-medium px-4 py-2 hover:bg-indigo-700">
              Join Now
            </a>
          </div>
        </div>
      )}
      <div className="h-0.5 bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-emerald-400"></div>
    </header>
  );
}
