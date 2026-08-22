import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import QRCodeStyling from 'qr-code-styling';
import { useAuth } from './context/AuthContext';
import {
  getUserDynamicLinks,
  updateDynamicLink,
  deleteDynamicLink,
  DynamicLink
} from './services/dynamicQrService';
import { FramedQrView, buildFramedSvg, renderFramedCanvas, FrameStyle } from './components/FramedQrView';

// Custom QR Thumbnail / Preview Renderer preserving full styling, colors, dot styles, logos, and custom frames
const DynamicQrThumbnail: React.FC<{ link: DynamicLink; isModal?: boolean; className?: string }> = ({ link, isModal = false, className = '' }) => {
  const qrUrl = `https://qr-generator.online/r/${link.short_code}`;
  const style = link.qr_style || {};

  return (
    <div className={`w-full flex items-center justify-center overflow-hidden select-none ${isModal ? 'h-[230px] max-h-[240px]' : 'h-12 w-12'} ${className}`}>
      <FramedQrView
        frame={style.frame || 'none'}
        text={style.frameText || 'SCAN ME'}
        frameColor={style.frameColor || style.fgColor || '#0F172A'}
        frameTextColor={style.frameTextColor || '#ffffff'}
        fgColor={style.fgColor || '#000000'}
        bgColor={style.bgColor || '#ffffff'}
        cornerSquareColor={style.cornerSquareColor || style.fgColor || '#000000'}
        cornerDotColor={style.cornerDotColor || style.fgColor || '#000000'}
        dotStyle={style.dotStyle || 'square'}
        cornerSquareStyle={style.cornerSquareStyle || 'square'}
        cornerDotStyle={style.cornerDotStyle || 'square'}
        logoSrc={style.logoSrc || null}
        link={qrUrl}
        isThumbnail={!isModal}
      />
    </div>
  );
};

