"use client";
// app/components/Navbar.tsx
import { useState, useEffect } from "react";
import { cn } from "@/app/lib/utils";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre mí", href: "#sobre" },
  { label: "Skills", href: "#skills" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("inicio");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Intersection Observer para resaltar sección activa
  useEffect(() => {
    const sections = NAV_ITEMS.map((n) => n.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { threshold: 0.4 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 px-6 h-16 flex items-center justify-between transition-all duration-300",
        scrolled
          ? "bg-[#020817]/90 backdrop-blur-md border-b border-brand-cyan/10"
          : "bg-transparent"
      )}
    >
      {/* Logo */}
      <button
        onClick={() => scrollTo("#inicio")}
        className="font-mono text-sm text-brand-cyan tracking-[4px] uppercase hover:opacity-70 transition-opacity"
      >
        JP
      </button>

      {/* Desktop nav */}
      <div className="hidden md:flex gap-8">
        {NAV_ITEMS.map(({ label, href }) => {
          const id = href.replace("#", "");
          const isActive = active === id;
          return (
            <button
              key={href}
              onClick={() => scrollTo(href)}
              className={cn(
                "font-mono text-[11px] tracking-[3px] uppercase transition-colors border-b pb-0.5",
                isActive
                  ? "text-brand-cyan border-brand-cyan"
                  : "text-slate-500 border-transparent hover:text-slate-300"
              )}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden text-slate-400 hover:text-brand-cyan transition-colors"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-[#020817]/95 backdrop-blur-md border-b border-brand-cyan/10 md:hidden">
          {NAV_ITEMS.map(({ label, href }) => (
            <button
              key={href}
              onClick={() => scrollTo(href)}
              className="w-full text-left px-6 py-4 font-mono text-[11px] tracking-[3px] uppercase text-slate-400 hover:text-brand-cyan hover:bg-brand-cyan/5 transition-colors border-b border-slate-800/50"
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
