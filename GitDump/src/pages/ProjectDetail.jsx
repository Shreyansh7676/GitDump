import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  GitBranch, Star, TrendingUp, Heart, MessageCircle,
  ExternalLink, ArrowLeft, Shield, Clock, Users, DollarSign,
  Activity, Calendar, Code2, Globe, FileText, Copy, Check,
  ChevronRight,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { projectsData } from '../data/projects';

export default function ProjectDetail() {
  const { id } = useParams();
  const [isFavourited, setIsFavourited] = useState(false);
  const [copied, setCopied] = useState(false);

  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-surface-0">
        <Navbar />
        <div className="flex items-center justify-center min-h-[70vh]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-surface-1 border border-neutral-800/50 flex items-center justify-center">
              <Code2 className="w-9 h-9 text-neutral-600" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-3">Project not found</h2>
            <p className="text-neutral-500 mb-8 max-w-sm mx-auto">
              The project you're looking for doesn't exist or has been removed.
            </p>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-surface-0 bg-white hover:bg-neutral-200 rounded-xl transition-all duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Marketplace
            </Link>
          </motion.div>
        </div>
        <Footer />
      </div>
    );
  }

  const handleCopyRepo = () => {
    navigator.clipboard.writeText(project.repository);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFavourite = () => {
    setIsFavourited(!isFavourited);
  };

  return (
    <div className="min-h-screen bg-surface-0">
      <Navbar />

      {/* Background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-brand/3 rounded-full blur-3xl" />
        <div className="absolute top-60 right-1/4 w-72 h-72 bg-brand/2 rounded-full blur-3xl" />
      </div>

      <main className="relative pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">

          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 text-sm mb-8"
          >
            <Link to="/products" className="text-neutral-500 hover:text-white transition-colors duration-200">
              Marketplace
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-neutral-700" />
            <span className="text-neutral-300">{project.name}</span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* ─── Left Column: Main Content ─── */}
            <div className="lg:col-span-2 space-y-6">

              {/* Header card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="p-8 rounded-2xl border border-neutral-800/50 bg-surface-1"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center">
                      <GitBranch className="w-6 h-6 text-brand" />
                    </div>
                    <div>
                      <h1 className="text-2xl lg:text-3xl font-bold text-white tracking-tight">{project.name}</h1>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs font-medium px-2.5 py-0.5 bg-surface-3 text-neutral-400 rounded">
                          {project.tag}
                        </span>
                        <span className="text-xs text-neutral-600">•</span>
                        <span className="text-xs text-neutral-500">Listed {project.createdAt}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-white">{project.price}</p>
                    <p className="text-xs text-neutral-500 mt-0.5">asking price</p>
                  </div>
                </div>

                {/* Stats row */}
                <div className="flex items-center gap-5 py-4 border-y border-neutral-800/50">
                  <div className="flex items-center gap-1.5">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm font-medium text-neutral-300">{project.stars}</span>
                    <span className="text-xs text-neutral-600">stars</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <TrendingUp className="w-4 h-4 text-brand" />
                    <span className="text-sm font-medium text-brand">{project.growth}</span>
                    <span className="text-xs text-neutral-600">growth</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-neutral-500" />
                    <span className="text-sm font-medium text-neutral-300">{project.metrics.activeUsers}</span>
                    <span className="text-xs text-neutral-600">users</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <DollarSign className="w-4 h-4 text-neutral-500" />
                    <span className="text-sm font-medium text-neutral-300">{project.metrics.monthlyRevenue}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-5 text-neutral-400 leading-relaxed">{project.description}</p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs px-3 py-1.5 bg-surface-3 text-neutral-400 rounded-lg font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* About section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.08 }}
                className="p-8 rounded-2xl border border-neutral-800/50 bg-surface-1"
              >
                <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <FileText className="w-4.5 h-4.5 text-brand" />
                  About this project
                </h2>
                <div className="text-sm text-neutral-400 leading-relaxed whitespace-pre-line">
                  {project.longDescription}
                </div>
              </motion.div>

              {/* Key features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.16 }}
                className="p-8 rounded-2xl border border-neutral-800/50 bg-surface-1"
              >
                <h2 className="text-lg font-semibold text-white mb-5 flex items-center gap-2">
                  <Activity className="w-4.5 h-4.5 text-brand" />
                  Key Features
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3 p-3 rounded-xl bg-surface-2/50">
                      <div className="w-5 h-5 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-brand" />
                      </div>
                      <span className="text-sm text-neutral-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Metrics card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.24 }}
                className="p-8 rounded-2xl border border-neutral-800/50 bg-surface-1"
              >
                <h2 className="text-lg font-semibold text-white mb-5 flex items-center gap-2">
                  <TrendingUp className="w-4.5 h-4.5 text-brand" />
                  Performance Metrics
                </h2>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { label: 'Monthly Revenue', value: project.metrics.monthlyRevenue, icon: DollarSign },
                    { label: 'Active Users', value: project.metrics.activeUsers, icon: Users },
                    { label: 'Uptime', value: project.metrics.uptime, icon: Activity },
                    { label: 'Last Updated', value: project.metrics.lastUpdated, icon: Clock },
                  ].map((metric) => (
                    <div key={metric.label} className="p-4 rounded-xl bg-surface-2/50 border border-neutral-800/30">
                      <metric.icon className="w-4 h-4 text-neutral-600 mb-2" />
                      <p className="text-lg font-semibold text-white">{metric.value}</p>
                      <p className="text-xs text-neutral-500 mt-0.5">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* ─── Right Column: Sidebar ─── */}
            <div className="space-y-5">

              {/* Action buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="p-6 rounded-2xl border border-neutral-800/50 bg-surface-1 space-y-3"
              >
                <button
                  id="contact-seller-btn"
                  className="group w-full flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-surface-0 bg-white hover:bg-neutral-200 rounded-xl transition-all duration-200"
                >
                  <MessageCircle className="w-4 h-4" />
                  Contact Seller
                  <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </button>

                <button
                  id="add-favourite-btn"
                  onClick={handleFavourite}
                  className={`w-full flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-medium rounded-xl border transition-all duration-200 ${
                    isFavourited
                      ? 'border-brand/30 bg-brand/10 text-brand hover:bg-brand/15'
                      : 'border-neutral-700 text-neutral-300 hover:border-neutral-500 hover:text-white bg-surface-2'
                  }`}
                >
                  <Heart className={`w-4 h-4 transition-all duration-200 ${isFavourited ? 'fill-brand text-brand scale-110' : ''}`} />
                  {isFavourited ? 'Added to Favourites' : 'Add to Favourites'}
                </button>
              </motion.div>

              {/* Owner card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.18 }}
                className="p-6 rounded-2xl border border-neutral-800/50 bg-surface-1"
              >
                <h3 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-4">Seller</h3>

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-brand/30 to-brand/10 flex items-center justify-center ring-2 ring-neutral-800">
                    <span className="text-sm font-bold text-brand">
                      {project.owner.name.split(' ').map((n) => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-sm font-semibold text-white">{project.owner.name}</span>
                      {project.owner.verified && (
                        <Shield className="w-3.5 h-3.5 text-brand" />
                      )}
                    </div>
                    <span className="text-xs text-neutral-500">{project.owner.username}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-neutral-800/50">
                  <div>
                    <p className="text-sm font-semibold text-white">{project.owner.projects}</p>
                    <p className="text-xs text-neutral-500">Projects</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{project.owner.joined}</p>
                    <p className="text-xs text-neutral-500">Joined</p>
                  </div>
                </div>
              </motion.div>

              {/* Project links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.26 }}
                className="p-6 rounded-2xl border border-neutral-800/50 bg-surface-1"
              >
                <h3 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-4">Project Links</h3>

                <div className="space-y-2.5">
                  {/* Repository */}
                  <div className="flex items-center justify-between p-3 rounded-xl bg-surface-2/50 group">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <Code2 className="w-4 h-4 text-neutral-500 flex-shrink-0" />
                      <span className="text-xs text-neutral-400 truncate">{project.repository}</span>
                    </div>
                    <button
                      onClick={handleCopyRepo}
                      className="flex-shrink-0 p-1 text-neutral-600 hover:text-white transition-colors duration-200"
                      title="Copy repository URL"
                    >
                      {copied ? (
                        <Check className="w-3.5 h-3.5 text-brand" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>

                  {/* Demo */}
                  <a
                    href={`https://${project.demo}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-surface-2/50 hover:bg-surface-3/50 transition-colors duration-200 group"
                  >
                    <div className="flex items-center gap-2.5">
                      <Globe className="w-4 h-4 text-neutral-500" />
                      <span className="text-xs text-neutral-400 group-hover:text-white transition-colors duration-200">{project.demo}</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-neutral-600 group-hover:text-white transition-colors duration-200" />
                  </a>

                  {/* License */}
                  <div className="flex items-center gap-2.5 p-3 rounded-xl bg-surface-2/50">
                    <Shield className="w-4 h-4 text-neutral-500" />
                    <span className="text-xs text-neutral-400">License: <span className="text-neutral-300 font-medium">{project.license}</span></span>
                  </div>

                  {/* Created */}
                  <div className="flex items-center gap-2.5 p-3 rounded-xl bg-surface-2/50">
                    <Calendar className="w-4 h-4 text-neutral-500" />
                    <span className="text-xs text-neutral-400">Created: <span className="text-neutral-300 font-medium">{project.createdAt}</span></span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
