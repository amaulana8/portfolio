import { motion } from "framer-motion";
import { Terminal, Globe, Box, Container, Shield } from "lucide-react";

const services = [
  {
    icon: Terminal,
    title: "Linux System Administration",
    desc: "Install dan konfigurasi server dari awal (Ubuntu/Debian/AlmaLinux). Hardening keamanan: firewall iptables/nftables, fail2ban, CrowdSec, SSH key-only. Backup dan restore otomatis, monitoring server, troubleshooting, upgrade OS, dan migrasi data.",
    tags: ["Firewall", "Backup", "Monitoring", "Hardening"],
    gradient: "from-emerald-500/20 to-cyan-500/10",
  },
  {
    icon: Globe,
    title: "Networking",
    desc: "Setup VPN server (WireGuard / OpenVPN) untuk akses remote aman. Reverse proxy: Nginx, Caddy, HAProxy dengan SSL otomatis. Manajemen domain, DNS, load balancing, firewall, dan DDoS mitigation.",
    tags: ["WireGuard", "Caddy", "DNS", "Load Balancer"],
    gradient: "from-blue-500/20 to-indigo-500/10",
  },
  {
    icon: Box,
    title: "Virtualisasi",
    desc: "Setup Proxmox VE untuk manajemen VM dan container. Migrasi VM antar server, optimasi alokasi CPU/RAM/storage, template VM automasi dengan cloud-init.",
    tags: ["Proxmox", "VM", "Cloud-Init", "Migration"],
    gradient: "from-purple-500/20 to-pink-500/10",
  },
  {
    icon: Container,
    title: "Container & Deployment",
    desc: "Setup Docker + Docker Compose untuk aplikasi. Manajemen container dengan Portainer, CI/CD dengan GitHub Actions, deployment aplikasi web (Flask, Django, NodeJS, PHP).",
    tags: ["Docker", "Portainer", "CI/CD", "Deploy"],
    gradient: "from-orange-500/20 to-amber-500/10",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.2 } },
};

const cardItem = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function Projects() {
  return (
    <section id="services" className="relative py-32 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/5 via-black to-black" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 max-w-6xl mx-auto"
      >
        <motion.p variants={cardItem} className="text-emerald-400 font-mono text-sm tracking-widest uppercase mb-4">
          Services
        </motion.p>
        <motion.h2 variants={cardItem} className="text-4xl md:text-5xl font-bold mb-4">
          What I <span className="text-gradient-accent">offer</span>
        </motion.h2>
        <motion.p variants={cardItem} className="text-white/40 mb-16 max-w-2xl">
          Saya membantu setup dan maintenance server Linux untuk kebutuhan personal, startup, maupun bisnis. Dari nol sampai production-ready dengan standar keamanan tinggi. Full remote support.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={i}
                variants={cardItem}
                whileHover={{ y: -5 }}
                className="group relative p-6 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all"
              >
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${svc.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-emerald-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{svc.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed mb-4">{svc.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {svc.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 text-[10px] font-mono text-white/40 bg-white/5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
