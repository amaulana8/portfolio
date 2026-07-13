import { motion } from "framer-motion";

const categories = [
  { title: "Infrastructure", skills: [
    { name: "Linux Server (Debian/Ubuntu)", level: 95 }, { name: "Firewall (iptables/nftables)", level: 90 },
    { name: "Virtualisasi (Proxmox)", level: 85 }, { name: "Container (Docker)", level: 88 },
    { name: "Reverse Proxy (Caddy/Nginx)", level: 92 }, { name: "VPN & WireGuard", level: 90 },
    { name: "Monitoring (Grafana/Prometheus)", level: 82 }, { name: "DNS (Bind/Technitium)", level: 85 },
  ]},
  { title: "Storage & Services", skills: [
    { name: "Object Storage (S3/MinIO)", level: 80 }, { name: "NAS (TrueNAS/OMV)", level: 78 },
    { name: "File Sharing (Nextcloud)", level: 75 }, { name: "Database (PostgreSQL/MySQL)", level: 82 },
    { name: "Web Server (Caddy/Nginx)", level: 90 }, { name: "Caching (Redis/Memcached)", level: 72 },
  ]},
  { title: "Networking & Security", skills: [
    { name: "MikroTik RouterOS", level: 85 }, { name: "Routing & Bridging", level: 80 },
    { name: "VLAN & QoS", level: 75 }, { name: "CCTV Systems", level: 78 },
    { name: "CrowdSec / Fail2Ban", level: 85 }, { name: "SSL/TLS Certificates", level: 90 },
  ]},
  { title: "Tools & Automation", skills: [
    { name: "Git / GitHub", level: 90 }, { name: "CI/CD (GitHub Actions)", level: 80 },
    { name: "Ansible", level: 70 }, { name: "Bash Scripting", level: 92 },
    { name: "Docker Compose", level: 88 }, { name: "n8n (Automation)", level: 72 },
  ]},
];

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.08 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } } };

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-white/[0.01]" />
      <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} className="relative z-10 max-w-5xl mx-auto">
        <motion.p variants={item} className="section-label">Skills & Expertise</motion.p>
        <motion.h2 variants={item} className="text-4xl md:text-5xl font-bold mb-4">What I <span className="text-gradient">do</span></motion.h2>
        <motion.p variants={item} className="text-gray-500 mb-16 max-w-xl">Infrastructure, networking, system administration, and automation.</motion.p>
        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((cat, i) => (
            <motion.div key={i} variants={item} className="p-6 rounded-xl card-border card-hover">
              <h3 className="text-gray-300 font-mono text-sm tracking-wider mb-6">{cat.title}</h3>
              <div className="space-y-4">
                {cat.skills.map((s) => (
                  <div key={s.name} className="space-y-1.5">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-400">{s.name}</span>
                      <span className="text-gray-600 font-mono">{s.level}%</span>
                    </div>
                    <div className="h-1 rounded-full bg-white/[0.06] overflow-hidden">
                      <motion.div initial={{ width: 0 }} whileInView={{ width: `${s.level}%` }}
                        transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }} viewport={{ once: true }}
                        className="h-full rounded-full bg-white/20" />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
