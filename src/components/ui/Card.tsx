import React, { HTMLAttributes } from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverable = false,
  id,
  ...props
}) => {
  const baseClasses = 'bg-white border border-midGray rounded-lg shadow-card p-6 overflow-hidden';
  const hoverClasses = hoverable ? 'transition-all duration-300 hover:shadow-elevated hover:-translate-y-0.5' : '';

  return (
    <div
      id={id || `card_${Math.random().toString(36).substring(2, 9)}`}
      className={`${baseClasses} ${hoverClasses} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
