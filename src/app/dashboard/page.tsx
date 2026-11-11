'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  VndcCubeIcon,
  WifiIcon,
  MonitorIcon,
  ServerIcon,
  ActivityIcon,
  AlertCircleIcon,
  ShieldCheckIcon,
} from '@/components/icons/Icons';
import { Button } from '@/components/ui/Button';
import { Card, KpiCard } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  TableEmpty,
} from '@/components/ui/Table';

interface ServiceNode {
  id: string;
  code: string;
  location: string;
  serviceType: 'wifi' | 'signage' | 'cloud';
  serviceName: string;
  metrics: string;
  bandwidth: string;
  technician: string;
  time: string;
  status: 'completed' | 'processing' | 'pending';
  statusText: string;
}

export default function DashboardPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'all' | 'wifi' | 'signage'>('all');
  const [mobileDisplayMode, setMobileDisplayMode] = useState<'card' | 'table'>('card');

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.removeItem('cp_user');
      } catch {}
      router.push('/');
    }
  };

  const serviceNodes: ServiceNode[] = [
    {
      id: 'VNW-2026-8812',
      code: 'AP-SCVIVO-01..18',
      location: 'TTTM SC VivoCity (Quận 7, TP.HCM)',
      serviceType: 'wifi',
      serviceName: 'WiFi Marketing Đa Điểm (VNWIFI)',
      metrics: '12,450 Lượt kết nối',
      bandwidth: 'Băng thông: 450 Mbps',
      technician: 'Kỹ sư Bùi Thanh Nam',
      time: '15:45 - Hôm nay',
      status: 'completed',
      statusText: 'Đang phát sóng ổn định',
    },
    {
      id: 'VNS-2026-3401',
      code: 'SIGN-TCH-HCM-ALL',
      location: 'Chuỗi The Coffee House (Toàn quốc)',
      serviceType: 'signage',
      serviceName: 'Digital Signage Media (VNSign)',
      metrics: '68 Màn hình hiển thị',
      bandwidth: 'Đồng bộ Media HD 1080p',
      technician: 'Đội Vận Hành Media',
      time: '15:20 - Hôm nay',
      status: 'completed',
      statusText: 'Đã đồng bộ 100% nội dung',
    },
    {
      id: 'VNW-2026-8815',
      code: 'AP-UEH-CAMPUS-B',
      location: 'Đại Học Kinh Tế TP.HCM (Cơ sở B)',
      serviceType: 'wifi',
      serviceName: 'Hạ Tầng WiFi Campus (VNWIFI)',
      metrics: '8,920 Lượt kết nối',
      bandwidth: 'Băng thông: 680 Mbps (Peak)',
      technician: 'Kỹ sư Lê Hoàng Long',
      time: '14:50 - Hôm nay',
      status: 'processing',
      statusText: 'Lưu lượng cao (Đang tải cân bằng)',
    },
    {
      id: 'VNS-2026-3409',
      code: 'LED-NGUYENHUE-01',
      location: 'Phố Đi Bộ Nguyễn Huệ (Quận 1)',
      serviceType: 'signage',
      serviceName: 'Màn Hình LED Khổ Lớn VNSign',
      metrics: '01 Màn hình LED 120m²',
      bandwidth: 'Luồng Video 4K 60fps',
      technician: 'Kỹ sư Đặng Quốc Cường',
      time: '14:15 - Hôm nay',
      status: 'pending',
      statusText: 'Chờ duyệt chiến dịch mới',
    },
    {
      id: 'VNW-2026-8820',
      code: 'AP-TOCO-HCM-12',
      location: 'Chuỗi Trà Sữa TocoToco (Khu Vực TP.HCM)',
      serviceType: 'wifi',
      serviceName: 'WiFi Marketing Chuỗi (VNWIFI)',
      metrics: '4,150 Lượt tương tác',
      bandwidth: 'Băng thông: 220 Mbps',
      technician: 'Kỹ sư Nguyễn Minh Tuấn',
      time: '13:30 - Hôm nay',
      status: 'completed',
      statusText: 'Chiến dịch Voucher Active',
    },
  ];

  const filteredNodes =
    activeTab === 'all'
      ? serviceNodes
      : serviceNodes.filter((item) => item.serviceType === activeTab);

  return (
    <div className="min-h-screen bg-[#f0f7fc] flex flex-col text-[#0d3862]">
      {/* Top Navigation */}
      <header className="bg-[#09223e] text-white px-6 lg:px-8 py-4 flex flex-wrap items-center justify-between border-b-2 border-[#0087ca] sticky top-0 z-50 gap-4 shadow-md">
        <div className="flex items-center gap-3.5">
          <div className="flex items-center gap-2.5 text-lg font-extrabold tracking-tight">
            <VndcCubeIcon size={26} className="drop-shadow-[0_0_8px_rgba(51,163,220,0.8)]" />
            <span className="tracking-wide">VNDC TECHNOLOGY & MEDIA</span>
          </div>
          <Badge variant="neutral" className="hidden sm:inline-flex">
            <ServerIcon size={14} />
            Trung Tâm Vận Hành &amp; Điều Hành Dịch Vụ Số TP.HCM
          </Badge>
        </div>

        <div className="flex items-center gap-4 text-xs sm:text-sm">
          <span className="hidden md:inline-flex items-center gap-1.5 text-[#33a3dc] text-xs font-medium before:content-[''] before:w-2 before:h-2 before:bg-[#33a3dc] before:rounded-full before:shadow-[0_0_8px_#33a3dc] before:animate-pulse">
            Hạ tầng mạng: 99.98% Online
          </span>
          <div className="text-white/90">
            Kỹ sư vận hành: <strong>Hoàng Minh Quân</strong>
          </div>
          <Button variant="danger" size="sm" onClick={handleLogout}>
            Đăng xuất
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1360px] w-full mx-auto p-4 sm:p-6 lg:p-8 flex flex-col gap-6 sm:gap-7">
        {/* Banner giới thiệu & Thông báo vận hành */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#0d3862] tracking-tight mb-1">
              Bảng Điều Hành Mạng Lưới Dịch Vụ Số &amp; IoT
            </h2>
            <p className="text-xs sm:text-sm text-[#5a738e]">
              Giám sát thời gian thực các trạm WiFi Marketing (VNWIFI), Màn hình kỹ thuật số (VNSign) và cụm máy chủ điện toán đám mây VNDC.
            </p>
          </div>
          <div>
            <Badge variant="success" className="px-3.5 py-2 text-xs">
              ✓ SLA Cam Kết 99.9% Uptime: Đạt chuẩn
            </Badge>
          </div>
        </div>

        {/* 4 Reusable KPI Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          <KpiCard
            title="Điểm Phát WiFi Marketing (VNWIFI)"
            value="1,280"
            unit="/ 1,300 Trạm"
            subtitle={<>Tỷ lệ online: <strong>98.5%</strong> · Kết nối: +185,420 lượt</>}
            icon={<WifiIcon size={22} />}
            accentColor="#0087ca"
          />

          <KpiCard
            title="Màn Hình Digital Signage (VNSign)"
            value="854"
            unit="Màn hình"
            subtitle={<>Chiến dịch media: <strong>32 active</strong> · Phát sóng đồng bộ</>}
            icon={<MonitorIcon size={22} />}
            accentColor="#33a3dc"
          />

          <KpiCard
            title="Hạ Tầng IT & Điện Toán Đám Mây"
            value="99.98%"
            unit="Uptime"
            subtitle={<>Định mức an toàn: <strong>Tốt</strong> · 24 cụm Edge Servers</>}
            icon={<ServerIcon size={22} />}
            accentColor="#008a3d"
          />

          <KpiCard
            title="Sự Cố Kỹ Thuật Đang Xử Lý"
            value="02"
            unit="Ticket"
            subtitle={<>Thời gian phản hồi TB: <strong>4.5 phút</strong> · Ưu tiên xử lý</>}
            icon={<AlertCircleIcon size={22} />}
            accentColor="#ff6900"
            isAlert={true}
          />
        </div>

        {/* Section Bảng Trạm Thiết Bị - Dùng Table Component Độc Lập */}
        <Card className="p-4 sm:p-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-5">
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <ActivityIcon size={20} className="text-[#0087ca] shrink-0" />
                <h3 className="text-base sm:text-lg font-extrabold text-[#0d3862]">
                  Danh Sách Trạm Dịch Vụ Số &amp; Màn Hình Đang Hoạt Động
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#5a738e] mt-0.5">
                Kiểm soát lưu lượng, nội dung trình chiếu và tình trạng kết nối thiết bị tại các điểm đối tác
              </p>
            </div>

            <div className="flex items-center gap-2.5 shrink-0 flex-nowrap overflow-x-auto custom-scrollbar pb-1 sm:pb-0">
              {/* Nút lọc tab theo loại dịch vụ */}
              <div className="flex items-center gap-1.5 bg-[#eaf2f8] p-1 rounded-xl border border-[#d4e6f4] shrink-0">
                <Button
                  variant="tab"
                  size="sm"
                  isActive={activeTab === 'all'}
                  onClick={() => setActiveTab('all')}
                  className="text-xs px-3 py-1.5 h-8 whitespace-nowrap shrink-0"
                >
                  Tất cả ({serviceNodes.length})
                </Button>
                <Button
                  variant="tab"
                  size="sm"
                  isActive={activeTab === 'wifi'}
                  onClick={() => setActiveTab('wifi')}
                  className="text-xs px-3 py-1.5 h-8 whitespace-nowrap shrink-0"
                >
                  WiFi Marketing
                </Button>
                <Button
                  variant="tab"
                  size="sm"
                  isActive={activeTab === 'signage'}
                  onClick={() => setActiveTab('signage')}
                  className="text-xs px-3 py-1.5 h-8 whitespace-nowrap shrink-0"
                >
                  Digital Signage
                </Button>
              </div>

              {/* Bộ chuyển đổi chế độ xem trên Mobile (Thẻ / Bảng) */}
              <div className="md:hidden flex items-center gap-1 bg-[#eaf2f8] p-1 rounded-xl border border-[#d4e6f4] shrink-0">
                <button
                  type="button"
                  onClick={() => setMobileDisplayMode('card')}
                  className={`text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap shrink-0 transition-all ${
                    mobileDisplayMode === 'card'
                      ? 'bg-white text-[#0087ca] shadow-xs'
                      : 'text-[#5a738e] hover:text-[#0d3862]'
                  }`}
                >
                  Dạng Thẻ
                </button>
                <button
                  type="button"
                  onClick={() => setMobileDisplayMode('table')}
                  className={`text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap shrink-0 transition-all ${
                    mobileDisplayMode === 'table'
                      ? 'bg-white text-[#0087ca] shadow-xs'
                      : 'text-[#5a738e] hover:text-[#0d3862]'
                  }`}
                >
                  Dạng Bảng
                </button>
              </div>
            </div>
          </div>

          {/* 1. HIỂN THỊ DẠNG THẺ (CARD VIEW) TRÊN MOBILE CHO TRẢI NGHIỆM TỐI ƯU */}
          <div
            className={`flex flex-col gap-3.5 ${
              mobileDisplayMode === 'card' ? 'md:hidden' : 'hidden'
            }`}
          >
            {filteredNodes.length === 0 ? (
              <div className="text-center py-8 text-sm text-[#5a738e] bg-[#f8fafc] rounded-xl border border-[#d4e6f4]">
                Không tìm thấy trạm dịch vụ phù hợp.
              </div>
            ) : (
              filteredNodes.map((node) => (
                <div
                  key={node.id}
                  className="bg-white border border-[#d4e6f4] rounded-xl p-4 transition-all hover:border-[#0087ca] hover:shadow-xs flex flex-col gap-3"
                >
                  {/* Card Header: Mã trạm & Badge trạng thái */}
                  <div className="flex items-start justify-between gap-2 border-b border-[#eaf2f8] pb-2.5">
                    <div>
                      <div className="text-sm font-extrabold text-[#0d3862] tracking-tight">
                        {node.id}
                      </div>
                      <div className="text-xs text-[#5a738e]">
                        Mã thiết bị: <span className="font-mono font-medium text-[#0d3862]">{node.code}</span>
                      </div>
                    </div>
                    <Badge
                      variant={
                        node.status === 'completed'
                          ? 'success'
                          : node.status === 'processing'
                          ? 'warning'
                          : 'info'
                      }
                      className="shrink-0 text-[11px] whitespace-nowrap"
                    >
                      {node.statusText}
                    </Badge>
                  </div>

                  {/* Card Body: Tên địa điểm & Chỉ số */}
                  <div>
                    <div className="font-bold text-[15px] text-[#0d3862] leading-snug">
                      {node.location}
                    </div>
                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-dashed border-[#d4e6f4]">
                      <span
                        className={`text-xs font-semibold px-2 py-0.5 rounded ${
                          node.serviceType === 'wifi'
                            ? 'bg-[#e2f1fb] text-[#0087ca]'
                            : 'bg-[#fff3eb] text-[#ff6900]'
                        }`}
                      >
                        {node.serviceName}
                      </span>
                      <div className="text-right">
                        <span className="text-xs text-[#5a738e] block">Chỉ số</span>
                        <span className="text-base font-extrabold text-[#0087ca]">{node.metrics}</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Details: Băng thông, Kỹ sư, Thời gian */}
                  <div className="bg-[#f8fafc] rounded-lg p-2.5 border border-[#d4e6f4] text-xs grid grid-cols-1 gap-1.5 text-[#5a738e]">
                    <div className="flex items-center justify-between">
                      <span className="text-[#5a738e]">Thông lượng / Profile:</span>
                      <span className="font-semibold text-[#0d3862] text-right">{node.bandwidth}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#5a738e]">Kỹ sư phụ trách:</span>
                      <span className="font-semibold text-[#0d3862] text-right">{node.technician}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#5a738e]">Cập nhật lần cuối:</span>
                      <span className="font-medium text-[#0d3862] text-right">{node.time}</span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* 2. HIỂN THỊ DẠNG BẢNG (TABLE VIEW) KẾ THỪA COMPONENT TABLE */}
          <div
            className={`w-full ${
              mobileDisplayMode === 'table' ? 'block' : 'hidden md:block'
            }`}
          >
            <Table minWidth="min-w-[1150px]" showScrollHint={true}>
              <TableHeader>
                <TableRow>
                  <TableHead nowrap={true} className="min-w-[150px]">Mã Điểm / Thiết Bị</TableHead>
                  <TableHead nowrap={true} className="min-w-[300px]">Địa Điểm &amp; Dịch Vụ Triển Khai</TableHead>
                  <TableHead nowrap={true} className="min-w-[170px]">Lưu Lượng / Chỉ Số</TableHead>
                  <TableHead nowrap={true} className="min-w-[240px]">Thông Lượng &amp; Băng Thông</TableHead>
                  <TableHead nowrap={true} className="min-w-[180px]">Kỹ Sư Phụ Trách</TableHead>
                  <TableHead nowrap={true} className="min-w-[140px]">Thời Gian</TableHead>
                  <TableHead nowrap={true} className="min-w-[190px]">Trạng Thái</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {filteredNodes.length === 0 ? (
                  <TableEmpty
                    colSpan={7}
                    message="Không có dữ liệu trạm dịch vụ"
                    description="Hiện chưa có điểm phát nào theo bộ lọc được chọn."
                  />
                ) : (
                  filteredNodes.map((node) => (
                    <TableRow key={node.id}>
                      {/* Cột Mã Điểm / Thiết Bị */}
                      <TableCell nowrap={true}>
                        <div className="font-bold text-[#0d3862] whitespace-nowrap">{node.id}</div>
                        <div className="text-xs text-[#5a738e] font-mono whitespace-nowrap">{node.code}</div>
                      </TableCell>

                      {/* Cột Địa Điểm & Dịch Vụ */}
                      <TableCell nowrap={true} className="max-w-[320px]">
                        <div
                          className="font-semibold text-[#0d3862] whitespace-nowrap truncate"
                          title={node.location}
                        >
                          {node.location}
                        </div>
                        <div
                          className={`text-xs font-medium mt-0.5 whitespace-nowrap ${
                            node.serviceType === 'wifi' ? 'text-[#0087ca]' : 'text-[#ff6900]'
                          }`}
                        >
                          {node.serviceName}
                        </div>
                      </TableCell>

                      {/* Cột Lưu Lượng / Chỉ Số */}
                      <TableCell nowrap={true}>
                        <span className="font-extrabold text-[15px] text-[#0d3862] whitespace-nowrap">
                          {node.metrics}
                        </span>
                      </TableCell>

                      {/* Cột Thông Lượng */}
                      <TableCell nowrap={true} className="max-w-[250px]">
                        <span
                          className="text-[#0d3862] whitespace-nowrap truncate block"
                          title={node.bandwidth}
                        >
                          {node.bandwidth}
                        </span>
                      </TableCell>

                      {/* Cột Kỹ Sư Phụ Trách */}
                      <TableCell nowrap={true} className="max-w-[190px]">
                        <span
                          className="font-medium text-[#0d3862] whitespace-nowrap truncate block"
                          title={node.technician}
                        >
                          {node.technician}
                        </span>
                      </TableCell>

                      {/* Cột Thời Gian */}
                      <TableCell nowrap={true}>
                        <span className="text-[#5a738e] text-xs whitespace-nowrap">
                          {node.time}
                        </span>
                      </TableCell>

                      {/* Cột Trạng Thái */}
                      <TableCell nowrap={true}>
                        <Badge
                          variant={
                            node.status === 'completed'
                              ? 'success'
                              : node.status === 'processing'
                              ? 'warning'
                              : 'info'
                          }
                          className="whitespace-nowrap"
                        >
                          {node.statusText}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </Card>

        {/* Section Cảnh báo & Hỗ trợ kỹ thuật */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          <Card>
            <h4 className="text-base font-bold text-[#0d3862] mb-3 flex items-center gap-2">
              <ShieldCheckIcon size={20} className="text-[#0087ca]" />
              Tiêu Chuẩn Bảo Mật &amp; An Toàn Dữ Liệu ISO 27001
            </h4>
            <p className="text-xs sm:text-sm text-[#5a738e] leading-relaxed mb-4">
              Toàn bộ luồng dữ liệu WiFi Marketing và kết nối Digital Signage được mã hóa đầu cuối (E2EE), đảm bảo bảo mật thông tin người dùng và phân quyền theo cấp độ doanh nghiệp.
            </p>
            <div className="bg-[#f0f7fc] p-3 rounded-xl text-xs sm:text-sm border border-[#d4e6f4]">
              <strong>Chứng chỉ bảo mật máy chủ:</strong>{' '}
              <code className="bg-white px-1.5 py-0.5 rounded border border-[#d4e6f4] font-mono text-[#0087ca] font-bold">
                TLS 1.3 / SHA-256 (VNDC Cloud Shield)
              </code>
            </div>
          </Card>

          <Card>
            <h4 className="text-base font-bold text-[#0d3862] mb-3 flex items-center gap-2">
              <AlertCircleIcon size={20} className="text-[#ff6900]" />
              Trung Tâm Trực Ban Kỹ Thuật VNDC 24/7
            </h4>
            <p className="text-xs sm:text-sm text-[#5a738e] leading-relaxed mb-4">
              Mọi sự cố về rớt kết nối trạm phát, gián đoạn truyền phát màn hình hoặc lỗi phân quyền tài khoản, vui lòng liên hệ bộ phận hỗ trợ kỹ thuật trực ban.
            </p>
            <div className="flex flex-wrap items-center gap-2 text-sm font-bold text-[#0d3862]">
              <span>📞 Hotline Kỹ Thuật:</span>
              <a href="tel:0888998181" className="text-[#0087ca] underline hover:text-[#0072ac]">
                0888 99 8181
              </a>
              <span className="text-xs text-[#5a738e]">/</span>
              <a href="tel:0901318369" className="text-[#0087ca] underline hover:text-[#0072ac]">
                0901 318 369
              </a>
              <span className="text-xs font-normal text-[#5a738e]">(info@vndc.vn)</span>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}
