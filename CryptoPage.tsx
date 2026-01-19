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
    <Workspace type="crypto" value={val} {...props}>
      <div className="space-y-6">
        <div className="space-y-2">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Cryptocurrency</label>
          <select 
            value={c.coin} 
            onChange={e => setC({...c, coin: e.target.value})} 
            className="w-full p-4 rounded-xl bg-slate-50 border-2 border-slate-100 font-bold appearance-none cursor-pointer"
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
          <input type="text" placeholder="Paste address here..." value={c.address} onChange={e => setC({...c, address: e.target.value})} className="w-full p-4 rounded-xl bg-slate-50 border-2 border-slate-100 font-mono text-xs" />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Amount (Optional)</label>
          <input type="number" placeholder="0.00" value={c.amount} onChange={e => setC({...c, amount: e.target.value})} className="w-full p-4 rounded-xl bg-slate-50 border-2 border-slate-100 font-bold" />
        </div>
      </div>
    </Workspace>
  );
};

export default CryptoPage;