import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer";
import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";
import Navbar2 from "@/components/navbar/navbar-v2";
import getCategories from "@/actions/get-categories";

const font = Montserrat({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "900"] });

export const metadata: Metadata = {
  title: "A&B LIQUOR | Austin, TX",
  description: "E-commerce site for East Austin's premeir liquor destination",
  icons: {
    icon: "/images/abl_logo.ico"
  }
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const categories = await getCategories();

  return (
    <ClerkProvider>
      <html lang="en">
        <body className={font.className}>
          <ModalProvider />
          <ToastProvider />
          <Navbar2 categories={categories}/>
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
