import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
  initialMode?: 'signin' | 'signup';
  title?: string;
  subtitle?: string;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
  initialMode = 'signup',
  title,
  subtitle,
}) => {
  const { signIn, signUp, resetPassword } = useAuth();
  const [mode, setMode] = useState<'signin' | 'signup' | 'forgot'>(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setMessage(null);
    setLoading(true);

    try {
      if (mode === 'signup') {
        const { data, error } = await signUp(email, password);
        if (error) {
          setError(error.message);
        } else if (data?.user && (!data.user.identities || data.user.identities.length === 0)) {
          setError('This email is already registered. Please click "Log In" above to access your account.');
        } else if (data?.user && !data.session) {
          setMessage('Account created! Please check your email inbox (and spam folder) to confirm your email, or click Log In.');
        } else {
          onSuccess?.();
          onClose();
        }
      } else if (mode === 'signin') {
        const { error } = await signIn(email, password);
        if (error) {
          setError(error.message);
        } else {
          onSuccess?.();
          onClose();
        }
      } else if (mode === 'forgot') {
        const { error } = await resetPassword(email);
        if (error) {
          setError(error.message);
        } else {
          setMessage('Password reset instructions have been sent to your email.');
        }
      }
    } catch (err: any) {
      setError(err?.message || 'An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-neutral-100 overflow-hidden p-6 sm:p-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 p-2 rounded-full hover:bg-neutral-100 transition-colors"
          aria-label="Close modal"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-3 text-accent">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900">
            {title || (mode === 'signup' ? 'Create Your Free Account' : mode === 'signin' ? 'Welcome Back' : 'Reset Password')}
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            {subtitle || (mode === 'signup' ? 'Sign up to create editable dynamic QR codes & track real-time scans.' : 'Sign in to access your dynamic QR codes and analytics.')}
          </p>
        </div>

        {/* Mode Switcher Tabs */}
        {mode !== 'forgot' && (
          <div className="flex p-1 bg-neutral-100 rounded-xl mb-6">
            <button
              type="button"
              onClick={() => { setMode('signup'); setError(null); setMessage(null); }}
              className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                mode === 'signup' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              Sign Up (Free)
            </button>
            <button
              type="button"
              onClick={() => { setMode('signin'); setError(null); setMessage(null); }}
              className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                mode === 'signin' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              Log In
            </button>
          </div>
        )}

        {/* Error / Success Messages */}
        {error && (
          <div className="mb-4 p-3.5 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs font-medium flex items-center gap-2">
            <svg className="w-4 h-4 shrink-0 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{error}</span>
          </div>
        )}

        {message && (
          <div className="mb-4 p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-xs font-medium flex items-center gap-2">
            <svg className="w-4 h-4 shrink-0 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>{message}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-sm focus:ring-2 focus:ring-accent focus:bg-white outline-none transition-all"
            />
          </div>

          {mode !== 'forgot' && (
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-xs font-bold text-gray-700">Password</label>
                {mode === 'signin' && (
                  <button
                    type="button"
                    onClick={() => { setMode('forgot'); setError(null); }}
                    className="text-xs text-accent hover:underline font-medium"
                  >
                    Forgot password?
                  </button>
                )}
              </div>
              <input
                type="password"
                required
                minLength={6}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-sm focus:ring-2 focus:ring-accent focus:bg-white outline-none transition-all"
              />
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 bg-accent hover:bg-accent-dark text-white font-bold rounded-xl shadow-lg shadow-accent/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {loading ? (
              <>
                <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Processing...
              </>
            ) : (
              mode === 'signup' ? 'Create Account & Continue' : mode === 'signin' ? 'Sign In to Studio' : 'Send Reset Link'
            )}
          </button>
        </form>

        {/* Footer info */}
        {mode === 'forgot' && (
          <div className="mt-4 text-center">
            <button
              type="button"
              onClick={() => { setMode('signin'); setError(null); }}
              className="text-xs text-gray-600 hover:text-gray-900 font-medium"
            >
              ← Back to Sign In
            </button>
          </div>
        )}

        <p className="text-[11px] text-gray-400 text-center mt-6">
          By continuing, you agree to our{' '}
          <a href="/terms" className="underline hover:text-gray-600">Terms</a> and{' '}
          <a href="/privacy" className="underline hover:text-gray-600">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
};
