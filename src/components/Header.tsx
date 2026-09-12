import React, { useState } from 'react';
import { Droplets, MapPin, BookOpen, AlertTriangle, ShieldCheck, Users, Menu, X, Recycle } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'mapa', label: 'Mapa Interactivo', icon: MapPin },
    { id: 'distincion', label: 'Arsénico vs Boro/Aluminio', icon: AlertTriangle },
    { id: 'estudios', label: 'Evidencia Científica', icon: BookOpen },
    { id: 'distritos', label: 'Consulta tu Distrito', icon: Droplets },
    { id: 'innovacion', label: 'Innovación & Circularidad', icon: Recycle },
    { id: 'guia', label: 'Mitos y Guía Hogar', icon: ShieldCheck },
    { id: 'voluntariado', label: 'El Perro Azul', icon: Users },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#ebf0f7]/95 backdrop-blur-md border-b border-white/80 shadow-[0_6px_20px_rgba(166,180,200,0.35)]">
      {/* Top Civic Banner */}
      <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 text-white text-xs sm:text-sm py-1.5 px-4 font-medium shadow-inner">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-amber-300 animate-pulse shadow-[0_0_8px_#fde047]" />
            <span className="font-semibold tracking-wide">ALERTA REGIONAL TACNA:</span>
            <span className="hidden sm:inline">Portal Ciudadano de Calidad del Agua y Escasez Hídrica</span>
          </div>
          <div className="flex items-center gap-3 text-xs">
            <a
              href="https://instagram.com/azulperro26"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 bg-white/20 hover:bg-white/30 text-white px-2.5 py-0.5 rounded-full text-[11px] font-bold transition-colors border border-white/30 shadow-sm"
            >
              <span>Voluntariado IG:</span>
              <span className="underline">@azulperro26</span>
            </a>
            <span className="bg-blue-900/60 px-2.5 py-0.5 rounded-full border border-blue-300/30 text-blue-100 font-mono">
              7 Estudios Verificados
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo & Name */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNavClick('hero')}>
            {/* Logo Image with 2026 Neumorphic Frame */}
            <div className="relative overflow-hidden rounded-2xl neu-flat w-13 h-13 sm:w-14 sm:h-14 bg-white flex-shrink-0 flex items-center justify-center p-1 transition-all duration-300 hover:scale-105 shadow-sm">
              <img
                src="/perro-azul-icon.jpg"
                alt="Logo El Perro Azul - Voluntariado Tacna"
                className="w-full h-full object-contain rounded-xl"
                onError={(e) => {
                  const img = e.currentTarget;
                  if (img.src.indexOf('logo-perro-azul.jpg') === -1) {
                    img.src = '/logo-perro-azul.jpg';
                  }
                }}
              />
            </div>

            {/* Brand Typography */}
            <div className="flex flex-col">
              <div className="flex items-baseline gap-1.5">
                <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Voluntariado</span>
                <span className="text-[10px] px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full font-bold border border-blue-200 shadow-sm">Tacna</span>
              </div>
              <h1 className="text-xl sm:text-2xl font-black text-blue-700 tracking-tight leading-none flex items-center gap-1 font-serif italic">
                El Perro Azul
              </h1>
              <p className="text-[9.5px] sm:text-[10px] font-black text-slate-700 tracking-[0.2em] uppercase font-mono mt-0.5">
                LIDERA • IMPACTA • CRECE
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5 bg-[#e2e8f2]/60 p-1.5 rounded-2xl border border-white/80 neu-inset">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'neu-btn-blue text-white shadow-md'
                      : 'text-slate-700 hover:text-blue-700 hover:bg-white/60'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-blue-600'}`} />
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Action CTA */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => handleNavClick('mapa')}
              className="neu-btn-blue font-bold text-xs uppercase tracking-wider px-4 py-2.5 rounded-xl flex items-center gap-2 cursor-pointer transition-all"
            >
              <MapPin className="w-4 h-4 text-amber-300" />
              Explorar Mapa
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl neu-btn text-slate-700 hover:text-blue-600"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#ebf0f7] border-b border-slate-300 px-4 pt-2 pb-4 space-y-2 shadow-xl animate-fade-in">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-bold text-left transition-all ${
                  isActive ? 'neu-btn-blue text-white' : 'neu-btn text-slate-700'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-blue-600'}`} />
                {item.label}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
