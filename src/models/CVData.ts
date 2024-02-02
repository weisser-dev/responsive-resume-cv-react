interface Contact {
  address: string;
  email: string;
  phone: string;
  web: {
    title: string,
    url: string
  }
}

interface SocialLink {
  name: string;
  url: string;
}

interface EducationEntry {
  title: string;
  institution: string;
  year: string;
}

interface ExperienceEntry {
  title: string;
  company: string;
  period: string;
  shortDescription: string;
  description: string;
  url: string;
  skills?: string[]; // Optional skills array
}

interface Certificate {
  title: string;
  description: string;
  date: string;
  url: string;
  certificationId: string;
}

interface Reference {
  title: string;
  name: string;
  contact: Contact;
}

export interface CVData {
  name: string;
  profession: string;
  profileImage: string;
  contact: Contact;
  socialLinks: SocialLink[];
  profile: string;
  education: EducationEntry[];
  experience: ExperienceEntry[];
  certificates: Certificate[];
  references: Reference[];
  skills: string[];
  languages: { [key: string]: number };
  interests: { [key: string]: string };
}
