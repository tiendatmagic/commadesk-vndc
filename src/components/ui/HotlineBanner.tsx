import React from 'react';
import { PhoneIcon } from '@/components/icons/Icons';

export interface PhoneItem {
  number: string;
  tel: string;
  label?: string;
}

export interface HotlineBannerProps {
  label?: string;
  phones?: PhoneItem[];
  className?: string;
}

const DEFAULT_PHONES: PhoneItem[] = [
  { number: '0888 99 8181', tel: '0888998181' },
  { number: '0901 318 369', tel: '0901318369' },
];

export function HotlineBanner({
  label = 'Hỗ Trợ Kỹ Thuật & Cấp Quyền 24/7',
  phones = DEFAULT_PHONES,
  className = '',
}: HotlineBannerProps) {
  return (
    <div
      className={`flex items-center gap-3.5 bg-[#f0f7fc] border border-[#d4e6f4] rounded-xl p-3 px-4 transition-all duration-300 hover:border-[#0087ca]/50 hover:bg-[#ebf4fa] hover:shadow-xs ${className}`}
    >
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0087ca] to-[#0d3862] text-white flex items-center justify-center text-lg shrink-0 shadow-md">
        <PhoneIcon size={18} />
      </div>
      <div className="flex-1 min-w-0">
        <span className="block text-[11px] font-bold text-[#5a738e] tracking-wider uppercase mb-0.5">
          {label}
        </span>
        <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
          {phones.map((phone, idx) => (
            <React.Fragment key={phone.tel}>
              {idx > 0 && <span className="text-xs font-semibold text-[#8ea5bc]">/</span>}
              <a
                href={`tel:${phone.tel}`}
                className="text-[15px] sm:text-[16px] font-extrabold text-[#0d3862] hover:text-[#0087ca] transition-colors no-underline tracking-tight whitespace-nowrap hover:underline"
                title={`Gọi trực ban: ${phone.number}`}
              >
                {phone.number}
              </a>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
