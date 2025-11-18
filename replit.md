# Can Pilé Veterinary Clinic Website

## Overview
This project is a React-based website wireframe for Can Pilé Veterinary Clinic (Clínica Veterinària Can Pilé), a mockup for the Ayudavets/Solucionia client. The website functions as a single-page application, built with React, Vite, and Tailwind CSS, featuring bilingual support (Catalan and Castellano/Spanish) and an interactive media gallery. Its primary purpose is to provide essential clinic information, including services, team profiles, hours, location, and contact details, with a focus on a professional and user-friendly interface.

## User Preferences
I prefer iterative development with clear, concise explanations for each step. Please ask before making major architectural changes or refactoring significant portions of the codebase. I value well-structured, readable code. I expect the agent to maintain the established bilingual (Catalan/Spanish) content strategy.

## System Architecture

### UI/UX Decisions
The website features a clean, responsive design with a neutral color scheme. Key UI/UX elements include a sticky header with a language switcher, a full-screen hero section with an autoplay video background, and an interactive image/video gallery with a lightbox modal. Navigation is facilitated by scroll-to-section links and a floating call button that appears on scroll. Legal pages are implemented with dedicated URL routing.

### Technical Implementations
- **Frontend**: Developed with React 19.2.0, using Vite 7.1.10 for tooling and Tailwind CSS 4.1.14 for styling.
- **Bilingual Support**: Implemented through a centralized `translations.js` file and a language toggle in the header, enabling dynamic translation of all user-facing text.
- **Routing**: `react-router-dom` is used for client-side routing, particularly for legal pages (Aviso Legal, Política de Privacidad, Política de Cookies). All section anchors use Spanish URLs (#horario, #servicios, #galeria, etc.) for consistency.
- **Media Handling**: All media assets (~19MB) stored as static files in `public/assets/` folder organized by category (logos, hero, services, team, gallery). Custom React components (`MediaImage`, `MediaVideo`) handle lazy loading and error states. A lightbox component provides an interactive viewing experience with keyboard accessibility and body scroll lock.
- **Scroll Tracking**: Implemented to control the visibility of the floating call button and ensure proper scroll alignment for sticky header navigation.
- **SEO**: Meta tags (description, keywords), professional favicon in multiple formats (ICO, PNG, Apple Touch Icon), and optimized page title for search engines.

### Feature Specifications
- **Header/Navigation**: Sticky, with logo, navigation links, language toggle, and social media icons.
- **Hero Section**: Full-screen video background with a call to action.
- **About/Intro**: Clinic introduction, address, and link to team section.
- **Services**: Detailed grid of veterinary services with bilingual descriptions and relevant images.
- **Gallery**: Interactive grid of photos and videos with an expandable lightbox.
- **Testimonials**: Customer reviews with average rating and testimonials.
- **Team**: Profiles of key staff members with bios and photos.
- **Hours & Location**: Accurate business hours and embedded Google Maps.
- **Contact**: Prominent display of phone and email; appointments are phone-based.
- **Footer**: Site links and social media icons.

### System Design Choices
The project is architected as a fully static single-page application. All media assets are bundled within the project in the `public/assets/` folder, eliminating the need for a backend server. The site uses Vite for development and builds to a static `dist/` folder for deployment. Deployment is configured for Static Deployment on Replit, which provides free hosting with no compute costs. The website loads entirely from static files served by a CDN.

## External Dependencies

- **Vite**: Build tool for frontend development and static site generation.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **React Router DOM**: Library for client-side routing (legal pages).
- **ImageMagick**: System package used for favicon generation only (not required for deployment).