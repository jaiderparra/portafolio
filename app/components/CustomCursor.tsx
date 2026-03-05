"use client";
// app/components/CustomCursor.tsx
import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Solo en desktop
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let animFrame: number;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setVisible(true);
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);
    const onMouseDown = () => setClicking(true);
    const onMouseUp = () => setClicking(false);

    // Detectar hover sobre elementos interactivos
    const addHover = () => setHovered(true);
    const removeHover = () => setHovered(false);

    const updateHoverTargets = () => {
      document
        .querySelectorAll("a, button, [role='button'], input, textarea")
        .forEach((el) => {
          el.addEventListener("mouseenter", addHover);
          el.addEventListener("mouseleave", removeHover);
        });
    };

    updateHoverTargets();

    // Observer para elementos que se monten después
    const observer = new MutationObserver(updateHoverTargets);
    observer.observe(document.body, { childList: true, subtree: true });

    // Loop de animación — el ring sigue al dot con inercia
    const animate = () => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
      }

      // Interpolación suave (lerp)
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX - 20}px, ${ringY - 20}px)`;
      }

      animFrame = requestAnimationFrame(animate);
    };

    animate();

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);

    return () => {
      cancelAnimationFrame(animFrame);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Dot — sigue el mouse exacto */}
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: hovered ? "#818cf8" : "#38bdf8",
          pointerEvents: "none",
          zIndex: 9999,
          opacity: visible ? 1 : 0,
          transition: "opacity 0.3s, background 0.2s, width 0.2s, height 0.2s",
          willChange: "transform",
          transform: clicking ? "scale(0.6)" : "scale(1)",
          mixBlendMode: "screen",
        }}
      />

      {/* Ring — sigue con inercia */}
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 40,
          height: 40,
          borderRadius: "50%",
          border: `1.5px solid ${hovered ? "rgba(129,140,248,0.6)" : "rgba(56,189,248,0.4)"}`,
          pointerEvents: "none",
          zIndex: 9998,
          opacity: visible ? 1 : 0,
          transition: "opacity 0.3s, border-color 0.2s, width 0.25s, height 0.25s",
          willChange: "transform",
          ...(hovered && {
            width: 56,
            height: 56,
          }),
          ...(clicking && {
            width: 32,
            height: 32,
          }),
        }}
      />
    </>
  );
}