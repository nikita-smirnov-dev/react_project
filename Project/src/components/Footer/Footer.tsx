import type { FC } from 'react';
import { useLocation } from 'react-router-dom';

import { SocialIcons } from '../SocialIcons';

import './Footer.css';

export const Footer: FC = () => {
  const location = useLocation();
  const isAccountPage =
    location.pathname === '/account' || location.pathname === '/account/';

  return (
    <footer className={`${isAccountPage ? 'footer' : ''}`}>
      <div className="container footer__container">
        <SocialIcons />
      </div>
    </footer>
  );
};
