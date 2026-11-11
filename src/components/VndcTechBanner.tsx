import React from 'react';
import { VndcCubeIcon } from './icons/Icons';

interface VndcTechBannerProps {
  children?: React.ReactNode;
  className?: string;
}

/**
 * Component Nền Hero Công Nghệ Số VNDC (VndcTechBanner)
 * Kết hợp Deep Navy, Cyber Data Glow, lưới vi mạch và khối lập phương 3D xoay nghệ thuật
 */
export default function VndcTechBanner({ children, className = '' }: VndcTechBannerProps) {
  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br from-[#09223e] via-[#0d3862] to-[#164676] ${className}`}
    >
      {/* 1. Lưới Cyber Matrix & Họa tiết vi mạch số công nghệ cao */}
      <div
        className="absolute inset-0 opacity-[0.14] pointer-events-none z-[1]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25px 25px, rgba(51, 163, 220, 0.4) 1.5px, transparent 0),
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px, 80px 80px, 80px 80px',
        }}
        aria-hidden="true"
      />

      {/* 2. Dải quầng sáng Neon Glow (Cyan & Ocean Blue Orbs) */}
      <div
        className="absolute -top-32 -left-20 w-[420px] h-[420px] bg-[#0087ca]/30 rounded-full blur-[100px] pointer-events-none z-[1]"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-0 w-[450px] h-[450px] bg-[#33a3dc]/20 rounded-full blur-[120px] pointer-events-none z-[1]"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[350px] h-[350px] bg-[#ff6900]/10 rounded-full blur-[130px] pointer-events-none z-[1]"
        aria-hidden="true"
      />

      {/* 3. Dải sóng uốn lượn dữ liệu công nghệ (Data Streams / Path Waves) */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-25 z-[1]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 1000"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M-50,200 C200,350 150,650 500,750 C750,820 850,600 950,850"
          fill="none"
          stroke="url(#dataStreamGrad1)"
          strokeWidth="2"
          strokeDasharray="6 6"
        />
        <path
          d="M-50,320 C250,450 300,550 550,880 C680,1050 780,720 950,920"
          fill="none"
          stroke="url(#dataStreamGrad2)"
          strokeWidth="1.5"
        />
        <defs>
          <linearGradient id="dataStreamGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#33a3dc" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#0087ca" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#ff6900" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="dataStreamGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0087ca" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#33a3dc" stopOpacity="0.8" />
          </linearGradient>
        </defs>
      </svg>

      {/* 4. Khối 3D Origami VNDC xoay chậm nghệ thuật ở góc dưới */}
      <div
        className="absolute -right-24 -bottom-20 w-[520px] h-[520px] opacity-[0.08] pointer-events-none z-[2] animate-slow-spin text-white"
        aria-hidden="true"
      >
        <VndcCubeIcon size={520} />
      </div>

      {/* 5. Nội dung chính hiển thị bên trên */}
      <div className="relative z-10 w-full h-full flex flex-col justify-center">
        {children}
      </div>
    </div>
  );
}

