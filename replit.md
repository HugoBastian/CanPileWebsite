# Can Pilé Veterinary Clinic Website

## Overview
This is a React-based website wireframe for Can Pilé Veterinary Clinic (Clínica Veterinària Can Pilé), a mockup project for Ayudavets/Solucionia client. The website is built with React, Vite, and Tailwind CSS.

## Project Information
- **Type**: Single-page veterinary clinic website
- **Languages**: Catalan (ca) and Castellano/Spanish (es) with toggle
- **Framework**: React + Vite
- **Styling**: Tailwind CSS
- **Status**: Wireframe/Mockup stage

## Recent Changes
- **October 22, 2025**:
  - **Contact Section**: Redesigned layout with side-by-side format (Waiting-room.webp image on left, buttons on right)
  - Made contact buttons smaller and more compact (reduced padding, icon size, and font sizes)
  - Added scroll margin (scroll-mt-20) to all sections for proper navigation with sticky header
  - **Reviews**: Changed star rating display from 4.0 to 4.5 stars (using half-star gradient) to better represent 4.4 average

- **October 21, 2025**:
  - **Language Toggle**: Implemented complete bilingual support (Catalan/Castellano) with language switcher in header
  - Created comprehensive translations.js file with all website content in both CA and ES
  - Added language state and toggle button (CA | ES) in header navigation
  - All user-facing text now translates dynamically except user review testimonials
  - Translated sections: header, navigation, hero, about, services, gallery, team, hours, contact, footer
  - **Lightbox Fix**: Fixed modal sizing to properly constrain images/videos to 90% viewport while maintaining aspect ratio
  - Changed lightbox container to use full flex layout with max-w-[90vw] max-h-[90vh] constraints
  - Implemented interactive gallery lightbox/modal with full keyboard accessibility (ESC to close)
  - Changed hero "Truca" button to scroll to About section, renamed to "Sobre nosaltres"
  - Added visual divider border between hero and about sections
  - Updated team section to 2 members: Ester Sarto Jorba and Diana Gambarte with full professional bios
  - Updated team photos to EsterConPerro.webp and DanaConPerro4.webp
  - Changed "Més sobre nosaltres" button to "Coneix el nostre equip" linking to team section
  - Updated service images: Cirurgia uses Cirurgia2.webp, Altres especialitat uses Telescope.webp
  - Updated gallery with 7 specific images + 1 video (BrownLabVid.MP4.webm)
  - Added customer reviews section with 4.5-star average rating and 3 testimonials
  - Implemented hero.mp4 video as autoplay background in hero section
  - Updated business hours to accurate schedule (Mon & Thu: 09:30–14:30, 17:00–19:30; Tue/Wed/Fri: 09:30–14:30; Sat & Sun: Closed)
  - Updated all contact information throughout site (Carrer Verge de la Salut, 7; Phone: 938 446 939; Email: vetcanpile@hotmail.es)
  - Added functional social media links to header and footer (Instagram, Facebook)
  - Removed association badges section (not applicable)
  - Removed contact form (appointments by phone only)
  - Implemented working Google Maps embed with clinic location coordinates
  - Made footer "Nosaltres" link navigate to "Sobre la clínica" section

- **October 20, 2025**:
  - Integrated Replit App Storage for media management (photos/videos)
  - Created backend server infrastructure with Express
  - Built media display components (MediaImage, MediaVideo, MediaGallery)
  - Created media library data structure (JSON-based)
  - Added CORS support and API proxy configuration
  - Created comprehensive media setup documentation (MEDIA_SETUP.md)
  
- **October 17, 2025**: 
  - Imported GitHub project to Replit
  - Set up complete React/Vite development environment
  - Configured Vite to work with Replit proxy (host: 0.0.0.0, port: 5000, allowedHosts: true)
  - Integrated existing JSX component into proper React project structure
  - Configured workflow for development server
  - Set up deployment configuration for autoscale

## Project Architecture

### Tech Stack
- **Frontend**: React 19.2.0
- **Build Tool**: Vite 7.1.10
- **Styling**: Tailwind CSS 4.1.14
- **Dev Server**: Vite dev server on port 5000
- **Backend**: Express 5.1.0 (port 3001)
- **Media Storage**: Replit App Storage (Google Cloud Storage)
- **TypeScript Runtime**: tsx 4.20.6

