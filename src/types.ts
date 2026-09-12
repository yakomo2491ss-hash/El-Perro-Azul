export type EvidenceLevel = 'clinica_humana' | 'asociacion_epidemiologica' | 'monitoreo_ambiental';

export type ContaminantType = 'arsenico' | 'boro' | 'aluminio' | 'mixto';

export interface ScientificStudy {
  id: string;
  title: string;
  shortTitle: string;
  contaminant: ContaminantType;
  evidenceLevel: EvidenceLevel;
  locationName: string;
  province: string;
  district?: string;
  coordinates: [number, number]; // [lat, lng]
  measuredValues: string;
  regulatoryLimit: string;
  healthFindingsSummary: string;
  scientificMethodology: string;
  fullCitation: string;
  sourceName: string;
  sourceUrl: string;
  year: number;
  keyTakeaways: string[];
  citizenAdvice: string;
  verifiedBiomarker: boolean;
}

export interface DistrictWaterProfile {
  id: string;
  name: string;
  province: string;
  waterSources: string[];
  rationingAvgHours: string;
  primaryRiskNotes: string;
  relevantStudyIds: string[];
  waterAdvice: string;
}

export interface CitizenFaq {
  id: string;
  question: string;
  shortAnswer: string;
  detailedExplanation: string;
  category: 'mitos' | 'salud' | 'escasez' | 'soluciones';
  highlight?: boolean;
}
