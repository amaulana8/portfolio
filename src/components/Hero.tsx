import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function useTypewriter(text: string, speed = 40, delay = 1500) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);
  useEffect(() => { const t = setTimeout(() => setStarted(true), delay); return () => clearTimeout(t); }, [delay]);
  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => { setDisplayed(text.slice(0, i + 1)); i++; if (i >= text.length) clearInterval(interval); }, speed);
    return () => clearInterval(interval);
  }, [started, text, speed]);
  return displayed;
}

function SplitText({ text, className = "" }: { text: string; className?: string }) {
  return (
    <span className={className}>
      {text.split("").map((char, i) => (
        <motion.span key={i} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.04, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="inline-block"
        >{char === " " ? "\u00A0" : char}</motion.span>
      ))}
    </span>
  );
}

export default function Hero() {
  const subtitle = useTypewriter("15+ years in networking, infrastructure & system administration.", 30, 2000);
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] via-black to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]" />
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }} className="section-label">
          Infrastructure & Network Engineer
        </motion.p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
          <SplitText text="amaulana8" className="text-gradient-mono" /><br />
          <SplitText text="Sysadmin & Network Engineer" className="text-gradient" />
        </h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: subtitle ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed min-h-[1.5em]">
          {subtitle}
          <motion.span animate={{ opacity: [1, 0] }} transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
            className="inline-block ml-0.5 w-[2px] h-[1em] bg-gray-400 align-middle" />
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 3.5 }} className="mt-10 flex items-center justify-center gap-4">
          <a href="#services" className="px-8 py-3 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-200 transition-all duration-300">View Services</a>
          <a href="#contact" className="px-8 py-3 border border-white/10 rounded-full text-sm font-medium text-gray-300 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300">Contact Me</a>
        </motion.div>
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{ delay: 4, y: { duration: 1.5, repeat: Infinity }}}
        className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
}
