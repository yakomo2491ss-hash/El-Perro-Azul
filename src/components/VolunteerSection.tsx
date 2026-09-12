import React, { useState } from 'react';
import { Users, Heart, Share2, Check, Shield, Instagram, Copy, ExternalLink } from 'lucide-react';

export const VolunteerSection: React.FC = () => {
  const [copiedText, setCopiedText] = useState(false);
  const [copiedHandle, setCopiedHandle] = useState(false);
  const [showJoinModal, setShowJoinModal] = useState(false);

  const civicShareText = `💧 *ALERTA CIUDADANA SOBRE EL AGUA EN TACNA* 🇵🇪
_Iniciativa del Voluntariado "El Perro Azul" (Lidera • Impacta • Crece)_

¿Sabías esto sobre el agua que consumimos en Tacna?
1️⃣ *Hervir el agua NO elimina el arsénico ni metales pesados.* Al evaporarse agua, se concentran más en la olla (confirmado por DIGESA 2025).
2️⃣ *Arsénico:* Estudios médicos en Candarave (Cairani) hallaron al 100% de la población por encima de los límites de la OMS (hasta 30x más), con lesiones de piel e hipertensión. En Tacna ciudad, el 29% de casos de cáncer en EsSalud fue de piel por agua con >5x el límite de arsénico.
3️⃣ *Boro y Aluminio:* Están en el agua por encima de los límites (Locumba y redes de Tacna), pero son estudios de calidad de agua; la ciencia aún debe medir biomarcadores en humanos.
4️⃣ *Filtros:* Las jarras comunes o telas no retienen arsénico. Se requiere Ósmosis Inversa certificada.

¡Comparte con tu familia y junta vecinal! Exijamos agua digna y plantas de tratamiento modernas en Calana y Candarave.
📸 Síguenos y súmate en Instagram: @azulperro26`;

  const handleCopyShare = () => {
    navigator.clipboard.writeText(civicShareText).then(() => {
      setCopiedText(true);
      setTimeout(() => setCopiedText(false), 3000);
    });
  };

  const handleCopyHandle = () => {
    navigator.clipboard.writeText('@azulperro26').then(() => {
      setCopiedHandle(true);
      setTimeout(() => setCopiedHandle(false), 3000);
    });
  };

  return (
    <section id="voluntariado" className="py-16 bg-[#ebf0f7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Neumorphic Card */}
        <div className="neu-flat rounded-3xl p-6 sm:p-10 lg:p-12 transition-all">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Branding, Mission & Instagram Action */}
            <div className="lg:col-span-7 space-y-5">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/90 text-blue-900 text-xs font-bold uppercase tracking-wider border border-blue-200/80 shadow-sm">
                <Users className="w-3.5 h-3.5 text-blue-700" />
                Voluntariado Ciudadano Activo
              </div>

              <div className="space-y-1">
                <h2 className="text-3xl sm:text-4xl font-black text-slate-800 tracking-tight">
                  Únete a <span className="text-blue-700 font-serif italic">El Perro Azul</span>
                </h2>
                <p className="text-sm font-black text-slate-700 tracking-[0.2em] uppercase font-mono">
                  LIDERA • IMPACTA • CRECE
                </p>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Somos un grupo voluntario de jóvenes, profesionales y vecinos de Tacna comprometidos con la verdad científica, 
                la defensa del agua limpia y el bienestar de nuestras familias. No hacemos política partidaria: 
                <strong className="text-slate-800"> transformamos datos científicos complejos en herramientas prácticas para el pueblo de Tacna.</strong>
              </p>

              {/* Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="neu-flat-white p-4 rounded-2xl">
                  <div className="font-black text-blue-800 text-sm">LIDERA</div>
                  <p className="text-xs text-slate-600 mt-1">Conoce tus derechos hídricos y sé la voz en tu junta vecinal.</p>
                </div>
                <div className="neu-flat-white p-4 rounded-2xl">
                  <div className="font-black text-blue-800 text-sm">IMPACTA</div>
                  <p className="text-xs text-slate-600 mt-1">Desmiente mitos peligrosos como hervir el agua para quitar metales.</p>
                </div>
                <div className="neu-flat-white p-4 rounded-2xl">
                  <div className="font-black text-blue-800 text-sm">CRECE</div>
                  <p className="text-xs text-slate-600 mt-1">Capacítate en ciencia comunitaria y vigilancia ambiental.</p>
                </div>
              </div>

              {/* Official Instagram Registration Box (2026 Neumorphism) */}
              <div className="neu-inset p-4 sm:p-5 rounded-2xl border border-blue-200/50 space-y-3">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center text-white shadow-sm">
                      <Instagram className="w-4 h-4" />
                    </div>
                    <span>Registro Oficial vía Instagram</span>
                  </div>
                  <span className="text-xs font-mono font-bold bg-white/80 text-purple-700 px-2.5 py-0.5 rounded-full border border-purple-200 shadow-sm">
                    @azulperro26
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Para registrarte como voluntario/a, envíanos un mensaje directo (DM) a nuestra cuenta de Instagram{' '}
                  <strong className="text-purple-700 font-bold">@azulperro26</strong> indicando tu nombre, distrito y cómo te gustaría aportar.
                </p>

                <div className="flex flex-wrap items-center gap-2 pt-1">
                  <a
                    href="https://instagram.com/azulperro26"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 via-pink-600 to-rose-500 hover:from-purple-700 hover:to-rose-600 text-white font-extrabold text-xs uppercase tracking-wider px-4 py-2.5 rounded-xl shadow-[4px_4px_12px_rgba(219,39,119,0.35)] hover:scale-[1.02] active:scale-95 transition-all"
                  >
                    <Instagram className="w-4 h-4" />
                    Enviar DM a @azulperro26
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyHandle}
                    className="neu-btn px-3 py-2.5 rounded-xl text-xs font-bold text-slate-700 hover:text-purple-700 flex items-center gap-1.5 cursor-pointer"
                  >
                    {copiedHandle ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
                    {copiedHandle ? '¡Copiado!' : 'Copiar @azulperro26'}
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  onClick={handleCopyShare}
                  className="neu-btn-blue font-bold text-xs sm:text-sm uppercase tracking-wider px-5 py-3 rounded-2xl flex items-center gap-2 cursor-pointer transition-all"
                >
                  {copiedText ? <Check className="w-4 h-4 text-emerald-300" /> : <Share2 className="w-4 h-4 text-amber-300" />}
                  {copiedText ? '¡Texto Copiado para WhatsApp!' : 'Copiar Resumen para WhatsApp'}
                </button>

                <button
                  onClick={() => setShowJoinModal(true)}
                  className="neu-btn text-slate-800 font-bold text-xs sm:text-sm uppercase tracking-wider px-5 py-3 rounded-2xl flex items-center gap-2 cursor-pointer"
                >
                  <Heart className="w-4 h-4 text-rose-500" />
                  ¿Cómo Participar?
                </button>
              </div>

            </div>

            {/* Right: Big Logo & Civic Card (Neumorphic) */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="w-full max-w-sm neu-convex rounded-3xl p-6 text-center">
                <div className="rounded-2xl overflow-hidden neu-inset p-2 mb-4 bg-white aspect-[16/10] flex items-center justify-center">
                  <img
                    src="/logo-perro-azul.jpg"
                    alt="Logo El Perro Azul Tacna"
                    className="w-full h-full object-contain"
                  />
                </div>

                <h3 className="font-serif italic font-black text-2xl text-blue-700">
                  El Perro Azul
                </h3>
                <p className="text-xs font-mono font-black text-slate-700 uppercase tracking-widest mt-0.5">
                  LIDERA • IMPACTA • CRECE
                </p>

                <div className="mt-4 p-3.5 neu-flat-white rounded-2xl text-xs text-slate-600 text-left space-y-1.5">
                  <div className="flex items-center gap-1.5 font-bold text-slate-800">
                    <Shield className="w-3.5 h-3.5 text-blue-600" />
                    Nuestro Manifiesto:
                  </div>
                  <p className="leading-relaxed">
                    "El agua potable de calidad no es un favor de las autoridades; es un derecho humano fundamental que defendemos con ciencia, empatía y trabajo comunitario."
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Info & Instructions Modal for Instagram */}
        {showJoinModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-fade-in">
            <div className="neu-flat rounded-3xl p-6 sm:p-8 max-w-md w-full relative">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center text-white shadow-sm">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-lg text-slate-800">
                    Registro de Voluntarios
                  </h3>
                </div>
                <button
                  onClick={() => setShowJoinModal(false)}
                  className="neu-btn w-8 h-8 rounded-xl flex items-center justify-center text-slate-500 hover:text-slate-800 font-bold"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600">
                <div className="neu-flat-white p-4 rounded-2xl space-y-2">
                  <p className="font-bold text-slate-800">
                    Envía un mensaje directo a nuestra cuenta oficial:
                  </p>
                  <div className="flex items-center justify-between p-2 rounded-xl bg-slate-100 font-mono text-purple-700 font-bold">
                    <span>@azulperro26</span>
                    <button
                      onClick={handleCopyHandle}
                      className="text-xs bg-white px-2 py-1 rounded-lg border border-slate-200 hover:bg-slate-50 flex items-center gap-1 text-slate-700"
                    >
                      {copiedHandle ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                      {copiedHandle ? 'Copiado' : 'Copiar'}
                    </button>
                  </div>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="font-bold text-slate-700">En tu mensaje incluye:</div>
                  <ul className="space-y-1 text-slate-600 list-disc list-inside">
                    <li>Nombre y Apellido</li>
                    <li>Distrito donde vives (Tacna, Candarave, etc.)</li>
                    <li>Área de interés (difusión barrial, diseño, apoyo médico o actividades en colegios)</li>
                  </ul>
                </div>

                <div className="pt-2 flex flex-col gap-2">
                  <a
                    href="https://instagram.com/azulperro26"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-gradient-to-r from-purple-600 to-rose-500 hover:from-purple-700 hover:to-rose-600 text-white font-bold text-xs uppercase tracking-wider shadow-md hover:scale-[1.01] transition-all"
                  >
                    <Instagram className="w-4 h-4" />
                    Abrir Instagram @azulperro26
                  </a>

                  <button
                    type="button"
                    onClick={() => setShowJoinModal(false)}
                    className="neu-btn w-full py-2.5 rounded-2xl text-xs font-bold text-slate-600 hover:text-slate-800"
                  >
                    Entendido, cerrar
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
