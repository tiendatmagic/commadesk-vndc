import React from 'react';
import Link from 'next/link';
import { VndcLogo, VndcCubeIcon, PhoneIcon } from '@/components/icons/Icons';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#09223e] via-[#0d3862] to-[#164676] text-white flex flex-col justify-between p-6 sm:p-10 relative overflow-hidden">
      {/* Background Cyber Grid */}
      <div
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
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

      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#0087ca]/25 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[380px] h-[380px] bg-[#33a3dc]/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between max-w-5xl w-full mx-auto">
        <Link href="/" className="inline-block transition-transform hover:scale-105">
          <VndcLogo width={180} height={60} light={true} />
        </Link>
        <span className="text-xs uppercase tracking-wider text-white/70 bg-white/10 px-3 py-1.5 rounded-full border border-white/15 backdrop-blur-md">
          Lỗi Điều Hướng 404
        </span>
      </header>

      {/* Body Content */}
      <main className="relative z-10 flex flex-col items-center justify-center text-center my-12 max-w-xl mx-auto animate-fade-slide-up">
        {/* Khối biểu tượng 3D với hiệu ứng phát sáng */}
        <div className="relative mb-6">
          <div className="w-28 h-28 rounded-3xl bg-[#0d3862]/80 border border-[#33a3dc]/50 flex items-center justify-center shadow-[0_0_35px_rgba(51,163,220,0.35)] backdrop-blur-md">
            <VndcCubeIcon size={64} className="drop-shadow-[0_0_12px_rgba(51,163,220,0.8)]" />
          </div>
          <span className="absolute -bottom-2 -right-2 bg-[#ff6900] text-white text-[11px] font-bold px-2 py-0.5 rounded-full shadow-md">
            404
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
          Không Tìm Thấy Trang Yêu Cầu
        </h1>
        <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-8 max-w-md">
          Đường dẫn bạn truy cập có thể đã được đổi vị trí hoặc dịch vụ tạm thời không khả dụng trên hệ thống VNDC Portal.
        </p>

        {/* Nút hành động */}
        <div className="flex flex-wrap items-center justify-center gap-3 w-full">
          <Link href="/" className="no-underline">
            <Button size="lg" className="px-6">
              Về Cổng Đăng Nhập
            </Button>
          </Link>
          <Link href="/dashboard" className="no-underline">
            <Button variant="secondary" size="lg" className="px-6 bg-white/10 border-white/25 text-white hover:bg-white/20 hover:text-white">
              Bảng Điều Hành
            </Button>
          </Link>
        </div>

        {/* Thông tin hỗ trợ kỹ thuật */}
        <div className="mt-10 pt-6 border-t border-white/15 flex flex-wrap items-center justify-center gap-2 text-xs text-white/70">
          <PhoneIcon size={14} className="text-[#33a3dc]" />
          <span>Tổng đài trực ban kỹ thuật 24/7:</span>
          <a href="tel:0888998181" className="text-[#33a3dc] font-bold hover:underline">
            0888 99 8181
          </a>
          <span>/</span>
          <a href="tel:0901318369" className="text-[#33a3dc] font-bold hover:underline">
            0901 318 369
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 text-center text-xs text-white/60">
        © 2015 - 2026 VNDC Technology Company Limited. All Rights Reserved.
      </footer>
    </div>
  );
}

