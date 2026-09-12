import { ScientificStudy, DistrictWaterProfile, CitizenFaq } from '../types';

export const SCIENTIFIC_STUDIES: ScientificStudy[] = [
  {
    id: 'cairani-camilaca-arsenico-2018',
    title: 'Biomarcadores de Arsénico en Orina en Cairani y Camilaca (Candarave)',
    shortTitle: 'Arsénico en Cairani y Camilaca (Candarave)',
    contaminant: 'arsenico',
    evidenceLevel: 'clinica_humana',
    locationName: 'Cairani y Camilaca, Provincia de Candarave',
    province: 'Candarave',
    district: 'Cairani y Camilaca',
    coordinates: [-17.3115, -70.3852],
    measuredValues: '100% en Cairani y 80.3% en Camilaca con niveles tóxicos en orina (hasta 30 veces el límite seguro en Cairani)',
    regulatoryLimit: 'Valor de referencia de toxicidad biológica de la OMS superado ampliamente',
    healthFindingsSummary: 'El 100% en Cairani y 80.3% en Camilaca superaron los valores de toxicidad de arsénico en orina (hasta 30 veces más) — Rev Peru Med Exp Salud Pública, 2018. Adicionalmente, la DIRESA Tacna y el INS reportaron en la misma zona cuadros clínicos de hidroarsenicismo crónico regional endémico (HACRE), con lesiones dérmicas y otros síntomas.',
    scientificMethodology: 'Estudio de campo analítico transversal con muestreo biológico de orina en pobladores residentes para cuantificar la excreción de metabolitos de arsénico inorgánico por espectrofotometría de absorción atómica.',
    fullCitation: 'Ale-Mauricio D, Villa G, Gastañaga M. Exposición a arsénico y efectos en la salud en pobladores de Cairani y Camilaca, Candarave, Tacna. Rev Peru Med Exp Salud Publica. 2018;35(2):183-9.',
    sourceName: 'Revista Peruana de Medicina Experimental y Salud Pública (SciELO)',
    sourceUrl: 'http://www.scielo.org.pe/scielo.php?script=sci_arttext&pid=S1726-46342018000200002',
    year: 2018,
    keyTakeaways: [
      'El 100% de los pobladores testeados en Cairani superó el valor de referencia de la OMS en orina.',
      'En Cairani se registraron concentraciones de hasta 30 veces el umbral seguro de toxicidad en orina humana.',
      'En Camilaca, el 80.3% de las personas analizadas excedió los valores de toxicidad biológica (Rev Peru Med Exp Salud Publica, 2018).',
      'Reportes complementarios de DIRESA Tacna y el INS han documentado cuadros clínicos compatibles con HACRE (lesiones cutáneas arsenicales e hipertensión) en la zona andina.'
    ],
    citizenAdvice: 'En Candarave el agua proviene de fuentes con alto contenido volcánico natural. Las autoridades deben priorizar plantas de abatimiento de arsénico y dotación de agua en bidones seguros a postas y escuelas.',
    verifiedBiomarker: true
  },
  {
    id: 'tacna-ciudad-cancer-arsenico-2011',
    title: 'Arsénico en Agua Potable Municipal y Cáncer en la Ciudad de Tacna (2010-2011)',
    shortTitle: 'Arsénico y Frecuencia de Cáncer en Tacna Ciudad',
    contaminant: 'arsenico',
    evidenceLevel: 'asociacion_epidemiologica',
    locationName: 'Ciudad de Tacna (Zona Urbana y distritos)',
    province: 'Tacna',
    district: 'Tacna, Alto de la Alianza, Cono Sur',
    coordinates: [-18.0146, -70.2536],
    measuredValues: 'Arsénico en agua de red > 5 veces el límite legal peruano (0.01 mg/L)',
    regulatoryLimit: 'Límite legal DS N° 031-2010-SA: 0.010 mg/L (Superado por >5x)',
    healthFindingsSummary: 'Asociación epidemiológica observada: El cáncer de piel fue la neoplasia maligna individual más común (29% de todos los tumores en el registro oncológico de EsSalud Tacna 2010-2011) en la misma ciudad donde el agua de red superó >5x la norma de arsénico. Conclusión de los propios autores: "El presente estudio no demuestra causalidad; se requieren mayores estudios para determinar el grado de asociación."',
    scientificMethodology: 'Estudio observacional descriptivo y correlacional entre el monitoreo físico-químico del agua de red municipal y el Registro de Cáncer de la Red Asistencial de EsSalud Tacna durante 2010-2011.',
    fullCitation: 'Ticona-Castro et al. Contaminación del agua potable con arsénico y frecuencia del cáncer en la ciudad de Tacna 2010-2011. Revista Médica Basadrina. 2012;6(1):15-20.',
    sourceName: 'Revista Médica Basadrina (Universidad Nacional Jorge Basadre Grohmann)',
    sourceUrl: 'https://revistas.unjbg.edu.pe/index.php/rmb/article/view/461',
    year: 2011,
    keyTakeaways: [
      'El agua potable de la ciudad superó por más de 5 veces el límite normativo permisible de arsénico en el bienio evaluado.',
      'El cáncer de piel fue la neoplasia más frecuente (29% de todos los tumores registrados en EsSalud Tacna 2010-2011).',
      'Conclusión de los propios autores: "El presente estudio no demuestra causalidad; se requieren mayores estudios para determinar el grado de asociación."',
      'A nivel toxicológico internacional general, la IARC clasifica el arsénico como carcinógeno del Grupo 1, pero este estudio local es observacional y no prueba causalidad directa en la muestra.'
    ],
    citizenAdvice: 'Para beber y cocinar alimentos que absorben agua (arroz, sopas), evitar el agua directa del grifo si no cuenta con tratamiento de ósmosis inversa. ¡Hervir no quita el arsénico!',
    verifiedBiomarker: false
  },
  {
    id: 'tacna-embarazo-parto-arsenico-2021',
    title: 'Arsénico Materno y Resultados Perinatales en Gestantes de Tacna',
    shortTitle: 'Arsénico en Gestantes y Peso al Nacer en Tacna',
    contaminant: 'arsenico',
    evidenceLevel: 'clinica_humana',
    locationName: 'Tacna (Sectores Norte y Centro)',
    province: 'Tacna',
    district: 'Cono Norte y Cercado',
    coordinates: [-17.9942, -70.2458],
    measuredValues: 'Niveles elevados de metabolitos de arsénico en orina de gestantes tacneñas',
    regulatoryLimit: 'Valores de toxicidad biológica de la OMS',
    healthFindingsSummary: 'Asociación directa entre el arsénico urinario materno con reducción del peso al nacer y una tendencia clara hacia partos prematuros.',
    scientificMethodology: 'Tesis de posgrado e investigación clínica transversal en mujeres gestantes atendidas en centros de salud de Tacna, evaluando biomarcadores urinarios de arsénico y correlacionándolos con el desenlace del neonato.',
    fullCitation: 'Fano Sizgorich D. Asociación entre la exposición a arsénico durante el embarazo y los resultados perinatales en la ciudad de Tacna. Repositorio Institucional UPCH, 2021.',
    sourceName: 'Repositorio de Tesis Universidad Peruana Cayetano Heredia (UPCH)',
    sourceUrl: 'https://repositorio.upch.edu.pe/handle/20.500.12866/8952',
    year: 2021,
    keyTakeaways: [
      'Las madres con mayor excreción de arsénico tuvieron recién nacidos con menor peso gestacional corregido.',
      'Se identificó una mayor exposición en los distritos de la zona norte y centro de la ciudad de Tacna.',
      'El arsénico atraviesa la barrera placentaria exponiendo al feto en desarrollo.',
      'Subraya la vulnerabilidad extrema de madres gestantes e infantes tacneños frente a este metaloide.'
    ],
    citizenAdvice: 'Toda gestante en Tacna debe recibir orientación especial en sus controles prenatales y acceder a fuentes de agua baja en arsénico certificadas durante el embarazo y la lactancia.',
    verifiedBiomarker: true
  },
  {
    id: 'locumba-reservorio-boro-usmp',
    title: 'Niveles de Boro no Permisibles en Reservorio de Agua Potable de Locumba',
    shortTitle: 'Boro en Reservorio de Locumba (Jorge Basadre)',
    contaminant: 'boro',
    evidenceLevel: 'monitoreo_ambiental',
    locationName: 'Reservorio de agua potable, Cuenca del Río Locumba',
    province: 'Jorge Basadre',
    district: 'Locumba',
    coordinates: [-17.6148, -70.7635],
    measuredValues: '8.681 mg/L y 4.148 mg/L de Boro',
    regulatoryLimit: 'Límite regulatorio peruano: 2.4 mg/L (Superado por hasta 3.6 veces)',
    healthFindingsSummary: 'El estudio concluye que representa un riesgo potencial para la salud humana por ingesta prolongada, pero aclara que NO se midieron biomarcadores en personas ni desenlaces clínicos directos.',
    scientificMethodology: 'Muestreo analítico químico de agua en puntos de captación y reservorios de distribución de la cuenca hidrográfica de Locumba mediante espectrofotometría.',
    fullCitation: 'Campus (USMP). Niveles de boro no permisibles en reservorio de agua potable, cuenca hidrográfica Locumba, Región Tacna-Perú. Portal de Revistas USMP.',
    sourceName: 'Revista Campus - Universidad de San Martín de Porres (USMP)',
    sourceUrl: 'https://portalrevistas.aulavirtualusmp.pe/index.php/rc/article/view/1268',
    year: 2019,
    keyTakeaways: [
      'Se detectaron valores alarmantes de 8.681 mg/L y 4.148 mg/L frente a la norma de 2.4 mg/L.',
      'El boro proviene mayormente de fuentes termales y lixiviación natural de la roca volcánica andina.',
      'DISTINCIÓN CLAVE: Es un estudio de calidad físico-química del agua que alerta sobre el riesgo ambiental, no un ensayo clínico en pobladores.',
      'Afecta también la agricultura local (muy tóxico para cultivos sensibles como cítricos y palto).'
    ],
    citizenAdvice: 'Aunque no hay un estudio clínico local en humanos en Locumba, los niveles de boro ameritan filtros especiales de desboronización por resinas selectivas o membranas especiales.',
    verifiedBiomarker: false
  },
  {
    id: 'sama-locumba-arsenico-boro-2018',
    title: 'Riesgo Ambiental Conjunto por Arsénico y Boro en Cuencas Sama y Locumba',
    shortTitle: 'Arsénico y Boro en Cuencas Sama y Locumba',
    contaminant: 'mixto',
    evidenceLevel: 'monitoreo_ambiental',
    locationName: 'Cuencas hidrográficas de Sama y Locumba',
    province: 'Tacna y Jorge Basadre',
    district: 'Sama Las Yaras e Ilabaya',
    coordinates: [-17.8423, -70.5289],
    measuredValues: 'Arsénico y boro excedieron sistemáticamente los límites en múltiples meses de muestreo',
    regulatoryLimit: 'Estándares de Calidad Ambiental (ECA Agua) y DS 031-2010-SA',
    healthFindingsSummary: 'Evaluación de riesgo ecotoxicológico y ambiental. Los autores señalan explícitamente que la medición de biomarcadores en seres humanos es una investigación urgente y pendiente que aún no se ha ejecutado.',
    scientificMethodology: 'Monitoreo temporal multimensual de estaciones hidrológicas a lo largo de las cuencas de Sama y Locumba, cuantificando la estacionalidad del arrastre mineral.',
    fullCitation: 'Morales Cabrera D, et al. Evaluación de riesgo ambiental por arsénico y boro en las cuencas Sama y Locumba, Tacna. MEDISAN. 2018;22(4):406.',
    sourceName: 'MEDISAN (Revista Médica de Santiago de Cuba / SciELO)',
    sourceUrl: 'https://medisan.sld.cu/index.php/san/article/view/2057',
    year: 2018,
    keyTakeaways: [
      'Ambos elementos químicos sobrepasaron los techos normativos durante gran parte del año hidrológico.',
      'La interacción de boro y arsénico genera un cóctel de estrés químico en los ecosistemas de valle.',
      'DISTINCIÓN CLAVE: Los investigadores dejan por sentado que falta financiamiento para testear biomarcadores en las familias de las cuencas.',
      'Demuestra la necesidad de una política pública regional integral de cuencas en Tacna.'
    ],
    citizenAdvice: 'Los agricultores y familias rurales deben solicitar al Gobierno Regional de Tacna monitoreos periódicos con entrega transparente de resultados a las juntas de regantes.',
    verifiedBiomarker: false
  },
  {
    id: 'digesa-2025-aluminio-metales-pesados',
    title: '2025 (difusión) / 2021-2022 (muestreo) — Informe DIGESA: Aluminio y Metales Pesados en Agua de Tacna',
    shortTitle: 'Aluminio y Metales en Agua (Muestreo 2021-22 / Difusión 2025)',
    contaminant: 'aluminio',
    evidenceLevel: 'monitoreo_ambiental',
    locationName: 'Redes de distribución y plantas de Tacna',
    province: 'Tacna',
    district: 'Departamental / Redes Urbanas',
    coordinates: [-17.9621, -70.1983],
    measuredValues: 'Muestreo de campo realizado en 2021-2022; resultados difundidos públicamente por Infobae Perú en abril de 2025. Presencia no conforme de aluminio, junto con arsénico, mercurio, níquel y plomo en fuentes evaluadas',
    regulatoryLimit: 'Reglamento de Calidad de Agua para Consumo Humano DIGESA',
    healthFindingsSummary: 'Reporte regulatorio oficial. El muestreo de campo corresponde a monitoreos de 2021-2022 divulgados periodísticamente en abril de 2025. Los funcionarios advierten que "hervir el agua no elimina los metales pesados", pero se trata de una fiscalización físico-química del agua potable, no de un seguimiento a pacientes.',
    scientificMethodology: 'Fiscalización sanitaria nacional de la Dirección General de Salud Ambiental (DIGESA) con muestreo de campo realizado en 2021-2022 sobre redes y sistemas de abastecimiento de agua potable en diversas regiones del Perú.',
    fullCitation: 'DIGESA (muestreo 2021-2022) / Cobertura Infobae Perú. Agua potable de Lima y otras regiones contenía coliformes fecales y metales pesados, según análisis de DIGESA. Publicado el 18 de abril de 2025.',
    sourceName: 'DIGESA (Muestreo 2021-2022) / Infobae Perú (Abril 2025)',
    sourceUrl: 'https://www.infobae.com/peru/2025/04/18/agua-potable-de-lima-y-otras-regiones-contenia-coliformes-fecales-y-metales-pesados-segun-analisis-de-digesa/',
    year: 2025,
    keyTakeaways: [
      'Muestreo de campo realizado en 2021-2022; resultados difundidos públicamente por Infobae Perú en abril de 2025.',
      'DIGESA detectó aluminio y otros metales pesados en muestras de agua potable de Tacna durante las inspecciones de 2021-2022.',
      'ADVERTENCIA VITAL: Hervir el agua no destruye ni volatiliza los metales pesados; al hervir se pierde vapor y el metal se concentra más en la olla.',
      'DISTINCIÓN CLAVE: Es un informe de vigilancia sanitaria del agua; no evalúa pacientes individuales ni vincula clínicamente enfermedades a este hallazgo en Tacna.',
      'Exige fiscalización técnica y control estricto sobre las EPS y plantas de potabilización.'
    ],
    citizenAdvice: '¡No confíes en que hervir el agua la "descontamina" de metales! Hervir solo elimina bacterias y microbios, pero no arsénico ni aluminio.',
    verifiedBiomarker: false
  },
  {
    id: 'aluminio-toxicologia-sur-peru-2024',
    title: 'Toxicología del Aluminio en el Sur del Perú: Mecanismos Neurodegenerativos',
    shortTitle: 'Mecanismos de Toxicidad del Aluminio (Sur del Perú)',
    contaminant: 'aluminio',
    evidenceLevel: 'monitoreo_ambiental',
    locationName: 'Macro Región Sur del Perú (Estudio Fisiopatológico General)',
    province: 'Macro Región Sur / Tacna',
    coordinates: [-17.5000, -70.1000],
    measuredValues: 'Revisión clínica sobre concentración cerebral, estrés oxidativo y exposición por consumo tradicional (chacco)',
    regulatoryLimit: 'Revisión toxicológica de literatura biomédica',
    healthFindingsSummary: 'Describe la vía mecanística entre el aluminio y desórdenes neurodegenerativos (enfermedad de Alzheimer). Menciona el consumo de arcilla tradicional ("chacco") en el sur peruano como una vía de exposición, pero aclara que es una revisión general de toxicología y NO un estudio de agua potable en Tacna.',
    scientificMethodology: 'Revisión sistemática de literatura biomédica y toxicológica sobre los efectos neuropatológicos del aluminio y vías culturales/ambientales de incorporación en el sur peruano.',
    fullCitation: 'Yucra S, et al. Toxicidad por aluminio y su relación con enfermedades neurodegenerativas en el sur del Perú. Rev Neuropsiquiatr. 2024;87(2):169-180.',
    sourceName: 'Revista de Neuro-Psiquiatría (SciELO Perú)',
    sourceUrl: 'http://www.scielo.org.pe/pdf/rnp/v87n2/0034-8597-rnp-87-02-169.pdf',
    year: 2024,
    keyTakeaways: [
      'El aluminio puede cruzar la barrera hematoencefálica promoviendo neuroinflamación y agregación de proteínas patológicas.',
      'Identifica fuentes de exposición en el sur andino, como la geofagia de arcillas medicinales tradicionales ("chacco").',
      'DISTINCIÓN CIENTÍFICA CLAVE: Este artículo explica la toxicología del elemento de manera general en el organismo humano, no un estudio de cohorte en Tacna por agua de grifo.',
      'Sirve como base teórica para comprender por qué organismos internacionales regulan con tanto rigor el aluminio.'
    ],
    citizenAdvice: 'Evitar cocinar alimentos muy ácidos (como escabeches o salsas con tomate y vinagre) en ollas de aluminio desgastadas o de mala calidad, ya que el ácido disuelve el metal.',
    verifiedBiomarker: false
  }
];

