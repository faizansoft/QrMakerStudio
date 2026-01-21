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
            Payment Tools
          </div>
          <h1 className="text-4xl md:text-7xl font-display font-black text-slate-900 tracking-tighter mb-6">
            Bitcoin QR <span className="text-orange-600">Generator</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 font-medium max-w-3xl mx-auto leading-relaxed">
            Simplify crypto payments. Our <strong>bitcoin qr code generator</strong> creates secure, scannable wallet links with custom branding and amount pre-filling.
          </p>
        </div>
      </section>

      <Workspace type="crypto" value={val} {...props}>
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Cryptocurrency</label>
            <select 
              value={c.coin} 
              onChange={e => setC({...c, coin: e.target.value})} 
              className="w-full p-4 rounded-xl bg-slate-50 border-2 border-slate-100 font-bold appearance-none cursor-pointer focus:border-orange-500"
            >
              <option value="bitcoin">Bitcoin (BTC)</option>
              <option value="ethereum">Ethereum (ETH)</option>
              <option value="litecoin">Litecoin (LTC)</option>
              <option value="dogecoin">Dogecoin (DOGE)</option>
              <option value="solana">Solana (SOL)</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Wallet Address</label>
            <input type="text" placeholder="Paste address here..." value={c.address} onChange={e => setC({...c, address: e.target.value})} className="w-full p-4 rounded-xl bg-slate-50 border-2 border-slate-100 font-mono text-xs focus:border-orange-500" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Amount (Optional)</label>
            <input type="number" placeholder="0.00" value={c.amount} onChange={e => setC({...c, amount: e.target.value})} className="w-full p-4 rounded-xl bg-slate-50 border-2 border-slate-100 font-bold focus:border-orange-500" />
          </div>
        </div>
      </Workspace>

      <article className="max-w-5xl mx-auto px-6 py-24 space-y-24">
        <section className="space-y-6 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900">Professional bitcoin qr code generator for secure payments</h2>
          <p className="text-slate-600 leading-relaxed font-medium text-lg max-w-3xl mx-auto">
            Manually typing wallet addresses is risky and tedious. Our <strong>bitcoin qr code generator</strong> eliminates errors by encoding your exact address and optional payment amount into a secure QR format recognized by all major crypto wallets.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-12">
           <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900">Why use our Crypto QR tool?</h3>
              <ul className="space-y-3 text-sm text-slate-500 font-medium">
                <li className="flex gap-2">
                  <span className="text-orange-600 font-black">✓</span>
                  <span><strong>Zero Errors:</strong> Scanning prevents the loss of funds due to mistyped addresses.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-orange-600 font-black">✓</span>
                  <span><strong>Custom Branding:</strong> Add your shop logo with our <strong>qr code with logo in middle</strong> feature.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-orange-600 font-black">✓</span>
                  <span><strong>Fast Checkout:</strong> Pre-fill amounts to speed up physical crypto payments in-store.</span>
                </li>
              </ul>
           </div>
           <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
              <h4 className="font-bold text-slate-900 mb-2">Safe & Static</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                When you <strong>create a custom qr code</strong> for crypto here, it is static. We never track your wallet balance or transaction history. Our <strong>bitcoin qr code generator</strong> is a pure utility for privacy-conscious users.
              </p>
           </div>
        </section>

        <section className="space-y-8">
           <h3 className="text-3xl font-display font-black text-slate-900 text-center">Crypto QR FAQ</h3>
           <div className="grid md:grid-cols-2 gap-6">
             {[
               { q: "How to use the bitcoin qr code generator?", a: "Select your coin, paste your public wallet address, and optional amount. The <strong>bitcoin qr code generator</strong> will update instantly." },
               { q: "Is it safe to share these codes?", a: "Yes. You are only sharing your *public* address. Your <strong>bitcoin qr code generator</strong> results do not contain your private keys." },
               { q: "Can I use an svg qr code generator for large signs?", a: "Absolutely. Our <strong>qr code svg generator</strong> provides vector files for high-quality store signage." },
               { q: "Does it work with Ethereum and Solana?", a: "Yes, our tool is a multi-coin <strong>bitcoin qr code generator</strong> supporting ETH, SOL, DOGE, and more." }
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