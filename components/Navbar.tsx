
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Benefícios', href: '#benefits' },
    { label: 'Metodologia', href: '#methodology' },
    { label: 'Horários', href: '#schedule' },
    { label: 'Módulos', href: '#modules' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-slate-950/80 backdrop-blur-xl border-b border-white/10 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <span className="text-xl md:text-2xl font-bold text-white transition-all group-hover:scale-105">
              <span className="text-amber-400">Lexis</span> English
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <a 
                key={link.label}
                href={link.href} 
                className="text-slate-300 hover:text-amber-400 text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <button className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-6 py-2 rounded-lg transition-all hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] active:scale-95">
              Começar Agora
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-slate-900 border-b border-white/10 transition-all duration-300 overflow-hidden ${
        mobileMenuOpen ? 'max-h-screen py-6 opacity-100' : 'max-h-0 py-0 opacity-0'
      }`}>
        <div className="flex flex-col items-center gap-6 px-6">
          {navLinks.map(link => (
            <a 
              key={link.label}
              href={link.href} 
              className="text-slate-200 text-lg font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <button className="w-full bg-amber-500 text-slate-950 font-bold py-3 rounded-lg">
            Começar Agora
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
