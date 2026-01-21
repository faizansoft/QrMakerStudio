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
            Event Promotion
          </div>
          <h1 className="text-4xl md:text-7xl font-display font-black text-slate-900 tracking-tighter mb-6">
            Event QR <span className="text-orange-600">Generator</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 font-medium max-w-3xl mx-auto leading-relaxed">
            Boost attendance by making it easy to save your event. Create a <strong>custom qr code</strong> that adds your meeting or party directly to guest calendars.
          </p>
        </div>
      </section>

      <Workspace type="event" value={val} {...props}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-2 space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Event Title</label>
            <input type="text" placeholder="Birthday Party / Webinar" value={e.summary} onChange={ev => setE({...e, summary: ev.target.value})} className="w-full p-4 rounded-xl bg-slate-50 border-2 border-slate-100 focus:border-orange-500" />
          </div>
          <div className="col-span-2 space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Location</label>
            <input type="text" placeholder="123 Street, City or Link" value={e.location} onChange={ev => setE({...e, location: ev.target.value})} className="w-full p-4 rounded-xl bg-slate-50 border-2 border-slate-100 focus:border-orange-500" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Start Time</label>
            <input type="datetime-local" value={e.start} onChange={ev => setE({...e, start: ev.target.value})} className="w-full p-4 rounded-xl bg-slate-50 border-2 border-slate-100 focus:border-orange-500" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">End Time</label>
            <input type="datetime-local" value={e.end} onChange={ev => setE({...e, end: ev.target.value})} className="w-full p-4 rounded-xl bg-slate-50 border-2 border-slate-100 focus:border-orange-500" />
          </div>
          <div className="col-span-2 space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Description</label>
            <textarea placeholder="Tell your guests more..." value={e.desc} onChange={ev => setE({...e, desc: ev.target.value})} className="w-full h-24 p-4 rounded-xl bg-slate-50 border-2 border-slate-100 resize-none focus:border-orange-500" />
          </div>
        </div>
      </Workspace>

      <article className="max-w-5xl mx-auto px-6 py-24 space-y-24">
        <section className="space-y-6 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900">Ensure nobody misses your big day</h2>
          <p className="text-slate-600 leading-relaxed font-medium text-lg max-w-3xl mx-auto">
            A <strong>custom qr code</strong> for events acts as a bridge between your physical marketing and the user's digital calendar. Once scanned, your guests can save the title, time, and location to their phone in one tap.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-8">
           <div className="p-8 bg-white rounded-3xl border border-slate-100">
              <h4 className="font-bold text-slate-900 mb-3">Conferences & Seminars</h4>
              <p className="text-sm text-slate-500 leading-relaxed">Place a <strong>qr code with logo in middle</strong> on programs to help attendees keep track of breakout sessions.</p>
           </div>
           <div className="p-8 bg-white rounded-3xl border border-slate-100">
              <h4 className="font-bold text-slate-900 mb-3">Weddings & Parties</h4>
              <p className="text-sm text-slate-500 leading-relaxed">Add a <strong>customizable qr code</strong> to physical invitations so guests never lose the address or start time.</p>
           </div>
        </section>

        <section className="space-y-8">
           <h3 className="text-3xl font-display font-black text-slate-900 text-center">Event QR FAQ</h3>
           <div className="grid md:grid-cols-2 gap-6">
             {[
               { q: "How does the event QR work?", a: "We generate a VEVENT (iCal) string. When scanned, it prompts the phone to add a new event to Google, Apple, or Outlook calendars." },
               { q: "Is it compatible with all phones?", a: "Yes, our <strong>customizable qr code</strong> tool uses the universal iCalendar standard for global support." },
               { q: "Can I download as SVG?", a: "Absolutely. Use our <strong>svg qr code generator</strong> for professional print quality on posters and flyers." },
               { q: "Does the code expire?", a: "No, the code is static. However, it will always point to the specific date and time you set during generation." }
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