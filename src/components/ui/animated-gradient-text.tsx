import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedGradientTextProps {
  children: ReactNode;
  className?: string;
}

export default function AnimatedGradientText({
  children,
  className,
}: AnimatedGradientTextProps) {
  return (
    <span
      className={cn(
        "bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 bg-clip-text text-transparent animate-gradient-x bg-300%",
        className
      )}
    >
      {children}
    </span>
  );
}