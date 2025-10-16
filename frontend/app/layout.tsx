import './globals.css';
import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'فروشگاه لوازم خانگی',
  description: 'Home Appliance Shop'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="container mx-auto px-4 py-6 flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
