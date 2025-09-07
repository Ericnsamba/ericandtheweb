# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Eric Manasse's portfolio website built with Next.js 15, featuring advanced animations and modern web technologies. The project showcases case studies, work experience, and contact information with sophisticated GSAP animations and smooth transitions.

## Development Commands

```bash
# Development
npm run dev          # Start development server on http://localhost:3000
yarn dev            # Alternative with yarn

# Production
npm run build       # Build for production
npm run start       # Start production server
npm run lint        # Run ESLint to check code quality
```

## Architecture & Structure

### Core Technologies
- **Next.js 15** with App Router
- **GSAP 3.13.0** with @gsap/react for animations
- **Lenis** for smooth scrolling
- **next-view-transitions** for page transitions
- **React 19** with modern hooks
- **Website url** `https://ericandtheweb.com`

### Key Directories
```
src/
├── app/                    # Next.js App Router pages
│   ├── page.js            # Home page with hero, about, story, philosophy, work experience
│   ├── layout.js          # Root layout with metadata and ViewTransitions
│   ├── globals.css        # Global styles and CSS variables
│   ├── home.css          # Home page specific styles
│   ├── case-studies/     # Case studies pages with dynamic routes
│   └── contact/          # Contact page
├── components/           # Reusable components
│   ├── Copy/             # Animated text reveal component
│   ├── Menu/             # Navigation with time display and transitions
│   ├── Footer/           # Site footer
│   └── BtnLink/          # Custom link component
├── data/                 # Static data
│   └── case-studies.js   # Portfolio case studies data
└── client-layout.js      # Client-side layout wrapper with Lenis
```

### Animation System

**Copy Component** (`src/components/Copy/Copy.jsx`)
- Uses GSAP SplitText for line-by-line text reveals
- Supports both scroll-triggered and immediate animations
- Handles custom font loading with async font checks
- Key props: `animateOnScroll={boolean}`, `delay={number}`

**GSAP Integration**
- All animations use GSAP with custom easing functions
- ScrollTrigger for scroll-based animations
- Custom ease: `CustomEase.create("hop", "0.9, 0, 0.1, 1")`
- Consistent animation patterns across components

**Page Transitions**
- Uses `next-view-transitions` for smooth page navigation
- Custom `slideInOut()` function with clipPath animations
- All navigation handled through `useTransitionRouter`

### Styling System

**CSS Variables** (in `globals.css`)
```css
--background: #1a1a1a;
--black: #1a1a1a;
--white: #ffffff;
--background-200: #141414;
--foreground: #e4e7df;
--foreground-200: #666666;
--btn-icon: #ffc22a;
```

**Typography**
- Primary: "Lay Grotesk - Trial" (custom font)
- Mono: "DM Mono" from Google Fonts
- Responsive font sizes using `clamp()`
- Consistent type scale and spacing

### Data Structure

**Case Studies** (`src/data/case-studies.js`)
- Array of portfolio projects with metadata
- Fields: id, title, subtitle, year, client, services, description, challenge, solution, results, hero, images, tags, featured
- Images array supports filtering of placeholder images
- Featured flag for priority display

**Work Experience**
- Defined in home page component
- Structure: position, company, duration
- Used in animated work experience table

### Component Patterns

**Refs and Animation Setup**
- Use `useRef` for DOM element targeting
- `useGSAP` hook for animation lifecycle management
- Consistent pattern: set initial states, define animations, cleanup on unmount

**Responsive Design**
- Mobile-first approach with progressive enhancement
- Breakpoints: 768px, 1000px
- Grid layouts that collapse to single column on mobile

### Performance Considerations

**Animation Optimization**
- Use `transform` properties (scaleY, translateY) over layout-affecting properties
- Set `will-change` where appropriate
- Proper cleanup of GSAP instances and event listeners

**Asset Management**
- Images organized in `/public` with project folders
- Conditional image loading based on availability
- Optimized image paths and alt text

### Navigation System

The Menu component handles:
- Real-time clock display
- Current path detection and highlighting
- Smooth page transitions with custom animations
- Responsive navigation patterns

## Content Writing Guidance

When writing website content, act as an expert website content writer.  
- Write in a professional yet approachable tone.  
- Keep sentences clear, concise, and impactful.  
- Avoid clichés, filler words, or overly generic phrases.  
- Adapt content to reflect Eric Manasse’s personal brand and portfolio style.  
- Ensure consistency in tone across hero sections, case studies, about pages, and contact pages.  
- Prioritize readability, scannability, and strong messaging that highlights expertise.  

## Reference Guidelines

- **Case study** → Refers to a single project page, e.g. `/case-studies/Roam`  
- **Case studies** → Refers to the collection or listing of all projects, e.g. `/case-studies/`  

### Key Features to Maintain

1. **Smooth Scrolling**: Lenis configuration with different settings for mobile/desktop
2. **Text Animations**: Copy component with SplitText integration
3. **Image Animations**: ClipPath reveals triggered by ScrollTrigger
4. **Hover Effects**: GSAP-powered interactions with proper state management
5. **View Transitions**: Custom page transition animations
6. **Responsive Tables**: Work experience and case studies with mobile adaptations

When making changes, ensure animations remain smooth, maintain the established visual hierarchy, and test across mobile and desktop viewports.

