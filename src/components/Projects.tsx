import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Infrastructure Monitoring",
    desc: "Monitoring stack Grafana + Prometheus + Zabbix untuk memantau server, network, dan layanan secara real-time dengan alerting via Telegram.",
    tags: ["Grafana", "Prometheus", "Zabbix", "Docker"],
    gradient: "from-emerald-500/20 to-cyan-500/10",
  },
  {
    title: "Self-Hosted Cloud Platform",
    desc: "Platform cloud pribadi: Proxmox VE, object storage MinIO (S3-compatible), Nextcloud, Matrix chat, dan automation workflow.",
    tags: ["Proxmox", "MinIO", "Nextcloud", "Docker"],
    gradient: "from-purple-500/20 to-pink-500/10",
  },
  {
    title: "Network Infrastructure",
    desc: "Desain dan implementasi jaringan enterprise: MikroTik routing, VPN/WireGuard, VLAN segmentation, firewall policy, dan QoS.",
    tags: ["MikroTik", "WireGuard", "Firewall", "VLAN"],
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
    <section id="projects" className="relative py-32 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/5 via-black to-black" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 max-w-6xl mx-auto"
      >
        <motion.p variants={cardItem} className="text-emerald-400 font-mono text-sm tracking-widest uppercase mb-4">
          Projects
        </motion.p>
        <motion.h2 variants={cardItem} className="text-4xl md:text-5xl font-bold mb-4">
          What I've <span className="text-gradient-accent">built</span>
        </motion.h2>
        <motion.p variants={cardItem} className="text-white/40 mb-16 max-w-xl">
          Infrastructure projects I've designed, deployed, and maintained.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              variants={cardItem}
              whileHover={{ y: -5 }}
              className="group relative p-6 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all"
            >
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                    <div className="w-5 h-5 rounded-full bg-emerald-400/50" />
                  </div>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="w-4 h-4 text-white/40 hover:text-white cursor-pointer" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 text-[10px] font-mono text-white/40 bg-white/5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
