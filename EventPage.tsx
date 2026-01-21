import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Workspace from './Workspace';
import { QRConfig } from './types';
import { useLanguage } from './context/LanguageContext';

interface PageProps {
  styling: Omit<QRConfig, 'value'>;
  setStyling: React.Dispatch<React.SetStateAction<Omit<QRConfig, 'value'>>>;
  logoSrc: string | null;
  setLogoSrc: (src: string | null) => void;
}

const EventPage: React.FC<PageProps> = (props) => {
  const { t } = useLanguage();
  const [e, setE] = useState({ summary: '', location: '', start: '', end: '', desc: '' });
  
  const val = `BEGIN:VEVENT
SUMMARY:${e.summary}
LOCATION:${e.location}
DESCRIPTION:${e.desc}
DTSTART:${e.start.replace(/[-:]/g, '')}
DTEND:${e.end.replace(/[-:]/g, '')}
END:VEVENT`;

  useEffect(() => {
    document.title = t('meta_event_title');
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', t('meta_event_desc'));
    }
  }, [t]);

  return (
    <div className="flex flex-col">
      <section className="bg-white border-b border-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 text-orange-700 text-[10px] font-black uppercase tracking-widest rounded-full border border-orange-100 mb-6">
            Guest Attendance Optimization
          </div>
          <h1 className="text-4xl md:text-7xl font-display font-black text-slate-900 tracking-tighter mb-6">
            Event QR <span className="text-orange-600">Generator</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 font-medium max-w-3xl mx-auto leading-relaxed">
            Maximize your turnout and eliminate "I forgot" excuses. Our <strong>branded event QR maker</strong> uses the iCalendar standard to let guests save your meeting, wedding, or conference details directly to their digital calendars in a single scan.
          </p>
        </div>
      </section>

      <Workspace type="event" value={val} {...props}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-2 space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Event Title</label>
            <input type="text" placeholder="e.g. Annual Brand Innovation Summit" value={e.summary} onChange={ev => setE({...e, summary: ev.target.value})} className="w-full p-4 rounded-xl bg-slate-50 border-2 border-slate-100 focus:border-orange-500 outline-none font-bold" />
          </div>
          <div className="col-span-2 space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Location / Video Link</label>
            <input type="text" placeholder="e.g. 123 Gallery Ave, New York" value={e.location} onChange={ev => setE({...e, location: ev.target.value})} className="w-full p-4 rounded-xl bg-slate-50 border-2 border-slate-100 focus:border-orange-500 outline-none font-bold" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Starts At</label>
            <input type="datetime-local" value={e.start} onChange={ev => setE({...e, start: ev.target.value})} className="w-full p-4 rounded-xl bg-slate-50 border-2 border-slate-100 focus:border-orange-500 outline-none font-bold" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Ends At</label>
            <input type="datetime-local" value={e.end} onChange={ev => setE({...e, end: ev.target.value})} className="w-full p-4 rounded-xl bg-slate-50 border-2 border-slate-100 focus:border-orange-500 outline-none font-bold" />
          </div>
        </div>
      </Workspace>

      <article className="max-w-5xl mx-auto px-6 py-24 space-y-24">
        <section className="space-y-8">
          <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900 leading-tight">Solving the Attendance Gap</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-slate-600 leading-relaxed font-medium text-lg">
                Even the most interested guests can fail to show up if the friction of adding an event to their calendar is too high. Memorizing dates or manually typing "RSVP to Marketing Mixer" into a phone is a task most people put off and eventually forget.
              </p>
              <p className="text-slate-600 leading-relaxed font-medium">
                An <strong>event calendar QR code</strong> solves this by encoding a full iCalendar (.ics) event packet. When scanned, the smartphone immediately prompts: "Add to Calendar?" This includes the title, location, and the exact start and end times. By providing a <strong>customizable event QR</strong> on your invitations or posters, you're ensuring your brand stays top-of-mind and occupies a dedicated slot in your audience's digital life.
              </p>
            </div>
            <div className="p-8 bg-orange-50 rounded-[3rem] border border-orange-100 space-y-4">
              <h3 className="text-lg font-bold text-orange-900">Why Organizers Love Event QRs:</h3>
              <ul className="space-y-3 text-sm text-orange-800 font-medium">
                <li className="flex gap-2"><span>✓</span> <strong>Zero Manual Entry:</strong> Dates and times are perfect.</li>
                <li className="flex gap-2"><span>✓</span> <strong>Native Support:</strong> Works on Google, Apple, and Outlook.</li>
                <li className="flex gap-2"><span>✓</span> <strong>Branded RSVP:</strong> Add your gala logo to the center of the code.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-12">
          <h2 className="text-3xl font-display font-black text-slate-900 text-center">Perfect Placement for Event QRs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 text-lg mb-4">Save the Dates</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Add a <strong>wedding QR code</strong> to your physical Save the Date cards. Let guests book the time off months in advance with a single scan.
              </p>
            </div>
            <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 text-lg mb-4">Conference Posters</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Display an <strong>event QR generator</strong> result on large venue screens. Attendees can scan the schedule for the next session instantly.
              </p>
            </div>
            <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 text-lg mb-4">Local Meetups</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Promote your community class or workshop on flyers. Use our <strong>SVG export</strong> for sharp printing on neighborhood bulletin boards.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-slate-900 text-white p-12 rounded-[4rem] space-y-8 text-center">
          <h2 className="text-3xl font-display font-black">Professional Technical Compatibility</h2>
          <p className="text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium">
            Our <strong>branded event QR maker</strong> uses the universal iCalendar standard. This format is the global language of digital scheduling, supported by iOS, Android, and desktop clients like macOS Calendar and Windows Outlook. For professional event branding, we recommend our <strong>QR code SVG format</strong>. This ensures that even the small details of the pattern remain crisp when printed on textured invitation cardstock.
          </p>
        </section>

        <section className="space-y-8">
           <h2 className="text-3xl font-display font-black text-slate-900 text-center">Event QR FAQ</h2>
           <div className="grid md:grid-cols-2 gap-6">
             {[
               { q: "Is the event QR code generator free?", a: "Yes. <strong>QR Generator Online</strong> provides this tool free of charge for all event planners and individuals. No account required." },
               { q: "Will it work with my Google Calendar?", a: "Yes. When scanned, modern smartphones allow the user to select which calendar app they want to use to save the event." },
               { q: "Can I add a logo to my event QR?", a: "Absolutely. Use the 'Logo' tab in our workspace to create a <strong>QR code with logo in middle</strong> for your professional event materials." },
               { q: "What happens if the time changes?", a: "Since these are <strong>static QR codes</strong>, the data is fixed. If you change your event time, you will need to generate and print a new code." }
             ].map((faq, i) => (
               <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                 <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                 <p className="text-xs text-slate-500 leading-relaxed" dangerouslySetInnerHTML={{ __html: faq.a }} />
               </div>
             ))}
           </div>
        </section>

        <section className="pt-12 border-t border-slate-100 text-center space-y-8">
          <h2 className="text-2xl font-display font-black text-slate-900">Enhance Your Event Networking</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/vcard-qr-code-generator" title="Go to vCard Maker" className="px-6 py-3 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-600 hover:border-indigo-600 hover:text-indigo-600 transition-all">Digital Business Cards</Link>
            <Link to="/location-qr-code-generator" title="Go to Location Maker" className="px-6 py-3 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-600 hover:border-indigo-600 hover:text-indigo-600 transition-all">Maps Navigation</Link>
            <Link to="/wifi-qr-code-generator" title="Go to WiFi Maker" className="px-6 py-3 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-600 hover:border-indigo-600 hover:text-indigo-600 transition-all">WiFi Sharing</Link>
            <Link to="/url-qr-code-generator" title="Go to URL Maker" className="px-6 py-3 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-600 hover:border-indigo-600 hover:text-indigo-600 transition-all">Website Links</Link>
          </div>
        </section>
      </article>
    </div>
  );
};

export default EventPage;