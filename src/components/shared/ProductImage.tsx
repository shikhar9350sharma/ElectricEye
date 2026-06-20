'use client';

import Image from 'next/image';
import { Lightbulb } from 'lucide-react';
import { useState } from 'react';

interface ProductImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  fill?: boolean;
}

export default function ProductImage({ src, alt, className = '', priority = false, fill = false }: ProductImageProps) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className={`flex items-center justify-center bg-muted ${className}`}>
        <Lightbulb className="h-16 w-16 text-muted-foreground/50" />
      </div>
    );
  }

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className={`object-cover ${className}`}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        onError={() => setError(true)}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={400}
      height={400}
      priority={priority}
      className={`object-cover ${className}`}
      onError={() => setError(true)}
    />
  );
}