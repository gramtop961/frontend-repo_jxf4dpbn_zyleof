import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const branches = [
  {
    name: "Downtown",
    address: "12 Aurora St, Central District",
  },
  {
    name: "Riverside",
    address: "88 Willow Ave, River Park",
  },
  {
    name: "Uptown",
    address: "301 Summit Rd, North Hills",
  },
];

export default function Locations() {
  return (
    <section id="locations" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-semibold text-white"
        >
          Our Locations
        </motion.h2>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {branches.map((b, i) => (
            <motion.div
              key={b.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: 0.06 * i, ease: "easeOut" }}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6"
            >
              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-fuchsia-300 shrink-0" />
                <div>
                  <div className="font-medium text-slate-100">{b.name}</div>
                  <div className="text-sm text-slate-300 mt-1">{b.address}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
