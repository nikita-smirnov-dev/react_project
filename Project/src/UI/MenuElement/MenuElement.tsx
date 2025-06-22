import type { FC } from 'react';
import { NavLink } from 'react-router-dom';

import './MenuElement.css';

interface MenuElementProps {
  title?: string;
  path: string;
  children?: React.ReactNode;
  end?: boolean;
  className?: string;
}

export const MenuElement: FC<MenuElementProps> = ({
  path,
  title,
  children,
  end,
  className,
}) => {
  return (
    <NavLink
      className={`menu-item text ${className || ''}`}
      to={path}
      end={end}
    >
      {children}
      {title}
    </NavLink>
  );
};
