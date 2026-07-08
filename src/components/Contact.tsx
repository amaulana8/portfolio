import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <motion.p variants={item} className="text-emerald-400 font-mono text-sm tracking-widest uppercase mb-4">
          Contact
        </motion.p>
        <motion.h2 variants={item} className="text-4xl md:text-5xl font-bold mb-6">
          Let's <span className="text-gradient-accent">connect</span>
        </motion.h2>
        <motion.p variants={item} className="text-white/50 mb-12 max-w-lg mx-auto">
          Have a project in mind? Let's build something great together.
        </motion.p>

        <motion.div variants={item} className="flex items-center justify-center gap-6 mb-16">
          <a href="mailto:hello@example.com" className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-emerald-500/50 transition-all group">
            <Mail className="w-5 h-5 text-white/40 group-hover:text-emerald-400" />
          </a>
          <a href="#" className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-emerald-500/50 transition-all group">
            <Github className="w-5 h-5 text-white/40 group-hover:text-emerald-400" />
          </a>
          <a href="#" className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-emerald-500/50 transition-all group">
            <Linkedin className="w-5 h-5 text-white/40 group-hover:text-emerald-400" />
          </a>
          <a href="#" className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-emerald-500/50 transition-all group">
            <Twitter className="w-5 h-5 text-white/40 group-hover:text-emerald-400" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