export const CALANA_2025_UPDATE = {
  date: 'Octubre 2025 (Inaugurada el 3 de octubre de 2025)',
  badge: 'Actualizado oct. 2025',
  title: 'Ampliación de la Planta de Tratamiento de Agua Potable de Calana',
  entity: 'Gobierno Regional de Tacna y EPS Tacna S.A.',
  summary: 'El Gobierno Regional y la EPS Tacna inauguraron la ampliación de la planta de tratamiento de Calana, con un sistema de coagulación con cloruro férrico automatizado. Según reportes de laboratorio, el arsénico en el agua tratada que sale de esta planta está ahora por debajo de la mitad del límite legal (<0.005 mg/L frente a los 0.010 mg/L permitidos).',
  benefitedUrbanDistricts: 'Tacna Cercado, Alto de la Alianza y Ciudad Nueva',
  unresolvedIssues: [
    'El agua cruda de las fuentes y ríos (Caplina y Uchusuma), que sigue siendo naturalmente alta en arsénico volcánico.',
    'El agua de riego agrícola, que no recibe este tratamiento de potabilización.',
    'Las zonas rurales y altoandinas como Cairani y Camilaca (Candarave), que no se abastecen de esta planta urbana.'
  ]
};

export const DISTRICT_PROFILES: DistrictWaterProfile[] = [
  {
    id: 'tacna-cercado',
    name: 'Tacna (Cercado)',
    province: 'Tacna',
    waterSources: ['Planta de Tratamiento de Calana (Río Caplina)', 'Pozos de Viñani / Sobraya'],
    rationingAvgHours: '6 a 10 horas diarias (horarios discontinuos)',
    primaryRiskNotes: 'Históricamente expuesto a concentraciones de arsénico en la red municipal (>5x norma en 2011 con alta tasa observada de cáncer de piel en EsSalud, sin causalidad probada). ACTUALIZACIÓN OCT. 2025: La ampliación de la PTAP Calana redujo el arsénico en el agua tratada a menos de la mitad del límite legal para la red urbana.',
    relevantStudyIds: ['tacna-ciudad-cancer-arsenico-2011', 'tacna-embarazo-parto-arsenico-2021', 'digesa-2025-aluminio-metales-pesados'],
    waterAdvice: 'El agua tratada de red ha mejorado tras la ampliación de Calana. Para beber y cocinar, se recomienda mantener filtros certificados o hervir para desinfección microbiológica sin sobre-evaporar.'
  },
  {
    id: 'gregorio-albarracin',
    name: 'Coronel Gregorio Albarracín Lanchipa (Cono Sur)',
    province: 'Tacna',
    waterSources: ['Pozos subterráneos de Viñani', 'Interconexión con Planta de Calana'],
    rationingAvgHours: '4 a 8 horas al día (sectores altos con tandeo crítico)',
    primaryRiskNotes: 'El agua de pozo de Viñani tiene alta dureza de sales (sarro visible) y trazas minerales. Gran dependencia de tanques elevados y cisternas.',
    relevantStudyIds: ['tacna-ciudad-cancer-arsenico-2011', 'digesa-2025-aluminio-metales-pesados'],
    waterAdvice: 'Limpiar y desinfectar el tanque elevado cada 6 meses. La acumulación de sedimentos empeora la concentración de partículas.'
  },
  {
    id: 'alto-de-la-alianza',
    name: 'Alto de la Alianza',
    province: 'Tacna',
    waterSources: ['Planta de Alto Lima', 'Canal Uchusuma / Caplina', 'Interconexión PTAP Calana'],
    rationingAvgHours: '3 a 6 horas diarias',
    primaryRiskNotes: 'Ubicado en el cono norte de la ciudad, identificado en el estudio de gestantes (UPCH 2021) como uno de los sectores con mayor exposición biológica a arsénico. ACTUALIZACIÓN OCT. 2025: Recibe agua tratada con cloruro férrico de la ampliada PTAP Calana, con reporte en norma.',
    relevantStudyIds: ['tacna-embarazo-parto-arsenico-2021', 'tacna-ciudad-cancer-arsenico-2011'],
    waterAdvice: 'Prioridad máxima de agua filtrada certificada para mujeres embarazadas y niños pequeños.'
  },
  {
    id: 'ciudad-nueva',
    name: 'Ciudad Nueva',
    province: 'Tacna',
    waterSources: ['Planta de Alto Lima', 'Línea de conducción Uchusuma', 'Interconexión PTAP Calana'],
    rationingAvgHours: '3 a 5 horas diarias',
    primaryRiskNotes: 'Sufre la mayor severidad de tandeo por cota altimétrica. Familias obligadas a almacenar en baldes y tanques donde proliferan bacterias secundarias. Se beneficia de la ampliación de Calana para el abastecimiento potable urbano.',
    relevantStudyIds: ['tacna-embarazo-parto-arsenico-2021'],
    waterAdvice: 'Tapar herméticamente los recipientes de almacenamiento para evitar el zancudo del dengue y la formación de moho.'
  },
  {
    id: 'pocollay-calana-pachia',
    name: 'Pocollay / Calana / Pachía (Valle Viejo)',
    province: 'Tacna',
    waterSources: ['Río Caplina superficial', 'Manantiales andinos'],
    rationingAvgHours: '8 a 14 horas diarias (variable por estacionalidad)',
    primaryRiskNotes: 'Cercanía a la captación directa del Caplina. Los meses de estiaje (mayo-diciembre) concentran sales y metales por falta de caudal de lluvia.',
    relevantStudyIds: ['digesa-2025-aluminio-metales-pesados'],
    waterAdvice: 'Monitorear la turbidez en temporada de huaicos y exigir mantenimiento en los desarenadores de captación.'
  },
  {
    id: 'cairani-camilaca',
    name: 'Cairani y Camilaca (Candarave)',
    province: 'Candarave',
    waterSources: ['Fuentes termominerales de alta montaña', 'Quebradas volcánicas del Yucamane y Tutupaca'],
    rationingAvgHours: 'Flujo continuo pero agua con altísima carga mineral no potable',
    primaryRiskNotes: 'ZONA DE MÁXIMA ALERTA CLÍNICA: 100% de la muestra superó límites de arsénico de OMS con lesiones dérmicas y diabetes demostrada científicamente.',
    relevantStudyIds: ['cairani-camilaca-arsenico-2018'],
    waterAdvice: 'Consumo urgente mediante plantas potabilizadoras compactas o acarreo de agua tratada. No beber directo de las acequias ni puquios sin desarsenificación.'
  },
  {
    id: 'locumba-ilabaya-ite',
    name: 'Locumba / Ilabaya / Ite (Jorge Basadre)',
    province: 'Jorge Basadre',
    waterSources: ['Cuenca del Río Locumba', 'Afluentes Salado e Ilabaya'],
    rationingAvgHours: 'Servicio rural variable',
    primaryRiskNotes: 'Excesos documentados de boro (hasta 8.68 mg/L frente a límite de 2.4 mg/L) y arsénico en el reservorio de agua potable.',
    relevantStudyIds: ['locumba-reservorio-boro-usmp', 'sama-locumba-arsenico-boro-2018'],
    waterAdvice: 'Solicitar a las autoridades distritales la implementación de tecnologías de adsorción para boro y arsénico en las JASS locales.'
  }
];

