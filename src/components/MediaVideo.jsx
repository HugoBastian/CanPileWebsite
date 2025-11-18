import { useState } from 'react';

/**
 * Media Video Component
 * Displays a video from static assets with controls
 */
export function MediaVideo({ category, filename, className = "", mediaClassName = "w-full h-full object-cover", autoplay = false, muted = true, loop = false }) {
  const [hasError, setHasError] = useState(false);

  const videoUrl = `/assets/${category}/${filename}`;

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
      className={`${mediaClassName} ${className}`}
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
