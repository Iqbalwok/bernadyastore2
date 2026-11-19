const fs = require('fs');
const path = require('path');

// 24 Products Complete Dataset
const products = [
  // 1. Canva Pro
  {
    slug: 'canva-pro',
    name: 'Canva Pro',
    category: 'creative-design',
    categoryLabel: 'Creative & Design',
    appColor: '#00C4CC',
    badge: 'Terpopuler',
    badgeClass: 'badge-amber',
    tagline: 'Platform desain grafis intuitif dengan jutaan aset premium, penghapus latar belakang AI, dan kolaborasi tim.',
    tags: 'desain grafis poster instagram banner presentasi ai magic studio canva pro',
    platforms: ['Android', 'iOS', 'Windows', 'macOS', 'Web Browser'],
    svg: `<svg width="36" height="36" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="10" fill="#00C4CC"/><path d="M26.2 31.8c-4.2 0-7.3-3.1-7.3-7.8 0-5.2 3.8-9 9.3-9 3.2 0 5.4 1.4 6.2 3.7l-3.3 1.4c-.5-1.3-1.6-2-2.9-2-3 0-5 2.5-5 5.8 0 3 1.8 4.9 4.3 4.9 1.7 0 3-.9 3.6-2.2l3.2 1.5c-1.2 2.3-3.8 3.7-8.2 3.7z" fill="#FFFFFF"/></svg>`,
    fullDesc1: 'Canva Pro adalah platform desain grafis berbasis web dan aplikasi yang dirancang untuk memudahkan siapa saja menciptakan visual profesional dalam hitungan menit. Dengan akses ke lebih dari 100 juta foto, grafis, video, dan trek audio stok, pengguna dapat merancang presentasi, postingan media sosial, infografis, hingga materi cetak tanpa membutuhkan keahlian desain tingkat lanjut.',
    fullDesc2: 'Fitur Magic Switch dan AI Background Remover memangkas waktu produksi konten secara dramatis, memungkinkan tim dan kreator solo bekerja secepat agensi desain papan atas.',
    features: [
      'Akses tak terbatas ke 100+ juta foto, grafis, video, dan audio premium.',
      'Magic Resize untuk mengubah ukuran desain instan ke berbagai format media.',
      'Penghapus latar belakang otomatis (Background Remover) berbasis kecerdasan buatan.',
      'Brand Kit terintegrasi untuk menyimpan palet warna, tipografi, dan logo brand.',
      'Penyimpanan cloud hingga 1 TB untuk kolaborasi proyek tanpa hambatan.'
    ],
    steps: [
      'Akses akun menggunakan tautan undangan resmi atau kredensial yang diinformasikan.',
      'Buka aplikasi Canva pada perangkat atau akses melalui peramban web modern.',
      'Pilih template yang diinginkan atau buat ukuran kanvas kustom sesuai kebutuhan.',
      'Gunakan fitur Magic Tools dan unduh karya dalam resolusi tinggi (PNG/SVG/PDF).'
    ],
    faqs: [
      { q: 'Apakah Canva Pro dapat digunakan di beberapa perangkat sekaligus?', a: 'Ya, Canva Pro mendukung sinkronisasi multi-perangkat melalui akun pengguna di Android, iOS, Windows, macOS, maupun browser.' },
      { q: 'Apakah fitur Background Remover memerlukan instalasi software tambahan?', a: 'Tidak, fitur Background Remover berjalan langsung secara cloud di dalam antarmuka editor Canva.' }
    ]
  },

  // 2. YouTube Premium
  {
    slug: 'youtube-premium',
    name: 'YouTube Premium',
    category: 'entertainment',
    categoryLabel: 'Entertainment',
    appColor: '#FF0000',
    badge: 'Pilihan Utama',
    badgeClass: 'badge-amber',
    tagline: 'Tonton seluruh konten video tanpa iklan, pemutaran di latar belakang, dan akses penuh ke YouTube Music.',
    tags: 'video streaming tanpa iklan bebas iklan music background youtube lagu podcast',
    platforms: ['Android', 'iOS', 'Smart TV', 'Web Browser'],
    svg: `<svg width="36" height="36" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="10" fill="#FF0000"/><path d="M36.8 17.5c-.4-1.6-1.7-2.9-3.3-3.3C30.6 13.3 24 13.3 24 13.3s-6.6 0-9.5.9c-1.6.4-2.9 1.7-3.3 3.3C10.3 20.4 10.3 24 10.3 24s0 3.6.9 6.5c.4 1.6 1.7 2.9 3.3 3.3 2.9.9 9.5.9 9.5.9s6.6 0 9.5-.9c1.6-.4 2.9-1.7 3.3-3.3.9-2.9.9-6.5.9-6.5s0-3.6-.9-6.5z" fill="#FFFFFF"/><polygon points="21.3,28.5 28.5,24 21.3,19.5" fill="#FF0000"/></svg>`,
    fullDesc1: 'YouTube Premium menghadirkan pengalaman menikmati konten video dan musik terbaik di dunia tanpa gangguan iklan apa pun. Pengguna dapat menikmati pemutaran di latar belakang (background play) sembari membuka aplikasi lain atau saat layar ponsel terkunci.',
    fullDesc2: 'Langganan mencakup akses penuh ke YouTube Music Premium dengan jutaan lagu, playlist resmi, dan live performance eksklusif.',
    features: [
      'Menonton seluruh video YouTube tanpa jeda iklan komersial apa pun.',
      'Pemutaran di latar belakang (Background Play) saat layar terkunci atau multitasking.',
      'Unduh video dan playlist untuk ditonton offline dalam resolusi hingga Full HD/4K.',
      'Akses gratis ke layanan streaming musik YouTube Music Premium.',
      'Dukungan Picture-in-Picture (PiP) pada perangkat seluler.'
    ],
    steps: [
      'Hubungkan alamat email Google Anda dengan undangan family plan resmi Bernadya.',
      'Buka aplikasi YouTube di smartphone, tablet, atau Smart TV Anda.',
      'Pastikan logo YouTube berubah menjadi YouTube Premium di sudut kiri atas.',
      'Nikmati video dan musik tanpa gangguan iklan sepuasnya.'
    ],
    faqs: [
      { q: 'Apakah YouTube Premium memerlukan akun baru?', a: 'Bisa menggunakan akun Gmail pribadi Anda yang sudah ada tanpa kehilangan riwayat dan subscriptions.' },
      { q: 'Apakah YouTube Music otomatis aktif?', a: 'Ya, YouTube Music Premium otomatis aktif menggunakan akun Google yang sama.' }
    ]
  },

  // 3. Netflix Premium
  {
    slug: 'netflix-premium',
    name: 'Netflix Premium',
    category: 'entertainment',
    categoryLabel: 'Entertainment',
    appColor: '#E50914',
    badge: 'Streaming Favorit',
    badgeClass: 'badge-rose',
    tagline: 'Layanan streaming film, serial, dan dokumenter orisinal dengan kualitas Ultra HD 4K dan audio spasial.',
    tags: 'nonton film serial drakor movie bioskop streaming 4k hdr netflix',
    platforms: ['Android', 'iOS', 'Smart TV', 'Windows', 'Web Browser'],
    svg: `<svg width="36" height="36" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="10" fill="#141414"/><path d="M16 12h4.5v24H16z" fill="#E50914"/><path d="M27.5 12H32v24h-4.5z" fill="#E50914"/><path d="M16 12l11.5 24H32L20.5 12z" fill="#B81D24"/></svg>`,
    fullDesc1: 'Netflix Premium adalah standar emas layanan hiburan on-demand global. Menyajikan ribuan judul serial original bergengsi, film layar lebar pemenang penghargaan, dokumenter mendalam, dan anime terlengkap.',
    fullDesc2: 'Dengan paket Premium, Anda mendapatkan kualitas video tertinggi Ultra HD 4K, HDR, dan Dolby Atmos audio spasial untuk sensasi bioskop di ruang keluarga.',
    features: [
      'Resolusi video Ultra HD 4K HDR dengan kejernihan visual memukau.',
      'Dukungan audio spasial Netflix Spatial Audio dan Dolby Atmos.',
      'Tonton di TV, komputer, tablet, dan smartphone favorit Anda.',
      'Profil pribadi dengan PIN proteksi dan preferensi rekomendasi cerdas.',
      'Fitur unduh film dan episode untuk tontonan offline tanpa kuota.'
    ],
    steps: [
      'Terima kredensial profil privat dan PIN akses yang diberikan tim Bernadya.',
      'Buka aplikasi Netflix pada TV, smartphone, atau peramban browser Anda.',
      'Pilih profil nomor yang telah dialokasikan khusus untuk Anda.',
      'Masukkan PIN 4 digit dan nikmati streaming berkualitas 4K tanpa hambatan.'
    ],
    faqs: [
      { q: 'Apakah profil dapat dikunci dengan PIN sendiri?', a: 'Ya, setiap slot profil dilengkapi dengan PIN privat sehingga riwayat tontonan Anda tetap terlindungi.' },
      { q: 'Berapa resolusi maksimal yang didukung?', a: 'Hingga Ultra HD 4K HDR pada perangkat dan monitor yang kompatibel.' }
    ]
  },

  // 4. CapCut Pro
  {
    slug: 'capcut-pro',
    name: 'CapCut Pro',
    category: 'creative-design',
    categoryLabel: 'Creative & Design',
    appColor: '#111827',
    badge: 'Creator Choice',
    badgeClass: 'badge-purple',
    tagline: 'Editor video andalan kreator dengan fitur AI pemotong klip, teks otomatis, efek visual pro, dan ekspor 4K 60fps.',
    tags: 'editor video tiktok reels shorts video content creator efek ai capcut',
    platforms: ['Android', 'iOS', 'Windows', 'macOS'],
    svg: `<svg width="36" height="36" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="10" fill="#111827"/><path d="M13 17l11 7-11 7V17z" fill="#FFFFFF"/><path d="M35 17l-11 7 11 7V17z" fill="#FFFFFF"/><path d="M13 14h22v3H13zM13 31h22v3H13z" fill="#38BDF8"/></svg>`,
    fullDesc1: 'CapCut Pro adalah aplikasi penyuntingan video serbabisa yang dirancang khusus untuk memenuhi kebutuhan kreator konten masa kini. Dengan antarmuka yang sangat intuitif, pengguna dapat menghasilkan video berkualitas tinggi dengan cepat.',
    fullDesc2: 'Versi Pro membuka akses ke seluruh efek premium, filter sinematik, pelacak gerak AI (motion tracking), teks otomatis bilingual, dan penghilang kedipan lampu.',
    features: [
      'Akses penuh ke semua efek visual, filter, dan transisi berlabel Pro.',
      'Auto-Caption berbasis AI dengan akurasi pengenalan ucapan tinggi.',
      'Fitur Smart Cutout dan Motion Tracking otomatis tanpa green screen.',
      'Peningkatan kualitas video (Optical Flow 60fps) dan penghalus gerakan.',
      'Ekspor video tanpa watermark dalam resolusi hingga 4K 60fps.'
    ],
    steps: [
      'Masuk ke akun CapCut menggunakan email/kredensial yang diverifikasi.',
      'Pastikan status akun menunjukkan badge Pro aktif di pojok profil.',
      'Mulai proyek video baru dan manfaatkan seluruh aset dan filter bertanda Pro.',
      'Ekspor video langsung tanpa tanda air (watermark) dalam resolusi 4K.'
    ],
    faqs: [
      { q: 'Apakah CapCut Pro dapat digunakan di PC/Laptop dan HP?', a: 'Ya, akun CapCut Pro dapat digunakan pada aplikasi mobile (Android/iOS) dan desktop (Windows/macOS).' },
      { q: 'Apakah ada watermark pada hasil video?', a: 'Sama sekali tidak ada watermark pada ekspor video versi CapCut Pro.' }
    ]
  },

  // 5. Zoom Pro
  {
    slug: 'zoom-pro',
    name: 'Zoom Pro',
    category: 'productivity',
    categoryLabel: 'Productivity',
    appColor: '#2D8CFF',
    badge: 'Work & Study',
    badgeClass: 'badge-indigo',
    tagline: 'Solusi pertemuan daring tanpa batasan durasi 40 menit, kapasitas 100 partisipan, dan rekaman cloud otomatis.',
    tags: 'meeting rapat online webinar video call kuliah daring bimbingan zoom',
    platforms: ['Windows', 'macOS', 'Android', 'iOS', 'Web Browser'],
    svg: `<svg width="36" height="36" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="10" fill="#2D8CFF"/><rect x="12" y="17" width="16" height="14" rx="3" fill="#FFFFFF"/><path d="M28 20.5l8-4.5v16l-8-4.5v-7z" fill="#FFFFFF"/></svg>`,
    fullDesc1: 'Zoom Pro adalah platform konferensi video nomor satu untuk profesional, institusi pendidikan, dan bisnis. Menghilangkan batasan durasi 40 menit pada akun gratis, sehingga Anda dapat menyelenggarakan rapat hingga 30 jam terus-menerus.',
    fullDesc2: 'Dilengkapi fasilitas rekaman cloud, transkripsi rapat otomatis AI Companion, polling interaktif, dan kontrol host tingkat lanjut.',
    features: [
      'Durasi rapat hingga 30 jam per sesi tanpa terputus otomatis.',
      'Kapasitas ruang meeting hingga 100 partisipan interaktif.',
      'Penyimpanan cloud untuk merekam rapat (Cloud Recording 5 GB).',
      'AI Companion untuk ringkasan rapat dan poin tindakan otomatis.',
      'Laporan analitik rapat dan fitur Breakout Rooms tak terbatas.'
    ],
    steps: [
      'Terima lisensi Zoom Pro yang diaktifkan langsung pada akun Zoom Anda.',
      'Buka aplikasi Zoom Workplace pada laptop atau smartphone Anda.',
      'Jadwalkan rapat daring baru tanpa batas durasi waktu.',
      'Bagikan tautan meeting ke peserta Anda dengan perlindungan passcode.'
    ],
    faqs: [
      { q: 'Berapa durasi maksimal satu kali sesi rapat?', a: 'Zoom Pro memungkinkan Anda menyelenggarakan sesi rapat hingga 30 jam nonstop.' },
      { q: 'Apakah rekaman meeting bisa disimpan di cloud?', a: 'Ya, tersedia penyimpanan rekaman cloud otomatis yang dapat dibagikan melalui link.' }
    ]
  },

  // 6. Disney+ Hotstar
  {
    slug: 'disney-hotstar',
    name: 'Disney+ Hotstar',
    category: 'entertainment',
    categoryLabel: 'Entertainment',
    appColor: '#113CCF',
    badge: 'Family & Movies',
    badgeClass: 'badge-blue',
    tagline: 'Pusat tontonan blockbuster Disney, Marvel, Pixar, Star Wars, National Geographic, dan film lokal eksklusif.',
    tags: 'nonton film disney marvel avengers pixar star wars kartun anak hotstar',
    platforms: ['Android', 'iOS', 'Smart TV', 'Web Browser'],
    svg: `<svg width="36" height="36" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="10" fill="#113CCF"/><path d="M14 24c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10-10-4.5-10-10z" stroke="#FFFFFF" stroke-width="2.5" fill="none"/><path d="M22 17v14l10-7-10-7z" fill="#FFFFFF"/></svg>`,
    fullDesc1: 'Disney+ Hotstar adalah rumah bagi waralaba film dan serial paling dicintai sepanjang masa. Tonton seluruh saga Marvel Cinematic Universe, petualangan antariksa Star Wars, keajaiban animasi Pixar, hingga dokumenter alam National Geographic.',
    fullDesc2: 'Tersedia pilihan sulih suara (dubbing) bahasa Indonesia dan subtitle yang nyaman untuk hiburan keluarga berkualitas.',
    features: [
      'Akses tak terbatas ke katalog film Disney, Marvel, Pixar, Star Wars, dan NatGeo.',
      'Kualitas gambar Ultra HD 4K dan Dolby Vision pada judul-judul terpilih.',
      'Dukungan Dolby Audio untuk pengalaman suara sinematik yang mendalam.',
      'Koleksi film bioskop Indonesia terkini dan serial drama Asia terpopuler.',
      'Fitur kontrol orang tua (Kids Profile) untuk lingkungan tontonan aman anak.'
    ],
    steps: [
      'Aktivasi nomor telepon Anda pada sistem langganan resmi Bernadya.',
      'Buka aplikasi Disney+ Hotstar di ponsel atau TV pintar Anda.',
      'Masukkan nomor HP untuk menerima kode OTP verifikasi resmi.',
      'Pilih profil Anda dan mulailah maraton film blockbuster favorit.'
    ],
    faqs: [
      { q: 'Bisa ditonton di Smart TV?', a: 'Bisa, Disney+ Hotstar mendukung aplikasi resmi di Android TV, Samsung Tizen, LG webOS, dan Apple TV.' },
      { q: 'Apakah ada subtitle dan dubbing Indonesia?', a: 'Ya, hampir seluruh tayangan animasi dan film keluarga menyediakan opsi audio dubbing dan subtitle Indonesia.' }
    ]
  },

  // 7. Spotify Premium
  {
    slug: 'spotify-premium',
    name: 'Spotify Premium',
    category: 'entertainment',
    categoryLabel: 'Entertainment',
    appColor: '#1DB954',
    badge: 'Musik & Podcast',
    badgeClass: 'badge-emerald',
    tagline: 'Dengarkan jutaan lagu dan podcast tanpa jeda iklan, audio berkualitas tinggi, serta fitur download lagu offline.',
    tags: 'lagu musik playlist offline podcast audio bernadya streaming mp3 spotify',
    platforms: ['Android', 'iOS', 'Windows', 'macOS', 'Smart Speaker', 'Web Browser'],
    svg: `<svg width="36" height="36" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="10" fill="#1DB954"/><path d="M32.5 30.2c-.4.6-1.2.8-1.8.4-5-3.1-11.3-3.8-18.7-2.1-.7.2-1.4-.3-1.6-1-.2-.7.3-1.4 1-1.6 8.1-1.8 15.1-1 20.7 2.4.6.4.8 1.2.4 1.9zm2.4-5.3c-.5.8-1.5 1-2.3.5-5.7-3.5-14.4-4.5-21.2-2.5-.9.3-1.8-.2-2.1-1.1-.3-.9.2-1.8 1.1-2.1 7.7-2.3 17.3-1.2 23.9 2.8.8.6 1.1 1.6.6 2.4zm.2-5.5c-6.8-4.1-18.2-4.4-24.7-2.5-1 .3-2.2-.3-2.5-1.3-.3-1 .3-2.2 1.3-2.5 7.6-2.3 20.1-1.8 28 2.9 1 .6 1.3 1.8.7 2.7-.6.9-1.9 1.3-2.8.7z" fill="#FFFFFF"/></svg>`,
    fullDesc1: 'Spotify Premium adalah layanan streaming musik digital terdepan di dunia yang memberi Anda akses ke lebih dari 100 juta lagu dan jutaan podcast edukatif serta hiburan. Dengarkan musik tanpa terpotong iklan sama sekali.',
    fullDesc2: 'Nikmati audio berkualitas tinggi 320kbps, lewati lagu sepuasnya tanpa batas (unlimited skips), dan simpan lagu untuk didengarkan saat bepergian tanpa internet.',
    features: [
      'Mendengarkan 100+ juta lagu dan jutaan podcast tanpa iklan audio.',
      'Unduh lagu dan album untuk dinikmati secara offline di mana saja.',
      'Kualitas audio Very High (320 kbps) dengan suara jernih dan bass bulat.',
      'Bebas memilih lagu apa pun dan skip lagu tanpa batas kuota.',
      'Fitur Spotify Jam untuk mendengarkan playlist bersama teman secara real-time.'
    ],
    steps: [
      'Gabung ke plan keluarga resmi Bernadya melalui tautan undangan resmi.',
      'Buka aplikasi Spotify pada smartphone atau komputer Anda.',
      'Pastikan akun Anda sudah tertera status "Spotify Premium".',
      'Download album dan podcast favorit Anda untuk didengarkan offline.'
    ],
    faqs: [
      { q: 'Apakah playlist lama saya akan hilang?', a: 'Tidak sama sekali. Semua playlist, likes, dan riwayat lagu Anda akan tetap utuh di akun Anda.' },
      { q: 'Bisa digunakan di luar negeri?', a: 'Ya, Spotify Premium bebas roaming dan dapat diakses di mana pun tanpa batas wilayah.' }
    ]
  },

  // 8. Adobe Creative Cloud
  {
    slug: 'adobe-creative-cloud',
    name: 'Adobe Creative Cloud',
    category: 'creative-design',
    categoryLabel: 'Creative & Design',
    appColor: '#DA1F26',
    badge: 'Standar Industri',
    badgeClass: 'badge-purple',
    tagline: 'Paket aplikasi profesional terlengkap untuk desainer grafis, fotografer, animator, dan editor video.',
    tags: 'photoshop illustrator premiere after effects indesign lightroom adobe',
    platforms: ['Windows', 'macOS', 'iPad'],
    svg: `<svg width="36" height="36" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="10" fill="#DA1F26"/><path d="M15 13h6.5l7 22H24l-2-6h-7l3-9-3-7zM29.5 13H36l-7 22h-4.5l7-22z" fill="#FFFFFF"/></svg>`,
    fullDesc1: 'Adobe Creative Cloud adalah bundel perangkat lunak kreatif nomor satu di industri media profesional. Menyediakan akses penuh ke lebih dari 20 aplikasi standar global termasuk Photoshop, Illustrator, Premiere Pro, After Effects, dan InDesign.',
    fullDesc2: 'Dilengkapi dengan ribuan Adobe Fonts, integrasi Adobe Firefly Generative AI, dan penyimpanan cloud terpadu untuk alur kerja tanpa kompromi.',
    features: [
      'Akses ke 20+ aplikasi desktop profesional (Photoshop, Premiere, Illustrator, dll).',
      'Integrasi kecerdasan buatan Adobe Firefly Generative Fill dan Recolor.',
      'Akses ke perpustakaan 20.000+ jenis huruf berlisensi resmi Adobe Fonts.',
      'Penyimpanan cloud 100 GB untuk sinkronisasi aset dan riwayat versi.',
      'Dukungan pembaruan versi rilis terbaru secara berkala langsung dari Adobe.'
    ],
    steps: [
      'Berikan email Adobe ID Anda untuk diundang ke lisensi resmi perusahaan.',
      'Unduh dan instal aplikasi desktop Adobe Creative Cloud dari situs resmi.',
      'Masuk menggunakan Adobe ID Anda dan mulai unduh software yang diinginkan.',
      'Nikmati software orisinal tanpa risiko virus atau crash berkala.'
    ],
    faqs: [
      { q: 'Apakah aplikasi diunduh langsung dari website resmi Adobe?', a: 'Ya, seluruh instalasi dan pembaruan dilakukan langsung melalui aplikasi Adobe Creative Cloud desktop resmi.' },
      { q: 'Berapa komputer yang bisa diinstal?', a: 'Dapat diinstal di dua komputer (misal laptop dan desktop PC) dan digunakan bergantian.' }
    ]
  },

  // 9. Figma Professional
  {
    slug: 'figma-pro',
    name: 'Figma Professional',
    category: 'creative-design',
    categoryLabel: 'Creative & Design',
    appColor: '#F24E1E',
    badge: 'UI/UX Kolaboratif',
    badgeClass: 'badge-indigo',
    tagline: 'Alat desain antarmuka dan prototyping berbasis web untuk desainer UI/UX, tim produk, dan developer.',
    tags: 'ui ux web design prototype wireframe figma mockup developer',
    platforms: ['Web Browser', 'macOS', 'Windows'],
    svg: `<svg width="36" height="36" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="10" fill="#242A35"/><circle cx="30" cy="24" r="6" fill="#1ABCFE"/><path d="M18 12h6v6h-6z" fill="#F24E1E"/><path d="M24 12h6a6 6 0 0 1 0 12h-6v-12z" fill="#FF7262"/><path d="M18 18h6v6h-6z" fill="#A259FF"/><path d="M18 24h6v6h-6z" fill="#0ACF83"/><path d="M18 30a6 6 0 0 0 6 6v-6h-6z" fill="#0ACF83"/></svg>`,
    fullDesc1: 'Figma Professional adalah standar mutlak dalam dunia perancangan antarmuka pengguna (UI) dan pengalaman pengguna (UX). Berbasis cloud sepenuhnya, memungkinkan desainer, manajer produk, dan insinyur perangkat lunak berkolaborasi pada kanvas yang sama.',
    fullDesc2: 'Paket Professional membuka riwayat versi tak terbatas, perpustakaan tim (Team Libraries) bersama, Dev Mode canggih, dan ruang kerja FigJam tanpa batasan.',
    features: [
      'Proyek dan file tak terbatas di dalam ruang kerja tim kolaboratif.',
      'Riwayat versi file (Version History) tanpa batas waktu 30 hari.',
      'Shared Team Libraries untuk sistem desain (Design System) tersentralisasi.',
      'Dev Mode untuk inspeksi kode CSS, iOS, dan Android yang sangat presisi.',
      'Papan tulis FigJam tanpa batas untuk sesi brainstorming dan user flow.'
    ],
    steps: [
      'Daftarkan email akun Figma Anda ke workspace tim profesional.',
      'Buka figma.com atau aplikasi desktop Figma pada laptop Anda.',
      'Beralih ke tim profesional berlisensi untuk membuka semua fitur pro.',
      'Publikasikan design system dan ajak tim Anda berkolaborasi real-time.'
    ],
    faqs: [
      { q: 'Apakah file desain lama saya tetap aman?', a: 'Ya, file lama di Drafts Anda tetap aman dan dapat dipindahkan ke workspace Pro kapan saja.' },
      { q: 'Apa fungsi Dev Mode di Figma Pro?', a: 'Dev Mode mempermudah developer melihat spesifikasi ukuran, padding, warna, dan kode siap pakai secara instan.' }
    ]
  },

  // 10. Microsoft 365
  {
    slug: 'microsoft-365',
    name: 'Microsoft 365',
    category: 'productivity',
    categoryLabel: 'Productivity',
    appColor: '#D83B01',
    badge: 'Office All-in-One',
    badgeClass: 'badge-blue',
    tagline: 'Paket aplikasi produktivitas perkantoran lengkap (Word, Excel, PowerPoint, Outlook) plus 1 TB OneDrive.',
    tags: 'office word excel powerpoint onedrive dokumen kerja skripsi microsoft',
    platforms: ['Windows', 'macOS', 'Android', 'iOS', 'Web Browser'],
    svg: `<svg width="36" height="36" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="10" fill="#D83B01"/><rect x="13" y="13" width="10" height="10" fill="#F25022"/><rect x="25" y="13" width="10" height="10" fill="#7FBA00"/><rect x="13" y="25" width="10" height="10" fill="#00A4EF"/><rect x="25" y="25" width="10" height="10" fill="#FFB900"/></svg>`,
    fullDesc1: 'Microsoft 365 menghadirkan versi terbaru aplikasi perkantoran terandal di dunia: Microsoft Word, Excel, PowerPoint, Outlook, dan OneNote. Dilengkapi kemampuan kecerdasan buatan untuk analisis data cepat dan penulisan dokumen berstandar profesional.',
    fullDesc2: 'Termasuk kapasitas penyimpanan awan OneDrive sebesar 1.000 GB (1 TB) dengan keamanan enkripsi berkas dan perlindungan Personal Vault.',
    features: [
      'Aplikasi desktop premium lengkap: Word, Excel, PowerPoint, Outlook, OneNote.',
      'Penyimpanan awan OneDrive 1 TB (1.000 GB) dengan deteksi ransomware.',
      'Dapat diaktifkan hingga 5 perangkat sekaligus per pengguna (PC, Mac, HP, Tablet).',
      'Fitur kolaborasi dokumen real-time dan autosave otomatis ke awan.',
      'Pembaruan fitur terbaru dan keamanan secara berkala dari Microsoft.'
    ],
    steps: [
      'Masuk ke portal resmi microsoft.com menggunakan kredensial yang diverifikasi.',
      'Klik tombol "Install Apps" untuk mengunduh installer resmi Office.',
      'Jalankan proses instalasi pada komputer Windows atau Mac Anda.',
      'Masuk dengan akun Anda untuk aktivasi lisensi resmi 1 TB OneDrive.'
    ],
    faqs: [
      { q: 'Apakah penyimpanan 1 TB OneDrive otomatis aktif?', a: 'Ya, akun langsung memiliki kuota penyimpanan 1.000 GB OneDrive pribadi.' },
      { q: 'Berapa perangkat yang bisa login secara bersamaan?', a: 'Satu akun dapat digunakan hingga di 5 perangkat (laptop, PC, tablet, dan smartphone).' }
    ]
  },

  // 11. Duolingo Super / Plus
  {
    slug: 'duolingo-plus',
    name: 'Duolingo Super / Plus',
    category: 'education',
    categoryLabel: 'Education',
    appColor: '#58CC02',
    badge: 'Edukasi Bahasa',
    badgeClass: 'badge-emerald',
    tagline: 'Belajar lebih dari 40 bahasa asing tanpa gangguan iklan, nyawa tak terbatas, dan kuis ulasan kesalahan pribadi.',
    tags: 'belajar bahasa inggris jepang toefl ielts mandor prancis duolingo super',
    platforms: ['Android', 'iOS', 'Web Browser'],
    svg: `<svg width="36" height="36" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="10" fill="#58CC02"/><circle cx="20" cy="22" r="5" fill="#FFFFFF"/><circle cx="28" cy="22" r="5" fill="#FFFFFF"/><circle cx="20" cy="22" r="2.5" fill="#242A35"/><circle cx="28" cy="22" r="2.5" fill="#242A35"/><polygon points="21,27 27,27 24,31" fill="#FF9600"/></svg>`,
    fullDesc1: 'Duolingo Super adalah cara paling seru dan efektif untuk menguasai bahasa baru secara konsisten setiap hari. Didesain dengan gamifikasi interaktif dan metode ilmiah terbukti yang mempermudah penghafalan kosakata dan tata bahasa.',
    fullDesc2: 'Versi Super membebaskan Anda dari iklan, memberikan nyawa (hearts) tak terbatas, serta fitur Mistakes Review untuk memperbaiki kekeliruan latihan secara terarah.',
    features: [
      'Nyawa tak terbatas (Unlimited Hearts) agar Anda bisa belajar tanpa jeda hukuman.',
      'Bebas dari segala jenis iklan promosi untuk konsentrasi belajar maksimal.',
      'Ulasan kesalahan pribadi (Mistakes Review) untuk memperkuat pemahaman.',
      'Tes lompat level (Progress Quiz) tanpa batas untuk mengukur kemahiran bahasa.',
      'Tersedia lebih dari 40 pilihan bahasa dunia (Inggris, Jepang, Jerman, Mandarin, dll).'
    ],
    steps: [
      'Gabung ke paket keluarga resmi Super Duolingo melalui email akun Anda.',
      'Buka aplikasi Duolingo di smartphone atau tablet Anda.',
      'Status Super Duolingo akan langsung aktif dengan ikon burung hantu bersayap emas.',
      'Latih streak harian Anda dengan nyawa tanpa batas.'
    ],
    faqs: [
      { q: 'Apakah streak dan riwayat belajar saya akan hilang?', a: 'Tidak sama sekali, seluruh poin, mahkota, dan streak hari Anda akan tetap terjaga.' },
      { q: 'Bisa belajar lebih dari satu bahasa?', a: 'Bisa, Anda bebas mempelajari beberapa bahasa sekaligus dalam satu akun.' }
    ]
  },

  // 12. NordVPN Premium
  {
    slug: 'nordvpn-premium',
    name: 'NordVPN Premium',
    category: 'utilities',
    categoryLabel: 'Utilities',
    appColor: '#4687FF',
    badge: 'Privasi & Keamanan',
    badgeClass: 'badge-blue',
    tagline: 'Layanan jaringan privat virtual (VPN) berkecepatan tinggi dengan enkripsi tingkat militer dan proteksi ancaman malware.',
    tags: 'vpn keamanan wifi publik privasi enkripsi ip protector streaming nordvpn',
    platforms: ['Windows', 'macOS', 'Android', 'iOS', 'Linux', 'Browser Extension'],
    svg: `<svg width="36" height="36" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="10" fill="#4687FF"/><path d="M14 34l10-18 10 18H14z" fill="#FFFFFF"/><path d="M20 34l4-8 4 8h-8z" fill="#1E40AF"/><path d="M24 16l4 8-4 4-4-4 4-8z" fill="#93C5FD"/></svg>`,
    fullDesc1: 'NordVPN Premium adalah benteng pertahanan privasi digital Anda saat terhubung ke internet, khususnya saat menggunakan jaringan Wi-Fi publik di kafe, bandara, atau hotel. Menyamarkan alamat IP Anda dan mengenkripsi seluruh lalu lintas data.',
    fullDesc2: 'Dengan jaringan 6.000+ server super cepat di 111 negara, Anda dapat menjelajahi internet tanpa pelacakan penyedia ISP, bypass batasan geografis, dan streaming lancar tanpa buffering.',
    features: [
      'Enkripsi tingkat militer (AES-256) berstandar keamanan internasional.',
      'Jaringan lebih dari 6.000 server berkecepatan ultra di 110+ negara.',
      'Fitur Threat Protection untuk memblokir malware, pelacak, dan iklan web.',
      'Kebijakan ketat tanpa pencatatan aktivitas (Strict No-Logs Policy) terverifikasi audit.',
      'Protokol NordLynx eksklusif untuk kecepatan unduh dan streaming tanpa lag.'
    ],
    steps: [
      'Gunakan akun resmi NordVPN yang telah diverifikasi tim Bernadya.',
      'Unduh aplikasi resmi NordVPN untuk sistem operasi perangkat Anda.',
      'Pilih negara server yang diinginkan (misal Singapura, Jepang, atau AS).',
      'Klik tombol "Quick Connect" dan nikmati koneksi internet yang aman terlindungi.'
    ],
    faqs: [
      { q: 'Apakah koneksi internet akan melambat?', a: 'NordVPN menggunakan protokol NordLynx berbasis WireGuard yang dirancang menjaga kecepatan unduh tetap maksimal.' },
      { q: 'Apakah aman untuk transaksi perbankan?', a: 'Sangat aman, enkripsi 256-bit melindungi seluruh transmisi data dari intersepsi pihak ketiga di jaringan publik.' }
    ]
  },

  // 13. ChatGPT Plus / OpenAI (NEW)
  {
    slug: 'chatgpt-plus',
    name: 'ChatGPT Plus (GPT-4o)',
    category: 'productivity',
    categoryLabel: 'Productivity',
    appColor: '#10A37F',
    badge: 'AI Paling Populer',
    badgeClass: 'badge-emerald',
    tagline: 'Akses model tercanggih GPT-4o, pembuatan gambar DALL·E 3, analisis dokumen instan, dan respons kilat tanpa batas antrean.',
    tags: 'ai chatgpt gpt4 gpt4o openai kecerdasan buatan prompt bot koding nulis',
    platforms: ['Web Browser', 'iOS', 'Android', 'macOS', 'Windows'],
    svg: `<svg width="36" height="36" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="10" fill="#10A37F"/><path d="M34 22.8c-.3-2.6-2.1-4.7-4.7-5.1-.6-1.8-2-3.1-3.8-3.7-2.6-.9-5.4.1-6.9 2.3-1.6-.3-3.3.4-4.2 1.8-1.5 2.1-1.3 5 .3 6.9-.3 2.6 1.5 5 4.1 5.6.6 1.8 2 3.1 3.8 3.7 2.6.9 5.4-.1 6.9-2.3 1.6.3 3.3-.4 4.2-1.8 1.6-2.2 1.4-5.1-.3-7.4zm-13.8 9.5c-1.3-.4-2.3-1.4-2.7-2.7l.8-.5 4.3 2.5c-.8.5-1.6.7-2.4.7zm-4.7-6.2c-.4-1.3-.2-2.7.5-3.8l.8.5v4.9c-.5-.4-.9-.9-1.3-1.6zm3.3-6.9c.9-.9 2.1-1.4 3.4-1.3v5.7l-4.2-2.4c.2-.7.5-1.4.8-2zm10.4 1.3c1.3.4 2.3 1.4 2.7 2.7l-.8.5-4.3-2.5c.8-.5 1.6-.7 2.4-.7zm4.7 6.2c.4 1.3.2 2.7-.5 3.8l-.8-.5v-4.9c.5.4.9.9 1.3 1.6zm-3.3 6.9c-.9.9-2.1 1.4-3.4 1.3v-5.7l4.2 2.4c-.2.7-.5 1.4-.8 2zm-6.6-4.4l3.1-1.8v3.6l-3.1 1.8v-3.6z" fill="#FFFFFF"/></svg>`,
    fullDesc1: 'ChatGPT Plus adalah langganan resmi OpenAI yang memberikan Anda akses prioritas ke kecerdasan buatan paling mutakhir di dunia: GPT-4o. Mampu memproses teks, suara, dan gambar secara alami dengan kecepatan luar biasa.',
    fullDesc2: 'Dilengkapi generator gambar canggih DALL·E 3, fitur Advanced Data Analysis untuk membaca spreadsheet Excel/CSV, kemampuan web browsing real-time, dan akses ribuan Custom GPTs khusus.',
    features: [
      'Akses tak terbatas ke model flagship GPT-4o dengan penalaran tingkat tinggi.',
      'Generator seni visual fotorealistik terintegrasi DALL·E 3.',
      'Analisis data tingkat lanjut: unggah file PDF, Word, Excel untuk dirangkum & dianalisis.',
      'Fitur Web Browsing langsung untuk informasi berita dan riset terkini.',
      'Kemampuan Voice Mode interaktif untuk percakapan lisan berbahasa Indonesia & Inggris.'
    ],
    steps: [
      'Terima akun ChatGPT Plus berlisensi resmi dari tim Bernadya Store.',
      'Buka chatgpt.com atau unduh aplikasi ChatGPT di iPhone/Android/PC Anda.',
      'Pilih model GPT-4o pada menu dropdown di bagian atas layar.',
      'Mulai tanyakan tugas, analisis dokumen, koding, atau minta buatkan gambar seni.'
    ],
    faqs: [
      { q: 'Apakah model GPT-4o lebih pintar dari versi gratis?', a: 'Ya, GPT-4o memiliki kapasitas penalaran matematika, koding, dan pemahaman konteks hingga 5x lebih cerdas dibanding model gratis.' },
      { q: 'Bisa upload file dokumen seperti PDF atau Excel?', a: 'Bisa, Anda dapat mengunggah file PDF, Excel, kode program, atau foto untuk dianalisis dan dirangkum secara mendalam.' }
    ]
  },

  // 14. Midjourney v6 (NEW)
  {
    slug: 'midjourney',
    name: 'Midjourney v6',
    category: 'creative-design',
    categoryLabel: 'Creative & Design',
    appColor: '#2B3245',
    badge: 'Generator AI #1',
    badgeClass: 'badge-purple',
    tagline: 'Generator seni AI visual terkemuka dunia dengan detail photorealistic, resolusi tinggi, dan kontrol gaya artistik komersial.',
    tags: 'midjourney ai gambar art prompt lukisan foto desain ilustrasi render 3d',
    platforms: ['Discord', 'Web Browser'],
    svg: `<svg width="36" height="36" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="10" fill="#1E2433"/><circle cx="24" cy="24" r="16" stroke="#93C5FD" stroke-width="2.5" stroke-dasharray="4 4"/><path d="M19 28l5-12 5 12-5-4-5 4z" fill="#60A5FA"/></svg>`,
    fullDesc1: 'Midjourney v6 adalah standar tertinggi di dunia untuk pembangkit karya seni visual berbasis kecerdasan buatan. Digunakan oleh sutradara film, desainer visual, dan agensi periklanan global untuk menciptakan visual fotorealistik yang menakjubkan.',
    fullDesc2: 'Menawarkan pemahaman prompt teks yang sangat akurat, pencahayaan sinematik, tekstur kulit manusia yang realistis, dan kontrol kamera fotografi presisi.',
    features: [
      'Kualitas rendering gambar tertinggi versi 6.0 dengan detail hiper-realistis.',
      'Akses Fast GPU Hours untuk pembuatan visual kilat di server Discord & Web.',
      'Dukungan parameter canggih: aspect ratio kustom, style reference, dan inpainting.',
      'Fitur Vary Region untuk merevisi bagian gambar tertentu tanpa mengubah keseluruhan komposisi.',
      'Hak penggunaan komersial penuh atas seluruh karya yang Anda hasilkan.'
    ],
    steps: [
      'Dapatkan akses akun Midjourney resmi yang telah diaktifkan paket langganannya.',
      'Buka server Discord resmi Midjourney atau login di midjourney.com.',
      'Ketik perintah `/imagine` diikuti deskripsi visual yang Anda impikan.',
      'Pilih variasi terbaik (V1-V4) dan perbesar resolusi gambar (U1-U4) dalam hitungan detik.'
    ],
    faqs: [
      { q: 'Apakah hasil gambar boleh digunakan untuk jualan / komersial?', a: 'Ya, seluruh gambar yang dihasilkan melalui langganan berbayar memiliki hak lisensi komersial penuh.' },
      { q: 'Apakah bisa digunakan tanpa aplikasi Discord?', a: 'Ya, pengguna kini dapat menggunakan antarmuka web langsung di Midjourney.com yang lebih bersih dan nyaman.' }
    ]
  },

  // 15. Claude Pro (NEW)
  {
    slug: 'claude-pro',
    name: 'Claude Pro (Anthropic)',
    category: 'productivity',
    categoryLabel: 'Productivity',
    appColor: '#D97706',
    badge: 'AI Riset & Analisis',
    badgeClass: 'badge-amber',
    tagline: 'Model AI cerdas dengan context window 200k tokens untuk membaca buku, riset jurnal panjang, koding presisi, dan penulisan alami.',
    tags: 'claude anthropic sonnet opus ai koding riset jurnal dokumen penulisan',
    platforms: ['Web Browser', 'iOS', 'Android'],
    svg: `<svg width="36" height="36" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="10" fill="#D97706"/><circle cx="24" cy="24" r="14" stroke="#FFFFFF" stroke-width="2.5"/><path d="M24 16v16M16 24h16" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round"/></svg>`,
    fullDesc1: 'Claude Pro dari Anthropic ditenagai oleh keluarga model Claude 3.5 Sonnet — model kecerdasan buatan dengan gaya bahasa paling alami dan kemampuan koding terbaik di kelasnya saat ini.',
    fullDesc2: 'Dengan kapasitas konteks hingga 200.000 tokens (setara membaca buku 500 halaman dalam sekali kirim), Claude Pro sangat unggul untuk meneliti jurnal medis, hukum, perancangan arsitektur software, dan penulisan esai bernada manusiawi.',
    features: [
      'Akses prioritas tanpa batas jam sibuk ke model Claude 3.5 Sonnet.',
      'Context window raksasa 200K tokens untuk membaca ribuan baris kode dan buku tebal.',
      'Fitur Artifacts interaktif untuk melihat preview web, game, dan dokumen secara langsung.',
      'Gaya bahasa dan penulisan yang sangat alami tanpa aroma robotik.',
      'Kemampuan analisis logika pemrograman dan debugging kode dengan akurasi terdepan.'
    ],
    steps: [
      'Masuk ke portal claude.ai menggunakan kredensial terverifikasi tim Bernadya.',
      'Buka obrolan baru dan pilih model Claude 3.5 Sonnet.',
      'Unggah dokumen riset, skripsi, atau basis kode yang ingin Anda diskusikan.',
      'Nikmati respons bernas, cerdas, dan analisis komprehensif dalam bahasa Indonesia yang fasih.'
    ],
    faqs: [
      { q: 'Apa kelebihan Claude dibanding AI lainnya?', a: 'Claude 3.5 Sonnet terkenal memiliki penalaran koding terkuat di dunia dan gaya penulisan yang sangat elegan tanpa kesan generik.' },
      { q: 'Apakah ada fitur Artifacts?', a: 'Ya! Fitur Artifacts memungkinkan Anda melihat preview website HTML/CSS/JS yang dibuat Claude secara real-time di sisi samping layar.' }
    ]
  },

  // 16. Notion Plus & AI (NEW)
  {
    slug: 'notion-plus',
    name: 'Notion Plus & AI',
    category: 'productivity',
    categoryLabel: 'Productivity',
    appColor: '#1E293B',
    badge: 'Workspace All-in-One',
    badgeClass: 'badge-blue',
    tagline: 'Aplikasi catatan terpadu, kanban board, manajemen proyek tim, database fleksibel, dan asisten penulisan AI otomatis.',
    tags: 'notion catatan to do list tugas jadwal proyek kanban database manajemen kantor',
    platforms: ['Windows', 'macOS', 'Android', 'iOS', 'Web Browser'],
    svg: `<svg width="36" height="36" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="10" fill="#0F172A"/><path d="M14 14h20v20H14z" fill="#0F172A"/><path d="M16 16v16l12-16v16" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    fullDesc1: 'Notion Plus adalah ruang kerja serba bisa yang menggabungkan catatan, basis data relasional, manajemen tugas kanban, dokumen wiki, dan kecerdasan buatan ke dalam satu platform yang indah dan sangat fleksibel.',
    fullDesc2: 'Versi Plus menghapus batasan unggah berkas (unlimited file uploads), memperpanjang riwayat revisi halaman, mengizinkan hingga 100 tamu kolaborator, dan dilengkapi fitur Notion AI.',
    features: [
      'Blok tak terbatas untuk catatan, halaman, database, dan galeri proyek.',
      'Unggahan file tanpa batas ukuran (Unlimited File Uploads) untuk dokumen & video.',
      'Riwayat versi halaman hingga 30 hari untuk memulihkan draf sebelumnya.',
      'Kolaborasi bersama hingga 100 tamu eksternal (Guest Access).',
      'Integrasi Notion AI untuk merangkum catatan rapat dan membuat draf otomatis.'
    ],
    steps: [
      'Terima undangan ke workspace Notion Plus berlisensi resmi.',
      'Unduh aplikasi Notion di laptop dan ponsel Anda atau buka notion.so.',
      'Atur dashboard produktivitas harian Anda menggunakan template Notion.',
      'Bagikan halaman ke rekan kerja atau publikasikan sebagai website instan.'
    ],
    faqs: [
      { q: 'Bisa upload file video dan gambar ukuran besar?', a: 'Bisa, Notion Plus meniadakan batasan 5MB pada akun gratis sehingga Anda bebas upload file berukuran gigabyte.' },
      { q: 'Apakah database Notion mendukung relasi?', a: 'Ya, database Notion sangat andal untuk menghubungkan tabel tugas, klien, keuangan, dan kalender.' }
    ]
  },

  // 17. Grammarly Premium (NEW)
  {
    slug: 'grammarly-premium',
    name: 'Grammarly Premium',
    category: 'education',
    categoryLabel: 'Education',
    appColor: '#15C39A',
    badge: 'Asisten Menulis Pro',
    badgeClass: 'badge-emerald',
    tagline: 'Koreksi tata bahasa Inggris instan, perbaikan nada tulisan akademis, deteksi plagiarisme, dan penyempurnaan kalimat profesional.',
    tags: 'grammarly bahasa inggris cek grammar jurnal tesis skripsi cek plagiat essay writing',
    platforms: ['Windows', 'macOS', 'Browser Extension', 'Android', 'iOS'],
    svg: `<svg width="36" height="36" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="10" fill="#15C39A"/><path d="M24 13c-6.1 0-11 4.9-11 11s4.9 11 11 11c5.2 0 9.6-3.7 10.7-8.6h-5.2c-.9 2.2-3 3.6-5.5 3.6-3.3 0-6-2.7-6-6s2.7-6 6-6c1.8 0 3.4.8 4.4 2.1l3.8-3.4C30.6 14.7 27.5 13 24 13z" fill="#FFFFFF"/></svg>`,
    fullDesc1: 'Grammarly Premium adalah asisten penulisan bahasa Inggris nomor satu di dunia yang membantu akademisi, mahasiswa, dan profesional menghasilkan naskah yang percaya diri, lancar, dan bebas kesalahan tata bahasa.',
    fullDesc2: 'Bukan sekadar mengecek ejaan (typo), Grammarly menganalisis kejelasan struktur kalimat, kekayaan kosakata (vocabulary enhancement), nada emosional tulisan, serta memindai 16 miliar halaman web untuk memastikan orisinalitas tanpa plagiarisme.',
    features: [
      'Pemeriksaan grammar, tanda baca, dan ejaan bahasa Inggris komprehensif.',
      'Saran penyusunan ulang kalimat yang berbelit-belit (Full-sentence rewrites).',
      'Pendeteksi nada bicara tulisan (Tone Detector: formal, santai, persuasif).',
      'Fitur Plagiarism Checker memindai miliaran dokumen akademik & halaman web.',
      'Ekstensi browser berjalan mulus di Gmail, Google Docs, LinkedIn, dan Word.'
    ],
    steps: [
      'Masuk ke grammarly.com dengan akun lisensi resmi yang disediakan Bernadya.',
      'Pasang ekstensi browser Grammarly atau aplikasi Grammarly for Desktop.',
      'Mulai mengetik di Microsoft Word, Google Docs, atau email Anda.',
      'Terapkan saran koreksi dengan satu klik untuk tulisan bahasa Inggris yang elegan.'
    ],
    faqs: [
      { q: 'Apakah Grammarly bisa digunakan langsung di Microsoft Word?', a: 'Ya, Grammarly memiliki add-in resmi untuk Microsoft Word dan Google Docs yang bekerja secara real-time.' },
      { q: 'Apakah Plagiarism Checker akurat untuk skripsi & jurnal?', a: 'Sangat akurat, database Grammarly membandingkan tulisan Anda dengan miliaran dokumen web dan arsip publikasi ProQuest.' }
    ]
  },

  // 18. GitHub Copilot (NEW)
  {
    slug: 'github-copilot',
    name: 'GitHub Copilot',
    category: 'productivity',
    categoryLabel: 'Productivity',
    appColor: '#6366F1',
    badge: 'AI Pair Programmer',
    badgeClass: 'badge-indigo',
    tagline: 'Asisten koding AI dari GitHub yang melengkapi kode secara real-time, mendeteksi bug, dan menulis fungsi otomatis di editor kode Anda.',
    tags: 'koding coding programmer developer software vscode python javascript react github copilot',
    platforms: ['VS Code', 'Visual Studio', 'JetBrains IDEs', 'Neovim'],
    svg: `<svg width="36" height="36" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="10" fill="#24292E"/><circle cx="19" cy="22" r="3" fill="#60A5FA"/><circle cx="29" cy="22" r="3" fill="#60A5FA"/><path d="M18 29c2 2 10 2 12 0" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round"/><path d="M14 18c0-5 4-8 10-8s10 3 10 8" stroke="#FFFFFF" stroke-width="2.5"/></svg>`,
    fullDesc1: 'GitHub Copilot adalah partner pemrograman kecerdasan buatan paling dicintai oleh jutaan developer software di seluruh dunia. Dilatih pada miliaran baris kode open source, Copilot memahami logika program Anda dan menyarankan baris atau seluruh fungsi kode secara instan.',
    fullDesc2: 'Bekerja mulus di dalam VS Code, IntelliJ, PyCharm, dan Visual Studio. Cukup ketik komentar bahasa manusia, dan saksikan Copilot menuliskan implementasi kodenya untuk Anda.',
    features: [
      'Pelengkapan kode otomatis (Code Autocomplete) dalam puluhan bahasa pemrograman.',
      'Copilot Chat terintegrasi di editor untuk tanya jawab bug, refactoring, dan arsitektur.',
      'Pembuatan unit test otomatis untuk memvalidasi fungsionalitas software Anda.',
      'Penjelasan kode legacy yang rumit ke dalam bahasa manusia yang mudah dipahami.',
      'Dukungan penuh untuk Python, JavaScript, TypeScript, PHP, Go, C++, dan Java.'
    ],
    steps: [
      'Tautkan akun GitHub Anda ke lisensi Copilot yang diaktivasi tim Bernadya.',
      'Pasang ekstensi "GitHub Copilot" resmi di editor VS Code atau JetBrains.',
      'Login ke akun GitHub Anda melalui jendela editor.',
      'Mulai koding dan tekan tombol `Tab` untuk menerima saran kode cerdas.'
    ],
    faqs: [
      { q: 'Apakah Copilot bisa bekerja di VS Code?', a: 'Ya, VS Code adalah platform utama GitHub Copilot dengan integrasi Copilot Chat di sidebar.' },
      { q: 'Bahasa pemrograman apa saja yang didukung?', a: 'Mendukung hampir seluruh bahasa pemrograman populer: JavaScript, TypeScript, Python, PHP, Java, C#, Go, HTML, CSS, SQL, dan lain-lain.' }
    ]
  },

  // 19. Prime Video (NEW)
  {
    slug: 'prime-video',
    name: 'Prime Video (Amazon)',
    category: 'entertainment',
    categoryLabel: 'Entertainment',
    appColor: '#00A8E1',
    badge: 'Blockbuster Originals',
    badgeClass: 'badge-blue',
    tagline: 'Layanan streaming ribuan film blockbuster, serial The Boys, Rings of Power, serta serial lokal eksklusif dengan resolusi 4K HDR.',
    tags: 'prime video amazon film movie series the boys lord of the rings streaming 4k nonton',
    platforms: ['Android', 'iOS', 'Smart TV', 'Web Browser', 'Fire TV'],
    svg: `<svg width="36" height="36" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="10" fill="#00A8E1"/><path d="M14 26c6 4 14 4 20 0" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round"/><path d="M31 23l4 3-4 3" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    fullDesc1: 'Amazon Prime Video menghadirkan katalog film box office Hollywood, serial pemenang Emmy Awards, dan konten orisinal bernilai miliaran dolar seperti The Lord of the Rings: The Rings of Power, The Boys, Reacher, dan Fallout.',
    fullDesc2: 'Dilengkapi fitur canggih X-Ray yang didukung IMDb untuk melihat nama aktor, soundtrack lagu, dan fakta menarik di balik adegan yang sedang Anda tonton secara real-time.',
    features: [
      'Akses ke seluruh serial Amazon Originals ternama dan film bioskop Hollywood terkini.',
      'Kualitas gambar sinematik 4K Ultra HD, HDR10+, dan Dolby Vision.',
      'Fitur X-Ray eksklusif didukung IMDb untuk informasi aktor & soundtrack film.',
      'Dukungan download tontonan offline di smartphone dan tablet.',
      'Pilihan subtitle dan dubbing multi-bahasa termasuk bahasa Indonesia.'
    ],
    steps: [
      'Terima kredensial profil privat Prime Video dari tim Bernadya Store.',
      'Buka aplikasi Prime Video di Smart TV atau smartphone Anda.',
      'Pilih profil nomor yang dialokasikan khusus untuk Anda.',
      'Nikmati streaming serial epik dan film bioskop dengan resolusi 4K HDR.'
    ],
    faqs: [
      { q: 'Apa itu fitur X-Ray di Prime Video?', a: 'Fitur X-Ray memungkinkan Anda melihat nama pemain dan lagu yang diputar di setiap detik adegan tanpa perlu mencari di Google.' },
      { q: 'Apakah ada tontonan anime dan drama Korea?', a: 'Ya, Prime Video memiliki banyak koleksi anime populer terbaru dan drakor eksklusif.' }
    ]
  },

  // 20. HBO GO / Max (NEW)
  {
    slug: 'hbo-go',
    name: 'HBO GO / Max',
    category: 'entertainment',
    categoryLabel: 'Entertainment',
    appColor: '#5822B4',
    badge: 'Serial Ikonik & Bioskop',
    badgeClass: 'badge-purple',
    tagline: 'Pusat tontonan serial terbaik dunia HBO (The Last of Us, House of the Dragon, Succession) dan film blockbuster Warner Bros.',
    tags: 'hbo hbo go hbo max the last of us game of thrones harry potter film bioskop streaming',
    platforms: ['Android', 'iOS', 'Smart TV', 'Web Browser', 'Apple TV'],
    svg: `<svg width="36" height="36" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="10" fill="#5822B4"/><path d="M14 16h5v16h-5zM29 16h5v16h-5zM14 24h20" stroke="#FFFFFF" stroke-width="4"/><circle cx="34" cy="24" r="5" fill="#FFFFFF"/></svg>`,
    fullDesc1: 'HBO GO adalah rumah bagi serial televisi paling legendaris dan berkelas dalam sejarah pertelevisian dunia. Nikmati mahakarya peraih ratusan penghargaan seperti Game of Thrones, House of the Dragon, The Last of Us, Euphoria, dan Succession.',
    fullDesc2: 'Juga mencakup seluruh katalog film box office Warner Bros (seperti Harry Potter universe, DC Extended Universe, Dune) serta film dokumenter HBO eksklusif.',
    features: [
      'Streaming seluruh musim serial mahakarya HBO Original tanpa potongan sensor.',
      'Katalog lengkap film Warner Bros Pictures, DC Universe, dan Cartoon Network.',
      'Kualitas video Full HD hingga 4K dengan audio surround berkualitas teater.',
      'Tayang serentak bersamaan dengan jadwal siaran resmi HBO Amerika Serikat.',
      'Fitur unduh episode untuk dinikmati saat penerbangan atau tanpa internet.'
    ],
    steps: [
      'Gunakan kredensial akun HBO GO yang diserahkan oleh tim Bernadya.',
      'Buka aplikasi HBO GO di Smart TV atau ponsel pintar Anda.',
      'Masuk dengan akun terverifikasi dan pilih tayangan favorit.',
      'Tonton serial legendaris favorit Anda dengan subtitle bahasa Indonesia resmi.'
    ],
    faqs: [
      { q: 'Apakah serial tayang bersamaan dengan jam tayang di Amerika?', a: 'Ya, episode baru serial HBO Original dirilis bersamaan dengan waktu tayang global di AS.' },
      { q: 'Apakah film Harry Potter lengkap ada di sini?', a: 'Ya, seluruh 8 film saga Harry Potter dan Fantastic Beasts tersedia lengkap di HBO GO.' }
    ]
  },

  // 21. Vidio Premier Platinum (NEW)
  {
    slug: 'vidio-premier',
    name: 'Vidio Premier Platinum',
    category: 'entertainment',
    categoryLabel: 'Entertainment',
    appColor: '#E50914',
    badge: 'Live Streaming Olahraga',
    badgeClass: 'badge-rose',
    tagline: 'Siaran langsung resmi Liga Inggris (Premier League), BRI Liga 1, UCL, drama Korea, sinetron, dan tayangan original lokal terbaik.',
    tags: 'vidio bola sepakbola liga inggris epl bri liga 1 champions league ucl drakor streaming live olahraga',
    platforms: ['Android', 'iOS', 'Smart TV', 'Web Browser'],
    svg: `<svg width="36" height="36" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="10" fill="#E50914"/><polygon points="18,14 34,24 18,34" fill="#FFFFFF"/><circle cx="36" cy="14" r="3" fill="#FBBF24"/></svg>`,
    fullDesc1: 'Vidio adalah platform streaming terpopuler di Indonesia dan pemegang hak siar resmi pertandingan olahraga paling bergengsi: Premier League (Liga Inggris), BRI Liga 1, UEFA Champions League, NBA, hingga turnamen bulu tangkis BWF.',
    fullDesc2: 'Tak hanya olahraga, Vidio menyuguhkan Vidio Original Series berkualitas tinggi yang dibintangi aktor papan atas Indonesia, film bioskop lokal, anime simulcast, dan drama Korea terkini.',
    features: [
      'Siaran langsung (Live Streaming) resmi Liga Inggris (EPL) dan kompetisi olahraga dunia.',
      'Akses ke serial orisinal Indonesia (Vidio Originals) eksklusif setiap minggu.',
      'Siaran ulang (Full Match Replay) dan cuplikan highlight pertandingan lengkap.',
      'Kualitas siaran Full HD jernih dengan komentator berbahasa Indonesia & Inggris.',
      'Dukungan tayangan di layar lebar Smart TV untuk nobar keluarga.'
    ],
    steps: [
      'Aktifkan akun Vidio Anda melalui sistem verifikasi langganan Bernadya.',
      'Buka aplikasi Vidio di smartphone atau aplikasi TV Anda.',
      'Masuk dan cek status aktif paket Platinum / Diamond Anda.',
      'Pilih jadwal pertandingan live sepak bola atau serial lokal favorit Anda.'
    ],
    faqs: [
      { q: 'Apakah bisa menonton seluruh pertandingan Liga Inggris?', a: 'Ya, paket olahraga Vidio menyiarkan 380 pertandingan Premier League semusim secara penuh.' },
      { q: 'Bisa nonton di Smart TV saat ada big match?', a: 'Bisa, aplikasi Vidio di Smart TV mendukung kualitas Full HD tanpa jeda siaran.' }
    ]
  },

  // 22. Apple Music / Apple One (NEW)
  {
    slug: 'apple-music',
    name: 'Apple Music',
    category: 'entertainment',
    categoryLabel: 'Entertainment',
    appColor: '#FA243C',
    badge: 'Audio Lossless & Atmos',
    badgeClass: 'badge-rose',
    tagline: 'Dengarkan 100+ juta lagu dalam kualitas Lossless Audio resolusi tinggi, Dolby Atmos Spatial Audio, serta lirik real-time.',
    tags: 'apple music audio lossless dolby atmos spatial audio lagu playlist karaoke bernadya',
    platforms: ['iOS', 'macOS', 'Android', 'Windows', 'Web Browser'],
    svg: `<svg width="36" height="36" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="10" fill="#FA243C"/><path d="M29 14v13.5c0 2.5-2 4.5-4.5 4.5S20 30 20 27.5s2-4.5 4.5-4.5c.9 0 1.7.3 2.5.8V17l-10 2.5V30c0 2.5-2 4.5-4.5 4.5S8 32.5 8 30s2-4.5 4.5-4.5c.9 0 1.7.3 2.5.8v-14l14-3.3z" fill="#FFFFFF"/></svg>`,
    fullDesc1: 'Apple Music adalah surga bagi para penikmat musik sejati (audiophile). Menyajikan lebih dari 100 juta lagu dalam format Lossless Audio 24-bit/192kHz tanpa kompresi yang menyajikan setiap petikan instrumen dengan kejernihan luar biasa.',
    fullDesc2: 'Rasakan sensasi berada di tengah studio rekaman dengan Spatial Audio bertenaga Dolby Atmos, fitur Apple Music Sing untuk karaoke interaktif, dan stasiun radio live Apple Music 1.',
    features: [
      'Kualitas suara Hi-Res Lossless Audio hingga 24-bit/192 kHz tanpa kompresi.',
      'Spatial Audio dengan Dolby Atmos untuk panggung suara 3 dimensi yang imersif.',
      'Fitur Apple Music Sing dengan vokal yang dapat disesuaikan untuk karaoke.',
      'Akses 100+ juta lagu tanpa jeda iklan dan kurasi playlist dari musisi dunia.',
      'Dapat digunakan di ekosistem Apple dan aplikasi resmi di perangkat Android & PC.'
    ],
    steps: [
      'Bergabunglah ke Apple Music Family plan resmi melalui tautan undangan Apple ID Anda.',
      'Buka aplikasi Musik (Apple Music) di iPhone, iPad, Mac, atau smartphone Android Anda.',
      'Aktifkan opsi "Lossless Audio" dan "Dolby Atmos" di menu pengaturan suara.',
      'Pasang headphone Anda dan nikmati keajaiban suara beresolusi master studio.'
    ],
    faqs: [
      { q: 'Apakah Apple Music bisa digunakan di HP Android?', a: 'Bisa! Apple Music memiliki aplikasi resmi di Google Play Store dengan dukungan penuh Lossless Audio & Dolby Atmos.' },
      { q: 'Apakah ada biaya tambahan untuk mendengarkan lagu Lossless?', a: 'Tidak ada biaya tambahan, seluruh katalog Lossless dan Spatial Audio sudah termasuk dalam paket langganan.' }
    ]
  },

  // 23. Coursera Plus (NEW)
  {
    slug: 'coursera-plus',
    name: 'Coursera Plus',
    category: 'education',
    categoryLabel: 'Education',
    appColor: '#0056D2',
    badge: 'Sertifikasi Global',
    badgeClass: 'badge-blue',
    tagline: 'Akses ribuan kursus daring terakreditasi, sertifikat profesional resmi dari Google, IBM, Stanford, dan universitas ternama dunia.',
    tags: 'coursera kuliah kursus online sertifikat resmi google ibm data science coding bisnis',
    platforms: ['Web Browser', 'Android', 'iOS'],
    svg: `<svg width="36" height="36" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="10" fill="#0056D2"/><path d="M24 14c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm-2 14.5l-4-4 1.4-1.4 2.6 2.6 6.6-6.6 1.4 1.4-8 8z" fill="#FFFFFF"/></svg>`,
    fullDesc1: 'Coursera Plus membuka gerbang masa depan karier Anda dengan akses tak terbatas ke lebih dari 7.000 kursus bergengsi, proyek terpandu, dan program Sertifikasi Profesional dari raksasa teknologi seperti Google, IBM, Meta, serta universitas top dunia.',
    fullDesc2: 'Setiap kursus yang Anda selesaikan menyertakan sertifikat digital resmi berlisensi yang dapat diverifikasi langsung dan dipajang di profil LinkedIn serta CV kerja Anda.',
    features: [
      'Akses tak terbatas ke 7.000+ kursus, spesialisasi, dan sertifikat profesional.',
      'Sertifikat resmi dari Google, IBM, Stanford University, Yale, dan universitas global.',
      'Praktek langsung dengan Guided Projects di mesin komputasi cloud interaktif.',
      'Fleksibilitas jadwal belajar mandiri (self-paced) sesuai ritme kesibukan Anda.',
      'Sertifikat dapat ditautkan langsung ke LinkedIn dan kredensial CV profesional.'
    ],
    steps: [
      'Daftarkan email Anda ke lisensi Coursera Plus yang diaktifkan tim Bernadya.',
      'Buka coursera.org dan cari bidang keahlian yang ingin Anda pelajari (IT, Bisnis, Data).',
      'Mulai tonton materi video, kerjakan kuis, dan selesaikan tugas akhir.',
      'Dapatkan sertifikat digital internasional resmi berlisensi atas nama pribadi Anda.'
    ],
    faqs: [
      { q: 'Apakah sertifikat atas nama saya sendiri?', a: 'Ya, sertifikat diterbitkan resmi menggunakan nama lengkap Anda dan memiliki kode verifikasi ID unik global.' },
      { q: 'Berapa banyak kursus yang bisa saya ambil bersamaan?', a: 'Tidak ada batasan! Anda bebas mengambil sebanyak mungkin kursus dan sertifikasi sekaligus.' }
    ]
  },

  // 24. Google One (2 TB + AI) (NEW)
  {
    slug: 'google-one',
    name: 'Google One (2 TB Cloud)',
    category: 'utilities',
    categoryLabel: 'Utilities',
    appColor: '#4285F4',
    badge: 'Cloud Storage 2TB',
    badgeClass: 'badge-blue',
    tagline: 'Solusi kapasitas cloud lega 2.000 GB untuk Google Drive, Foto, dan Gmail dengan fitur backup otomatis keluarga dan Gemini AI.',
    tags: 'google drive cloud 2tb penyimpanan foto gmail backup android data aman google one',
    platforms: ['Android', 'iOS', 'Windows', 'macOS', 'Web Browser'],
    svg: `<svg width="36" height="36" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="10" fill="#4285F4"/><path d="M15 24a9 9 0 0 1 18 0" stroke="#34A853" stroke-width="3" stroke-linecap="round"/><path d="M15 24h18" stroke="#EA4335" stroke-width="3"/><circle cx="24" cy="24" r="5" fill="#FBBC05"/></svg>`,
    fullDesc1: 'Google One 2 TB adalah jawaban tuntas bagi masalah memori HP penuh dan kebutuhan pencadangan file digital Anda. Memberikan ruang penyimpanan lega sebesar 2.000 GB yang terintegrasi langsung di seluruh ekosistem Google: Google Drive, Google Foto, dan Gmail.',
    fullDesc2: 'Foto dan video dari smartphone dicadangkan otomatis dalam resolusi aslinya (Original Quality), dilengkapi fitur pengeditan Magic Eraser di Google Foto, dan kapasitas dapat dibagikan hingga ke 5 anggota keluarga.',
    features: [
      'Kapasitas penyimpanan raksasa 2.000 GB (2 TB) untuk Drive, Foto, dan Gmail.',
      'Pencadangan foto dan video resolusi penuh (Original Quality) tanpa kompresi.',
      'Fitur Magic Eraser, Unblur, dan Portrait Light eksklusif di aplikasi Google Foto.',
      'Kapasitas dapat dibagikan hingga 5 akun keluarga dengan privasi data terpisah.',
      'Layanan pemantauan Dark Web Report untuk memproteksi email dan data pribadi Anda.'
    ],
    steps: [
      'Kirimkan alamat Gmail Anda untuk diundang ke grup Google One resmi.',
      'Buka tautan undangan dari Google dan klik "Gabung / Accept".',
      'Kapasitas akun Google Anda langsung bertambah menjadi 2 TB secara instan.',
      'Nyalakan backup otomatis di aplikasi Google Foto untuk mengosongkan memori HP.'
    ],
    faqs: [
      { q: 'Apakah anggota keluarga lain bisa melihat foto/file saya?', a: 'Tidak sama sekali. Kapasitas ruang penyimpanan dibagi, namun seluruh file, foto, dan email Anda 100% privat dan tidak dapat dilihat orang lain.' },
      { q: 'Apakah bisa digunakan di akun Gmail pribadi saya?', a: 'Ya, langsung aktif di akun Gmail pribadi Anda tanpa perlu membuat akun baru.' }
    ]
  }
];

module.exports = products;
