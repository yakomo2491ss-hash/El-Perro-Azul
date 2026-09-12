import React from 'react';
import { Sparkles, CheckCircle2, AlertTriangle, ShieldCheck, Droplets } from 'lucide-react';
import { CALANA_2025_UPDATE } from '../data/studies';

export const CalanaUpdateBanner: React.FC = () => {
  return (
    <section className="py-8 bg-[#ebf0f7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="neu-convex rounded-3xl p-6 sm:p-8 border border-white/90 relative overflow-hidden">
          
          {/* Top Badge */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-5 border-b border-slate-200/70 pb-4">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black uppercase tracking-wider border border-emerald-300 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                {CALANA_2025_UPDATE.badge}
              </span>
              <span className="text-xs text-slate-500 font-medium">
                {CALANA_2025_UPDATE.date}
              </span>
            </div>
            <div className="text-xs font-semibold text-slate-600 bg-white/70 px-3 py-1 rounded-xl neu-inset">
              Fuente: {CALANA_2025_UPDATE.entity}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Left 7 cols: What improved */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-11 h-11 rounded-2xl bg-emerald-100 border border-emerald-300 text-emerald-700 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Droplets className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-tight">
                    {CALANA_2025_UPDATE.title}
                  </h3>
                  <p className="text-xs font-bold text-emerald-700 mt-0.5">
                    Abatimiento automatizado de arsénico con cloruro férrico
                  </p>
                </div>
              </div>

              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                {CALANA_2025_UPDATE.summary}
              </p>

              <div className="neu-flat-white rounded-2xl p-4 space-y-2 border border-emerald-200/60">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wide">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  Red de Agua Potable Urbana Beneficiada:
                </div>
                <p className="text-xs text-slate-700 font-medium">
                  {CALANA_2025_UPDATE.benefitedUrbanDistricts} reciben agua con parámetros de arsénico dentro del límite normativo legal peruano (DS N° 031-2010-SA).
                </p>
              </div>
            </div>

            {/* Right 5 cols: What is NOT solved yet (Rigor) */}
            <div className="lg:col-span-5">
              <div className="neu-inset rounded-2xl p-4 sm:p-5 bg-amber-50/70 border border-amber-200/80 space-y-3">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-xs uppercase tracking-wider">
                  <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span>Lo que esta mejora AÚN NO resuelve:</span>
                </div>
                
                <ul className="space-y-2 text-xs text-slate-700">
                  {CALANA_2025_UPDATE.unresolvedIssues.map((issue, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 flex-shrink-0" />
                      <span className="leading-snug">{issue}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-2 border-t border-amber-200/60 text-[11px] text-amber-800 italic">
                  *El Perro Azul destaca este avance tecnológico pero mantiene su labor cívica por las zonas rurales y la protección integral de las cuencas.*
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
