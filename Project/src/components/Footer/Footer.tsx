import type { FC } from 'react';
import { SocialIcons } from '../SocialIcons';
import './Footer.css';

export const Footer: FC = () => {
  return (
    <footer>
      <div className="footer__container">
        <SocialIcons />
      </div>
    </footer>
  );
};
