import type { Metadata } from "next";
import { Inter } from "next/font/google";
import './globals.css'
import Navbar from "@/components/Navbar";
import LocationBanner from '@/components/LocationBanner';
import FloatingContact from '@/components/FloatingContact';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: 'ShiftSwift Packers and Movers | Professional Moving Services in Varanasi',
  description: 'Professional packing, moving, and installation services in Varanasi. Expert team for home shifting with complete uninstallation and installation services.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <LocationBanner />
        <Navbar />
        <div className="flex min-h-screen flex-col pt-16">
          {children}
        </div>
        <FloatingContact />
      </body>
    </html>
  );
}
