# App Storage Media Setup Guide

## Overview
Your veterinary clinic website now has Replit App Storage configured to handle photos and videos from your Google Drive.

## How to Upload Media Files

### Step 1: Access App Storage
1. Open the **Tools** panel in Replit (left sidebar)
2. Click on **Object Storage** / **App Storage**
3. Create a bucket if you haven't already (e.g., `can-pile-media`)

### Step 2: Organize Your Files
Create the following folder structure in your bucket:

```
/can-pile-media/
  └── Objects/
      ├── gallery/          # General clinic photos and videos
      ├── services/         # Service-specific images (radiology, surgery, etc.)
      ├── team/             # Team member photos
      ├── logos/            # Logo files
      └── hero/             # Hero section background images/videos
```

### Step 3: Upload from Google Drive
1. Download your photos/videos from Google Drive to your computer
2. In App Storage, navigate to the appropriate folder
3. Click **Upload** and select your files
4. **Recommended formats:**
   - Images: JPG, PNG, WebP (WebP recommended for best performance)
   - Videos: MP4, WebM

### Step 4: Set Environment Variables
After creating your bucket, set the environment variable:

1. Go to **Tools** → **Secrets**
2. Add a new secret:
   - Key: `PUBLIC_OBJECT_SEARCH_PATHS`
   - Value: `/can-pile-media/Objects`
   
   (Note: Replit App Storage stores files in an `Objects` folder within your bucket)

## File Naming Convention

Use descriptive, URL-friendly names:
- ✅ Good: `clinic-exterior.jpg`, `dr-ester-sarto.jpg`, `radiology-equipment.jpg`
- ❌ Avoid: `IMG_1234.jpg`, `Photo 2024.jpg`, `image (1).jpg`

## Accessing Files in Your Website

Files will be accessible at:
```
/public-objects/{category}/{filename}
```

Examples:
- `/public-objects/gallery/clinic-exterior.jpg`
- `/public-objects/team/dr-ester-sarto.jpg`
- `/public-objects/services/radiology-equipment.jpg`

## Optimization Tips

1. **Compress images** before uploading (use tools like TinyPNG or Squoosh)
2. **Convert to WebP** for better performance
3. **Resize large images** to appropriate dimensions (max 1920px wide for hero images)
4. **Videos**: Keep under 10MB when possible, use MP4 format with H.264 codec

## Updating Media References

After uploading files to App Storage, update `src/data/mediaLibrary.json` with your actual filenames:

```json
{
  "gallery": [
    {
      "type": "image",
      "category": "gallery",
      "filename": "your-actual-filename.jpg",
      "alt": "Description of the image"
    }
  ]
}
```

## Integrating Media into Your Website

### Option 1: Use the MediaExample Component (Easiest)
In `src/CanPileWireframe.jsx`, import and use the pre-built example:

```jsx
import { MediaExample } from './components/MediaExample';

// In your gallery section, replace the placeholder with:
<MediaExample />
```

### Option 2: Custom Integration
Import individual components and customize:

```jsx
import { MediaImage } from './components/MediaImage';
import { MediaGallery } from './components/MediaGallery';
import mediaLibrary from './data/mediaLibrary.json';

// For a single image:
<MediaImage 
  category="team" 
  filename="dr-ester-sarto.jpg" 
  alt="Dr. Ester Sarto"
  className="w-full h-full rounded-xl"
/>

// For a gallery:
<MediaGallery items={mediaLibrary.gallery} />
```

## Next Steps

Once files are uploaded and mediaLibrary.json is updated:
1. The website will automatically fetch and display your photos/videos
2. Images will lazy-load for better performance
3. Videos will have playback controls
4. The gallery will display in a responsive grid layout
