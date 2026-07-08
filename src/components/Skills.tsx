import { motion } from "framer-motion";

const categories = [
  {
    title: "Infrastructure",
    skills: ["Linux Server (Debian/Ubuntu)", "Firewall (iptables/nftables)", "DNS (Bind/Technitium)", "Virtualisasi (Proxmox)", "Container (Docker)", "Reverse Proxy (Caddy/Nginx)", "VPN & WireGuard", "Monitoring (Grafana/Prometheus/Zabbix)"],
  },
  {
    title: "Storage & Services",
    skills: ["Object Storage (S3/MinIO)", "NAS (TrueNAS/OpenMediaVault)", "File Sharing (Nextcloud)", "Chat Server (Matrix/Simplex)", "Database (PostgreSQL/MySQL)", "Web Server (Caddy/Nginx/Apache)"],
  },
  {
    title: "Networking & Security",
    skills: ["MikroTik RouterOS", "Routing & Bridging", "VLAN & QoS", "CCTV Systems", "CrowdSec / Fail2Ban", "SSL/TLS Certificates"],
  },
  {
    title: "Tools & Automation",
    skills: ["Git / GitHub", "CI/CD (GitHub Actions)", "Ansible", "Bash Scripting", "Docker Compose", "n8n (Automation)"],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-emerald-950/10" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 max-w-5xl mx-auto"
      >
        <motion.p variants={item} className="text-emerald-400 font-mono text-sm tracking-widest uppercase mb-4">
          Skills & Expertise
        </motion.p>
        <motion.h2 variants={item} className="text-4xl md:text-5xl font-bold mb-4">
          What I <span className="text-gradient-accent">do</span>
        </motion.h2>
        <motion.p variants={item} className="text-white/40 mb-16 max-w-xl">
          Infrastructure, networking, system administration, and automation.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              variants={item}
              className="p-6 rounded-xl bg-white/[0.03] border border-white/10"
            >
              <h3 className="text-emerald-400 font-mono text-sm tracking-wider mb-4">{cat.title}</h3>
              <div className="space-y-2">
                {cat.skills.map((s) => (
                  <div key={s} className="flex items-center gap-2 text-sm text-white/60">
                    <div className="w-1 h-1 rounded-full bg-emerald-500/60" />
                    {s}
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
