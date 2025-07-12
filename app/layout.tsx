import type { Metadata } from "next";

import "./globals.css";

import { Comic_Neue } from 'next/font/google';

const comic = Comic_Neue({ subsets: ['latin'], weight: '400' });


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
