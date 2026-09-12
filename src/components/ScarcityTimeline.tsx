import React from 'react';
import { TACNA_WATER_FACTS } from '../data/studies';
import { Droplet, AlertTriangle, Mountain, ShieldAlert, Sun, ArrowRight } from 'lucide-react';

export const ScarcityTimeline: React.FC = () => {
  return (
    <section id="escasez" className="py-12 bg-slate-900 text-white border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/90 text-slate-950 text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
            <Sun className="w-3.5 h-3.5" />
            Estrés Hídrico Extremo
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
            La Doble Crisis de Tacna: <span className="text-amber-400">Poca Agua</span> y de <span className="text-rose-400">Origen Volcánico</span>
          </h2>
          <p className="text-slate-300 mt-2 text-sm sm:text-base leading-relaxed">
            Para entender el problema del agua en Tacna no basta con analizar los metales; es fundamental comprender 
            por qué nos encontramos en uno de los territorios más secos de América del Sur.
          </p>
        </div>

        {/* 3 Core Crisis Vectors with Dark Neumorphic Soft Depth */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          <div className="bg-slate-800/80 rounded-3xl p-6 border border-slate-700/50 shadow-[inset_-2px_-2px_6px_rgba(255,255,255,0.04),4px_4px_14px_rgba(0,0,0,0.4)]">
            <div className="text-amber-400 text-3xl font-black mb-1">~180 m³</div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 font-mono">Disponibilidad por habitante / año</div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              El umbral de la ONU para <strong>"Escasez Crítica Severa"</strong> es de 1,000 m³. Tacna cuenta con menos de la quinta parte de ese límite.
            </p>
          </div>

          <div className="bg-slate-800/80 rounded-3xl p-6 border border-slate-700/50 shadow-[inset_-2px_-2px_6px_rgba(255,255,255,0.04),4px_4px_14px_rgba(0,0,0,0.4)]">
            <div className="text-rose-400 text-3xl font-black mb-1">&lt; 10 mm</div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 font-mono">Lluvia anual en la costa de Tacna</div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Cero recarga hídrica directa en la zona urbana. Todo el recurso depende de las lluvias estacionales de la sierra alta (enero-marzo).
            </p>
          </div>

          <div className="bg-slate-800/80 rounded-3xl p-6 border border-slate-700/50 shadow-[inset_-2px_-2px_6px_rgba(255,255,255,0.04),4px_4px_14px_rgba(0,0,0,0.4)]">
            <div className="text-sky-400 text-3xl font-black mb-1">3 Cuencas</div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 font-mono">Caplina, Sama y Locumba</div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Ríos de caudales exiguos que atraviesan rocas volcánicas ricas en boro y arsénico, disputados entre el consumo humano, la agricultura y la minería.
            </p>
          </div>

        </div>

        {/* The Natural & Human Circle Graphic */}
        <div className="bg-slate-800/40 rounded-3xl border border-slate-700/60 p-6 sm:p-8 shadow-[inset_1px_1px_3px_rgba(255,255,255,0.05),0_8px_20px_rgba(0,0,0,0.3)]">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Mountain className="w-5 h-5 text-amber-400" />
            ¿Cómo se conectan la escasez de agua y los contaminantes?
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs sm:text-sm">
            
            <div className="bg-slate-900/90 p-5 rounded-2xl border border-slate-700/50 space-y-2.5 shadow-inner">
              <span className="w-7 h-7 rounded-full bg-amber-400 text-slate-950 font-bold flex items-center justify-center text-xs shadow-sm">1</span>
              <h4 className="font-bold text-white text-sm">Origen Geológico</h4>
              <p className="text-slate-400 leading-relaxed">
                La cordillera del Barroso y volcanes como Tutupaca y Yucamane tienen aguas termales cargadas de arsénico y sales de boro de forma milenaria.
              </p>
            </div>

            <div className="bg-slate-900/90 p-5 rounded-2xl border border-slate-700/50 space-y-2.5 shadow-inner">
              <span className="w-7 h-7 rounded-full bg-amber-400 text-slate-950 font-bold flex items-center justify-center text-xs shadow-sm">2</span>
              <h4 className="font-bold text-white text-sm">Sin Dilución Natural</h4>
              <p className="text-slate-400 leading-relaxed">
                Al haber sequías constantes y pocas lluvias cordilleranas, los ríos bajan con poco caudal dulce, por lo que los minerales bajan altamente concentrados.
              </p>
            </div>

            <div className="bg-slate-900/90 p-5 rounded-2xl border border-slate-700/50 space-y-2.5 shadow-inner">
              <span className="w-7 h-7 rounded-full bg-amber-400 text-slate-950 font-bold flex items-center justify-center text-xs shadow-sm">3</span>
              <h4 className="font-bold text-white text-sm">Sobreexplotación</h4>
              <p className="text-slate-400 leading-relaxed">
                Para abastecer al Cono Sur y la agricultura se perforan pozos profundos en el acuífero de La Yarada y Viñani, succionando estratos con alta salinidad y minerales.
              </p>
            </div>

            <div className="bg-slate-900/90 p-5 rounded-2xl border border-slate-700/50 space-y-2.5 shadow-inner">
              <span className="w-7 h-7 rounded-full bg-amber-400 text-slate-950 font-bold flex items-center justify-center text-xs shadow-sm">4</span>
              <h4 className="font-bold text-white text-sm">Tandeo en el Hogar</h4>
              <p className="text-slate-400 leading-relaxed">
                El agua llega pocas horas al día. Obliga a almacenar en tanques donde, si no hay desinfección adecuada, se suman riesgos biológicos a la carga química.
              </p>
            </div>

          </div>

          <div className="mt-6 pt-4 border-t border-slate-700/60 text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-2">
            <span>Principales embalses: Represas Paucarani (~10.5 MMC) y Jarumas (~13 MMC).</span>
            <span className="text-amber-300 font-mono">Monitoreo ciudadano continuo • El Perro Azul</span>
          </div>

        </div>

      </div>
    </section>
  );
};
