// app/lib/data.ts
import type { Skill, Experience, Education, SocialLink } from "@/types";

export const PERSONAL = {
  name: "Jaider Parra",
  fullName: "Jaider Gustavo Parra Daza",
  role: "Software Developer",
  tagline: "Frontend Specialist · Mobile · Backend",
  location: "Bogotá, Colombia",
  email: "jaider03parra@gmail.com ",
  phone: "302 436 8194",
  github: "jaiderparra",
  linkedin: "jaider-gustavo-parra-daza-1379141ab/", // tu username de LinkedIn
  about:
    "Estudiante de Ingeniería en Desarrollo de Software con experiencia práctica en aplicaciones web y móviles. Apasionado por construir soluciones reales con tecnologías modernas del ecosistema frontend, aplicando buenas prácticas y trabajo colaborativo.",
} as const;

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "GitHub",
    url: `https://github.com/${PERSONAL.github}`,
    icon: "github",
  },
  {
    label: "LinkedIn",
    url: `https://linkedin.com/in/${PERSONAL.linkedin}`,
    icon: "linkedin",
  },
  {
    label: "Email",
    url: `mailto:${PERSONAL.email}`,
    icon: "mail",
  },
];

export const SKILLS: Skill[] = [
  { name: "JavaScript", level: 85, category: "frontend" },
  { name: "TypeScript", level: 75, category: "frontend" },
  { name: "React", level: 85, category: "frontend" },
  { name: "React Native", level: 75, category: "frontend" },
  { name: "Next.js", level: 70, category: "frontend" },
  { name: "HTML / CSS", level: 90, category: "frontend" },
  { name: "SQL", level: 65, category: "backend" },
  { name: "C++", level: 55, category: "backend" },
  { name: "Git / GitHub", level: 80, category: "tools" },
  { name: "Swagger", level: 65, category: "tools" },
];

export const EXPERIENCE: Experience[] = [
  {
    company: "Politécnico Grancolombiano",
    role: "Formación para el trabajo",
    period: "Feb – Ago 2024",
    description:
      "Maquetación de correos con HTML/CSS, administración de bases de datos en Excel y envío masivo de información con Infobip.",
  },
];

export const EDUCATION: Education[] = [
  {
    title: "Ingeniería en Desarrollo de Software",
    place: "UNINPAHU",
    period: "2022 – 2026",
    status: "En curso",
  },
  {
    title: "Tecnología en Desarrollo de Software",
    place: "UNINPAHU",
    period: "2022 – 2025",
    status: "Completado",
  },
  {
    title: "Técnico en Contabilización de Operaciones",
    place: "SENA",
    period: "",
    status: "Completado",
  },
];
