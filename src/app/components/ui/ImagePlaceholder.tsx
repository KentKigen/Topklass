import { ImageWithFallback } from "./ImageWithFallback";
import { cn } from "./Button";

interface ImagePlaceholderProps {
  src?: string;
  alt: string;
  className?: string;
  recommendedSize?: string;
}

export function ImagePlaceholder({ src, alt, className, recommendedSize }: ImagePlaceholderProps) {
  return (
    <div className={cn("relative overflow-hidden group bg-brand-black border border-white/10", className)}>
      {src ? (
        <ImageWithFallback src={src} alt={alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
          <span className="text-white/30 font-heading font-black text-2xl tracking-widest mb-2">IMAGE</span>
          {recommendedSize && (
            <span className="text-brand-mustard text-xs font-mono mb-1 bg-brand-mustard/10 px-2 py-1 rounded">Size: {recommendedSize}</span>
          )}
          <span className="text-white/50 text-xs font-mono bg-white/5 px-2 py-1 rounded">Alt: {alt}</span>
        </div>
      )}
    </div>
  );
}
