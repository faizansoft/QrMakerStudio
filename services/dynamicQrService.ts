import { supabase } from './supabaseClient';

export interface DynamicLink {
  id: string;
  user_id: string;
  short_code: string;
  target_url: string;
  title?: string;
  qr_type?: string;
  qr_style?: any;
  is_active?: boolean;
  expires_at?: string;
  password_hash?: string;
  created_at: string;
  total_clicks?: number;
}

export interface ClickEvent {
  id: number;
  link_id: string;
  ts: string;
  ua?: string;
  referrer?: string;
  referrer_domain?: string;
  country?: string;
  region?: string;
  city?: string;
  device?: string;
  os?: string;
  browser?: string;
  day?: string;
  ip?: string;
}

export interface AnalyticsSummary {
  totalScans: number;
  uniqueScans: number;
  scansToday: number;
  scansThisWeek: number;
  timeline: { date: string; scans: number; unique: number }[];
  devices: { name: string; count: number; percentage: number }[];
  os: { name: string; count: number; percentage: number }[];
  browsers: { name: string; count: number; percentage: number }[];
  countries: { code: string; name: string; count: number; percentage: number }[];
  cities: { name: string; count: number; percentage: number }[];
  referrers: { source: string; count: number; percentage: number }[];
  recentScans: ClickEvent[];
}

/**
 * Generate clean 6-character shortcode
 */
export const generateShortCode = (): string => {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let code = '';
  for (let i = 0; i < 6; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
};

/**
 * Create a new Dynamic QR Code Link in Supabase
 */
export const createDynamicLink = async (params: {
  targetUrl: string;
  title?: string;
  qrType?: string;
  qrStyle?: any;
  customCode?: string;
}): Promise<{ data: DynamicLink | null; error: Error | null }> => {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      return { data: null, error: new Error('User must be logged in to create a dynamic QR code') };
    }

    let shortCode = params.customCode?.trim() || generateShortCode();

    // Check if custom code exists
    if (params.customCode) {
      const { data: existing } = await supabase
        .from('links')
        .select('id')
        .eq('short_code', shortCode)
        .maybeSingle();

      if (existing) {
        return { data: null, error: new Error(`Shortcode "${shortCode}" is already taken. Please choose another.`) };
      }
    }

    const { data, error } = await supabase
      .from('links')
      .insert({
        user_id: user.id,
        short_code: shortCode,
        target_url: params.targetUrl.trim(),
        title: params.title?.trim() || `Dynamic QR - ${shortCode}`,
        qr_type: params.qrType || 'url',
        qr_style: params.qrStyle || {},
        is_active: true,
      })
      .select()
      .single();

    if (error) throw error;
    return { data, error: null };
  } catch (err: any) {
    return { data: null, error: err };
  }
};

/**
 * Fetch all dynamic links for current logged in user with scan counts
 */
export const getUserDynamicLinks = async (): Promise<{ data: DynamicLink[]; error: Error | null }> => {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return { data: [], error: null };

    const { data: links, error } = await supabase
      .from('links')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false });

    if (error) throw error;

    // Fetch click counts per link
    if (links && links.length > 0) {
      const linkIds = links.map(l => l.id);
      const { data: clicks } = await supabase
        .from('clicks')
        .select('link_id')
        .in('link_id', linkIds);

      const clickCounts: Record<string, number> = {};
      clicks?.forEach(c => {
        clickCounts[c.link_id] = (clickCounts[c.link_id] || 0) + 1;
      });

      const enriched = links.map(l => ({
        ...l,
        total_clicks: clickCounts[l.id] || 0
      }));

      return { data: enriched, error: null };
    }

    return { data: links || [], error: null };
  } catch (err: any) {
    return { data: [], error: err };
  }
};

/**
 * Get a single dynamic link by ID
 */
export const getDynamicLinkById = async (linkId: string): Promise<{ data: DynamicLink | null; error: Error | null }> => {
  try {
    const { data, error } = await supabase
      .from('links')
      .select('*')
      .eq('id', linkId)
      .single();

    if (error) throw error;
    return { data, error: null };
  } catch (err: any) {
    return { data: null, error: err };
  }
};

