// app/layout.tsx
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";
import CustomCursor from "@/app/components/CustomCursor";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jaider Parra | Software Developer",
  description:
    "Portafolio de Jaider Gustavo Parra Daza — Desarrollador de software especializado en React, Next.js y React Native.",
  keywords: ["desarrollador", "frontend", "React", "Next.js", "Bogotá", "Colombia"],
  authors: [{ name: "Jaider Parra", url: "https://github.com/jaiderparra" }],
  openGraph: {
    title: "Jaider Parra | Software Developer",
    description: "Portafolio profesional — React · Next.js · React Native",
    type: "website",
    locale: "es_CO",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-[#020817] text-slate-200 cursor-none`}
      >
        <CustomCursor />
        {children}
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#0f172a",
              color: "#e2e8f0",
              border: "1px solid rgba(56,189,248,0.2)",
              fontFamily: "var(--font-geist-mono)",
              fontSize: "13px",
            },
          }}
        />
      </body>
    </html>
  );
}