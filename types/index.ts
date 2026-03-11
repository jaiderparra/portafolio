// types/index.ts

export interface Skill {
  name: string;
  level: number;
  category: "frontend" | "backend" | "tools";
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface Education {
  title: string;
  place: string;
  period: string;
  status: "En curso" | "Completado";
}

export interface ContactMessage {
  id?: string;
  name: string;
  email: string;
  message: string;
  created_at?: string;
}

export interface SocialLink {
  label: string;
  url: string;
  icon: string;
}
