import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { motion } from 'framer-motion';

function NavLink({ href, children }) {
  return (
    <a
      href={href}
      className="text-sm font-medium text-white/80 hover:text-white transition-colors"
    >
      {children}
    </a>
  );
}

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="text-white font-semibold tracking-tight text-lg">
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">Muhammad</span> Ihsanuddienullah
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <a
              href="#resume"
              className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-1.5 text-sm font-medium text-white hover:bg-white/20 transition-colors"
            >
              <Download className="h-4 w-4" /> Resume
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a aria-label="GitHub" href="#" className="p-2 rounded-md hover:bg-white/10 text-white/80 hover:text-white transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a aria-label="LinkedIn" href="#" className="p-2 rounded-md hover:bg-white/10 text-white/80 hover:text-white transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a aria-label="Email" href="#contact" className="p-2 rounded-md hover:bg-white/10 text-white/80 hover:text-white transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