const DashboardPage: React.FC = () => {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();

  const [links, setLinks] = useState<DynamicLink[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'active' | 'paused'>('all');
  const [editingLink, setEditingLink] = useState<DynamicLink | null>(null);
  const [newTargetUrl, setNewTargetUrl] = useState('');
  const [newTitle, setNewTitle] = useState('');
  const [saving, setSaving] = useState(false);
  const [copySuccess, setCopySuccess] = useState<string | null>(null);
  const [previewQrLink, setPreviewQrLink] = useState<DynamicLink | null>(null);

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
    if (!window.confirm('Are you sure you want to archive this dynamic QR code? All tracking metrics will be permanently deleted.')) {
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

  // Download QR Code with full custom design, frame & logo
  const handleDownload = async (link: DynamicLink, format: 'png' | 'svg') => {
    const qrUrl = `https://qr-generator.online/r/${link.short_code}`;
    const style = link.qr_style || {};
    const namePrefix = `dynamic_qr_${link.short_code}`;

    const qr = new QRCodeStyling({
      width: 1200,
      height: 1200,
      data: qrUrl,
      margin: 12,
      dotsOptions: {
        color: style.fgColor || '#0F172A',
        type: (style.dotStyle as any) || 'rounded',
      },
      backgroundOptions: {
        color: style.bgColor || '#ffffff',
      },
      cornersSquareOptions: {
        color: style.cornerSquareColor || style.fgColor || '#0F172A',
        type: (style.cornerSquareStyle as any) || 'extra-rounded',
      },
      cornersDotOptions: {
        color: style.cornerDotColor || style.fgColor || '#2B6F53',
        type: (style.cornerDotStyle as any) || 'dot',
      },
      image: style.logoSrc || undefined,
      imageOptions: {
        crossOrigin: 'anonymous',
        margin: 6,
        imageSize: 0.35,
        hideBackgroundDots: true,
      },
      qrOptions: {
        errorCorrectionLevel: 'H',
      },
      type: format === 'svg' ? 'svg' : 'canvas',
    });

    const frame = (style.frame || 'none') as FrameStyle;
    if (frame === 'none') {
      qr.download({ name: namePrefix, extension: format });
      return;
    }

    try {
      if (format === 'svg') {
        const rawSvgBlob = (await qr.getRawData('svg')) as Blob | null;
        if (!rawSvgBlob) {
          qr.download({ name: namePrefix, extension: 'svg' });
          return;
        }
        const rawSvgText = await rawSvgBlob.text();
        const framedSvg = buildFramedSvg(
          rawSvgText,
          frame,
          style.frameText || 'SCAN ME',
          style.fgColor || '#2B6F53',
          style.bgColor || '#ffffff',
          style.cornerSquareColor || style.fgColor || '#0F172A',
          style.frameColor || style.fgColor || '#0F172A',
          style.frameTextColor || '#ffffff'
        );
        const svgBlob = new Blob([framedSvg], { type: 'image/svg+xml;charset=utf-8' });
        const url = URL.createObjectURL(svgBlob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${namePrefix}-framed.svg`;
        a.click();
        URL.revokeObjectURL(url);
        return;
      }

      const rawBlob = (await qr.getRawData('png')) as Blob | null;
      if (!rawBlob) {
        qr.download({ name: namePrefix, extension: format });
        return;
      }

      const canvas = await renderFramedCanvas(
        rawBlob,
        frame,
        style.frameText || 'SCAN ME',
        style.fgColor || '#2B6F53',
        style.bgColor || '#ffffff',
        style.cornerSquareColor || style.fgColor || '#0F172A',
        style.frameColor || style.fgColor || '#0F172A',
        style.frameTextColor || '#ffffff'
      );
      
      canvas.toBlob((blob) => {
        if (!blob) {
          qr.download({ name: namePrefix, extension: format });
          return;
        }
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${namePrefix}-framed.${format}`;
        a.click();
        URL.revokeObjectURL(url);
      }, 'image/png', 0.95);
    } catch {
      qr.download({ name: namePrefix, extension: format });
    }
  };

  const totalScans = links.reduce((acc, l) => acc + (l.total_clicks || 0), 0);
  const activeCount = links.filter(l => l.is_active !== false).length;
  const pausedCount = links.filter(l => l.is_active === false).length;

  const filteredLinks = links
    .filter(l => {
      if (statusFilter === 'active') return l.is_active !== false;
      if (statusFilter === 'paused') return l.is_active === false;
      return true;
    })
    .filter(l =>
      (l.title?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
      l.short_code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      l.target_url.toLowerCase().includes(searchTerm.toLowerCase())
    );

  if (authLoading || (user && loading)) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center p-4">
        <div className="w-8 h-8 border-2 border-slate-200 border-t-accent rounded-full animate-spin mb-3" />
        <p className="text-xs font-semibold text-slate-500">Loading My QR Codes...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
              My QR Codes
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Manage editable QR codes, update destination URLs in real time, and monitor live scan performance.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-accent hover:bg-accent-dark text-white text-xs font-semibold rounded-xl shadow-xs transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" />
              </svg>
              Create New Dynamic QR
            </Link>
          </div>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs">
            <div className="flex items-center justify-between text-slate-500 text-xs font-semibold uppercase tracking-wider mb-2">
              <span>Dynamic Codes</span>
              <div className="w-7 h-7 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
              </div>
            </div>
            <p className="text-3xl font-black text-slate-900">{links.length}</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs">
            <div className="flex items-center justify-between text-slate-500 text-xs font-semibold uppercase tracking-wider mb-2">
              <span>Lifetime Scans</span>
              <div className="w-7 h-7 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
            </div>
            <p className="text-3xl font-black text-emerald-600">{totalScans.toLocaleString()}</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs">
            <div className="flex items-center justify-between text-slate-500 text-xs font-semibold uppercase tracking-wider mb-2">
              <span>Active Codes</span>
              <div className="w-7 h-7 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <p className="text-3xl font-black text-blue-600">{activeCount}</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs">
            <div className="flex items-center justify-between text-slate-500 text-xs font-semibold uppercase tracking-wider mb-2">
              <span>Subscription Plan</span>
              <div className="w-7 h-7 bg-amber-50 text-amber-600 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
            </div>
            <p className="text-lg font-bold text-slate-900">Free Lifetime</p>
            <span className="text-[11px] text-emerald-600 font-medium">Unlimited Scans & Live Edits</span>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <svg className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search dynamic QR codes by title, slug, or URL..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-accent focus:bg-white transition-all"
            />
          </div>

          {/* Status Tabs */}
          <div className="inline-flex p-1 bg-slate-100 rounded-xl shrink-0">
            <button
              onClick={() => setStatusFilter('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                statusFilter === 'all' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              All ({links.length})
            </button>
            <button
              onClick={() => setStatusFilter('active')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                statusFilter === 'active' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              Active ({activeCount})
            </button>
            <button
              onClick={() => setStatusFilter('paused')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                statusFilter === 'paused' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              Paused ({pausedCount})
            </button>
          </div>
        </div>

        {/* QR Code Cards List */}
        {loading ? (
          <div className="bg-white rounded-2xl p-12 border border-slate-200/80 text-center">
            <div className="w-8 h-8 border-2 border-slate-200 border-t-accent rounded-full animate-spin mx-auto mb-3" />
            <p className="text-xs font-medium text-slate-500">Loading your campaigns...</p>
          </div>
        ) : filteredLinks.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 border border-dashed border-slate-300 text-center">
            <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mx-auto mb-3 text-slate-400">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
              </svg>
            </div>
            <h3 className="text-sm font-bold text-slate-900 mb-1">
              {links.length === 0 ? 'No Dynamic QR Codes Yet' : 'No Matching QR Codes Found'}
            </h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto mb-5 leading-relaxed">
              {links.length === 0
                ? 'Create your first dynamic QR code to change destination links anytime with zero reprinting.'
                : 'Try adjusting your search query or status filter.'}
            </p>
            {links.length === 0 && (
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-white font-semibold rounded-xl text-xs shadow-xs hover:bg-accent-dark transition-colors"
              >
                Create Dynamic QR Code
              </Link>
            )}
          </div>
        ) : (
          <div className="space-y-3">
            {filteredLinks.map(link => (
              <div
                key={link.id}
                className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs hover:border-slate-300 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                {/* Left: Thumbnail & Details */}
                <div className="flex items-start sm:items-center gap-4 min-w-0 flex-1">
                  <button
                    onClick={() => setPreviewQrLink(link)}
                    className="w-14 h-14 shrink-0 bg-white hover:bg-slate-50 rounded-xl p-1 border border-slate-200 flex items-center justify-center transition-all group shadow-2xs hover:shadow-xs"
                    title="Click to preview custom QR design"
                  >
                    <DynamicQrThumbnail link={link} />
                  </button>
                  
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <h3 className="font-bold text-slate-900 text-sm truncate">
                        {link.title || `Campaign: ${link.short_code}`}
                      </h3>
                      <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                        link.is_active !== false ? 'bg-emerald-50 text-emerald-700 border border-emerald-200/50' : 'bg-slate-100 text-slate-600 border border-slate-200'
                      }`}>
                        <span className={`w-1 h-1 rounded-full ${link.is_active !== false ? 'bg-emerald-500' : 'bg-slate-400'}`} />
                        {link.is_active !== false ? 'Active' : 'Paused'}
                      </span>
                    </div>

                    {/* Short link */}
                    <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-1">
                      <span className="text-accent font-semibold">https://qr-generator.online/r/{link.short_code}</span>
                      <button
                        onClick={() => handleCopyLink(link.short_code)}
                        className="text-slate-400 hover:text-accent font-sans text-xs transition-colors"
                      >
                        {copySuccess === link.short_code ? '✓ Copied' : 'Copy'}
                      </button>
                    </div>

                    {/* Target destination */}
                    <p className="text-xs text-slate-400 truncate flex items-center gap-1">
                      <span>↳ Target:</span>
                      <span className="text-slate-700 font-medium truncate">{link.target_url}</span>
                    </p>
                  </div>
                </div>

                {/* Middle: Scan Count */}
                <div className="flex md:flex-col items-center md:items-end justify-between md:justify-center border-t md:border-t-0 pt-3 md:pt-0 border-slate-100 shrink-0">
                  <span className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Lifetime Scans</span>
                  <span className="text-2xl font-black text-slate-900">
                    {(link.total_clicks || 0).toLocaleString()}
                  </span>
                </div>

                {/* Right: Actions */}
                <div className="flex items-center gap-1.5 border-t md:border-t-0 pt-3 md:pt-0 border-slate-100 shrink-0 flex-wrap">
                  <Link
                    to={`/analytics/${link.id}`}
                    className="px-3 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-xl transition-colors flex items-center gap-1.5"
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
                    className="px-3 py-2 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-semibold rounded-xl border border-slate-200 transition-colors flex items-center gap-1"
                  >
                    <svg className="w-3.5 h-3.5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                    Edit URL
                  </button>

                  <div className="relative group">
                    <button className="px-3 py-2 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-semibold rounded-xl border border-slate-200 transition-colors flex items-center gap-1">
                      <svg className="w-3.5 h-3.5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download
                    </button>
                    <div className="absolute right-0 top-full mt-1 bg-white rounded-xl shadow-lg border border-slate-200 p-1 hidden group-hover:block z-10 w-28">
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
                    className={`p-2 rounded-xl text-xs border transition-colors ${
                      link.is_active !== false
                        ? 'bg-slate-50 border-slate-200 text-slate-600 hover:text-amber-600'
                        : 'bg-emerald-50 border-emerald-200 text-emerald-700 hover:bg-emerald-100'
                    }`}
                    title={link.is_active !== false ? 'Pause QR Code' : 'Activate QR Code'}
                  >
                    {link.is_active !== false ? (
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ) : (
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                  </button>

                  <button
                    onClick={() => handleDelete(link.id)}
                    className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-colors text-xs"
                    title="Archive QR Code"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Edit Destination Modal */}
        {editingLink && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
            <div className="bg-white rounded-2xl p-6 sm:p-7 max-w-lg w-full shadow-xl border border-slate-200">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h3 className="text-base font-bold text-slate-900">Edit Destination URL</h3>
                  <p className="text-xs text-slate-400">Printed QR codes will immediately redirect to the new URL</p>
                </div>
                <button
                  onClick={() => setEditingLink(null)}
                  className="text-slate-400 hover:text-slate-600 p-1 rounded-lg"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleUpdate} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Campaign Title</label>
                  <input
                    type="text"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder="e.g. Restaurant Summer Menu"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-accent focus:bg-white outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    New Target Destination Link
                  </label>
                  <input
                    type="url"
                    required
                    value={newTargetUrl}
                    onChange={(e) => setNewTargetUrl(e.target.value)}
                    placeholder="https://yourwebsite.com/new-page"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-accent focus:bg-white outline-none font-mono transition-all"
                  />
                  <span className="text-[11px] text-emerald-600 font-medium block mt-1.5">
                    ✓ Instant change with zero reprinting required.
                  </span>
                </div>

                <div className="flex gap-2.5 pt-3">
                  <button
                    type="button"
                    onClick={() => setEditingLink(null)}
                    className="flex-1 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl text-xs transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={saving}
                    className="flex-1 py-2.5 bg-accent hover:bg-accent-dark text-white font-semibold rounded-xl text-xs transition-colors disabled:opacity-50"
                  >
                    {saving ? 'Updating...' : 'Save Changes'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* QR Zoom / Preview Modal */}
        {previewQrLink && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
            <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-xl border border-slate-200 text-center">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold text-slate-900 truncate max-w-[220px]">
                  {previewQrLink.title || previewQrLink.short_code}
                </h3>
                <button
                  onClick={() => setPreviewQrLink(null)}
                  className="text-slate-400 hover:text-slate-600 p-1 rounded-lg"
                >
                  ✕
                </button>
              </div>

              <div className="p-4 bg-white border border-slate-200 rounded-2xl mb-4 flex items-center justify-center shadow-xs">
                <DynamicQrThumbnail link={previewQrLink} isModal={true} />
              </div>

              <p className="text-xs text-slate-400 font-mono mb-4 truncate">
                https://qr-generator.online/r/{previewQrLink.short_code}
              </p>

              <div className="flex gap-2">
                <button
                  onClick={() => handleDownload(previewQrLink, 'png')}
                  className="flex-1 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl transition-colors"
                >
                  Download PNG
                </button>
                <button
                  onClick={() => handleDownload(previewQrLink, 'svg')}
                  className="flex-1 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl transition-colors"
                >
                  Download SVG
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;
