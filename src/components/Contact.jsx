import { Send, Mail, Phone } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [status, setStatus] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setStatus('Thanks! I will get back to you soon.');
  }

  return (
    <section id="contact" className="relative py-24 bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 items-start">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold">Let's build something great</h2>
            <p className="mt-3 text-white/70 max-w-xl">Open to full-time roles and interesting freelance projects. Drop a note and I'll reply within a day.</p>
            <div className="mt-6 space-y-3 text-white/80">
              <div className="flex items-center gap-3"><Mail className="h-5 w-5 text-cyan-300" /> hi@muhammad.dev</div>
              <div className="flex items-center gap-3"><Phone className="h-5 w-5 text-cyan-300" /> +62 812-xxx-xxxx</div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-xl border border-white/10 bg-white/5 p-6"
          >
            <div className="grid gap-4">
              <div>
                <label className="text-sm text-white/70">Name</label>
                <input required className="mt-1 w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-400/50" />
              </div>
              <div>
                <label className="text-sm text-white/70">Email</label>
                <input type="email" required className="mt-1 w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-400/50" />
              </div>
              <div>
                <label className="text-sm text-white/70">Message</label>
                <textarea rows={5} required className="mt-1 w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-400/50" />
              </div>
              <button type="submit" className="inline-flex items-center gap-2 justify-center rounded-md bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-5 py-3 transition-colors">
                <Send className="h-4 w-4" /> Send Message
              </button>
              {status && <p className="text-sm text-green-400">{status}</p>}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
