import React from 'react';
import { ScientificStudy } from '../types';
import { X, ExternalLink, AlertOctagon, CheckCircle2, BookOpen, MapPin, Calendar, FileText, Share2 } from 'lucide-react';

interface StudyDetailModalProps {
  study: ScientificStudy | null;
  onClose: () => void;
}

export const StudyDetailModal: React.FC<StudyDetailModalProps> = ({ study, onClose }) => {
  if (!study) return null;

  const isClinical = study.evidenceLevel === 'clinica_humana';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div 
        className="bg-[#ebf0f7] w-full max-w-3xl rounded-3xl neu-convex overflow-hidden my-8 border border-white/60"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Top Banner */}
        <div className={`p-6 sm:p-7 text-white ${isClinical ? 'bg-gradient-to-r from-rose-600 to-rose-700' : 'bg-gradient-to-r from-amber-600 to-amber-700'} shadow-md`}>
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2.5">
                <span className="bg-white/20 text-white text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-full backdrop-blur-sm font-bold shadow-xs">
                  {isClinical ? '🔴 Evidencia Clínica en Humanos' : '🟡 Monitoreo Ambiental / Riesgo en Agua'}
                </span>
                <span className="bg-black/20 text-white text-xs px-2.5 py-1 rounded-full font-mono">
                  Año {study.year}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black leading-tight text-white">
                {study.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-black/20 hover:bg-black/30 text-white transition-all cursor-pointer flex-shrink-0"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto text-slate-800">
          
          {/* Quick Meta Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 neu-inset p-4 rounded-2xl text-sm">
            <div className="flex items-center gap-2.5">
              <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <div>
                <span className="text-xs text-slate-500 block font-bold uppercase">Ubicación Evaluada</span>
                <span className="font-semibold text-slate-800">{study.locationName}</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <BookOpen className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <div>
                <span className="text-xs text-slate-500 block font-bold uppercase">Fuente de Publicación</span>
                <span className="font-semibold text-slate-800">{study.sourceName}</span>
              </div>
            </div>
          </div>

          {/* Core Findings & Values */}
          <div className="space-y-2">
            <h4 className="font-bold text-slate-900 flex items-center gap-2 text-base">
              <AlertOctagon className={`w-5 h-5 ${isClinical ? 'text-rose-600' : 'text-amber-600'}`} />
              Concentraciones y Medición Científica
            </h4>
            <div className="neu-flat p-5 rounded-2xl">
              <div className="text-base font-extrabold text-slate-800 mb-1">
                {study.measuredValues}
              </div>
              <div className="text-xs text-slate-500 font-mono">
                <strong className="text-slate-700">Parámetro de comparación:</strong> {study.regulatoryLimit}
              </div>
            </div>
          </div>

          {/* Health Findings / Risk Assessment */}
          <div className="space-y-2">
            <h4 className="font-bold text-slate-900 text-base">
              {isClinical ? '🩺 Impacto Clínico Confirmado en Humanos' : '⚠️ Evaluación de Riesgo para la Salud'}
            </h4>
            <p className={`text-sm sm:text-base leading-relaxed p-5 rounded-2xl ${isClinical ? 'neu-card-red' : 'neu-card-amber'}`}>
              {study.healthFindingsSummary}
            </p>
          </div>

          {/* Key Bullet Points */}
          <div className="space-y-2">
            <h4 className="font-bold text-slate-900 text-base">
              Puntos Clave del Estudio:
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-700">
              {study.keyTakeaways.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 ${isClinical ? 'text-rose-600' : 'text-amber-600'}`} />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Scientific Methodology */}
          <div className="space-y-2">
            <h4 className="font-bold text-xs uppercase tracking-wider text-slate-500">
              Metodología del Estudio
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 italic neu-inset p-4 rounded-xl leading-relaxed">
              "{study.scientificMethodology}"
            </p>
          </div>

          {/* Citizen Practical Advice */}
          <div className="neu-convex rounded-2xl p-5 space-y-1.5 border border-blue-200/50">
            <h5 className="font-extrabold text-blue-900 text-sm flex items-center gap-1.5">
              <span>💡 Recomendación de El Perro Azul para el ciudadano:</span>
            </h5>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {study.citizenAdvice}
            </p>
          </div>

          {/* Full Academic Citation */}
          <div className="pt-3 border-t border-slate-200/80 text-xs text-slate-500 font-mono space-y-1">
            <span className="font-bold block uppercase text-slate-700">Cita Bibliográfica Completa:</span>
            <p className="leading-relaxed">{study.fullCitation}</p>
          </div>

        </div>

        {/* Modal Footer with Direct Source Link */}
        <div className="p-4 sm:p-6 neu-flat border-t border-slate-200/50 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="neu-btn px-4 py-2.5 rounded-xl text-slate-700 text-sm font-bold cursor-pointer transition-all"
          >
            Cerrar Ficha
          </button>

          <a
            href={study.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="neu-btn-blue inline-flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-xl transition-all cursor-pointer"
          >
            <span>Ver Artículo Original ({study.sourceName})</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </div>
  );
};
