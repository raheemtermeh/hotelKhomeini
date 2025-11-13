/* fileName: layout.tsx (اصلاح شده) */
import type { Metadata } from "next";
// تمام ایمپورت‌های فونت حذف شدند
import "./globals.css";

export const metadata: Metadata = {
  title: "hotel",
  description: "hotel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // lang="fa" و dir="rtl" برای پشتیبانی کامل از زبان فارسی و راست‌چین
    <html lang="fa" dir="rtl">
      {/* کلاس فونت font-ShabnamFD حذف شد */}
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}