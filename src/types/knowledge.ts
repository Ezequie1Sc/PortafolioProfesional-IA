// ======================================================
// PROFILE
// ======================================================

export interface Profile {

  personal_information: PersonalInformation;

  professional_summary: ProfessionalSummary;

  specializations: string[];

  professional_objective: string;

  strengths: string[];

  areas_of_interest: string[];

  preferred_technologies: PreferredTechnologies;

  currently_learning: string[];

  languages: Language[];

  availability: Availability;

}

export interface PersonalInformation {

  full_name: string;

  preferred_name: string;

  title: string;

  location: Location;

  email: string;

  phone: string;

}

export interface Location {

  city: string;

  state: string;

  country: string;

}

export interface ProfessionalSummary {

  headline: string;

  about: string;

  current_position: string;

  experience_level: string;

}

export interface PreferredTechnologies {

  frontend: string[];

  backend: string[];

  mobile: string[];

  database: string[];

}

export interface Language {

  language: string;

  level: string;

}

export interface Availability {

  employment: string;

  remote: boolean;

  hybrid: boolean;

  onsite: boolean;

}

// ======================================================
// GITHUB
// ======================================================

export interface Github {

  username: string;

  profile_url: string;

  repositories_url: string;

  description: string;

  card: GithubCard;

}

export interface GithubCard {

  show_contributions: boolean;

  show_profile_button: boolean;

  show_repositories_button: boolean;

}

// ======================================================
// SKILLS
// ======================================================

export interface Skills {

  frontend: SkillCategory;

  backend: SkillCategory;

  mobile: SkillCategory;

  database: SkillCategory;

  iot: SkillCategory;

  version_control: VersionControl;

  development_tools: string[];

  artificial_intelligence: ArtificialIntelligence;

  soft_skills: string[];

}

export interface SkillCategory {

  description?: string;

  technologies: Technology[];

}

export interface Technology {

  name: string;

  level?: string;

  experience?: string;

  used_in?: string[];

  concepts?: string[];

  features?: string[];

}

export interface VersionControl {

  tools: string[];

}

export interface ArtificialIntelligence {

  experience: string[];

}