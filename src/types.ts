export interface ServiceItem {
  id: string;
  title: string;
  category: 'cleaning' | 'marble' | 'specialized';
  description: string;
  iconName: string;
  image: string;
  features: string[];
  popular?: boolean;
}

export interface StaffItem {
  id: string;
  title: string;
  role: string;
  description: string;
  iconName: string;
  image: string;
  attributes: string[];
  badge?: string;
}

export interface SectorItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  roleTag: 'Client satisfait' | 'Entreprise locale' | 'Propriétaire de villa' | 'Responsable Airbnb';
  location: string;
  rating: number;
  comment: string;
  serviceUsed: string;
  date: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'nettoyage' | 'vitres' | 'marbre' | 'canapes' | 'personnel' | 'riads';
  image: string;
  caption: string;
}

export interface MethodStep {
  step: number;
  title: string;
  description: string;
  iconName: string;
}

export interface QuoteFormData {
  serviceCategory: string;
  specificService: string;
  propertyType: string;
  surfaceArea: number;
  frequency: string;
  location: string;
  fullName: string;
  phone: string;
  email: string;
  date: string;
  comments: string;
}
