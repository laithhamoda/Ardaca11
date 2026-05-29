import React, { HTMLAttributes } from 'react';

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  bg?: 'light' | 'dark' | 'navy' | 'transparent';
}

export const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  bg = 'transparent',
  id,
  ...props
}) => {
  const bgClasses = {
    light: 'bg-lightGray text-darkGray',
    dark: 'bg-darkGray text-[#F7F9FC]',
    navy: 'bg-[#0B1F3A] text-[#F7F9FC]',
    transparent: 'bg-transparent',
  };

  return (
    <section
      id={id || `section_${Math.random().toString(36).substring(2, 9)}`}
      className={`py-12 md:py-16 ${bgClasses[bg]} ${className}`}
      {...props}
    >
      {children}
    </section>
  );
};

export default Section;