/**
 * Get link by shortcode for redirection
 */
export const getLinkByShortCode = async (shortCode: string): Promise<{ data: DynamicLink | null; error: Error | null }> => {
  try {
    const { data, error } = await supabase
      .from('links')
      .select('*')
      .eq('short_code', shortCode)
      .maybeSingle();

    if (error) throw error;
    return { data, error: null };
  } catch (err: any) {
    return { data: null, error: err };
  }
};

/**
 * Update dynamic link destination URL or settings
 */
export const updateDynamicLink = async (
  linkId: string,
  updates: Partial<DynamicLink>
): Promise<{ data: DynamicLink | null; error: Error | null }> => {
  try {
    const { data, error } = await supabase
      .from('links')
      .update(updates)
      .eq('id', linkId)
      .select()
      .single();

    if (error) throw error;
    return { data, error: null };
  } catch (err: any) {
    return { data: null, error: err };
  }
};

/**
 * Delete a dynamic link and its click history
 */
export const deleteDynamicLink = async (linkId: string): Promise<{ success: boolean; error: Error | null }> => {
  try {
    await supabase.from('clicks').delete().eq('link_id', linkId);
    const { error } = await supabase.from('links').delete().eq('id', linkId);
    if (error) throw error;
    return { success: true, error: null };
  } catch (err: any) {
    return { success: false, error: err };
  }
};

/**
 * Parse User-Agent for device, OS, browser
 */
export const parseUserAgent = (uaString: string) => {
  const ua = uaString.toLowerCase();
  
  // Device
  let device = 'Desktop';
  if (/mobile|iphone|ipod|android.*mobile|windows phone|blackberry/i.test(ua)) {
    device = 'Mobile';
  } else if (/ipad|android(?!.*mobile)|tablet/i.test(ua)) {
    device = 'Tablet';
  }

  // OS
  let os = 'Other';
  if (/iphone|ipad|ipod/i.test(ua)) os = 'iOS';
  else if (/android/i.test(ua)) os = 'Android';
  else if (/macintosh|mac os x/i.test(ua)) os = 'macOS';
  else if (/windows/i.test(ua)) os = 'Windows';
  else if (/linux/i.test(ua)) os = 'Linux';

  // Browser & In-App WebViews
  let browser = 'Other';
  if (/instagram/i.test(ua)) browser = 'Instagram In-App';
  else if (/tiktok/i.test(ua)) browser = 'TikTok In-App';
  else if (/fban|fbav|facebook/i.test(ua)) browser = 'Facebook In-App';
  else if (/linkedin/i.test(ua)) browser = 'LinkedIn In-App';
  else if (/edg/i.test(ua)) browser = 'Microsoft Edge';
  else if (/chrome|crios/i.test(ua)) browser = 'Chrome';
  else if (/firefox|fxios/i.test(ua)) browser = 'Firefox';
  else if (/safari/i.test(ua)) browser = 'Safari';
  else if (/opera|opr/i.test(ua)) browser = 'Opera';

  return { device, os, browser };
};

/**
 * Record a QR Code Scan Click Event
 */
export const recordScanEvent = async (params: {
  linkId: string;
  referrer?: string;
}) => {
  try {
    const ua = navigator.userAgent;
    const { device, os, browser } = parseUserAgent(ua);
    const referrer = params.referrer || document.referrer || '';
    let referrerDomain = '';
    try {
      if (referrer) {
        referrerDomain = new URL(referrer).hostname;
      }
    } catch {}

    const now = new Date();
    const day = now.toISOString().split('T')[0];

    // Try to get country/city via free client IP geolocation API if available
    let country = 'Unknown';
    let city = 'Unknown';
    try {
      const geoRes = await fetch('https://ipapi.co/json/', { signal: AbortSignal.timeout(800) });
      if (geoRes.ok) {
        const geoData = await geoRes.json();
        country = geoData.country_name || geoData.country_code || 'Unknown';
        city = geoData.city || 'Unknown';
      }
    } catch {
      // Fallback
    }

    await supabase.from('clicks').insert({
      link_id: params.linkId,
      ts: now.toISOString(),
      created_at: now.toISOString(),
      ua,
      device,
      os,
      browser,
      referrer: referrer || 'Direct / Camera Scan',
      referrer_domain: referrerDomain || 'Direct Scan',
      country,
      city,
      day,
    });
  } catch (err) {
    console.error('Scan recording failed:', err);
  }
};

