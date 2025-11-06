import { motion } from "framer-motion";

const tiers = [
  {
    name: "Day Pass",
    price: "$5",
    perks: ["All amenities", "10am – 8pm", "1 device Wi‑Fi"],
    featured: false,
  },
  {
    name: "Monthly",
    price: "$29",
    perks: ["24/7 access", "Reserved desk", "Unlimited Wi‑Fi"],
    featured: true,
  },
  {
    name: "Quarterly",
    price: "$79",
    perks: ["Priority seating", "Locker", "Guest passes"],
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-semibold text-gray-900"
        >
          Pricing
        </motion.h2>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: 0.05 * i }}
              className={`rounded-2xl p-6 border bg-white ${
                t.featured ? "ring-2 ring-indigo-600 shadow-md" : ""
              }`}
            >
              <div className="flex items-baseline justify-between">
                <div className="text-lg font-medium text-gray-900">{t.name}</div>
                <div className="text-2xl font-semibold text-indigo-600">{t.price}</div>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                {t.perks.map((p) => (
                  <li key={p}>• {p}</li>
                ))}
              </ul>
              <a
                href="#"
                className="mt-6 inline-flex w-full justify-center rounded-full bg-indigo-600 text-white text-sm font-medium px-4 py-2 hover:bg-indigo-700"
              >
                Choose {t.name}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
