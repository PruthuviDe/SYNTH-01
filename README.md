# SYNTH-01 — The Future of Robotics

A futuristic robotics landing page featuring an interactive 3D humanoid model, cinematic animations, and a full dark-themed UI.

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)
![Three.js](https://img.shields.io/badge/Three.js-r169-black?style=flat-square&logo=three.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?style=flat-square&logo=tailwindcss)

---

## Features

- **Interactive 3D Robot Model** — Drag to rotate, auto-rotate with OrbitControls, floating animation, auto-fit bounding box scaling
- **Futuristic Loading Screen** — HUD corner brackets, dual counter-rotating rings, live progress arc, glitch effect on logo, cycling boot log, CRT scanlines
- **Cinematic Hero Section** — Full-viewport 3D model as centerpiece, text overlaid at bottom with gradient fade, scroll + page indicators
- **Scroll Animations** — Framer Motion `useInView` for stagger-in feature cards and technology stats
- **Smooth Scrolling** — Lenis smooth scroll wrapper
- **Glassmorphism UI** — Cards, navbar, and buttons with `backdrop-filter` blur effects
- **GSAP Scroll Fade** — Hero canvas fades and lifts as user scrolls past

---

## Tech Stack

| Category | Library |
|---|---|
| Framework | [Next.js 16](https://nextjs.org/) (App Router, Turbopack) |
| 3D Rendering | [Three.js](https://threejs.org/) + [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber) + [@react-three/drei](https://github.com/pmndrs/drei) |
| Animations | [Framer Motion](https://www.framer.com/motion/) + [GSAP](https://gsap.com/) |
| Smooth Scroll | [Lenis](https://lenis.darkroom.engineering/) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) |
| UI Components | [shadcn/ui](https://ui.shadcn.com/) |
| Icons | [Lucide React](https://lucide.dev/) |
| Language | TypeScript |

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm / pnpm / yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/PruthuviDe/SYNTH-01.git
cd SYNTH-01

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

---

## Project Structure

```
SYNTH-01/
├── public/
│   └── models/
│       └── robot.glb              # 3D robot model
├── src/
│   ├── app/
│   │   ├── globals.css            # Global styles, dark theme, glassmorphism
│   │   ├── layout.tsx             # Root layout
│   │   └── page.tsx               # Main page composition
│   └── components/
│       ├── three/
│       │   ├── RobotModel.tsx     # 3D model with auto-fit scaling + float
│       │   └── RobotScene.tsx     # Canvas, lights, OrbitControls, GSAP fade
│       ├── sections/
│       │   ├── HeroSection.tsx    # Full-screen hero with 3D model
│       │   ├── FeaturesSection.tsx
│       │   ├── TechnologySection.tsx
│       │   └── Footer.tsx
│       ├── LoadingScreen.tsx      # Futuristic HUD loading screen
│       ├── Navbar.tsx             # Fixed navbar with scroll blur
│       └── SmoothScroll.tsx       # Lenis wrapper
```

---

## Deployment

Deployed on **Vercel** — zero config required for Next.js.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/PruthuviDe/SYNTH-01)

---

## License

MIT
