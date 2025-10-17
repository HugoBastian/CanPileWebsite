# Can Pilé Veterinary Clinic Website

## Overview
This is a React-based website wireframe for Can Pilé Veterinary Clinic (Clínica Veterinària Can Pilé), a mockup project for Ayudavets/Solucionia client. The website is built with React, Vite, and Tailwind CSS.

## Project Information
- **Type**: Single-page veterinary clinic website
- **Language**: Catalan (ca)
- **Framework**: React + Vite
- **Styling**: Tailwind CSS
- **Status**: Wireframe/Mockup stage

## Recent Changes
- **October 17, 2025**: 
  - Imported GitHub project to Replit
  - Set up complete React/Vite development environment
  - Configured Vite to work with Replit proxy (host: 0.0.0.0, port: 5000)
  - Integrated existing JSX component into proper React project structure
  - Configured workflow for development server
  - Set up deployment configuration for autoscale

## Project Architecture

### Tech Stack
- **Frontend**: React 19.2.0
- **Build Tool**: Vite 7.1.10
- **Styling**: Tailwind CSS 4.1.14
- **Dev Server**: Vite dev server on port 5000

### Directory Structure
```
/
├── src/
│   ├── CanPileWireframe.jsx   # Main component with all website sections
│   ├── main.jsx                # React entry point
│   ├── App.jsx                 # App wrapper component
│   └── index.css               # Tailwind imports
├── index.html                  # HTML entry point
├── vite.config.js              # Vite configuration (with Replit proxy settings)
├── tailwind.config.js          # Tailwind configuration
├── postcss.config.js           # PostCSS configuration
└── package.json                # Dependencies and scripts
```

### Website Sections
The website includes the following sections:
1. **Header/Navigation**: Sticky header with logo and navigation menu
2. **Hero Section**: Full-screen hero with background media placeholder and CTA buttons
3. **Trust/Badges**: Association and certification badges
4. **About/Intro**: Brief clinic introduction
5. **Services**: Grid of veterinary services (Radiology, Ultrasound, Surgery, Lab, Oncology, etc.)
6. **Gallery**: Photo/video gallery with lightbox placeholder
7. **Testimonials**: Customer reviews
8. **Team**: Staff profiles (Veterinarians, Assistants, Specialists)
9. **Hours & Location**: Business hours and map integration
10. **Contact**: Contact form and clinic information
11. **Footer**: Site links and social media

### Development
- Run `npm run dev` to start development server on port 5000
- Run `npm run build` to create production build
- Run `npm run preview` to preview production build

### Deployment
- Configured for autoscale deployment
- Build command: `npm run build`
- Run command: `npx vite preview --host 0.0.0.0 --port 5000`

## Notes
- This is a wireframe/mockup with placeholder content
- All media (images, videos) are represented with dashed border placeholders
- Text content is in Catalan
- The design uses a neutral color scheme with responsive layout
