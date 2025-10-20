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

## Notes
- This is a wireframe/mockup transitioning to a functional website
- Media (images, videos) can be uploaded via Replit App Storage
- Ready-to-use media components for displaying photos and videos
- Text content is in Catalan
- The design uses a neutral color scheme with responsive layout
- Backend server configured but currently optional for basic media serving

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
