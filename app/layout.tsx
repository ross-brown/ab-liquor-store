import type { Metadata } from "next";
import { Urbanist, Roboto, Lato } from "next/font/google";

import Footer from "@/components/footer";

import "./globals.css";
import Navbar from "@/components/navbar";
import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";

const font = Lato({ subsets: ["latin"], weight: ["100", "300", "400", "700", "900"] });

export const metadata: Metadata = {
  title: "A&B LIQUOR | Austin, TX",
  description: "E-commerce site for East Austin's premeir liquor destination",
  icons: {
    icon: "/images/abl_logo.ico"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ModalProvider />
        <ToastProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
