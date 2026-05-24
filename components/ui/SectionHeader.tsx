'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  label?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeader({
  label,
  title,
  highlight,
  description,
  align = 'center',
  className,
}: SectionHeaderProps) {
  const titleParts = highlight ? title.split(highlight) : [title];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn(
        'mb-12 lg:mb-16',
        align === 'center' ? 'text-center' : 'text-left',
        className
      )}
    >
      {label && (
        <span className="section-label mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
          {label}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 leading-tight font-display">
        {highlight ? (
          <>
            {titleParts[0]}
            <span className="gradient-text">{highlight}</span>
            {titleParts[1]}
          </>
        ) : (
          title
        )}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-4 text-lg text-gray-600 leading-relaxed',
            align === 'center' ? 'max-w-2xl mx-auto' : 'max-w-2xl'
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
