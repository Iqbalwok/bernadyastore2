# Bernadya Store — Static Website (GitHub Pages Ready)

Website Company Profile Profesional untuk **Bernadya Store**, pusat kurasi informasi dan panduan aplikasi premium serta produk digital.

Proyek ini dibangun murni menggunakan **HTML5, CSS3 kustom (Vanilla CSS), dan JavaScript Vanilla** tanpa ketergantungan server PHP sehingga **100% siap diunggah dan dijalankan langsung di GitHub Pages**.

---

## 🚀 Cara Menjalankan & Mengunggah ke GitHub Pages

### Opsi 1: Unggah Folder Ini ke Repositori GitHub Baru (Paling Mudah)
1. Buat repositori baru di GitHub (contoh: `bernadyastore` atau `<username>.github.io`).
2. Masukkan seluruh file dari folder ini (`index.html`, `produk.html`, `tentang.html`, `faq.html`, `kontak.html`, `produk/`, dan `assets/`) ke dalam repositori GitHub Anda.
3. Buka tab **Settings** di repositori GitHub Anda.
4. Klik menu **Pages** di bilah sisi kiri.
5. Pada bagian **Build and deployment**:
   - Source: pilih **Deploy from a branch**.
   - Branch: pilih **main** (atau **master**), lalu folder: **/(root)**.
   - Klik **Save**.
6. Tunggu 1–2 menit, website Bernadya Store Anda langsung live di internet pada alamat:
   `https://<username>.github.io/<nama-repo>/`

---

### Opsi 2: Buka Langsung di Komputer Lokal
Tidak perlu server XAMPP, PHP, atau Apache:
- Cukup klik dua kali berkas **`index.html`** di browser apa pun (Google Chrome, Edge, Safari, Firefox).
- Seluruh navigasi, slider banner, filter pencarian katalog, accordion FAQ, dan chatbot interaktif akan langsung berfungsi lancar!

---

## 📂 Struktur File Static
```text
├── index.html                   # Halaman Utama (Beranda & Hero Slider)
├── produk.html                  # Katalog Semua 12 Produk Digital (Filter & Search)
├── katalog.html                 # Alias untuk produk.html
├── tentang.html                 # Profil Perusahaan, Visi, Misi, & Nilai Utama
├── faq.html                     # Pusat Bantuan & Tanya Jawab Interaktif
├── kontak.html                  # Kontak WhatsApp, Email, & Jam Operasional
├── 404.html                     # Halaman Error 404 khusus GitHub Pages
├── produk/                      # 12 Halaman Detail Spesifikasi Produk:
│   ├── canva-pro.html
│   ├── youtube-premium.html
│   ├── netflix-premium.html
│   ├── capcut-pro.html
│   ├── zoom-pro.html
│   ├── disney-hotstar.html
│   ├── spotify-premium.html
│   ├── adobe-creative-cloud.html
│   ├── figma-pro.html
│   ├── microsoft-365.html
│   ├── duolingo-plus.html
│   └── nordvpn-premium.html
└── assets/
    ├── css/
    │   └── style.css            # Desain CSS Multi-tonal, Glassmorphism, & Responsive
    └── js/
        ├── main.js              # Navigasi Mobile & Accordion Umum
        ├── slider.js            # Hero Slider Autoplay, Touch Swipe, Dots
        ├── catalog.js           # Client-Side Live Filter & Search
        ├── faq.js               # Client-Side FAQ Category & Text Filter
        └── chatbot.js           # Bernadya Assistant dengan Offline Knowledge Base
```

---

## ✨ Fitur Unggulan
1. **100% Client-Side & Bebas Server**: Tidak memerlukan backend PHP/database untuk berjalan di GitHub.
2. **Path Relatif Otomatis**: Aman dari masalah path URL saat dibuka di subfolder GitHub Pages (`https://username.github.io/reponame/`).
3. **Bernadya Assistant (Chatbot)**: Dilengkapi dengan basis data pengetahuan offline lengkap seputar 12 produk dan pertanyaan umum.
4. **Pencarian & Filter Interaktif**: Filter kategori, sorting A-Z, dan pencarian real-time langsung di browser.
5. **Multi-tonal & Glassmorphic Design**: Tampilan modern dengan aksen warna cerah dan animasi halus 60 FPS.
