import type { FC } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo/logo.svg';

import './Logo.css';

export const Logo: FC = () => {
  return (
    <>
      <Link className="logo" to="/">
        <img src={logo} alt="Логотип VK Маруся" />
      </Link>
    </>
  );
};
