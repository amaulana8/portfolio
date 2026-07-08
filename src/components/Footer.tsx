export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-white/30 font-mono">
          &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
        </p>
        <p className="text-sm text-white/20 font-mono">
          Built with React + Framer Motion + Tailwind
        </p>
      </div>
    </footer>
  );
}
