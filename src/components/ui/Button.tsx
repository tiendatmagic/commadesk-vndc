import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'tab';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  loadingText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isActive?: boolean;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  loadingText,
  leftIcon,
  rightIcon,
  isActive = false,
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-bold whitespace-nowrap shrink-0 transition-all cursor-pointer rounded-xl select-none disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none';

  const sizeStyles = {
    sm: 'text-xs px-3 py-1.5 h-8 gap-1.5',
    md: 'text-sm px-4 py-2.5 h-11 gap-2',
    lg: 'text-[15px] px-5 py-3 h-[50px] gap-2 tracking-wide',
  }[size];

  const variantStyles = {
    primary:
      'bg-gradient-to-r from-[#0087ca] via-[#0b5c9e] to-[#0d3862] hover:from-[#0d94d5] hover:via-[#0087ca] hover:to-[#164676] text-white hover:-translate-y-0.5 shadow-[0_4px_18px_rgba(0,135,202,0.32)] hover:shadow-[0_6px_24px_rgba(0,135,202,0.45)]',
    secondary:
      'bg-white border border-[#d4e6f4] text-[#0d3862] hover:bg-[#f0f7fc] hover:border-[#0087ca] hover:text-[#0087ca]',
    danger:
      'bg-[#ff6900]/15 border border-[#ff6900]/40 text-[#ff6900] hover:bg-[#ff6900] hover:text-white',
    tab: isActive
      ? 'bg-[#0087ca] text-white border border-[#0087ca] shadow-sm'
      : 'bg-white text-[#0d3862] border border-[#d4e6f4] hover:bg-[#f0f7fc]',
  }[variant];

  return (
    <button
      className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <>
          <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin shrink-0" aria-hidden="true" />
          <span>{loadingText || 'Đang xử lý...'}</span>
        </>
      ) : (
        <>
          {leftIcon}
          {children}
          {rightIcon}
        </>
      )}
    </button>
  );
}
