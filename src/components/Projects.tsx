import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Terminal, Globe, Box, Container } from "lucide-react";

const services = [
  { icon: Terminal, title: "Linux System Administration",
    desc: "Install dan konfigurasi server dari awal (Ubuntu/Debian/AlmaLinux). Hardening keamanan: firewall, fail2ban, CrowdSec, SSH key-only. Backup, restore, monitoring, troubleshooting, upgrade OS, dan migrasi data.",
    tags: ["Firewall", "Backup", "Monitoring", "Hardening"] },
  { icon: Globe, title: "Networking",
    desc: "Setup VPN server (WireGuard/OpenVPN) untuk akses remote aman. Reverse proxy: Nginx, Caddy, HAProxy dengan SSL otomatis. Manajemen domain, DNS, load balancing, firewall, dan DDoS mitigation.",
    tags: ["WireGuard", "Caddy", "DNS", "Load Balancer"] },
  { icon: Box, title: "Virtualisasi",
    desc: "Setup Proxmox VE untuk manajemen VM dan container. Migrasi VM antar server, optimasi alokasi CPU/RAM/storage, template VM automasi dengan cloud-init.",
    tags: ["Proxmox", "VM", "Cloud-Init", "Migration"] },
  { icon: Container, title: "Container & Deployment",
    desc: "Setup Docker + Docker Compose untuk aplikasi. Manajemen container dengan Portainer, CI/CD dengan GitHub Actions, deployment aplikasi web (Flask, Django, NodeJS, PHP).",
    tags: ["Docker", "Portainer", "CI/CD", "Deploy"] },
];

function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0); const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [5, -5]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-5, 5]), { stiffness: 200, damping: 20 });
  const handleMouse = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect(); if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleLeave = () => { x.set(0); y.set(0); };
  return (
    <motion.div ref={ref} onMouseMove={handleMouse} onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group relative p-6 rounded-xl card-border card-hover cursor-default">
      {children}
    </motion.div>
  );
}

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } } };
const item = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } } };

export default function Projects() {
  return (
    <section id="services" className="relative py-32 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.01] via-black to-black" />
      <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} className="relative z-10 max-w-6xl mx-auto">
        <motion.p variants={item} className="section-label">Services</motion.p>
        <motion.h2 variants={item} className="text-4xl md:text-5xl font-bold mb-4">What I <span className="text-gradient">offer</span></motion.h2>
        <motion.p variants={item} className="text-gray-500 mb-16 max-w-2xl">Saya membantu setup dan maintenance server Linux untuk kebutuhan personal, startup, maupun bisnis. Dari nol sampai production-ready dengan standar keamanan tinggi. Full remote support.</motion.p>
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <TiltCard key={i}>
                <div className="relative z-10" style={{ transformStyle: "preserve-3d" }}>
                  <div className="w-10 h-10 rounded-lg bg-white/[0.06] flex items-center justify-center mb-4"
                    style={{ transform: "translateZ(20px)" }}>
                    <Icon className="w-5 h-5 text-gray-300" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-white/90">{svc.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{svc.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {svc.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 text-[10px] font-mono text-gray-500 bg-white/[0.04] rounded">{tag}</span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
