
import React from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  neonBorder?: 'blue' | 'purple' | 'pink' | 'green' | 'cyan';
  hoverEffect?: boolean;
}

const GlassCard = ({ 
  children, 
  className, 
  neonBorder, 
  hoverEffect = true,
  ...props 
}: GlassCardProps) => {
  let neonBorderClass = '';
  
  if (neonBorder) {
    neonBorderClass = `neon-border neon-border-${neonBorder}`;
  }
  
  return (
    <div 
      className={cn(
        'glass-card p-6',
        hoverEffect && 'hover:shadow-lg hover:translate-y-[-2px]',
        neonBorderClass,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default GlassCard;
