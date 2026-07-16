import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Mail, Globe, Twitter } from "lucide-react";

function MagneticButton({ children, href }: { children: React.ReactNode; href: string }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0); const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15 });
  const springY = useSpring(y, { stiffness: 200, damping: 15 });
  const handleMouse = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect(); if (!rect) return;
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    const strength = Math.min(Math.sqrt(dx*dx+dy*dy) / 100, 1);
    x.set(dx * 0.3 * strength); y.set(dy * 0.3 * strength);
  };
  const handleLeave = () => { x.set(0); y.set(0); };
  return (
    <motion.a ref={ref} href={href} target="_blank" rel="noopener noreferrer"
      onMouseMove={handleMouse} onMouseLeave={handleLeave}
      style={{ x: springX, y: springY }}
      className={
        "p-4 rounded-full card-border block " +
        "hover:border-white/20 hover:bg-white/[0.06] " +
        "hover:scale-105 max-md:hover:scale-100 " +
        "transition-[border-color,background-color,transform] duration-200"
      }>
      {children}
    </motion.a>
  );
}

const item = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } } };

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6">
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} className="max-w-4xl mx-auto text-center">
        <motion.p variants={item} className="section-label">Contact</motion.p>
        <motion.h2 variants={item} className="text-4xl md:text-5xl font-bold mb-6">
          Get in <span className="text-gradient">touch</span>
        </motion.h2>
        <motion.p variants={item} className="text-gray-500 mb-12 max-w-lg mx-auto">Let&apos;s connect. Feel free to reach out.</motion.p>
        <motion.div variants={item} className="flex items-center justify-center gap-6">
          <MagneticButton href="mailto:amaulana297@gmail.com"><Mail className="w-5 h-5 text-gray-400" /></MagneticButton>
          <MagneticButton href="https://x.com/amaulana8"><Twitter className="w-5 h-5 text-gray-400" /></MagneticButton>
          <MagneticButton href="https://writingwolking.wordpress.com"><Globe className="w-5 h-5 text-gray-400" /></MagneticButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
