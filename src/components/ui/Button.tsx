import React, { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className = '',
  variant = 'primary',
  size = 'md',
  id,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-sans font-semibold uppercase tracking-wider transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:pointer-events-none rounded-md cursor-pointer';
  
  const variantClasses = {
    primary: 'bg-navy hover:bg-[#162E4E] text-white shadow-card border border-[#162E4E]',
    secondary: 'bg-gold hover:bg-[#E0BA67] text-[#0B1F3A] shadow-card border border-gold',
    outline: 'border border-gold text-gold hover:bg-gold/15',
    ghost: 'text-slate hover:bg-lightGray',
  };

  const sizeClasses = {
    sm: 'text-[10px] px-3 py-1.5',
    md: 'text-xs px-5 py-2.5',
    lg: 'text-sm px-6 py-3',
  };

  return (
    <button
      id={id || `btn_${Math.random().toString(36).substring(2, 9)}`}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
