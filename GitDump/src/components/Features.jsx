import { motion } from 'framer-motion';
import {
  Shield,
  Zap,
  Code2,
  DollarSign,
  Users,
  Lock,
  BarChart3,
  Globe,
} from 'lucide-react';

const features = [
  {
    icon: Code2,
    title: 'List Any Project',
    description:
      'From MVPs to production-ready SaaS. Upload repos, demos, or just the idea — we handle the rest.',
  },
  {
    icon: DollarSign,
    title: 'Instant Valuations',
    description:
      'AI-powered project valuation based on code quality, market fit, traction metrics, and tech stack analysis.',
  },
  {
    icon: Shield,
    title: 'Escrow Protection',
    description:
      'Every transaction is protected. Funds are held in escrow until both parties confirm delivery.',
  },
  {
    icon: Users,
    title: 'Investor Network',
    description:
      'Connect directly with 500+ verified VCs and angel investors actively looking for technical founders.',
  },
  {
    icon: Zap,
    title: 'One-Click Deploy',
    description:
      'Buyers get instant access to live deployments, CI/CD pipelines, and infrastructure documentation.',
  },
  {
    icon: Lock,
    title: 'IP Protection',
    description:
      'Automated NDA generation, license transfers, and intellectual property verification on every deal.',
  },
  {
    icon: BarChart3,
    title: 'Revenue Analytics',
    description:
      'Track MRR, user growth, and churn rate with integrated analytics dashboards for listed projects.',
  },
  {
    icon: Globe,
    title: 'Global Marketplace',
    description:
      'Developers from 140+ countries. Multi-currency support with instant payouts in 24 currencies.',
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Features() {
  return (
    <section id="features" className="relative py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="text-xs font-semibold text-brand uppercase tracking-widest">
            Platform
          </span>
          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Everything you need to
            <br />
            <span className="text-neutral-500">ship, sell, and scale.</span>
          </h2>
          <p className="mt-6 text-neutral-400 text-lg leading-relaxed">
            Built by developers, for developers. Every feature designed to
            remove friction from turning code into capital.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={item}
              className="group p-6 rounded-2xl border border-neutral-800/50 bg-surface-1 hover:border-neutral-700 hover:bg-surface-2 transition-all duration-300"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-surface-3 text-brand mb-5 group-hover:bg-brand/10 transition-colors duration-300">
                <feature.icon className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-neutral-500 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
