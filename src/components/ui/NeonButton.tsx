
import React from 'react';
import { cn } from '@/lib/utils';

interface NeonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'blue' | 'purple' | 'pink' | 'green' | 'cyan';
  size?: 'sm' | 'md' | 'lg';
  outline?: boolean;
}

const NeonButton = ({
  children,
  className,
  variant = 'blue',
  size = 'md',
  outline = false,
  ...props
}: NeonButtonProps) => {
  // Size classes
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-2.5 text-lg'
  };

  // Base and variant classes
  const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-opacity-50';

  const getVariantClasses = () => {
    if (outline) {
      return {
        blue: 'border border-neon-blue text-neon-blue hover:bg-neon-blue/10 focus:ring-neon-blue/50',
        purple: 'border border-neon-purple text-neon-purple hover:bg-neon-purple/10 focus:ring-neon-purple/50',
        pink: 'border border-neon-pink text-neon-pink hover:bg-neon-pink/10 focus:ring-neon-pink/50',
        green: 'border border-neon-green text-neon-green hover:bg-neon-green/10 focus:ring-neon-green/50',
        cyan: 'border border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 focus:ring-neon-cyan/50'
      }[variant];
    }

    return {
      blue: 'bg-neon-blue/10 text-neon-blue hover:bg-neon-blue/20 focus:ring-neon-blue/50',
      purple: 'bg-neon-purple/10 text-neon-purple hover:bg-neon-purple/20 focus:ring-neon-purple/50',
      pink: 'bg-neon-pink/10 text-neon-pink hover:bg-neon-pink/20 focus:ring-neon-pink/50',
      green: 'bg-neon-green/10 text-neon-green hover:bg-neon-green/20 focus:ring-neon-green/50',
      cyan: 'bg-neon-cyan/10 text-neon-cyan hover:bg-neon-cyan/20 focus:ring-neon-cyan/50'
    }[variant];
  };

  const shadowClass = `shadow-${variant}`;

  return (
    <button
      className={cn(
        baseClasses,
        sizeClasses[size],
        getVariantClasses(),
        'neon-glow',
        `neon-${variant}`,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default NeonButton;
