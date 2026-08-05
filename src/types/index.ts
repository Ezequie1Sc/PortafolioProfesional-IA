export interface Technology {
  name: string;
  icon: string;
  bgColor: string;
}
// types/index.ts
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  images?: string[];
  icon: string;
  type: 'mobile' | 'web' | 'backend' | 'desktop';
  technologies: Technology[];
  color: 'blue' | 'purple' | 'green' | 'orange';
  github: string;
  demoUrl?: string;
  demoVideo?: string; // NUEVO: URL del video MP4 para móvil
  problem?: string;
  solution?: string;
  howItWorks?: string[];
  impact?: string;
}

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
  credentialUrl?: string;
  skills: string[];
  category: 'programacion' | 'datos' | 'ia' | 'ciberseguridad' | 'idiomas' | 'profesional';
}

export interface SkillItem {
  name: string;
  icon: string;
  containerBg: string;
}

export interface Skill {
  id: number;
  title: string;
  category: string;
  frontGradient: string;
  backGradient: string;
  badgeText: string;
  badgeBorder: string;
  badgeBg: string;
  badgeColor: string;
  skills: SkillItem[];
  backTitle: string;
  backDescription: string;
  backPoints: string[];
  backBadge: string;
  backBadgeBg: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  hoverColor: string;
}

export interface NavLink {
  name: string;
  href: string;
}