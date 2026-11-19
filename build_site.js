const fs = require('fs');
const path = require('path');
const products = require('./scratch_products_data.js');

const rootDir = __dirname;
const produkDir = path.join(rootDir, 'produk');

if (!fs.existsSync(produkDir)) {
  fs.mkdirSync(produkDir, { recursive: true });
}

// 1. Template Helper for Navbars
function getNavbarHtml(activePage, isSubdir = false) {
  const prefix = isSubdir ? '../' : '';
  const isActive = (page) => activePage === page ? ' active' : '';

  return `    <!-- Site Header & Navbar (Glassmorphic & Smooth) -->
    <header class="site-header">
        <div class="container">
            <nav class="navbar" aria-label="Navigasi Utama">
                <!-- Brand Logo -->
                <a href="${prefix}index.html" class="nav-brand" aria-label="Beranda Bernadya Store">
                    <div class="brand-icon" aria-hidden="true">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="9" cy="21" r="1"></circle>
                            <circle cx="20" cy="21" r="1"></circle>
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                        </svg>
                    </div>
                    <div class="brand-text">
                        <span class="brand-title">Bernadya <span class="brand-title-accent">Store</span></span>
                        <span class="brand-subtitle">Curated Digital Goods</span>
                    </div>
                </a>

                <!-- Desktop Navigation -->
                <div class="nav-desktop">
                    <ul class="nav-links">
                        <li>
                            <a href="${prefix}index.html" class="nav-link${isActive('index')}">Beranda</a>
                        </li>
                        <li>
                            <a href="${prefix}produk.html" class="nav-link${isActive('produk')}">
                                <span>Produk Digital</span>
                                <span class="nav-link-badge">24+</span>
                            </a>
                        </li>
                        <li>
                            <a href="${prefix}cerita.html" class="nav-link${isActive('cerita')}">
                                <span>Cerita Kami</span>
                                <span class="nav-link-badge nav-link-badge-story">4 Kisah</span>
                            </a>
                        </li>
                        <li>
                            <a href="${prefix}tentang.html" class="nav-link${isActive('tentang')}">Tentang Kami</a>
                        </li>
                        <li>
                            <a href="${prefix}faq.html" class="nav-link${isActive('faq')}">FAQ</a>
                        </li>
                        <li>
                            <a href="${prefix}kontak.html" class="nav-link${isActive('kontak')}">Kontak</a>
                        </li>
                    </ul>

                    <div class="nav-actions">
                        <a href="${prefix}kontak.html" class="btn btn-primary btn-sm">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                            </svg>
                            <span>Hubungi Kami</span>
                        </a>
                    </div>
                </div>

                <!-- Mobile Hamburger Toggle -->
                <button type="button" class="nav-toggle" id="navToggle" aria-label="Buka Menu Navigasi" aria-expanded="false" aria-controls="mobileDrawer">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </nav>
        </div>

        <!-- Mobile Drawer Modal -->
        <div class="nav-mobile-drawer" id="mobileDrawer" aria-hidden="true">
            <div class="nav-mobile-content">
                <ul class="nav-mobile-list">
                    <li class="nav-mobile-item">
                        <a href="${prefix}index.html" class="${isActive('index')}">
                            <div class="nav-mobile-link-left">
                                <span class="nav-mobile-link-icon">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                                </span>
                                <span>Beranda</span>
                            </div>
                            <span class="nav-mobile-chevron">&rarr;</span>
                        </a>
                    </li>
                    <li class="nav-mobile-item">
                        <a href="${prefix}produk.html" class="${isActive('produk')}">
                            <div class="nav-mobile-link-left">
                                <span class="nav-mobile-link-icon">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                                </span>
                                <span>Produk Digital</span>
                            </div>
                            <span class="nav-link-badge">24+</span>
                        </a>
                    </li>
                    <li class="nav-mobile-item">
                        <a href="${prefix}cerita.html" class="${isActive('cerita')}">
                            <div class="nav-mobile-link-left">
                                <span class="nav-mobile-link-icon">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                                </span>
                                <span>Cerita Kami (4 Kisah Nyata)</span>
                            </div>
                            <span class="nav-mobile-chevron">&rarr;</span>
                        </a>
                    </li>
                    <li class="nav-mobile-item">
                        <a href="${prefix}tentang.html" class="${isActive('tentang')}">
                            <div class="nav-mobile-link-left">
                                <span class="nav-mobile-link-icon">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                                </span>
                                <span>Tentang Kami</span>
                            </div>
                            <span class="nav-mobile-chevron">&rarr;</span>
                        </a>
                    </li>
                    <li class="nav-mobile-item">
                        <a href="${prefix}faq.html" class="${isActive('faq')}">
                            <div class="nav-mobile-link-left">
                                <span class="nav-mobile-link-icon">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                                </span>
                                <span>FAQ</span>
                            </div>
                            <span class="nav-mobile-chevron">&rarr;</span>
                        </a>
                    </li>
                    <li class="nav-mobile-item">
                        <a href="${prefix}kontak.html" class="${isActive('kontak')}">
                            <div class="nav-mobile-link-left">
                                <span class="nav-mobile-link-icon">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                </span>
                                <span>Kontak</span>
                            </div>
                            <span class="nav-mobile-chevron">&rarr;</span>
                        </a>
                    </li>
                </ul>

                <a href="https://wa.me/6285714310516?text=Halo%20Admin%20Bernadya%20Store%2C%20saya%20ingin%20konsultasi%20aplikasi%20premium" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp" style="width: 100%; border-radius: 14px;">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                    </svg>
                    <span>Konsultasi via WhatsApp</span>
                </a>

                <div class="nav-mobile-status">
                    <span class="nav-mobile-status-dot"></span>
                    <span>Customer Service Online 24/7</span>
                </div>
            </div>
        </div>
    </header>`;
}

// 2. Generate Product Card HTML
function renderProductCard(p, isCatalog = true, isSubdir = false) {
  const prefix = isSubdir ? '' : 'produk/';
  const logoPrefix = isSubdir ? '../' : '';
  const catalogClass = isCatalog ? ' catalog-product-item' : '';
  const dataAttributes = isCatalog 
    ? ` data-category="${p.category}" data-name="${p.name}" data-desc="${p.tagline}" data-tags="${p.tags}"`
    : '';

  return `<div class="product-card${catalogClass}"${dataAttributes} style="--card-app-color: ${p.appColor};">
        <div class="product-card-top">
            <div class="product-logo-box" aria-hidden="true">
                <img src="${logoPrefix}assets/images/logos/${p.slug}.svg" alt="Logo Resmi ${p.name}" class="product-custom-logo" width="38" height="38" loading="lazy">
            </div>
            <span class="badge ${p.badgeClass} product-badge">${p.badge}</span>
        </div>
        <div class="product-category">${p.categoryLabel}</div>
        <h3 class="product-name">
            <a href="${prefix}${p.slug}.html">${p.name}</a>
        </h3>
        <p class="product-desc">${p.tagline}</p>
        <div class="product-footer">
            <a href="${prefix}${p.slug}.html" class="btn btn-secondary btn-sm btn-product-action">
                <span>Informasi &amp; Order</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
            </a>
        </div>
    </div>`;
}

