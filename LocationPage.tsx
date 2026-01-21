import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    document.title = "Location QR Code Generator | Precise Google Maps Navigation";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Create a location QR code using GPS coordinates. One scan opens the users default mapping app (Google or Apple Maps) with exact turn-by-turn directions.');
    }
  }, []);

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        setLoc({ lat: pos.coords.latitude.toFixed(5), lng: pos.coords.longitude.toFixed(5) });
      });
    }
  };

  return (
    <div className="flex flex-col">
      <section className="bg-white border-b border-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-pink-50 text-pink-700 text-[10px] font-black uppercase tracking-widest rounded-full border border-pink-100 mb-6">
            Mapping Services
          </div>
          <h1 className="text-4xl md:text-7xl font-display font-black text-slate-900 tracking-tighter mb-6">
            Location <span className="text-pink-600">QR Generator</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 font-medium max-w-3xl mx-auto leading-relaxed">
            Direct customers to your door without the typing struggle. Build a custom <strong>google maps qr code generator</strong> output that opens navigation apps instantly with professional branding.
          </p>
        </div>
      </section>

      <Workspace type="location" value={val} {...props}>
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Latitude</label>
              <input type="text" value={loc.lat} onChange={e => setLoc({...loc, lat: e.target.value})} className="w-full p-4 rounded-xl bg-slate-50 border-2 border-slate-100 font-bold focus:border-pink-500 outline-none shadow-inner" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Longitude</label>
              <input type="text" value={loc.lng} onChange={e => setLoc({...loc, lng: e.target.value})} className="w-full p-4 rounded-xl bg-slate-50 border-2 border-slate-100 font-bold focus:border-pink-500 outline-none shadow-inner" />
            </div>
          </div>
          <button 
            onClick={getCurrentLocation}
            className="w-full p-5 rounded-2xl border-2 border-pink-100 bg-pink-50 text-pink-700 font-black text-[11px] uppercase tracking-[0.2em] hover:bg-pink-100 transition-all flex items-center justify-center gap-3 shadow-sm active:scale-[0.98]"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
            Use My Precise Current Location
          </button>
        </div>
      </Workspace>

      <article className="max-w-5xl mx-auto px-6 py-24 space-y-24">
        <section className="space-y-8">
           <h3 className="text-3xl font-display font-black text-slate-900 text-center">Location QR FAQ</h3>
           <div className="grid md:grid-cols-2 gap-6">
             {[
               { q: "How to use the google maps qr code generator?", a: "Paste the Latitude and Longitude into our tool above and export your branded code." },
               { q: "Will it open Google Maps automatically?", a: "Yes. When you <strong>generate qr code for google maps</strong>, most phones prompt for navigation." },
               { q: "Can I use an address instead?", a: "Coordinates are more precise. For addresses, use our <strong>URL QR generator</strong> to link to a Maps search result." },
               { q: "Is the generator free?", a: "Yes, it is 100% free with no limits." }
             ].map((faq, i) => (
               <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                 <h4 className="font-bold text-slate-900 mb-2">{faq.q}</h4>
                 <p className="text-xs text-slate-500 leading-relaxed" dangerouslySetInnerHTML={{ __html: faq.a }} />
               </div>
             ))}
           </div>
        </section>
      </article>
    </div>
  );
};

export default LocationPage;