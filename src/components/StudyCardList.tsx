import React, { useState } from 'react';
import { SCIENTIFIC_STUDIES } from '../data/studies';
import { ScientificStudy, ContaminantType, EvidenceLevel } from '../types';
import { Search, ExternalLink, ArrowUpRight, BookOpen, AlertCircle, CheckCircle, FileText } from 'lucide-react';

interface StudyCardListProps {
  onSelectStudy: (study: ScientificStudy) => void;
}

export const StudyCardList: React.FC<StudyCardListProps> = ({ onSelectStudy }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredStudies = SCIENTIFIC_STUDIES.filter((study) => {
    // Filter logic
    if (activeFilter === 'clinica' && study.evidenceLevel !== 'clinica_humana') return false;
    if (activeFilter === 'ambiental' && study.evidenceLevel !== 'monitoreo_ambiental') return false;
    if (activeFilter === 'arsenico' && study.contaminant !== 'arsenico' && study.contaminant !== 'mixto') return false;
    if (activeFilter === 'boro' && study.contaminant !== 'boro' && study.contaminant !== 'mixto') return false;
    if (activeFilter === 'aluminio' && study.contaminant !== 'aluminio') return false;

    // Search logic
    if (searchTerm.trim() !== '') {
      const term = searchTerm.toLowerCase();
      const matchTitle = study.title.toLowerCase().includes(term);
      const matchLocation = study.locationName.toLowerCase().includes(term);
      const matchHealth = study.healthFindingsSummary.toLowerCase().includes(term);
      const matchCitation = study.fullCitation.toLowerCase().includes(term);
      return matchTitle || matchLocation || matchHealth || matchCitation;
    }

    return true;
  });

  return (
    <section id="estudios" className="py-12 bg-[#ebf0f7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-2 border border-blue-200 shadow-sm">
            <BookOpen className="w-3.5 h-3.5 text-blue-600" />
            Evidencia Documentada
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight">
            Archivo Científico de la Calidad del Agua en Tacna
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base">
            Cada uno de los 7 estudios y reportes oficiales que sustentan nuestra labor ciudadana. 
            Haz clic en cualquier ficha para revisar la metodología, valores medidos y enlaces a SciELO, UNJBG, UPCH e Infobae.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          
          {/* Filter Chips */}
          <div className="flex flex-wrap gap-2.5 w-full md:w-auto">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeFilter === 'all'
                  ? 'neu-btn-blue text-white shadow-inner font-extrabold'
                  : 'neu-btn text-slate-700'
              }`}
            >
              Todos ({SCIENTIFIC_STUDIES.length})
            </button>
            <button
              onClick={() => setActiveFilter('clinica')}
              className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeFilter === 'clinica'
                  ? 'bg-rose-600 text-white shadow-[inset_2px_2px_5px_rgba(0,0,0,0.3)] font-extrabold'
                  : 'neu-btn text-rose-700'
              }`}
            >
              <span>🔴 Evidencia Clínica en Humanos (3)</span>
            </button>
            <button
              onClick={() => setActiveFilter('boro')}
              className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeFilter === 'boro'
                  ? 'bg-amber-600 text-white shadow-[inset_2px_2px_5px_rgba(0,0,0,0.3)] font-extrabold'
                  : 'neu-btn text-amber-800'
              }`}
            >
              <span>🟡 Boro en Agua (2)</span>
            </button>
            <button
              onClick={() => setActiveFilter('aluminio')}
              className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeFilter === 'aluminio'
                  ? 'bg-slate-700 text-white shadow-[inset_2px_2px_5px_rgba(0,0,0,0.3)] font-extrabold'
                  : 'neu-btn text-slate-700'
              }`}
            >
              <span>⚪ Aluminio (2)</span>
            </button>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar por lugar, autor..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl neu-inset focus:outline-none text-xs sm:text-sm font-medium text-slate-800 placeholder-slate-400"
            />
          </div>

        </div>

        {/* Study Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStudies.map((study) => {
            const isClinical = study.evidenceLevel === 'clinica_humana';

            return (
              <div
                key={study.id}
                className="neu-flat rounded-3xl hover:neu-convex transition-all flex flex-col justify-between overflow-hidden cursor-pointer border border-white/60 group"
                onClick={() => onSelectStudy(study)}
              >
                {/* Card Header Badge */}
                <div className="p-6 pb-0">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span
                      className={`text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full ${
                        isClinical
                          ? 'bg-rose-100 text-rose-700'
                          : 'bg-amber-100 text-amber-800'
                      }`}
                    >
                      {isClinical ? '🔴 Evidencia Clínica (Humanos)' : '🟡 Monitoreo Ambiental (Agua)'}
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-500">{study.year}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-black text-slate-800 leading-snug group-hover:text-blue-700 transition-colors">
                    {study.title}
                  </h3>

                  <p className="text-xs text-slate-500 mt-1.5 font-semibold">
                    📍 {study.locationName}
                  </p>
                </div>

                {/* Card Body Findings */}
                <div className="p-6 space-y-3">
                  <div className="neu-inset rounded-2xl p-3.5">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Valores Clave:</div>
                    <div className="text-xs font-extrabold text-slate-800 mt-0.5 line-clamp-2">
                      {study.measuredValues}
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {study.healthFindingsSummary}
                  </p>
                </div>

                {/* Card Footer Actions */}
                <div className="px-6 py-4 border-t border-slate-200/60 flex items-center justify-between gap-2 bg-slate-100/40">
                  <span className="text-[11px] font-mono text-slate-500 truncate max-w-[180px]">
                    {study.sourceName}
                  </span>

                  <div className="flex items-center gap-1.5 text-blue-700 font-bold text-xs">
                    <span>Ver Ficha</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Empty state */}
        {filteredStudies.length === 0 && (
          <div className="text-center py-12 neu-inset rounded-3xl">
            <p className="text-slate-600 font-semibold">No se encontraron estudios con el término de búsqueda ingresado.</p>
            <button
              onClick={() => { setActiveFilter('all'); setSearchTerm(''); }}
              className="mt-3 text-xs font-bold text-blue-600 underline cursor-pointer"
            >
              Restablecer filtros
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