// 3. Generate Catalog Page HTML (produk.html & katalog.html)
function generateCatalogHtml() {
  const allCardsHtml = products.map(p => renderProductCard(p, true, false)).join('');

  return `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Katalog Produk Digital &amp; Aplikasi Premium - Bernadya Store</title>
    <meta name="description" content="Jelajahi informasi dan spesifikasi 24+ aplikasi digital terkurasi untuk desain grafis, kecerdasan buatan, pekerjaan kantor, dan hiburan 4K.">
    <meta name="theme-color" content="#0A0F1D">

    <!-- Google Fonts: Inter -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">

    <!-- Bernadya Store Custom CSS -->
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
${getNavbarHtml('produk', false)}

    <!-- Main Content Area -->
    <main id="main-content">
        <div class="section section-white" style="padding-bottom: var(--spacing-xl);">
            <div class="container">
                <div class="breadcrumbs">
                    <a href="index.html">Beranda</a>
                    <span>&bull;</span>
                    <span class="text-navy">Katalog Produk (${products.length} Aplikasi)</span>
                </div>

                <div class="section-header" style="text-align: left; margin-bottom: var(--spacing-xl); max-width: 100%;">
                    <span class="section-tag">Katalog Informasi Lengkap</span>
                    <h1>Produk Digital &amp; Aplikasi Premium</h1>
                    <p>Temukan informasi lengkap, fitur unggulan, dan panduan penggunaan 24+ aplikasi premium pilihan untuk menunjang segala aktivitas digital, kreativitas, dan hiburan Anda.</p>
                </div>
            </div>
        </div>

                <!-- Interactive Storytelling Section Tucked in Catalog: 4 Kisah Nyata Sahabat Bernadya -->
        <section class="section section-alt" style="padding-bottom: 0;">
            <div class="container">
                <div class="catalog-story-section">
                    <div class="catalog-story-header">
                        <span class="story-badge-highlight">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                            </svg>
                            ✦ Inspirasi Pengguna &bull; 4 Kisah Nyata
                        </span>
                        <h2>Kisah di Balik Aplikasi: Bagaimana Mereka Memanfaatkannya?</h2>
                        <p>
                            Bukan sekadar daftar aplikasi. Temukan bagaimana teman-teman kreator, mahasiswa, keluarga, dan developer menggunakan aplikasi dari Bernadya Store untuk mengatasi keterbatasan dan meraih karya terbaik mereka.
                        </p>
                    </div>

                    <!-- 4 Interactive Tabs -->
                    <div class="catalog-story-tabs" role="tablist" aria-label="Pilih Kisah Pengguna">
                        <button type="button" class="catalog-story-tab-btn active" data-story-target="story-panel-sarah" role="tab" aria-selected="true">
                            <span>🎨 Sarah (Desainer &amp; Video)</span>
                        </button>
                        <button type="button" class="catalog-story-tab-btn" data-story-target="story-panel-dimas" role="tab" aria-selected="false">
                            <span>🎓 Dimas (Mahasiswa Skripsi)</span>
                        </button>
                        <button type="button" class="catalog-story-tab-btn" data-story-target="story-panel-nadia" role="tab" aria-selected="false">
                            <span>🎬 Keluarga Nadia (Streaming 4K)</span>
                        </button>
                        <button type="button" class="catalog-story-tab-btn" data-story-target="story-panel-hendra" role="tab" aria-selected="false">
                            <span>💻 Hendra (Developer &amp; Tech)</span>
                        </button>
                    </div>

                    <!-- Panel 1: Sarah -->
                    <div class="catalog-story-panel active" id="story-panel-sarah" role="tabpanel">
                        <div class="catalog-story-grid">
                            <div class="catalog-story-image-box">
                                <img src="assets/images/slide-creative.jpg" alt="Sarah Annisa - Freelance Designer" loading="lazy">
                                <span class="catalog-story-image-tag">🎨 Creative &amp; Design</span>
                                <div class="catalog-story-image-quote">
                                    "Workflow desain jadi 3x lebih cepat, kini rutin pegang 5 klien UMKM tetap!"
                                </div>
                            </div>
                            <div class="catalog-story-content">
                                <div class="catalog-story-meta">
                                    <div>
                                        <div class="catalog-story-name">Sarah Annisa (24 Tahun)</div>
                                        <div class="catalog-story-role">Freelance Graphic Designer &bull; Bandung</div>
                                    </div>
                                    <span class="badge badge-emerald">Efisiensi Kerja +75%</span>
                                </div>

                                <div class="catalog-story-tools">
                                    <span style="font-size: 0.75rem; color: var(--color-text-muted); font-weight: 600;">Aplikasi Pilihan:</span>
                                    <a href="produk/canva-pro.html" class="catalog-story-tool-pill">
                                        <img src="assets/images/logos/canva-pro.svg" alt="Canva Pro">
                                        <span>Canva Pro</span>
                                    </a>
                                    <a href="produk/capcut-pro.html" class="catalog-story-tool-pill">
                                        <img src="assets/images/logos/capcut-pro.svg" alt="CapCut Pro">
                                        <span>CapCut Pro</span>
                                    </a>
                                </div>

                                <h3 class="catalog-story-headline">
                                    "Dari Desainer Minim Modal Jadi Punya 5 Klien UMKM Tetap Setiap Bulan"
                                </h3>

                                <p class="catalog-story-desc">
                                    Dulu saat awal merintis freelance di kosan Bandung, Sarah selalu kehabisan waktu berjam-jam hanya mencari aset grafis gratis tanpa watermark hak cipta. Berlangganan mandiri ke website luar negeri terlalu mahal dan butuh kartu kredit. Di Bernadya Store, Sarah mengaktifkan Canva Pro &amp; CapCut Pro dalam 5 menit via WA dengan harga kantong mahasiswa. Waktu ekspor video dan desain konten berkurang drastis dari 6 jam jadi 90 menit per proyek!
                                </p>

                                <div class="catalog-story-stats-row">
                                    <span class="catalog-story-stat-chip">
                                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                        Aset Premium Bebas Watermark
                                    </span>
                                    <span class="catalog-story-stat-chip">
                                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                        Pengerjaan 3x Lebih Cepat
                                    </span>
                                    <span class="catalog-story-stat-chip">
                                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                        Hemat 75% Biaya Langganan
                                    </span>
                                </div>

                                <div class="catalog-story-actions">
                                    <a href="produk/canva-pro.html" class="btn btn-primary btn-sm">
                                        <span>Pelajari Canva Pro</span>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                    </a>
                                    <a href="https://wa.me/6285714310516?text=Halo%20Admin%2C%20saya%20tertarik%20paket%20kreator%20Canva%20dan%20CapCut%20seperti%20Sarah" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-sm">
                                        Pesan Paket Kreator via WA
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Panel 2: Dimas -->
                    <div class="catalog-story-panel" id="story-panel-dimas" role="tabpanel">
                        <div class="catalog-story-grid">
                            <div class="catalog-story-image-box">
                                <img src="assets/images/slide-productivity.jpg" alt="Dimas Prasetyo - Mahasiswa Skripsi" loading="lazy">
                                <span class="catalog-story-image-tag">🎓 Riset &amp; Akademisi</span>
                                <div class="catalog-story-image-quote">
                                    "Skripsi tuntas 2 bulan lebih cepat dan lolos sidang dengan predikat Cum Laude!"
                                </div>
                            </div>
                            <div class="catalog-story-content">
                                <div class="catalog-story-meta">
                                    <div>
                                        <div class="catalog-story-name">Dimas Prasetyo (21 Tahun)</div>
                                        <div class="catalog-story-role">Mahasiswa Teknik Informatika &bull; Yogyakarta</div>
                                    </div>
                                    <span class="badge badge-emerald">Lolos Sidang Cum Laude</span>
                                </div>

                                <div class="catalog-story-tools">
                                    <span style="font-size: 0.75rem; color: var(--color-text-muted); font-weight: 600;">Aplikasi Pilihan:</span>
                                    <a href="produk/chatgpt-plus.html" class="catalog-story-tool-pill">
                                        <img src="assets/images/logos/chatgpt-plus.svg" alt="ChatGPT Plus">
                                        <span>ChatGPT Plus (GPT-4o)</span>
                                    </a>
                                    <a href="produk/grammarly-premium.html" class="catalog-story-tool-pill">
                                        <img src="assets/images/logos/grammarly-premium.svg" alt="Grammarly">
                                        <span>Grammarly Premium</span>
                                    </a>
                                </div>

                                <h3 class="catalog-story-headline">
                                    "Skripsi Tuntas 2 Bulan Lebih Cepat &amp; Lolos Turnitin Tanpa Plagiasi"
                                </h3>

                                <p class="catalog-story-desc">
                                    Dimas sempat buntu berminggu-minggu saat menyusun bab pembahasan. Ratusan jurnal internasional berbahasa Inggris membuatnya kewalahan, sementara ChatGPT gratis sering overload. Bersama Bernadya Store, Dimas mengaktifkan ChatGPT Plus GPT-4o dan Grammarly resmi via QRIS. Fitur analisis dokumen AI membedah metodologi jurnal seketika, dan Grammarly memastikan abstrak bahasa Inggrisnya sempurna tanpa plagiasi.
                                </p>

                                <div class="catalog-story-stats-row">
                                    <span class="catalog-story-stat-chip">
                                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                        Bebas Limit Antrean GPT-4o
                                    </span>
                                    <span class="catalog-story-stat-chip">
                                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                        Turnitin &lt; 10%
                                    </span>
                                    <span class="catalog-story-stat-chip">
                                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                        Sidang 2 Bulan Lebih Awal
                                    </span>
                                </div>

                                <div class="catalog-story-actions">
                                    <a href="produk/chatgpt-plus.html" class="btn btn-primary btn-sm">
                                        <span>Pelajari ChatGPT Plus</span>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                    </a>
                                    <a href="https://wa.me/6285714310516?text=Halo%20Admin%2C%20saya%20tertarik%20paket%20skripsi%20ChatGPT%20dan%20Grammarly%20seperti%20Dimas" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-sm">
                                        Pesan Paket Skripsi via WA
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Panel 3: Nadia & Raka -->
                    <div class="catalog-story-panel" id="story-panel-nadia" role="tabpanel">
                        <div class="catalog-story-grid">
                            <div class="catalog-story-image-box">
                                <img src="assets/images/slide-entertainment.jpg" alt="Keluarga Nadia & Raka" loading="lazy">
                                <span class="catalog-story-image-tag">🎬 Streaming Keluarga</span>
                                <div class="catalog-story-image-quote">
                                    "Anak nonton aman bebas iklan, bapak-ibu bisa me-time nonton 4K super hemat!"
                                </div>
                            </div>
                            <div class="catalog-story-content">
                                <div class="catalog-story-meta">
                                    <div>
                                        <div class="catalog-story-name">Nadia &amp; Raka (Keluarga Muda)</div>
                                        <div class="catalog-story-role">Orang Tua 2 Balita &bull; Jakarta Selatan</div>
                                    </div>
                                    <span class="badge badge-emerald">Hemat Rp 250rb/Bulan</span>
                                </div>

                                <div class="catalog-story-tools">
                                    <span style="font-size: 0.75rem; color: var(--color-text-muted); font-weight: 600;">Aplikasi Pilihan:</span>
                                    <a href="produk/netflix-premium.html" class="catalog-story-tool-pill">
                                        <img src="assets/images/logos/netflix-premium.svg" alt="Netflix Premium">
                                        <span>Netflix 4K UHD</span>
                                    </a>
                                    <a href="produk/youtube-premium.html" class="catalog-story-tool-pill">
                                        <img src="assets/images/logos/youtube-premium.svg" alt="YouTube Premium">
                                        <span>YouTube Premium</span>
                                    </a>
                                </div>

                                <h3 class="catalog-story-headline">
                                    "Akhir Pekan Hangat Bebas Iklan &amp; Hemat Biaya Hiburan Hingga 80%"
                                </h3>

                                <p class="catalog-story-desc">
                                    Nadia cemas saat balitanya sering disuguhi iklan komersial tak terduga saat menonton video edukasi anak di YouTube. Langganan resmi dollar setiap bulan juga membebani anggaran keluarga. Lewat Bernadya Store, paket keluarga Netflix 4K UHD dan YouTube Premium diaktifkan dalam hitungan menit di Smart TV dan tablet anak, memberikan tontonan aman sekaligus menghemat lebih dari Rp 250.000 per bulan!
                                </p>

                                <div class="catalog-story-stats-row">
                                    <span class="catalog-story-stat-chip">
                                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                        100% Bebas Iklan Komersial
                                    </span>
                                    <span class="catalog-story-stat-chip">
                                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                        Kualitas 4K Ultra HD &amp; HDR
                                    </span>
                                    <span class="catalog-story-stat-chip">
                                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                        Garansi Ganti Baru
                                    </span>
                                </div>

                                <div class="catalog-story-actions">
                                    <a href="produk/netflix-premium.html" class="btn btn-primary btn-sm">
                                        <span>Pelajari Netflix 4K</span>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                    </a>
                                    <a href="https://wa.me/6285714310516?text=Halo%20Admin%2C%20saya%20tertarik%20paket%20streaming%20keluarga%20Netflix%20dan%20YouTube" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-sm">
                                        Pesan Paket Keluarga via WA
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Panel 4: Hendra -->
                    <div class="catalog-story-panel" id="story-panel-hendra" role="tabpanel">
                        <div class="catalog-story-grid">
                            <div class="catalog-story-image-box">
                                <img src="assets/images/story-community.jpg" alt="Hendra Kurniawan - Software Engineer" loading="lazy">
                                <span class="catalog-story-image-tag">💻 Developer &amp; Tech</span>
                                <div class="catalog-story-image-quote">
                                    "Sprint coding 2 minggu beres dalam 7 hari dengan lisensi resmi aman!"
                                </div>
                            </div>
                            <div class="catalog-story-content">
                                <div class="catalog-story-meta">
                                    <div>
                                        <div class="catalog-story-name">Hendra Kurniawan (30 Tahun)</div>
                                        <div class="catalog-story-role">Remote Software Engineer &bull; Surabaya</div>
                                    </div>
                                    <span class="badge badge-emerald">Waktu Coding -50%</span>
                                </div>

                                <div class="catalog-story-tools">
                                    <span style="font-size: 0.75rem; color: var(--color-text-muted); font-weight: 600;">Aplikasi Pilihan:</span>
                                    <a href="produk/github-copilot.html" class="catalog-story-tool-pill">
                                        <img src="assets/images/logos/github-copilot.svg" alt="GitHub Copilot">
                                        <span>GitHub Copilot</span>
                                    </a>
                                    <a href="produk/microsoft-365.html" class="catalog-story-tool-pill">
                                        <img src="assets/images/logos/microsoft-365.svg" alt="Microsoft 365">
                                        <span>Microsoft 365</span>
                                    </a>
                                </div>

                                <h3 class="catalog-story-headline">
                                    "Sprint Coding 2x Lebih Cepat Tanpa Was-Was Akun Terblokir"
                                </h3>

                                <p class="catalog-story-desc">
                                    Sebagai programmer remote klien luar negeri, Hendra butuh GitHub Copilot untuk menyelesaikan backlog fitur padat. Pernah tertipu lisensi murah di forum gelap yang berujung akunnya di-suspend dan proyek terhambat. Hendra lalu beralih ke Bernadya Store karena jaminan 100% lisensi resmi yang stabil dan bergaransi penuh, memangkas waktu coding boilerplate hingga 50%.
                                </p>

                                <div class="catalog-story-stats-row">
                                    <span class="catalog-story-stat-chip">
                                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                        Auto-Complete AI Presisi
                                    </span>
                                    <span class="catalog-story-stat-chip">
                                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                        100% Akun Resmi &amp; Garansi
                                    </span>
                                    <span class="catalog-story-stat-chip">
                                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                        Sprint Selesai 50% Lebih Cepat
                                    </span>
                                </div>

                                <div class="catalog-story-actions">
                                    <a href="produk/github-copilot.html" class="btn btn-primary btn-sm">
                                        <span>Pelajari GitHub Copilot</span>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                    </a>
                                    <a href="https://wa.me/6285714310516?text=Halo%20Admin%2C%20saya%20tertarik%20paket%20developer%20GitHub%20Copilot%20seperti%20Hendra" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-sm">
                                        Pesan Paket Developer via WA
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="section section-alt" id="catalogApp">
            <div class="container">
                <!-- Search & Filter Toolbar -->
                <div class="catalog-toolbar">
                    <div class="catalog-search-row">
                        <div class="search-input-wrapper">
                            <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                            <input type="text" class="search-input" id="catalogSearch" placeholder="Cari aplikasi (ChatGPT, Netflix, Canva, Desain, Film, AI)..." aria-label="Cari aplikasi">
                            <button type="button" class="search-clear-btn" id="catalogSearchClear" aria-label="Hapus Pencarian">&times;</button>
                        </div>

                        <div style="display: flex; align-items: center; gap: 0.75rem;">
                            <label for="catalogSort" style="font-size: var(--font-size-xs); color: var(--color-text-secondary); font-weight: 600;">
                                Urutkan:
                            </label>
                            <select id="catalogSort" class="sort-select" aria-label="Urutan Produk">
                                <option value="asc">Nama A &ndash; Z</option>
                                <option value="desc">Nama Z &ndash; A</option>
                                <option value="popular">Paling Populer</option>
                            </select>
                        </div>
                    </div>

                    <!-- Category Pills -->
                    <div class="filter-pills" role="tablist" aria-label="Filter Kategori">
                        <button type="button" class="filter-pill active" data-category="all">Semua Kategori</button>
                        <button type="button" class="filter-pill" data-category="creative-design">Creative &amp; Design</button>
                        <button type="button" class="filter-pill" data-category="productivity">Productivity &amp; AI</button>
                        <button type="button" class="filter-pill" data-category="entertainment">Entertainment</button>
                        <button type="button" class="filter-pill" data-category="education">Education</button>
                        <button type="button" class="filter-pill" data-category="utilities">Utilities</button>
                    </div>

                    <!-- Quick Filter Tags -->
                    <div class="quick-tags-row">
                        <span class="quick-tag-label">
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                            Pencarian Cepat:
                        </span>
                        <button type="button" class="quick-tag-chip" data-tag="AI" data-category="productivity">🤖 AI Tools</button>
                        <button type="button" class="quick-tag-chip" data-tag="Streaming" data-category="entertainment">🎬 Streaming Film & TV</button>
                        <button type="button" class="quick-tag-chip" data-tag="Desain" data-category="creative-design">🎨 Desain & Visual</button>
                        <button type="button" class="quick-tag-chip" data-tag="Musik" data-category="entertainment">🎵 Musik & Podcast</button>
                        <button type="button" class="quick-tag-chip" data-tag="Office" data-category="productivity">💼 Kerja & Kantor</button>
                        <button type="button" class="quick-tag-chip" data-tag="Bahasa" data-category="education">🎓 Belajar Bahasa</button>
                        <button type="button" class="quick-tag-chip" data-tag="Cloud" data-category="utilities">☁️ Penyimpanan Cloud</button>
                    </div>

                    <!-- Results Counter -->
                    <div style="font-size: var(--font-size-xs); color: var(--color-text-muted); padding-top: 0.5rem; border-top: 1px solid var(--color-border-light); display: flex; justify-content: space-between; align-items: center; flex-wrap: gap: 0.5rem;">
                        <span id="catalogResultCount">Menampilkan ${products.length} produk digital terkurasi</span>
                        <button type="button" id="catalogGlobalReset" style="font-size: 0.75rem; color: var(--color-blue); font-weight: 600; text-decoration: underline;">Reset Semua Filter</button>
                    </div>
                </div>

                <!-- Product Grid -->
                <div class="products-grid-catalog" id="catalogProductsGrid">
                    ${allCardsHtml}
                </div>

                <!-- Empty State -->
                <div class="empty-state" id="catalogEmptyState" style="display: none;">
                    <div class="empty-state-icon" aria-hidden="true">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                    </div>
                    <h3>Aplikasi Tidak Ditemukan</h3>
                    <p>Tidak ada produk yang cocok dengan pencarian <span id="catalogEmptyQuery"></span>. Coba kata kunci lain atau gunakan kategori di atas.</p>
                    <button type="button" class="btn btn-primary" id="catalogResetBtn" style="margin-top: 1rem;">
                        Reset Pencarian
                    </button>
                </div>
            </div>
        </section>
    </main>

    <!-- Bernadya Assistant Chatbot -->
    <button type="button" class="chatbot-trigger" id="chatbotTrigger" aria-label="Buka Chatbot Bernadya Assistant" aria-expanded="false">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
    </button>

    <div class="chatbot-panel" id="chatbotPanel" role="dialog" aria-label="Jendela Chatbot Bernadya Assistant" aria-hidden="true">
        <div class="chatbot-header">
            <div class="chatbot-header-info">
                <div class="chatbot-avatar" aria-hidden="true">B</div>
                <div class="chatbot-header-text">
                    <h4>Bernadya Assistant</h4>
                    <div class="chatbot-status">
                        <span class="status-dot"></span>
                        <span>Online &bull; Bantuan Info</span>
                    </div>
                </div>
            </div>
            <button type="button" class="chatbot-close" id="chatbotClose" aria-label="Tutup Percakapan">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
        </div>

        <div class="chatbot-body" id="chatbotMessages">
            <div class="chat-bubble chat-bubble-bot">
                <p>Halo! Selamat datang di <strong>Bernadya Store</strong>. Saya adalah Bernadya Assistant. Ada yang bisa saya bantu seputar informasi aplikasi digital?</p>
            </div>
        </div>

        <div class="chat-quick-replies" id="chatQuickReplies">
            <button type="button" class="quick-reply-btn" data-query="Informasi Produk">Informasi Produk</button>
            <button type="button" class="quick-reply-btn" data-query="Aktivasi">Aktivasi</button>
            <button type="button" class="quick-reply-btn" data-query="Pertanyaan Umum">Pertanyaan Umum</button>
            <button type="button" class="quick-reply-btn" data-query="Hubungi Admin">Hubungi Admin</button>
        </div>

        <div class="chatbot-input-row">
            <input type="text" class="chatbot-input" id="chatbotInput" placeholder="Ketik pertanyaan Anda..." aria-label="Pesan Anda" autocomplete="off">
            <button type="button" class="chatbot-send" id="chatbotSend" aria-label="Kirim Pesan">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
            </button>
        </div>
    </div>

    <!-- Site Footer -->
    <footer class="site-footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-col">
                    <a href="index.html" class="nav-brand" style="margin-bottom: 1rem;">
                        <div class="brand-icon" aria-hidden="true">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                                <circle cx="9" cy="21" r="1"></circle>
                                <circle cx="20" cy="21" r="1"></circle>
                                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                            </svg>
                        </div>
                        <div class="brand-text">
                            <span class="brand-title">Bernadya <span class="brand-title-accent">Store</span></span>
                            <span class="brand-subtitle">Curated Digital Goods</span>
                        </div>
                    </a>
                    <p style="font-size: var(--font-size-sm); color: #94A3B8; margin-bottom: 1.25rem;">
                        Pusat kurasi informasi dan spesifikasi aplikasi premium terpercaya. Membantu talenta kreatif, akademisi, dan keluarga menikmati ekosistem digital terbaik secara legal dan aman.
                    </p>
                </div>

                <div class="footer-col">
                    <h4>Navigasi Cepat</h4>
                    <ul class="footer-links">
                        <li><a href="index.html">Beranda</a></li>
                        <li><a href="produk.html">Katalog Produk (${products.length})</a></li>
                        <li><a href="cerita.html">Cerita Kami</a></li>
                        <li><a href="tentang.html">Tentang Kami</a></li>
                        <li><a href="faq.html">Pusat Bantuan &amp; FAQ</a></li>
                        <li><a href="kontak.html">Hubungi Kami</a></li>
                    </ul>
                </div>

                <div class="footer-col">
                    <h4>Kategori Aplikasi</h4>
                    <ul class="footer-links">
                        <li><a href="produk.html?category=creative-design">Creative &amp; Design</a></li>
                        <li><a href="produk.html?category=productivity">Productivity &amp; AI</a></li>
                        <li><a href="produk.html?category=entertainment">Entertainment</a></li>
                        <li><a href="produk.html?category=education">Education</a></li>
                        <li><a href="produk.html?category=utilities">Utilities</a></li>
                    </ul>
                </div>

                <div class="footer-col">
                    <h4>Layanan Informasi</h4>
                    <p style="font-size: var(--font-size-sm); color: #94A3B8; margin-bottom: 0.75rem;">
                        <strong style="color: #FFFFFF; display: block;">WhatsApp Resmi:</strong>
                        +62 857-1431-0516
                    </p>
                    <p style="font-size: var(--font-size-sm); color: #94A3B8; margin-bottom: 0.75rem;">
                        <strong style="color: #FFFFFF; display: block;">Email:</strong>
                        info@bernadyastore.local
                    </p>
                    <p style="font-size: var(--font-size-sm); color: #94A3B8;">
                        <strong style="color: #FFFFFF; display: block;">Jam Operasional:</strong>
                        Senin - Minggu (08.00 - 22.00 WIB)
                    </p>
                </div>
            </div>

            <div class="footer-bottom">
                <p>&copy; <span class="current-year">2026</span> Bernadya Store. Seluruh Hak Cipta Dilindungi.</p>
                <p>Portal informasi profil produk digital &bull; Tidak melayani transaksi finansial otomatis pada situs ini.</p>
            </div>
        </div>
    </footer>

    <!-- Scripts -->
    <script src="assets/js/main.js"></script>
    <script src="assets/js/catalog.js"></script>
    <script src="assets/js/chatbot.js"></script>
</body>
</html>`;
}

