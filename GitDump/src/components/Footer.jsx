import { Terminal } from 'lucide-react';

const links = {
  Product: ['Features', 'Pricing', 'Marketplace', 'API', 'Changelog'],
  Company: ['About', 'Blog', 'Careers', 'Press', 'Contact'],
  Resources: ['Documentation', 'Guides', 'Community', 'Status', 'Support'],
  Legal: ['Privacy', 'Terms', 'Security', 'Cookies'],
};

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800/50 bg-surface-0">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-brand flex items-center justify-center rounded-lg">
                <Terminal className="w-4.5 h-4.5 text-surface-0" strokeWidth={2.5} />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">GitDump</span>
            </a>
            <p className="text-sm text-neutral-500 max-w-xs leading-relaxed mb-6">
              The marketplace where code becomes capital. Buy, sell, and fund developer projects.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="p-2 text-neutral-600 hover:text-white transition-colors" aria-label="GitHub">
                {/* <Github className="w-5 h-5" /> */}
              </a>
              <a href="#" className="p-2 text-neutral-600 hover:text-white transition-colors" aria-label="Twitter">
                {/* <Twitter className="w-5 h-5" /> */}
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-4">{category}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-neutral-500 hover:text-white transition-colors duration-200">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-neutral-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-600">© 2026 GitDump. All rights reserved.</p>
          <p className="text-xs text-neutral-700">Built for developers, by developers.</p>
        </div>
      </div>
    </footer>
  );
}
