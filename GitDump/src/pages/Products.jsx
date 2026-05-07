import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, GitBranch, ArrowUpRight, TrendingUp, Search, SlidersHorizontal, ChevronDown } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { projectsData } from '../data/projects';

const categories = ['All', 'SaaS', 'DevTools', 'SDK', 'Security'];
const sortOptions = ['Trending', 'Newest', 'Price: Low to High', 'Price: High to Low', 'Most Stars'];

export default function Products() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortBy, setSortBy] = useState('Trending');
  const [showSortDropdown, setShowSortDropdown] = useState(false);

  const filteredProjects = projectsData.filter((project) => {
    const matchesSearch =
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tech.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = activeCategory === 'All' || project.tag === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-surface-0">
      <Navbar />

      {/* Hero header */}
      <section className="relative pt-32 pb-12 lg:pt-40 lg:pb-16 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-brand/5 rounded-full blur-3xl" />
        <div className="absolute top-40 right-1/4 w-72 h-72 bg-brand/3 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-brand uppercase tracking-widest mb-4">
              <span className="w-2 h-2 bg-brand rounded-full animate-pulse" />
              Browse Projects
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Discover projects worth
              <span className="text-gradient-brand"> investing in.</span>
            </h1>
            <p className="mt-5 text-neutral-400 text-lg max-w-xl mx-auto">
              Explore developer-built projects gaining real traction — find your next acquisition or collaboration.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters & search */}
      <section className="relative pb-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between"
          >
            {/* Search bar */}
            <div className="relative w-full lg:max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-600" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects, tech stacks..."
                className="w-full pl-11 pr-4 py-3 text-sm text-white bg-surface-1 border border-neutral-800 hover:border-neutral-700 focus:border-brand focus:ring-1 focus:ring-brand/20 rounded-xl outline-none transition-all duration-200 placeholder:text-neutral-600"
              />
            </div>

            <div className="flex items-center gap-3 w-full lg:w-auto flex-wrap">
              {/* Category pills */}
              <div className="flex items-center gap-2 flex-wrap">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 ${
                      activeCategory === cat
                        ? 'bg-brand text-surface-0'
                        : 'bg-surface-1 text-neutral-400 border border-neutral-800 hover:border-neutral-600 hover:text-white'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Sort dropdown */}
              <div className="relative ml-auto lg:ml-0">
                <button
                  onClick={() => setShowSortDropdown(!showSortDropdown)}
                  onBlur={() => setTimeout(() => setShowSortDropdown(false), 150)}
                  className="flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium text-neutral-400 bg-surface-1 border border-neutral-800 hover:border-neutral-600 rounded-lg transition-all duration-200"
                >
                  <SlidersHorizontal className="w-3.5 h-3.5" />
                  {sortBy}
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${showSortDropdown ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {showSortDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: -8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -8, scale: 0.96 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 top-full mt-2 w-48 bg-surface-1 border border-neutral-800 rounded-xl shadow-2xl shadow-black/40 overflow-hidden z-50"
                    >
                      {sortOptions.map((option) => (
                        <button
                          key={option}
                          onClick={() => { setSortBy(option); setShowSortDropdown(false); }}
                          className={`block w-full text-left px-4 py-2.5 text-xs transition-colors duration-150 ${
                            sortBy === option
                              ? 'text-brand bg-brand/5'
                              : 'text-neutral-400 hover:text-white hover:bg-surface-2'
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project cards grid */}
      <section className="relative pb-28 lg:pb-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Results count */}
          <div className="mb-6">
            <span className="text-xs text-neutral-500">
              Showing <span className="text-neutral-300 font-medium">{filteredProjects.length}</span> project{filteredProjects.length !== 1 ? 's' : ''}
            </span>
          </div>

          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredProjects.map((project, i) => (
                <Link key={project.id} to={`/products/${project.id}`} className="block">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="group p-6 rounded-2xl border border-neutral-800/50 bg-surface-1 hover:border-neutral-700 hover:bg-surface-2 transition-all duration-300 cursor-pointer h-full"
                  >
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
                </Link>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-surface-1 border border-neutral-800/50 flex items-center justify-center">
                <Search className="w-7 h-7 text-neutral-600" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">No projects found</h3>
              <p className="text-sm text-neutral-500 max-w-sm mx-auto">
                Try adjusting your search or filters to discover more projects.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
