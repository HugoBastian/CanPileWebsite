import { useState } from 'react';

/**
 * Media Image Component
 * Displays an image from App Storage with lazy loading and error handling
 */
export function MediaImage({ category, filename, alt, className = "" }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const imageUrl = `/public-objects/${category}/${filename}`;

  if (hasError) {
    return (
      <div className={`bg-neutral-200 grid place-items-center ${className}`}>
        <span className="text-xs text-neutral-500">Image not available</span>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-neutral-200 animate-pulse" />
      )}
      <img
        src={imageUrl}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
      />
    </div>
  );
}

export default MediaImage;
