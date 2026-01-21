
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
            Direct customers to your door with a <strong>qr code generator for location</strong>. Build a custom <strong>google maps qr code generator</strong> in seconds.
          </p>
        </div>
      </section>

      <Workspace type="location" value={val} {...props}>
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Latitude</label>
              <input type="text" value={loc.lat} onChange={e => setLoc({...loc, lat: e.target.value})} className="w-full p-4 rounded-xl bg-slate-50 border-2 border-slate-100 font-bold focus:border-pink-500 outline-none" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Longitude</label>
              <input type="text" value={loc.lng} onChange={e => setLoc({...loc, lng: e.target.value})} className="w-full p-4 rounded-xl bg-slate-50 border-2 border-slate-100 font-bold focus:border-pink-500 outline-none" />
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

      <article className="max-w-5xl mx-auto px-6 py-24 space-y-24">
        <section className="space-y-6">
          <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900">Modern qr code generator location tool</h2>
          <p className="text-slate-600 leading-relaxed font-medium text-lg">
            Finding a physical business shouldn't be a struggle. A <strong>qr code generator location</strong> encodes GPS coordinates so that a single scan opens the user's navigation app. Whether you use a <strong>google maps qr code generator</strong> for your storefront or an event venue, you're making it easier for people to find you.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-8">
           <div className="p-8 bg-white rounded-3xl border border-slate-100">
              <h4 className="font-bold text-slate-900 mb-3">Storefront Displays</h4>
              <p className="text-sm text-slate-500 leading-relaxed">Let window shoppers save your location by scanning a <strong>qr code generator for location</strong> output.</p>
           </div>
           <div className="p-8 bg-white rounded-3xl border border-slate-100">
              <h4 className="font-bold text-slate-900 mb-3">Event Invitations</h4>
              <p className="text-sm text-slate-500 leading-relaxed">Ensure guests arrive on time with a <strong>generate qr code for google maps</strong> link on their invite.</p>
           </div>
        </section>

        <section className="space-y-8">
           <h3 className="text-3xl font-display font-black text-slate-900 text-center">Location QR FAQ</h3>
           <div className="grid md:grid-cols-2 gap-6">
             {[
               { q: "How to use the google maps qr code generator?", a: "Find your coordinates on maps, paste them into the <strong>qr code generator location</strong> above, and export your code." },
               { q: "Is this the best qr code generator for location?", a: "We offer high-res SVG downloads so your <strong>google maps qr code generator</strong> stays sharp on large signs." },
               { q: "Does it open Google Maps automatically?", a: "Yes, when you <strong>generate qr code for google maps</strong>, it triggers the default mapping app on the device." },
               { q: "Can I use my current location?", a: "Yes! Click the 'Use My Current Location' button to automatically populate the <strong>qr code generator location</strong> fields." }
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
