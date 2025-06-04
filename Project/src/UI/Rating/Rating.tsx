import { RiStarFill } from 'react-icons/ri';
import { type FC } from 'react';

import './Rating.css';

interface RatingProps {
  value: number;
  decimals?: number;
  className?: string;
}

export const Rating: FC<RatingProps> = ({
  value,
  className = '',
  decimals = 1,
}) => {
  const getRatingColorClass = (rating: number) => {
    if (rating >= 8 && rating <= 10) return 'rating-excellent';
    if (rating >= 6 && rating < 8) return 'rating-good';
    if (rating >= 4 && rating < 6) return 'rating-average';
    if (rating >= 0 && rating < 4) return 'rating-poor';
  };

  const displayValue = value.toFixed(decimals).replace('.', ',');

  return (
    <div className={`rating ${getRatingColorClass(value)} ${className}`}>
      <RiStarFill className="rating__svg" />
      {displayValue}
    </div>
  );
};
