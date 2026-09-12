import React, { useState } from 'react';
import { 
  Zap, 
  Leaf, 
  Sun, 
  Recycle, 
  Sparkles, 
  GraduationCap, 
  Microscope, 
  Lightbulb, 
  ShieldAlert, 
  ArrowRight, 
  CheckCircle2, 
  ExternalLink,
  Droplets,
  Share2,
  Check
} from 'lucide-react';

export const StudentInnovationSection: React.FC = () => {
  const [copiedAction, setCopiedAction] = useState(false);

  const handleShareCall = () => {
    const textToShare = `💡 *INNOVACIÓN ESTUDIANTIL Y ECONOMÍA CIRCULAR POR EL AGUA* 💧\n“Apoya la ciencia que transforma: Más investigación, más innovación, más economía circular, más soluciones desde nuestras propias comunidades.”\nDescubre cómo estudiantes universitarios transforman residuos de olivo, energía solar y electrocoagulación en agua limpia: @azulperro26`;
    navigator.clipboard.writeText(textToShare).then(() => {
      setCopiedAction(true);
      setTimeout(() => setCopiedAction(false), 3000);
    });
  };

  return (
    <section id="innovacion" className="py-14 bg-[#ebf0f7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black uppercase tracking-wider mb-3 border border-emerald-300 shadow-sm">
            <Recycle className="w-4 h-4 text-emerald-600 animate-spin-slow" />
            Iniciativas Estudiantiles & Economía Circular
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Tratamiento y Recuperación de Agua: <span className="text-emerald-700">De Residuos a Soluciones</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Estos proyectos desarrollados por jóvenes investigadores demuestran que la tecnología puede ir de la mano con la 
            <strong className="text-slate-900"> economía circular</strong>: convertir recursos naturales, residuos agroindustriales y energía local disponible en soluciones concretas para los problemas ambientales y sociales de nuestras cuencas.
          </p>

          {/* Visual Circular Flow Bar */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-[11px] sm:text-xs font-bold text-slate-700">
            <span className="px-3 py-1.5 rounded-xl bg-white neu-flat border border-white/80 flex items-center gap-1.5">
              🌱 Residuos Agrícolas & Sol
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-emerald-600 hidden sm:inline" />
            <span className="px-3 py-1.5 rounded-xl bg-white neu-flat border border-white/80 flex items-center gap-1.5">
              🔬 Investigación Universitaria
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-emerald-600 hidden sm:inline" />
            <span className="px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 shadow-xs flex items-center gap-1.5">
              ♻️ Economía Circular
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-emerald-600 hidden sm:inline" />
            <span className="px-3 py-1.5 rounded-xl bg-blue-50 text-blue-800 border border-blue-200 shadow-xs flex items-center gap-1.5">
              💧 Agua Recuperada y Segura
            </span>
          </div>
        </div>

        {/* 3 Innovative Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12 items-stretch">
          
          {/* 1. ELECTROCOAGULACIÓN */}
          <div className="neu-flat rounded-3xl p-6 sm:p-7 flex flex-col justify-between border border-white/80 relative overflow-hidden transition-all hover:neu-convex">
            <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-bl-xl shadow-xs">
              01 • Proceso Eléctrico
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 border border-blue-300 text-blue-700 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-tight">
                    Electrocoagulación
                  </h3>
                  <span className="text-xs font-bold text-blue-700">
                    Separación electroquímica de contaminantes
                  </span>
                </div>
              </div>

              <div className="neu-inset rounded-2xl p-4 text-xs sm:text-sm text-slate-700 space-y-2">
                <p className="font-semibold text-slate-900 text-xs uppercase tracking-wide">
                  ¿Cómo funciona la tecnología?
                </p>
                <p className="leading-relaxed text-xs">
                  Utiliza <strong>electrodos metálicos y corriente eléctrica controlada</strong> directamente en el agua. Al disolverse los iones del electrodo, se desestabilizan y agrupan los contaminantes suspendidos y metales, permitiendo separarlos de forma eficaz por flotación o sedimentación sin añadir polímeros complejos.
                </p>
              </div>

              <div className="neu-card-blue rounded-2xl p-4 space-y-2 text-xs">
                <div className="flex items-center gap-1.5 font-bold text-blue-900 uppercase tracking-wider text-[11px]">
                  <Recycle className="w-3.5 h-3.5 text-blue-600" />
                  Aporte a la Economía Circular:
                </div>
                <ul className="space-y-1.5 text-slate-700 text-xs">
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Reduce la dependencia de insumos químicos:</strong> Minimiza el uso de coagulantes sintéticos comerciales convencionales.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Potencial con energías renovables:</strong> Su viabilidad y sostenibilidad aumentan radicalmente cuando se energiza con paneles solares, aprovechando la alta radiación solar del desierto de Tacna.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-200/80 flex items-center justify-between text-[11px] text-slate-500 font-mono">
              <span>Eficiencia energizable</span>
              <span className="text-blue-700 font-bold">Sin químicos pesados</span>
            </div>
          </div>

          {/* 2. BIOSORCIÓN POR OLIVO (+ Referente Vitaclean H2O) */}
          <div className="neu-flat rounded-3xl p-6 sm:p-7 flex flex-col justify-between border border-white/80 relative overflow-hidden transition-all hover:neu-convex">
            <div className="absolute top-0 right-0 bg-emerald-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-bl-xl shadow-xs">
              02 • Biomasa Agrícola
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 border border-emerald-300 text-emerald-700 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Leaf className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-tight">
                    Biosorción por Olivo
                  </h3>
                  <span className="text-xs font-bold text-emerald-700">
                    Valorización del residuo emblemático de Tacna
                  </span>
                </div>
              </div>

              <div className="neu-inset rounded-2xl p-4 text-xs sm:text-sm text-slate-700 space-y-2">
                <p className="font-semibold text-slate-900 text-xs uppercase tracking-wide">
                  Aprovechamiento agroindustrial local
                </p>
                <p className="leading-relaxed text-xs">
                  Aprovecha la <strong>biomasa de olivo</strong> (hojas de poda o subproductos del procesamiento de aceituna), recurso abundante en Tacna, como material adsorbente de bajo costo capaz de retener y capturar en su superficie determinados contaminantes disueltos.
                </p>
                <div className="p-2.5 rounded-xl bg-emerald-100/70 border border-emerald-300/80 text-[11px] font-black text-emerald-900 text-center">
                  “Un residuo puede convertirse en un recurso para descontaminar agua”
                </div>
              </div>

              {/* Peruvian Innovation Benchmark: Vitaclean H2O (UNMSM) */}
              <div className="neu-flat-white rounded-2xl p-3.5 border border-emerald-200/90 space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-md">
                    <GraduationCap className="w-3 h-3" /> Referente Nacional: Vitaclean H₂O
                  </span>
                  <span className="text-[10px] font-mono font-semibold text-slate-500">UNMSM</span>
                </div>
                <p className="text-[11px] text-slate-700 leading-relaxed">
                  Desarrollado por emprendedores de la <strong>Universidad Nacional Mayor de San Marcos</strong>: un biopurificador a partir de semillas procesadas de <em>moringa</em>. Diseñado para tratar agua y facilitar el acceso a agua segura en zonas sin infraestructura. <strong>Una dosis de 5 g podía tratar hasta 20 L de agua en pocos minutos.</strong>
                </p>
                <div className="text-[10.5px] text-slate-600 bg-slate-50 p-2 rounded-lg border border-slate-200/70 leading-snug">
                  <span className="font-bold text-emerald-900 block mb-0.5">Cadena de Economía Circular:</span>
                  Las semillas eran obtenidas de agricultores de <strong>Lambayeque</strong>, consolidando: <em>Agricultura local → Biomasa → Innovación → Solución ambiental.</em>
                </div>
                <p className="text-[9.5px] text-slate-500 italic leading-tight pt-0.5">
                  *Presentado como referente de innovación con moringa (actúa por coagulación, floculación y desinfección natural; no es exactamente el mismo proceso de biosorción).*
                </p>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-200/80 flex items-center justify-between text-[11px] text-slate-500 font-mono">
              <span>Cadena agro-ambiental</span>
              <span className="text-emerald-700 font-bold">Biomasa local</span>
            </div>
          </div>

          {/* 3. DESINFECCIÓN SOLAR */}
          <div className="neu-flat rounded-3xl p-6 sm:p-7 flex flex-col justify-between border border-white/80 relative overflow-hidden transition-all hover:neu-convex">
            <div className="absolute top-0 right-0 bg-amber-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-bl-xl shadow-xs">
              03 • Energía Renovable
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 border border-amber-300 text-amber-700 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Sun className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-tight">
                    Desinfección Solar
                  </h3>
                  <span className="text-xs font-bold text-amber-700">
                    Radiación ultravioleta y térmica natural
                  </span>
                </div>
              </div>

              <div className="neu-inset rounded-2xl p-4 text-xs sm:text-sm text-slate-700 space-y-2">
                <p className="font-semibold text-slate-900 text-xs uppercase tracking-wide">
                  Principio de desinfección
                </p>
                <p className="leading-relaxed text-xs">
                  Aprovecha la <strong>radiación solar natural (espectro UV-A y calor)</strong> como fuente energética limpia para inactivar y reducir drásticamente microorganismos patógenos (bacterias como <em>E. coli</em>, coliformes y parásitos comunes) en envases transparentes adecuados.
                </p>
              </div>

              {/* Essential Scientific Caveat / Clarification */}
              <div className="neu-card-amber rounded-2xl p-4 space-y-2 text-xs">
                <div className="flex items-center gap-1.5 font-bold text-amber-950 uppercase tracking-wider text-[11px]">
                  <ShieldAlert className="w-3.5 h-3.5 text-amber-700 flex-shrink-0" />
                  Rigor Científico Indispensable:
                </div>
                <p className="text-slate-800 text-xs leading-relaxed">
                  <strong>No es una solución universal:</strong> Es altamente efectiva para microorganismos infecciosos, pero <strong>NO elimina metales pesados (arsénico, plomo, mercurio) ni boro</strong> disueltos en el agua. No debe confundirse la desinfección biológica con el abatimiento de minerales tóxicos.
                </p>
              </div>

              <div className="neu-flat-white rounded-2xl p-3.5 border border-amber-200/80 text-xs text-slate-700">
                <span className="font-bold text-amber-900 block mb-1">Impacto Circular:</span>
                Cero emisiones, cero consumo de combustibles o electricidad de red, aprovechando la energía solar gratuita presente durante todo el año en Tacna.
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-200/80 flex items-center justify-between text-[11px] text-slate-500 font-mono">
              <span>Energía solar directa</span>
              <span className="text-amber-800 font-bold">Microorganismos</span>
            </div>
          </div>

        </div>

        {/* Featured Block: DE LA IDEA AL CAMBIO */}
        <div className="neu-convex rounded-3xl p-6 sm:p-10 border border-white/90 relative overflow-hidden mb-10 shadow-sm">
          <div className="max-w-4xl mx-auto space-y-6">
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-600 text-white flex items-center justify-center flex-shrink-0 shadow-md">
                <Lightbulb className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-black uppercase tracking-widest text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  Visión de Futuro para Tacna
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-0.5">
                  DE LA IDEA AL CAMBIO
                </h3>
              </div>
            </div>

            <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p>
                Estas iniciativas muestran que la innovación no siempre necesita grandes infraestructuras para comenzar. Cuando estudiantes investigan problemas reales y encuentran nuevas formas de aprovechar residuos agrícolas, biomasa, energía disponible y materiales locales, pueden transformar recursos que antes tenían poco valor en soluciones ambientales.
              </p>

              <div className="neu-inset rounded-2xl p-5 border-l-4 border-emerald-600 bg-white/60">
                <p className="font-bold text-slate-900 text-base sm:text-lg">
                  Eso es economía circular: reducir el desperdicio, mantener los recursos en uso y crear nuevo valor a partir de lo que ya existe.
                </p>
              </div>

              <p className="font-medium text-slate-800">
                Por eso, apoyar la investigación y la innovación estudiantil no es solamente apoyar una feria científica: es invertir en personas capaces de convertir problemas de sus comunidades en soluciones.
              </p>
            </div>

          </div>
        </div>

        {/* Call to Action Banner */}
        <div className="neu-card-blue rounded-3xl p-6 sm:p-8 border border-blue-200/90 text-center relative overflow-hidden">
          <div className="max-w-3xl mx-auto space-y-4">
            
            <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-black uppercase tracking-wider border border-blue-200">
              Llamado a la Acción
            </span>

            <h3 className="text-2xl sm:text-3xl font-black text-blue-900 font-serif italic">
              “Apoya la ciencia que transforma.”
            </h3>

            {/* 4 Pillars Mantra */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 py-2">
              <span className="px-3.5 py-1.5 rounded-xl bg-white shadow-xs text-xs sm:text-sm font-black text-blue-800 border border-blue-200/60">
                Más investigación.
              </span>
              <span className="px-3.5 py-1.5 rounded-xl bg-white shadow-xs text-xs sm:text-sm font-black text-emerald-800 border border-emerald-200/60">
                Más innovación.
              </span>
              <span className="px-3.5 py-1.5 rounded-xl bg-white shadow-xs text-xs sm:text-sm font-black text-amber-800 border border-amber-200/60">
                Más economía circular.
              </span>
              <span className="px-3.5 py-1.5 rounded-xl bg-blue-700 text-white text-xs sm:text-sm font-black shadow-sm">
                Más soluciones nacidas desde nuestras propias comunidades.
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto">
              Desde el voluntariado <strong>El Perro Azul</strong>, abrimos nuestros canales para articular y visibilizar a estudiantes, tesistas y círculos de investigación de Tacna y del Perú.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={handleShareCall}
                className="neu-btn px-4 py-2.5 rounded-xl text-slate-700 text-xs sm:text-sm font-bold flex items-center gap-2 cursor-pointer transition-all hover:text-blue-700"
              >
                {copiedAction ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4 text-blue-600" />}
                <span>{copiedAction ? '¡Copiado al portapapeles!' : 'Difundir este llamado'}</span>
              </button>
              <a
                href="https://instagram.com/azulperro26"
                target="_blank"
                rel="noopener noreferrer"
                className="neu-btn-blue px-5 py-2.5 rounded-xl text-white text-xs sm:text-sm font-bold flex items-center gap-2 cursor-pointer transition-all"
              >
                <span>Conectar con El Perro Azul (@azulperro26)</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
