import React, { useState } from 'react';
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
            <input type="text" placeholder="e.g. Annual Brand Gala / Summer BBQ" value={e.summary} onChange={ev => setE({...e, summary: ev.target.value})} className="w-full p-4 rounded-xl bg-slate-50 border-2 border-slate-100 focus:border-orange-500 outline-none font-bold" />
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
          <div className="col-span-2 space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Event Description</label>
            <textarea placeholder="Tell your guests about the dress code, parking, or agenda..." value={e.desc} onChange={ev => setE({...e, desc: ev.target.value})} className="w-full h-32 p-4 rounded-xl bg-slate-50 border-2 border-slate-100 resize-none focus:border-orange-500 outline-none font-bold" />
          </div>
        </div>
      </Workspace>

      <article className="max-w-5xl mx-auto px-6 py-24 space-y-24">
        <section className="space-y-8">
          <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900 leading-tight">The Bridge <br/>to Better Attendance.</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <p className="text-slate-600 leading-relaxed font-medium text-lg">
              The number one reason people miss events isn't a lack of interest—it's a failure of memory. A <strong>customizable qr code</strong> for your event ensures that scanning it results in a calendar entry. It's a "set it and forget it" solution for your guests.
            </p>
            <div className="p-8 bg-orange-50 rounded-[3rem] border border-orange-100 flex flex-col gap-4">
               <h4 className="font-bold text-orange-900 uppercase text-[10px] tracking-widest">Why it works</h4>
               <p className="text-sm text-orange-700 leading-relaxed">Scanning an event QR prompts the user to "Add to Calendar." This places your event directly in their Google or Apple schedule, ensuring they receive a reminder notification 30 minutes before you begin.</p>
            </div>
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-8">
           {[
             { title: "Weddings", desc: "Add a <strong>qr code business card</strong> sized invite to your package so guests can save the reception date instantly." },
             { title: "Corporate Workshops", desc: "Place a <strong>qr code with logo in middle</strong> on breakout room doors. Let attendees save session times on the fly." },
             { title: "Music Festivals", desc: "Use our <strong>qr code generator svg</strong> for high-res posters. Link directly to set times for individual stages." }
           ].map((item, idx) => (
             <div key={idx} className="p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:border-orange-200 transition-all">
                <h4 className="font-bold text-slate-900 text-lg mb-4" dangerouslySetInnerHTML={{ __html: item.title }} />
                <p className="text-sm text-slate-500 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.desc }} />
             </div>
           ))}
        </section>

        <section className="bg-slate-900 text-white p-12 rounded-[4rem] space-y-8 relative overflow-hidden">
           <div className="relative z-10 space-y-6">
             <h3 className="text-3xl font-display font-black">Ready for Professional Printing</h3>
             <p className="text-slate-400 font-medium leading-relaxed max-w-3xl">
               Event materials often require massive scaling. From digital billboards to printed programs, your <strong>event qr code</strong> needs to stay sharp. Our <strong>qr code generator svg</strong> tool provides professional vector exports that never lose resolution.
             </p>
             <div className="flex flex-wrap gap-4">
                {['SVG Support', 'Print Ready', 'Universal iCal', 'No Tracking'].map(tag => (
                  <span key={tag} className="px-4 py-1 bg-slate-800 rounded-full text-[10px] font-black uppercase text-orange-400 tracking-widest">{tag}</span>
                ))}
             </div>
           </div>
           <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
        </section>

        <section className="space-y-8">
           <h3 className="text-3xl font-display font-black text-slate-900 text-center">Event QR FAQ</h3>
           <div className="grid md:grid-cols-2 gap-6">
             {[
               { q: "How to generate qr code for events?", a: "Enter your title, date, time, and location into the <strong>event qr code generator</strong> above. It will update the preview instantly." },
               { q: "Does the code work with Apple Calendar?", a: "Yes! Our tool uses the standard iCalendar (VEVENT) format, which is supported by iOS, Android, and Outlook." },
               { q: "Is the event code static?", a: "Yes. Once you <strong>create a custom qr code</strong> for your event, it is fixed. It doesn't require an internet connection to be added to a calendar." },
               { q: "Can I add a custom logo?", a: "Absolutely. Use the 'Logo' tab to create a <strong>qr code with logo in middle</strong> to brand your event materials." }
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