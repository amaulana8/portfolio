import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="about" ref={ref} className="relative py-32 px-6 overflow-hidden">
      {/* Parallax background element */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-gradient-to-b from-black via-emerald-950/10 to-black pointer-events-none"
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 max-w-5xl mx-auto"
      >
        <motion.p variants={fadeUp} className="text-emerald-400 font-mono text-sm tracking-widest uppercase mb-4">
          About Me
        </motion.p>

        <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold mb-8">
          Crafting code with <span className="text-gradient-accent">purpose</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div variants={fadeUp} className="space-y-4 text-white/60 leading-relaxed">
            <p>
              A passionate developer with expertise in building modern web applications
              using cutting-edge technologies. I focus on creating performant, accessible,
              and visually compelling digital experiences.
            </p>
            <p>
              With a keen eye for design and a deep understanding of software architecture,
              I bring ideas to life through clean code and thoughtful interactions.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="space-y-4">
            <div className="flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/10">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-sm">4+</div>
              <div>
                <p className="text-sm font-medium">Years Experience</p>
                <p className="text-xs text-white/40">Full-stack development</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/10">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-sm">20+</div>
              <div>
                <p className="text-sm font-medium">Projects Completed</p>
                <p className="text-xs text-white/40">Web apps, APIs, systems</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
