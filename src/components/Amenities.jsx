import { motion } from "framer-motion";
import { Wifi, Coffee, Lamp, Fan, CupSoda, Plug, Chair, BookOpen } from "lucide-react";

const items = [
  { icon: Wifi, label: "High-speed Wi‑Fi" },
  { icon: Coffee, label: "Coffee & Tea" },
  { icon: Lamp, label: "Ample Lighting" },
  { icon: Fan, label: "A/C & Fans" },
  { icon: Plug, label: "Every Seat Has Power" },
  { icon: Chair, label: "Ergonomic Chairs" },
  { icon: CupSoda, label: "Snacks & Water" },
  { icon: BookOpen, label: "Quiet Study Zones" },
];

export default function Amenities() {
  return (
    <section id="amenities" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-semibold text-gray-900"
        >
          Amenities
        </motion.h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <motion.div
                key={it.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: 0.05 * i }}
                className="rounded-2xl border bg-white p-6 hover:shadow-md transition-shadow"
              >
                <Icon className="w-6 h-6 text-indigo-600" />
                <div className="mt-3 font-medium text-gray-900">{it.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