### Directory Structure
```
/
├── src/
│   ├── components/
│   │   ├── MediaImage.jsx      # Image component with lazy loading
│   │   ├── MediaVideo.jsx      # Video component with controls
│   │   └── MediaGallery.jsx    # Gallery grid component
│   ├── data/
│   │   └── mediaLibrary.json   # Media metadata and references
│   ├── CanPileWireframe.jsx    # Main component with all website sections
│   ├── main.jsx                # React entry point
│   ├── App.jsx                 # App wrapper component
│   └── index.css               # Tailwind imports
├── server/
│   ├── index.ts                # Express server entry point
│   ├── routes.ts               # API routes for media serving
│   ├── objectStorage.ts        # App Storage service
│   └── objectAcl.ts            # Access control for storage
├── index.html                  # HTML entry point
├── vite.config.js              # Vite configuration (with proxy and Replit settings)
├── tailwind.config.js          # Tailwind configuration
├── postcss.config.js           # PostCSS configuration
├── MEDIA_SETUP.md              # Media upload and configuration guide
└── package.json                # Dependencies and scripts
```

### Website Sections
The website includes the following sections:
1. **Header/Navigation**: Sticky header with logo, navigation menu, and social media icons (Instagram, Facebook)
2. **Hero Section**: Full-screen hero with hero.mp4 video background and "Sobre nosaltres" scroll button
3. **About/Intro**: Brief clinic introduction with accurate address and "Coneix el nostre equip" button
4. **Services**: Grid of veterinary services (Radiology, Ultrasound, Surgery, Lab, Oncology, etc.) with updated images
5. **Gallery**: Interactive photo/video gallery with expandable lightbox modal (click to view, ESC/click to close)
6. **Testimonials**: Customer reviews with 4.4-star rating and 3 real testimonials
7. **Team**: 2 staff profiles (Ester Sarto Jorba and Diana Gambarte) with professional bios and photos
8. **Hours & Location**: Accurate business hours and embedded Google Maps
9. **Contact**: Prominent phone and email cards (no form - appointments by phone)
10. **Footer**: Site links and social media (Facebook, Instagram)

### Development
- Run `npm run dev` to start frontend server on port 5000
- Run `npm run dev:backend` to start backend server on port 3001
- Run `npm run dev:all` to start both servers concurrently
- Run `npm run build` to create production build
- Run `npm run preview` to preview production build

### Media Management
- Media files are stored in Replit App Storage
- Upload files through the App Storage UI in Replit Tools panel
- Organize files in folders: `gallery/`, `services/`, `team/`, `hero/`
- See `MEDIA_SETUP.md` for detailed upload instructions
- React components automatically fetch and display media from storage

### Deployment
- Configured for autoscale deployment
- Build command: `npm run build`
- Run command: `npx vite preview --host 0.0.0.0 --port 5000`

## Clinic Information
- **Address**: Carrer Verge de la Salut, 7, 08187 Santa Eulàlia de Ronçana, Barcelona
- **Phone**: 938 446 939 (for appointments)
- **Email**: vetcanpile@hotmail.es
- **Hours**: 
  - Monday & Thursday: 09:30–14:30, 17:00–19:30
  - Tuesday, Wednesday, Friday: 09:30–14:30
  - Saturday & Sunday: Closed
- **Social Media**: 
  - Instagram: @vetcanpile
  - Facebook: Clínica Veterinària Can Pilé

## Notes
- This is a functional website with real clinic information
- Media (images, videos) are served from Replit App Storage
- Hero section features autoplay background video (hero.mp4)
- All contact methods (phone, email) are clickable and functional
- Text content is in Catalan
- The design uses a neutral color scheme with responsive layout
- Appointments are handled by phone only (no online booking form)

## Next Steps to Complete Media Integration
1. Create an App Storage bucket in Replit (Tools → Object Storage)
2. Set the `PUBLIC_OBJECT_SEARCH_PATHS` environment variable to `/can-pile-media/Objects`
3. Upload photos/videos from Google Drive to appropriate folders (within Objects/)
4. Integrate MediaImage and MediaGallery components into CanPileWireframe
5. Update mediaLibrary.json with actual filenames after upload

## Important: App Storage File Structure
- Replit App Storage automatically creates an `Objects` folder within your bucket
- All files should be uploaded to subfolders inside `Objects/`
- Example path: `can-pile-media/Objects/logos/Logo-blanc.webp`
