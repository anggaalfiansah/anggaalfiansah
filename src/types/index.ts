// Language Types
export type Language = 'id' | 'en';

export interface MultiLangText {
  id: string;
  en: string;
}

// Personal Types
export interface SocialLinks {
  github?: string;
  linkedin?: string;
  instagram?: string;
  twitter?: string;
}

export interface Personal {
  name: string;
  shortName: string;
  profileImage?: string;
  title: MultiLangText;
  greeting: MultiLangText;
  description: MultiLangText;
  location: string;
  email: string;
  phone: string;
  social: SocialLinks;
}

// Experience Types
export interface MediaImage {
  url: string;
  fullUrl: string;
  alt: MultiLangText;
}

export interface Media {
  images: MediaImage[];
}

export interface ExperienceItem {
  title: string | MultiLangText;
  organization: string;
  date: string;
  description: MultiLangText;
  skills: string[];
  media?: Media | null;
}

export interface ExperienceCategory {
  type: 'work' | 'education' | 'training' | 'volunteering' | 'research';
  title: MultiLangText;
  icon: string;
  items: ExperienceItem[];
}

export interface Experience {
  enabled: boolean;
  title: MultiLangText;
  subtitle: MultiLangText;
  categories: ExperienceCategory[];
}

// About Types
export interface About {
  title: MultiLangText;
  subtitle: MultiLangText;
  paragraphs: {
    id: string[];
    en: string[];
  };
  highlights: Array<{
    icon: string;
    label: MultiLangText;
    value: string;
  }>;
}

// Projects Types
export interface Project {
  id: number;
  title: string;
  description: MultiLangText;
  image: string;
  technologies: string[];
  category: string;
  github?: string;
  demo?: string;
}

export interface Projects {
  title: MultiLangText;
  subtitle: MultiLangText;
  filterLabels: {
    all: MultiLangText;
    security: MultiLangText;
    fullstack: MultiLangText;
    iot: MultiLangText;
    research: MultiLangText;
    [key: string]: MultiLangText;
  };
  items: Project[];
}

// Skills Types
export interface SkillCategory {
  title: MultiLangText;
  icon: string;
  skills: Array<string | { name: string }>;
}

export interface Skills {
  title: MultiLangText;
  subtitle: MultiLangText;
  additionalTitle: MultiLangText;
  categories: SkillCategory[];
  additionalSkills: string[];
}

// Contact Types
export interface ContactForm {
  nameLabel: MultiLangText;
  namePlaceholder: MultiLangText;
  emailLabel: MultiLangText;
  emailPlaceholder: MultiLangText;
  subjectLabel: MultiLangText;
  subjectPlaceholder: MultiLangText;
  messageLabel: MultiLangText;
  messagePlaceholder: MultiLangText;
  submitButton: MultiLangText;
}

export interface Contact {
  title: MultiLangText;
  subtitle: MultiLangText;
  connectTitle: MultiLangText;
  introText: MultiLangText;
  successMessage: MultiLangText;
  form: ContactForm;
  labels: {
    location: MultiLangText;
    email: MultiLangText;
    phone: MultiLangText;
  };
}

// Footer Types
export interface Footer {
  tagline: MultiLangText;
  quickLinksTitle: MultiLangText;
  connectTitle: MultiLangText;
  copyright: MultiLangText;
  builtWith: MultiLangText;
}

// Navigation Types
export interface NavLink {
  id: string;
  label: MultiLangText;
}

export interface Navigation {
  links: NavLink[];
}

// Main Portfolio Data Type
export interface PortfolioData {
  defaultLanguage: Language;
  languages: {
    id: string;
    en: string;
  };
  personal: Personal;
  experience: Experience;
  about: About;
  projects: Projects;
  skills: Skills;
  contact: Contact;
  footer: Footer;
  navigation: Navigation;
}

// Language Context Types
export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: <T>(textObj: T | MultiLangText) => T extends MultiLangText ? string : T;
}
