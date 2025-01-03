import { Star } from 'lucide-react';

type StarRatingProps = {
  rating: number;
  maxRating?: number;
  className?: string;
};

export const StarRating = ({ rating, maxRating = 5, className = '' }: StarRatingProps) => {
  return (
    <div className={`flex ${className}`}>
      {Array.from({ length: maxRating }).map((_, index) => (
        <Star 
          key={index} 
          className={`mr-1 size-6 ${
            index < rating 
              ? 'fill-primary text-primary' 
              : 'fill-muted text-muted'
          }`}
        />
      ))}
    </div>
  );
};