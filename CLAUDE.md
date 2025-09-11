# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Peer Women Connect is a React-based landing page for a women's health community platform. Built with Vite, TypeScript, and modern UI libraries, it serves as the marketing site for the Peer community launching soon.

## Development Commands

- `npm run dev` - Start development server on localhost:8080
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview production build locally

## Architecture

### Tech Stack
- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite with SWC plugin for fast compilation  
- **UI Framework**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design system
- **State Management**: React Query for server state, React Context for app state
- **Routing**: React Router DOM
- **Additional**: MUI Material for some components, React Hook Form with Zod validation

### Project Structure

```
src/
├── components/
│   ├── navigation/     # Header, language toggle
│   ├── sections/       # Page sections (Hero, Mission, Community, B2B, Footer)  
│   └── ui/            # shadcn/ui component library (50+ components)
├── contexts/          # React contexts (LanguageContext with i18n)
├── hooks/             # Custom hooks (mobile detection, toast)
├── lib/               # Utilities (Tailwind class merging)
├── pages/             # Route components (Index, Privacy, NotFound)
└── main.tsx           # App entry point
```

### Key Features

**Internationalization**: Complete i18n system with Italian (default) and English translations via LanguageContext. All user-facing strings use the `t()` function with translation keys.

**Design System**: Custom Tailwind configuration with:
- Brand-specific color palette (primary, warm, cream colors)
- Custom gradients and shadows  
- Manrope font family
- Custom animations (fade-in, scale-in, float)

**Component Architecture**: Clean separation with:
- Navigation components for site header
- Section components for each page area
- Reusable UI components from shadcn/ui
- Custom PeerLogo/PeerLogotype components

**Responsive Design**: Mobile-first approach using Tailwind responsive utilities and custom mobile detection hook.

## Development Notes

- Path aliases configured with `@/` pointing to `src/`
- TypeScript strict mode enabled
- ESLint configured with React and TypeScript rules
- Uses Lovable platform for automated deployments
- No test framework currently configured

## Component Conventions

- Use TypeScript with proper typing
- Follow shadcn/ui patterns for new components
- Import paths use `@/` alias for src directory
- UI components use Tailwind classes with custom design tokens
- Translations accessed via `useLanguage()` hook and `t()` function