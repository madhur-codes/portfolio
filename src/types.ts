export interface Project {
  id: string;
  num: string;
  glyph: string;
  title: string;
  tag: string;
  category: string;
  year: string;
  description: string;
  longDescription: string;
  stack: string[];
  features: string[];
  architecture?: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface TimelineItem {
  id: string;
  year: string;
  title: string;
  subtitle: string;
  type: 'degree' | 'academic' | 'award' | 'certification';
}

export interface PhilosophyItem {
  num: string;
  title: string;
  subtitle?: string;
  description: string;
  highlight: string;
}
