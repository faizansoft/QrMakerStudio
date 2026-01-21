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

const CryptoPage: React.FC<PageProps> = (props) => {
  const [c, setC] = useState({ coin: 'bitcoin', address: '', amount: '' });
  const val = `${c.coin}:${c.address}${c.amount ? `?amount=${c.amount}` : ''}`;

  useEffect(() => {
    document.title = "Crypto QR Code Generator | Secure Payments for Bitcoin & ETH";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Generate a professional cryptocurrency payment QR code. Avoid address errors and boost trust. Support for Bitcoin, Ethereum, and more. Free SVG exports.');
    }
  }, []);

  return (
    <div className="flex flex-col">
      <section className="bg-white border-b border-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 text-orange-700 text-[10px] font-black uppercase tracking-widest rounded-full border border-orange-100 mb-6">
            Digital Asset Management
          </div>
          <h1 className="text-4xl md:text-7xl font-display font-black text-slate-900 tracking-tighter mb-6">
            Crypto <span className="text-orange-600">QR Generator</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 font-medium max-w-3xl mx-auto leading-relaxed">
            Eliminate transaction errors forever. Our <strong>branded cryptocurrency QR maker</strong> ensures that your public wallet address is encoded perfectly, allowing donors and customers to pay you with absolute confidence.
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
          <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900 leading-tight">Securing Your Digital Payments</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-slate-600 leading-relaxed font-medium text-lg">
                In the world of blockchain, mistakes are irreversible. A single mistyped character in a 34-digit wallet address can lead to the permanent loss of funds. For businesses and creators accepting digital assets, providing a raw string of text is no longer a professional standard. 
              </p>
              <p className="text-slate-600 leading-relaxed font-medium">
                A <strong>Bitcoin QR code generator</strong> creates a visual representation of your address that can be parsed instantly by any mobile wallet. By using our <strong>customizable crypto QR maker</strong>, you're not just improving security—you're building trust. When a user scans a branded QR that features your logo and brand colors, they feel significantly more comfortable that they are sending funds to the correct, verified destination.
              </p>
            </div>
            <div className="p-8 bg-orange-50 rounded-[3rem] border border-orange-100 space-y-4">
              <h3 className="text-lg font-bold text-orange-900">Why Crypto Users Prefer QRs:</h3>
              <ul className="space-y-3 text-sm text-orange-800 font-medium">
                <li className="flex gap-2"><span>✓</span> <strong>Zero Errors:</strong> Addresses are parsed perfectly every time.</li>
                <li className="flex gap-2"><span>✓</span> <strong>Speed:</strong> Scan-and-pay takes less than 3 seconds.</li>
                <li className="flex gap-2"><span>✓</span> <strong>Trust:</strong> Center logos provide visual verification.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-12">
          <h2 className="text-3xl font-display font-black text-slate-900 text-center">Accepting Crypto in the Real World</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 text-lg mb-4">Retail Checkout</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Add a <strong>payment QR code</strong> to your point-of-sale display. Let customers pay in BTC or ETH as easily as they would with a credit card.
              </p>
            </div>
            <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 text-lg mb-4">Donation Tents</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Promote your cause at events. A <strong>branded crypto QR</strong> on a banner allows supporters to contribute to your mission instantly.
              </p>
            </div>
            <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 text-lg mb-4">Freelance Invoices</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Include a <strong>crypto address QR</strong> in your digital or physical invoices. It makes the payment process friction-free for your global clients.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-slate-900 text-white p-12 rounded-[4rem] space-y-8 text-center">
          <h2 className="text-3xl font-display font-black">Professional Technical Standards</h2>
          <p className="text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium">
            Our <strong>branded QR maker</strong> uses the BIP-21 standard for Bitcoin and similar BIP-compliant URI schemes for other assets. This ensures that when the code is scanned, the wallet app knows exactly which coin and address to use. For high-security printing, we recommend our <strong>SVG vector export</strong>. This guarantees that your <strong>crypto payment QR</strong> remains mathematically precise and scannable at any resolution.
          </p>
        </section>

        <section className="space-y-8">
           <h2 className="text-3xl font-display font-black text-slate-900 text-center">Crypto QR FAQ</h2>
           <div className="grid md:grid-cols-2 gap-6">
             {[
               { q: "Is the Bitcoin QR generator safe?", a: "Yes. <strong>QR Generator Online</strong> processes all data locally in your browser. We never see, store, or transmit your public wallet addresses to our servers." },
               { q: "Can I add my business logo?", a: "Absolutely. Navigate to the 'Logo' tab in our workspace to create a <strong>QR code with logo in middle</strong> to boost trust with your payers." },
               { q: "Which coins do you support?", a: "We support all major networks including Bitcoin (BTC), Ethereum (ETH), Solana (SOL), and Litecoin (LTC) through our flexible URI builder." },
               { q: "Does the code ever expire?", a: "No. These are <strong>static QR codes</strong>. As long as your public wallet address remains valid on the blockchain, the code will work." }
             ].map((faq, i) => (
               <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                 <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                 <p className="text-xs text-slate-500 leading-relaxed" dangerouslySetInnerHTML={{ __html: faq.a }} />
               </div>
             ))}
           </div>
        </section>

        <section className="pt-12 border-t border-slate-100 text-center space-y-8">
          <h2 className="text-2xl font-display font-black text-slate-900">Explore Other Professional Tools</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/url-qr-code-generator" className="px-6 py-3 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-600 hover:border-indigo-600 hover:text-indigo-600 transition-all">URL Maker</Link>
            <Link to="/wifi-qr-code-generator" className="px-6 py-3 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-600 hover:border-indigo-600 hover:text-indigo-600 transition-all">WiFi Sharing</Link>
            <Link to="/vcard-qr-code-generator" className="px-6 py-3 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-600 hover:border-indigo-600 hover:text-indigo-600 transition-all">Business Cards</Link>
            <Link to="/text-qr-code-generator" className="px-6 py-3 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-600 hover:border-indigo-600 hover:text-indigo-600 transition-all">Plain Text</Link>
          </div>
        </section>
      </article>
    </div>
  );
};

export default CryptoPage;