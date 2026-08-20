import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getLinkByShortCode, recordScanEvent } from './services/dynamicQrService';

const RedirectHandler: React.FC = () => {
  const { shortCode } = useParams<{ shortCode: string }>();
  const [error, setError] = useState<'not_found' | 'paused' | 'expired' | 'loading'>('loading');
  const [targetUrl, setTargetUrl] = useState<string | null>(null);

  useEffect(() => {
    if (!shortCode) {
      setError('not_found');
      return;
    }

    const cleanCode = shortCode.trim().replace(/\/+$/, '');
    const handleRedirect = async () => {
      try {
        const { data: link, error: fetchErr } = await getLinkByShortCode(cleanCode);

        if (fetchErr || !link) {
          setError('not_found');
          return;
        }

        // Check if paused
        if (link.is_active === false) {
          setError('paused');
          return;
        }

        // Check expiration
        if (link.expires_at && new Date(link.expires_at) < new Date()) {
          setError('expired');
          return;
        }

        let destination = link.target_url.trim();
        if (!destination.startsWith('http://') && !destination.startsWith('https://') && !destination.startsWith('mailto:') && !destination.startsWith('tel:') && !destination.startsWith('upi:')) {
          destination = `https://${destination}`;
        }

        setTargetUrl(destination);

        // Record scan analytics event safely before window unloads
        try {
          await Promise.race([
            recordScanEvent({
              linkId: link.id,
              referrer: document.referrer,
            }),
            new Promise((res) => setTimeout(res, 800))
          ]);
        } catch {
          // Continue redirect even if telemetry fails
        }

        // Instant redirect
        window.location.replace(destination);
      } catch (err) {
        console.error('Redirect failed:', err);
        setError('not_found');
      }
    };

    handleRedirect();
  }, [shortCode]);

  if (error === 'loading') {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-4 text-center">
        <div className="w-14 h-14 border-4 border-accent/20 border-t-accent rounded-full animate-spin mb-4" />
        <h2 className="text-xl font-bold text-gray-800">Redirecting to destination...</h2>
        <p className="text-sm text-gray-500 mt-1">Please wait a moment while we connect you.</p>
        {targetUrl && (
          <a
            href={targetUrl}
            className="mt-4 text-xs text-accent font-semibold underline hover:text-accent-dark"
          >
            Click here if you are not redirected automatically
          </a>
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-4 text-center">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 shadow-xl border border-neutral-200">
        <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mx-auto mb-4 border border-amber-200/60">
          {error === 'paused' ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ) : error === 'expired' ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          )}
        </div>
        <h1 className="text-xl font-bold text-slate-900 mb-2">
          {error === 'paused'
            ? 'QR Code Temporarily Paused'
            : error === 'expired'
            ? 'QR Code Expired'
            : 'QR Code Not Found'}
        </h1>
        <p className="text-sm text-gray-600 mb-6 leading-relaxed">
          {error === 'paused'
            ? 'The owner of this dynamic QR code has temporarily paused access. Please check back later.'
            : error === 'expired'
            ? 'This dynamic QR campaign has reached its expiration date.'
            : 'The QR code link you scanned does not exist or has been deleted.'}
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center gap-2 w-full py-3 bg-accent text-white font-bold rounded-xl shadow-md hover:bg-accent-dark transition-all text-sm"
        >
          Create Your Own Free QR Code
        </Link>
      </div>
    </div>
  );
};

export default RedirectHandler;
