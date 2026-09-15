// apps/driver/app/[locale]/layout.tsx
import "@xcarbox/ui/tokens.css";
import { Montserrat } from 'next/font/google';
import "./globals.css";
import React from 'react';
import { DriverSidebar } from './_components/DriverSidebar';
import { UserRole } from '@xcarbox/contracts';
import { Header } from '@xcarbox/ui';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
});

export default async function DriverLocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <html lang={locale} dir="ltr" className={montserrat.variable}>
      <body className="flex min-h-screen bg-gray-50 text-gray-900 antialiased">
        {/* الشريط الجانبي الخاص بالدرايفر */}
        <DriverSidebar userRole={UserRole.DRIVER} locale={locale} />

        {/* حاوية الجانب الأيمن (الهيدر والمحتوى) */}
        <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
          <Header />

          <main className="flex-1 p-8 overflow-y-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}