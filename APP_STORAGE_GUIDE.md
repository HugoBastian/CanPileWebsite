# App Storage Guide - Clínica Veterinària Can Pilé

## ✅ Current Status
Your App Storage is now fully configured and working! You can add images and videos to your website simply by uploading them to App Storage.

## 📁 Available Storage Folders

Your App Storage bucket (`replit-objstore-42bf5c07-636d-4dec-99f1-fa4165ee1d4b`) has the following structure:

```
├── logos/           ✅ 4 files available
│   ├── Logo-blanc.webp
│   ├── Logo-CanPile-Nombre.webp
│   ├── Logo-CanPile.webp
│   └── Logo-CanPilee-Transparent.webp
├── gallery/         📁 Ready for your clinic photos
├── services/        📁 Ready for service images
├── team/            📁 Ready for team photos
├── hero/            📁 Ready for hero/banner images
└── videos/          📁 Ready for video content
```

## 🚀 How to Add Images and Videos

### Step 1: Access App Storage
1. Open **Tools** panel in Replit (left sidebar)
2. Click on **Object Storage** or **App Storage**
3. You'll see your bucket: `replit-objstore-42bf5c07-636d-4dec-99f1-fa4165ee1d4b`

### Step 2: Upload Files
1. Navigate to the appropriate folder (e.g., `gallery/` for general photos)
2. Click **Upload** button
3. Select your files from your computer
4. Files are immediately available on your website!

### Step 3: Use in Your Website

#### For Images:
```jsx
import { MediaImage } from './components/MediaImage';

<MediaImage 
  category="gallery"          // Folder name
  filename="clinic-photo.jpg"  // Your file name
  alt="Description"           // Alt text for accessibility
  className="w-full h-64 object-cover rounded-lg"
/>
```

#### For Videos:
```jsx
import { MediaVideo } from './components/MediaVideo';

<MediaVideo
  category="videos"
  filename="clinic-tour.mp4"
  className="w-full rounded-lg"
/>
```

## 📸 Supported File Formats

### Images:
- **Recommended:** WebP (best performance)
- **Also supported:** JPG, PNG, GIF
- **Max recommended size:** 2MB per image

### Videos:
- **Recommended:** MP4 (H.264 codec)
- **Also supported:** WebM
- **Max recommended size:** 10MB per video

## 💡 Best Practices

### File Naming:
- Use descriptive names: `dr-ester-sarto.jpg` instead of `IMG_1234.jpg`
- Avoid spaces, use hyphens: `clinic-exterior.jpg` not `clinic exterior.jpg`
- Keep names lowercase: `surgery-room.jpg` not `Surgery-Room.JPG`

### Image Optimization:
1. **Before uploading**, compress images using:
   - [TinyPNG](https://tinypng.com/) for PNG/JPG
   - [Squoosh](https://squoosh.app/) for WebP conversion
2. Resize large images (max 1920px width for most uses)
3. Use WebP format when possible (30-50% smaller than JPG)

### Organization:
- `logos/` - Brand logos and icons
- `gallery/` - General clinic photos, facilities
- `services/` - Service-specific images (X-ray, surgery, lab)
- `team/` - Staff photos and team images
- `hero/` - Large banner/hero section images
- `videos/` - Video content

## 🔧 Technical Details

### Environment Configuration:
- **PUBLIC_OBJECT_SEARCH_PATHS:** Points to your bucket
- **Bucket ID:** `replit-objstore-42bf5c07-636d-4dec-99f1-fa4165ee1d4b`
- **Access:** Files are served through `/public-objects/{category}/{filename}`

### Components Available:
1. **MediaImage** - For displaying images with lazy loading
2. **MediaVideo** - For video playback with controls
3. **MediaGallery** - For creating image galleries
4. **MediaDemo** - Demo component showing all features

## 📝 Examples

### Example 1: Add Team Member Photo
1. Upload `dr-maria.jpg` to `team/` folder in App Storage
2. Use in your code:
```jsx
<MediaImage 
  category="team" 
  filename="dr-maria.jpg" 
  alt="Dra. Maria Garcia"
  className="w-32 h-32 rounded-full object-cover"
/>
```

### Example 2: Create Service Gallery
1. Upload service photos to `services/` folder
2. Create a gallery:
```jsx
const serviceImages = [
  { file: 'radiology-room.jpg', title: 'Radiologia' },
  { file: 'surgery-equipment.jpg', title: 'Cirurgia' },
  { file: 'lab-analysis.jpg', title: 'Laboratori' }
];

<div className="grid grid-cols-3 gap-4">
  {serviceImages.map(img => (
    <div key={img.file}>
      <MediaImage
        category="services"
        filename={img.file}
        alt={img.title}
        className="w-full h-48 object-cover rounded"
      />
      <p className="text-center mt-2">{img.title}</p>
    </div>
  ))}
</div>
```

### Example 3: Hero Video Background
1. Upload video to `videos/` folder
2. Use as background:
```jsx
<div className="relative h-96">
  <MediaVideo
    category="videos"
    filename="clinic-intro.mp4"
    className="absolute inset-0 w-full h-full object-cover"
    autoPlay
    loop
    muted
  />
  <div className="relative z-10 p-8">
    <h1>Welcome to Can Pilé</h1>
  </div>
</div>
```

## ❓ Troubleshooting

### Images not showing?
1. Check file is uploaded to correct folder
2. Verify filename matches exactly (case-sensitive)
3. Check browser console for errors

### Slow loading?
1. Compress images before uploading
2. Use WebP format instead of JPG/PNG
3. Consider using smaller images for thumbnails

### Need help?
- Check the MediaDemo component at `/src/components/MediaDemo.jsx`
- Review working examples in the codebase
- All media components are in `/src/components/`

## 🎉 Ready to Use!

Your App Storage is configured and ready. Just upload your files and they'll automatically be available on your website. The logo is already working as you can see in the header!

To see a demo of all features, you can import and use the MediaDemo component:
```jsx
import { MediaDemo } from './components/MediaDemo';

// Add to any page:
<MediaDemo />
```