import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-12 bg-slate-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-slate-400">© {new Date().getFullYear()} Aurora Library. All rights reserved.</p>
          <div className="text-sm text-slate-400">hello@auroralibrary.example</div>
        </motion.div>
      </div>
    </footer>
  );
}
