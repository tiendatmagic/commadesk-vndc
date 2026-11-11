import React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

/**
 * Biểu tượng Khối Lập Phương 3D Đa Diện Origami của VNDC
 * (Được trích xuất trực tiếp từ vector SVG chính thức https://vndc.vn)
 */
export function VndcCubeIcon({ size = 32, className = '', ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="28 10 98 108"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Cánh đa giác mở rộng bên trái */}
      <polygon
        points="31.99,35.75 72.64,14.05 72.78,14.14 72.84,35.05 50.61,46.92 50.59,72.13 32.11,81.91 31.97,81.82 31.99,35.75"
        fill="#0d3862"
      />
      {/* Cánh đa giác mở rộng bên phải */}
      <polygon
        points="121.99,35.75 81.34,14.05 81.2,14.14 81.14,35.05 103.37,46.92 103.39,72.13 121.87,81.91 122.01,81.82 121.99,35.75"
        fill="#166e9e"
      />
      {/* Đáy khối lập phương 3D */}
      <polygon
        points="76.99,113.14 116.51,89.45 116.51,89.28 98.61,78.46 76.99,91.42 55.37,78.46 37.47,89.28 37.47,89.45 76.99,113.14"
        fill="#33a3dc"
      />
      {/* Mặt bên trái khối cube trung tâm */}
      <polygon
        points="58.98,51.82 76.99,62.81 76.99,82.42 58.98,71.43 58.98,51.82"
        fill="#166e9e"
      />
      {/* Mặt bên phải khối cube trung tâm */}
      <polygon
        points="95,51.82 76.99,62.81 76.99,82.42 95,71.43 95,51.82"
        fill="#0d3862"
      />
      {/* Mặt trên khối cube trung tâm */}
      <polygon
        points="58.98,51.83 76.99,62.81 95,51.82 76.98,40.82 58.98,51.83"
        fill="#33a3dc"
      />
    </svg>
  );
}

/**
 * Component Logo VNDC Đầy Đủ (Biểu tượng khối 3D + Chữ VNDC + TECHNOLOGY AND MEDIA)
 */
