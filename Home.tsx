import React, { useState } from 'react';
import QRGenerator from './QRGenerator';

const TABS = [
  { id: 'url', label: 'URL', icon: '🔗' },
  { id: 'wifi', label: 'WiFi', icon: '📶' },
  { id: 'vcard', label: 'vCard', icon: '👤' },
  { id: 'text', label: 'Text', icon: '📝' },
  { id: 'email', label: 'Email', icon: '📧' },
  { id: 'sms', label: 'SMS', icon: '💬' },
  { id: 'phone', label: 'Phone', icon: '📞' },
  { id: 'whatsapp', label: 'WhatsApp', icon: '💚' },
  { id: 'facebook', label: 'Facebook', icon: '📘' },
  { id: 'location', label: 'Location', icon: '📍' },
  { id: 'event', label: 'Event', icon: '📅' },
  { id: 'crypto', label: 'Crypto', icon: '₿' },
  { id: 'googleform', label: 'Google Form', icon: '📋' },
];

const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState('url');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <span className="text-white text-xl">QR</span>
            </div>
            <span className="text-xl font-bold text-slate-900">QR Generator</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Home</a>
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">About</a>
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Create QR Codes in Seconds
          </h1>
          <p className="text-lg text-slate-600 mb-8">
            Free, fast, and easy. Generate professional QR codes for any purpose.
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-xl">★</span>
              ))}
            </div>
            <span className="text-sm font-medium text-slate-500">4.8/5 rating</span>
          </div>
        </div>
      </section>

      {/* Main QR Generator Section */}
      <section id="qr-generator" className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            {/* Tabs */}
            <div className="border-b border-slate-200">
              <div className="flex overflow-x-auto">
                {TABS.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-6 py-4 font-medium text-sm whitespace-nowrap transition-all ${
                      activeTab === tab.id
                        ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600'
                        : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <span>{tab.icon}</span>
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <QRGenerator type={activeTab} />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🆓</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">100% Free</h3>
              <p className="text-slate-600">No fees, no subscriptions, no limits</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🔒</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Privacy First</h3>
              <p className="text-slate-600">All processing happens in your browser</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Instant Download</h3>
              <p className="text-slate-600">Get your QR codes immediately</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">QR Generator</h3>
              <p className="text-slate-400 text-sm">Create professional QR codes for free</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">QR Types</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>URL QR Codes</li>
                <li>WiFi QR Codes</li>
                <li>vCard QR Codes</li>
                <li>Text QR Codes</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>About Us</li>
                <li>Contact</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <div className="flex gap-4">
                <a href="#" className="text-slate-400 hover:text-white">Twitter</a>
                <a href="#" className="text-slate-400 hover:text-white">Facebook</a>
                <a href="#" className="text-slate-400 hover:text-white">LinkedIn</a>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-400">
            © 2026 QR Generator. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;