import React, { forwardRef } from 'react';

export interface InputAffixProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  requiredMark?: boolean;
  prefixIcon?: React.ReactNode;
  suffixAction?: React.ReactNode;
  error?: string;
}

export const InputAffix = forwardRef<HTMLInputElement, InputAffixProps>(function InputAffix(
  {
    label,
    requiredMark = false,
    prefixIcon,
    suffixAction,
    error,
    id,
    className = '',
    ...props
  },
  ref
) {
  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={id}
          className={`block text-[13px] font-semibold text-[#0d3862] mb-1.5 ${
            requiredMark ? "after:content-['*'] after:ml-1 after:text-[#e11d48]" : ''
          }`}
        >
          {label}
        </label>
      )}
      <div
        className={`flex items-center bg-[#f8fafc] border rounded-xl h-12 px-3.5 transition-all ${
          error
            ? 'border-[#e11d48] focus-within:ring-2 focus-within:ring-[#e11d48]/20'
            : 'border-[#d4e6f4] hover:border-[#8ed1fc] focus-within:bg-white focus-within:border-[#0087ca] focus-within:ring-2 focus-within:ring-[#0087ca]/20'
        } ${className}`}
      >
        {prefixIcon && <span className="text-[#5a738e] shrink-0 mr-2.5" aria-hidden="true">{prefixIcon}</span>}
        <input
          ref={ref}
          id={id}
          className="w-full bg-transparent border-0 outline-none text-sm text-[#0d3862] placeholder:text-[#94a3b8]"
          {...props}
        />
        {suffixAction}
      </div>
      {error && <p className="text-xs text-[#e11d48] mt-1.5">{error}</p>}
    </div>
  );
});
