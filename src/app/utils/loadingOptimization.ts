// Utility functions for optimizing loading performance
import { preloadImage } from './image';

// Preload critical images
export const preloadCriticalImages = async () => {
  const criticalImages = [
    // Hero section image
    "https://cdn.prod.website-files.com/5db1c0d5ca3871e8fd1a7b66/5f63b11306f1836426846360_0*6_IW_DdVcs4J1dmx.png",
    // Logo images (first visible row)
    "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/google.svg",
    "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/microsoft.svg",
    "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/amazon.svg",
    "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/meta.svg"
  ];

  return Promise.all(criticalImages.map(preloadImage));
};

// Intersection Observer options for lazy loading
export const lazyLoadOptions = {
  root: null,
  rootMargin: '50px',
  threshold: 0.1
};