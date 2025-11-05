import Spline from '@splinetool/react-spline';
import { Rocket, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-sm text-white/80">
            <Sparkles className="h-4 w-4 text-cyan-300" /> Crafting delightful software
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight">
            Muhammad Ihsanuddienullah
          </h1>
          <p className="mt-2 text-lg sm:text-xl text-white/80">
            Software Engineer — building modern, interactive experiences with React, TypeScript, and scalable cloud backends.
          </p>
          <p className="mt-4 text-white/80 max-w-xl">
            I love blending performance, clean architecture, and playful interactions to ship products people enjoy using.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#projects" className="inline-flex items-center justify-center gap-2 rounded-md bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-5 py-3 transition-colors">
              <Rocket className="h-5 w-5" /> View Projects
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-md border border-white/20 px-5 py-3 text-white hover:bg-white/10 transition-colors">
              Get in touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
