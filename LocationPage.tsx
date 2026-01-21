import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
    document.title = "Location QR Code Generator | Precise Navigation for Stores";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Generate a professional Google Maps QR code. Let customers find your store or venue instantly with precise GPS coordinates. High-res SVG exports.');
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
            Foot Traffic Optimization
          </div>
          <h1 className="text-4xl md:text-7xl font-display font-black text-slate-900 tracking-tighter mb-6">
            Location <span className="text-pink-600">QR Generator</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 font-medium max-w-3xl mx-auto leading-relaxed">
            Eliminate navigation confusion. Our <strong>branded Google Maps QR maker</strong> uses precise GPS coordinates to open your customer's favorite mapping app instantly, providing turn-by-turn directions to your front door.
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
            Detect My Store Location
          </button>
        </div>
      </Workspace>

      <article className="max-w-5xl mx-auto px-6 py-24 space-y-24">
        <section className="space-y-8">
          <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900 leading-tight">Driving Offline Conversions</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-slate-600 leading-relaxed font-medium text-lg">
                Physical retail and event venues face a unique challenge: turning digital interest into physical foot traffic. When a potential customer sees your ad, they might be interested, but the moment they have to manually type an address into Google Maps, the risk of "drop-off" increases.
              </p>
              <p className="text-slate-600 leading-relaxed font-medium">
                A <strong>Google Maps QR code</strong> removes this friction entirely. By using direct GPS coordinates, you ensure that the user arrives exactly where you want them—not just at a generic street address that might cover a whole block. Whether you are a popup shop, a hidden cafe, or a booth at a large festival, a <strong>customizable location QR</strong> is the most reliable way to guide your audience.
              </p>
            </div>
            <div className="p-8 bg-pink-50 rounded-[3rem] border border-pink-100 space-y-4">
              <h3 className="text-lg font-bold text-pink-900">Why Retailers Choose Location QRs:</h3>
              <ul className="space-y-3 text-sm text-pink-800 font-medium">
                <li className="flex gap-2"><span>✓</span> <strong>GPS Precision:</strong> Guides them to the exact doorway.</li>
                <li className="flex gap-2"><span>✓</span> <strong>App Agnostic:</strong> Works with Google, Apple, and Waze.</li>
                <li className="flex gap-2"><span>✓</span> <strong>Branded Signage:</strong> Add your store logo to the center.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-12">
          <h2 className="text-3xl font-display font-black text-slate-900 text-center">Industry Use Cases</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 text-lg mb-4">Retail Stores</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Place a <strong>location QR code</strong> on flyers distributed in nearby neighborhoods. One scan gives locals direct navigation to your grand opening.
              </p>
            </div>
            <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 text-lg mb-4">Real Estate</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Add a <strong>custom QR link</strong> to open house signs. Potential buyers can scan and navigate to the property from their current location.
              </p>
            </div>
            <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 text-lg mb-4">Event Logistics</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Include a <strong>navigation QR code</strong> on event passes. Guide thousands of attendees to specific parking lots or entrance gates.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-slate-900 text-white p-12 rounded-[4rem] space-y-8 text-center">
          <h2 className="text-3xl font-display font-black">Professional Technical Standards</h2>
          <p className="text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium">
            Our <strong>branded QR maker</strong> utilizes the standard `geo:` URI scheme. This is a globally recognized protocol that instructs modern smartphones to open their default mapping application. For high-visibility outdoor signage, we recommend using our <strong>SVG vector format</strong>. This ensures that your <strong>Google Maps QR code</strong> remains mathematically perfect and easy to scan even under direct sunlight or from a distance.
          </p>
        </section>

        <section className="space-y-8">
           <h2 className="text-3xl font-display font-black text-slate-900 text-center">Location QR FAQ</h2>
           <div className="grid md:grid-cols-2 gap-6">
             {[
               { q: "Is the location QR generator free?", a: "Yes. <strong>QR Generator Online</strong> offers this professional tool for free. Create unlimited codes for your storefronts or events." },
               { q: "Will it open Google Maps automatically?", a: "Yes. On most devices, scanning a `geo:` code will prompt the user to open Google Maps or Apple Maps depending on their preference." },
               { q: "Can I add a logo to a location QR?", a: "Absolutely. Use our 'Logo' tab to create a <strong>QR code with logo in middle</strong> to brand your physical navigation guides." },
               { q: "How do I get my coordinates?", a: "Use our 'Detect My Store' button above while standing at your entrance, or right-click any spot on Google Maps to copy the coordinates." }
             ].map((faq, i) => (
               <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                 <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                 <p className="text-xs text-slate-500 leading-relaxed" dangerouslySetInnerHTML={{ __html: faq.a }} />
               </div>
             ))}
           </div>
        </section>

        <section className="pt-12 border-t border-slate-100 text-center space-y-8">
          <h2 className="text-2xl font-display font-black text-slate-900">Explore Related Digital Tools</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/event-qr-code-generator" className="px-6 py-3 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-600 hover:border-indigo-600 hover:text-indigo-600 transition-all">Event Calendars</Link>
            <Link to="/wifi-qr-code-generator" className="px-6 py-3 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-600 hover:border-indigo-600 hover:text-indigo-600 transition-all">WiFi Sharing</Link>
            <Link to="/vcard-qr-code-generator" className="px-6 py-3 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-600 hover:border-indigo-600 hover:text-indigo-600 transition-all">Digital Business Cards</Link>
            <Link to="/url-qr-code-generator" className="px-6 py-3 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-600 hover:border-indigo-600 hover:text-indigo-600 transition-all">Website Links</Link>
          </div>
        </section>
      </article>
    </div>
  );
};

export default LocationPage;