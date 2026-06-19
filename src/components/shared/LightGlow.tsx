'use client';

import { motion } from 'framer-motion';

interface LightGlowProps {
  color?: 'amber' | 'cyan' | 'primary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function LightGlow({ color = 'amber', size = 'md', className = '' }: LightGlowProps) {
  const sizeClasses = {
    sm: 'w-32 h-32',
    md: 'w-64 h-64',
    lg: 'w-96 h-96',
  };

  const colorMap = {
    amber: 'rgba(245, 158, 11, 0.15)',
    cyan: 'rgba(34, 211, 238, 0.12)',
    primary: 'var(--color-primary)',
  };

  return (
    <motion.div
      className={`absolute rounded-full pointer-events-none ${sizeClasses[size]} ${className}`}
      style={{
        background: `radial-gradient(circle, ${colorMap[color]} 0%, transparent 70%)`,
      }}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.6, 1, 0.6],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
}