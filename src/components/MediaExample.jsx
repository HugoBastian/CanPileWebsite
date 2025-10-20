import { MediaGallery } from './MediaGallery';
import mediaLibrary from '../data/mediaLibrary.json';

/**
 * Example usage of MediaGallery component with data from mediaLibrary.json
 * 
 * To use this in your wireframe:
 * 1. Import this component: import { MediaExample } from './components/MediaExample'
 * 2. Replace the gallery placeholders with: <MediaExample />
 */
export function MediaExample() {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">Galeria</h2>
      <p className="text-neutral-600 mb-8">
        Imatges i vídeos destacats de la clínica i els pacients.
      </p>
      <MediaGallery items={mediaLibrary.gallery} />
    </div>
  );
}

export default MediaExample;
