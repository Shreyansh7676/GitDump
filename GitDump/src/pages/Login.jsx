import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Terminal, Eye, EyeOff, Mail, Lock, ArrowRight, Globe } from 'lucide-react';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate loading
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="min-h-screen bg-surface-0 flex">
      {/* Left panel — branding */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <div className="absolute inset-0 bg-surface-1" />
        <div className="absolute inset-0 dot-pattern opacity-30" />

        {/* Decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-brand/3 rounded-full blur-3xl" />

        <div className="relative z-10 flex flex-col justify-between p-12 w-full">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 bg-brand flex items-center justify-center rounded-lg">
              <Terminal className="w-4 h-4 text-surface-0" strokeWidth={2.5} />
            </div>
            <span className="text-lg font-bold text-white tracking-tight">GitDump</span>
          </Link>

          {/* Center content */}
          <div className="max-w-md flex-1 flex items-center">
            <div>
              <h1 className="text-4xl font-extrabold text-white tracking-tight leading-tight">
                Welcome back,<br />
                <span className="text-neutral-500">builder.</span>
              </h1>
              <p className="mt-6 text-neutral-400 leading-relaxed">
                Your projects are waiting. Sign in to manage your listings,
                track investor interest, and close your next deal.
              </p>


            </div>
          </div>
        </div>
      </div>

      {/* Right panel — form */}
      <div className="flex-1 flex items-center justify-center p-6 lg:p-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md"
        >
          {/* Mobile logo */}
          <div className="lg:hidden mb-10">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-brand flex items-center justify-center rounded-lg">
                <Terminal className="w-4 h-4 text-surface-0" strokeWidth={2.5} />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">GitDump</span>
            </Link>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white tracking-tight">Sign in to your account</h2>
            <p className="mt-2 text-sm text-neutral-500">
              Don't have an account?{' '}
              <Link to="/signup" className="text-brand hover:text-brand-light transition-colors font-medium">
                Create one free
              </Link>
            </p>
          </div>

          {/* Social login */}
          <div className="grid grid-cols-2 gap-3 mb-8">
            <button className="flex items-center justify-center gap-2.5 px-4 py-3 text-sm font-medium text-neutral-300 border border-neutral-800 hover:border-neutral-600 bg-surface-1 hover:bg-surface-2 rounded-xl transition-all duration-200">

              GitHub
            </button>
            <button className="flex items-center justify-center gap-2.5 px-4 py-3 text-sm font-medium text-neutral-300 border border-neutral-800 hover:border-neutral-600 bg-surface-1 hover:bg-surface-2 rounded-xl transition-all duration-200">
              <Globe className="w-4 h-4" />
              Google
            </button>
          </div>

          {/* Divider */}
          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-neutral-800" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-3 bg-surface-0 text-neutral-600 uppercase tracking-wider">or continue with email</span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label htmlFor="login-email" className="block text-xs font-medium text-neutral-400 mb-2 uppercase tracking-wider">
                Email address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-600" />
                <input
                  id="login-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full pl-11 pr-4 py-3.5 text-sm text-white bg-surface-1 border border-neutral-800 hover:border-neutral-700 focus:border-brand focus:ring-1 focus:ring-brand/20 rounded-xl outline-none transition-all duration-200 placeholder:text-neutral-600"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="login-password" className="block text-xs font-medium text-neutral-400 uppercase tracking-wider">
                  Password
                </label>
                <a href="#" className="text-xs text-brand hover:text-brand-light transition-colors">
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-600" />
                <input
                  id="login-password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••"
                  className="w-full pl-11 pr-12 py-3.5 text-sm text-white bg-surface-1 border border-neutral-800 hover:border-neutral-700 focus:border-brand focus:ring-1 focus:ring-brand/20 rounded-xl outline-none transition-all duration-200 placeholder:text-neutral-600"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-600 hover:text-neutral-400 transition-colors"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Remember me */}
            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={() => setRememberMe(!rememberMe)}
                className={`w-4 h-4 rounded border flex items-center justify-center transition-all duration-200 ${rememberMe
                  ? 'bg-brand border-brand'
                  : 'border-neutral-700 bg-surface-1 hover:border-neutral-600'
                  }`}
                aria-label="Remember me"
              >
                {rememberMe && (
                  <svg className="w-2.5 h-2.5 text-surface-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </button>
              <span className="text-sm text-neutral-400">Remember me for 30 days</span>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="group w-full flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-surface-0 bg-white hover:bg-neutral-200 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl transition-all duration-200"
            >
              {isLoading ? (
                <div className="w-4 h-4 border-2 border-surface-0/30 border-t-surface-0 rounded-full animate-spin" />
              ) : (
                <>
                  Sign In
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </>
              )}
            </button>
          </form>

          {/* Footer */}
          <p className="mt-8 text-center text-xs text-neutral-600">
            By signing in, you agree to our{' '}
            <a href="#" className="text-neutral-400 hover:text-white transition-colors">Terms of Service</a>
            {' '}and{' '}
            <a href="#" className="text-neutral-400 hover:text-white transition-colors">Privacy Policy</a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
