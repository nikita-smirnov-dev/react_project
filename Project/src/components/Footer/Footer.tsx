import type { FC } from 'react';
import { useLocation } from 'react-router-dom';

import { SocialIcons } from '../SocialIcons';
import { BREAKPOINTS, useMediaQuery } from '../../hooks/useMediaQuery';

import './Footer.css';

export const Footer: FC = () => {
  const isMobile = useMediaQuery(BREAKPOINTS.MOBILE);
  const location = useLocation();
  const isAccountPage =
    location.pathname === '/account' || location.pathname === '/account/';

  return (
    <>
      {isMobile ? (
        <footer>
          <div className="container footer__container">
            <SocialIcons />
          </div>
        </footer>
      ) : (
        <footer className={`${isAccountPage ? 'footer' : ''}`}>
          <div className="container footer__container">
            <SocialIcons />
          </div>
        </footer>
      )}
    </>
  );
};
