import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    document.title = "Crypto QR Code Generator | Secure Bitcoin & Ethereum Payments";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Generate a secure cryptocurrency payment QR code. Support for Bitcoin, Ethereum, and more. Pre-fill addresses and amounts for zero-error transactions.');
    }
  }, []);

  return (
    <div className="flex flex-col">
      <section className="bg-white border-b border-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 text-orange-700 text-[10px] font-black uppercase tracking-widest rounded-full border border-orange-100 mb-6">
            Digital Asset Tools
          </div>
          <h1 className="text-4xl md:text-7xl font-display font-black text-slate-900 tracking-tighter mb-6">
            Crypto <span className="text-orange-600">QR Generator</span>
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
        </div>
      </Workspace>

      <article className="max-w-5xl mx-auto px-6 py-24 space-y-24">
        <section className="space-y-8">
           <h3 className="text-3xl font-display font-black text-slate-900 text-center">Crypto QR FAQ</h3>
           <div className="grid md:grid-cols-2 gap-6">
             {[
               { q: "Is the bitcoin qr code generator safe?", a: "Yes. Our tool runs in your browser and we never see your wallet addresses." },
               { q: "Can I use this for multiple coins?", a: "Yes! Our tool supports Bitcoin, Ethereum, Solana, and more." },
               { q: "Does it support pre-filled amounts?", a: "Yes, you can specify an amount to make the transaction even faster." },
               { q: "Can I add my business logo?", a: "Yes! Use the 'Logo' tab to provide visual trust to your payers." }
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