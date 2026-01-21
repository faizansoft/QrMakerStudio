import React, { useState } from 'react';
import Workspace from './Workspace';
import { QRConfig } from './types';

interface PageProps {
  styling: Omit<QRConfig, 'value'>;
  setStyling: React.Dispatch<React.SetStateAction<Omit<QRConfig, 'value'>>>;
  logoSrc: string | null;
  setLogoSrc: (src: string | null) => void;
}

const CryptoPage: React.FC<PageProps> = (props) => {
  const [c, setC] = useState({ coin: 'bitcoin', address: '', amount: '' });
  const val = `${c.coin}:${c.address}${c.amount ? `?amount=${c.amount}` : ''}`;

  return (
    <div className="flex flex-col">
      <section className="bg-white border-b border-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 text-orange-700 text-[10px] font-black uppercase tracking-widest rounded-full border border-orange-100 mb-6">
            Digital Asset Tools
          </div>
          <h1 className="text-4xl md:text-7xl font-display font-black text-slate-900 tracking-tighter mb-6">
            Crypto QR <span className="text-orange-600">Generator</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 font-medium max-w-3xl mx-auto leading-relaxed">
            Eliminate address errors. Our <strong>bitcoin qr code generator</strong> creates secure, scannable payment links with custom branding for your shop or donations.
          </p>
        </div>
      </section>

      <Workspace type="crypto" value={val} {...props}>
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Select Network / Coin</label>
            <select 
              value={c.coin} 
              onChange={e => setC({...c, coin: e.target.value})} 
              className="w-full p-4 rounded-xl bg-slate-50 border-2 border-slate-100 font-bold appearance-none cursor-pointer focus:border-orange-500 outline-none"
            >
              <option value="bitcoin">Bitcoin (BTC)</option>
              <option value="ethereum">Ethereum (ETH)</option>
              <option value="solana">Solana (SOL)</option>
              <option value="dogecoin">Dogecoin (DOGE)</option>
              <option value="litecoin">Litecoin (LTC)</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Public Wallet Address</label>
            <input type="text" placeholder="e.g. 1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa" value={c.address} onChange={e => setC({...c, address: e.target.value})} className="w-full p-4 rounded-xl bg-slate-50 border-2 border-slate-100 font-mono text-sm focus:border-orange-500 outline-none shadow-inner" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Requested Amount (Optional)</label>
            <input type="number" step="0.00000001" placeholder="0.00" value={c.amount} onChange={e => setC({...c, amount: e.target.value})} className="w-full p-4 rounded-xl bg-slate-50 border-2 border-slate-100 font-bold focus:border-orange-500 outline-none" />
          </div>
        </div>
      </Workspace>

      <article className="max-w-5xl mx-auto px-6 py-24 space-y-24">
        <section className="space-y-8">
          <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900 leading-tight">Zero-Error <br/>Crypto Payments.</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <p className="text-slate-600 leading-relaxed font-medium text-lg">
              Mistyping a crypto address can mean the permanent loss of funds. Our <strong>bitcoin qr code generator</strong> removes this risk by encoding your public key directly into a scannable pattern. Whether you are collecting tips, selling merchandise, or receiving payments, a <strong>custom qr code</strong> ensures accuracy.
            </p>
            <div className="p-8 bg-orange-50 rounded-[3rem] border border-orange-100">
               <h4 className="font-bold text-orange-900 mb-2">Safe by Design</h4>
               <p className="text-sm text-orange-700 leading-relaxed">We only require your *public* address. Never enter a seed phrase or private key into any <strong>crypto qr code generator</strong>. Our tool is 100% static and client-side.</p>
            </div>
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-8">
           {[
             { title: "Retail Checkout", desc: "Display a <strong>bitcoin qr code generator</strong> output at your register. Speed up payments for your tech-savvy customers." },
             { title: "Donation Signs", desc: "Non-profits can use a <strong>qr code with logo in middle</strong> to collect crypto donations at physical locations." },
             { title: "Digital Art", desc: "Artists can include a <strong>customizable qr code</strong> on physical prints to allow fans to send support directly." }
           ].map((item, idx) => (
             <div key={idx} className="p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:border-orange-200 transition-all">
                <h4 className="font-bold text-slate-900 text-lg mb-4" dangerouslySetInnerHTML={{ __html: item.title }} />
                <p className="text-sm text-slate-500 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.desc }} />
             </div>
           ))}
        </section>

        <section className="bg-slate-900 text-white p-12 rounded-[4rem] space-y-8 relative overflow-hidden">
           <div className="relative z-10 space-y-6">
             <h3 className="text-3xl font-display font-black">High-Resolution Vector Exports</h3>
             <p className="text-slate-400 font-medium leading-relaxed max-w-3xl">
               Crypto QR codes must be perfect to ensure high-value transactions scan correctly. Our <strong>qr code svg generator</strong> provides mathematically precise vector files for professional signage, ensuring that every dot is rendered with 100% clarity on any material.
             </p>
             <div className="flex flex-wrap gap-4">
                {['No Blur', 'SVG Support', 'PNG High-Res', 'Secure Offline'].map(tag => (
                  <span key={tag} className="px-4 py-1 bg-slate-800 rounded-full text-[10px] font-black uppercase text-orange-400 tracking-widest">{tag}</span>
                ))}
             </div>
           </div>
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-600/5 rounded-full blur-3xl -ml-32 -mb-32"></div>
        </section>

        <section className="space-y-8">
           <h3 className="text-3xl font-display font-black text-slate-900 text-center">Crypto QR FAQ</h3>
           <div className="grid md:grid-cols-2 gap-6">
             {[
               { q: "Is the bitcoin qr code generator safe?", a: "Yes. Our tool is <strong>privacy-first</strong>. It runs entirely in your browser and we never see your wallet addresses. We only generate a static pattern from the data you provide." },
               { q: "Can I use this for multiple coins?", a: "Absolutely. Our tool supports Bitcoin, Ethereum, Solana, and more. Simply select your network from the dropdown in the <strong>crypto qr code generator</strong>." },
               { q: "Does it support pre-filled amounts?", a: "Yes, you can specify an amount to make the transaction even faster for your customers. Most modern wallets support this 'URI' parameter." },
               { q: "Can I add my business logo?", a: "Yes! Use the 'Logo' tab to create a <strong>qr code with logo in middle</strong> to provide visual trust to your payers." }
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

export default CryptoPage;