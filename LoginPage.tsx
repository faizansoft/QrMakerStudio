import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { signIn, resetPassword } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [isForgot, setIsForgot] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setMessage(null);
    setLoading(true);

    try {
      if (isForgot) {
        const { error } = await resetPassword(email);
        if (error) setError(error.message);
        else setMessage('Password reset instructions sent to your email.');
      } else {
        const { error } = await signIn(email, password);
        if (error) {
          setError(error.message);
        } else {
          navigate('/dashboard');
        }
      }
    } catch (err: any) {
      setError(err?.message || 'Failed to sign in.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12 bg-gradient-hero">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-neutral-200 p-8">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-4">
            <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center text-white font-bold">
              QR
            </div>
            <span className="text-xl font-bold text-gray-900">QR Maker Studio</span>
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">
            {isForgot ? 'Reset Your Password' : 'Log in to your account'}
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            {isForgot ? 'Enter your email to receive recovery instructions' : 'Manage your dynamic QR codes and view real-time analytics'}
          </p>
        </div>

        {error && (
          <div className="mb-4 p-3.5 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs font-medium">
            {error}
          </div>
        )}

        {message && (
          <div className="mb-4 p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-xs font-medium">
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-sm focus:ring-2 focus:ring-accent focus:bg-white outline-none"
            />
          </div>

          {!isForgot && (
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-xs font-bold text-gray-700">Password</label>
                <button
                  type="button"
                  onClick={() => { setIsForgot(true); setError(null); }}
                  className="text-xs text-accent hover:underline font-medium"
                >
                  Forgot password?
                </button>
              </div>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-sm focus:ring-2 focus:ring-accent focus:bg-white outline-none"
              />
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 bg-accent hover:bg-accent-dark text-white font-bold rounded-xl shadow-lg shadow-accent/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {loading ? 'Processing...' : isForgot ? 'Send Reset Instructions' : 'Log In'}
          </button>
        </form>

        {isForgot ? (
          <div className="mt-6 text-center">
            <button
              type="button"
              onClick={() => { setIsForgot(false); setError(null); }}
              className="text-xs text-gray-600 hover:text-gray-900 font-medium"
            >
              ← Back to Log In
            </button>
          </div>
        ) : (
          <div className="mt-6 text-center text-xs text-gray-500">
            Don't have an account yet?{' '}
            <Link to="/signup" className="text-accent font-bold hover:underline">
              Sign up for free
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
