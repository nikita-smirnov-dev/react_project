import type { FC } from 'react';
import './MenuElement.css';
import { NavLink } from 'react-router-dom';

interface MenuElementProps {
  title: string;
  path: string;
  children?: React.ReactNode;
  end?: boolean;
}

export const MenuElement: FC<MenuElementProps> = ({
  path,
  title,
  children,
  end,
}) => {
  return (
    <NavLink className="menu-item text" to={path} end={end}>
      {children}
      {title}
    </NavLink>
  );
};
