export interface SliderContent {
  image: string;
  mobileImage: string;
  alt: string;
}

export interface CTAContent {
  icon: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  title: string;
  description: string;
  buttonText: string;
}

export interface CTA2Content {
  title: string;
  buttonText: string;
}

export interface CopyrightContent {
  text: string;
}

export interface ContactContent {
  icon: 'faPhone' | 'faEnvelope' | 'faLocation' | 'faClock';
  label: string;
  value: string;
  whiteText: boolean;
  borderColor: string;
}

export interface SocialMediaLink {
  icon: string;
  link: string;
}

export interface FooterAboutContent {
  description: string;
  socialLinks: SocialMediaLink[];
}

export interface FooterService {
  icon: string;
  name: string;
}

export interface FooterCategory {
  name: string;
  link: string;
}

export interface HeaderContent {
  brand: {
    text: string;
    link: string;
  };
  navItems: {
    text: string;
    link: string;
    exact?: boolean;
  }[];
}

export interface AboutItemData {
  title: string;
  icon: string;
  description: string;
}

export interface ProjectContent {
  src: string;
  alt?: string;
  title: string;
  description?: string;
  visible?: string[];
  category: string;
}

export interface ProjectsContent {
  sectionTitle: {
    title: string;
    description: string;
  };
  projects: ProjectContent[];
}

export interface AboutContent {
  sectionTitle: {
    title: string;
    description: string;
  };
  aboutItems: AboutItemData[];
}

export interface FooterPost {
  image: string;
  title: string;
  date: string;
}

export interface Testimonial {
  text: string;
  authorName: string;
  authorPosition: string;
}

export interface Partner {
  name: string;
  logo: string;
}

export interface PartnersContent {
  sectionTitle: {
    title: string;
    description: string;
  };
  partners: Partner[];
}

export interface FeaturesItemData {
  title: string;
  icon: string;
  description: string;
}

export interface FeaturesContent {
  sectionTitle: {
    title: string;
    description: string;
  };
  featuresItems: FeaturesItemData[];
}

export interface FooterContent {
  about: FooterAboutContent;
  services: FooterService[];
  categories: FooterCategory[];
  latestPosts: FooterPost[];
}

export interface ServiceItemData {
  image: string;
  title: string;
  description: string;
}

export interface ServicesContent {
  sectionTitle: {
    title: string;
    description: string;
  };
  serviceItems: ServiceItemData[];
  buttonText: string;
} 

export interface ContactFormData {
  description: string;
  buttonText: string;
}