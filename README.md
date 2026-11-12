# Bernadya Store — Website Interaktif & Storytelling (GitHub Pages Ready)

Website Company Profile & Storytelling Interaktif untuk **Bernadya Store**, pusat kurasi informasi dan panduan aplikasi premium serta produk digital.

Proyek ini dibangun murni menggunakan **HTML5, CSS3 kustom (Vanilla CSS), dan JavaScript Vanilla** tanpa ketergantungan server backend/database sehingga **100% siap diunggah dan dijalankan langsung di GitHub Pages**.

---

## 📖 Fitur Baru: Storytelling & Journey Pengguna (`cerita.html` / `story.html`)

Website kini dilengkapi dengan babak narasi emosional dan visual yang memikat:

1. **Hero Story & 3D Illustration**: Visual 3D meja kerja modern (`story-hero.jpg`) dengan headline *"Di Balik Setiap Klik, Ada Ide Besar yang Berjuang untuk Terwujud"*.
2. **Bab 1: Rimba Digital**: Keresahan nyata pengguna menghadapi software bajakan berisiko malware vs solusi kurasi resmi Bernadya.
3. **Bab 2: Titik Mula & Meja Kerja**: Kisah awal mula berdirinya Bernadya Store didukung showcase antarmuka dan poster visual brand (`poster-bernadya.png` & `mockup-ui-bernadya.png`).
4. **Bab 3: Jejak Nyata (4 Persona Sahabat Bernadya)**:
   - **Sarah (24 Thn, Content Creator)**: Perjalanan membangun studio desain mandiri bersama Canva Pro & CapCut Pro.
   - **Dimas (21 Thn, Mahasiswa)**: Menembus bimbingan skripsi & seleksi beasiswa bersama Zoom Pro & Duolingo Plus.
   - **Keluarga Nadia & Raka**: Quality time akhir pekan bersama Netflix 4K, Disney+ Hotstar, dan Spotify Premium.
   - **Hendra (30 Thn, Remote Worker)**: Keamanan koneksi publik saat coding bersama NordVPN Premium.
5. **Bab 4: Transformasi Nyata & Komunitas**: Sebelum vs Sesudah Bernadya didukung visual ilustrasi komunitas talenta muda Indonesia (`story-community.jpg`).
6. **Bab 5: Fitur Interaktif "Temukan Ceritamu"**: Kuis interaktif berbasis peran (Kreator, Mahasiswa, Profesional, Keluarga) yang otomatis menyajikan rekomendasi aplikasi terbaik.
7. **Bab 6: Manifesto & Janji Hati**: Tiga pilar integritas (Kejujuran Kurasi, Bahasa yang Memanusiakan, dan Dukungan WhatsApp Ramah).

---

## 🚀 Cara Mengunggah ke GitHub & Mengaktifkan GitHub Pages

### Opsi A: Menggunakan Git Command Line (Terminal / PowerShell)

Jika Anda menggunakan PowerShell di komputer lokal ini:

```powershell
# 1. Masuk ke direktori proyek
cd c:\xampp\htdocs\bernadyastore1

# 2. Hubungkan ke repositori GitHub Anda (ganti URL dengan repositori Anda)
git remote add origin https://github.com/<username-anda>/bernadyastore1.git

# 3. Ubah nama branch utama ke main (jika belum)
git branch -M main

# 4. Push seluruh kode dan aset ke GitHub
git push -u origin main
```

*(Catatan: Jika `git` belum ada di environment PATH Windows Anda, Anda dapat menggunakan Git dari GitHub Desktop yang sudah terpasang di path: `& "$env:LOCALAPPDATA\GitHubDesktop\app-3.6.10\resources\app\git\cmd\git.exe"`)*

---

### Opsi B: Menggunakan GitHub Desktop (Paling Mudah & Visual)