export function VndcLogo({
  width = 220,
  height = 92,
  className = '',
  light = false,
  ...props
}: React.SVGProps<SVGSVGElement> & { width?: number | string; height?: number | string; light?: boolean }) {
  const textColor = light ? '#ffffff' : '#0d3862';

  return (
    <svg
      width={width}
      height={height}
      viewBox="20 10 300 115"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <defs>
        <linearGradient id="vndcGradientBrand" x1="152" y1="56" x2="315" y2="56" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1b3a6a" />
          <stop offset="65%" stopColor="#0087ca" />
          <stop offset="100%" stopColor="#33a3dc" />
        </linearGradient>
        <linearGradient id="vndcGradientLight" x1="152" y1="56" x2="315" y2="56" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="60%" stopColor="#8ed1fc" />
          <stop offset="100%" stopColor="#33a3dc" />
        </linearGradient>
      </defs>

      {/* 1. Phần Biểu Tượng Khối 3D Origami */}
      <g id="VndcSymbol">
        <polygon
          points="31.99,35.75 72.64,14.05 72.78,14.14 72.84,35.05 50.61,46.92 50.59,72.13 32.11,81.91 31.97,81.82 31.99,35.75"
          fill="#0d3862"
        />
        <polygon
          points="121.99,35.75 81.34,14.05 81.2,14.14 81.14,35.05 103.37,46.92 103.39,72.13 121.87,81.91 122.01,81.82 121.99,35.75"
          fill="#166e9e"
        />
        <polygon
          points="76.99,113.14 116.51,89.45 116.51,89.28 98.61,78.46 76.99,91.42 55.37,78.46 37.47,89.28 37.47,89.45 76.99,113.14"
          fill="#33a3dc"
        />
        <polygon
          points="58.98,51.82 76.99,62.81 76.99,82.42 58.98,71.43 58.98,51.82"
          fill="#166e9e"
        />
        <polygon
          points="95,51.82 76.99,62.81 76.99,82.42 95,71.43 95,51.82"
          fill="#0d3862"
        />
        <polygon
          points="58.98,51.83 76.99,62.81 95,51.82 76.98,40.82 58.98,51.83"
          fill="#33a3dc"
        />
      </g>

      {/* 2. Chữ VNDC Vector Sắc Nét */}
      <g id="VndcText">
        <path
          fill={light ? 'url(#vndcGradientLight)' : 'url(#vndcGradientBrand)'}
          fillRule="evenodd"
          d="M152.33,42.43h9.36l10.21,21h1.57l10.11-21h9.29l-13.63,28H166.16l-13.83-28Zm41.95,0h14.93l14.63,20.88h.88l-.2-20.88h8.67v28h-14.8L203.68,49.51h-.92l.2,20.88h-8.68v-28Zm42.81,28v-28h20.16a64.15,64.15,0,0,1,10.48.53,6.75,6.75,0,0,1,5.46,4.75A30,30,0,0,1,274,56c0,4.31-.31,7.36-.92,9.18a6.58,6.58,0,0,1-5.14,4.55,56.85,56.85,0,0,1-10.66.67Zm8.39-7.12h11.85c3.91,0,6.24-.33,7-1s1.27-2.64,1.27-5.79-.37-5.11-1.1-5.93c-.56-.63-1.72-1-3.48-1.15H245.48V63.27Zm58.45-3.67h8.52c0,1.37.07,2.25.07,2.65a10.7,10.7,0,0,1-.95,5c-1,1.74-3.27,2.83-6.84,3.29-1.3.16-4,.24-8,.24q-6.64,0-8.34-.08c-4-.19-6.69-.66-8.13-1.41-1.9-1-3-2.94-3.27-5.86-.14-1.25-.21-3.55-.21-6.88,0-5.52.3-9,.9-10.34,1.22-2.75,5.44-4.19,12.69-4.32-1,0-1.55,0-1.63,0s2.61,0,8,0q9.27,0,11.77,1.16a5.43,5.43,0,0,1,2.93,3.32,15.09,15.09,0,0,1,.53,4.57c0,.13,0,.59,0,1.4h-8.51q-.06-1.26-.09-1.41a1.89,1.89,0,0,0-.55-1.22q-.94-.82-8.5-.82c-4.43,0-7,.29-7.7.86-.91.72-1.35,3-1.35,6.68,0,1.73,0,2.85.07,3.35a4.18,4.18,0,0,0,1.21,3c.86.63,3.47.93,7.82.92h4.47a8,8,0,0,0,3.93-.66C303.52,62.67,303.9,61.49,303.93,59.6Z"
        />
      </g>

      {/* 3. Dòng chữ TECHNOLOGY AND MEDIA */}
      <text
        x="154"
        y="85"
        fill={textColor}
        fontSize="10"
        fontFamily="sans-serif"
        fontWeight="700"
        letterSpacing="2.2"
        opacity={light ? 0.9 : 0.8}
      >
        TECHNOLOGY & MEDIA
      </text>
    </svg>
  );
}

/**
 * Khung Logo VNDC chuẩn chỉnh cho Header của Form Đăng Nhập
 */
export function VndcFormLogo({ className = '' }: { className?: string }) {
  return (
    <div className={`w-full flex justify-center items-center ${className}`}>
      <div className="relative flex items-center justify-center px-5 py-3 rounded-2xl bg-gradient-to-br from-[#f0f7fc] via-white to-[#e2f1fb] border border-[#d4e6f4] shadow-[0_4px_20px_rgba(0,135,202,0.12)] transition-all duration-300 hover:shadow-[0_6px_24px_rgba(0,135,202,0.2)] hover:border-[#0087ca]/40">
        <VndcLogo width={180} height={70} />
      </div>
    </div>
  );
}

