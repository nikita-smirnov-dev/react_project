import type { FC } from 'react';
import logo from '../../assets/images/logo/logo.svg';

import './Logo.css';

export const Logo: FC = () => {
  return (
    <div className="logo">
      <img src={logo} alt="Logo" />
    </div>
  );
};