// 4. Generate Product Detail HTML
function generateProductDetailHtml(p) {
  // Find 3 related products
  const related = products
    .filter(item => item.slug !== p.slug && (item.category === p.category || ['canva-pro', 'youtube-premium', 'chatgpt-plus'].includes(item.slug)))
    .slice(0, 3);

  const relatedHtml = related.map(rel => renderProductCard(rel, false, true)).join('');

  const platformsHtml = p.platforms.map(plat => 
    `<span class="badge badge-outline" style="font-size: 0.7rem; padding: 0.2rem 0.5rem;">${plat}</span>`
  ).join('');

  const featuresHtml = p.features.map(feat => `
        <div class="feature-check-item">
            <svg class="feature-check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>${feat}</span>
        </div>`).join('');

  const stepsHtml = p.steps.map((st, i) => `
        <div class="step-item">
            <div class="step-num">${i + 1}</div>
            <div class="step-text">${st}</div>
        </div>`).join('');

  const faqsHtml = p.faqs.map((faq, i) => `
        <div class="accordion-item${i === 0 ? ' active' : ''}">
            <button type="button" class="accordion-header" aria-expanded="${i === 0 ? 'true' : 'false'}">
                <span>${faq.q}</span>
                <svg class="accordion-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
            </button>
            <div class="accordion-body">
                <div class="accordion-content">
                    ${faq.a}
                </div>
            </div>
        </div>`).join('');

  
  // Determine relevant story snippet for this product
  let storySnippetHtml = '';
  if (['canva-pro', 'capcut-pro', 'adobe-creative-cloud', 'figma-pro'].includes(p.slug)) {
    storySnippetHtml = `
                        <!-- Relevant User Story Callout: Sarah -->
                        <div class="detail-story-callout">
                            <img src="../assets/images/slide-creative.jpg" alt="Sarah Annisa" class="detail-story-callout-avatar">
                            <div class="detail-story-callout-text">
                                <h5>🎨 Kisah Sahabat: Sarah si Desainer</h5>
                                <p>"Efisiensi kerja saya naik 75% dan kini rutin pegang 5 klien UMKM tetap berkat langganan hemat ${p.name} di Bernadya Store."</p>
                                <a href="../cerita.html#bab-3">Baca cerita lengkap Sarah &rarr;</a>
                            </div>
                        </div>`;
  } else if (['chatgpt-plus', 'grammarly-premium', 'claude-pro', 'notion-plus', 'coursera-plus', 'duolingo-plus'].includes(p.slug)) {
    storySnippetHtml = `
                        <!-- Relevant User Story Callout: Dimas -->
                        <div class="detail-story-callout">
                            <img src="../assets/images/slide-productivity.jpg" alt="Dimas Prasetyo" class="detail-story-callout-avatar">
                            <div class="detail-story-callout-text">
                                <h5>🎓 Kisah Sahabat: Dimas si Mahasiswa Skripsi</h5>
                                <p>"Skripsi lolos Turnitin dan lulus sidang Cum Laude 2 bulan lebih cepat berkat bantuan ${p.name} resmi di Bernadya Store."</p>
                                <a href="../cerita.html#bab-3">Baca cerita lengkap Dimas &rarr;</a>
                            </div>
                        </div>`;
  } else if (['netflix-premium', 'youtube-premium', 'disney-hotstar', 'spotify-premium', 'apple-music', 'prime-video', 'hbo-go', 'vidio-premier'].includes(p.slug)) {
    storySnippetHtml = `
                        <!-- Relevant User Story Callout: Nadia & Raka -->
                        <div class="detail-story-callout">
                            <img src="../assets/images/slide-entertainment.jpg" alt="Keluarga Nadia & Raka" class="detail-story-callout-avatar">
                            <div class="detail-story-callout-text">
                                <h5>🎬 Kisah Sahabat: Keluarga Nadia &amp; Raka</h5>
                                <p>"Akhir pekan sekeluarga kini bebas iklan dan nonton film 4K jernih dengan hemat biaya langganan hingga 80%."</p>
                                <a href="../cerita.html#bab-3">Baca cerita keluarga Nadia &rarr;</a>
                            </div>
                        </div>`;
  } else if (['github-copilot', 'microsoft-365', 'nordvpn-premium', 'zoom-pro', 'midjourney', 'google-one'].includes(p.slug)) {
    storySnippetHtml = `
                        <!-- Relevant User Story Callout: Hendra -->
                        <div class="detail-story-callout">
                            <img src="../assets/images/story-community.jpg" alt="Hendra Kurniawan" class="detail-story-callout-avatar">
                            <div class="detail-story-callout-text">
                                <h5>💻 Kisah Sahabat: Hendra si Remote Developer</h5>
                                <p>"Sprint coding backlog 2 minggu tuntas dalam 7 hari. Lisensi resmi aman tanpa was-was akun developer ke-banned."</p>
                                <a href="../cerita.html#bab-3">Baca cerita lengkap Hendra &rarr;</a>
                            </div>
                        </div>`;
  }

  const waMessage = encodeURIComponent(`Halo Admin Bernadya Store, saya ingin pesan/order langganan aplikasi ${p.name}. Mohon info harga promo & cara aktivasinya.`);

  return `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>${p.name} - Tempat Jual Aplikasi Premium Bergaransi | Bernadya Store</title>
    <meta name="description" content="Pelajari ulasan lengkap, fitur unggulan, dan panduan aktivasi resmi ${p.name} di Bernadya Store.">
    <meta name="theme-color" content="#0A0F1D">

    <!-- Google Fonts: Inter -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">

    <!-- Bernadya Store Custom CSS -->
    <link rel="stylesheet" href="../assets/css/style.css">
</head>
<body>
${getNavbarHtml('produk', true)}

    <!-- Main Content Area -->
    <main id="main-content">
        <div class="section section-white" style="padding-bottom: var(--spacing-xl);">
            <div class="container">
                <!-- Breadcrumbs -->
                <div class="breadcrumbs">
                    <a href="../index.html">Beranda</a>
                    <span>&bull;</span>
                    <a href="../produk.html">Katalog Produk</a>
                    <span>&bull;</span>
                    <a href="../produk.html?category=${p.category}">${p.categoryLabel}</a>
                    <span>&bull;</span>
                    <span class="text-navy">${p.name}</span>
                </div>

                <!-- Main Product Detail Layout -->
                <div class="product-detail-layout">
                    <!-- Left Sidebar: App Showcase & Quick Actions -->
                    <aside class="product-detail-sidebar">
                        <div class="product-showcase-card">
                            <div class="product-showcase-logo" aria-hidden="true">
                                <img src="../assets/images/logos/${p.slug}.svg" alt="Logo Resmi ${p.name}" class="product-custom-logo" width="60" height="60">
                            </div>

                            <span class="badge ${p.badgeClass}" style="margin-bottom: 0.5rem;">${p.categoryLabel}</span>
                            <h1 style="font-size: 1.5rem; margin-bottom: 0.5rem; color: var(--color-navy);">${p.name}</h1>
                            <p style="font-size: var(--font-size-xs); color: var(--color-text-secondary); margin-bottom: var(--spacing-lg);">
                                Status: <strong style="color: #10B981;">Tersedia &bull; Garansi 100%</strong>
                            </p>

                            <!-- Specifications Checklist -->
                            <div style="background-color: var(--color-bg); border-radius: var(--radius-md); padding: 0.85rem; text-align: left; margin-bottom: var(--spacing-lg);">
                                <span style="font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-text-muted); font-weight: 700; display: block; margin-bottom: 0.5rem;">
                                    Platform Didukung:
                                </span>
                                <div style="display: flex; flex-wrap: wrap; gap: 0.35rem;">
                                    ${platformsHtml}
                                </div>
                            </div>

                            <!-- Action Buttons -->
                            <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                                <a href="https://wa.me/6285714310516?text=${waMessage}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp" style="width: 100%;">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                                    </svg>
                                    Pesan / Order via WhatsApp
                                </a>

                                <a href="../produk.html" class="btn btn-secondary" style="width: 100%;">
                                    &larr; Kembali ke Katalog
                                </a>
                            </div>
                        </div>

                        ${storySnippetHtml}

                        <!-- Safety & Guarantee Notice Box -->
                        <div style="background-color: var(--color-soft-blue-gray); border-radius: var(--radius-lg); padding: var(--spacing-md); border: 1px solid var(--color-border); margin-top: 1rem;">
                            <div style="display: flex; gap: 0.65rem; align-items: flex-start;">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.2" style="flex-shrink: 0; margin-top: 2px;">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                </svg>
                                <p style="font-size: 0.75rem; color: var(--color-navy); margin: 0; line-height: 1.5; font-weight: 500;">
                                    <strong>100% Garansi Ganti Baru:</strong> Akun resmi, proses kilat 5 menit lewat WhatsApp, dan pendampingan penuh jika ada kendala hingga masa langganan berakhir.
                                </p>
                            </div>
                        </div>
                    </aside>

                    <!-- Right Content: Full Description, Features, Usage Info, FAQs -->
                    <div class="product-info-sheet">
                        <div>
                            <h2 style="font-size: 1.35rem; margin-bottom: var(--spacing-md); color: var(--color-navy);">Deskripsi Aplikasi</h2>
                            <p style="font-size: var(--font-size-base); line-height: 1.7; color: var(--color-text-secondary); margin-bottom: 1rem;">
                                ${p.fullDesc1}
                            </p>
                            <p style="font-size: var(--font-size-sm); line-height: 1.6; color: var(--color-text-secondary);">
                                ${p.fullDesc2}
                            </p>
                        </div>

                        <hr style="border: 0; border-top: 1px solid var(--color-border-light);">

                        <div>
                            <h2 style="font-size: 1.35rem; margin-bottom: 0.5rem; color: var(--color-navy);">Fitur Utama &amp; Keunggulan</h2>
                            <p style="font-size: var(--font-size-sm); color: var(--color-text-secondary); margin-bottom: var(--spacing-md);">
                                Berikut adalah fasilitas utama yang dapat Anda nikmati melalui layanan aplikasi ini:
                            </p>
                            <div class="feature-check-list">
                                ${featuresHtml}
                            </div>
                        </div>

                        <hr style="border: 0; border-top: 1px solid var(--color-border-light);">

                        <div>
                            <h2 style="font-size: 1.35rem; margin-bottom: 0.5rem; color: var(--color-navy);">Informasi &amp; Panduan Penggunaan</h2>
                            <p style="font-size: var(--font-size-sm); color: var(--color-text-secondary); margin-bottom: var(--spacing-md);">
                                Alur standar untuk mulai menggunakan dan mengoptimalkan akun aplikasi Anda:
                            </p>
                            <div class="steps-list">
                                ${stepsHtml}
                            </div>
                        </div>

                        <hr style="border: 0; border-top: 1px solid var(--color-border-light);">

                        <div>
                            <h2 style="font-size: 1.35rem; margin-bottom: 0.5rem; color: var(--color-navy);">Pertanyaan Seputar ${p.name}</h2>
                            <div class="accordion accordion-exclusive" style="margin-top: var(--spacing-md);">
                                ${faqsHtml}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Related Products Section -->
        <section class="section section-alt">
            <div class="container">
                <div class="section-header" style="text-align: left; margin-bottom: var(--spacing-xl);">
                    <span class="section-tag">Rekomendasi Terkait</span>
                    <h2>Aplikasi Terkait dalam Kategori Serupa</h2>
                </div>

                <div class="products-grid">
                    ${relatedHtml}
                </div>
            </div>
        </section>
    </main>

    <!-- Bernadya Assistant Chatbot -->
    <button type="button" class="chatbot-trigger" id="chatbotTrigger" aria-label="Buka Chatbot Bernadya Assistant" aria-expanded="false">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
    </button>

    <div class="chatbot-panel" id="chatbotPanel" role="dialog" aria-label="Jendela Chatbot Bernadya Assistant" aria-hidden="true">
        <div class="chatbot-header">
            <div class="chatbot-header-info">
                <div class="chatbot-avatar" aria-hidden="true">B</div>
                <div class="chatbot-header-text">
                    <h4>Bernadya Assistant</h4>
                    <div class="chatbot-status">
                        <span class="status-dot"></span>
                        <span>Online &bull; Bantuan Info</span>
                    </div>
                </div>
            </div>
            <button type="button" class="chatbot-close" id="chatbotClose" aria-label="Tutup Percakapan">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
        </div>

        <div class="chatbot-body" id="chatbotMessages">
            <div class="chat-bubble chat-bubble-bot">
                <p>Halo! Ingin tanya lebih lanjut seputar fitur <strong>${p.name}</strong> atau perbandingan aplikasi lainnya? Tanyakan langsung kepada saya.</p>
            </div>
        </div>

        <div class="chat-quick-replies" id="chatQuickReplies">
            <button type="button" class="quick-reply-btn" data-query="Fitur ${p.name}">Fitur ${p.name}</button>
            <button type="button" class="quick-reply-btn" data-query="Aktivasi">Panduan Aktivasi</button>
            <button type="button" class="quick-reply-btn" data-query="Konsultasi Admin">Hubungi Admin</button>
        </div>

        <div class="chatbot-input-row">
            <input type="text" class="chatbot-input" id="chatbotInput" placeholder="Ketik pertanyaan Anda..." aria-label="Pesan Anda" autocomplete="off">
            <button type="button" class="chatbot-send" id="chatbotSend" aria-label="Kirim Pesan">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
            </button>
        </div>
    </div>

    <!-- Site Footer -->
    <footer class="site-footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-col">
                    <a href="../index.html" class="nav-brand" style="margin-bottom: 1rem;">
                        <div class="brand-icon" aria-hidden="true">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                                <circle cx="9" cy="21" r="1"></circle>
                                <circle cx="20" cy="21" r="1"></circle>
                                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                            </svg>
                        </div>
                        <div class="brand-text">
                            <span class="brand-title">Bernadya <span class="brand-title-accent">Store</span></span>
                            <span class="brand-subtitle">Curated Digital Goods</span>
                        </div>
                    </a>
                    <p style="font-size: var(--font-size-sm); color: #94A3B8; margin-bottom: 1.25rem;">
                        Pusat kurasi informasi dan spesifikasi aplikasi premium terpercaya. Membantu talenta kreatif, akademisi, dan keluarga menikmati ekosistem digital terbaik.
                    </p>
                </div>

                <div class="footer-col">
                    <h4>Navigasi Cepat</h4>
                    <ul class="footer-links">
                        <li><a href="../index.html">Beranda</a></li>
                        <li><a href="../produk.html">Katalog Produk (${products.length})</a></li>
                        <li><a href="../cerita.html">Cerita Kami</a></li>
                        <li><a href="../tentang.html">Tentang Kami</a></li>
                        <li><a href="../faq.html">FAQ</a></li>
                        <li><a href="../kontak.html">Kontak</a></li>
                    </ul>
                </div>

                <div class="footer-col">
                    <h4>Kategori</h4>
                    <ul class="footer-links">
                        <li><a href="../produk.html?category=creative-design">Creative &amp; Design</a></li>
                        <li><a href="../produk.html?category=productivity">Productivity &amp; AI</a></li>
                        <li><a href="../produk.html?category=entertainment">Entertainment</a></li>
                        <li><a href="../produk.html?category=education">Education</a></li>
                        <li><a href="../produk.html?category=utilities">Utilities</a></li>
                    </ul>
                </div>

                <div class="footer-col">
                    <h4>Layanan Informasi</h4>
                    <p style="font-size: var(--font-size-sm); color: #94A3B8; margin-bottom: 0.75rem;">
                        <strong style="color: #FFFFFF; display: block;">WhatsApp Resmi:</strong>
                        +62 857-1431-0516
                    </p>
                    <p style="font-size: var(--font-size-sm); color: #94A3B8; margin-bottom: 0.75rem;">
                        <strong style="color: #FFFFFF; display: block;">Email:</strong>
                        info@bernadyastore.local
                    </p>
                    <p style="font-size: var(--font-size-sm); color: #94A3B8;">
                        <strong style="color: #FFFFFF; display: block;">Jam Operasional:</strong>
                        Senin - Minggu (08.00 - 22.00 WIB)
                    </p>
                </div>
            </div>

            <div class="footer-bottom">
                <p>&copy; <span class="current-year">2026</span> Bernadya Store. Seluruh Hak Cipta Dilindungi.</p>
                <p>Portal informasi profil produk digital &bull; Tidak melayani transaksi finansial otomatis pada situs ini.</p>
            </div>
        </div>
    </footer>

    <!-- Scripts -->
    <script src="../assets/js/main.js"></script>
    <script src="../assets/js/chatbot.js"></script>
</body>
</html>`;
}

