import React, { useState, useEffect } from 'react';
import Workspace from './Workspace';
import { QRConfig } from './types';

interface PageProps {
  styling: Omit<QRConfig, 'value'>;
  setStyling: React.Dispatch<React.SetStateAction<Omit<QRConfig, 'value'>>>;
  logoSrc: string | null;
  setLogoSrc: (src: string | null) => void;
}

const EventPage: React.FC<PageProps> = (props) => {
  const [e, setE] = useState({ summary: '', location: '', start: '', end: '', desc: '' });
  
  // Format iCalendar data string
  const val = `BEGIN:VEVENT
SUMMARY:${e.summary}
LOCATION:${e.location}
DESCRIPTION:${e.desc}
DTSTART:${e.start.replace(/[-:]/g, '')}
DTEND:${e.end.replace(/[-:]/g, '')}
END:VEVENT`;

  useEffect(() => {
    document.title = "Event QR Code Generator | Add to Calendar Instantly";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Generate an event QR code using the iCalendar standard. Let guests save your event title, time, and location directly to their smartphone calendars.');
    }
  }, []);

  return (
    <div className="flex flex-col">
      <section className="bg-white border-b border-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 text-orange-700 text-[10px] font-black uppercase tracking-widest rounded-full border border-orange-100 mb-6">
            Event Attendance Tools
          </div>
          <h1 className="text-4xl md:text-7xl font-display font-black text-slate-900 tracking-tighter mb-6">
            Event QR <span className="text-orange-600">Generator</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 font-medium max-w-3xl mx-auto leading-relaxed">
            Maximize your turnout. Create a <strong>custom qr code</strong> that adds your meeting, wedding, or conference directly to your guests' digital calendars in one scan.
          </p>
        </div>
      </section>

      <Workspace type="event" value={val} {...props}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-2 space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Event Title</label>
            <input type="text" placeholder="e.g. Annual Brand Gala" value={e.summary} onChange={ev => setE({...e, summary: ev.target.value})} className="w-full p-4 rounded-xl bg-slate-50 border-2 border-slate-100 focus:border-orange-500 outline-none font-bold" />
          </div>
          <div className="col-span-2 space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Physical Location or Link</label>
            <input type="text" placeholder="123 Street Ave, New York" value={e.location} onChange={ev => setE({...e, location: ev.target.value})} className="w-full p-4 rounded-xl bg-slate-50 border-2 border-slate-100 focus:border-orange-500 outline-none font-bold" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Start Date & Time</label>
            <input type="datetime-local" value={e.start} onChange={ev => setE({...e, start: ev.target.value})} className="w-full p-4 rounded-xl bg-slate-50 border-2 border-slate-100 focus:border-orange-500 outline-none font-bold" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">End Date & Time</label>
            <input type="datetime-local" value={e.end} onChange={ev => setE({...e, end: ev.target.value})} className="w-full p-4 rounded-xl bg-slate-50 border-2 border-slate-100 focus:border-orange-500 outline-none font-bold" />
          </div>
        </div>
      </Workspace>

      <article className="max-w-5xl mx-auto px-6 py-24 space-y-24">
        <section className="space-y-8">
           <h3 className="text-3xl font-display font-black text-slate-900 text-center">Event QR FAQ</h3>
           <div className="grid md:grid-cols-2 gap-6">
             {[
               { q: "How to generate qr code for events?", a: "Enter your title, date, and location above. It will update the preview instantly." },
               { q: "Does the code work with Apple Calendar?", a: "Yes! Our tool uses the universal iCalendar format supported by iOS and Android." },
               { q: "Is the event code static?", a: "Yes. Once you <strong>create a custom qr code</strong> for your event, it is fixed and permanent." },
               { q: "Can I add a custom logo?", a: "Absolutely. Use the 'Logo' tab to brand your event materials." }
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

export default EventPage;