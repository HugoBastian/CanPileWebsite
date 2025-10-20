import { MediaImage } from './MediaImage';
import { MediaVideo } from './MediaVideo';

/**
 * Media Gallery Component
 * Displays a grid of media items from App Storage
 */
export function MediaGallery({ items = [] }) {
  if (items.length === 0) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="aspect-square rounded-2xl border-2 border-dashed border-neutral-300 grid place-items-center"
          >
            <span className="text-xs text-neutral-500">Upload media to see here</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {items.map((item, index) => (
        <div key={index} className="aspect-square rounded-2xl overflow-hidden">
          {item.type === 'image' ? (
            <MediaImage
              category={item.category}
              filename={item.filename}
              alt={item.alt || `Gallery image ${index + 1}`}
              className="w-full h-full"
            />
          ) : (
            <MediaVideo
              category={item.category}
              filename={item.filename}
              className="w-full h-full"
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default MediaGallery;
