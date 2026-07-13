import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const timeline = [
  { year: "2010", title: "Networking", desc: "Mulai karir di dunia networking, handling infrastruktur jaringan skala enterprise" },
  { year: "2010 - 2015", title: "NOC Engineer", desc: "Network Operations Center: monitoring, maintenance, dan troubleshooting jaringan 24/7" },
  { year: "2016 - Now", title: "Sysadmin", desc: "Linux server administration: firewall, web server, DNS, virtualisasi, container, reverse proxy, VPN, WireGuard, monitoring, storage, dan automation" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section id="about" ref={ref} className="relative py-32 px-6 overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 bg-gradient-to-b from-black via-white/[0.01] to-black pointer-events-none" />
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} className="relative z-10 max-w-5xl mx-auto">
        <motion.p variants={fadeUp} className="section-label">About Me</motion.p>
        <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold mb-8">
          Infrastructure engineer with <span className="text-gradient">15+ years</span> experience
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div variants={fadeUp} className="space-y-4 text-gray-400 leading-relaxed">
            <p>Berpengalaman dalam networking, administrasi server Linux, dan infrastruktur IT sejak 2010. Memulai karir sebagai NOC engineer hingga 2015, kemudian beralih menjadi sysadmin hingga sekarang.</p>
            <p>Menguasai setup dan maintenance server Linux: firewall, web server, DNS, virtualisasi (Proxmox), container (Docker), reverse proxy, VPN/WireGuard, monitoring, storage (S3, NAS), hingga server chat.</p>
            <p>Juga berpengalaman dalam sistem CCTV dan network infrastructure menggunakan Mikrotik.</p>
          </motion.div>
          <motion.div variants={fadeUp} className="space-y-3">
            {timeline.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }} viewport={{ once: true }}
                className="flex items-start gap-4 p-4 rounded-lg card-border card-hover">
                <div className="relative flex flex-col items-center">
                  <div className="w-2 h-2 rounded-full bg-white/30 mt-1.5" />
                  {i < timeline.length - 1 && <div className="w-px h-full bg-white/[0.06] mt-1" />}
                </div>
                <div className="flex-1">
                  <p className="text-xs font-mono text-gray-500 mb-1">{t.year}</p>
                  <p className="text-sm font-medium text-white/90">{t.title}</p>
                  <p className="text-xs text-gray-500 mt-1">{t.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
