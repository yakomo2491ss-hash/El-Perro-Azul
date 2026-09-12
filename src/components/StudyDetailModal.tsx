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
  const isAssociation = study.evidenceLevel === 'asociacion_epidemiologica';

  const headerGradient = isClinical
    ? 'bg-gradient-to-r from-rose-600 to-rose-700'
    : isAssociation
    ? 'bg-gradient-to-r from-orange-600 to-amber-700'
    : 'bg-gradient-to-r from-amber-600 to-yellow-700';

  const badgeText = isClinical
    ? '🔴 Nivel 1: Evidencia Clínica en Humanos'
    : isAssociation
    ? '🟠 Nivel 2: Asociación Epidemiológica (Sin Causalidad Probada)'
    : '🟡 Nivel 3: Monitoreo Ambiental / Calidad del Agua';

  const cardStyle = isClinical
    ? 'neu-card-red'
    : isAssociation
    ? 'neu-card-orange'
    : 'neu-card-amber';

  const iconColor = isClinical
    ? 'text-rose-600'
    : isAssociation
    ? 'text-orange-600'
    : 'text-amber-600';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/50 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div 
        className="bg-[#ebf0f7] w-full max-w-2xl rounded-3xl neu-convex overflow-hidden my-6 border border-white/60"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Top Banner */}
        <div className={`p-5 sm:p-6 text-white ${headerGradient} shadow-md`}>
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="bg-white/20 text-white text-[11px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full backdrop-blur-sm font-bold shadow-xs">
                  {badgeText}
                </span>
                <span className="bg-black/20 text-white text-[11px] px-2 py-0.5 rounded-full font-mono">
                  Año {study.year}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-black leading-tight text-white">
                {study.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-black/20 hover:bg-black/30 text-white transition-all cursor-pointer flex-shrink-0"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 space-y-5 max-h-[72vh] overflow-y-auto text-slate-800">
          
          {/* Quick Meta Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 neu-inset p-3.5 rounded-2xl text-xs sm:text-sm">
            <div className="flex items-center gap-2.5">
              <MapPin className="w-4 h-4 text-blue-600 flex-shrink-0" />
              <div>
                <span className="text-[10px] text-slate-500 block font-bold uppercase">Ubicación Evaluada</span>
                <span className="font-semibold text-slate-800">{study.locationName}</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <BookOpen className="w-4 h-4 text-blue-600 flex-shrink-0" />
              <div>
                <span className="text-[10px] text-slate-500 block font-bold uppercase">Fuente de Publicación</span>
                <span className="font-semibold text-slate-800">{study.sourceName}</span>
              </div>
            </div>
          </div>

          {/* Core Findings & Values */}
          <div className="space-y-1.5">
            <h4 className="font-bold text-slate-900 flex items-center gap-2 text-sm">
              <AlertOctagon className={`w-4 h-4 ${iconColor}`} />
              Concentraciones y Medición Científica
            </h4>
            <div className="neu-flat p-4 rounded-xl">
              <div className="text-sm font-extrabold text-slate-800 mb-0.5">
                {study.measuredValues}
              </div>
              <div className="text-xs text-slate-500 font-mono">
                <strong className="text-slate-700">Parámetro normativo:</strong> {study.regulatoryLimit}
              </div>
            </div>
          </div>

          {/* Health Findings / Risk Assessment */}
          <div className="space-y-1.5">
            <h4 className="font-bold text-slate-900 text-sm">
              {isClinical
                ? '🩺 Impacto Clínico Confirmado en Humanos'
                : isAssociation
                ? '📊 Cruce Epidemiológico (Sin Causalidad Demostrada)'
                : '⚠️ Evaluación de Riesgo para la Calidad del Agua'}
            </h4>
            <p className={`text-xs sm:text-sm leading-relaxed p-4 rounded-2xl ${cardStyle}`}>
              {study.healthFindingsSummary}
            </p>
          </div>

          {/* Key Bullet Points */}
          <div className="space-y-1.5">
            <h4 className="font-bold text-slate-900 text-sm">
              Puntos Clave del Estudio:
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
              {study.keyTakeaways.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${iconColor}`} />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Scientific Methodology */}
          <div className="space-y-1.5">
            <h4 className="font-bold text-[10px] uppercase tracking-wider text-slate-500">
              Metodología del Estudio
            </h4>
            <p className="text-xs text-slate-600 italic neu-inset p-3.5 rounded-xl leading-relaxed">
              "{study.scientificMethodology}"
            </p>
          </div>

          {/* Citizen Practical Advice */}
          <div className="neu-convex rounded-2xl p-4 space-y-1 border border-blue-200/50">
            <h5 className="font-extrabold text-blue-900 text-xs sm:text-sm flex items-center gap-1.5">
              <span>💡 Recomendación de El Perro Azul para el ciudadano:</span>
            </h5>
            <p className="text-xs text-slate-700 leading-relaxed">
              {study.citizenAdvice}
            </p>
          </div>

          {/* Full Academic Citation */}
          <div className="pt-2.5 border-t border-slate-200/80 text-[11px] text-slate-500 font-mono space-y-0.5">
            <span className="font-bold block uppercase text-slate-700">Cita Bibliográfica Completa:</span>
            <p className="leading-relaxed">{study.fullCitation}</p>
          </div>

        </div>

        {/* Modal Footer with Direct Source Link */}
        <div className="p-3.5 sm:p-5 neu-flat border-t border-slate-200/50 flex flex-wrap items-center justify-between gap-2.5">
          <button
            onClick={onClose}
            className="neu-btn px-3.5 py-2 rounded-xl text-slate-700 text-xs font-bold cursor-pointer transition-all"
          >
            Cerrar Ficha
          </button>

          <a
            href={study.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="neu-btn-blue inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-xl transition-all cursor-pointer"
          >
            <span>Ver Artículo Original ({study.sourceName})</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </div>
  );
};
