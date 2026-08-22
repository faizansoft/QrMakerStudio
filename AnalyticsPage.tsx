import React, { useEffect, useState, useMemo, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import QRCodeStyling from 'qr-code-styling';
import { useAuth } from './context/AuthContext';
import {
  getDynamicLinkById,
  getLinkAnalytics,
  DynamicLink,
  AnalyticsSummary
} from './services/dynamicQrService';

// Custom QR Thumbnail Renderer preserving full styling, colors, dot styles, and logos
const DynamicQrThumbnail: React.FC<{ link: DynamicLink; size?: number; className?: string }> = ({ link, size = 64, className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.innerHTML = '';

    const qrUrl = `https://qr-generator.online/r/${link.short_code}`;
    const style = link.qr_style || {};

    const qr = new QRCodeStyling({
      width: size,
      height: size,
      data: qrUrl,
      margin: size > 100 ? 8 : 2,
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
        margin: size > 100 ? 4 : 1,
        imageSize: 0.35,
        hideBackgroundDots: true,
      },
      qrOptions: {
        errorCorrectionLevel: 'H',
      },
      type: 'svg',
    });

    qr.append(containerRef.current);
  }, [link, size]);

  return <div ref={containerRef} className={`flex items-center justify-center overflow-hidden ${className}`} />;
};

