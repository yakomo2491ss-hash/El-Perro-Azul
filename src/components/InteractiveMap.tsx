import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import { SCIENTIFIC_STUDIES } from '../data/studies';
import { ScientificStudy } from '../types';
import { Layers, ZoomIn, Info, AlertTriangle, CheckCircle, ExternalLink, RefreshCw } from 'lucide-react';

interface InteractiveMapProps {
  onSelectStudy: (study: ScientificStudy) => void;
  selectedStudy: ScientificStudy | null;
}

const WATER_INFRASTRUCTURE = [
  {
    id: 'infra-ptap-calana',
    name: 'Planta de Tratamiento de Agua Potable Calana (PTAP)',
    type: 'infra',
    coordinates: [-17.9650, -70.1980] as [number, number],
    description: 'Trata las aguas superficiales del río Caplina y el canal Uchusuma para la ciudad de Tacna. Necesita constante mantenimiento para abatir arsénico natural.'
  },
  {
    id: 'infra-represa-paucarani',
    name: 'Represa de Paucarani (Capacidad ~10.5 MMC)',
    type: 'infra',
    coordinates: [-17.4850, -69.6950] as [number, number],
    description: 'Principal embalse altoandino que alimenta el canal Uchusuma hacia Tacna. Afectada severamente por la sequía y la escasez de lluvias en la cordillera.'
  },
  {
    id: 'infra-volcan-tutupaca',
    name: 'Complejo Volcánico Tutupaca y Yucamane (Candarave)',
    type: 'geologia',
    coordinates: [-17.0250, -70.3600] as [number, number],
    description: 'Origen geológico natural: La actividad hidrotermal y rocas volcánicas lixivian arsénico y boro hacia los ríos Callazas, Salado y Calientes.'
  },
  {
    id: 'infra-pozos-vinani',
    name: 'Batería de Pozos de Viñani / Sobraya (Cono Sur)',
    type: 'infra',
    coordinates: [-18.0620, -70.2450] as [number, number],
    description: 'Aporte de aguas subterráneas para los distritos de Gregorio Albarracín y Cono Sur. Presenta alta dureza de sales minerales.'
  }
];

