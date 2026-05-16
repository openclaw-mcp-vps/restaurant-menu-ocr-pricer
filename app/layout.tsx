import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MenuSpy – Scan Competitor Menus & Track Pricing Changes',
  description: 'OCR-scan restaurant menu photos to extract prices and get alerts when competitors change pricing. Stay ahead with real-time menu intelligence.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="62c819a4-d02f-4149-b7a2-fcab1706b10d"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  )
}
