import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ShopProvider } from "@/context/ShopContext";
import Header from "@/components/desktop and laptop/common/Header";
import MobileHeader from "@/components/mobile and tab/common/MobileHeader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "AksCart - Premium E-commerce",
  description: "Experience the best of fashion and lifestyle.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased pb-50`}
      >
        <ShopProvider>
          <Header />
          <MobileHeader />
          {children}
        </ShopProvider>
      </body>
    </html>
  );
}
