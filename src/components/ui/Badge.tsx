import React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'success' | 'warning' | 'info' | 'danger' | 'neutral';
  children: React.ReactNode;
  className?: string;
}

export function Badge({
  variant = 'neutral',
  children,
  className = '',
  ...props
}: BadgeProps) {
  const variantStyles = {
    success: 'bg-[#e6f8ec] text-[#008a3d] border border-[#b8dec4]',
    warning: 'bg-[#fff3eb] text-[#ff6900] border border-[#ffd8bf]',
    info: 'bg-[#e2f1fb] text-[#0087ca] border border-[#b6dffc]',
    danger: 'bg-[#fff0f2] text-[#e11d48] border border-[#ffd0d4]',
    neutral: 'bg-white/10 text-white border border-white/20',
  }[variant];

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-bold ${variantStyles} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
