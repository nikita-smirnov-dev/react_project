import { type FC } from 'react';
import './DataLoader.css';

export const DataLoader: FC = () => {
  return (
    <div className="data-loader-wrapper">
      <div className="loader small"></div>
      <p>Загрузка данных...</p>
    </div>
  );
};