export const CITIZEN_FAQS: CitizenFaq[] = [
  {
    id: 'mito-hervir-agua',
    question: '¿Si hiervo el agua de Tacna, elimino el arsénico, el boro y los metales?',
    shortAnswer: '¡NO! Es el mito más peligroso. Hervir el agua concentra los metales pesados en lugar de eliminarlos.',
    detailedExplanation: 'El agua al hervir alcanza los 100°C y se evapora como vapor de agua pura. Sin embargo, el arsénico, el boro y los metales pesados (plomo, mercurio, níquel) NO se evaporan a esa temperatura. Al salir vapor de la olla, el volumen de agua disminuye mientras que los metales se quedan dentro, aumentando su concentración tóxica por cada litro restante. Hervir solo mata bacterias y parásitos biológicos, pero empeora la carga química.',
    category: 'mitos',
    highlight: true
  },
  {
    id: 'por-que-tacna-metales',
    question: '¿Por qué el agua de Tacna tiene arsénico y boro? ¿Es por la minería o la naturaleza?',
    shortAnswer: 'El origen primario es la geología volcánica natural de Tacna, agravado por la escasez crítica y sobreexplotación.',
    detailedExplanation: 'Tacna se asienta sobre la cadena volcánica activa de los Andes del Sur (volcanes Tutupaca, Yucamane, fuentes hidrotermales de Calientes). Estas rocas andinas son naturalmente ricas en arsénico y boro. Cuando el agua subterránea o los deshielos pasan por estas fallas geológicas, disuelven los minerales. La escasez extrema del desierto (menos de 5 mm de lluvia anual en la costa) hace que no haya agua dulce suficiente para diluirlos, y la extracción intensiva de pozos profundos extrae capas más ricas en minerales.',
    category: 'salud',
    highlight: true
  },
  {
    id: 'diferencia-estudios',
    question: '¿Cuál es la escala de rigor científico entre el arsénico, el cáncer, el boro y el aluminio?',
    shortAnswer: 'Distinguimos 3 niveles: 1) Daño biológico directo en personas (orina en Candarave), 2) Asociación observada sin causalidad probada (cáncer EsSalud 2011), y 3) Monitoreo ambiental en agua (boro/aluminio).',
    detailedExplanation: 'Esta distinción es esencial para mantener la honestidad y credibilidad científica ante la comunidad: (1) En Candarave se midieron biomarcadores de orina en humanos (Ale-Mauricio et al., 2018; 100% de Cairani superó normas). (2) En la ciudad de Tacna, el estudio oncológico de 2011 detectó que el 29% de los cánceres en EsSalud fue de piel coincidiendo con agua >5x norma; sin embargo, los propios autores aclaran que el estudio no demuestra causalidad y pide más investigación. (3) Con el boro y el aluminio, sabemos que el agua supera límites ambientales (USMP, DIGESA), pero no hay estudios clínicos de biomarcadores en personas de Tacna.',
    category: 'salud',
    highlight: true
  },
  {
    id: 'calana-octubre-2025',
    question: '¿La ampliación de la planta de Calana (octubre 2025) soluciona el problema del arsénico?',
    shortAnswer: 'Mejora de forma significativa el agua tratada de red urbana en Tacna, pero persisten 3 limitaciones críticas.',
    detailedExplanation: 'El 3 de octubre de 2025 se inauguró la ampliación de la PTAP Calana con coagulación automatizada con cloruro férrico, logrando que el agua de salida registre arsénico por debajo de la mitad del límite legal (<0.005 mg/L). Esto beneficia el agua potable de Tacna Cercado, Alto de la Alianza y Ciudad Nueva. Sin embargo, no resuelve: (1) El agua cruda de las cuencas y ríos, que sigue teniendo alta carga natural; (2) El agua de riego agrícola que no pasa por la planta; (3) Las zonas rurales altoandinas (como Cairani y Camilaca) que no se abastecen de esta planta urbana.',
    category: 'soluciones',
    highlight: true
  },
  {
    id: 'que-filtros-sirven',
    question: '¿Qué tipo de filtro sirve realmente en el hogar tacneño?',
    shortAnswer: 'Solo los sistemas de Ósmosis Inversa certificada (con membrana semipermeable) retienen el arsénico disuelto.',
    detailedExplanation: 'Los filtros comunes de carbón activado, tela, piedras o jarras filtrantes simples retienen cloro, sabor, olor y sedimentos gruesos, pero dejan pasar la molécula de arsénico y boro. Para retener arsénico se requiere un equipo doméstico de Ósmosis Inversa (RO) de al menos 4 o 5 etapas con membrana de poliamida, o resinas de intercambio iónico especializadas en boro/arsénico. Verifica que tengan certificación NSF 58 o similar.',
    category: 'soluciones',
    highlight: false
  },
  {
    id: 'escasez-tandeo',
    question: '¿Por qué en Tacna tenemos pocas horas de agua al día (tandeo)?',
    shortAnswer: 'Tacna es la región con menor disponibilidad hídrica por habitante del Perú (estrés hídrico extremo).',
    detailedExplanation: 'El umbral de escasez hídrica de la ONU es de 1,000 m³ por habitante al año. En Tacna, la disponibilidad promedio no supera los 150 a 200 m³/habitante/año, convirtiéndola en una de las zonas más áridas del planeta. Los ríos Caplina, Sama y Locumba son de caudal muy reducido y las represas (Paucarani, Jarumas, Casiri) sufren sequías periódicas. Por eso EPS Tacna debe alternar el bombeo por sectores horarios.',
    category: 'escasez',
    highlight: false
  },
  {
    id: 'como-almacenar-agua',
    question: '¿Cómo almacenar agua de forma segura durante los días de corte?',
    shortAnswer: 'Usa envases de plástico de grado alimentario, bien tapados, lavados previamente y colocados a la sombra.',
    detailedExplanation: 'Almacenar agua en baldes o tanques sin tapa genera proliferación del mosquito Aedes aegypti (transmisor del dengue, ya presente en el sur), además de hongos y bacterias. Lava el tanque con agua y unas gotas de lejía comercial cada pocos meses. Nunca uses recipientes que hayan contenido agroquímicos, aceites o pinturas.',
    category: 'soluciones',
    highlight: false
  }
];

export const TACNA_WATER_FACTS = {
  perCapitaWater: '150 - 200 m³/año',
  unDeficitThreshold: '1,000 m³/año (Estrés Hídrico Severo)',
  rainfallCoast: '< 10 mm/año',
  primaryDams: ['Represa Paucarani (10.5 MMC)', 'Represa Jarumas (13 MMC)', 'Laguna Casiri / Aricota'],
  mainTreatmentPlants: ['PTAP Calana (Trata agua del Caplina y Uchusuma)', 'PTAP Alto Lima (Tratamiento tradicional)'],
  populationAffected: '+380,000 habitantes en el departamento de Tacna'
};