/**
 * Aggregate comprehensive analytics for a Dynamic QR Code
 */
export const getLinkAnalytics = async (linkId: string): Promise<{ data: AnalyticsSummary | null; error: Error | null }> => {
  try {
    const { data: clicks, error } = await supabase
      .from('clicks')
      .select('*')
      .eq('link_id', linkId)
      .order('ts', { ascending: false });

    if (error) throw error;

    const totalScans = clicks?.length || 0;
    const uniqueIps = new Set(clicks?.map(c => c.ip || c.ua)).size;

    const todayStr = new Date().toISOString().split('T')[0];
    const sevenDaysAgo = new Date(Date.now() - 7 * 86400000);

    let scansToday = 0;
    let scansThisWeek = 0;

    const dayMap: Record<string, { scans: number; uas: Set<string> }> = {};
    const deviceMap: Record<string, number> = {};
    const osMap: Record<string, number> = {};
    const browserMap: Record<string, number> = {};
    const countryMap: Record<string, number> = {};
    const cityMap: Record<string, number> = {};
    const referrerMap: Record<string, number> = {};

    clicks?.forEach(click => {
      const day = click.day || click.ts?.split('T')[0] || todayStr;
      const clickDate = new Date(click.ts || click.created_at);

      if (day === todayStr) scansToday++;
      if (clickDate >= sevenDaysAgo) scansThisWeek++;

      // Timeline
      if (!dayMap[day]) dayMap[day] = { scans: 0, uas: new Set() };
      dayMap[day].scans++;
      if (click.ua) dayMap[day].uas.add(click.ua);

      // Devices
      const dev = click.device || 'Mobile';
      deviceMap[dev] = (deviceMap[dev] || 0) + 1;

      // OS
      const o = click.os || 'Other';
      osMap[o] = (osMap[o] || 0) + 1;

      // Browser
      const b = click.browser || 'Other';
      browserMap[b] = (browserMap[b] || 0) + 1;

      // Country
      const c = click.country || 'Unknown';
      countryMap[c] = (countryMap[c] || 0) + 1;

      // City
      const ct = click.city || 'Unknown';
      if (ct !== 'Unknown') {
        cityMap[ct] = (cityMap[ct] || 0) + 1;
      }

      // Referrer
      const ref = click.referrer_domain || (click.referrer?.startsWith('http') ? new URL(click.referrer).hostname : 'Direct / Camera');
      referrerMap[ref] = (referrerMap[ref] || 0) + 1;
    });

    const formatPercentages = (map: Record<string, number>) => {
      return Object.entries(map)
        .map(([name, count]) => ({
          name,
          count,
          percentage: totalScans > 0 ? Math.round((count / totalScans) * 100) : 0,
        }))
        .sort((a, b) => b.count - a.count);
    };

    const timeline = Object.keys(dayMap)
      .sort()
      .slice(-30)
      .map(date => ({
        date,
        scans: dayMap[date].scans,
        unique: dayMap[date].uas.size,
      }));

    const countries = Object.entries(countryMap)
      .map(([name, count]) => ({
        code: name.substring(0, 2).toUpperCase(),
        name,
        count,
        percentage: totalScans > 0 ? Math.round((count / totalScans) * 100) : 0,
      }))
      .sort((a, b) => b.count - a.count);

    const summary: AnalyticsSummary = {
      totalScans,
      uniqueScans: uniqueIps || totalScans,
      scansToday,
      scansThisWeek,
      timeline,
      devices: formatPercentages(deviceMap),
      os: formatPercentages(osMap),
      browsers: formatPercentages(browserMap),
      countries,
      cities: formatPercentages(cityMap),
      referrers: formatPercentages(referrerMap).map(r => ({ source: r.name, count: r.count, percentage: r.percentage })),
      recentScans: (clicks || []).slice(0, 30),
    };

    return { data: summary, error: null };
  } catch (err: any) {
    return { data: null, error: err };
  }
};
