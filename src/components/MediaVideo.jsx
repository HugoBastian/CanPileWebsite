import { useState } from 'react';

/**
 * Media Video Component
 * Displays a video from App Storage with controls
 */
export function MediaVideo({ category, filename, className = "", autoplay = false, muted = true, loop = false }) {
  const [hasError, setHasError] = useState(false);

  const videoUrl = `/public-objects/${category}/${filename}`;

  if (hasError) {
    return (
      <div className={`bg-neutral-200 grid place-items-center ${className}`}>
        <span className="text-xs text-neutral-500">Video not available</span>
      </div>
    );
  }

  return (
    <video
      src={videoUrl}
      className={`w-full h-full object-cover ${className}`}
      controls={!autoplay}
      autoPlay={autoplay}
      muted={muted}
      loop={loop}
      playsInline
      onError={() => setHasError(true)}
    />
  );
}

export default MediaVideo;
