"use client";
// app/page.tsx
import Navbar from "@/app/components/Navbar";
import FadeIn from "@/app/components/FadeIn";
import SkillBar from "@/app/components/SkillBar";
import ContactForm from "@/app/components/ContactForm";
import SocialLinks from "@/app/components/SocialLinks";
import SectionLabel from "@/app/components/SectionLabel";
import { PERSONAL, SKILLS, EXPERIENCE, EDUCATION, SOCIAL_LINKS } from "@/app/lib/data";
import { MapPin, Phone, GraduationCap, Briefcase } from "lucide-react";

export default function HomePage() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        id="inicio"
        className="relative min-h-screen flex items-center justify-center px-6 pt-20"
      >
        {/* Grid background */}
        <div className="absolute inset-0 grid-bg pointer-events-none" />

        {/* Glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-indigo/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <div
            className="font-mono text-[10px] text-brand-cyan tracking-[6px] uppercase mb-6 opacity-0"
            style={{ animation: "fadeUp 0.8s ease 0.2s forwards" }}
          >
            ✦ Disponible para oportunidades ✦
          </div>

          <h1
            className="text-[clamp(3rem,9vw,5.5rem)] font-black leading-[1.05] mb-3 opacity-0"
            style={{ animation: "fadeUp 0.9s ease 0.4s forwards" }}
          >
            <span className="text-slate-100">Jaider</span>
            <br />
            <span className="gradient-text">Parra</span>
          </h1>

          <p
            className="font-mono text-[12px] text-slate-500 tracking-[4px] uppercase mb-8 opacity-0"
            style={{ animation: "fadeUp 0.9s ease 0.6s forwards" }}
          >
            {PERSONAL.tagline}
          </p>

          <p
            className="text-slate-400 text-[15px] leading-relaxed max-w-md mx-auto mb-10 opacity-0"
            style={{ animation: "fadeUp 0.9s ease 0.8s forwards" }}
          >
            {PERSONAL.about}
          </p>

          {/* CTA buttons */}
          <div
            className="flex gap-4 justify-center flex-wrap mb-8 opacity-0"
            style={{ animation: "fadeUp 0.9s ease 1s forwards" }}
          >
            <button
              onClick={() => scrollTo("contacto")}
              className="px-8 py-3 rounded font-mono text-[11px] tracking-[3px] uppercase font-bold text-[#020817] bg-gradient-to-r from-brand-cyan to-brand-indigo hover:opacity-85 transition-opacity"
            >
              Contáctame
            </button>
            <a
              href={`https://github.com/${PERSONAL.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded font-mono text-[11px] tracking-[3px] uppercase text-slate-400 border border-slate-700/60 hover:border-brand-cyan/40 hover:text-brand-cyan transition-all"
            >
              GitHub ↗
            </a>
          </div>

          {/* Social icons */}
          <div
            className="flex justify-center opacity-0"
            style={{ animation: "fadeUp 0.9s ease 1.1s forwards" }}
          >
            <SocialLinks links={SOCIAL_LINKS} showLabel />
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0"
          style={{ animation: "fadeUp 1s ease 1.5s forwards" }}
        >
          <span className="font-mono text-[9px] text-slate-700 tracking-[3px] uppercase">
            scroll
          </span>
          <div className="w-px h-10 bg-gradient-to-b from-brand-cyan to-transparent animate-pulse-line" />
        </div>
      </section>

      {/* ── SOBRE MÍ ─────────────────────────────────────────── */}
      <section id="sobre" className="py-32 px-6 max-w-5xl mx-auto">
        <FadeIn>
          <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start">
            <div>
              <SectionLabel number="01" label="Sobre mí" />
              <h2 className="text-[2.5rem] font-black leading-[1.15] text-slate-100">
                Construyo
                <br />
                <span className="gradient-text">experiencias</span>
                <br />
                digitales.
              </h2>
            </div>

            <div>
              <p className="text-slate-400 leading-relaxed text-[15px] mb-8">
                {PERSONAL.about}
              </p>

              <div className="grid grid-cols-2 gap-6 border-t border-brand-cyan/10 pt-8">
                {[
                  { icon: <MapPin size={14} />, label: "Ubicación", value: PERSONAL.location },
                  { icon: <GraduationCap size={14} />, label: "Universidad", value: "UNINPAHU" },
                  { icon: <Briefcase size={14} />, label: "Disponibilidad", value: "Inmediata" },
                  { icon: <Phone size={14} />, label: "Teléfono", value: PERSONAL.phone },
                ].map(({ icon, label, value }) => (
                  <div key={label}>
                    <div className="flex items-center gap-2 font-mono text-[10px] text-slate-600 tracking-[3px] uppercase mb-1">
                      {icon}
                      {label}
                    </div>
                    <p className="text-slate-200 text-[14px]">{value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <SocialLinks links={SOCIAL_LINKS} showLabel size="sm" />
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ── SKILLS ───────────────────────────────────────────── */}
      <section
        id="skills"
        className="py-32 px-6 bg-slate-950/50 border-y border-brand-cyan/[0.06]"
      >
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <SectionLabel number="02" label="Habilidades" />
            <h2 className="text-[2.5rem] font-black text-slate-100 mb-14">
              Stack técnico
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-x-16">
            {SKILLS.map((skill, i) => (
              <SkillBar key={skill.name} {...skill} delay={i * 80} />
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCIA & EDUCACIÓN ───────────────────────────── */}
      <section id="experiencia" className="py-32 px-6 max-w-5xl mx-auto">
        <FadeIn>
          <SectionLabel number="03" label="Trayectoria" />
          <h2 className="text-[2.5rem] font-black text-slate-100 mb-14">
            Experiencia & Educación
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Experiencia */}
          <FadeIn delay={100}>
            <p className="font-mono text-[10px] text-slate-600 tracking-[3px] uppercase mb-8">
              Experiencia
            </p>
            {EXPERIENCE.map((e) => (
              <div
                key={e.company}
                className="relative pl-6 pb-8 border-l border-brand-cyan/20"
              >
                <div className="absolute -left-[5px] top-[6px] w-2.5 h-2.5 rounded-full bg-brand-cyan" />
                <p className="font-mono text-[10px] text-brand-cyan tracking-[2px] mb-1">
                  {e.period}
                </p>
                <h4 className="text-slate-100 font-semibold text-[15px] mb-1">{e.role}</h4>
                <p className="font-mono text-[11px] text-slate-600 mb-2">{e.company}</p>
                <p className="text-slate-400 text-[13px] leading-relaxed">{e.description}</p>
              </div>
            ))}
          </FadeIn>

          {/* Educación */}
          <FadeIn delay={200}>
            <p className="font-mono text-[10px] text-slate-600 tracking-[3px] uppercase mb-8">
              Educación
            </p>
            {EDUCATION.map((e, i) => (
              <div
                key={i}
                className="relative pl-6 pb-8 border-l border-brand-indigo/20"
              >
                <div className="absolute -left-[5px] top-[6px] w-2.5 h-2.5 rounded-full bg-brand-indigo" />
                <div className="flex items-center gap-2 mb-1">
                  {e.period && (
                    <p className="font-mono text-[10px] text-brand-indigo tracking-[2px]">
                      {e.period}
                    </p>
                  )}
                  <span
                    className={`font-mono text-[9px] px-2 py-0.5 rounded tracking-[1px] ${
                      e.status === "En curso"
                        ? "bg-brand-cyan/10 text-brand-cyan"
                        : "bg-slate-800 text-slate-600"
                    }`}
                  >
                    {e.status}
                  </span>
                </div>
                <h4 className="text-slate-100 font-semibold text-[15px] mb-1">{e.title}</h4>
                <p className="font-mono text-[11px] text-slate-600">{e.place}</p>
              </div>
            ))}
          </FadeIn>
        </div>
      </section>

      {/* ── CONTACTO ─────────────────────────────────────────── */}
      <section
        id="contacto"
        className="py-32 px-6 bg-slate-950/50 border-t border-brand-cyan/[0.06]"
      >
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <SectionLabel number="04" label="Contacto" />
            <h2 className="text-[2.5rem] font-black text-slate-100 mb-4">
              ¿Tienes un proyecto en mente?
            </h2>
            <p className="text-slate-500 mb-12 text-[15px]">
              Disponible para prácticas, freelance y oportunidades de aprendizaje.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-[1fr_1.5fr] gap-16 items-start">
            <FadeIn delay={100}>
              <div className="space-y-6">
                <div>
                  <p className="font-mono text-[10px] text-slate-600 tracking-[3px] uppercase mb-1">
                    Email
                  </p>
                  <a
                    href={`mailto:${PERSONAL.email}`}
                    className="text-slate-300 hover:text-brand-cyan transition-colors text-[14px]"
                  >
                    {PERSONAL.email}
                  </a>
                </div>
                <div>
                  <p className="font-mono text-[10px] text-slate-600 tracking-[3px] uppercase mb-1">
                    Teléfono
                  </p>
                  <p className="text-slate-300 text-[14px]">{PERSONAL.phone}</p>
                </div>
                <div>
                  <p className="font-mono text-[10px] text-slate-600 tracking-[3px] uppercase mb-3">
                    Redes
                  </p>
                  <SocialLinks links={SOCIAL_LINKS} showLabel />
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <ContactForm />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────── */}
      <footer className="py-8 px-6 border-t border-brand-cyan/[0.06] text-center">
        <p className="font-mono text-[11px] text-slate-700 tracking-[2px]">
          © {new Date().getFullYear()} Jaider Parra · Bogotá, Colombia
        </p>
      </footer>
    </>
  );
}