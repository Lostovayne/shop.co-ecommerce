import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../app/globals.css";
import { Footer, NavbarDesktop, NavbarMobile, OfferBar } from "./_components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shop.co",
  description: "Tienda de ropa para jovenes y adultos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <OfferBar />
        {/* Desktop */}
        <div className="xl:block hidden">
          <NavbarDesktop />
        </div>
        {/* Mobile */}
        <div className="block xl:hidden">
          <NavbarMobile />
        </div>
        {children}
        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