const AnalyticsPage: React.FC = () => {
  const { linkId } = useParams<{ linkId: string }>();
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();

  const [link, setLink] = useState<DynamicLink | null>(null);
  const [analytics, setAnalytics] = useState<AnalyticsSummary | null>(null);
  const [loading, setLoading] = useState(true);
  const [timeRange, setTimeRange] = useState<'7d' | '30d' | 'all'>('30d');
  const [copySuccess, setCopySuccess] = useState(false);
  const [showQrModal, setShowQrModal] = useState(false);

  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/login');
    }
  }, [user, authLoading, navigate]);

  const loadData = async () => {
    if (!linkId) return;
    setLoading(true);
    const linkRes = await getDynamicLinkById(linkId);

    if (linkRes.data) {
      setLink(linkRes.data);
      const analyticsRes = await getLinkAnalytics(linkRes.data.id);
      if (analyticsRes.data) setAnalytics(analyticsRes.data);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (user && linkId) {
      loadData();
    }
  }, [user, linkId]);

  const handleCopyLink = () => {
    if (!link) return;
    navigator.clipboard.writeText(`https://qr-generator.online/r/${link.short_code}`);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  // Filtered timeline based on selected time range
  const filteredTimeline = useMemo(() => {
    if (!analytics) return [];
    if (timeRange === '7d') return analytics.timeline.slice(-7);
    if (timeRange === '30d') return analytics.timeline.slice(-30);
    return analytics.timeline;
  }, [analytics, timeRange]);

  // Calculate Peak Scanning Hours (24-hour distribution)
  const hourlyDistribution = useMemo(() => {
    if (!analytics || !analytics.recentScans) return [];
    const hours = Array.from({ length: 24 }, (_, i) => ({ hour: i, count: 0 }));
    analytics.recentScans.forEach(scan => {
      const date = new Date(scan.ts || scan.created_at);
      const hour = date.getHours();
      if (!isNaN(hour) && hours[hour]) {
        hours[hour].count += 1;
      }
    });
    const maxHour = Math.max(...hours.map(h => h.count), 1);
    return hours.map(h => ({
      ...h,
      percentage: Math.round((h.count / maxHour) * 100),
      label: `${h.hour.toString().padStart(2, '0')}:00`,
    }));
  }, [analytics]);

  // Export to CSV
  const handleExportCSV = () => {
    if (!analytics || !link) return;

    const headers = ['Timestamp', 'Device', 'OS', 'Browser', 'Country', 'City', 'Referrer'];
    const rows = analytics.recentScans.map(scan => [
      scan.ts || scan.created_at || '',
      scan.device || 'Desktop',
      scan.os || 'Unknown',
      scan.browser || 'Unknown',
      scan.country || 'Unknown',
      scan.city || 'Unknown',
      scan.referrer || 'Direct Scan',
    ]);

    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `qr_analytics_${link.short_code}_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Export to JSON
  const handleExportJSON = () => {
    if (!analytics || !link) return;
    const jsonStr = JSON.stringify({ link, analytics }, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `qr_analytics_${link.short_code}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-4">
        <div className="text-center">
          <div className="w-9 h-9 border-2 border-slate-200 border-t-accent rounded-full animate-spin mx-auto mb-3" />
          <p className="text-xs font-semibold text-slate-500 tracking-wide">Loading scan intelligence...</p>
        </div>
      </div>
    );
  }

  if (!link || !analytics) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs max-w-md w-full text-center">
          <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mx-auto mb-3 text-slate-400">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h2 className="text-lg font-bold text-slate-900 mb-1">QR Code Not Found</h2>
          <p className="text-xs text-slate-500 mb-5 leading-relaxed">
            This dynamic QR code may have been archived or belongs to another workspace.
          </p>
          <Link
            to="/dashboard"
            className="inline-flex items-center justify-center px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs rounded-xl transition-colors"
          >
            Return to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  const handleDownload = (format: 'png' | 'svg') => {
    if (!link) return;
    const qrUrl = `https://qr-generator.online/r/${link.short_code}`;
    const style = link.qr_style || {};
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

    qr.download({ name: `dynamic_qr_${link.short_code}`, extension: format });
  };

  const maxTimelineScans = Math.max(...filteredTimeline.map(t => t.scans), 1);

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Top Header Card */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
          <div className="flex items-start sm:items-center gap-4 min-w-0">
            {/* Custom Design QR Thumbnail */}
            <button
              onClick={() => setShowQrModal(true)}
              className="w-16 h-16 shrink-0 bg-white hover:bg-slate-50 rounded-2xl p-1.5 border border-slate-200 flex items-center justify-center transition-all group shadow-2xs hover:shadow-xs"
              title="Click to zoom custom QR design"
            >
              <DynamicQrThumbnail link={link} size={54} />
            </button>

            <div className="min-w-0">
              <div className="flex items-center gap-2 mb-1.5">
                <Link
                  to="/dashboard"
                  className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-900 font-medium transition-colors"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                  My QR Codes
                </Link>
                <span className="text-slate-300">/</span>
                <span className="text-xs text-slate-700 font-semibold truncate max-w-[200px]">
                  {link.title || link.short_code}
                </span>
              </div>

              <div className="flex items-center gap-3 flex-wrap">
                <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
                  {link.title || `Campaign: ${link.short_code}`}
                </h1>
                <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                  link.is_active !== false ? 'bg-emerald-50 text-emerald-700 border border-emerald-200/60' : 'bg-slate-100 text-slate-600 border border-slate-200'
                }`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${link.is_active !== false ? 'bg-emerald-500 animate-pulse' : 'bg-slate-400'}`} />
                  {link.is_active !== false ? 'Live & Tracking' : 'Paused'}
                </span>
              </div>

              <div className="flex items-center gap-2 mt-2 text-xs text-slate-500 font-mono flex-wrap">
                <span>https://qr-generator.online/r/{link.short_code}</span>
                <button
                  onClick={handleCopyLink}
                  className="text-slate-400 hover:text-accent font-sans text-xs transition-colors"
                >
                  {copySuccess ? '✓ Copied' : 'Copy link'}
                </button>
                <span className="text-slate-300 font-sans">•</span>
                <span className="font-sans text-slate-400 truncate max-w-sm">
                  Target: <span className="text-slate-700 font-medium">{link.target_url}</span>
                </span>
              </div>
            </div>
          </div>

          {/* Action Bar */}
          <div className="flex items-center gap-2 shrink-0 flex-wrap">
            <button
              onClick={handleExportCSV}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-semibold rounded-xl border border-slate-200 transition-colors"
            >
              <svg className="w-3.5 h-3.5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Export CSV
            </button>
            <button
              onClick={handleExportJSON}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-semibold rounded-xl border border-slate-200 transition-colors"
            >
              <svg className="w-3.5 h-3.5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              JSON
            </button>
            <button
              onClick={loadData}
              className="p-2 bg-slate-50 hover:bg-slate-100 text-slate-600 rounded-xl border border-slate-200 transition-colors"
              title="Refresh Data"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </button>
          </div>
        </div>

        {/* 1. Primary KPI Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs">
            <div className="flex items-center justify-between text-slate-500 text-xs font-semibold uppercase tracking-wider mb-2">
              <span>Total Scans</span>
              <div className="w-7 h-7 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
            </div>
            <p className="text-3xl font-black text-slate-900">{analytics.totalScans.toLocaleString()}</p>
            <p className="text-[11px] text-emerald-600 font-medium mt-1">All-time scan events</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs">
            <div className="flex items-center justify-between text-slate-500 text-xs font-semibold uppercase tracking-wider mb-2">
              <span>Unique Scanners</span>
              <div className="w-7 h-7 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            </div>
            <p className="text-3xl font-black text-slate-900">{analytics.uniqueScans.toLocaleString()}</p>
            <p className="text-[11px] text-slate-400 font-medium mt-1">Unique device footprints</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs">
            <div className="flex items-center justify-between text-slate-500 text-xs font-semibold uppercase tracking-wider mb-2">
              <span>Scans Today</span>
              <div className="w-7 h-7 bg-amber-50 text-amber-600 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <p className="text-3xl font-black text-slate-900">{analytics.scansToday.toLocaleString()}</p>
            <p className="text-[11px] text-slate-400 font-medium mt-1">{analytics.scansThisWeek} scans this week</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs">
            <div className="flex items-center justify-between text-slate-500 text-xs font-semibold uppercase tracking-wider mb-2">
              <span>Primary Geography</span>
              <div className="w-7 h-7 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <p className="text-xl font-bold text-slate-900 truncate">
              {analytics.countries[0]?.name || 'Awaiting scans'}
            </p>
            <p className="text-[11px] text-slate-400 font-medium mt-1">
              {analytics.countries[0] ? `${analytics.countries[0].percentage}% of total audience` : 'No location logged'}
            </p>
          </div>
        </div>

        {/* 2. Visualizer Row: Timeline & Hourly Peak Distribution */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Timeline Visualizer (7 Columns on large screens) */}
          <div className="lg:col-span-7 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
              <div>
                <h3 className="font-bold text-slate-900 text-sm">Scan Velocity Over Time</h3>
                <p className="text-xs text-slate-400">Daily scan distribution and unique engagement trends</p>
              </div>
              {/* Time range pills */}
              <div className="inline-flex p-1 bg-slate-100 rounded-xl shrink-0">
                <button
                  onClick={() => setTimeRange('7d')}
                  className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
                    timeRange === '7d' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  7 Days
                </button>
                <button
                  onClick={() => setTimeRange('30d')}
                  className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
                    timeRange === '30d' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  30 Days
                </button>
                <button
                  onClick={() => setTimeRange('all')}
                  className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
                    timeRange === 'all' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  All Time
                </button>
              </div>
            </div>

            {filteredTimeline.length === 0 ? (
              <div className="py-16 text-center text-slate-400 text-xs">
                No scan activity logged yet for this period.
              </div>
            ) : (
              <div className="space-y-4">
                <div className="h-44 flex items-end gap-1.5 pt-6 border-b border-slate-100 pb-2">
                  {filteredTimeline.map((point, idx) => {
                    const heightPercent = Math.max(Math.round((point.scans / maxTimelineScans) * 100), 6);
                    return (
                      <div key={idx} className="flex-1 flex flex-col items-center gap-1 group relative h-full justify-end">
                        <div className="opacity-0 group-hover:opacity-100 absolute -top-8 bg-slate-900 text-white text-[10px] font-semibold px-2 py-1 rounded shadow-md pointer-events-none transition-opacity whitespace-nowrap z-10">
                          {point.date}: {point.scans} scans ({point.unique} unique)
                        </div>
                        <div
                          style={{ height: `${heightPercent}%` }}
                          className="w-full bg-accent/80 hover:bg-accent rounded-t transition-all"
                        />
                        <span className="text-[9px] text-slate-400 truncate w-full text-center hidden sm:block">
                          {point.date.slice(5)}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* 24-Hour Peak Scanning Heatmap (5 Columns on large screens) */}
          <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-slate-900 text-sm">24-Hour Scan Distribution</h3>
              <p className="text-xs text-slate-400 mb-4">Peak hours when audience scans most frequently</p>
            </div>

            <div className="h-32 flex items-end gap-1 pt-4">
              {hourlyDistribution.map((h) => (
                <div key={h.hour} className="flex-1 flex flex-col items-center gap-1 group relative h-full justify-end">
                  <div className="opacity-0 group-hover:opacity-100 absolute -top-7 bg-slate-900 text-white text-[9px] font-semibold px-1.5 py-0.5 rounded shadow pointer-events-none transition-opacity whitespace-nowrap z-10">
                    {h.label}: {h.count} scans
                  </div>
                  <div
                    style={{ height: `${Math.max(h.percentage, 8)}%` }}
                    className={`w-full rounded-t transition-all ${
                      h.count > 0 ? 'bg-indigo-500 group-hover:bg-indigo-600' : 'bg-slate-100'
                    }`}
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-between text-[10px] text-slate-400 mt-2 font-mono">
              <span>00:00</span>
              <span>06:00</span>
              <span>12:00</span>
              <span>18:00</span>
              <span>23:00</span>
            </div>
          </div>
        </div>

        {/* 3. Audience Technology Matrix: Devices, OS & Browsers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Device Types */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm">Device Category</h3>
                <p className="text-[11px] text-slate-400">Mobile vs Desktop</p>
              </div>
            </div>
            <div className="space-y-3.5">
              {analytics.devices.length === 0 ? (
                <p className="text-xs text-slate-400 py-3 text-center">Awaiting first mobile or desktop scan.</p>
              ) : (
                analytics.devices.map((dev, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between text-xs font-medium text-slate-700 mb-1">
                      <span>{dev.name}</span>
                      <span>{dev.count} ({dev.percentage}%)</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div style={{ width: `${dev.percentage}%` }} className="h-full bg-blue-500 rounded-full" />
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Operating Systems */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm">Operating Systems</h3>
                <p className="text-[11px] text-slate-400">iOS, Android, Windows, macOS</p>
              </div>
            </div>
            <div className="space-y-3.5">
              {analytics.os.length === 0 ? (
                <p className="text-xs text-slate-400 py-3 text-center">Awaiting first scan to log OS.</p>
              ) : (
                analytics.os.map((osItem, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between text-xs font-medium text-slate-700 mb-1">
                      <span>{osItem.name}</span>
                      <span>{osItem.count} ({osItem.percentage}%)</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div style={{ width: `${osItem.percentage}%` }} className="h-full bg-emerald-500 rounded-full" />
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Browsers & In-App WebViews */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm">Browsers & Apps</h3>
                <p className="text-[11px] text-slate-400">Safari, Chrome & In-App WebViews</p>
              </div>
            </div>
            <div className="space-y-3.5">
              {analytics.browsers.length === 0 ? (
                <p className="text-xs text-slate-400 py-3 text-center">Awaiting first scan to log browser.</p>
              ) : (
                analytics.browsers.map((b, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between text-xs font-medium text-slate-700 mb-1">
                      <span>{b.name}</span>
                      <span>{b.count} ({b.percentage}%)</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div style={{ width: `${b.percentage}%` }} className="h-full bg-purple-500 rounded-full" />
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* 4. Geographic & Traffic Sources Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Geographic Breakdown */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
            <h3 className="font-bold text-slate-900 text-sm mb-1">Geographic Distribution</h3>
            <p className="text-xs text-slate-400 mb-4">Audience distribution across worldwide countries & cities</p>
            {analytics.countries.length === 0 ? (
              <p className="text-xs text-slate-400 py-6 text-center">No location data recorded yet.</p>
            ) : (
              <div className="space-y-3.5">
                {analytics.countries.map((c, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between text-xs font-medium text-slate-700 mb-1">
                      <span>{c.name}</span>
                      <span>{c.count} scans ({c.percentage}%)</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div style={{ width: `${c.percentage}%` }} className="h-full bg-accent rounded-full" />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Traffic Mediums & Referrers */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
            <h3 className="font-bold text-slate-900 text-sm mb-1">Traffic Mediums & Referrers</h3>
            <p className="text-xs text-slate-400 mb-4">Direct camera scans vs in-app app referrals</p>
            {analytics.referrers.length === 0 ? (
              <p className="text-xs text-slate-400 py-6 text-center">No referrer data recorded yet.</p>
            ) : (
              <div className="space-y-3">
                {analytics.referrers.map((ref, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs">
                    <span className="font-medium text-slate-700 truncate max-w-xs">{ref.source}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-slate-400">{ref.count} scans</span>
                      <span className="font-semibold text-slate-900 w-10 text-right">{ref.percentage}%</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* 5. Real-Time Live Activity Stream */}
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
          <div className="p-5 border-b border-slate-100 flex items-center justify-between">
            <div>
              <h3 className="font-bold text-slate-900 text-sm">Real-Time Scan Activity Log</h3>
              <p className="text-xs text-slate-400">Sequential record of recent scan interactions</p>
            </div>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/50">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Live Stream ({analytics.recentScans.length})
            </span>
          </div>

          {analytics.recentScans.length === 0 ? (
            <div className="p-12 text-center text-slate-400 text-xs">
              No scan events recorded yet. Scan your dynamic QR code to see live interactions appear here!
            </div>
          ) : (
            <div className="divide-y divide-slate-100 max-h-[480px] overflow-y-auto">
              {analytics.recentScans.map((scan, idx) => (
                <div key={idx} className="p-4 flex items-center justify-between gap-4 hover:bg-slate-50/60 transition-colors text-xs">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-500 flex items-center justify-center shrink-0">
                      {scan.device === 'Mobile' ? (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      ) : (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      )}
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-slate-900 truncate">
                        {scan.country !== 'Unknown' ? `${scan.city ? `${scan.city}, ` : ''}${scan.country}` : 'Direct Scan'}
                      </p>
                      <p className="text-[11px] text-slate-400 truncate">
                        {scan.browser} on {scan.os} • {scan.referrer || 'Direct Camera Scan'}
                      </p>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="font-mono text-slate-600 block">
                      {new Date(scan.ts || scan.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                    <span className="text-[10px] text-slate-400 block">
                      {new Date(scan.ts || scan.created_at).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Custom Design QR Zoom / Download Modal */}
        {showQrModal && link && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
            <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl border border-slate-200 text-center">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold text-slate-900 truncate max-w-[220px]">
                  {link.title || link.short_code}
                </h3>
                <button
                  onClick={() => setShowQrModal(false)}
                  className="text-slate-400 hover:text-slate-600 p-1 rounded-lg"
                >
                  ✕
                </button>
              </div>

              <div className="p-6 bg-white border border-slate-200 rounded-2xl mb-4 flex items-center justify-center shadow-xs">
                <DynamicQrThumbnail link={link} size={220} />
              </div>

              <p className="text-xs text-slate-400 font-mono mb-4 truncate">
                https://qr-generator.online/r/{link.short_code}
              </p>

              <div className="flex gap-2">
                <button
                  onClick={() => handleDownload('png')}
                  className="flex-1 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl transition-colors shadow-xs"
                >
                  Download PNG
                </button>
                <button
                  onClick={() => handleDownload('svg')}
                  className="flex-1 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl transition-colors"
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

export default AnalyticsPage;
