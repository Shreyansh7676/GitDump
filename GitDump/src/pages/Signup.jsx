import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Terminal, Eye, EyeOff, Mail, Lock, User, ArrowRight, Globe, Check } from 'lucide-react';

const passwordRequirements = [
  { label: 'At least 8 characters', test: (p) => p.length >= 8 },
  { label: 'One uppercase letter', test: (p) => /[A-Z]/.test(p) },
  { label: 'One number', test: (p) => /[0-9]/.test(p) },
  { label: 'One special character', test: (p) => /[^A-Za-z0-9]/.test(p) },
];

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(1); // 1 = form, 2 = success

  const passwordStrength = passwordRequirements.filter((r) => r.test(password)).length;

  const getStrengthLabel = () => {
    if (password.length === 0) return '';
    if (passwordStrength <= 1) return 'Weak';
    if (passwordStrength <= 2) return 'Fair';
    if (passwordStrength <= 3) return 'Good';
    return 'Strong';
  };

  const getStrengthColor = () => {
    if (passwordStrength <= 1) return 'bg-red-500';
    if (passwordStrength <= 2) return 'bg-yellow-500';
    if (passwordStrength <= 3) return 'bg-brand';
    return 'bg-brand';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep(2);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-surface-0 flex">
      {/* Left panel — branding */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <div className="absolute inset-0 bg-surface-1" />
        <div className="absolute inset-0 grid-pattern opacity-20" />

        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-brand/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-56 h-56 bg-brand/3 rounded-full blur-3xl" />

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
                Start building<br />
                <span className="text-neutral-500">your empire.</span>
              </h1>
              <p className="mt-6 text-neutral-400 leading-relaxed">
                Join developers who are turning side projects into
                million-dollar startups. List your first project in under 2 minutes.
              </p>

              {/* Feature highlights */}
              <div className="mt-12 space-y-4">
                {[
                  'List unlimited projects',
                  'Connect with investors',
                  'Authentic profiles',
                  'Get AI insights',
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-brand" />
                    </div>
                    <span className="text-sm text-neutral-400">{feature}</span>
                  </div>
                ))}
              </div>
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
          {step === 1 ? (
            <>
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
                <h2 className="text-2xl font-bold text-white tracking-tight">Create your account</h2>
                <p className="mt-2 text-sm text-neutral-500">
                  Already have an account?{' '}
                  <Link to="/login" className="text-brand hover:text-brand-light transition-colors font-medium">
                    Sign in
                  </Link>
                </p>
              </div>

              {/* Social signup */}
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
                {/* Full Name */}
                <div>
                  <label htmlFor="signup-name" className="block text-xs font-medium text-neutral-400 mb-2 uppercase tracking-wider">
                    Full name
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-600" />
                    <input
                      id="signup-name"
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="John Doe"
                      className="w-full pl-11 pr-4 py-3.5 text-sm text-white bg-surface-1 border border-neutral-800 hover:border-neutral-700 focus:border-brand focus:ring-1 focus:ring-brand/20 rounded-xl outline-none transition-all duration-200 placeholder:text-neutral-600"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="signup-email" className="block text-xs font-medium text-neutral-400 mb-2 uppercase tracking-wider">
                    Email address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-600" />
                    <input
                      id="signup-email"
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
                  <label htmlFor="signup-password" className="block text-xs font-medium text-neutral-400 mb-2 uppercase tracking-wider">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-600" />
                    <input
                      id="signup-password"
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

                  {/* Strength bar */}
                  {password.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="mt-3"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex gap-1 flex-1 mr-3">
                          {[1, 2, 3, 4].map((i) => (
                            <div
                              key={i}
                              className={`h-1 flex-1 rounded-full transition-all duration-300 ${i <= passwordStrength ? getStrengthColor() : 'bg-neutral-800'
                                }`}
                            />
                          ))}
                        </div>
                        <span className={`text-xs font-medium ${passwordStrength <= 1 ? 'text-red-400' : passwordStrength <= 2 ? 'text-yellow-400' : 'text-brand'}`}>
                          {getStrengthLabel()}
                        </span>
                      </div>
                      <div className="space-y-1.5">
                        {passwordRequirements.map((req) => (
                          <div key={req.label} className="flex items-center gap-2">
                            <div className={`w-3.5 h-3.5 rounded-full flex items-center justify-center transition-all duration-200 ${req.test(password) ? 'bg-brand/20' : 'bg-neutral-800'}`}>
                              {req.test(password) && <Check className="w-2 h-2 text-brand" />}
                            </div>
                            <span className={`text-xs transition-colors duration-200 ${req.test(password) ? 'text-neutral-300' : 'text-neutral-600'}`}>
                              {req.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Terms */}
                <div className="flex items-start gap-2.5">
                  <button
                    type="button"
                    onClick={() => setAgreedToTerms(!agreedToTerms)}
                    className={`mt-0.5 w-4 h-4 rounded border flex items-center justify-center flex-shrink-0 transition-all duration-200 ${agreedToTerms
                      ? 'bg-brand border-brand'
                      : 'border-neutral-700 bg-surface-1 hover:border-neutral-600'
                      }`}
                    aria-label="Agree to terms"
                  >
                    {agreedToTerms && (
                      <svg className="w-2.5 h-2.5 text-surface-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </button>
                  <span className="text-sm text-neutral-500">
                    I agree to the{' '}
                    <a href="#" className="text-neutral-300 hover:text-white transition-colors">Terms of Service</a>
                    {' '}and{' '}
                    <a href="#" className="text-neutral-300 hover:text-white transition-colors">Privacy Policy</a>
                  </span>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isLoading || !agreedToTerms}
                  className="group w-full flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-surface-0 bg-white hover:bg-neutral-200 disabled:opacity-40 disabled:cursor-not-allowed rounded-xl transition-all duration-200"
                >
                  {isLoading ? (
                    <div className="w-4 h-4 border-2 border-surface-0/30 border-t-surface-0 rounded-full animate-spin" />
                  ) : (
                    <>
                      Create Account
                      <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </>
                  )}
                </button>
              </form>
            </>
          ) : (
            /* Success state */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-brand/10 flex items-center justify-center">
                <Check className="w-8 h-8 text-brand" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-3">Account created!</h2>
              <p className="text-neutral-400 mb-8 max-w-sm mx-auto">
                Welcome to GitDump. Check your email to verify your account and start listing your projects.
              </p>
              <Link
                to="/login"
                className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold text-surface-0 bg-white hover:bg-neutral-200 rounded-xl transition-all duration-200"
              >
                Go to Sign In
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
