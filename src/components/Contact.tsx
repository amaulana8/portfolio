import { motion } from "framer-motion";
import { Mail, Globe, Twitter, MessageCircle } from "lucide-react";

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const links = [
  { icon: Mail, label: "Email", href: "mailto:amaulana297@gmail.com", text: "amaulana297@gmail.com" },
  { icon: Globe, label: "WordPress", href: "https://writingwolking.wordpress.com", text: "writingwolking.wordpress.com" },
  { icon: Twitter, label: "Twitter", href: "https://x.com/amaulana8", text: "@amaulana8" },
];

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
          Get in <span className="text-gradient-accent">touch</span>
        </motion.h2>
        <motion.p variants={item} className="text-white/50 mb-12 max-w-lg mx-auto">
          Let's connect. Feel free to reach out.
        </motion.p>

        <motion.div variants={item} className="flex flex-col items-center gap-4 mb-8">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-emerald-500/50 transition-all group w-fit"
            >
              <link.icon className="w-4 h-4 text-white/40 group-hover:text-emerald-400" />
              <span className="text-sm text-white/60 group-hover:text-white">{link.text}</span>
            </a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
