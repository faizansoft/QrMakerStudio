import React, { useEffect, useState } from 'react';

interface RecentCode {
  id: string;
  type: string;
  value: string;
  timestamp: number;
}

const RecentCodes: React.FC = () => {
  const [recentCodes, setRecentCodes] = useState<RecentCode[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('recentQRCodes');
    if (saved) {
      try {
        setRecentCodes(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse recent codes:', e);
      }
    }
  }, []);

  const clearRecent = () => {
    localStorage.removeItem('recentQRCodes');
    setRecentCodes([]);
  };

  if (recentCodes.length === 0) return null;

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-slate-900">Recent QR Codes</h3>
          <button 
            onClick={clearRecent}
            className="text-xs font-bold text-slate-400 hover:text-red-500 transition-colors uppercase tracking-widest"
          >
            Clear All
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {recentCodes.slice(0, 6).map((code) => (
            <div key={code.id} className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">
                  {code.type}
                </span>
                <span className="text-[10px] text-slate-400">
                  {new Date(code.timestamp).toLocaleDateString()}
                </span>
              </div>
              <p className="text-xs text-slate-600 truncate font-medium">
                {code.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentCodes;