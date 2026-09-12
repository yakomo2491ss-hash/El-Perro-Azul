import React, { useState } from 'react';
import { DISTRICT_PROFILES, SCIENTIFIC_STUDIES } from '../data/studies';
import { DistrictWaterProfile, ScientificStudy } from '../types';
import { MapPin, Clock, Droplet, ShieldAlert, CheckCircle, ArrowRight } from 'lucide-react';

interface DistrictCheckerProps {
  onSelectStudy: (study: ScientificStudy) => void;
}

export const DistrictChecker: React.FC<DistrictCheckerProps> = ({ onSelectStudy }) => {
  const [selectedDistrictId, setSelectedDistrictId] = useState<string>(DISTRICT_PROFILES[0].id);

  const currentDistrict = DISTRICT_PROFILES.find((d) => d.id === selectedDistrictId) || DISTRICT_PROFILES[0];

  const linkedStudies = SCIENTIFIC_STUDIES.filter((s) => 
    currentDistrict.relevantStudyIds.includes(s.id)
  );

  return (
    <section id="distritos" className="py-12 bg-[#ebf0f7] border-t border-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-2 border border-blue-200 shadow-sm">
            <Droplet className="w-3.5 h-3.5 text-blue-600" />
            Vigilancia Barrial y Distrital
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight">
            Consulta la Realidad Hídrica de tu Distrito
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base">
            Selecciona el distrito o cuenca donde vives para conocer de dónde se capta tu agua, cuántas horas de servicio hay en promedio y qué precauciones tomar en tu hogar.
          </p>
        </div>

        {/* District Selector Tabs */}
        <div className="flex flex-wrap gap-2.5 mb-8">
          {DISTRICT_PROFILES.map((district) => {
            const isSelected = district.id === selectedDistrictId;
            return (
              <button
                key={district.id}
                onClick={() => setSelectedDistrictId(district.id)}
                className={`px-4 py-2.5 rounded-2xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                  isSelected
                    ? 'neu-btn-blue text-white shadow-inner font-extrabold'
                    : 'neu-btn text-slate-700'
                }`}
              >
                {district.name}
              </button>
            );
          })}
        </div>

        {/* District Profile Presentation Box */}
        <div className="neu-flat rounded-3xl p-6 sm:p-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left: Sources & Rationing Status */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex items-center justify-between border-b border-slate-200/70 pb-4">
                <div>
                  <span className="text-xs font-bold uppercase text-slate-500 tracking-wider">Provincia: {currentDistrict.province}</span>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-800">{currentDistrict.name}</h3>
                </div>
                <div className="neu-inset text-blue-800 px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold">
                  Perfil Vecinal
                </div>
              </div>

              {/* Water Sources */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5 flex items-center gap-1.5">
                  <Droplet className="w-4 h-4 text-blue-600" />
                  ¿De dónde proviene el agua de este sector?
                </h4>
                <div className="flex flex-wrap gap-2">
                  {currentDistrict.waterSources.map((src, i) => (
                    <span key={i} className="neu-inset text-slate-700 text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-xl">
                      💧 {src}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tandeo / Hours */}
              <div className="neu-card-amber rounded-2xl p-4 flex items-start gap-3">
                <Clock className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-amber-900">
                    Disponibilidad y Tandeo Promedio:
                  </div>
                  <div className="text-base font-extrabold text-amber-950 mt-0.5">
                    {currentDistrict.rationingAvgHours}
                  </div>
                </div>
              </div>

              {/* Notes & Risk Context */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
                  <ShieldAlert className="w-4 h-4 text-rose-600" />
                  Antecedente Crítico Documentado:
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed neu-inset p-4 rounded-2xl">
                  {currentDistrict.primaryRiskNotes}
                </p>
              </div>

              {/* Practical Advice */}
              <div className="neu-convex rounded-2xl p-4 border border-emerald-200/50">
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5 mb-1">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  Consejo Práctico de El Perro Azul:
                </div>
                <p className="text-sm font-semibold text-slate-800">
                  {currentDistrict.waterAdvice}
                </p>
              </div>

            </div>

            {/* Right: Relevant Scientific Studies for this zone */}
            <div className="lg:col-span-5 neu-convex rounded-3xl p-5 sm:p-6 flex flex-col justify-between">
              <div>
                <h4 className="text-sm font-black text-slate-800 uppercase tracking-wider mb-4 flex items-center justify-between">
                  <span>Estudios que aplican a tu zona</span>
                  <span className="text-xs neu-inset text-slate-700 px-2.5 py-0.5 rounded-full font-mono font-bold">
                    {linkedStudies.length}
                  </span>
                </h4>

                <div className="space-y-3">
                  {linkedStudies.map((study) => {
                    const isClinical = study.evidenceLevel === 'clinica_humana';
                    return (
                      <div
                        key={study.id}
                        onClick={() => onSelectStudy(study)}
                        className="neu-flat p-4 rounded-2xl hover:neu-convex cursor-pointer transition-all border border-white/60"
                      >
                        <div className="flex items-center justify-between gap-1 mb-1.5">
                          <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${isClinical ? 'bg-rose-100 text-rose-700' : 'bg-amber-100 text-amber-800'}`}>
                            {isClinical ? '🔴 Evidencia Clínica' : '🟡 Monitoreo Agua'}
                          </span>
                          <span className="text-[10px] text-slate-500 font-mono">{study.year}</span>
                        </div>
                        <h5 className="font-bold text-xs sm:text-sm text-slate-800 line-clamp-2">
                          {study.shortTitle}
                        </h5>
                        <div className="flex items-center justify-end text-[11px] font-bold text-blue-700 mt-2.5 gap-1">
                          <span>Ver Ficha</span>
                          <ArrowRight className="w-3 h-3" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-200/70 text-[11px] text-slate-500 text-center font-medium">
                ¿Vives en otra asociación o asentamiento humano? Todos los distritos de Tacna comparten las mismas fuentes matrices de captación.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
