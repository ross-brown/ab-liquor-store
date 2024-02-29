import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import Footer from "@/components/footer";

import "./globals.css";
import Navbar from "@/components/navbar";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "A&B LIQOUR | Austin, TX",
  description: "E-commerce site for East Austin's premeir liquor destination",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
