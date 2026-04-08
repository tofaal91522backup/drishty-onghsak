import type { Metadata, Viewport } from 'next'
import { DM_Serif_Display, Plus_Jakarta_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const dmSerif = DM_Serif_Display({ 
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dm-serif",
});

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: 'Drishti - Smart Canes for the Visually Impaired',
  description: 'Drishti builds innovative assistive technology with smart canes that empower the visually impaired to navigate the world with confidence and independence.',
  keywords: ['assistive technology', 'smart cane', 'visually impaired', 'blind navigation', 'accessibility'],
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0B1A2E',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${plusJakarta.variable}`}>
      <body className="font-sans antialiased bg-cream text-navy">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
