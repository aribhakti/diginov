import { LucideIcon } from 'lucide-react';

export type Language = 'id' | 'en';

export interface NavItem {
  label: string;
  href: string;
}

export interface ProductItem {
  id: string;
  title: string;
  icon?: LucideIcon;
}

export interface FeatureItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  icon: LucideIcon;
}

export interface ContactInfo {
  address: string;
  addressLines: string[];
  phone: string;
  email: string;
}

export interface ContentSection {
  nav: NavItem[];
  hero: {
    tagline: string;
    titleStart: string;
    titleEnd: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    status: string;
  };
  about: {
    label: string;
    title: string;
    description: string;
    stats: {
      products: string;
      support: string;
    };
    visionTitle: string;
    vision: string;
    missionTitle: string;
    mission: string[];
    readMore: string;
  };
  features: {
    label: string;
    title: string;
    items: FeatureItem[];
  };
  products: {
    label: string;
    title: string;
    description: string;
    items: ProductItem[];
  };
  gallery: {
    label: string;
    title: string;
    description: string;
  };
  contact: {
    label: string;
    titleStart: string;
    titleEnd: string;
    description: string;
    locationTitle: string;
    phoneTitle: string;
    emailTitle: string;
    formTitle: string;
    success: string;
    form: {
      name: string;
      email: string;
      subject: string;
      message: string;
      btn: string;
      sending: string;
    };
  };
  footer: {
    navTitle: string;
    productsTitle: string;
    rights: string;
    more: string;
  }
}
