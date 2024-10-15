import React from 'react';
import { Button } from '@/components/ui/button';
import { LucideIcon } from 'lucide-react';

interface ActionButtonProps {
  action: () => Promise<void>;
  label: string;
  icon?: LucideIcon;
  variant?:
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link';
  color?: string;
}

export const ActionButton: React.FC<ActionButtonProps> = ({
  action,
  label,
  icon: Icon,
  variant = 'default',
  color = 'bg-blue-500 hover:bg-blue-600',
}) => {
  return (
    <Button
      onClick={action}
      variant={variant}
      className={`w-full ${color} text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-200`}
    >
      {Icon && <Icon className='w-5 h-5 mr-2' />}
      {label}
    </Button>
  );
};
