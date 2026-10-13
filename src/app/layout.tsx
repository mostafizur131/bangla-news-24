import type { Metadata } from "next";
import { Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Marquee from "@/components/Marquee";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";

const notoSerifBengali = Noto_Serif_Bengali({
  subsets: ["latin", "bengali"],
});
export const metadata: Metadata = {
  title: "Bangla News 24",
  description:
    "Bangla News 24 is a leading online news portal in Bangladesh, providing the latest news, updates, and information on various topics including politics, sports, entertainment, and more. Stay informed with our comprehensive coverage of national and international events.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${notoSerifBengali.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <Marquee />
        <main className="max-w-7xl mx-auto"> {children}</main>
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}
