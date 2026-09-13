import React from 'react';
import * as LucideIcons from 'lucide-react';

export type IconName = keyof typeof LucideIcons;

interface IconProps {
  name: IconName;
  className?: string;
}

export const Icon = ({ name, className = 'w-5 h-5' }: IconProps) => {
  const IconComponent = LucideIcons[name] as React.ComponentType<{ className?: string }>;

  if (!IconComponent) return null;

  return <IconComponent className={className} />;
};