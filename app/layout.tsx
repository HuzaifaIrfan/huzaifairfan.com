import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Comic_Neue } from 'next/font/google';




const comic = Comic_Neue({ subsets: ['latin'], weight: '400' });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Huzaifa Irfan",
  description: "Huzaifa Irfan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <link
      rel="icon"
      type="image/png"
      href="img/profile.jpg"
    />
      <body
        className={comic.className}
      >
        {children}
 
      </body>
    </html>
  );
}
