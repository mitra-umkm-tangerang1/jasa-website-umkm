'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle2, Menu, X, Phone, Mail, MapPin, ArrowRight, Code, Smartphone, Zap, Shield, TrendingUp, Users } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState('home')

  const whatsappNumber = '6285718539571'
  const whatsappLink = `https://wa.me/${whatsappNumber}`

  const navigation = [
    { name: 'Beranda', page: 'home' },
    { name: 'Layanan & Harga', page: 'services' },
    { name: 'Portfolio', page: 'portfolio' },
    { name: 'Tentang Kami', page: 'about' },
    { name: 'Kontak', page: 'contact' },
  ]

  const pricingPackages = [
    {
      name: 'Paket Basic',
      price: 'Rp 750.000',
      features: [
        '3 halaman',
        'Responsive',
        'WhatsApp button',
        'Google Maps',
        'Revisi 2x'
      ]
    },
    {
      name: 'Paket Standard',
      price: 'Rp 1.500.000',
      features: [
        '6 halaman',
        'Desain profesional',
        'SEO dasar',
        'Form kontak',
        'Domain & hosting 1 tahun',
        'Revisi 3x'
      ],
      popular: true
    },
    {
      name: 'Paket Premium',
      price: 'Rp 3.000.000',
      features: [
        'Unlimited halaman',
        'Toko online',
        'Payment gateway',
        'SEO lanjutan',
        'Panel admin',
        'Domain & hosting 1 tahun',
        'Revisi 5x'
      ]
    }
  ]

  const portfolioItems = [
    {
      title: 'Toko Online Fashion',
      category: 'E-Commerce',
      description: 'Website toko online dengan payment gateway dan sistem inventory'
    },
    {
      title: 'Restoran Modern',
      category: 'F&B',
      description: 'Website restoran dengan menu digital dan sistem pemesanan online'
    },
    {
      title: 'Klinik Kesehatan',
      category: 'Healthcare',
      description: 'Website klinik dengan sistem booking appointment dan artikel kesehatan'
    },
    {
      title: 'Bengkel Otomotif',
      category: 'Automotive',
      description: 'Website bengkel dengan katalog layanan dan booking servis'
    },
    {
      title: 'Salon & Spa',
      category: 'Beauty',
      description: 'Website salon dengan galeri treatment dan booking online'
    },
    {
      title: 'Konsultan Bisnis',
      category: 'Consulting',
      description: 'Website profesional dengan portfolio layanan dan testimoni klien'
    }
  ]

  const features = [
    {
      icon: Code,
      title: 'Desain Modern',
      description: 'Desain website yang menarik dan mengikuti tren terkini'
    },
    {
      icon: Smartphone,
      title: 'Mobile Friendly',
      description: 'Tampilan sempurna di semua perangkat mobile dan tablet'
    },
    {
      icon: Zap,
      title: 'Loading Cepat',
      description: 'Optimasi performa untuk loading time yang super cepat'
    },
    {
      icon: Shield,
      title: 'Aman & Terpercaya',
      description: 'Keamanan website terjamin dengan SSL certificate'
    },
    {
      icon: TrendingUp,
      title: 'SEO Optimized',
      description: 'Website mudah ditemukan di mesin pencari Google'
    },
    {
      icon: Users,
      title: 'Support 24/7',
      description: 'Tim support siap membantu kapan saja Anda butuhkan'
    }
  ]

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return (
          <div>
            {/* Hero Section */}
            <section className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <Image
                  src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=1920&q=80"
                  alt="Web Development"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="container relative z-10 px-4 py-20">
                <div className="max-w-3xl mx-auto text-center animate-fade-in">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                    Jasa Pembuatan Website Profesional untuk UMKM
                  </h1>
                  <p className="text-xl md:text-2xl mb-8 text-blue-100">
                    Website cepat, modern, dan terjangkau untuk meningkatkan bisnis Anda
                  </p>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                      <Phone className="mr-2 h-5 w-5" />
                      Chat WhatsApp
                    </Button>
                  </a>
                </div>
              </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-gray-50">
              <div className="container px-4 mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Mengapa Memilih Kami?</h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">Kami memberikan solusi website terbaik untuk mengembangkan bisnis UMKM Anda</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {features.map((feature, index) => (
                    <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                      <CardHeader>
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                          <feature.icon className="h-6 w-6 text-blue-600" />
                        </div>
                        <CardTitle className="text-xl">{feature.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">{feature.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-blue-900 text-white">
              <div className="container px-4 mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Siap Membawa Bisnis Anda ke Dunia Digital?</h2>
                <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
                  Konsultasikan kebutuhan website bisnis Anda dengan tim kami sekarang juga
                </p>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                    Konsultasi Gratis
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </div>
            </section>
          </div>
        )

      case 'services':
        return (
          <div>
            {/* Services Hero */}
            <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
              <div className="container px-4 mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Layanan & Harga</h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Pilih paket yang sesuai dengan kebutuhan bisnis Anda. Semua paket sudah termasuk desain profesional dan support teknis.
                </p>
              </div>
            </section>

            {/* Pricing Section */}
            <section className="py-20">
              <div className="container px-4 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  {pricingPackages.map((pkg, index) => (
                    <Card key={index} className={`relative border-2 hover:shadow-2xl transition-all duration-300 ${pkg.popular ? 'border-blue-600 shadow-xl scale-105' : 'border-gray-200'}`}>
                      {pkg.popular && (
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">Paling Populer</span>
                        </div>
                      )}
                      <CardHeader className="text-center pb-8 pt-8">
                        <CardTitle className="text-2xl font-bold mb-2">{pkg.name}</CardTitle>
                        <div className="text-4xl font-bold text-blue-600 mb-4">{pkg.price}</div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3 mb-8">
                          {pkg.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="block">
                          <Button className={`w-full ${pkg.popular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-900 hover:bg-gray-800'}`}>
                            Pilih Paket
                          </Button>
                        </a>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="text-center mt-16">
                  <p className="text-gray-600 mb-6">Butuh paket custom sesuai kebutuhan bisnis Anda?</p>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="lg" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50">
                      Hubungi Kami untuk Penawaran Khusus
                    </Button>
                  </a>
                </div>
              </div>
            </section>
          </div>
        )

      case 'portfolio':
        return (
          <div>
            {/* Portfolio Hero */}
            <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
              <div className="container px-4 mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Portfolio Kami</h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Lihat berbagai website yang telah kami buat untuk berbagai jenis bisnis UMKM di Indonesia
                </p>
              </div>
            </section>

            {/* Portfolio Grid */}
            <section className="py-20">
              <div className="container px-4 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {portfolioItems.map((item, index) => (
                    <Card key={index} className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                      <div className="relative h-48 bg-gradient-to-br from-blue-400 to-blue-600">
                        <Image
                          src="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=800&q=80"
                          alt={item.title}
                          fill
                          className="object-cover opacity-30"
                        />
                        <div className="absolute top-4 right-4">
                          <span className="bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                            {item.category}
                          </span>
                        </div>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-xl">{item.title}</CardTitle>
                        <CardDescription className="text-gray-600">{item.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  ))}
                </div>

                <div className="text-center mt-16">
                  <p className="text-gray-600 mb-6 text-lg">Tertarik untuk menjadi bagian dari portfolio kami?</p>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                      <Phone className="mr-2 h-5 w-5" />
                      Mulai Project Anda
                    </Button>
                  </a>
                </div>
              </div>
            </section>
          </div>
        )

      case 'about':
        return (
          <div>
            {/* About Hero */}
            <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
              <div className="container px-4 mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Tentang Kami</h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Mitra terpercaya untuk solusi digital bisnis UMKM di Indonesia
                </p>
              </div>
            </section>

            {/* About Content */}
            <section className="py-20">
              <div className="container px-4 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                  <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src="https://images.unsplash.com/photo-1599090738077-75d2187fd892?auto=format&fit=crop&w=800&q=80"
                      alt="Tim Profesional"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Siapa Kami?</h2>
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                      Kami adalah tim jasa pembuatan website yang fokus membantu UMKM berkembang secara digital dengan website profesional, cepat, dan terjangkau.
                    </p>
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                      Dengan pengalaman bertahun-tahun di industri web development, kami memahami kebutuhan bisnis kecil dan menengah di Indonesia. Setiap website yang kami buat dirancang khusus untuk meningkatkan kredibilitas bisnis dan menarik lebih banyak pelanggan.
                    </p>
                    <div className="grid grid-cols-2 gap-6 mt-8">
                      <div className="text-center p-6 bg-blue-50 rounded-lg">
                        <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
                        <div className="text-gray-600">Project Selesai</div>
                      </div>
                      <div className="text-center p-6 bg-blue-50 rounded-lg">
                        <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                        <div className="text-gray-600">Klien Puas</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Values Section */}
                <div className="mt-20">
                  <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Nilai-Nilai Kami</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Card className="text-center border-none shadow-lg">
                      <CardHeader>
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Shield className="h-8 w-8 text-blue-600" />
                        </div>
                        <CardTitle>Profesional</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">Kami mengerjakan setiap project dengan standar profesional dan tepat waktu</p>
                      </CardContent>
                    </Card>
                    <Card className="text-center border-none shadow-lg">
                      <CardHeader>
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Users className="h-8 w-8 text-blue-600" />
                        </div>
                        <CardTitle>Customer First</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">Kepuasan klien adalah prioritas utama kami dalam setiap project</p>
                      </CardContent>
                    </Card>
                    <Card className="text-center border-none shadow-lg">
                      <CardHeader>
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <TrendingUp className="h-8 w-8 text-blue-600" />
                        </div>
                        <CardTitle>Inovatif</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">Selalu mengikuti perkembangan teknologi terbaru untuk hasil terbaik</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )

      case 'contact':
        return (
          <div>
            {/* Contact Hero */}
            <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
              <div className="container px-4 mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Hubungi Kami</h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Siap membantu mewujudkan website impian untuk bisnis Anda
                </p>
              </div>
            </section>

            {/* Contact Content */}
            <section className="py-20">
              <div className="container px-4 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                  {/* Contact Info */}
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Mari Bicara Tentang Project Anda</h2>
                    <p className="text-lg text-gray-600 mb-8">
                      Tim kami siap mendengarkan kebutuhan Anda dan memberikan solusi terbaik untuk bisnis Anda. Hubungi kami sekarang untuk konsultasi gratis!
                    </p>

                    <div className="space-y-6">
                      <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
                        <CardContent className="flex items-start p-6">
                          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                            <Phone className="h-6 w-6 text-green-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-2">WhatsApp</h3>
                            <p className="text-gray-600 mb-3">085718539571</p>
                            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                              <Button size="sm" className="bg-green-500 hover:bg-green-600">
                                Chat Sekarang
                              </Button>
                            </a>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="border-none shadow-lg">
                        <CardContent className="flex items-start p-6">
                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                            <Mail className="h-6 w-6 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                            <p className="text-gray-600">info@jasawebsite-umkm.com</p>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="border-none shadow-lg">
                        <CardContent className="flex items-start p-6">
                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                            <MapPin className="h-6 w-6 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-2">Lokasi</h3>
                            <p className="text-gray-600">Jakarta, Indonesia</p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  {/* Contact Image */}
                  <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src="https://images.pexels.com/photos/16053029/pexels-photo-16053029.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Kontak Kami"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent flex items-end">
                      <div className="p-8 text-white">
                        <h3 className="text-2xl font-bold mb-2">Respon Cepat</h3>
                        <p className="text-blue-100">Kami biasanya merespon dalam waktu 1 jam</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Section */}
                <div className="mt-20 text-center">
                  <Card className="border-none shadow-2xl bg-gradient-to-br from-blue-600 to-blue-700 text-white max-w-4xl mx-auto">
                    <CardContent className="p-12">
                      <h3 className="text-3xl font-bold mb-4">Dapatkan Penawaran Terbaik Hari Ini</h3>
                      <p className="text-xl text-blue-100 mb-8">
                        Konsultasi gratis + Diskon 10% untuk 10 klien pertama bulan ini!
                      </p>
                      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold rounded-full shadow-lg">
                          <Phone className="mr-2 h-5 w-5" />
                          Hubungi Sekarang
                        </Button>
                      </a>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <button
                onClick={() => setCurrentPage('home')}
                className="text-xl md:text-2xl font-bold text-blue-900 hover:text-blue-700 transition-colors"
              >
                Jasa Website UMKM
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navigation.map((item) => (
                <button
                  key={item.page}
                  onClick={() => setCurrentPage(item.page)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    currentPage === item.page
                      ? 'bg-blue-100 text-blue-900'
                      : 'text-gray-600 hover:text-blue-900 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="ml-4">
                <Button className="bg-green-500 hover:bg-green-600 text-white">
                  <Phone className="mr-2 h-4 w-4" />
                  WhatsApp
                </Button>
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-600 hover:text-blue-900 p-2"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-4 space-y-2">
              {navigation.map((item) => (
                <button
                  key={item.page}
                  onClick={() => {
                    setCurrentPage(item.page)
                    setMobileMenuOpen(false)
                  }}
                  className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all ${
                    currentPage === item.page
                      ? 'bg-blue-100 text-blue-900'
                      : 'text-gray-600 hover:text-blue-900 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="block">
                <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                  <Phone className="mr-2 h-4 w-4" />
                  WhatsApp
                </Button>
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Page Content */}
      <main>
        {renderPage()}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Jasa Website UMKM</h3>
              <p className="text-gray-400">
                Solusi website profesional dan terjangkau untuk mengembangkan bisnis UMKM Anda
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.page}>
                    <button
                      onClick={() => setCurrentPage(item.page)}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Kontak</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  085718539571
                </li>
                <li className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  info@jasawebsite-umkm.com
                </li>
                <li className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  Jakarta, Indonesia
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Jasa Website UMKM. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 z-50"
        aria-label="Chat WhatsApp"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  )
}