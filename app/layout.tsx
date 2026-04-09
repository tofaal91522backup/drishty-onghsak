import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";

// Sans font (main UI font)
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Drishti - Smart Canes for the Visually Impaired",
  description:
    "Drishti builds innovative assistive technology with smart canes that empower the visually impaired to navigate the world with confidence and independence.",
  keywords: [
    "assistive technology",
    "smart cane",
    "visually impaired",
    "blind navigation",
    "accessibility",
  ],
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
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
        {children}
      </body>
    </html>
  );
}
