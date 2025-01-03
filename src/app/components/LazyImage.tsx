"use client";

import { useState, useEffect, useRef } from 'react';
import { cn } from '@/app/utils/cn';

type LazyImageProps = {
  src: string;
  alt: string;
  className?: string;
  loadingClassName?: string;
};

export const LazyImage = ({ 
  src, 
  alt, 
  className = '', 
  loadingClassName = 'animate-pulse bg-muted' 
}: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!imgRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '50px' }
    );

    observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative">
      <div
        className={cn(
          'absolute inset-0 transition-opacity duration-300',
          loadingClassName,
          isLoaded ? 'opacity-0' : 'opacity-100'
        )}
      />
      <img
        ref={imgRef}
        src={isInView ? src : undefined}
        alt={alt}
        className={cn(className, 'transition-opacity duration-300', 
          isLoaded ? 'opacity-100' : 'opacity-0'
        )}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};