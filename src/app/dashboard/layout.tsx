import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trung Tâm Điều Hành Dịch Vụ Số & Hạ Tầng Công Nghệ VNDC',
  description:
    'Trung tâm điều hành và giám sát thời gian thực hệ sinh thái giải pháp số VNDC Technology & Media. Quản lý mạng lưới điểm phát WiFi Marketing (VNWIFI), mạng hiển thị kỹ thuật số Digital Signage (VNSign), và giám sát an toàn hệ thống máy chủ 24/7.',
  openGraph: {
    title: 'Trung Tâm Điều Hành Dịch Vụ Số VNDC Portal',
    description:
      'Giám sát thời gian thực các trạm phát VNWIFI, màn hình số VNSign, lưu lượng truy cập và tình trạng máy chủ đám mây VNDC.',
    url: 'https://portal.vndc.vn/dashboard',
    siteName: 'VNDC Technology & Media Portal',
    locale: 'vi_VN',
    type: 'website',
    images: [
      {
        url: './og-image.png',
        width: 1200,
        height: 630,
        alt: 'VNDC Operations Dashboard Overview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trung Tâm Điều Hành Dịch Vụ Số VNDC Portal',
    description:
      'Giám sát thời gian thực trạm phát VNWIFI, màn hình số VNSign và lưu lượng dịch vụ CNTT.',
    images: ['./og-image.png'],
  },
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
