import { motion } from 'framer-motion';
import { ArrowRight, Play, Star, GitBranch, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
const stats = [
  { value: '12,400+', label: 'Projects Listed' },
  { value: '$84M+', label: 'Total Funded' },
  { value: '3,200+', label: 'Developers' },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 grid-pattern opacity-40" />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 border border-neutral-800 rounded-full bg-surface-1"
          >
            <span className="w-2 h-2 bg-brand rounded-full animate-pulse" />
            <span className="text-xs font-medium text-neutral-400 tracking-wide uppercase">
              Now in Public Beta
            </span>
            <ArrowRight className="w-3 h-3 text-neutral-500" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-8xl font-extrabold tracking-tight text-white leading-[0.95]"
          >
            Where code
            <br />
            <span className="text-neutral-500">becomes</span>{' '}
            <span className="text-brand">capital.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 text-lg lg:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed"
          >
            The marketplace where developers buy, sell, and fund the next
            generation of startups. Turn your side project into a
            million-dollar company.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to='/sell'
              className="group flex items-center gap-2 px-8 py-4 text-sm font-semibold text-surface-0 bg-white hover:bg-neutral-200 rounded-xl transition-all duration-200"
            >
              Start Selling
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>

          </motion.div>


          {/* Terminal preview */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-20 max-w-3xl mx-auto"
          >
            <div className="rounded-2xl border border-neutral-800 bg-surface-1 overflow-hidden shadow-2xl shadow-black/40">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-surface-2 border-b border-neutral-800">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-neutral-700" />
                  <div className="w-3 h-3 rounded-full bg-neutral-700" />
                  <div className="w-3 h-3 rounded-full bg-neutral-700" />
                </div>
                <span className="ml-2 text-xs text-neutral-500 font-mono">
                  ~/gitdump
                </span>
              </div>
              {/* Terminal body */}
              <div className="p-6 text-left font-mono text-sm space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-brand">$</span>
                  <span className="text-neutral-300">
                    gitdump list --category saas --sort trending
                  </span>
                </div>
                <div className="text-neutral-500 text-xs mt-4 mb-2">
                  Found 847 projects matching your criteria
                </div>
                <div className="space-y-2">
                  {[
                    { name: 'ai-analytics-engine', stars: '2.4k', price: '$12,500', tag: 'SaaS', status: 'Funded' },
                    { name: 'devops-pipeline-kit', stars: '1.8k', price: '$8,200', tag: 'DevTools', status: 'Active' },
                    { name: 'realtime-collab-sdk', stars: '3.1k', price: '$24,000', tag: 'SDK', status: 'Funded' },
                  ].map((project) => (
                    <div
                      key={project.name}
                      className="flex items-center justify-between py-2 px-3 rounded-lg bg-surface-2/50 border border-neutral-800/50"
                    >
                      <div className="flex items-center gap-3">
                        <GitBranch className="w-3.5 h-3.5 text-brand" />
                        <span className="text-neutral-200 text-xs">
                          {project.name}
                        </span>
                        <span className="text-xs px-2 py-0.5 bg-surface-3 text-neutral-500 rounded">
                          {project.tag}
                        </span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 text-yellow-500" />
                          <span className="text-xs text-neutral-400">
                            {project.stars}
                          </span>
                        </div>
                        <span className="text-xs font-medium text-brand">
                          {project.price}
                        </span>
                        <span className={`text-xs px-2 py-0.5 rounded ${project.status === 'Funded'
                          ? 'bg-brand/10 text-brand'
                          : 'bg-neutral-800 text-neutral-400'
                          }`}>
                          {project.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2 pt-2">
                  <span className="text-brand">$</span>
                  <span className="text-neutral-600 animate-pulse">▊</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
