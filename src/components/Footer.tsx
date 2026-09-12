import React from 'react';
import { ExternalLink, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t-3 border-slate-900 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800">
          
          {/* Col 1: Brand & Identity */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-white shadow-[0_4px_12px_rgba(0,0,0,0.3)] overflow-hidden p-0.5 flex-shrink-0">
                <img
                  src="/logo-perro-azul.jpg"
                  alt="El Perro Azul"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div>
                <h3 className="text-xl font-black text-white italic font-serif leading-none">
                  El Perro Azul
                </h3>
                <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-blue-400 font-bold mt-1">
                  LIDERA • IMPACTA • CRECE
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Iniciativa de voluntariado ciudadano en Tacna, Perú. Acercamos la ciencia médica, 
              ambiental y el monitoreo hídrico a las familias para exigir juntos soluciones integrales a la escasez y calidad del agua.
            </p>

            <div className="flex items-center gap-2">
              <a
                href="https://instagram.com/azulperro26"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700/80 text-xs font-bold text-blue-400 hover:text-white hover:border-blue-400 transition-all shadow-inner"
              >
                <span>Instagram: @azulperro26</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="text-xs text-slate-500 font-mono">
              Tacna • Candarave • Jorge Basadre • Tarata
            </div>
          </div>

          {/* Col 2: Fuentes Científicas & Enlaces */}
          <div className="md:col-span-5 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white border-b border-slate-800 pb-1.5">
              Repositorios y Revistas Científicas Consultadas
            </h4>
            <ul className="text-xs space-y-2 text-slate-400">
              <li>
                <a
                  href="http://www.scielo.org.pe/scielo.php?script=sci_arttext&pid=S1726-46342018000200002"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <span>• Rev Peru Med Exp Salud Publica (Cairani y Camilaca 2018)</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://revistas.unjbg.edu.pe/index.php/rmb/article/view/461"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <span>• Revista Médica Basadrina (UNJBG - Cáncer y Arsénico 2011)</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://repositorio.upch.edu.pe/handle/20.500.12866/8952"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <span>• Repositorio UPCH (Arsénico y Resultados Perinatales 2021)</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://portalrevistas.aulavirtualusmp.pe/index.php/rc/article/view/1268"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <span>• Revista Campus USMP (Boro en Reservorio Locumba)</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://medisan.sld.cu/index.php/san/article/view/2057"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <span>• MEDISAN (Riesgo Ambiental Sama y Locumba 2018)</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.infobae.com/peru/2025/04/18/agua-potable-de-lima-y-otras-regiones-contenia-coliformes-fecales-y-metales-pesados-segun-analisis-de-digesa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <span>• DIGESA 2025 / Infobae (Metales Pesados en Agua Potable)</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="http://www.scielo.org.pe/pdf/rnp/v87n2/0034-8597-rnp-87-02-169.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <span>• Rev Neuropsiquiatr 2024 (Toxicología de Aluminio en Sur del Perú)</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Transparencia y Aviso Legal */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white border-b border-slate-800 pb-1.5 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              Rigor y Transparencia
            </h4>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Esta plataforma es de libre acceso y de carácter estrictamente educativo y cívico. 
              No sustituye el asesoramiento médico profesional individual ni la atención en centros de salud. 
              Los datos expuestos provienen de fuentes académicas indexadas y reportes regulatorios oficiales del Estado Peruano.
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
          <p>© {new Date().getFullYear()} Voluntariado El Perro Azul. Todos los derechos reservados para la ciudadanía de Tacna.</p>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Hecho con devoción por Tacna y su gente</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
