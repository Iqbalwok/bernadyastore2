/**
 * Bernadya Store - Bernadya Assistant (Vanilla JS Chatbot)
 * Pure client-side rule-based assistant backed by /api/faqs endpoint
 * with local knowledge base fallback. No external third-party AI APIs.
 */

document.addEventListener('DOMContentLoaded', () => {
  const triggerBtn = document.getElementById('chatbotTrigger');
  const chatPanel = document.getElementById('chatbotPanel');
  const closeBtn = document.getElementById('chatbotClose');
  const messagesList = document.getElementById('chatbotMessages');
  const inputField = document.getElementById('chatbotInput');
  const sendBtn = document.getElementById('chatbotSend');
  const quickRepliesContainer = document.getElementById('chatQuickReplies');

  if (!triggerBtn || !chatPanel) return;

  const WA_NUMBER = '6285714310516';
  const WA_URL = `https://wa.me/${WA_NUMBER}?text=Halo%20Admin%20Bernadya%20Store%2C%20saya%20butuh%20informasi%20lebih%20lanjut.`;

  // Comprehensive Client-Side Knowledge Base (Works 100% Offline & on GitHub Pages)
  const knowledgeBase = [
    {
      keywords: ['canva', 'canva pro', 'desain', 'poster', 'banner', 'grafis'],
      response: 'Canva Pro adalah platform desain grafis intuitif dengan 100+ juta aset premium, penghapus latar belakang (Background Remover) AI otomatis, Brand Kit, dan penyimpanan cloud 1 TB. Kompatibel dengan Android, iOS, Windows, macOS, dan Web Browser.'
    },
    {
      keywords: ['youtube', 'youtube premium', 'yt premium', 'bebas iklan', 'youtube music'],
      response: 'YouTube Premium memungkinkan Anda menonton seluruh video tanpa jeda iklan, memutar audio di latar belakang (Background Play) saat layar mati, mengunduh video offline Full HD, dan akses penuh ke YouTube Music Premium.'
    },
    {
      keywords: ['netflix', 'netflix premium', 'film', 'serial', 'nonton', '4k'],
      response: 'Netflix Premium menyediakan ribuan judul film, serial orisinal, dan dokumenter dengan kualitas Ultra HD 4K, HDR10/Dolby Vision, audio spasial, serta dukungan hingga 4 layar aktif secara bersamaan.'
    },
    {
      keywords: ['capcut', 'capcut pro', 'edit video', 'reels', 'tiktok', 'shorts'],
      response: 'CapCut Pro adalah aplikasi penyuntingan video favorit kreator dengan auto-caption cerdas multi-bahasa, AI retouch visual, ratusan filter dan transisi pro, serta ekspor video hingga resolusi 4K 60fps tanpa watermark.'
    },
    {
      keywords: ['zoom', 'zoom pro', 'meeting', 'rapat', 'webinar', 'breakout'],
      response: 'Zoom Pro dirancang untuk pertemuan daring tanpa batasan durasi 40 menit (hingga 30 jam per sesi), kapasitas hingga 100 peserta, rekaman cloud otomatis, dan breakout rooms.'
    },
    {
      keywords: ['disney', 'disney plus', 'hotstar', 'marvel', 'pixar', 'star wars'],
      response: 'Disney+ Hotstar menghadirkan koleksi lengkap Disney, Pixar, Marvel Cinematic Universe, Star Wars, National Geographic, dan film lokal eksklusif dengan kualitas hingga 4K Ultra HD dan mode profil anak.'
    },
    {
      keywords: ['spotify', 'spotify premium', 'musik', 'lagu', 'podcast'],
      response: 'Spotify Premium memberikan kebebasan mendengarkan musik dan podcast tanpa iklan dengan kualitas audio Very High 320 kbps, download hingga 10.000 lagu untuk offline, dan unlimited skip lagu.'
    },
    {
      keywords: ['adobe', 'creative cloud', 'photoshop', 'illustrator', 'premiere'],
      response: 'Adobe Creative Cloud adalah bundel aplikasi profesional standar industri kreatif (Photoshop, Illustrator, Premiere Pro, After Effects, Lightroom) yang dilengkapi fitur generative AI Adobe Firefly dan cloud storage.'
    },
    {
      keywords: ['figma', 'figma pro', 'figma professional', 'ui', 'ux', 'prototype'],
      response: 'Figma Professional adalah alat desain UI/UX dan prototyping berbasis browser untuk kolaborasi real-time tanpa batas file, design systems bersama, unlimited version history, dan Dev Mode.'
    },
    {
      keywords: ['microsoft', 'office', '365', 'word', 'excel', 'powerpoint', 'onedrive'],
      response: 'Microsoft 365 menghadirkan aplikasi produktivitas perkantoran lengkap (Word, Excel, PowerPoint, Outlook) dengan 1 TB penyimpanan awan OneDrive terproteksi ransomware dan instalasi hingga 5 perangkat aktif.'
    },
    {
      keywords: ['duolingo', 'duolingo super', 'duolingo plus', 'bahasa', 'belajar bahasa'],
      response: 'Duolingo Super / Plus adalah aplikasi belajar 40+ bahasa asing tanpa iklan dengan fitur Unlimited Hearts (nyawa tak terbatas), ulasan kekeliruan pribadi, dan kuis progress pembelajaran.'
    },
    {
      keywords: ['nordvpn', 'vpn', 'keamanan', 'privasi', 'ip'],
      response: 'NordVPN Premium melindungi privasi internet dengan enkripsi AES 256-bit, fitur Threat Protection pemblokir malware dan iklan, 5000+ server cepat di 60 negara, serta kebijakan ketat No-Logs.'
    },
    {
      keywords: ['chatgpt', 'gpt', 'gpt4', 'gpt-4o', 'openai', 'dall-e'],
      response: 'ChatGPT Plus memberikan akses prioritas ke model AI tercanggih GPT-4o, pembuatan gambar DALL·E 3, analisis data spreadsheet, dan respons cepat tanpa antrean.'
    },
    {
      keywords: ['midjourney', 'gambar ai', 'art ai', 'generate gambar'],
      response: 'Midjourney v6 adalah generator seni AI visual terbaik di dunia dengan detail photorealistic, pencahayaan sinematik, dan lisensi komersial penuh.'
    },
    {
      keywords: ['claude', 'anthropic', 'sonnet', 'claude pro'],
      response: 'Claude Pro (Anthropic) ditenagai model Claude 3.5 Sonnet dengan context window 200k tokens untuk membaca dokumen panjang, riset komprehensif, dan koding presisi.'
    },
    {
      keywords: ['notion', 'notion plus', 'notion ai', 'workspace', 'catatan'],
      response: 'Notion Plus & AI menyediakan ruang kerja kolaboratif tanpa batas upload file, manajemen proyek kanban, database relasional, dan asisten penulisan AI otomatis.'
    },
    {
      keywords: ['grammarly', 'grammar', 'cek bahasa inggris', 'plagiat'],
      response: 'Grammarly Premium membantu mengoreksi tata bahasa Inggris secara mendalam, memperhalus nada kalimat formal/akademis, dan memindai plagiarisme miliaran halaman web.'
    },
    {
      keywords: ['copilot', 'github copilot', 'koding', 'coding ai'],
      response: 'GitHub Copilot adalah asisten koding AI yang menyarankan baris kode dan fungsi otomatis secara real-time di VS Code, JetBrains, dan Visual Studio.'
    },
    {
      keywords: ['prime video', 'amazon prime'],
      response: 'Amazon Prime Video menghadirkan ribuan film blockbuster, serial orisinal eksklusif (The Boys, Rings of Power), dan fitur X-Ray informasi aktor dalam kualitas 4K HDR.'
    },
    {
      keywords: ['hbo', 'hbo go', 'hbo max'],
      response: 'HBO GO / Max adalah pusat serial pemenang penghargaan dunia (The Last of Us, House of the Dragon, Succession) dan film blockbuster Warner Bros.'
    },
    {
      keywords: ['vidio', 'vidio premier', 'liga inggris', 'bola', 'epl'],
      response: 'Vidio Premier Platinum menyajikan siaran langsung resmi Premier League (Liga Inggris), BRI Liga 1, Champions League, drama Korea, dan film lokal eksklusif.'
    },
    {
      keywords: ['apple music', 'lossless', 'spatial audio'],
      response: 'Apple Music memberikan akses ke 100+ juta lagu dalam resolusi Hi-Res Lossless Audio 24-bit/192kHz dan Spatial Audio Dolby Atmos tanpa jeda iklan.'
    },
    {
      keywords: ['coursera', 'coursera plus', 'sertifikat', 'kursus'],
      response: 'Coursera Plus membuka akses tanpa batas ke 7.000+ kursus dan sertifikat profesional resmi dari Google, IBM, Meta, Stanford, dan universitas ternama dunia.'
    },
    {
      keywords: ['google one', 'google drive', 'cloud', '2tb'],
      response: 'Google One 2 TB memberikan kapasitas penyimpanan lega 2.000 GB untuk Google Drive, Google Foto, dan Gmail dengan fitur backup otomatis keluarga.'
    },
    {
      keywords: ['produk', 'katalog', 'aplikasi', 'daftar'],
      response: 'Bernadya Store menyediakan katalog informasi 24+ aplikasi digital premium dalam 5 kategori: Creative & Design, Productivity & AI, Entertainment, Education, dan Utilities. Silakan jelajahi menu "Produk Digital" untuk spesifikasi lengkap.'
    },
    {
      keywords: ['aktivasi', 'cara pakai', 'login', 'panduan', 'invite', 'undangan', 'masuk'],
      response: 'Alur penggunaan setiap aplikasi mengacu pada panduan resmi penyedia layanan (melalui email undangan resmi atau akun terverifikasi). Petunjuk langkah demi langkah tersedia di tab "Informasi Penggunaan" pada tiap halaman detail produk.'
    },
    {
      keywords: ['faq', 'tanya', 'pertanyaan', 'garansi', 'aman', 'terpercaya', 'legal'],
      response: 'Semua informasi dan spesifikasi yang kami sajikan bersumber dari penyedia aplikasi resmi. Kami selalu mengedukasi pengguna untuk menggunakan aplikasi orisinal dari toko aplikasi resmi (Play Store, App Store, dsb).'
    },
    {
      keywords: ['beli', 'pesan', 'order', 'harga', 'checkout', 'keranjang', 'bayar', 'transfer'],
      response: 'Website Bernadya Store ini berfungsi murni sebagai portal profil dan informasi produk digital. Website ini tidak melayani transaksi finansial otomatis. Untuk konsultasi layanan, Anda dapat menghubungi admin melalui WhatsApp resmi.'
    },
    {
      keywords: ['admin', 'cs', 'hubungi', 'kontak', 'whatsapp', 'wa', 'bantuan', 'operator'],
      response: 'Tim Customer Support Bernadya Store siap melayani Anda setiap hari pukul 08.00 - 22.00 WIB melalui WhatsApp (+62 857-1431-0516).'
    },
    {
      keywords: ['halo', 'hai', 'pagi', 'siang', 'sore', 'malam', 'assalamualaikum', 'tes', 'test'],
      response: 'Halo! Selamat datang di Bernadya Store. Ada yang bisa Bernadya Assistant bantu seputar informasi aplikasi dan produk digital?'
    }
  ];

  // Optional dynamic FAQ sync (graceful on static hosting / GitHub Pages)
  try {
    fetch('/api/faqs')
      .then(res => res.json())
      .then(resData => {
        if (resData && resData.status === 'success' && Array.isArray(resData.data)) {
          resData.data.forEach(faq => {
            const kwList = [];
            if (faq.keywords) kwList.push(...faq.keywords.toLowerCase().split(/[\s,]+/));
            if (faq.question) {
              const questionWords = faq.question.toLowerCase()
                .replace(/[^a-z0-9\s]/g, '')
                .split(/\s+/)
                .filter(w => w.length > 3 && !['apakah', 'bagaimana', 'untuk', 'dengan', 'yang', 'pada'].includes(w));
              kwList.push(...questionWords);
            }
            if (kwList.length > 0) {
              knowledgeBase.unshift({
                keywords: [...new Set(kwList)],
                response: faq.answer
              });
            }
          });
        }
      })
      .catch(() => {});
  } catch(e) {}

  const fallbackResponse = 'Maaf, Bernadya Assistant belum memahami pertanyaan tersebut. Anda dapat memilih topik pada tombol cepat di bawah atau berkonsultasi langsung dengan tim kami via WhatsApp.';

  // Open / Close Functions
  const openChat = () => {
    chatPanel.classList.add('open');
    chatPanel.setAttribute('aria-hidden', 'false');
    triggerBtn.setAttribute('aria-expanded', 'true');
    inputField?.focus();
    scrollToBottom();
  };

  const closeChat = () => {
    chatPanel.classList.remove('open');
    chatPanel.setAttribute('aria-hidden', 'true');
    triggerBtn.setAttribute('aria-expanded', 'false');
  };

  triggerBtn.addEventListener('click', () => {
    if (chatPanel.classList.contains('open')) {
      closeChat();
    } else {
      openChat();
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeChat);
  }

  // Auto Scroll
  const scrollToBottom = () => {
    if (messagesList) {
      messagesList.scrollTop = messagesList.scrollHeight;
    }
  };

  // Add Message Bubble
  const addMessage = (text, sender = 'bot', showWaButton = false) => {
    const bubble = document.createElement('div');
    bubble.className = `chat-bubble chat-bubble-${sender}`;

    const textPara = document.createElement('p');
    textPara.textContent = text;
    bubble.appendChild(textPara);

    if (showWaButton) {
      const waBtn = document.createElement('a');
      waBtn.href = WA_URL;
      waBtn.target = '_blank';
      waBtn.rel = 'noopener noreferrer';
      waBtn.className = 'btn btn-whatsapp btn-sm';
      waBtn.style.marginTop = '0.5rem';
      waBtn.style.display = 'inline-flex';
      waBtn.innerHTML = `
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
        Chat via WhatsApp
      `;
      bubble.appendChild(waBtn);
    }

    messagesList.appendChild(bubble);
    scrollToBottom();
  };

  // Find Matching Answer
  const getBotResponse = (userInput) => {
    const normalized = userInput.toLowerCase();

    for (const item of knowledgeBase) {
      const isMatch = item.keywords.some(kw => kw && normalized.includes(kw));
      if (isMatch) {
        const needsWa = item.keywords.includes('admin') || item.keywords.includes('beli') || item.keywords.includes('kontak');
        return { text: item.response, showWa: needsWa };
      }
    }

    return { text: fallbackResponse, showWa: true };
  };

  // Send Message Action
  const handleSend = () => {
    const text = inputField.value.trim();
    if (!text) return;

    // Display user bubble
    addMessage(text, 'user');
    inputField.value = '';

    // Simulate natural typing delay (350ms)
    setTimeout(() => {
      const botReply = getBotResponse(text);
      addMessage(botReply.text, 'bot', botReply.showWa);
    }, 350);
  };

  if (sendBtn) {
    sendBtn.addEventListener('click', handleSend);
  }

  if (inputField) {
    inputField.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleSend();
      }
    });
  }

  // Quick Reply Buttons
  if (quickRepliesContainer) {
    quickRepliesContainer.querySelectorAll('.quick-reply-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const query = btn.getAttribute('data-query') || btn.textContent.trim();
        addMessage(query, 'user');

        setTimeout(() => {
          const botReply = getBotResponse(query);
          addMessage(botReply.text, 'bot', botReply.showWa);
        }, 300);
      });
    });
  }
});
