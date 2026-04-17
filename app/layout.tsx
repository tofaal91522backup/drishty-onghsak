import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import NextTopLoader from "nextjs-toploader";

import "./globals.css";
import ScrollToTop from "@/components/ui/ScrollToTop";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

// Sans font (main UI font)
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Drishti",
  description:
    "Drishti builds innovative assistive technology with smart canes that empower the visually impaired to navigate the world with confidence and independence.",
  keywords: [
    "Ongshak",
    "assistive technology",
    "smart cane",
    "visually impaired",
    "blind navigation",
    "accessibility",
  ],
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#0B1A2E",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body className=" antialiased bg-cream text-navy">
        <Navbar />
        {children}
        <section id="contact">
          <Footer />
        </section>
        <NextTopLoader showSpinner={false} color="#ed8c2f" />
        <ScrollToTop />
      </body>
    </html>
  );
}
