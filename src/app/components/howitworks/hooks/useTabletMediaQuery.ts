import { useState, useEffect } from 'react';

export const useTabletMediaQuery = () => {
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px) and (max-width: 991px)');
    setIsTablet(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setIsTablet(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return isTablet;
};