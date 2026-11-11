import type { Metadata, Viewport } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';

const roboto = Roboto({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin', 'vietnamese'],
  display: 'swap',
  variable: '--font-roboto',
});

export const viewport: Viewport = {
  themeColor: '#0087ca',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://vndc.vn'),
  title: {
    default: 'VNDC — Technology and Media | Cổng Quản Trị Dịch Vụ Số',
    template: '%s | VNDC Technology & Media',
  },
  description:
    'Cung cấp và phát triển các giải pháp công nghệ dành cho doanh nghiệp bao gồm: WiFi Marketing (VNWIFI), Digital Signage (VNSign), IT Services, IT Outsourcing và phần mềm quản lý thông minh.',
  keywords: [
    'VNDC',
    'VNDC Technology',
    'VNDC Media',
    'WiFi Marketing',
    'VNWIFI',
    'Digital Signage',
    'VNSign',
    'IT Services',
    'IT Outsourcing',
    'VNVAR',
    'Phần mềm quản lý doanh nghiệp',
    'CommaDesk Custom Login',
  ],
  authors: [{ name: 'VNDC Technology Company Limited' }],
  creator: 'VNDC Technology Company Limited',
  publisher: 'VNDC Technology & Media',
  applicationName: 'VNDC Enterprise Portal',
  category: 'Technology & Enterprise Solutions',
  classification: 'Enterprise Digital Service Management System',
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: './favicon.ico', sizes: 'any' },
      { url: './favicon.svg', type: 'image/svg+xml' },
      { url: './favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: './favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: './vndc-favicon.png', sizes: '300x300', type: 'image/png' },
      { url: './icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: './icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: './favicon.ico',
    apple: [
      { url: './apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: './favicon.svg', color: '#0087ca' },
    ],
  },
  manifest: './site.webmanifest',
  alternates: {
    canonical: './',
  },
  openGraph: {
    title: 'VNDC — Technology and Media | Cổng Quản Trị Dịch Vụ Số',
    description:
      'Cung cấp và phát triển các giải pháp công nghệ dành cho doanh nghiệp: WiFi Marketing, Digital Signage, IT Services và phần mềm quản lý.',
    url: 'https://vndc.vn',
    siteName: 'VNDC Technology & Media',
    locale: 'vi_VN',
    type: 'website',
    images: [
      {
        url: './og-image.png',
        width: 1200,
        height: 630,
        alt: 'VNDC Technology and Media Portal',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VNDC — Technology and Media | Cổng Quản Trị Dịch Vụ Số',
    description:
      'Cung cấp và phát triển các giải pháp công nghệ dành cho doanh nghiệp: WiFi Marketing, Digital Signage và IT Services.',
    images: ['./og-image.png'],
    creator: '@VNDCTechnology',
  },
  other: {
    'apple-mobile-web-app-title': 'VNDC Portal',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'mobile-web-app-capable': 'yes',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={roboto.variable}>
      <head>
        {/* Placeholder script theo đặc tả CommaDesk Custom Login UI Spec */}
        <script src="/__commadesk/login-bridge.js" />
        {/* Thẻ favicon & icon tương đối chuẩn cho gói xuất tĩnh CommaDesk ZIP */}
        <link rel="icon" href="./favicon.ico" sizes="any" />
        <link rel="icon" href="./favicon.svg" type="image/svg+xml" />
        <link rel="icon" type="image/png" sizes="32x32" href="./favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="./favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="300x300" href="./vndc-favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="./apple-touch-icon.png" />
        <link rel="manifest" href="./site.webmanifest" />
        <meta name="apple-mobile-web-app-title" content="VNDC Portal" />
        <meta name="application-name" content="VNDC Enterprise Portal" />
        <meta name="theme-color" content="#0087ca" />
      </head>
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
