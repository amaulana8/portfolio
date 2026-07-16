import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative py-8 px-6 border-t border-white/[0.04]">
      <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }} viewport={{ once: true }}
        className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }} viewport={{ once: true }}>
          &copy; {new Date().getFullYear()} amaulana8. All rights reserved.</motion.p>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }} viewport={{ once: true }}
          className="font-mono text-xs">Built with React + TypeScript + Framer Motion</motion.p>
      </motion.div>
    </footer>
  );
}
