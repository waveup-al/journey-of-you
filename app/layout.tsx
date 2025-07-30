import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title:
    'Joy - Journey of You | Chuyên gia thương mại điện tử hàng đầu Việt Nam',
  description:
    'Joy - Công ty chuyên về thương mại điện tử Amazon và TikTok Shop tại Việt Nam. Đưa sản phẩm và trí tuệ của con người Việt Nam ra toàn cầu.',
  keywords:
    'Joy, thương mại điện tử, Amazon, TikTok Shop, Việt Nam, e-commerce',
  authors: [{ name: 'Joy Vietnam' }],
  openGraph: {
    title: 'Joy - Journey of You',
    description: 'Chuyên gia thương mại điện tử hàng đầu Việt Nam',
    url: 'https://joy-vietnam.com',
    siteName: 'Joy Vietnam',
    locale: 'vi_VN',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
