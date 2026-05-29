import React, { HTMLAttributes } from 'react';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'success' | 'alert';
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  className = '',
  variant = 'primary',
  id,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center font-mono font-bold text-[10px] uppercase tracking-widest px-2.5 py-0.5 rounded-sm border';

  const variantClasses = {
    primary: 'bg-[#0B1F3A]/10 text-navy border-[#0B1F3A]/20',
    secondary: 'bg-gold/10 text-gold border-gold/25',
    outline: 'bg-transparent text-slate border-midGray',
    success: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
    alert: 'bg-amber-500/10 text-amber-500 border-amber-500/20',
  };

  return (
    <span
      id={id || `badge_${Math.random().toString(36).substring(2, 9)}`}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;
