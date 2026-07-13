export default function Footer() {
  return (
    <footer className="relative py-8 px-6 border-t border-white/[0.04]">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
        <p>&copy; {new Date().getFullYear()} amaulana8. All rights reserved.</p>
        <p className="font-mono text-xs">Built with React + TypeScript + Framer Motion</p>
      </div>
    </footer>
  );
}
