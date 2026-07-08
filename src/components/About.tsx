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

const timeline = [
  { year: "2010", title: "Networking", desc: "Mulai karir di dunia networking, handling infrastruktur jaringan skala enterprise" },
  { year: "2010 - 2015", title: "NOC Engineer", desc: "Network Operations Center -- monitoring, maintenance, dan troubleshooting jaringan 24/7" },
  { year: "2016 - Now", title: "Sysadmin", desc: "Linux server administration: firewall, web server, DNS, virtualisasi, container, reverse proxy, VPN, WireGuard, monitoring, storage, dan automation" },
];

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="about" ref={ref} className="relative py-32 px-6 overflow-hidden">
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
          Infrastructure engineer with <span className="text-gradient-accent">15+ years</span> experience
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div variants={fadeUp} className="space-y-4 text-white/60 leading-relaxed">
            <p>
              Berpengalaman dalam networking, administrasi server Linux, dan infrastruktur IT sejak 2010.
              Memulai karir sebagai NOC engineer hingga 2015, kemudian beralih menjadi sysadmin hingga sekarang.
            </p>
            <p>
              Menguasai setup dan maintenance server Linux di berbagai environment -- dari firewall, web server,
              DNS, virtualisasi (Proxmox), container (Docker), reverse proxy, VPN/WireGuard, monitoring,
              storage (S3, NAS), hingga server chat.
            </p>
            <p>
              Juga berpengalaman dalam sistem CCTV dan network infrastructure menggunakan Mikrotik.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="space-y-4">
            {timeline.map((t, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="w-16 shrink-0">
                  <p className="text-emerald-400 font-mono text-xs font-bold">{t.year}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">{t.title}</p>
                  <p className="text-xs text-white/40 mt-1">{t.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
