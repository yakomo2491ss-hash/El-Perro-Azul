import React from 'react';
import { ShieldAlert, Droplets, MapPin, ChevronRight, Activity, Award, CheckCircle2 } from 'lucide-react';

interface HeroSectionProps {
  onExploreMap: () => void;
  onExploreDistinction: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreMap, onExploreDistinction }) => {
  return (
    <section id="hero" className="relative overflow-hidden pt-8 pb-16 bg-[#ebf0f7]">
      {/* Decorative Background Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-200/20 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Hero Card with 2026 Neumorphic Elevation */}
        <div className="neu-flat rounded-3xl p-6 sm:p-10 lg:p-12 mb-10 transition-all">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Text & Call to Actions */}
            <div className="lg:col-span-8 space-y-5">
              
              {/* Civic Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/90 text-blue-900 border border-blue-200/80 text-xs sm:text-sm font-bold shadow-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-ping" />
                <span>Iniciativa de Conciencia Ciudadana • Tacna, Perú</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-800 tracking-tight leading-[1.15]">
                ¿Qué agua tomamos realmente en <span className="text-blue-700">Tacna</span>?
              </h1>

              {/* Subheadline & Context */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
                Tacna habita la cabecera del desierto más árido del mundo, con un <strong className="text-slate-800">estrés hídrico extremo</strong> y 
                ríos de origen volcánico. Aquí encontrarás los datos científicos oficiales sobre la presencia de 
                <span className="text-rose-600 font-bold"> Arsénico</span>, 
                <span className="text-amber-600 font-bold"> Boro</span> y 
                <span className="text-slate-800 font-bold"> Aluminio</span>, explicados de forma clara, directa y sin censura para cada vecino y familia tacneña.
              </p>

              {/* Distinction reminder pill */}
              <div className="neu-inset rounded-2xl p-4 flex items-start gap-3 border border-amber-200/40">
                <div className="text-amber-600 text-lg mt-0.5">⚠️</div>
                <div className="text-xs sm:text-sm text-slate-700 leading-snug">
                  <strong className="text-slate-900">El rigor científico es nuestro compromiso:</strong> En esta plataforma diferenciamos claramente los contaminantes con 
                  <span className="font-bold text-rose-700"> daño clínico comprobado en personas de Tacna (Arsénico)</span> frente a aquellos con 
                  <span className="font-bold text-amber-700"> exceso comprobado en el agua pero en nivel de evaluación de riesgo (Boro y Aluminio)</span>.
                </div>
              </div>

              {/* CTA Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  onClick={onExploreMap}
                  className="neu-btn-blue font-bold text-sm uppercase tracking-wider px-6 py-3.5 rounded-2xl flex items-center gap-2 cursor-pointer transition-all"
                >
                  <MapPin className="w-5 h-5 text-amber-300" />
                  Explorar Mapa Interactivo
                </button>

                <button
                  onClick={onExploreDistinction}
                  className="neu-btn text-slate-800 font-bold text-sm uppercase tracking-wider px-5 py-3.5 rounded-2xl flex items-center gap-2 cursor-pointer"
                >
                  <Activity className="w-5 h-5 text-blue-600" />
                  Entender la Evidencia
                </button>
              </div>

            </div>

            {/* Right Column: Creative Volunteer Logo Frame */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center">
              <div className="w-full max-w-xs neu-convex rounded-3xl p-5 text-center">
                
                {/* Logo Image in Artistic Neumorphic Frame */}
                <div className="relative rounded-2xl overflow-hidden neu-inset bg-white mb-3 aspect-[16/10] flex items-center justify-center p-2">
                  <img
                    src="/logo-perro-azul.jpg"
                    alt="Voluntariado El Perro Azul - Tacna"
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute bottom-1 right-2 bg-slate-900/70 text-white text-[10px] font-mono px-2 py-0.5 rounded-md shadow-sm">
                    Tacna • Perú
                  </div>
                </div>

                {/* Volunteer Group Title & Motto */}
                <h3 className="text-xl font-black text-blue-700 italic tracking-tight font-serif">
                  El Perro Azul
                </h3>
                <p className="text-xs font-black text-slate-700 tracking-[0.25em] uppercase font-mono mt-0.5">
                  LIDERA • IMPACTA • CRECE
                </p>

                <p className="text-xs text-slate-500 mt-2.5 leading-snug border-t border-slate-200/60 pt-2 font-medium">
                  Voluntarios por la verdad ambiental, la salud pública y el derecho al agua digna en Tacna.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* 4 Crucial Fact Counter Blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <div className="neu-card-red rounded-2xl p-5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-700">Candarave (Cairani)</span>
              <span className="text-[10px] bg-rose-100 text-rose-800 px-2 py-0.5 rounded-full font-bold shadow-sm">Biomarcador</span>
            </div>
            <div className="text-2xl sm:text-3xl font-black text-rose-900 mt-1">100%</div>
            <p className="text-xs text-rose-800 mt-1 font-medium leading-relaxed">
              De los pobladores testeados en Cairani superaron límites de la OMS (hasta <strong>30 veces</strong> más).
            </p>
          </div>

          <div className="neu-card-red rounded-2xl p-5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-700">Tacna Ciudad</span>
              <span className="text-[10px] bg-rose-100 text-rose-800 px-2 py-0.5 rounded-full font-bold shadow-sm">Oncológico</span>
            </div>
            <div className="text-2xl sm:text-3xl font-black text-rose-900 mt-1">29%</div>
            <p className="text-xs text-rose-800 mt-1 font-medium leading-relaxed">
              De todos los cánceres en EsSalud Tacna fue de piel; agua de red superó por &gt;5x la norma de arsénico.
            </p>
          </div>

          <div className="neu-card-amber rounded-2xl p-5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700">Cuenca Locumba</span>
              <span className="text-[10px] bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full font-bold shadow-sm">Riesgo Agua</span>
            </div>
            <div className="text-2xl sm:text-3xl font-black text-amber-900 mt-1">8.68 mg/L</div>
            <p className="text-xs text-amber-900 mt-1 font-medium leading-relaxed">
              Boro en reservorio potable frente a límite de 2.4 mg/L. Riesgo en agua documentado (USMP).
            </p>
          </div>

          <div className="neu-card-blue rounded-2xl p-5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700">Mito Desmentido</span>
              <span className="text-[10px] bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full font-bold shadow-sm">DIGESA 2025</span>
            </div>
            <div className="text-2xl sm:text-3xl font-black text-blue-900 mt-1">0% eliminados</div>
            <p className="text-xs text-blue-900 mt-1 font-medium leading-relaxed">
              Hervir el agua <strong>no remueve</strong> metales como arsénico o aluminio; solo evapora agua y los concentra.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
