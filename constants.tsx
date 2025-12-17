
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
  Radio,
  FileText,
  ClipboardCheck,
  Beaker,
  Tag,
  Layout,
  History,
  HardDrive,
  FileBadge2
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
      description: "Penyedia layanan digital yang memadukan teknologi terkini dengan pemahaman mendalam terhadap kebutuhan industri keuangan dan transformasi digital.",
      ctaPrimary: "Hubungi Kami",
      ctaSecondary: "Lihat Produk",
      status: "Sistem Optimal"
    },
    about: {
      label: "Tentang Kami",
      title: `Mengenal Lebih Dekat ${COMPANY_FULL_NAME}`,
      description: "DIGITAL INOVATIF NUSANTARA (DIGINOV) adalah perusahaan teknologi yang berfokus pada pengembangan solusi inovatif di bidang perbankan digital. Kami menghadirkan produk dan layanan yang memadukan teknologi terkini dengan pemahaman mendalam terhadap kebutuhan industri keuangan.",
      stats: {
        products: "Produk Digital",
        support: "Dukungan 24/7"
      },
      visionTitle: "Visi Kami",
      vision: "Menjadi mitra terpercaya dalam transformasi digital Indonesia, mendorong pertumbuhan ekonomi melalui solusi digital yang berkelanjutan and berdampak.",
      missionTitle: "Misi Kami",
      mission: [
        "Mendukung ekosistem digital dalam segala lini bidang industri.",
        "Menyediakan solusi digital cerdas dengan integrasi Artificial Intelligence.",
        "Menghadirkan layanan yang inovatif, aman, dan handal untuk berbagai sektor.",
        "Mendorong percepatan adopsi teknologi digital secara nasional.",
        "Mengedepankan praktik keberlanjutan dalam pengembangan teknologi."
      ],
      readMore: "Selengkapnya..."
    },
    features: {
      label: "Kelebihan",
      title: "Mengapa Diginov?",
      items: [
        {
          id: 'f1',
          title: 'Pantau Real-Time,',
          subtitle: 'Kendali Penuh',
          description: 'Optimalkan kinerja layanan Anda dengan fitur pemantauan data secara langsung.',
          details: [
            'Pemantauan data secara real-time kapan saja.',
            'Deteksi dini anomali sistem.',
            'Laporan analitik yang akurat untuk keputusan bisnis.'
          ],
          icon: Monitor
        },
        {
          id: 'f2',
          title: 'Integrasi Cloud,',
          subtitle: 'Skalabilitas Tinggi',
          description: 'Transformasi infrastruktur Anda dengan integrasi sistem cloud yang aman.',
          details: [
            'Sinkronisasi data otomatis ke cloud.',
            'Keamanan data standar perbankan.',
            'Akses data fleksibel dari berbagai perangkat.'
          ],
          icon: Cloud
        },
        {
          id: 'f3',
          title: 'User Experience,',
          subtitle: 'Simpel & Modern',
          description: 'Desain antarmuka yang intuitif untuk kenyamanan pengguna maksimal.',
          details: [
            'Navigasi cepat dan efisien.',
            'Tampilan responsif di semua perangkat.',
            'Kemudahan penggunaan tanpa pelatihan rumit.'
          ],
          icon: Smartphone
        },
        {
          id: 'f4',
          title: 'Teknologi AI,',
          subtitle: 'Otomasi Cerdas',
          description: 'Manfaatkan kecerdasan buatan untuk efisiensi operasional bisnis Anda.',
          details: [
            'Otomasi tugas rutin yang cerdas.',
            'Pemrosesan data skala besar dengan AI.',
            'Keamanan sistem berbasis perilaku pengguna.'
          ],
          icon: ShieldCheck
        }
      ]
    },
    products: {
      label: "Produk Kami",
      title: "Solusi Digital Terintegrasi",
      description: "Ekosistem layanan komprehensif untuk mendukung digitalisasi industri keuangan dan bisnis Anda.",
      items: PRODUCTS_LIST
    },
    gallery: {
      label: "Galeri",
      title: "Aktivitas & Implementasi",
      description: "Dokumentasi penerapan solusi digital Diginov di berbagai sektor industri."
    },
    contact: {
      label: "Kontak",
      titleStart: "Mulai Transformasi",
      titleEnd: "Sekarang",
      description: "Konsultasikan kebutuhan digital bisnis Anda dengan tim ahli kami.",
      locationTitle: "Alamat Kantor",
      phoneTitle: "Hubungi Kami",
      emailTitle: "Email Resmi",
      formTitle: "Kirim Pesan",
      success: "Pesan Anda telah kami terima!",
      form: {
        name: "Nama Lengkap",
        email: "Alamat Email",
        subject: "Subjek",
        message: "Pesan Anda",
        btn: "Kirim Sekarang",
        sending: "Mengirim..."
      }
    },
    footer: {
      navTitle: "Tautan Cepat",
      productsTitle: "Layanan Populer",
      rights: "Semua hak dilindungi.",
      more: "Produk Lainnya..."
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
      description: "A digital service provider combining cutting-edge technology with deep insights into financial industry needs.",
      ctaPrimary: "Contact Us",
      ctaSecondary: "Our Products",
      status: "System Optimal"
    },
    about: {
      label: "About Us",
      title: `Know More About ${COMPANY_NAME}`,
      description: "DIGINOV is a tech company specializing in digital banking innovation. We deliver services that blend modern technology with a profound understanding of fintech requirements.",
      stats: {
        products: "Digital Products",
        support: "24/7 Support"
      },
      visionTitle: "Our Vision",
      vision: "To be the most trusted partner in Indonesia's digital transformation journey.",
      missionTitle: "Our Mission",
      mission: [
        "Supporting digital ecosystems across all industries.",
        "Providing smart solutions with AI integration.",
        "Delivering secure and reliable services.",
        "Accelerating digital adoption nationwide.",
        "Prioritizing sustainability in innovation."
      ],
      readMore: "Read More..."
    },
    features: {
      label: "Features",
      title: "Why Diginov?",
      items: [
        {
          id: 'f1',
          title: 'Real-Time Monitoring,',
          subtitle: 'Full Control',
          description: 'Optimize your services with live data monitoring capabilities.',
          details: [
            'Live data tracking anytime.',
            'Early system anomaly detection.',
            'Accurate analytic reports for business.'
          ],
          icon: Monitor
        },
        {
          id: 'f2',
          title: 'Cloud Integration,',
          subtitle: 'High Scalability',
          description: 'Transform your infrastructure with secure cloud system integration.',
          details: [
            'Automatic cloud data sync.',
            'Bank-grade data security.',
            'Flexible data access anywhere.'
          ],
          icon: Cloud
        },
        {
          id: 'f3',
          title: 'User Experience,',
          subtitle: 'Simple & Modern',
          description: 'Intuitive interface design for maximum user convenience.',
          details: [
            'Fast and efficient navigation.',
            'Responsive displays across devices.',
            'Ease of use without complex training.'
          ],
          icon: Smartphone
        },
        {
          id: 'f4',
          title: 'AI Technology,',
          subtitle: 'Smart Automation',
          description: 'Leverage artificial intelligence for your business operational efficiency.',
          details: [
            'Smart routine task automation.',
            'Large-scale data processing with AI.',
            'Behavior-based system security.'
          ],
          icon: ShieldCheck
        }
      ]
    },
    products: {
      label: "Products",
      title: "Integrated Solutions",
      description: "A comprehensive ecosystem to support your business digital transformation.",
      items: PRODUCTS_LIST
    },
    gallery: {
      label: "Gallery",
      title: "Documentation",
      description: "Visualizing Diginov solutions in various business scenarios."
    },
    contact: {
      label: "Contact",
      titleStart: "Start Your",
      titleEnd: "Transformation",
      description: "Consult your digital business needs with our expert team.",
      locationTitle: "Office Address",
      phoneTitle: "Call Us",
      emailTitle: "Official Email",
      formTitle: "Send Message",
      success: "Message received!",
      form: {
        name: "Full Name",
        email: "Email Address",
        subject: "Subject",
        message: "Your Message",
        btn: "Send Now",
        sending: "Sending..."
      }
    },
    footer: {
      navTitle: "Quick Links",
      productsTitle: "Top Services",
      rights: "All rights reserved.",
      more: "More Products..."
    }
  }
};

