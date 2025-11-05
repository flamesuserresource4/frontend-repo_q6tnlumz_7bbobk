export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-10 text-white/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <p className="text-sm">Built with React, Vite, Tailwind, and a sprinkle of 3D.</p>
      </div>
    </footer>
  );
}
