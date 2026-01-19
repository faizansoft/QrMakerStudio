import React, { useState } from 'react';
import Workspace from './Workspace';
import { QRConfig } from './types';

interface PageProps {
  styling: Omit<QRConfig, 'value'>;
  setStyling: React.Dispatch<React.SetStateAction<Omit<QRConfig, 'value'>>>;
  logoSrc: string | null;
  setLogoSrc: (src: string | null) => void;
}

const LocationPage: React.FC<PageProps> = (props) => {
  const [loc, setLoc] = useState({ lat: '37.78193', lng: '-122.40476' });
  const val = `geo:${loc.lat},${loc.lng}`;

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        setLoc({ lat: pos.coords.latitude.toFixed(5), lng: pos.coords.longitude.toFixed(5) });
      });
    }
  };

  return (
    <Workspace type="location" value={val} {...props}>
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Latitude</label>
            <input type="text" value={loc.lat} onChange={e => setLoc({...loc, lat: e.target.value})} className="w-full p-4 rounded-xl bg-slate-50 border-2 border-slate-100 font-bold" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Longitude</label>
            <input type="text" value={loc.lng} onChange={e => setLoc({...loc, lng: e.target.value})} className="w-full p-4 rounded-xl bg-slate-50 border-2 border-slate-100 font-bold" />
          </div>
        </div>
        <button 
          onClick={getCurrentLocation}
          className="w-full p-4 rounded-xl border-2 border-indigo-100 bg-indigo-50 text-indigo-700 font-black text-[10px] uppercase tracking-widest hover:bg-indigo-100 transition-colors"
        >
          📍 Use My Current Location
        </button>
      </div>
    </Workspace>
  );
};

export default LocationPage;