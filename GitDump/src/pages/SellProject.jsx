import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Package, FileText, Code2, DollarSign, Globe, GitBranch,
  ArrowRight, ArrowLeft, Plus, X, Check, Shield, Rocket,
  ChevronDown, Activity, Users, Terminal,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const categories = ['SaaS', 'DevTools', 'SDK', 'Security', 'CMS', 'FinTech', 'AI/ML', 'E-Commerce', 'Other'];
const licenses = ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSL 1.1', 'Proprietary', 'Other'];

const steps = [
  { id: 1, label: 'Basics', icon: Package },
  { id: 2, label: 'Details', icon: FileText },
  { id: 3, label: 'Metrics', icon: Activity },
  { id: 4, label: 'Review', icon: Check },
];

export default function SellProject() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Step 1: Basics
  const [projectName, setProjectName] = useState('');
  const [category, setCategory] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [askingPrice, setAskingPrice] = useState('');

  // Step 2: Details
  const [longDescription, setLongDescription] = useState('');
  const [techStack, setTechStack] = useState([]);
  const [techInput, setTechInput] = useState('');
  const [features, setFeatures] = useState(['']);
  const [repository, setRepository] = useState('');
  const [demoUrl, setDemoUrl] = useState('');
  const [license, setLicense] = useState('');

  // Step 3: Metrics
  const [monthlyRevenue, setMonthlyRevenue] = useState('');
  const [activeUsers, setActiveUsers] = useState('');
  const [uptime, setUptime] = useState('');

  const addTech = () => {
    if (techInput.trim() && !techStack.includes(techInput.trim())) {
      setTechStack([...techStack, techInput.trim()]);
      setTechInput('');
    }
  };

  const removeTech = (t) => setTechStack(techStack.filter((x) => x !== t));

  const addFeature = () => setFeatures([...features, '']);
  const updateFeature = (i, val) => {
    const copy = [...features];
    copy[i] = val;
    setFeatures(copy);
  };
  const removeFeature = (i) => setFeatures(features.filter((_, idx) => idx !== i));

  const canProceed = () => {
    if (currentStep === 1) return projectName && category && shortDescription && askingPrice;
    if (currentStep === 2) return longDescription && techStack.length > 0;
    if (currentStep === 3) return true;
    return true;
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 2000);
  };

  /* ---- shared input classes ---- */
  const inputCls =
    'w-full px-4 py-3.5 text-sm text-white bg-surface-1 border border-neutral-800 hover:border-neutral-700 focus:border-brand focus:ring-1 focus:ring-brand/20 rounded-xl outline-none transition-all duration-200 placeholder:text-neutral-600';
  const labelCls = 'block text-xs font-medium text-neutral-400 mb-2 uppercase tracking-wider';

  /* ==================== RENDER ==================== */

  if (submitted) {
    return (
      <div className="min-h-screen bg-surface-0">
        <Navbar />
        <div className="flex items-center justify-center min-h-[80vh]">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center max-w-md mx-auto px-6">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-brand/10 flex items-center justify-center">
              <Rocket className="w-9 h-9 text-brand" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-3">Listing submitted!</h2>
            <p className="text-neutral-400 mb-8">
              Your project <span className="text-white font-medium">{projectName}</span> has been submitted for review. We'll notify you once it's live on the marketplace.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/products" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-surface-0 bg-white hover:bg-neutral-200 rounded-xl transition-all duration-200">
                Browse Marketplace
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-neutral-400 border border-neutral-700 hover:border-neutral-500 hover:text-white rounded-xl transition-all duration-200">
                Back Home
              </Link>
            </div>
          </motion.div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface-0">
      <Navbar />

      {/* Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-brand/3 rounded-full blur-3xl" />
        <div className="absolute top-60 right-1/3 w-72 h-72 bg-brand/2 rounded-full blur-3xl" />
      </div>

      <main className="relative pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">

          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-brand uppercase tracking-widest mb-4">
              <span className="w-2 h-2 bg-brand rounded-full animate-pulse" />
              List Your Project
            </span>
            <h1 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Sell your project on <span className="text-gradient-brand">GitDump</span>
            </h1>
            <p className="mt-4 text-neutral-400 max-w-lg mx-auto">
              Fill in the details below and reach thousands of investors and developers looking for their next acquisition.
            </p>
          </motion.div>

          {/* Step indicator */}
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-10">
            <div className="flex items-center justify-between">
              {steps.map((s, i) => (
                <div key={s.id} className="flex items-center flex-1">
                  <button
                    onClick={() => s.id < currentStep && setCurrentStep(s.id)}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all duration-200 ${
                      currentStep === s.id
                        ? 'text-brand'
                        : s.id < currentStep
                          ? 'text-brand/60 cursor-pointer hover:text-brand'
                          : 'text-neutral-600 cursor-default'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-semibold transition-all duration-200 ${
                      currentStep === s.id
                        ? 'bg-brand text-surface-0'
                        : s.id < currentStep
                          ? 'bg-brand/10 text-brand'
                          : 'bg-surface-2 text-neutral-600'
                    }`}>
                      {s.id < currentStep ? <Check className="w-3.5 h-3.5" /> : s.id}
                    </div>
                    <span className="hidden sm:inline text-xs font-medium">{s.label}</span>
                  </button>
                  {i < steps.length - 1 && (
                    <div className={`flex-1 h-px mx-2 transition-colors duration-200 ${s.id < currentStep ? 'bg-brand/30' : 'bg-neutral-800'}`} />
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form Card */}
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35 }}
            className="p-8 rounded-2xl border border-neutral-800/50 bg-surface-1"
          >

            {/* ── STEP 1: Basics ── */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="flex items-center gap-2 mb-2">
                  <Package className="w-5 h-5 text-brand" />
                  <h2 className="text-lg font-semibold text-white">Project Basics</h2>
                </div>

                <div>
                  <label htmlFor="sell-name" className={labelCls}>Project Name</label>
                  <input id="sell-name" type="text" value={projectName} onChange={(e) => setProjectName(e.target.value)} placeholder="e.g. AI Analytics Engine" className={inputCls} />
                </div>

                <div>
                  <label htmlFor="sell-category" className={labelCls}>Category</label>
                  <div className="relative">
                    <select id="sell-category" value={category} onChange={(e) => setCategory(e.target.value)}
                      className={`${inputCls} appearance-none cursor-pointer`}>
                      <option value="" disabled>Select a category</option>
                      {categories.map((c) => <option key={c} value={c}>{c}</option>)}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-600 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label htmlFor="sell-desc" className={labelCls}>Short Description</label>
                  <textarea id="sell-desc" rows={3} value={shortDescription} onChange={(e) => setShortDescription(e.target.value)}
                    placeholder="A brief summary of what your project does (max 200 chars)" maxLength={200}
                    className={`${inputCls} resize-none`} />
                  <span className="block text-right text-xs text-neutral-600 mt-1">{shortDescription.length}/200</span>
                </div>

                <div>
                  <label htmlFor="sell-price" className={labelCls}>Asking Price (USD)</label>
                  <div className="relative">
                    <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-600" />
                    <input id="sell-price" type="text" value={askingPrice} onChange={(e) => setAskingPrice(e.target.value.replace(/[^0-9,]/g, ''))} placeholder="12,500" className={`${inputCls} pl-11`} />
                  </div>
                </div>
              </div>
            )}

            {/* ── STEP 2: Details ── */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="w-5 h-5 text-brand" />
                  <h2 className="text-lg font-semibold text-white">Project Details</h2>
                </div>

                <div>
                  <label htmlFor="sell-long" className={labelCls}>Detailed Description</label>
                  <textarea id="sell-long" rows={6} value={longDescription} onChange={(e) => setLongDescription(e.target.value)}
                    placeholder="Describe your project in detail — architecture, what makes it unique, traction so far…"
                    className={`${inputCls} resize-none`} />
                </div>

                {/* Tech stack */}
                <div>
                  <label className={labelCls}>Tech Stack</label>
                  <div className="flex gap-2">
                    <input type="text" value={techInput} onChange={(e) => setTechInput(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addTech())}
                      placeholder="Type and press Enter" className={`${inputCls} flex-1`} />
                    <button type="button" onClick={addTech}
                      className="px-4 py-3.5 text-sm font-medium text-neutral-300 bg-surface-2 border border-neutral-800 hover:border-neutral-600 rounded-xl transition-all duration-200">
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  {techStack.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {techStack.map((t) => (
                        <span key={t} className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 bg-surface-3 text-neutral-400 rounded-lg">
                          {t}
                          <button type="button" onClick={() => removeTech(t)} className="text-neutral-600 hover:text-white transition-colors">
                            <X className="w-3 h-3" />
                          </button>
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Key features */}
                <div>
                  <label className={labelCls}>Key Features</label>
                  <div className="space-y-2">
                    {features.map((f, i) => (
                      <div key={i} className="flex gap-2">
                        <input type="text" value={f} onChange={(e) => updateFeature(i, e.target.value)}
                          placeholder={`Feature ${i + 1}`} className={`${inputCls} flex-1`} />
                        {features.length > 1 && (
                          <button type="button" onClick={() => removeFeature(i)}
                            className="px-3 text-neutral-600 hover:text-red-400 transition-colors">
                            <X className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                  {features.length < 8 && (
                    <button type="button" onClick={addFeature}
                      className="mt-2 inline-flex items-center gap-1.5 text-xs text-brand hover:text-brand-light transition-colors">
                      <Plus className="w-3.5 h-3.5" /> Add feature
                    </button>
                  )}
                </div>

                {/* Links */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="sell-repo" className={labelCls}>Repository URL</label>
                    <div className="relative">
                      <Code2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-600" />
                      <input id="sell-repo" type="text" value={repository} onChange={(e) => setRepository(e.target.value)}
                        placeholder="github.com/you/project" className={`${inputCls} pl-11`} />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="sell-demo" className={labelCls}>Live Demo URL</label>
                    <div className="relative">
                      <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-600" />
                      <input id="sell-demo" type="text" value={demoUrl} onChange={(e) => setDemoUrl(e.target.value)}
                        placeholder="demo.yourproject.com" className={`${inputCls} pl-11`} />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="sell-license" className={labelCls}>License</label>
                  <div className="relative">
                    <select id="sell-license" value={license} onChange={(e) => setLicense(e.target.value)}
                      className={`${inputCls} appearance-none cursor-pointer`}>
                      <option value="" disabled>Select a license</option>
                      {licenses.map((l) => <option key={l} value={l}>{l}</option>)}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-600 pointer-events-none" />
                  </div>
                </div>
              </div>
            )}

            {/* ── STEP 3: Metrics ── */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="flex items-center gap-2 mb-2">
                  <Activity className="w-5 h-5 text-brand" />
                  <h2 className="text-lg font-semibold text-white">Project Metrics</h2>
                </div>
                <p className="text-sm text-neutral-500 -mt-2">Optional but highly recommended — projects with metrics get 3× more interest.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="sell-mrr" className={labelCls}>Monthly Revenue</label>
                    <div className="relative">
                      <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-600" />
                      <input id="sell-mrr" type="text" value={monthlyRevenue} onChange={(e) => setMonthlyRevenue(e.target.value)}
                        placeholder="4,200" className={`${inputCls} pl-11`} />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="sell-users" className={labelCls}>Active Users</label>
                    <div className="relative">
                      <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-600" />
                      <input id="sell-users" type="text" value={activeUsers} onChange={(e) => setActiveUsers(e.target.value)}
                        placeholder="1,850" className={`${inputCls} pl-11`} />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="sell-uptime" className={labelCls}>Uptime (%)</label>
                  <input id="sell-uptime" type="text" value={uptime} onChange={(e) => setUptime(e.target.value)}
                    placeholder="99.97" className={inputCls} />
                </div>
              </div>
            )}

            {/* ── STEP 4: Review ── */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div className="flex items-center gap-2 mb-2">
                  <Check className="w-5 h-5 text-brand" />
                  <h2 className="text-lg font-semibold text-white">Review Your Listing</h2>
                </div>

                {/* Summary card */}
                <div className="p-5 rounded-xl bg-surface-2/50 border border-neutral-800/30 space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <GitBranch className="w-4 h-4 text-brand" />
                        <span className="text-xs font-medium px-2 py-0.5 bg-surface-3 text-neutral-400 rounded">{category}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-white">{projectName}</h3>
                      <p className="text-sm text-neutral-500 mt-1">{shortDescription}</p>
                    </div>
                    <p className="text-xl font-bold text-white">${askingPrice}</p>
                  </div>

                  {techStack.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-neutral-800/50">
                      {techStack.map((t) => (
                        <span key={t} className="text-xs px-2 py-1 bg-surface-3 text-neutral-500 rounded-md">{t}</span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Details summary */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: 'Repository', value: repository || '—' },
                    { label: 'Demo', value: demoUrl || '—' },
                    { label: 'License', value: license || '—' },
                    { label: 'Features', value: `${features.filter(Boolean).length} listed` },
                    { label: 'Monthly Revenue', value: monthlyRevenue ? `$${monthlyRevenue}/mo` : '—' },
                    { label: 'Active Users', value: activeUsers || '—' },
                  ].map((item) => (
                    <div key={item.label} className="p-3 rounded-xl bg-surface-2/50">
                      <p className="text-xs text-neutral-500">{item.label}</p>
                      <p className="text-sm text-neutral-300 font-medium truncate">{item.value}</p>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-xl bg-brand/5 border border-brand/10">
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-white">Review & verification</p>
                      <p className="text-xs text-neutral-400 mt-0.5">Our team will review your listing within 24 hours. You'll receive an email once it's approved and live.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation buttons */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-neutral-800/50">
              {currentStep > 1 ? (
                <button onClick={() => setCurrentStep(currentStep - 1)}
                  className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-neutral-400 hover:text-white transition-colors duration-200">
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
              ) : (
                <div />
              )}

              {currentStep < 4 ? (
                <button onClick={() => canProceed() && setCurrentStep(currentStep + 1)}
                  disabled={!canProceed()}
                  className="group flex items-center gap-2 px-6 py-3 text-sm font-semibold text-surface-0 bg-white hover:bg-neutral-200 disabled:opacity-40 disabled:cursor-not-allowed rounded-xl transition-all duration-200">
                  Continue
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </button>
              ) : (
                <button onClick={handleSubmit} disabled={isSubmitting}
                  className="group flex items-center gap-2 px-6 py-3 text-sm font-semibold text-surface-0 bg-brand hover:bg-brand-light disabled:opacity-60 rounded-xl transition-all duration-200">
                  {isSubmitting ? (
                    <div className="w-4 h-4 border-2 border-surface-0/30 border-t-surface-0 rounded-full animate-spin" />
                  ) : (
                    <>
                      Submit Listing
                      <Rocket className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </>
                  )}
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
