import { 
  Smartphone, 
  MessageSquare, 
  CreditCard, 
  Monitor, 
  Cloud, 
  Zap,
  ShieldCheck,
  Building2,
  School,
  QrCode,
  Radio
} from 'lucide-react';
import { ContactInfo, ContentSection, ProductItem } from './types';

export const COMPANY_NAME = "DIGINOV";
export const COMPANY_FULL_NAME = "Digital Inovatif Nusantara";

export const CONTACT_INFO: ContactInfo = {
  address: "Arkadia Green Park, lt .8 building B, Jl. TB Simatupang No.Kav. 88, Kebagusan, Ps. Minggu, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12520",
  addressLines: [
    "Arkadia Green Park, lt .8 building B",
    "Jl. TB Simatupang No.Kav. 88, Kebagusan",
    "Ps. Minggu, Kota Jakarta Selatan",
    "DKI Jakarta 12520"
  ],
  email: "info@diginov.co.id",
  phone: "081776777168"
};

const PRODUCTS_LIST: ProductItem[] = [
  { id: 'p1', title: 'SMS Bulk, Notifikasi dan OTP', icon: MessageSquare },
  { id: 'p2', title: 'SMS Banking / SMS Potong Pulsa', icon: Smartphone },
  { id: 'p3', title: 'Chatbot & AI', icon: Zap },
  { id: 'p4', title: 'Digital Banking Application', icon: Building2 },
  { id: 'p5', title: 'Digital MPOS', icon: CreditCard },
  { id: 'p6', title: 'Whatsapp Business API', icon: MessageSquare },
  { id: 'p7', title: 'Sound Box System Devices', icon: Radio },
  { id: 'p8', title: 'Ekosistem Desa Digital', icon: Cloud },
  { id: 'p9', title: 'Aplikasi Monitoring Pajak Daerah', icon: Monitor },
  { id: 'p10', title: 'Aplikasi PPOB', icon: CreditCard },
  { id: 'p11', title: 'Aplikasi Sekolah', icon: School },
  { id: 'p12', title: 'EDC Purchase & Mini ATM', icon: CreditCard },
  { id: 'p13', title: 'EDC Retribusi', icon: CreditCard },
  { id: 'p14', title: 'Sistem Pembayaran QRIS', icon: QrCode },
  { id: 'p15', title: 'EDC dan Pinpad', icon: CreditCard },
];

