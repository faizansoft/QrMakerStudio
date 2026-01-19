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
    <Workspace type="event" value={val} {...props}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="col-span-2 space-y-2">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Event Title</label>
          <input type="text" placeholder="Birthday Party / Webinar" value={e.summary} onChange={ev => setE({...e, summary: ev.target.value})} className="w-full p-4 rounded-xl bg-slate-50 border-2 border-slate-100" />
        </div>
        <div className="col-span-2 space-y-2">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Location</label>
          <input type="text" placeholder="123 Street, City or Link" value={e.location} onChange={ev => setE({...e, location: ev.target.value})} className="w-full p-4 rounded-xl bg-slate-50 border-2 border-slate-100" />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Start Time</label>
          <input type="datetime-local" value={e.start} onChange={ev => setE({...e, start: ev.target.value})} className="w-full p-4 rounded-xl bg-slate-50 border-2 border-slate-100" />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">End Time</label>
          <input type="datetime-local" value={e.end} onChange={ev => setE({...e, end: ev.target.value})} className="w-full p-4 rounded-xl bg-slate-50 border-2 border-slate-100" />
        </div>
        <div className="col-span-2 space-y-2">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Description</label>
          <textarea placeholder="Tell your guests more..." value={e.desc} onChange={ev => setE({...e, desc: ev.target.value})} className="w-full h-24 p-4 rounded-xl bg-slate-50 border-2 border-slate-100 resize-none" />
        </div>
      </div>
    </Workspace>
  );
};

export default EventPage;