export const InteractiveMap: React.FC<InteractiveMapProps> = ({ onSelectStudy, selectedStudy }) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersLayerRef = useRef<L.LayerGroup | null>(null);
  const [filter, setFilter] = useState<'all' | 'clinica' | 'ambiental' | 'infra'>('all');
  const [showInfra, setShowInfra] = useState<boolean>(true);

  // Initialize Map
  useEffect(() => {
    if (!mapContainerRef.current || mapInstanceRef.current) return;

    // Centered on Tacna Department
    const map = L.map(mapContainerRef.current, {
      center: [-17.75, -70.40],
      zoom: 9,
      minZoom: 8,
      maxZoom: 15,
      scrollWheelZoom: false, // Prevent accidental scrolling when browsing page
    });

    // Clean, high-readability base map (CartoDB Positron)
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 19
    }).addTo(map);

    const markersGroup = L.layerGroup().addTo(map);
    markersLayerRef.current = markersGroup;
    mapInstanceRef.current = map;

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  // Render Markers according to Filter
  useEffect(() => {
    if (!mapInstanceRef.current || !markersLayerRef.current) return;

    markersLayerRef.current.clearLayers();

    // 1. Add Scientific Studies
    SCIENTIFIC_STUDIES.forEach((study) => {
      const isClinical = study.evidenceLevel === 'clinica_humana';

      if (filter === 'clinica' && !isClinical) return;
      if (filter === 'ambiental' && isClinical) return;
      if (filter === 'infra') return;

      const markerColor = isClinical ? '#dc2626' : '#d97706';
      const badgeText = isClinical ? '🔴 Evidencia Clínica' : '🟡 Monitoreo Agua';

      // Custom HTML Marker Icon
      const customIcon = L.divIcon({
        className: 'custom-leaflet-marker',
        html: `
          <div class="relative group cursor-pointer" style="transform: translate(-50%, -100%);">
            <div class="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg border-2 border-white transition-transform duration-200 group-hover:scale-110" style="background-color: ${markerColor};">
              ${isClinical ? 'As' : study.contaminant === 'boro' ? 'B' : study.contaminant === 'aluminio' ? 'Al' : 'Mix'}
            </div>
            <div class="w-2 h-2 rounded-full mx-auto mt-0.5 border border-white" style="background-color: ${markerColor};"></div>
          </div>
        `,
        iconSize: [36, 42],
        iconAnchor: [18, 42],
        popupAnchor: [0, -42]
      });

      const marker = L.marker(study.coordinates, { icon: customIcon });

      const popupContent = document.createElement('div');
      popupContent.className = 'p-1 max-w-xs font-sans';
      popupContent.innerHTML = `
        <div class="mb-2">
          <span class="inline-block px-2 py-0.5 rounded text-[10px] font-bold text-white uppercase tracking-wider" style="background-color: ${markerColor};">
            ${badgeText}
          </span>
          <h4 class="font-extrabold text-slate-900 text-sm mt-1.5 leading-tight">${study.shortTitle}</h4>
          <p class="text-xs text-slate-600 mt-1"><strong>Lugar:</strong> ${study.locationName}</p>
          <div class="mt-2 text-xs bg-slate-50 p-2 rounded border border-slate-200 text-slate-700">
            <span class="font-semibold text-slate-900">Hallazgo:</span> ${study.measuredValues}
          </div>
        </div>
        <button id="btn-view-${study.id}" class="w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs py-1.5 px-3 rounded shadow transition-colors cursor-pointer">
          Ver Ficha Científica Completa
        </button>
      `;

      marker.bindPopup(popupContent);

      marker.on('popupopen', () => {
        const btn = document.getElementById(`btn-view-${study.id}`);
        if (btn) {
          btn.onclick = () => {
            onSelectStudy(study);
          };
        }
      });

      marker.on('click', () => {
        onSelectStudy(study);
      });

      markersLayerRef.current?.addLayer(marker);
    });

    // 2. Add Water Infrastructure & Geological Markers (if enabled)
    if (showInfra && (filter === 'all' || filter === 'infra')) {
      WATER_INFRASTRUCTURE.forEach((infra) => {
        const isVolcano = infra.type === 'geologia';
        const color = isVolcano ? '#7c2d12' : '#0284c7';
        const iconChar = isVolcano ? '🌋' : '💧';

        const customIcon = L.divIcon({
          className: 'custom-infra-marker',
          html: `
            <div class="relative group cursor-pointer" style="transform: translate(-50%, -100%);">
              <div class="w-7 h-7 rounded-full flex items-center justify-center text-xs shadow-md border-2 border-white bg-white text-slate-900 border-${isVolcano ? 'amber-800' : 'sky-600'}">
                ${iconChar}
              </div>
            </div>
          `,
          iconSize: [28, 28],
          iconAnchor: [14, 28],
          popupAnchor: [0, -28]
        });

        const marker = L.marker(infra.coordinates, { icon: customIcon });
        marker.bindPopup(`
          <div class="p-1 max-w-xs font-sans">
            <span class="text-[10px] font-bold uppercase tracking-wider text-sky-800 bg-sky-100 px-2 py-0.5 rounded">
              ${isVolcano ? 'Geología Natural' : 'Infraestructura Hídrica'}
            </span>
            <h4 class="font-bold text-slate-900 text-sm mt-1">${infra.name}</h4>
            <p class="text-xs text-slate-600 mt-1">${infra.description}</p>
          </div>
        `);
        markersLayerRef.current?.addLayer(marker);
      });
    }

  }, [filter, showInfra, onSelectStudy]);

  // Center on specific study if selected externally
  useEffect(() => {
    if (selectedStudy && mapInstanceRef.current) {
      mapInstanceRef.current.flyTo(selectedStudy.coordinates, 12, {
        duration: 1.2
      });
    }
  }, [selectedStudy]);

  const flyToZone = (coords: [number, number], zoomLevel: number = 11) => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.flyTo(coords, zoomLevel, { duration: 1.2 });
    }
  };

  return (
    <div id="mapa" className="py-10 bg-[#ebf0f7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-2 border border-blue-200">
              <Layers className="w-3.5 h-3.5 text-blue-600" />
              Cartografía Departamental
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight">
              Mapa Interactivo del Agua en Tacna
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-1">
              Ubica geográficamente los estudios científicos, reservorios y cuencas. Haz clic en cada marcador para explorar los datos oficiales.
            </p>
          </div>

          {/* Quick Fly Buttons */}
          <div className="flex flex-wrap gap-2 text-xs font-semibold">
            <span className="text-slate-500 self-center hidden sm:inline text-[11px] uppercase tracking-wider font-mono">Ir a:</span>
            <button
              onClick={() => flyToZone([-18.0146, -70.2536], 12)}
              className="neu-btn text-slate-800 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer"
            >
              📍 Tacna Ciudad
            </button>
            <button
              onClick={() => flyToZone([-17.3115, -70.3852], 12)}
              className="neu-btn text-slate-800 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer"
            >
              📍 Candarave / Cairani
            </button>
            <button
              onClick={() => flyToZone([-17.6148, -70.7635], 11)}
              className="neu-btn text-slate-800 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer"
            >
              📍 Cuenca Locumba
            </button>
            <button
              onClick={() => flyToZone([-17.8423, -70.5289], 11)}
              className="neu-btn text-slate-800 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer"
            >
              📍 Cuenca Sama
            </button>
            <button
              onClick={() => flyToZone([-17.75, -70.40], 9)}
              className="neu-btn-blue text-xs font-bold px-3 py-1.5 rounded-xl transition-all cursor-pointer"
            >
              🔄 Ver Todo
            </button>
          </div>
        </div>

        {/* Filters Bar */}
        <div className="neu-flat p-3.5 rounded-t-3xl flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm font-semibold border-b border-slate-200/50">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-slate-500 font-bold uppercase tracking-wider text-[11px] mr-1">Filtrar:</span>
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 rounded-xl transition-all font-bold cursor-pointer ${
                filter === 'all'
                  ? 'neu-inset text-blue-700 font-extrabold bg-[#ebf0f7]'
                  : 'neu-btn text-slate-700'
              }`}
            >
              Todos los Estudios ({SCIENTIFIC_STUDIES.length})
            </button>
            <button
              onClick={() => setFilter('clinica')}
              className={`px-3 py-1.5 rounded-xl transition-all flex items-center gap-1.5 font-bold cursor-pointer ${
                filter === 'clinica'
                  ? 'neu-inset text-rose-700 font-extrabold bg-rose-50/70 border border-rose-200/60'
                  : 'neu-btn text-rose-700'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-rose-500"></span>
              🔴 Arsénico: Evidencia Clínica (3)
            </button>
            <button
              onClick={() => setFilter('ambiental')}
              className={`px-3 py-1.5 rounded-xl transition-all flex items-center gap-1.5 font-bold cursor-pointer ${
                filter === 'ambiental'
                  ? 'neu-inset text-amber-800 font-extrabold bg-amber-50/70 border border-amber-200/60'
                  : 'neu-btn text-amber-800'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              🟡 Boro y Aluminio: Riesgo Agua (4)
            </button>
          </div>

          <div className="flex items-center gap-2">
            <label className="flex items-center gap-1.5 text-xs text-slate-700 cursor-pointer select-none font-medium">
              <input
                type="checkbox"
                checked={showInfra}
                onChange={(e) => setShowInfra(e.target.checked)}
                className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 accent-blue-600"
              />
              <span>Mostrar Represas y Volcanes</span>
            </label>
          </div>
        </div>

        {/* Map Viewport Box */}
        <div className="relative rounded-b-3xl neu-flat overflow-hidden bg-slate-200">
          
          {/* Leaflet container */}
          <div
            ref={mapContainerRef}
            className="w-full h-[520px] sm:h-[600px] z-10"
            style={{ touchAction: 'pan-x pan-y' }}
          />

          {/* Floating Map Legend */}
          <div className="absolute bottom-4 left-4 z-20 neu-convex p-4 rounded-2xl max-w-xs text-xs">
            <p className="font-extrabold text-slate-800 mb-2 border-b border-slate-200/60 pb-1.5 flex items-center justify-between">
              <span>Leyenda de Hallazgos</span>
              <span className="text-[10px] text-blue-600 font-mono">El Perro Azul</span>
            </p>
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-rose-600 flex-shrink-0 text-[9px] text-white flex items-center justify-center font-bold shadow-xs">As</span>
                <span className="text-slate-700"><strong>Arsénico:</strong> Biomarcadores en orina y daño clínico directo.</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-amber-600 flex-shrink-0 text-[9px] text-white flex items-center justify-center font-bold shadow-xs">B/Al</span>
                <span className="text-slate-700"><strong>Boro / Aluminio:</strong> Superan límites en agua (sin cohorte clínica local).</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-sky-600 flex-shrink-0 text-[9px] text-white flex items-center justify-center shadow-xs">💧</span>
                <span className="text-slate-700"><strong>Infraestructura:</strong> Represas (Paucarani) y Plantas (Calana).</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-amber-900 flex-shrink-0 text-[9px] text-white flex items-center justify-center shadow-xs">🌋</span>
                <span className="text-slate-700"><strong>Geología:</strong> Cordillera volcánica Yucamane / Tutupaca.</span>
              </div>
            </div>
          </div>

          {/* Interactive Hint Banner */}
          <div className="absolute top-4 right-4 z-20 hidden sm:flex items-center gap-2 neu-convex px-3.5 py-2 rounded-xl text-xs font-medium text-slate-800">
            <Info className="w-3.5 h-3.5 text-blue-600" />
            <span>Haz clic en un marcador para desplegar su ficha técnica</span>
          </div>

        </div>

      </div>
    </div>
  );
};
