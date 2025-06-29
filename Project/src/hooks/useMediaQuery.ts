import { useEffect, useState } from 'react';

export const BREAKPOINTS = {
  SMALL_MOBILE: 376,
  MOBILE: 576,
  TABLET: 768,
  DESKTOP: 992,
  LARGE_DESKTOP: 1200,
};

export const useMediaQuery = (maxWidth = BREAKPOINTS.MOBILE) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${maxWidth}px)`);
    setMatches(mediaQuery.matches);

    const handleMediaQuery = (e: MediaQueryListEvent) => {
      setMatches(e.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQuery);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQuery);
    };
  }, [maxWidth]);

  return matches;
};
