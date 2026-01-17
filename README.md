# Jasa Pembuatan Website UMKM

Website profesional untuk jasa pembuatan website UMKM di Indonesia. Dibangun dengan Next.js 14, Tailwind CSS, dan shadcn/ui.

## 🚀 Fitur

- **5 Halaman Lengkap**: Home, Layanan & Harga, Portfolio, Tentang Kami, Kontak
- **Responsive Design**: Tampilan sempurna di desktop, tablet, dan mobile
- **WhatsApp Integration**: Tombol WhatsApp terintegrasi di seluruh halaman
- **SEO Optimized**: Metadata lengkap untuk mesin pencari
- **Modern UI**: Desain profesional dengan animasi smooth
- **Fast Loading**: Optimasi performa untuk loading cepat

## 📋 Paket Layanan

### Paket Basic - Rp 750.000
- 3 halaman
- Responsive
- WhatsApp button
- Google Maps
- Revisi 2x

### Paket Standard - Rp 1.500.000
- 6 halaman
- Desain profesional
- SEO dasar
- Form kontak
- Domain & hosting 1 tahun
- Revisi 3x

### Paket Premium - Rp 3.000.000
- Unlimited halaman
- Toko online
- Payment gateway
- SEO lanjutan
- Panel admin
- Domain & hosting 1 tahun
- Revisi 5x

## 🛠️ Teknologi

- **Framework**: Next.js 14.2.3
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)
- **Language**: JavaScript/React

## 📦 Instalasi

### Prerequisites
- Node.js 18+ atau 20+
- npm atau yarn

### Setup Lokal

1. Clone repository:
```bash
git clone <repository-url>
cd app
```

2. Install dependencies:
```bash
yarn install
# atau
npm install
```

3. Jalankan development server:
```bash
yarn dev
# atau
npm run dev
```

4. Buka browser ke [http://localhost:3000](http://localhost:3000)

## 🌐 Deploy ke Vercel

### Metode 1: Melalui Vercel Dashboard (Recommended)

1. **Push kode ke GitHub/GitLab/Bitbucket**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Import ke Vercel**
   - Buka [vercel.com](https://vercel.com)
   - Klik "Add New Project"
   - Import repository GitHub Anda
   - Vercel akan otomatis mendeteksi Next.js

3. **Configure Project**
   - Root Directory: `./` (atau `app` jika struktur folder berbeda)
   - Build Command: `yarn build` (default)
   - Output Directory: `.next` (default)
   - Install Command: `yarn install` (default)

4. **Deploy**
   - Klik "Deploy"
   - Tunggu proses build selesai (2-3 menit)
   - Website Anda akan live di `your-project.vercel.app`

### Metode 2: Melalui Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login ke Vercel:
```bash
vercel login
```

3. Deploy:
```bash
cd /app
vercel
```

4. Ikuti prompt interaktif:
   - Setup and deploy: Yes
   - Which scope: Pilih account Anda
   - Link to existing project: No
   - Project name: (enter atau gunakan default)
   - Directory: `./`
   - Override settings: No

5. Untuk production deployment:
```bash
vercel --prod
```

## 🔧 Kustomisasi

### Mengubah Nomor WhatsApp

Edit file `/app/app/page.js`:
```javascript
const whatsappNumber = '6285718539571' // Ganti dengan nomor Anda
```

### Mengubah Warna Brand

Edit file `/app/app/globals.css` pada section `:root`:
```css
--primary: 221.2 83.2% 53.3%; /* Warna utama */
```

### Mengubah Konten

Semua konten dapat diubah di file `/app/app/page.js`:
- Hero section text
- Pricing packages
- Portfolio items
- About us content
- Contact information

### Menambah/Mengurangi Paket Harga

Edit array `pricingPackages` di `/app/app/page.js`:
```javascript
const pricingPackages = [
  {
    name: 'Paket Baru',
    price: 'Rp X.XXX.XXX',
    features: ['Fitur 1', 'Fitur 2', ...],
    popular: true // optional
  }
]
```

## 📱 WhatsApp Integration

WhatsApp link format yang digunakan:
```
https://wa.me/6285718539571
```

Format nomor:
- Gunakan kode negara (62 untuk Indonesia)
- Hilangkan angka 0 di depan
- Contoh: 0857-1853-9571 → 6285718539571

## 🎨 Desain

### Color Scheme
- **Primary**: Dark Blue (#1e40af)
- **Background**: White (#ffffff)
- **Accent**: Light Gray (#f3f4f6)
- **Success**: Green (#10b981) - untuk WhatsApp button

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: Bold, 2xl-6xl
- **Body**: Regular, base-lg

## 📊 SEO

Website sudah dilengkapi dengan:
- Meta title dan description
- Open Graph tags
- Semantic HTML
- Proper heading hierarchy
- Alt text untuk gambar

## 🔍 Testing

### Test Lokal
```bash
yarn dev
```

### Build Production
```bash
yarn build
yarn start
```

### Lint Check
```bash
yarn lint
```

## 📞 Support

Untuk pertanyaan atau support:
- **WhatsApp**: 085718539571
- **Email**: info@jasawebsite-umkm.com
- **Lokasi**: Jakarta, Indonesia

## 📝 License

© 2025 Jasa Website UMKM. All rights reserved.

## 🚀 Post-Deployment Checklist

Setelah deploy, pastikan:
- [ ] Semua halaman dapat diakses
- [ ] WhatsApp button berfungsi
- [ ] Responsive di mobile
- [ ] Gambar loading dengan baik
- [ ] SEO metadata terisi
- [ ] Custom domain terhubung (jika ada)
- [ ] Analytics terinstal (optional)

## 🎯 Next Steps

Untuk meningkatkan website:
1. **Custom Domain**: Hubungkan domain sendiri di Vercel
2. **Analytics**: Install Google Analytics atau Vercel Analytics
3. **Form**: Tambahkan form kontak dengan backend
4. **Blog**: Tambahkan section blog untuk SEO
5. **CMS**: Integrate dengan CMS (Sanity, Contentful) untuk update konten mudah
6. **Performance**: Monitor dengan Lighthouse dan optimize lebih lanjut

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Deployment Guide](https://vercel.com/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com)
