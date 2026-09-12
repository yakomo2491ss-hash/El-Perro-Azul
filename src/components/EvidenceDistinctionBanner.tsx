import React from 'react';
import { AlertOctagon, CheckCircle2, HelpCircle, FileText, ArrowRight } from 'lucide-react';

export const EvidenceDistinctionBanner: React.FC = () => {
  return (
    <section id="distincion" className="py-12 bg-[#ebf0f7] border-y border-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/90 text-blue-800 text-xs font-bold uppercase tracking-wider border border-blue-200 shadow-sm mb-3">
            <HelpCircle className="w-4 h-4 text-blue-600" />
            Distinción Científica Clave para Nuestra Comunidad
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-800 tracking-tight">
            ¿Por qué la ciencia separa el <span className="text-rose-600">Arsénico</span> del <span className="text-amber-600">Boro y Aluminio</span>?
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Para hablarle a Tacna con la verdad y sin falsas alarmas ni desinformación, nuestro voluntariado 
            <strong className="text-blue-700"> El Perro Azul</strong> te explica los dos niveles de evidencia científica que existen en nuestra región:
          </p>
        </div>

        {/* 2-Column Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: Arsenic (Confirmed Clinical Link in Tacna Humans) */}
          <div className="neu-card-red rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden transition-all">
            <div className="absolute top-0 right-0 bg-rose-600 text-white text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-bl-2xl shadow-sm">
              Nivel 1: Evidencia Máxima
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-rose-100 border border-rose-300 flex items-center justify-center text-rose-600 shadow-sm">
                  <AlertOctagon className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900">Arsénico (As)</h3>
                  <span className="inline-block text-xs font-bold text-rose-700 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200 shadow-xs">
                    Daño en salud humana comprobado en Tacna
                  </span>
                </div>
              </div>

              <div className="space-y-3 text-slate-700 text-sm sm:text-base">
                <p className="font-semibold text-slate-900">
                  ¿Qué dice la ciencia comprobada?
                </p>
                <p className="leading-relaxed">
                  Científicos y médicos peruanos <strong>midieron directamente los cuerpos de pobladores tacneños</strong> (a través de biomarcadores de orina en Candarave y cruces oncológicos en EsSalud Tacna).
                </p>

                <div className="neu-inset rounded-2xl p-4 space-y-2.5 text-sm text-rose-950">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-rose-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Candarave (Cairani y Camilaca):</strong> El 100% en Cairani y 80.3% en Camilaca excedieron el límite de la OMS (hasta 30 veces más), con lesiones de piel, hipertensión y diabetes documentadas.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-rose-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Ciudad de Tacna:</strong> Arsénico &gt;5x el límite legal, vinculado a que el 29% de todos los casos de cáncer en EsSalud Tacna fueran cáncer de piel.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-rose-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Gestantes tacneñas:</strong> Estudio UPCH 2021 demostró asociación con bajo peso al nacer y tendencia a partos prematuros.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-rose-200/60">
              <div className="text-xs font-bold text-rose-700 uppercase tracking-wide flex items-center gap-1.5">
                <FileText className="w-4 h-4" /> 3 Estudios clínicos de cohorte en Tacna (SciELO, UNJBG, UPCH)
              </div>
            </div>
          </div>

          {/* Card 2: Boron and Aluminum (Confirmed Water Contaminants, Environmental Risk Level) */}
          <div className="neu-card-amber rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden transition-all">
            <div className="absolute top-0 right-0 bg-amber-600 text-white text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-bl-2xl shadow-sm">
              Nivel 2: Evaluación Ambiental
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-700 shadow-sm">
                  <AlertOctagon className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900">Boro (B) y Aluminio (Al)</h3>
                  <span className="inline-block text-xs font-bold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200 shadow-xs">
                    Contaminantes confirmados en agua (Sin estudios clínicos en Tacna)
                  </span>
                </div>
              </div>

              <div className="space-y-3 text-slate-700 text-sm sm:text-base">
                <p className="font-semibold text-slate-900">
                  ¿Cuál es el estado de la investigación?
                </p>
                <p className="leading-relaxed">
                  Están <strong>ampliamente documentados en el agua de Tacna en niveles que superan los límites permitidos</strong>, pero aún <strong className="text-amber-800">no existe un estudio en Tacna que haya medido biomarcadores en personas ni probado una enfermedad clínica directa</strong> en la población local.
                </p>

                <div className="neu-inset rounded-2xl p-4 space-y-2.5 text-sm text-amber-950">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Locumba (USMP):</strong> Boro medido hasta 8.68 mg/L (límite: 2.4 mg/L) en reservorio. Concluye que hay "riesgo ambiental", pero no evaluó pacientes.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Cuencas Sama y Locumba (MEDISAN):</strong> Arsénico y boro exceden normas; los científicos piden explícitamente financiar estudios de biomarcadores en humanos.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span><strong>DIGESA (2025):</strong> Detectó aluminio en el agua potable de Tacna advirtiendo que hervir no lo quita. Es un hallazgo de calidad de agua, no estudio clínico.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Sur del Perú (2024):</strong> Describe toxicología general (Alzheimer/arcilla chacco), pero no es un estudio sobre el agua de red de Tacna.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-amber-200/60">
              <div className="text-xs font-bold text-amber-800 uppercase tracking-wide flex items-center gap-1.5">
                <FileText className="w-4 h-4" /> 4 Monitoreos ambientales y toxicológicos generales
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
