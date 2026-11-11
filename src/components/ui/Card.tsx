import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = '', ...props }: CardProps) {
  return (
    <div
      className={`bg-white rounded-2xl border border-[#d4e6f4] p-6 shadow-sm ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export interface KpiCardProps {
  title: string;
  value: string | number;
  unit?: string;
  subtitle: React.ReactNode;
  icon: React.ReactNode;
  accentColor?: string;
  isAlert?: boolean;
}

export function KpiCard({
  title,
  value,
  unit,
  subtitle,
  icon,
  accentColor = '#0087ca',
  isAlert = false,
}: KpiCardProps) {
  return (
    <div className="bg-white rounded-2xl p-5 border border-[#d4e6f4] shadow-sm flex flex-col gap-3 relative overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-gradient-to-r before:from-[#0087ca] before:to-[#33a3dc]">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#5a738e]">{title}</span>
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center text-xl shrink-0"
          style={{
            backgroundColor: isAlert ? '#fff0f2' : '#f0f7fc',
            color: accentColor,
          }}
        >
          {icon}
        </div>
      </div>
      <div className="text-3xl font-extrabold text-[#0d3862]" style={isAlert ? { color: accentColor } : {}}>
        {value} {unit && <span className="text-base font-medium text-[#5a738e]">{unit}</span>}
      </div>
      <div className="text-xs text-[#5a738e]">{subtitle}</div>
    </div>
  );
}