/**
 * Fix: Requirements for Fertilizer & Pesticide Registration
 * Added missing exported constants REGISTRATION_REQUIREMENTS and TOOLTIP_DATA
 */
export const REGISTRATION_REQUIREMENTS = {
  admin: [
    { id: 'a1', label: 'NIB / IUI', icon: FileBadge2 },
    { id: 'a2', label: 'Sertifikat Merek', icon: Tag },
    { id: 'a3', label: 'Akta Perusahaan', icon: FileText },
    { id: 'a4', label: 'NPWP Perusahaan', icon: ClipboardCheck },
  ],
  technical: [
    { id: 't1', label: 'Hasil Analisa LHP', icon: Beaker },
    { id: 't2', label: 'Uji Efektivitas', icon: History },
    { id: 't3', label: 'Rancangan Label', icon: Layout },
    { id: 't4', label: 'MSDS / Safety Sheet', icon: HardDrive },
  ]
};

/**
 * Fix: Tooltip data for registration requirements mapping
 */
export const TOOLTIP_DATA = {
  admin: {
    'NIB / IUI': 'Nomor Induk Berusaha atau Izin Usaha Industri yang masih berlaku.',
    'Sertifikat Merek': 'Bukti pendaftaran atau sertifikat merek dari DJKI.',
    'Akta Perusahaan': 'Salinan akta pendirian dan perubahan terakhir perusahaan.',
    'NPWP Perusahaan': 'Nomor Pokok Wajib Pajak atas nama badan usaha.'
  },
  technical: {
    'Hasil Analisa LHP': 'Laporan hasil pengujian kandungan unsur hara atau bahan aktif.',
    'Uji Efektivitas': 'Data pengujian lapangan terhadap tanaman target.',
    'Rancangan Label': 'Desain visual kemasan sesuai peraturan kementerian.',
    'MSDS / Safety Sheet': 'Dokumen keselamatan bahan kimia dan penanganan limbah.'
  }
};
