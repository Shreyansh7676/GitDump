import { motion } from 'framer-motion';
import { Upload, Search, Handshake, Rocket } from 'lucide-react';

const steps = [
  { step: '01', icon: Upload, title: 'List Your Project', description: 'Connect your GitHub repo, set your price or open for funding, and publish in under 2 minutes.' },
  { step: '02', icon: Search, title: 'Get Discovered', description: 'Our AI matching engine connects your project with the right buyers, investors, and technical co-founders.' },
  { step: '03', icon: Handshake, title: 'Close the Deal', description: 'Negotiate terms, transfer code, and receive payment — all within the platform with escrow protection.' },
  { step: '04', icon: Rocket, title: 'Scale to Millions', description: 'Access post-acquisition support: legal, infra, hiring, and our network of 500+ funded founders.' },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-28 lg:py-36 border-y border-neutral-800/50">
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-semibold text-brand uppercase tracking-widest">Process</span>
          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-white tracking-tight">
            From repo to revenue<br /><span className="text-neutral-500">in four steps.</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div key={s.step} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="relative group">
              {i < steps.length - 1 && <div className="hidden lg:block absolute top-10 left-full w-full h-px bg-neutral-800 z-0" />}
              <div className="relative p-8 rounded-2xl border border-neutral-800/50 bg-surface-1 hover:border-neutral-700 transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-surface-3 text-brand group-hover:bg-brand/10 transition-colors duration-300">
                    <s.icon className="w-5 h-5" />
                  </div>
                  <span className="text-4xl font-black text-neutral-800 select-none">{s.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{s.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{s.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