/* =========================================================================
   Các Biểu Tượng Dịch Vụ & Nghiệp Vụ Công Nghệ VNDC
   ========================================================================= */

/** WiFi Marketing Icon (VNWIFI) */
export function WifiIcon({ size = 20, className = '', ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <path d="M5 12.55a11 11 0 0 1 14.08 0"></path>
      <path d="M1.42 9a16 16 0 0 1 21.16 0"></path>
      <path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
      <line x1="12" y1="20" x2="12.01" y2="20"></line>
    </svg>
  );
}

/** Digital Signage Monitor Icon (VNSign) */
export function MonitorIcon({ size = 20, className = '', ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
      <line x1="8" y1="21" x2="16" y2="21"></line>
      <line x1="12" y1="17" x2="12" y2="21"></line>
    </svg>
  );
}

/** IT Server / Cloud Infrastructure Icon */
export function ServerIcon({ size = 20, className = '', ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
      <line x1="6" y1="6" x2="6.01" y2="6"></line>
      <line x1="6" y1="18" x2="6.01" y2="18"></line>
    </svg>
  );
}

/** Broadcast / Media Streaming Icon */
export function BroadcastIcon({ size = 20, className = '', ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <path d="M4.93 4.93a10 10 0 0 1 14.14 0"></path>
      <path d="M7.76 7.76a6 6 0 0 1 8.48 0"></path>
      <circle cx="12" cy="12" r="2"></circle>
      <path d="M12 14v7"></path>
    </svg>
  );
}

/** Activity / Pulse Analytics Icon */
export function ActivityIcon({ size = 20, className = '', ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
    </svg>
  );
}

/** CPU / Microchip Hardware Icon */
export function CpuIcon({ size = 20, className = '', ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <rect x="4" y="4" width="16" height="16" rx="2"></rect>
      <rect x="9" y="9" width="6" height="6"></rect>
      <line x1="9" y1="1" x2="9" y2="4"></line>
      <line x1="15" y1="1" x2="15" y2="4"></line>
      <line x1="9" y1="20" x2="9" y2="23"></line>
      <line x1="15" y1="20" x2="15" y2="23"></line>
      <line x1="20" y1="9" x2="23" y2="9"></line>
      <line x1="20" y1="15" x2="23" y2="15"></line>
      <line x1="1" y1="9" x2="4" y2="9"></line>
      <line x1="1" y1="15" x2="4" y2="15"></line>
    </svg>
  );
}

/* =========================================================================
   Các Biểu Tượng Giao Diện & Form Phổ Biến
   ========================================================================= */

export function UserIcon({ size = 18, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>
  );
}

export function LockIcon({ size = 18, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    </svg>
  );
}

export function EyeIcon({ size = 18, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
      <circle cx="12" cy="12" r="3"></circle>
    </svg>
  );
}

export function EyeOffIcon({ size = 18, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
      <line x1="1" y1="1" x2="23" y2="23"></line>
    </svg>
  );
}

export function PhoneIcon({ size = 18, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
  );
}

export function MailIcon({ size = 18, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  );
}

export function ShieldCheckIcon({ size = 18, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      <polyline points="9 12 11 14 15 10"></polyline>
    </svg>
  );
}

export function AlertCircleIcon({ size = 18, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="12" y1="8" x2="12" y2="12"></line>
      <line x1="12" y1="16" x2="12.01" y2="16"></line>
    </svg>
  );
}

export function CheckCircleIcon({ size = 18, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
  );
}

export function ClockIcon({ size = 18, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  );
}

export function RefreshCwIcon({ size = 18, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polyline points="23 4 23 10 17 10"></polyline>
      <polyline points="1 20 1 14 7 14"></polyline>
      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
    </svg>
  );
}

export function LogOutIcon({ size = 18, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
      <polyline points="16 17 21 12 16 7"></polyline>
      <line x1="21" y1="12" x2="9" y2="12"></line>
    </svg>
  );
}