1. Buka aplikasi **GitHub Desktop**.
2. Klik menu **File** > **Add Local Repository...**.
3. Pilih folder: `C:\xampp\htdocs\bernadyastore1`.
4. Klik tombol **Publish repository** di bilah atas.
5. Beri nama repositori (contoh: `bernadyastore1`), tentukan apakah Public atau Private, lalu klik **Publish Repository**.
6. Selesai! Seluruh file, halaman cerita, dan gambar langsung terunggah rapi ke akun GitHub Anda.

---

### Opsi C: Mengaktifkan GitHub Pages (Agar Website Live di Internet)

1. Buka repositori Anda di situs [GitHub.com](https://github.com).
2. Klik tab **Settings** di bilah atas repositori.
3. Pada bilah sisi kiri, pilih menu **Pages**.
4. Di bagian **Build and deployment**:
   - **Source**: Pilih `Deploy from a branch`.
   - **Branch**: Pilih `main` (atau `master`), dan folder `/ (root)`.
   - Klik tombol **Save**.
5. Tunggu 1–2 menit, website Bernadya Store Anda langsung aktif dan dapat diakses publik pada alamat:
   `https://<username-anda>.github.io/<nama-repositori>/`

---

## 📂 Struktur Berkas Proyek

```text
├── index.html                   # Beranda Utama + Teaser Storytelling Interaktif
├── cerita.html                  # Halaman Penuh Storytelling & Kisah Pengguna (NEW)
├── story.html                   # Alias untuk cerita.html
├── produk.html                  # Katalog 12 Produk Digital (Live Filter & Search)
├── katalog.html                 # Alias untuk produk.html
├── tentang.html                 # Profil Perusahaan, Visi, Misi & Cuplikan Cerita
├── about.html                   # Alias untuk tentang.html
├── faq.html                     # Pusat Bantuan & Tanya Jawab Interaktif
├── kontak.html                  # Informasi Kontak & Jam Layanan
├── contact.html                 # Alias untuk kontak.html
├── 404.html                     # Halaman Khusus Error 404 GitHub Pages
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
    │   └── style.css            # Desain CSS Multi-tonal, Glassmorphic, Storytelling & Responsive
    ├── images/
    │   ├── story-hero.jpg       # Ilustrasi 3D Workstation Meja Kerja Bernadya (NEW)
    │   ├── story-community.jpg  # Ilustrasi 3D Kolaborasi Kreator & Komunitas (NEW)
    │   ├── mockup-ui-bernadya.png # Mockup Antarmuka Bernadya Store
    │   ├── poster-bernadya.png  # Poster Identitas Visual Bernadya Store
    │   ├── banner-1.png         # Banner Panoramic Hiburan
    │   ├── banner-2.jpg         # Banner Panoramic Kreativitas
    │   ├── banner-3.jpg         # Banner Panoramic Produktivitas
    │   ├── slide-creative.jpg   # Visual Persona Kreator (Sarah)
    │   ├── slide-productivity.jpg # Visual Persona Akademisi (Dimas)
    │   └── slide-entertainment.jpg # Visual Persona Keluarga (Nadia & Raka)
    └── js/
        ├── story.js             # Skrip Scroll Spy Bab & Kuis Temukan Ceritamu (NEW)
        ├── main.js              # Navigasi Mobile Drawer & Accordion
        ├── slider.js            # Hero Slider Autoplay & Touch Swipe
        ├── catalog.js           # Live Client-side Filter & Pencarian
        ├── faq.js               # Filter Kategori & Search FAQ
        └── chatbot.js           # Bernadya Assistant dengan Offline Knowledge Base
```

---

## 💻 Jalankan di Komputer Lokal

Tidak perlu menjalankan XAMPP Apache atau PHP:
- Cukup **klik ganda pada file `index.html`** atau `cerita.html` di File Explorer Anda.
- Buka di Google Chrome, Microsoft Edge, Mozilla Firefox, atau Safari. Seluruh fitur, animasi, kuis interaktif, chatbot, dan gambar akan langsung berjalan dengan mulus!