// 5. Update Navbar in Other Standard Pages
function updateNavbarInPage(filePath, activePageName) {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');

  // Regex to replace <header class="site-header"> ... </header>
  const headerRegex = /<!-- Site Header & Navbar[\s\S]*?<\/header>/i;
  const newHeader = getNavbarHtml(activePageName, false);

  if (headerRegex.test(content)) {
    content = content.replace(headerRegex, newHeader);
  } else {
    // Try generic header match
    const genericHeaderRegex = /<header class="site-header">[\s\S]*?<\/header>/i;
    if (genericHeaderRegex.test(content)) {
      content = content.replace(genericHeaderRegex, newHeader);
    }
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated navbar in ${path.basename(filePath)}`);
}

// 6. Execution
console.log('--- STARTING BUILD SITE ---');

// Generate 24 product detail pages
products.forEach(p => {
  const filePath = path.join(produkDir, `${p.slug}.html`);
  const html = generateProductDetailHtml(p);
  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`Generated detail page: produk/${p.slug}.html`);
});

// Generate produk.html & katalog.html
const catalogHtml = generateCatalogHtml();
fs.writeFileSync(path.join(rootDir, 'produk.html'), catalogHtml, 'utf8');
fs.writeFileSync(path.join(rootDir, 'katalog.html'), catalogHtml, 'utf8');
console.log('Updated produk.html and katalog.html with all 24 products & enhanced toolbar');

// Update other pages navbar
updateNavbarInPage(path.join(rootDir, 'index.html'), 'index');
updateNavbarInPage(path.join(rootDir, 'cerita.html'), 'cerita');
updateNavbarInPage(path.join(rootDir, 'story.html'), 'cerita');
updateNavbarInPage(path.join(rootDir, 'tentang.html'), 'tentang');
updateNavbarInPage(path.join(rootDir, 'about.html'), 'tentang');
updateNavbarInPage(path.join(rootDir, 'faq.html'), 'faq');
updateNavbarInPage(path.join(rootDir, 'kontak.html'), 'kontak');
updateNavbarInPage(path.join(rootDir, 'contact.html'), 'kontak');
updateNavbarInPage(path.join(rootDir, '404.html'), '');

console.log('--- ALL PAGES BUILT SUCCESSFULLY ---');
