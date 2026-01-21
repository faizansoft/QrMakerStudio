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
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
             <p className="text-[10px] text-slate-400 font-bold uppercase leading-relaxed">
               <b>Tip:</b> You can find coordinates by right-clicking any spot on Google Maps. Paste them here for an exact <strong>qr code generator location</strong>.
             </p>
          </div>
        </div>
      </Workspace>

      <article className="max-w-5xl mx-auto px-6 py-24 space-y-24">
        <section className="space-y-8">
          <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900 leading-tight">Digital Wayfinding, <br/>Perfected.</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <p className="text-slate-600 leading-relaxed font-medium text-lg">
              Finding a physical business shouldn't be a test of a customer's typing skills. A <strong>qr code generator location</strong> encodes GPS coordinates so that a single scan opens the user's default navigation app (Google Maps, Apple Maps, or Waze). It's the most effective bridge for driving physical foot traffic.
            </p>
            <div className="bg-pink-900 p-10 rounded-[3.5rem] text-white space-y-4 shadow-2xl relative overflow-hidden">
               <div className="relative z-10">
                 <h4 className="font-black text-xs uppercase tracking-widest text-pink-400 mb-2">Why coordinates?</h4>
                 <p className="text-sm text-pink-100 leading-relaxed">Unlike addresses, coordinates never change. Even if a street is renamed or your shop is in a complex with one main address, your <strong>google maps qr code generator</strong> link will drop the pin exactly where you are.</p>
               </div>
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
            </div>
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-8">
           {[
             { title: "Real Estate Savvy", desc: "Place a <strong>qr code generator for location</strong> on house 'For Sale' signs. Let buyers get driving directions while they're exploring the neighborhood." },
             { title: "Event Venue Guide", desc: "Include a <strong>custom qr code</strong> on wedding or gala invitations. Ensure your guests arrive at the correct entrance every time." },
             { title: "Service Deliveries", desc: "Generate a <strong>qr code for google maps</strong> for construction sites or remote drop-off points where standard addresses fail." }
           ].map((item, idx) => (
             <div key={idx} className="p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:border-pink-200 transition-all">
                <h4 className="font-bold text-slate-900 text-lg mb-4" dangerouslySetInnerHTML={{ __html: item.title }} />
                <p className="text-sm text-slate-500 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.desc }} />
             </div>
           ))}
        </section>

        <section className="bg-slate-900 text-white p-12 rounded-[4rem] space-y-8 relative overflow-hidden">
           <div className="relative z-10 space-y-6">
             <h3 className="text-3xl font-display font-black">Professional Print & Scale</h3>
             <p className="text-slate-400 font-medium leading-relaxed max-w-3xl text-lg">
               Outdoor signage requires extreme durability and scan speed. Our <strong>qr code generator svg</strong> tool ensures that your <strong>location qr code</strong> remains razor-sharp even when printed on massive roadside banners or vinyl store wraps.
             </p>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {['SVG Vector Path', 'PNG High-Res', '300 DPI Export', 'Static Content'].map(tag => (
                  <div key={tag} className="flex flex-col items-center gap-2">
                    <div className="w-10 h-10 rounded-xl bg-pink-500/20 flex items-center justify-center text-pink-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                    </div>
                    <span className="text-[9px] font-black uppercase tracking-widest text-slate-500">{tag}</span>
                  </div>
                ))}
             </div>
           </div>
        </section>

        <section className="space-y-8">
           <h3 className="text-3xl font-display font-black text-slate-900 text-center">Location QR FAQ</h3>
           <div className="grid md:grid-cols-2 gap-6">
             {[
               { q: "How to use the google maps qr code generator?", a: "Find your destination coordinates on a map, paste the Latitude and Longitude into our <strong>qr code generator location</strong> tool above, and download your branded code." },
               { q: "Will it open Google Maps automatically?", a: "Yes. When you <strong>generate qr code for google maps</strong> using the 'geo:' protocol, most phones will prompt the user to open their default mapping application." },
               { q: "Can I use an address instead?", a: "Yes, though coordinates are more precise for remote areas. If you prefer an address, you can use our <strong>URL QR generator</strong> to link directly to a Google Maps search result URL." },
               { q: "Is this the best qr code generator for location?", a: "We provide high-resolution SVG exports and custom branding (like adding your <strong>logo in middle</strong>), making it the gold standard for professional wayfinding." }
             ].map((faq, i) => (
               <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                 <h4 className="font-bold text-slate-900 mb-2">{faq.q}</h4>
                 <p className="text-xs text-slate-500 leading-relaxed" dangerouslySetInnerHTML={{ __html: faq.a }} />
               </div>
             ))}
           </div>
        </section>

        <section className="text-center pt-12 border-t border-slate-100 space-y-6">
           <h2 className="text-3xl font-display font-black text-slate-900">Ready to direct traffic?</h2>
           <p className="text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
             Scroll back to the workspace to input your destination. Once you <strong>generate qr code for google maps</strong>, test it on your own device before downloading your high-res SVG. <strong>QR Generator Online</strong> is the most reliable tool for your mapping needs.
           </p>
        </section>
      </article>
    </div>
  );
};

export default LocationPage;