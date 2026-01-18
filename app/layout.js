import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Jasa Pembuatan Website UMKM - Website Profesional & Terjangkau',
  description:
    'Jasa pembuatan website profesional untuk UMKM. Website cepat, modern, dan terjangkau untuk meningkatkan bisnis Anda. Paket mulai dari Rp 750.000',
  keywords:
    'jasa website, website umkm, pembuatan website, web development, website murah, website toko online',
  authors: [{ name: 'Jasa Website UMKM' }],

  // 🔑 Google Search Console Verification
  verification: {
    google: 'vQf-gqMeo-iT1oD03IpnFSNRUwJpVOfSJUTEASLKbYo',
  },

  openGraph: {
    title: 'Jasa Pembuatan Website UMKM - Website Profesional & Terjangkau',
    description:
      'Website cepat, modern, dan terjangkau untuk meningkatkan bisnis Anda',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