export const CONTENT: Record<'id' | 'en', ContentSection> = {
  id: {
    nav: [
      { label: 'Home', href: '#home' },
      { label: 'Tentang Kami', href: '#about' },
      { label: 'Kelebihan', href: '#features' },
      { label: 'Produk', href: '#products' },
      { label: 'Kontak', href: '#contact' },
    ],
    hero: {
      tagline: "Digital Inovatif Nusantara",
      titleStart: "Integrasikan Bisnismu",
      titleEnd: "Bersama DIGINOV",
      description: "Kami adalah perusahaan penyedia layanan digital yang memadukan teknologi terkini dengan pemahaman mendalam terhadap kebutuhan industri keuangan.",
      ctaPrimary: "Coba Sekarang",
      ctaSecondary: "Lihat Produk",
      status: "Sistem Optimal"
    },
    about: {
      label: "Tentang Kami",
      title: `Mengenal Lebih Dekat ${COMPANY_FULL_NAME}`,
      description: "DIGITAL INOVATIF NUSANTARA (DIGINOV) adalah perusahaan teknologi yang berfokus pada pengembangan solusi inovatif di bidang perbankan digital. Kami menghadirkan produk dan layanan yang memadukan teknologi terkini dengan pemahaman mendalam terhadap kebutuhan industri keuangan.",
      stats: {
        products: "Produk Digital",
        support: "Support System"
      },
      visionTitle: "Visi Kami",
      vision: "Menjadi mitra terpercaya dalam transformasi digital Indonesia, mendorong pertumbuhan ekonomi, inovasi, dan kesejahteraan masyarakat melalui solusi digital yang berkelanjutan dan berdampak.",
      missionTitle: "Misi Kami",
      mission: [
        "Mendukung ekosistem digital dalam segala lini bidang industri.",
        "Menyediakan digital solution dalam menunjang bisnis serta aktifitas dan menghadirkan Artificial Intelegence dalam prosesnya.",
        "Menyediakan solusi digital untuk mengembangkan layanan digital yang inovatif, aman dan handal untuk memenuhi kebutuhan pelanggan di berbagai sektor industri.",
        "Berperan dalam Ekosistem Digital Nasional serta bekerja sama dengan pemerintah, komunitas dan pelaku industri untuk mendorong percepatan adopsi teknologi digital dan mendukung agenda transformasi digital Indonesia.",
        "Mengedepankan keberlanjutan dan Inovasi serta mengintegrasikan praktik keberlanjutan dalam pengembangan teknologi."
      ],
      readMore: "Lihat selengkapnya..."
    },
    features: {
      label: "Mengapa Memilih Kami",
      title: "Kelebihan Produk Kami",
      items: [
        {
          id: 'f1',
          title: 'Pantau dengan Mudah,',
          subtitle: 'Kendalikan dengan Cerdas',
          description: 'Optimalkan kinerja layanan Anda dengan fitur Monitoring Real-Time.',
          details: [
            'Memantau data secara langsung kapan saja, di mana saja.',
            'Mendeteksi anomali lebih cepat, sebelum menjadi masalah.',
            'Mengambil keputusan berbasis data dengan laporan yang terperinci dan akurat.'
          ],
          icon: Monitor
        },
        {
          id: 'f2',
          title: 'Integrasi Cerdas,',
          subtitle: 'Langsung ke Cloud',
          description: 'Transformasi digital Anda dimulai di sini! Dengan layanan Integrasi Sistem ke Cloud.',
          details: [
            'Kemudahan Sinkronisasi: Hubungkan sistem Anda dengan cloud dalam hitungan detik.',
            'Akses Fleksibel: Pantau dan kelola data dari mana saja, kapan saja.',
            'Keamanan Optimal: Perlindungan data canggih untuk menjaga privasi bisnis Anda.'
          ],
          icon: Cloud
        },
        {
          id: 'f3',
          title: 'Kemudahan dalam',
          subtitle: 'Genggaman Anda',
          description: 'Kami memahami pentingnya pengalaman pengguna yang praktis dan nyaman.',
          details: [
            'Antarmuka Simpel: Dirancang intuitif, bahkan untuk pemula.',
            'Navigasi Cepat: Temukan semua yang Anda butuhkan hanya dalam beberapa klik.',
            'Tanpa Kerumitan: Fitur lengkap, tanpa proses yang rumit.'
          ],
          icon: Smartphone
        },
        {
          id: 'f4',
          title: 'Sistem Baru,',
          subtitle: 'Teknologi Lebih Maju',
          description: 'Sistem terbaru kami didukung teknologi terkini untuk mempermudah pekerjaan Anda.',
          details: [
            'Otomasi Pintar: Kurangi pekerjaan manual dengan teknologi yang bekerja untuk Anda.',
            'Kinerja Lebih Cepat: Pemrosesan data yang efisien, hemat waktu dan tenaga.',
            'Keamanan Maksimal: Melindungi data Anda dengan standar teknologi terbaru.'
          ],
          icon: ShieldCheck
        }
      ]
    },
    products: {
      label: "Layanan Kami",
      title: "Ekosistem Solusi Digital",
      description: "Rangkaian produk komprehensif untuk mendukung transformasi digital bisnis Anda.",
      items: PRODUCTS_LIST
    },
    gallery: {
      label: "Dokumentasi",
      title: "Galeri Produk & Aktivitas",
      description: "Lihat bagaimana solusi kami diterapkan dalam berbagai skenario bisnis."
    },
    contact: {
      label: "Kontak Kami",
      titleStart: "Mari Mulai",
      titleEnd: "Kolaborasi",
      description: "Tim kami siap membantu Anda menemukan solusi digital terbaik untuk kebutuhan bisnis Anda.",
      locationTitle: "Lokasi Kantor",
      phoneTitle: "Telepon",
      emailTitle: "Email",
      formTitle: "Kirim Pesan",
      success: "Pesan terkirim! Kami akan menghubungi Anda segera.",
      form: {
        name: "Masukan nama anda",
        email: "Masukan email anda",
        subject: "Masukan subjek pesan",
        message: "Tulis pesan anda di sini",
        btn: "Kirim Pesan",
        sending: "Mengirim..."
      }
    },
    footer: {
      navTitle: "Navigasi",
      productsTitle: "Produk Unggulan",
      rights: "All rights reserved.",
      more: "Lihat Selengkapnya..."
    }
  },
  en: {
    nav: [
      { label: 'Home', href: '#home' },
      { label: 'About Us', href: '#about' },
      { label: 'Features', href: '#features' },
      { label: 'Products', href: '#products' },
      { label: 'Contact', href: '#contact' },
    ],
    hero: {
      tagline: "Digital Innovative Nusantara",
      titleStart: "Integrate Your Business",
      titleEnd: "With DIGINOV",
      description: "We are a digital service provider that combines the latest technology with a deep understanding of the financial industry's needs.",
      ctaPrimary: "Try Now",
      ctaSecondary: "View Products",
      status: "System Optimal"
    },
    about: {
      label: "About Us",
      title: `Get to Know ${COMPANY_FULL_NAME}`,
      description: "DIGITAL INOVATIF NUSANTARA (DIGINOV) is a technology company focused on developing innovative solutions in digital banking. We provide products and services that combine the latest technology with a deep understanding of financial industry needs.",
      stats: {
        products: "Digital Products",
        support: "Support System"
      },
      visionTitle: "Our Vision",
      vision: "To become a trusted partner in Indonesia's digital transformation, driving economic growth, innovation, and community welfare through sustainable and impactful digital solutions.",
      missionTitle: "Our Mission",
      mission: [
        "Support the digital ecosystem across all industrial sectors.",
        "Provide digital solutions to support business and activities while integrating Artificial Intelligence in the process.",
        "Provide digital solutions to develop innovative, safe, and reliable digital services to meet customer needs in various industrial sectors.",
        "Play a role in the National Digital Ecosystem and collaborate with the government, communities, and industry players to accelerate digital technology adoption.",
        "Prioritize sustainability and Innovation while integrating sustainable practices in technology development."
      ],
      readMore: "Read more..."
    },
    features: {
      label: "Why Choose Us",
      title: "Our Product Advantages",
      items: [
        {
          id: 'f1',
          title: 'Monitor with Ease,',
          subtitle: 'Control Smartly',
          description: 'Optimize your service performance with Real-Time Monitoring features.',
          details: [
            'Monitor data directly anytime, anywhere.',
            'Detect anomalies faster, before they become problems.',
            'Make data-driven decisions with detailed and accurate reports.'
          ],
          icon: Monitor
        },
        {
          id: 'f2',
          title: 'Smart Integration,',
          subtitle: 'Direct to Cloud',
          description: 'Your digital transformation starts here! With System Integration to Cloud services.',
          details: [
            'Easy Synchronization: Connect your system to the cloud in seconds.',
            'Flexible Access: Monitor and manage data from anywhere, anytime.',
            'Optimal Security: Advanced data protection to maintain your business privacy.'
          ],
          icon: Cloud
        },
        {
          id: 'f3',
          title: 'Convenience in',
          subtitle: 'Your Hand',
          description: 'We understand the importance of a practical and comfortable user experience.',
          details: [
            'Simple Interface: Designed intuitively, even for beginners.',
            'Fast Navigation: Find everything you need in just a few clicks.',
            'No Hassle: Complete features without complicated processes.'
          ],
          icon: Smartphone
        },
        {
          id: 'f4',
          title: 'New System,',
          subtitle: 'Advanced Technology',
          description: 'Our latest system is supported by the latest technology to make your work easier.',
          details: [
            'Smart Automation: Reduce manual work with technology that works for you.',
            'Faster Performance: Efficient data processing, saving time and energy.',
            'Maximum Security: Protecting your data with the latest technology standards.'
          ],
          icon: ShieldCheck
        }
      ]
    },
    products: {
      label: "Our Services",
      title: "Digital Solution Ecosystem",
      description: "A comprehensive range of products to support your business digital transformation.",
      items: PRODUCTS_LIST
    },
    gallery: {
      label: "Documentation",
      title: "Product & Activity Gallery",
      description: "See how our solutions are applied in various business scenarios."
    },
    contact: {
      label: "Contact Us",
      titleStart: "Let's Start",
      titleEnd: "Collaborating",
      description: "Our team is ready to help you find the best digital solutions for your business needs.",
      locationTitle: "Office Location",
      phoneTitle: "Phone",
      emailTitle: "Email",
      formTitle: "Send a Message",
      success: "Message sent! We will contact you shortly.",
      form: {
        name: "Enter your name",
        email: "Enter your email",
        subject: "Enter message subject",
        message: "Write your message here",
        btn: "Send Message",
        sending: "Sending..."
      }
    },
    footer: {
      navTitle: "Navigation",
      productsTitle: "Featured Products",
      rights: "All rights reserved.",
      more: "View More..."
    }
  }
};
