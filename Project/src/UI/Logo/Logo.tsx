import type { FC } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo/logo.svg';
import logoDark from '../../assets/images/logo/logo-dark.svg';

import './Logo.css';

interface LogoProps {
  className?: string;
  color: string;
  isLink?: boolean;
}

export const Logo: FC<LogoProps> = ({ className, color, isLink = true }) => {
  return (
    <>
      {isLink ? (
        <Link className={`logo ${className || ''}`} to="/">
          <img
            src={color === 'white' ? logo : logoDark}
            alt="Логотип VK Маруся"
          />
        </Link>
      ) : (
        <div className={`logo ${className || ''}`}>
          <img
            src={color === 'white' ? logo : logoDark}
            alt="Логотип VK Маруся"
          />
        </div>
      )}
    </>
  );
};
