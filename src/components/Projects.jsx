import { Code2, Globe2, Cpu } from 'lucide-react';

const projects = [
  {
    title: 'Realtime Dashboard',
    description: 'A high-performance analytics dashboard with live data, server-side events, and responsive charts.',
    icon: Globe2,
    tags: ['React', 'TypeScript', 'WebSockets'],
    link: '#'
  },
  {
    title: 'Design System',
    description: 'A scalable component library with theming, accessibility, and documentation.',
    icon: Code2,
    tags: ['Storybook', 'Tailwind', 'A11y'],
    link: '#'
  },
  {
    title: 'AI Pair Programmer',
    description: 'CLI + web tool that accelerates development with codegen and refactor workflows.',
    icon: Cpu,
    tags: ['Python', 'FastAPI', 'LLMs'],
    link: '#'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-gradient-to-b from-black via-slate-950 to-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold">Featured Projects</h2>
          <p className="text-white/70 mt-2 max-w-2xl">A selection of work that blends robust engineering with playful, modern UX.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <a key={p.title} href={p.link} className="group rounded-xl border border-white/10 bg-white/5 p-6 hover:border-cyan-400/40 hover:bg-white/10 transition-all">
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-cyan-500/10 text-cyan-300 border border-cyan-400/20">
                <p.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-white/70 text-sm">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/10 border border-white/10 text-white/70">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
