export interface NavItem {
  label: string;
  href: string;
}

export interface CtaLink {
  label: string;
  href: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image?: string;
}

export interface CaseResult {
  title: string;
  metric: string;
  details: string;
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface ContactDetails {
  address: string;
  hours: string;
  email: string;
  phone: string;
}

export interface ContactFormValues {
  name: string;
  email: string;
  company?: string;
  message: string;
}
