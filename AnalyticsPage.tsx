import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import {
  getDynamicLinkById,
  getLinkAnalytics,
  DynamicLink,
  AnalyticsSummary
} from './services/dynamicQrService';

const AnalyticsPage: React.FC = () => {
  const { linkId } = useParams<{ linkId: string }>();
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();

  const [link, setLink] = useState<DynamicLink | null>(null);
  const [analytics, setAnalytics] = useState<AnalyticsSummary | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'overview' | 'devices' | 'geo' | 'stream'>('overview');

  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/login');
    }
  }, [user, authLoading, navigate]);

  const loadData = async () => {
    if (!linkId) return;
    setLoading(true);
    const [linkRes, analyticsRes] = await Promise.all([
      getDynamicLinkById(linkId),
      getLinkAnalytics(linkId),
    ]);

    if (linkRes.data) setLink(linkRes.data);
    if (analyticsRes.data) setAnalytics(analyticsRes.data);
    setLoading(false);
  };

  useEffect(() => {
    if (user && linkId) {
      loadData();
    }
  }, [user, linkId]);

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
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-accent/20 border-t-accent rounded-full animate-spin mx-auto mb-3" />
          <p className="text-sm font-medium text-slate-500">Loading real-time scan intelligence...</p>
        </div>
      </div>
    );
  }

  if (!link || !analytics) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm max-w-md w-full text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-2">QR Code Not Found</h2>
          <p className="text-sm text-slate-500 mb-6">This dynamic QR code may have been removed or you do not have permission to view its analytics.</p>
          <Link to="/dashboard" className="px-5 py-2.5 bg-accent text-white font-bold rounded-xl text-sm">
            Back to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  const maxTimelineScans = Math.max(...analytics.timeline.map(t => t.scans), 1);

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Breadcrumb & Actions */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <Link to="/dashboard" className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-accent font-semibold mb-2">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
              Back to Dynamic QR Studio
            </Link>
            <div className="flex items-center gap-3 flex-wrap">
              <h1 className="text-3xl font-black text-gray-900 tracking-tight">
                {link.title || `QR Analytics - ${link.short_code}`}
              </h1>
              <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                link.is_active !== false ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-600'
              }`}>
                {link.is_active !== false ? 'Live & Tracking' : 'Paused'}
              </span>
            </div>
            <p className="text-xs text-slate-500 font-mono mt-1">
              Short Link: <span className="text-accent font-semibold">https://qr-generator.online/r/{link.short_code}</span> → {link.target_url}
            </p>
          </div>

          {/* Export Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleExportCSV}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold rounded-xl border border-slate-200 shadow-sm transition-colors"
            >
              <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Export CSV
            </button>
            <button
              onClick={handleExportJSON}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold rounded-xl border border-slate-200 shadow-sm transition-colors"
            >
              Export JSON
            </button>
            <button
              onClick={loadData}
              className="p-2 bg-white hover:bg-slate-50 text-slate-600 rounded-xl border border-slate-200 shadow-sm transition-colors"
              title="Refresh Data"
            >
              🔄
            </button>
          </div>
        </div>

        {/* Top Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">
              <span>Total Scans</span>
              <span className="text-base">📊</span>
            </div>
            <p className="text-3xl font-black text-gray-900">{analytics.totalScans.toLocaleString()}</p>
            <p className="text-[11px] text-emerald-600 font-semibold mt-1">All-time scan events</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">
              <span>Unique Scanners</span>
              <span className="text-base">👤</span>
            </div>
            <p className="text-3xl font-black text-indigo-600">{analytics.uniqueScans.toLocaleString()}</p>
            <p className="text-[11px] text-slate-400 font-medium mt-1">Unique device footprints</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">
              <span>Scans Today</span>
              <span className="text-base">⚡</span>
            </div>
            <p className="text-3xl font-black text-amber-600">{analytics.scansToday.toLocaleString()}</p>
            <p className="text-[11px] text-slate-400 font-medium mt-1">{analytics.scansThisWeek} scans this week</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">
              <span>Top Country</span>
              <span className="text-base">🌍</span>
            </div>
            <p className="text-xl font-bold text-gray-900 truncate">
              {analytics.countries[0]?.name || 'No data yet'}
            </p>
            <p className="text-[11px] text-slate-400 font-medium mt-1">
              {analytics.countries[0] ? `${analytics.countries[0].percentage}% of total scans` : 'Awaiting first scan'}
            </p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 mb-8 gap-6">
          <button
            onClick={() => setActiveTab('overview')}
            className={`pb-3 text-sm font-bold border-b-2 transition-all ${
              activeTab === 'overview' ? 'border-accent text-accent' : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            📈 Scan Timeline & Trends
          </button>
          <button
            onClick={() => setActiveTab('devices')}
            className={`pb-3 text-sm font-bold border-b-2 transition-all ${
              activeTab === 'devices' ? 'border-accent text-accent' : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            📱 Devices, OS & Browsers
          </button>
          <button
            onClick={() => setActiveTab('geo')}
            className={`pb-3 text-sm font-bold border-b-2 transition-all ${
              activeTab === 'geo' ? 'border-accent text-accent' : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            🌍 Geographic Intelligence
          </button>
          <button
            onClick={() => setActiveTab('stream')}
            className={`pb-3 text-sm font-bold border-b-2 transition-all ${
              activeTab === 'stream' ? 'border-accent text-accent' : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            🔴 Live Scan Activity Log ({analytics.recentScans.length})
          </button>
        </div>

        {/* Tab 1: Overview & Timeline */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Scan Velocity (Last 30 Days)</h3>
                  <p className="text-xs text-slate-400">Daily scan activity & unique audience engagement</p>
                </div>
              </div>

              {analytics.timeline.length === 0 ? (
                <div className="py-16 text-center text-slate-400 text-sm">
                  No scan data recorded yet. Scan your dynamic QR code to see live analytics!
                </div>
              ) : (
                <div className="space-y-4">
                  {/* Visual Bar Chart */}
                  <div className="h-48 flex items-end gap-2 pt-8">
                    {analytics.timeline.map((point, idx) => {
                      const heightPercent = Math.max(Math.round((point.scans / maxTimelineScans) * 100), 8);
                      return (
                        <div key={idx} className="flex-1 flex flex-col items-center gap-1 group relative">
                          <div className="opacity-0 group-hover:opacity-100 absolute -top-8 bg-slate-900 text-white text-[10px] font-bold px-2 py-1 rounded shadow pointer-events-none transition-opacity whitespace-nowrap z-10">
                            {point.date}: {point.scans} scans ({point.unique} unique)
                          </div>
                          <div
                            style={{ height: `${heightPercent}%` }}
                            className="w-full bg-accent hover:bg-accent-dark rounded-t transition-all"
                          />
                          <span className="text-[9px] text-slate-400 truncate w-full text-center">
                            {point.date.slice(5)}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Referrers & Top Sources */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
                <h3 className="font-bold text-gray-900 text-base mb-4">Traffic Sources & Referrers</h3>
                {analytics.referrers.length === 0 ? (
                  <p className="text-xs text-slate-400">No referrer data available.</p>
                ) : (
                  <div className="space-y-3">
                    {analytics.referrers.map((ref, idx) => (
                      <div key={idx} className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-slate-700 truncate max-w-xs">{ref.source}</span>
                        <div className="flex items-center gap-3">
                          <span className="text-slate-400">{ref.count} scans</span>
                          <span className="font-bold text-gray-900 w-10 text-right">{ref.percentage}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
                <h3 className="font-bold text-gray-900 text-base mb-4">Top Devices & Platforms</h3>
                <div className="space-y-3">
                  {analytics.devices.map((dev, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                        <span>{dev.name}</span>
                        <span>{dev.count} ({dev.percentage}%)</span>
                      </div>
                      <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div style={{ width: `${dev.percentage}%` }} className="h-full bg-indigo-500 rounded-full" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Devices, OS & Browsers */}
        {activeTab === 'devices' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Device Types */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-gray-900 text-base mb-4">📱 Device Breakdown</h3>
              <div className="space-y-4">
                {analytics.devices.map((dev, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                      <span>{dev.name}</span>
                      <span>{dev.count} ({dev.percentage}%)</span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div style={{ width: `${dev.percentage}%` }} className="h-full bg-blue-500 rounded-full" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Operating Systems */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-gray-900 text-base mb-4">💻 Operating Systems</h3>
              <div className="space-y-4">
                {analytics.os.map((osItem, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                      <span>{osItem.name}</span>
                      <span>{osItem.count} ({osItem.percentage}%)</span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div style={{ width: `${osItem.percentage}%` }} className="h-full bg-emerald-500 rounded-full" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Browsers & In-App WebViews */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-gray-900 text-base mb-4">🌐 Browsers & In-App Apps</h3>
              <div className="space-y-4">
                {analytics.browsers.map((b, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                      <span>{b.name}</span>
                      <span>{b.count} ({b.percentage}%)</span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div style={{ width: `${b.percentage}%` }} className="h-full bg-purple-500 rounded-full" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Geographic Intelligence */}
        {activeTab === 'geo' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Top Countries */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-gray-900 text-base mb-4">🌍 Top Countries</h3>
              {analytics.countries.length === 0 ? (
                <p className="text-xs text-slate-400">No country data recorded yet.</p>
              ) : (
                <div className="space-y-3">
                  {analytics.countries.map((c, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                        <span>{c.name}</span>
                        <span>{c.count} scans ({c.percentage}%)</span>
                      </div>
                      <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div style={{ width: `${c.percentage}%` }} className="h-full bg-accent rounded-full" />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Top Cities */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-gray-900 text-base mb-4">🏙️ Top Cities</h3>
              {analytics.cities.length === 0 ? (
                <p className="text-xs text-slate-400">No city data recorded yet.</p>
              ) : (
                <div className="space-y-3">
                  {analytics.cities.map((city, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                        <span>{city.name}</span>
                        <span>{city.count} scans ({city.percentage}%)</span>
                      </div>
                      <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div style={{ width: `${city.percentage}%` }} className="h-full bg-amber-500 rounded-full" />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Tab 4: Live Scan Activity Log */}
        {activeTab === 'stream' && (
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-gray-900 text-base">Live Scan Stream</h3>
                <p className="text-xs text-slate-400">Showing recent real-time scan interactions</p>
              </div>
              <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Live Feed
              </span>
            </div>

            {analytics.recentScans.length === 0 ? (
              <div className="p-12 text-center text-slate-400 text-sm">
                No scan events recorded yet.
              </div>
            ) : (
              <div className="divide-y divide-slate-100 max-h-[500px] overflow-y-auto">
                {analytics.recentScans.map((scan, idx) => (
                  <div key={idx} className="p-4 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors text-xs">
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="p-2 bg-slate-100 rounded-xl text-base">
                        {scan.device === 'Mobile' ? '📱' : scan.device === 'Tablet' ? '📟' : '💻'}
                      </span>
                      <div className="min-w-0">
                        <p className="font-bold text-gray-900 truncate">
                          {scan.country !== 'Unknown' ? `${scan.city ? `${scan.city}, ` : ''}${scan.country}` : 'Anonymous Scan'}
                        </p>
                        <p className="text-[11px] text-slate-400 truncate">
                          {scan.browser} on {scan.os} • {scan.referrer || 'Direct Scan'}
                        </p>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="font-mono text-slate-500 block">
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
        )}
      </div>
    </div>
  );
};

export default AnalyticsPage;
