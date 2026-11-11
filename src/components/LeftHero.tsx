import React from 'react';
import VndcTechBanner from './VndcTechBanner';
import { WifiIcon, MonitorIcon, ServerIcon } from './icons/Icons';

export default function LeftHero() {
  return (
    <VndcTechBanner className="hidden lg:flex flex-col justify-center p-12 xl:p-14 text-white min-h-screen">
      <div className="relative z-10 flex flex-col justify-center max-w-[560px] my-auto">
        {/* Nội dung chính Hero Body */}
        <div>
          <h1 className="text-3xl xl:text-4xl 2xl:text-[42px] font-extrabold leading-[1.2] tracking-tight mb-5 drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
            Hệ thống Quản trị &<br />
            Điều hành Dịch vụ Số <em className="not-italic bg-gradient-to-r from-[#33a3dc] via-[#8ed1fc] to-white bg-clip-text text-transparent">VNDC Portal</em>
          </h1>
          <p className="text-[15px] leading-relaxed text-white/90 max-w-[500px] mb-8 drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)] font-normal">
            Cung cấp và phát triển các giải pháp công nghệ doanh nghiệp:
            WiFi Marketing (VNWIFI), Màn hình Digital Signage (VNSign), Phần mềm thể thao VNVAR, Dịch vụ IT Services & Outsourcing toàn diện.
          </p>

          {/* Key Operations Badges (Các khối nghiệp vụ công nghệ dạng kính mờ Glassmorphism) */}
          <div className="flex flex-col gap-3.5">
            {/* Block 1: WiFi Marketing */}
            <div className="flex items-center gap-3.5 bg-[#09223e]/65 hover:bg-[#0d3862]/85 border border-white/15 hover:border-[#33a3dc]/60 p-3.5 rounded-xl backdrop-blur-md max-w-[460px] transition-all duration-300 hover:translate-x-1.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.35),0_0_18px_rgba(51,163,220,0.25)]">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0087ca] to-[#0d3862] border border-[#33a3dc]/40 flex items-center justify-center text-lg shrink-0 shadow-md">
                <WifiIcon size={20} className="text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.4)]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-0.5">WiFi Marketing & Smart Connect (VNWIFI)</h4>
                <p className="text-xs text-white/80">Điều phối luồng truy cập & chiến dịch tương tác người dùng thời gian thực</p>
              </div>
            </div>

            {/* Block 2: Digital Signage */}
            <div className="flex items-center gap-3.5 bg-[#09223e]/65 hover:bg-[#0d3862]/85 border border-white/15 hover:border-[#33a3dc]/60 p-3.5 rounded-xl backdrop-blur-md max-w-[460px] transition-all duration-300 hover:translate-x-1.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.35),0_0_18px_rgba(51,163,220,0.25)]">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0087ca] to-[#0d3862] border border-[#33a3dc]/40 flex items-center justify-center text-lg shrink-0 shadow-md">
                <MonitorIcon size={20} className="text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.4)]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-0.5">Digital Signage & Media Broadcaster (VNSign)</h4>
                <p className="text-xs text-white/80">Quản trị và phân phối nội dung màn hình quảng cáo tập trung từ xa</p>
              </div>
            </div>

            {/* Block 3: IT Services & Outsourcing */}
            <div className="flex items-center gap-3.5 bg-[#09223e]/65 hover:bg-[#0d3862]/85 border border-white/15 hover:border-[#33a3dc]/60 p-3.5 rounded-xl backdrop-blur-md max-w-[460px] transition-all duration-300 hover:translate-x-1.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.35),0_0_18px_rgba(51,163,220,0.25)]">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0087ca] to-[#0d3862] border border-[#33a3dc]/40 flex items-center justify-center text-lg shrink-0 shadow-md">
                <ServerIcon size={20} className="text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.4)]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-0.5">VNDC IT Services & Outsourcing</h4>
                <p className="text-xs text-white/80">Cung cấp, bảo trì hạ tầng hệ thống CNTT và phát triển phần mềm Web/App</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </VndcTechBanner>
  );
}
