/**
 * Bernadya Store - Storytelling & Interactive Journey Script
 * Powers chapter navigation, persona quiz, and quote interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Chapter Scroll Spy & Smooth Navigation
  const chapterLinks = document.querySelectorAll('.story-nav-btn');
  const chapters = document.querySelectorAll('.story-chapter');

  if (chapterLinks.length > 0 && chapters.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const chapterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute('id');
          chapterLinks.forEach(link => {
            if (link.getAttribute('href') === `#${currentId}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, observerOptions);

    chapters.forEach(chapter => {
      chapterObserver.observe(chapter);
    });

    // Smooth scroll on link click
    chapterLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href');
        if (targetId && targetId.startsWith('#')) {
          e.preventDefault();
          const targetEl = document.querySelector(targetId);
          if (targetEl) {
            const navHeight = 80;
            const targetPos = targetEl.getBoundingClientRect().top + window.pageYOffset - navHeight;
            window.scrollTo({
              top: targetPos,
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }

  // 2. Interactive Persona Quiz ("Temukan Ceritamu")
  const quizData = {
    creator: {
      title: "Ekosistem Kreator: Wujudkan Ide Visual Tanpa Hambatan",
      narration: "Bagi kreator konten dan desainer grafis, waktu adalah aset berharga. Menghabiskan waktu berjam-jam berkutat dengan aplikasi lemot atau kebingungan mencari aset mematikan momentum inspirasi. Panduan kurasi kami membantu Anda memilih tools yang langsung menggenjot output karya tanpa kerumitan teknis.",
      quote: "Karya luar biasa lahir saat alat yang Anda pakai tidak menghalangi aliran ide di kepala.",
      apps: [
        { name: "Canva Pro", category: "Creative & Design", iconBg: "#00C4CC", link: "produk/canva-pro.html" },
        { name: "CapCut Pro", category: "Video Editing AI", iconBg: "#111827", link: "produk/capcut-pro.html" },
        { name: "Adobe Creative Cloud", category: "Pro Creative Suite", iconBg: "#FF0000", link: "produk/adobe-creative-cloud.html" }
      ]
    },
    student: {
      title: "Ruang Belajar Mandiri: Menggapai Prestasi Akademis & Beasiswa",
      narration: "Dunia perkuliahan dan riset menuntut kefokusan tinggi. Anda butuh alat komunikasi yang tidak terputus di tengah bimbingan dosen, paket pengolah data komprehensif untuk menyusun skripsi, serta media pembelajaran bahasa internasional untuk membuka pintu beasiswa impian.",
      quote: "Investasi terbaik dalam masa muda adalah membekali diri dengan ilmu dan wawasan tanpa batas.",
      apps: [
        { name: "Zoom Pro", category: "Kuliah & Riset Online", iconBg: "#2D8CFF", link: "produk/zoom-pro.html" },
        { name: "Duolingo Plus", category: "Pembelajaran Bahasa", iconBg: "#58CC02", link: "produk/duolingo-plus.html" },
        { name: "Microsoft 365", category: "Olah Dokumen & Cloud", iconBg: "#D83B01", link: "produk/microsoft-365.html" }
      ]
    },
    professional: {
      title: "Produktivitas Tim & Remote: Keamanan dan Kolaborasi Tanpa Jeda",
      narration: "Bagi digital nomad, tim startup, dan profesional remote, konektivitas stabil dan proteksi data klien adalah prioritas tak tergantikan. Ekosistem perangkat lunak yang andal menjaga integritas bisnis Anda saat bekerja dari mana saja.",
      quote: "Efisiensi bukan tentang bekerja tanpa henti, melainkan tentang sistem aman yang bekerja untuk Anda.",
      apps: [
        { name: "NordVPN Premium", category: "Keamanan Enkripsi", iconBg: "#4687FF", link: "produk/nordvpn-premium.html" },
        { name: "Figma Pro", category: "Kolaborasi Desain", iconBg: "#A259FF", link: "produk/figma-pro.html" },
        { name: "Microsoft 365", category: "Enterprise Workspace", iconBg: "#D83B01", link: "produk/microsoft-365.html" }
      ]
    },
    family: {
      title: "Momen Bernilai: Hangatnya Kebersamaan di Ruang Keluarga",
      narration: "Setelah hari-hari sibuk dengan rutinitas kantor dan sekolah, akhir pekan adalah waktu berharga untuk me-recharge energi. Hiburan berkualitas sinematik tanpa iklan menjamin waktu santai bersama keluarga terasa utuh dan menyenangkan.",
      quote: "Rumah yang hangat adalah rumah di mana tawa, cerita, dan musik indah mengalir tanpa interupsi.",
      apps: [
        { name: "Netflix Premium", category: "Sinema 4K Ultra HD", iconBg: "#E50914", link: "produk/netflix-premium.html" },
        { name: "Spotify Premium", category: "Audio Spasial & Podcast", iconBg: "#1DB954", link: "produk/spotify-premium.html" },
        { name: "Disney+ Hotstar", category: "Film Anak & Keluarga", iconBg: "#113CCF", link: "produk/disney-hotstar.html" }
      ]
    }
  };

  const optionBtns = document.querySelectorAll('.quiz-option-btn');
  const resultCard = document.getElementById('quizResultCard');

  if (optionBtns.length > 0 && resultCard) {
    optionBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const personaKey = btn.getAttribute('data-persona');
        if (!personaKey || !quizData[personaKey]) return;

        // Update active class on buttons
        optionBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Render result data
        const data = quizData[personaKey];
        renderQuizResult(data);
      });
    });

    function renderQuizResult(data) {
      const appsHtml = data.apps.map(app => `
        <a href="${app.link}" class="quiz-app-item">
          <div class="quiz-app-icon" style="background-color: ${app.iconBg};">
            ${app.name.charAt(0)}
          </div>
          <div class="quiz-app-info">
            <strong>${app.name}</strong>
            <span>${app.category}</span>
          </div>
        </a>
      `).join('');

      resultCard.innerHTML = `
        <div class="quiz-result-header">
          <h3 class="quiz-result-title">${data.title}</h3>
          <span class="badge badge-blue">Rekomendasi Persona</span>
        </div>
        <p class="quiz-result-narration">${data.narration}</p>
        <div class="story-pullquote" style="margin: 1rem 0 1.5rem; font-size: 1rem; padding: 0.85rem 1.25rem;">
          "${data.quote}"
        </div>
        <div class="quiz-result-apps-title">Pilihan Aplikasi Pendukung:</div>
        <div class="quiz-result-apps-grid">
          ${appsHtml}
        </div>
        <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; margin-top: 1rem;">
          <a href="https://wa.me/6285714310516" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-sm">
            Konsultasikan Cerita Anda
          </a>
          <a href="produk.html" class="btn btn-outline btn-sm">
            Lihat Semua Aplikasi
          </a>
        </div>
      `;

      // Trigger smooth re-animation
      resultCard.style.animation = 'none';
      void resultCard.offsetWidth; // trigger reflow
      resultCard.style.animation = 'fadeInStory 0.35s ease-out';
    }
  }
});
