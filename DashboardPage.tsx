import React, { useEffect, useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import QRCodeStyling from 'qr-code-styling';
import { useAuth } from './context/AuthContext';
import {
  getUserDynamicLinks,
  updateDynamicLink,
  deleteDynamicLink,
  DynamicLink
} from './services/dynamicQrService';

const DashboardPage: React.FC = () => {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();

  const [links, setLinks] = useState<DynamicLink[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingLink, setEditingLink] = useState<DynamicLink | null>(null);
  const [newTargetUrl, setNewTargetUrl] = useState('');
  const [newTitle, setNewTitle] = useState('');
  const [saving, setSaving] = useState(false);
  const [copySuccess, setCopySuccess] = useState<string | null>(null);
  const [previewQrLink, setPreviewQrLink] = useState<DynamicLink | null>(null);

  const previewModalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/login');
    }
  }, [user, authLoading, navigate]);

  const fetchLinks = async () => {
    setLoading(true);
    const { data, error } = await getUserDynamicLinks();
    if (!error && data) {
      setLinks(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (user) {
      fetchLinks();
    }
  }, [user]);

  // Handle Target URL Update
  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingLink) return;

    setSaving(true);
    const { error } = await updateDynamicLink(editingLink.id, {
      target_url: newTargetUrl.trim(),
      title: newTitle.trim(),
    });

    if (!error) {
      setLinks(prev => prev.map(l => l.id === editingLink.id ? { ...l, target_url: newTargetUrl.trim(), title: newTitle.trim() } : l));
      setEditingLink(null);
    }
    setSaving(false);
  };

  // Toggle Active/Paused Status
  const handleToggleActive = async (link: DynamicLink) => {
    const updatedStatus = !link.is_active;
    const { error } = await updateDynamicLink(link.id, { is_active: updatedStatus });
    if (!error) {
      setLinks(prev => prev.map(l => l.id === link.id ? { ...l, is_active: updatedStatus } : l));
    }
  };

  // Delete Link
  const handleDelete = async (linkId: string) => {
    if (!window.confirm('Are you sure you want to delete this dynamic QR code? All tracking history will be permanently deleted.')) {
      return;
    }
    const { success } = await deleteDynamicLink(linkId);
    if (success) {
      setLinks(prev => prev.filter(l => l.id !== linkId));
    }
  };

  // Copy Short URL
  const handleCopyLink = (shortCode: string) => {
    const url = `https://qr-generator.online/r/${shortCode}`;
    navigator.clipboard.writeText(url);
    setCopySuccess(shortCode);
    setTimeout(() => setCopySuccess(null), 2000);
  };

  // Download QR Code
  const handleDownload = (link: DynamicLink, format: 'png' | 'svg') => {
    const qrUrl = `https://qr-generator.online/r/${link.short_code}`;
    const qr = new QRCodeStyling({
      width: 1000,
      height: 1000,
      data: qrUrl,
      dotsOptions: { color: link.qr_style?.fgColor || '#1E1E1E', type: link.qr_style?.dotStyle || 'rounded' },
      backgroundOptions: { color: link.qr_style?.bgColor || '#ffffff' },
      cornersSquareOptions: { color: link.qr_style?.cornerSquareColor || '#1E1E1E', type: link.qr_style?.cornerSquareStyle || 'extra-rounded' },
      cornersDotOptions: { color: link.qr_style?.cornerDotColor || '#2B6F53', type: link.qr_style?.cornerDotStyle || 'dot' },
      qrOptions: { errorCorrectionLevel: 'H' },
      type: 'svg',
    });

    qr.download({ name: `dynamic_qr_${link.short_code}`, extension: format });
  };

  const totalScans = links.reduce((acc, l) => acc + (l.total_clicks || 0), 0);
  const activeCount = links.filter(l => l.is_active !== false).length;

  const filteredLinks = links.filter(l =>
    (l.title?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
    l.short_code.toLowerCase().includes(searchTerm.toLowerCase()) ||
    l.target_url.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
              Dynamic QR Code Studio
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Manage all your editable QR codes, update destination links, and monitor live scan analytics.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent hover:bg-accent-dark text-white text-sm font-bold rounded-xl shadow-lg shadow-accent/20 transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" />
              </svg>
              Create New QR Code
            </Link>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">
              <span>Total Dynamic QR Codes</span>
              <span className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">🏷️</span>
            </div>
            <p className="text-3xl font-black text-gray-900">{links.length}</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">
              <span>Total Lifetime Scans</span>
              <span className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">📊</span>
            </div>
            <p className="text-3xl font-black text-emerald-600">{totalScans.toLocaleString()}</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">
              <span>Active Campaigns</span>
              <span className="p-2 bg-blue-50 text-blue-600 rounded-lg">⚡</span>
            </div>
            <p className="text-3xl font-black text-blue-600">{activeCount}</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">
              <span>Plan Status</span>
              <span className="p-2 bg-amber-50 text-amber-600 rounded-lg">⭐</span>
            </div>
            <p className="text-xl font-bold text-gray-900">Free Lifetime</p>
            <span className="text-[11px] text-emerald-600 font-semibold">Unlimited Scans & Edits</span>
          </div>
        </div>

        {/* Search & Filter */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm mb-6 flex items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <svg className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search dynamic QR codes by title, shortcode, or URL..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
          <div className="text-xs text-slate-500 font-medium">
            Showing {filteredLinks.length} of {links.length} QR codes
          </div>
        </div>

        {/* QR List Table / Cards */}
        {loading ? (
          <div className="bg-white rounded-2xl p-12 border border-slate-200 text-center">
            <div className="w-10 h-10 border-4 border-accent/20 border-t-accent rounded-full animate-spin mx-auto mb-3" />
            <p className="text-sm text-slate-500 font-medium">Loading your dynamic QR codes...</p>
          </div>
        ) : filteredLinks.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 border border-dashed border-slate-300 text-center">
            <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl">
              ✨
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">
              {links.length === 0 ? 'No Dynamic QR Codes Yet' : 'No Matching QR Codes Found'}
            </h3>
            <p className="text-sm text-slate-500 max-w-sm mx-auto mb-6">
              {links.length === 0
                ? 'Create your first editable dynamic QR code. Update your link anytime and track scans in real time.'
                : 'Try adjusting your search terms to find what you are looking for.'}
            </p>
            {links.length === 0 && (
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-bold rounded-xl shadow-md hover:bg-accent-dark transition-all text-sm"
              >
                Create Dynamic QR Code Now
              </Link>
            )}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredLinks.map(link => (
              <div
                key={link.id}
                className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-5"
              >
                {/* Left: Thumbnail & Details */}
                <div className="flex items-start sm:items-center gap-4 min-w-0 flex-1">
                  <div className="w-16 h-16 shrink-0 bg-slate-100 rounded-xl p-1 border border-slate-200 flex items-center justify-center">
                    <img
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://qr-generator.online/r/${link.short_code}`}
                      alt="QR"
                      className="w-full h-full object-contain rounded"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <h3 className="font-bold text-gray-900 text-base truncate">
                        {link.title || `Dynamic QR - ${link.short_code}`}
                      </h3>
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        link.is_active !== false ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-600'
                      }`}>
                        {link.is_active !== false ? 'Active' : 'Paused'}
                      </span>
                    </div>

                    {/* Short link */}
                    <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-1">
                      <span className="text-accent font-semibold">https://qr-generator.online/r/{link.short_code}</span>
                      <button
                        onClick={() => handleCopyLink(link.short_code)}
                        className="text-slate-400 hover:text-accent font-sans transition-colors"
                        title="Copy link"
                      >
                        {copySuccess === link.short_code ? '✓ Copied' : '📋 Copy'}
                      </button>
                    </div>

                    {/* Target destination */}
                    <p className="text-xs text-slate-400 truncate flex items-center gap-1">
                      <span>↳ Destination:</span>
                      <span className="text-slate-700 font-medium truncate">{link.target_url}</span>
                    </p>
                  </div>
                </div>

                {/* Middle: Scan Count */}
                <div className="flex md:flex-col items-center md:items-end justify-between md:justify-center border-t md:border-t-0 pt-3 md:pt-0 border-slate-100 shrink-0">
                  <span className="text-xs text-slate-400">Lifetime Scans</span>
                  <span className="text-2xl font-black text-emerald-600">
                    {(link.total_clicks || 0).toLocaleString()}
                  </span>
                </div>

                {/* Right: Actions */}
                <div className="flex items-center gap-2 border-t md:border-t-0 pt-3 md:pt-0 border-slate-100 shrink-0 flex-wrap">
                  <Link
                    to={`/analytics/${link.id}`}
                    className="px-3.5 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-bold rounded-xl transition-colors flex items-center gap-1.5"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    Analytics
                  </Link>

                  <button
                    onClick={() => {
                      setEditingLink(link);
                      setNewTargetUrl(link.target_url);
                      setNewTitle(link.title || '');
                    }}
                    className="px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition-colors"
                  >
                    ✏️ Edit URL
                  </button>

                  <div className="relative group">
                    <button className="px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition-colors">
                      ⬇️ Download
                    </button>
                    <div className="absolute right-0 top-full mt-1 bg-white rounded-xl shadow-xl border border-slate-200 p-1.5 hidden group-hover:block z-10 w-28">
                      <button
                        onClick={() => handleDownload(link, 'png')}
                        className="w-full text-left px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
                      >
                        PNG (Raster)
                      </button>
                      <button
                        onClick={() => handleDownload(link, 'svg')}
                        className="w-full text-left px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
                      >
                        SVG (Vector)
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => handleToggleActive(link)}
                    className={`p-2 rounded-xl text-xs transition-colors ${
                      link.is_active !== false ? 'text-amber-600 hover:bg-amber-50' : 'text-emerald-600 hover:bg-emerald-50'
                    }`}
                    title={link.is_active !== false ? 'Pause QR Code' : 'Activate QR Code'}
                  >
                    {link.is_active !== false ? '⏸️' : '▶️'}
                  </button>

                  <button
                    onClick={() => handleDelete(link.id)}
                    className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-colors text-xs"
                    title="Delete QR Code"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Edit Modal */}
        {editingLink && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
            <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-neutral-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">Edit Dynamic QR Code</h3>
                <button
                  onClick={() => setEditingLink(null)}
                  className="text-slate-400 hover:text-slate-600 p-1.5 rounded-full hover:bg-slate-100"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleUpdate} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Campaign Title</label>
                  <input
                    type="text"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder="e.g. Summer Restaurant Menu"
                    className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-accent outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    New Destination URL (Changes immediately with zero reprinting)
                  </label>
                  <input
                    type="url"
                    required
                    value={newTargetUrl}
                    onChange={(e) => setNewTargetUrl(e.target.value)}
                    placeholder="https://yournewwebsite.com"
                    className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-accent outline-none font-mono"
                  />
                  <span className="text-[11px] text-emerald-600 font-medium block mt-1">
                    ✓ All existing printed QR codes will immediately redirect to this new link.
                  </span>
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setEditingLink(null)}
                    className="flex-1 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl text-sm transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={saving}
                    className="flex-1 py-3 bg-accent hover:bg-accent-dark text-white font-bold rounded-xl text-sm transition-colors disabled:opacity-50"
                  >
                    {saving ? 'Updating...' : 'Save Changes'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;
