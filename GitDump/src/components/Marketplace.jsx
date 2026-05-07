import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, GitBranch, ArrowUpRight, TrendingUp } from 'lucide-react';

const projects = [
  { name: 'AI Analytics Engine', tag: 'SaaS', price: '$12,500', stars: '2.4k', growth: '+340%', description: 'Full-stack analytics platform with ML-powered insights, real-time dashboards, and API-first architecture.', tech: ['Python', 'React', 'PostgreSQL'] },
  { name: 'DevOps Pipeline Kit', tag: 'DevTools', price: '$8,200', stars: '1.8k', growth: '+180%', description: 'Zero-config CI/CD toolkit with Docker orchestration, automated testing, and deployment rollbacks.', tech: ['Go', 'Docker', 'Terraform'] },
  { name: 'Realtime Collab SDK', tag: 'SDK', price: '$24,000', stars: '3.1k', growth: '+520%', description: 'Drop-in real-time collaboration engine with CRDT sync, presence indicators, and conflict resolution.', tech: ['TypeScript', 'WebSocket', 'Redis'] },
  { name: 'Auth Gateway Pro', tag: 'Security', price: '$15,800', stars: '2.9k', growth: '+290%', description: 'Enterprise-grade authentication gateway with SSO, MFA, and role-based access control out of the box.', tech: ['Rust', 'OAuth2', 'gRPC'] },
  { name: 'Headless CMS Core', tag: 'CMS', price: '$19,500', stars: '4.2k', growth: '+410%', description: 'API-first headless CMS with visual editor, webhook integrations, and multi-tenant architecture.', tech: ['Node.js', 'GraphQL', 'MongoDB'] },
  { name: 'FinTech Ledger API', tag: 'FinTech', price: '$32,000', stars: '1.5k', growth: '+680%', description: 'Double-entry accounting API with multi-currency support, audit trails, and regulatory compliance.', tech: ['Java', 'Kafka', 'PostgreSQL'] },
];

export default function Marketplace() {
  return (
    <section id="marketplace" className="relative py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-semibold text-brand uppercase tracking-widest">Marketplace</span>
          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Trending right now.
          </h2>
          <p className="mt-6 text-neutral-400 text-lg">Projects gaining traction from developers and investors worldwide.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <motion.div key={project.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group p-6 rounded-2xl border border-neutral-800/50 bg-surface-1 hover:border-neutral-700 hover:bg-surface-2 transition-all duration-300 cursor-pointer">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  <GitBranch className="w-4 h-4 text-brand" />
                  <span className="text-xs font-medium px-2 py-0.5 bg-surface-3 text-neutral-400 rounded">{project.tag}</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-neutral-600 group-hover:text-white transition-colors duration-200" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-brand transition-colors duration-200">{project.name}</h3>
              <p className="text-sm text-neutral-500 leading-relaxed mb-5">{project.description}</p>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 bg-surface-3 text-neutral-500 rounded-md">{t}</span>
                ))}
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-neutral-800/50">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-yellow-500" />
                    <span className="text-xs text-neutral-400">{project.stars}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5 text-brand" />
                    <span className="text-xs text-brand">{project.growth}</span>
                  </div>
                </div>
                <span className="text-sm font-semibold text-white">{project.price}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-12">
          <Link to="/products" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-neutral-300 border border-neutral-700 hover:border-neutral-500 hover:text-white rounded-xl transition-all duration-200">
            Browse All Projects
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
