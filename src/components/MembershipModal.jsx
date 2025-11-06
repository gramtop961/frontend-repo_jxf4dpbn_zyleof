import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function MembershipModal({ open, onClose }) {
  const dialogRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", plan: "Monthly", agree: false });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        dialogRef.current?.querySelector("input[name='name']")?.focus();
      }, 50);
    }
  }, [open]);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your name";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.plan) e.plan = "Select a plan";
    if (!form.agree) e.agree = "You must accept the terms";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (ev) => {
    ev.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setTimeout(() => {
        onClose();
        setSubmitted(false);
        setForm({ name: "", email: "", plan: "Monthly", agree: false });
      }, 1200);
    }
  };

  const backdropVariants = { hidden: { opacity: 0 }, visible: { opacity: 1 } };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100]"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={backdropVariants}
        >
          <div className="absolute inset-0 bg-black/50" onClick={onClose} />
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <motion.div
              ref={dialogRef}
              role="dialog"
              aria-modal="true"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              className="w-full max-w-md rounded-2xl bg-white shadow-xl ring-1 ring-black/5"
            >
              <div className="flex items-center justify-between px-6 py-4 border-b">
                <h3 className="text-lg font-semibold text-gray-900">Start your membership</h3>
                <button onClick={onClose} aria-label="Close" className="p-2 rounded-md hover:bg-gray-100">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={onSubmit} className="px-6 py-5 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700" htmlFor="name">Full name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={`mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="Jane Doe"
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={`mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="jane@example.com"
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700" htmlFor="plan">Plan</label>
                  <select
                    id="plan"
                    name="plan"
                    value={form.plan}
                    onChange={(e) => setForm({ ...form, plan: e.target.value })}
                    className={`mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${errors.plan ? 'border-red-500' : 'border-gray-300'}`}
                  >
                    <option value="Day Pass">Day Pass - $5</option>
                    <option value="Monthly">Monthly - $29</option>
                    <option value="Quarterly">Quarterly - $79</option>
                  </select>
                  {errors.plan && <p className="mt-1 text-xs text-red-600">{errors.plan}</p>}
                </div>
                <div className="flex items-start gap-2">
                  <input
                    id="agree"
                    type="checkbox"
                    checked={form.agree}
                    onChange={(e) => setForm({ ...form, agree: e.target.checked })}
                    className={`mt-1 h-4 w-4 rounded border ${errors.agree ? 'border-red-500' : 'border-gray-300'} text-indigo-600 focus:ring-indigo-500`}
                  />
                  <label htmlFor="agree" className="text-sm text-gray-700">I agree to the Terms and Privacy Policy.</label>
                </div>
                {errors.agree && <p className="-mt-2 text-xs text-red-600">{errors.agree}</p>}

                <motion.button
                  type="submit"
                  whileTap={{ scale: 0.98 }}
                  className="w-full rounded-full bg-indigo-600 text-white font-medium px-4 py-2 hover:bg-indigo-700"
                >
                  {submitted ? "Submitting..." : "Continue"}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
