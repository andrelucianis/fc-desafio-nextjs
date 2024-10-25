import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "FC Blog Posts",
  description: "A place to list and read blog posts!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`pb-16 lg:pb-24 bg-slate-900 ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <div className="flex justify-between px-4 mx-auto max-w-screen-md">
          {children}
        </div>
      </body>
    </html>
  );
}
