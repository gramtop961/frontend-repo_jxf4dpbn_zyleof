import { useEffect } from "react";
import { motion } from "framer-motion";

const stats = [
  { label: "Libraries", value: 12 },
  { label: "Active Subscriptions", value: 2400 },
  { label: "Years of Service", value: 8 },
];

export default function Numbers() {
  useEffect(() => {
    const els = document.querySelectorAll("[data-count]");
    els.forEach((el) => {
      const target = Number(el.getAttribute("data-count"));
      let start = 0;
      const duration = 1200;
      const startTime = performance.now();

      const step = (now) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(start + (target - start) * eased);
        el.textContent = current.toLocaleString();
        if (progress < 1) requestAnimationFrame(step);
      };

      requestAnimationFrame(step);
    });
  }, []);

  return (
    <section className="py-14 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: 0.05 * i, duration: 0.5 }}
              className="bg-white rounded-2xl shadow-sm p-8 text-center"
            >
              <div className="text-4xl font-semibold text-gray-900" data-count={s.value}>0</div>
              <div className="mt-2 text-sm text-gray-600">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
