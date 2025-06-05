import { type FC } from 'react';
import './PageLoader.css';

export const PageLoader: FC = () => {
  return (
    <div className="loader-wrapper">
      <div className="loader"></div>;
    </div>
  );
};
