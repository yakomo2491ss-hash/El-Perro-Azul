import React, { useState } from 'react';
import { CITIZEN_FAQS } from '../data/studies';
import { HelpCircle, ChevronDown, ChevronUp, AlertTriangle, ShieldCheck, Flame, Filter, Droplet } from 'lucide-react';

export const CitizenGuide: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string>(CITIZEN_FAQS[0].id);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? '' : id);
  };

  return (
    <section id="guia" className="py-12 bg-[#ebf0f7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-2 border border-blue-200 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            Educación Ciudadana Preventiva
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-800 tracking-tight">
            Mitos y Verdades sobre el Agua en tu Hogar
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base">
            El voluntariado <strong className="text-blue-700">El Perro Azul</strong> resuelve las dudas más comunes de las familias tacneñas con respaldo de la ciencia médica y sanitaria.
          </p>
        </div>

        {/* 3 Visual Tip Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          <div className="neu-card-red rounded-3xl p-6 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-rose-600 text-white flex items-center justify-center mb-4 shadow-sm">
              <Flame className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-base text-rose-950 mb-1">
              Mito: "Hervir el agua la limpia de todo"
            </h3>
            <p className="text-xs sm:text-sm text-rose-900 leading-relaxed">
              <strong>Falso:</strong> El calor mata microbios y coliformes, pero <strong>no evapora el arsénico, el boro ni los metales pesados</strong>. Al salir vapor, el agua disminuye y los metales se concentran más.
            </p>
          </div>

          <div className="neu-card-blue rounded-3xl p-6 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-4 shadow-sm">
              <Filter className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-base text-blue-950 mb-1">
              Verdad: "Se necesita Ósmosis Inversa"
            </h3>
            <p className="text-xs sm:text-sm text-blue-900 leading-relaxed">
              Las jarras o filtros de tela no retienen minerales disueltos. Solo los sistemas de <strong>Ósmosis Inversa (RO)</strong> o resinas de intercambio iónico especializadas logran separar el arsénico.
            </p>
          </div>

          <div className="neu-card-amber rounded-3xl p-6 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-amber-600 text-white flex items-center justify-center mb-4 shadow-sm">
              <Droplet className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-base text-amber-950 mb-1">
              Cuidado: "Almacenamiento y Dengue"
            </h3>
            <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
              Por el tandeo de pocas horas al día, almacenamos en tachos y tanques. Mantén <strong>recipientes herméticos y limpios</strong> para evitar la cría de mosquitos o bacterias secundarias.
            </p>
          </div>

        </div>

        {/* Accordion List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {CITIZEN_FAQS.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-3xl transition-all overflow-hidden ${
                  isOpen ? 'neu-convex border border-blue-200/50' : 'neu-flat hover:neu-convex'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-center gap-3.5">
                    <span className="w-8 h-8 rounded-full neu-inset text-blue-700 flex items-center justify-center font-bold text-xs flex-shrink-0">
                      ?
                    </span>
                    <h4 className="font-extrabold text-sm sm:text-base text-slate-800 leading-snug">
                      {faq.question}
                    </h4>
                  </div>
                  <div className="p-2 rounded-xl neu-btn text-slate-700 flex-shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-700 space-y-3 border-t border-slate-200/60">
                    <div className="p-4 neu-inset rounded-2xl text-xs sm:text-sm font-bold text-slate-800">
                      💡 {faq.shortAnswer}
                    </div>
                    <p className="text-xs sm:text-sm leading-relaxed text-slate-600 px-1">
                      {faq.detailedExplanation}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
