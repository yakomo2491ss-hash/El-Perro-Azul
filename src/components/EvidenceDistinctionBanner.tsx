import React from 'react';
import { AlertOctagon, CheckCircle2, HelpCircle, FileText, ArrowRight } from 'lucide-react';

export const EvidenceDistinctionBanner: React.FC = () => {
  return (
    <section id="distincion" className="py-12 bg-[#ebf0f7] border-y border-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/90 text-blue-800 text-xs font-bold uppercase tracking-wider border border-blue-200 shadow-sm mb-3">
            <HelpCircle className="w-4 h-4 text-blue-600" />
            Distinción Científica Clave para Nuestra Comunidad
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-800 tracking-tight">
            Los 3 Niveles de <span className="text-blue-700">Evidencia Científica</span> en Tacna
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Para hablarle a Tacna con la verdad, sin alarmismos infundados ni desinformación, nuestro voluntariado 
            <strong className="text-blue-700"> El Perro Azul</strong> clasifica rigurosamente los estudios según su fuerza probatoria:
          </p>
        </div>

        {/* 3-Column Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Tier 1: Confirmed Clinical Biomarkers in Humans */}
          <div className="neu-card-red rounded-3xl p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden transition-all">
            <div className="absolute top-0 right-0 bg-rose-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-bl-xl shadow-sm">
              Nivel 1
            </div>

            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-rose-100 border border-rose-300 flex items-center justify-center text-rose-600 shadow-sm flex-shrink-0">
                  <AlertOctagon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-900">Evidencia Clínica Directa</h3>
                  <span className="inline-block text-[11px] font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded-full border border-rose-200">
                    Biomarcadores comprobados
                  </span>
                </div>
              </div>

              <div className="space-y-2.5 text-slate-700 text-xs sm:text-sm">
                <p className="leading-relaxed">
                  Científicos <strong>midieron directamente fluidos y organismos de pobladores tacneños</strong>, confirmando absorción celular tóxica.
                </p>

                <div className="neu-inset rounded-xl p-3 space-y-2 text-xs text-rose-950">
                  <div className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-rose-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Candarave (Cairani y Camilaca):</strong> 100% en Cairani y 80.3% en Camilaca superaron los valores de toxicidad de arsénico en orina (hasta 30 veces más) — <em>Rev Peru Med Exp Salud Pública, 2018</em>. Adicionalmente, reportes sanitarios de DIRESA Tacna e INS describen cuadros clínicos de HACRE en la zona.</span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-rose-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Gestantes tacneñas (UPCH 2021):</strong> Asociación con biomarcadores maternos, repercutiendo en menor peso al nacer.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-rose-200/70">
              <div className="text-[11px] font-bold text-rose-700 uppercase tracking-wide flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5" /> 2 Estudios de biomarcadores (SciELO, UPCH)
              </div>
            </div>
          </div>

          {/* Tier 2: Epidemiological Association (Without proven causality) */}
          <div className="neu-card-orange rounded-3xl p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden transition-all">
            <div className="absolute top-0 right-0 bg-orange-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-bl-xl shadow-sm">
              Nivel 2
            </div>

            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-orange-100 border border-orange-300 flex items-center justify-center text-orange-600 shadow-sm flex-shrink-0">
                  <AlertOctagon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-900">Asociación Epidemiológica</h3>
                  <span className="inline-block text-[11px] font-bold text-orange-800 bg-orange-50 px-2 py-0.5 rounded-full border border-orange-200">
                    Sin causalidad probada
                  </span>
                </div>
              </div>

              <div className="space-y-2.5 text-slate-700 text-xs sm:text-sm">
                <p className="leading-relaxed">
                  Cruce observacional estadístico de registros de salud en la ciudad. <strong>Alerta sobre correlación, pero no demuestra relación causa-efecto individual.</strong>
                </p>

                <div className="neu-inset rounded-xl p-3 space-y-2 text-xs text-orange-950">
                  <div className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Ciudad de Tacna (2010–2011):</strong> Arsénico &gt;5x el límite legal en el agua de red, en el mismo periodo en que el 29% de todos los casos de cáncer en EsSalud Tacna fueron cáncer de piel.</span>
                  </div>
                  <div className="p-2 rounded-lg bg-orange-100/70 border border-orange-200 text-[11px] leading-relaxed italic text-orange-900">
                    *Los propios autores del estudio aclaran textualmente en sus conclusiones que el estudio "no demuestra causalidad" y piden más investigación.*
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-orange-200/70">
              <div className="text-[11px] font-bold text-orange-800 uppercase tracking-wide flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5" /> 1 Cruce oncológico (Revista Médica Basadrina)
              </div>
            </div>
          </div>

          {/* Tier 3: Environmental Water Monitoring */}
          <div className="neu-card-amber rounded-3xl p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden transition-all">
            <div className="absolute top-0 right-0 bg-amber-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-bl-xl shadow-sm">
              Nivel 3
            </div>

            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-700 shadow-sm flex-shrink-0">
                  <AlertOctagon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-900">Monitoreo Ambiental</h3>
                  <span className="inline-block text-[11px] font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                    Sin datos en personas
                  </span>
                </div>
              </div>

              <div className="space-y-2.5 text-slate-700 text-xs sm:text-sm">
                <p className="leading-relaxed">
                  Contaminantes <strong>confirmados en el agua</strong> (superan normas permisibles), pero aún <strong>sin estudios clínicos o biomarcadores en personas de Tacna</strong>.
                </p>

                <div className="neu-inset rounded-xl p-3 space-y-2 text-xs text-amber-950">
                  <div className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Locumba (USMP):</strong> Boro hasta 8.68 mg/L (límite: 2.4 mg/L) en reservorio. Riesgo ambiental potencial; no evaluó pacientes.</span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span><strong>DIGESA (muestreo 2021-2022 / difusión 2025):</strong> Detectó aluminio en el agua potable de Tacna advirtiendo que hervir no lo quita. Es calidad de agua, no estudio clínico.</span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Cuencas Sama y Locumba (MEDISAN):</strong> Arsénico y boro en agua cruda; científicos piden financiar estudios biológicos en humanos.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-amber-200/70">
              <div className="text-[11px] font-bold text-amber-800 uppercase tracking-wide flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5" /> 4 Monitoreos físico-químicos oficiales
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Civic Takeaway Banner */}
        <div className="mt-8 neu-convex rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-600 text-amber-300 flex items-center justify-center flex-shrink-0 font-bold text-xl shadow-md">
              💡
            </div>
            <div>
              <h4 className="font-bold text-base sm:text-lg text-slate-900">¿Por qué te lo explicamos así desde El Perro Azul?</h4>
              <p className="text-sm text-slate-600">
                Porque una comunidad empoderada exige soluciones con datos rigurosos: con el <strong>arsénico</strong> exigimos atención médica inmediata; con el <strong>boro y aluminio</strong> exigimos fiscalización del agua y estudios epidemiológicos pendientes.
              </p>
            </div>
          </div>
          <a
            href="#mapa"
            className="flex-shrink-0 inline-flex items-center gap-2 neu-btn-blue font-bold px-5 py-3 rounded-2xl text-xs sm:text-sm uppercase tracking-wider transition-all cursor-pointer"
          >
            Ver en el Mapa
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
