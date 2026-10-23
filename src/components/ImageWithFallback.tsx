import { useState, ImgHTMLAttributes } from 'react';
import { Image as ImageIcon } from 'lucide-react';

interface ImageWithFallbackProps extends ImgHTMLAttributes<HTMLImageElement> {
  fallbackTitle?: string;
}

export function ImageWithFallback({
  src,
  alt,
  className = '',
  fallbackTitle,
  ...props
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  if (hasError || !src) {
    return (
      <div
        className={`bg-zinc-100 flex flex-col items-center justify-center text-zinc-400 p-6 select-none ${className}`}
        role="img"
        aria-label={alt || fallbackTitle || 'Brak miniatury'}
      >
        <div className="w-12 h-12 rounded-full bg-zinc-200/80 flex items-center justify-center text-zinc-500 mb-3">
          <ImageIcon className="w-6 h-6" />
        </div>
        <span className="text-xs font-medium text-zinc-600 text-center max-w-[200px] truncate">
          {fallbackTitle || alt || 'Projekt graficzny'}
        </span>
        <span className="text-[11px] text-zinc-400 mt-1">Podgląd wkrótce</span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-zinc-100 animate-pulse" />
      )}
      <img
        src={src}
        alt={alt || ''}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        loading="lazy"
        referrerPolicy="no-referrer"
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setHasError(true);
        }}
        {...props}
      />
    </div>
  );
}
