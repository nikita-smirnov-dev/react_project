import { useEffect, useState } from 'react';

export const BREAKPOINTS = {
  SMALL_MOBILE: 376,
  MOBILE: 576,
  TABLET: 768,
  DESKTOP: 992,
  LARGE_DESKTOP: 1200,
};

export const useMediaQuery = (maxWidth = BREAKPOINTS.MOBILE) => {
  // const [isMobile, setIsMobile] = useState(
  //   window.innerWidth <= BREAKPOINTS.MOBILE
  // );

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth <= BREAKPOINTS.MOBILE);
  //   };
  //   window.addEventListener('resize', handleResize);

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);

  // return isMobile;
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
