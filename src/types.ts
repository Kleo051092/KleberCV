export interface Skill {
  name: string;
  category: 'core' | 'ai' | 'tool' | 'domain';
  icon: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  category?: 'finance' | 'sales' | 'predictive' | 'market';
  tags: string[];
  metrics: {
    label: string;
    value: string;
    improved: boolean;
  }[];
}

export interface TimelineItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  impactPoints: string[];
  techUsed: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  isEnCurso?: boolean;
}

export interface CertificationItem {
  id: string;
  title: string;
  institution: string;
  date: string;
  isEnCurso?: boolean;
}

export interface AdditionalInfo {
  languages: string[];
  licenses: string[];
  availability: string[];
}

export interface ChartDataPoint {
  month: string;
  accuracy: number;
  baseline: number;
}
