# 🚀 Jaider Parra — Portfolio

Stack: **Next.js 14 · TypeScript · Tailwind CSS · Supabase · Vercel**

---

## ⚡ Setup en 5 pasos

### 1. Clona e instala

```bash
git clone https://github.com/jaiderparra/portfolio.git
cd portfolio
npm install
```

### 2. Configura Supabase

1. Ve a [supabase.com](https://supabase.com) → tu proyecto
2. Abre **SQL Editor** y pega el contenido de `supabase_setup.sql`
3. Ejecuta con **Run**

### 3. Variables de entorno

```bash
cp .env.local.example .env.local
```

Edita `.env.local` con tus valores reales:
```
NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJh...
```

Encuéntralos en: Supabase → **Settings → API**

### 4. Corre en local

```bash
npm run dev
# http://localhost:3000
```

### 5. Despliega en Vercel (GRATIS, nunca se cae)

```bash
# Instala Vercel CLI (solo una vez)
npm i -g vercel

# Desde la carpeta del proyecto:
vercel

# Agrega las variables de entorno:
vercel env add NEXT_PUBLIC_SUPABASE_URL
vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY
```

**O por interfaz web:**
1. Ve a [vercel.com](https://vercel.com) → **New Project**
2. Importa tu repo de GitHub
3. En **Environment Variables** agrega las 2 variables
4. Click **Deploy** ✅

---

## 📁 Estructura del proyecto

```
portfolio/
├── app/
│   ├── api/
│   │   └── contact/route.ts     # API endpoint del formulario
│   ├── components/
│   │   ├── Navbar.tsx           # Navegación responsive
│   │   ├── FadeIn.tsx           # Animación al hacer scroll
│   │   ├── SkillBar.tsx         # Barras de habilidades animadas
│   │   ├── ContactForm.tsx      # Formulario con validación
│   │   ├── SocialLinks.tsx      # Iconos de redes sociales
│   │   └── SectionLabel.tsx     # Labels de secciones
│   ├── lib/
│   │   ├── data.ts              # ← EDITA AQUÍ tus datos
│   │   ├── supabase.ts          # Cliente Supabase singleton
│   │   ├── utils.ts             # Utilidades (cn)
│   │   └── validations.ts       # Esquemas Zod
│   ├── globals.css
│   ├── layout.tsx               # Metadata SEO
│   └── page.tsx                 # Página principal
├── types/index.ts               # Tipos TypeScript
├── supabase_setup.sql           # Script de base de datos
└── .env.local.example           # Plantilla de variables
```

---

## ✏️ Personalización

Para actualizar tus datos, solo edita **`app/lib/data.ts`**:

```ts
export const PERSONAL = {
  name: "Jaider Parra",
  github: "jaiderparra",
  linkedin: "tu-username-linkedin",  // ← Cambia esto
  // ...
};

export const SKILLS = [
  { name: "React", level: 85, category: "frontend" },
  // Agrega o quita skills aquí
];
```

---

## 🆓 Por qué NUNCA se cae (sin pagar)

| Servicio | Plan gratuito | Límites |
|----------|--------------|---------|
| **Vercel** | Hobby (gratis) | 100GB bandwidth/mes, deploys ilimitados |
| **Supabase** | Free tier | 500MB DB, 2GB transferencia/mes |
| **GitHub** | Free | Repos públicos ilimitados |

Vercel tiene **99.99% uptime SLA** incluso en el plan gratuito.
El sitio se sirve desde una **CDN global** — no hay servidor que "se caiga".

---

## 🔗 Comandos útiles

```bash
npm run dev          # Desarrollo local
npm run build        # Build de producción
npm run type-check   # Verificar TypeScript
npm run lint         # Linter
vercel --prod        # Deploy a producción
```
