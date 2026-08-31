/* =============================================================
   components.js — Shared Navbar & Footer
   UPT Perlindungan Perempuan dan Anak Kota Palembang
   ============================================================= */

/* ----------------------------------------------------------
   Helper: deteksi halaman aktif
   ---------------------------------------------------------- */
function getActivePage() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  return path;
}

function isActive(pages) {
  const current = getActivePage();
  return pages.includes(current) ? 'nav-active' : '';
}

/* ----------------------------------------------------------
   NAVBAR HTML
   ---------------------------------------------------------- */
function renderNavbar() {
  const p = getActivePage();
  const navbar = `
  <div id="top-bar" class="upt-topbar">
    <div class="upt-container topbar-inner">
      <div class="topbar-left">
        <span><i class="fa-solid fa-envelope"></i> uptdppakotapalembang@gmail.com</span>
        <span class="hide-sm"><i class="fa-solid fa-phone"></i> 082179858798</span>
        <span class="topbar-online hide-md"><i class="fa-solid fa-circle pulse-dot"></i> Layanan 24 Jam</span>
      </div>
      <div class="topbar-right">
        <a href="https://www.instagram.com/dinaspppa_palembang" target="_blank" rel="noopener" title="@dinaspppa_palembang">
          <i class="fa-brands fa-instagram"></i><span class="hide-sm">@dinaspppa_palembang</span>
        </a>
        <a href="https://www.instagram.com/upt.ppakotapalembang" target="_blank" rel="noopener" title="@upt.ppakotapalembang">
          <i class="fa-brands fa-instagram"></i><span class="hide-sm">@upt.ppakotapalembang</span>
        </a>
      </div>
    </div>
  </div>

  <div id="announcement-bar" class="upt-announcement">
    <div class="upt-container announcement-inner">
      <span class="ann-badge"><i class="fa-solid fa-bullhorn"></i> Pengumuman</span>
      <div class="ann-marquee-wrap">
        <div class="ann-marquee">
          Layanan Pengaduan Darurat UPT PPA Kota Palembang tersedia 24 jam — WhatsApp 082179858798 &nbsp;|&nbsp; Hotline 129 &nbsp;|&nbsp; Identitas pelapor dijamin rahasia &nbsp;|&nbsp; Layanan GRATIS tanpa biaya apapun
        </div>
      </div>
    </div>
  </div>

  <nav id="main-navbar" class="upt-navbar">
    <div class="upt-container navbar-inner">

      <!-- Logo -->
      <a href="index.html" class="navbar-logo">
        <div class="logo-icon"><i class="fa-solid fa-shield-heart"></i></div>
        <div class="logo-text">
          <span class="logo-title">UPT PPA Palembang</span>
          <span class="logo-sub">Perlindungan Perempuan dan Anak</span>
        </div>
      </a>

      <!-- Desktop Menu -->
      <ul class="navbar-menu" id="navbar-menu">

        <li><a href="index.html" class="${isActive(['index.html',''])}">Beranda</a></li>

        <li class="has-dropdown">
          <a href="profil.html" class="${isActive(['profil.html','visi-misi.html','tugas-fungsi.html','struktur.html'])}">
            Profil UPT <i class="fa-solid fa-chevron-down dd-arrow"></i>
          </a>
          <ul class="dropdown">
            <li><a href="profil.html"><i class="fa-solid fa-building-columns"></i> Tentang UPT</a></li>
            <li><a href="visi-misi.html"><i class="fa-solid fa-eye"></i> Visi &amp; Misi</a></li>
            <li><a href="tugas-fungsi.html"><i class="fa-solid fa-list-check"></i> Tugas &amp; Fungsi</a></li>
            <li><a href="struktur.html"><i class="fa-solid fa-sitemap"></i> Struktur Organisasi</a></li>
          </ul>
        </li>

        <li class="has-dropdown">
          <a href="layanan.html" class="${isActive(['layanan.html','layanan-detail.html'])}">
            Layanan <i class="fa-solid fa-chevron-down dd-arrow"></i>
          </a>
          <ul class="dropdown">
            <li><a href="layanan.html"><i class="fa-solid fa-th-large"></i> Semua Layanan</a></li>
            <li><a href="layanan-detail.html?id=pengaduan"><i class="fa-solid fa-bullhorn"></i> Pengaduan</a></li>
            <li><a href="layanan-detail.html?id=konsultasi"><i class="fa-solid fa-comments"></i> Konsultasi</a></li>
            <li><a href="layanan-detail.html?id=pendampingan"><i class="fa-solid fa-hand-holding-hand"></i> Pendampingan</a></li>
            <li><a href="layanan-detail.html?id=perlindungan"><i class="fa-solid fa-house-shield"></i> Perlindungan</a></li>
            <li><a href="layanan-detail.html?id=rujukan"><i class="fa-solid fa-hospital-user"></i> Rujukan</a></li>
          </ul>
        </li>

        <li class="has-dropdown">
          <a href="pengaduan.html" class="${isActive(['pengaduan.html','alur-pengaduan.html'])}">
            Pengaduan <i class="fa-solid fa-chevron-down dd-arrow"></i>
          </a>
          <ul class="dropdown">
            <li><a href="pengaduan.html"><i class="fa-solid fa-paper-plane"></i> Pengaduan Online</a></li>
            <li><a href="alur-pengaduan.html"><i class="fa-solid fa-route"></i> Alur Pengaduan</a></li>
          </ul>
        </li>

        <li class="has-dropdown">
          <a href="edukasi.html" class="${isActive(['edukasi.html'])}">
            Edukasi <i class="fa-solid fa-chevron-down dd-arrow"></i>
          </a>
          <ul class="dropdown">
            <li><a href="edukasi.html?kat=perempuan"><i class="fa-solid fa-venus"></i> Perlindungan Perempuan</a></li>
            <li><a href="edukasi.html?kat=anak"><i class="fa-solid fa-child"></i> Perlindungan Anak</a></li>
            <li><a href="edukasi.html?kat=pencegahan"><i class="fa-solid fa-shield-halved"></i> Pencegahan Kekerasan</a></li>
            <li><a href="edukasi.html?kat=hak"><i class="fa-solid fa-scale-balanced"></i> Hak Perempuan &amp; Anak</a></li>
          </ul>
        </li>

        <li><a href="berita.html" class="${isActive(['berita.html','berita-detail.html'])}">Berita</a></li>
        <li><a href="galeri.html" class="${isActive(['galeri.html'])}">Galeri</a></li>
        <li><a href="faq.html" class="${isActive(['faq.html'])}">FAQ</a></li>
        <li><a href="kontak.html" class="${isActive(['kontak.html'])}">Kontak</a></li>
      </ul>

      <!-- CTA -->
      <a href="pengaduan.html" class="btn-navbar-cta hide-md">
        <i class="fa-solid fa-paper-plane"></i> Pengaduan Resmi
      </a>

      <!-- Hamburger -->
      <button class="hamburger" id="hamburger-btn" aria-label="Buka menu">
        <span></span><span></span><span></span>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div class="mobile-menu" id="mobile-menu">
      <ul>
        <li><a href="index.html"><i class="fa-solid fa-house"></i> Beranda</a></li>
        <li class="mob-group">
          <button class="mob-toggle"><i class="fa-solid fa-building-columns"></i> Profil UPT <i class="fa-solid fa-chevron-down"></i></button>
          <ul class="mob-sub">
            <li><a href="profil.html">Tentang UPT</a></li>
            <li><a href="visi-misi.html">Visi &amp; Misi</a></li>
            <li><a href="tugas-fungsi.html">Tugas &amp; Fungsi</a></li>
            <li><a href="struktur.html">Struktur Organisasi</a></li>
          </ul>
        </li>
        <li class="mob-group">
          <button class="mob-toggle"><i class="fa-solid fa-hand-holding-heart"></i> Layanan <i class="fa-solid fa-chevron-down"></i></button>
          <ul class="mob-sub">
            <li><a href="layanan.html">Semua Layanan</a></li>
            <li><a href="layanan-detail.html?id=pengaduan">Pengaduan</a></li>
            <li><a href="layanan-detail.html?id=konsultasi">Konsultasi</a></li>
            <li><a href="layanan-detail.html?id=pendampingan">Pendampingan</a></li>
            <li><a href="layanan-detail.html?id=perlindungan">Perlindungan</a></li>
            <li><a href="layanan-detail.html?id=rujukan">Rujukan</a></li>
          </ul>
        </li>
        <li class="mob-group">
          <button class="mob-toggle"><i class="fa-solid fa-bullhorn"></i> Pengaduan <i class="fa-solid fa-chevron-down"></i></button>
          <ul class="mob-sub">
            <li><a href="pengaduan.html">Pengaduan Online</a></li>
            <li><a href="alur-pengaduan.html">Alur Pengaduan</a></li>
          </ul>
        </li>
        <li class="mob-group">
          <button class="mob-toggle"><i class="fa-solid fa-book-open"></i> Edukasi <i class="fa-solid fa-chevron-down"></i></button>
          <ul class="mob-sub">
            <li><a href="edukasi.html?kat=perempuan">Perlindungan Perempuan</a></li>
            <li><a href="edukasi.html?kat=anak">Perlindungan Anak</a></li>
            <li><a href="edukasi.html?kat=pencegahan">Pencegahan Kekerasan</a></li>
            <li><a href="edukasi.html?kat=hak">Hak Perempuan &amp; Anak</a></li>
          </ul>
        </li>
        <li><a href="berita.html"><i class="fa-solid fa-newspaper"></i> Berita</a></li>
        <li><a href="galeri.html"><i class="fa-solid fa-images"></i> Galeri</a></li>
        <li><a href="faq.html"><i class="fa-solid fa-circle-question"></i> FAQ</a></li>
        <li><a href="kontak.html"><i class="fa-solid fa-location-dot"></i> Kontak</a></li>
        <li class="mob-cta"><a href="pengaduan.html"><i class="fa-solid fa-paper-plane"></i> Pengaduan Resmi</a></li>
      </ul>
    </div>
  </nav>`;

  const target = document.getElementById('navbar-root');
  if (target) target.innerHTML = navbar;
  initNavbar();
}

/* ----------------------------------------------------------
   FOOTER HTML
   ---------------------------------------------------------- */
function renderFooter() {
  const footer = `
  <footer class="upt-footer">
    <div class="upt-container footer-grid">

      <!-- Kolom 1: Brand -->
      <div class="footer-brand">
        <div class="footer-logo">
          <div class="footer-logo-icon"><i class="fa-solid fa-shield-heart"></i></div>
          <div>
            <p class="footer-logo-title">UPT Perlindungan Perempuan</p>
            <p class="footer-logo-title">dan Anak Kota Palembang</p>
          </div>
        </div>
        <p class="footer-desc">
          Unit Pelaksana Teknis Dinas Pemberdayaan Perempuan dan Perlindungan Anak Kota Palembang yang memberikan layanan perlindungan dan pendampingan bagi perempuan dan anak.
        </p>
        <div class="footer-socials">
          <a href="https://www.instagram.com/dinaspppa_palembang" target="_blank" rel="noopener" aria-label="Instagram Dinas PPPA">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="https://www.instagram.com/upt.ppakotapalembang" target="_blank" rel="noopener" aria-label="Instagram UPT PPA">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="https://wa.me/6282179858798" target="_blank" rel="noopener" aria-label="WhatsApp">
            <i class="fa-brands fa-whatsapp"></i>
          </a>
        </div>
      </div>

      <!-- Kolom 2: Navigasi -->
      <div class="footer-col">
        <h4 class="footer-col-title">Navigasi</h4>
        <ul class="footer-links">
          <li><a href="index.html">Beranda</a></li>
          <li><a href="profil.html">Profil UPT</a></li>
          <li><a href="layanan.html">Layanan</a></li>
          <li><a href="pengaduan.html">Pengaduan</a></li>
          <li><a href="berita.html">Berita</a></li>
          <li><a href="galeri.html">Galeri</a></li>
          <li><a href="faq.html">FAQ</a></li>
          <li><a href="kontak.html">Kontak</a></li>
        </ul>
      </div>

      <!-- Kolom 3: Layanan -->
      <div class="footer-col">
        <h4 class="footer-col-title">Layanan</h4>
        <ul class="footer-links">
          <li><a href="layanan-detail.html?id=pengaduan">Pengaduan Kasus</a></li>
          <li><a href="layanan-detail.html?id=konsultasi">Konsultasi</a></li>
          <li><a href="layanan-detail.html?id=pendampingan">Pendampingan Korban</a></li>
          <li><a href="layanan-detail.html?id=perlindungan">Perlindungan &amp; Rumah Aman</a></li>
          <li><a href="layanan-detail.html?id=hukum">Pendampingan Hukum</a></li>
          <li><a href="layanan-detail.html?id=rujukan">Rujukan Layanan</a></li>
        </ul>
      </div>

      <!-- Kolom 4: Kontak -->
      <div class="footer-col">
        <h4 class="footer-col-title">Kontak</h4>
        <ul class="footer-contact">
          <li>
            <i class="fa-solid fa-location-dot"></i>
            <span>Jl. Demang Lebar Daun No. 3, Kel. Demang Lebar Daun, Kec. Ilir Barat I, Palembang 30137</span>
          </li>
          <li>
            <i class="fa-solid fa-phone"></i>
            <span>082179858798</span>
          </li>
          <li>
            <i class="fa-brands fa-whatsapp"></i>
            <a href="https://wa.me/6282179858798" target="_blank" rel="noopener">082179858798 (WhatsApp)</a>
          </li>
          <li>
            <i class="fa-solid fa-envelope"></i>
            <a href="mailto:uptdppakotapalembang@gmail.com">uptdppakotapalembang@gmail.com</a>
          </li>
          <li>
            <i class="fa-solid fa-clock"></i>
            <span>Senin – Jumat: 08.00 – 16.00 WIB<br>Hotline: 24 Jam</span>
          </li>
        </ul>
      </div>

    </div>

    <div class="footer-bottom">
      <div class="upt-container footer-bottom-inner">
        <p>&copy; ${new Date().getFullYear()} UPT Perlindungan Perempuan dan Anak Kota Palembang. Hak cipta dilindungi.</p>
        <p>Dinas Pemberdayaan Perempuan dan Perlindungan Anak Kota Palembang</p>
      </div>
    </div>
  </footer>

  <a href="pengaduan.html" class="float-aduan" aria-label="Ajukan Pengaduan Resmi">
    <i class="fa-solid fa-paper-plane"></i>
    <span class="float-wa-tooltip">Ajukan Pengaduan</span>
  </a>
  <a href="https://wa.me/6282179858798?text=Halo%20UPT%20PPA%20Kota%20Palembang%2C%20saya%20membutuhkan%20bantuan."
     target="_blank" rel="noopener"
     class="float-wa" aria-label="Hubungi Layanan UPT via WhatsApp">
    <i class="fa-brands fa-whatsapp"></i>
    <span class="float-wa-tooltip">Hubungi Layanan UPT</span>
  </a>

  <!-- Back to Top -->
  <button id="back-to-top" class="back-to-top" aria-label="Kembali ke atas">
    <i class="fa-solid fa-chevron-up"></i>
  </button>`;

  const target = document.getElementById('footer-root');
  if (target) target.innerHTML = footer;
  initBackToTop();
}

/* ----------------------------------------------------------
   NAVBAR INTERACTIONS
   ---------------------------------------------------------- */
function initNavbar() {
  // Hamburger toggle
  const btn  = document.getElementById('hamburger-btn');
  const menu = document.getElementById('mobile-menu');
  if (btn && menu) {
    btn.addEventListener('click', () => {
      btn.classList.toggle('open');
      menu.classList.toggle('open');
    });
  }

  // Mobile sub-menu toggle
  document.querySelectorAll('.mob-toggle').forEach(toggle => {
    toggle.addEventListener('click', () => {
      const sub = toggle.nextElementSibling;
      const isOpen = sub.classList.contains('open');
      // Tutup semua sub-menu dulu
      document.querySelectorAll('.mob-sub').forEach(s => s.classList.remove('open'));
      document.querySelectorAll('.mob-toggle').forEach(t => t.classList.remove('active'));
      if (!isOpen) {
        sub.classList.add('open');
        toggle.classList.add('active');
      }
    });
  });

  // Sticky navbar shadow
  const navbar = document.getElementById('main-navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    });
  }

  // Tutup mobile menu saat klik di luar
  document.addEventListener('click', (e) => {
    const menu = document.getElementById('mobile-menu');
    const btn  = document.getElementById('hamburger-btn');
    if (menu && btn && !menu.contains(e.target) && !btn.contains(e.target)) {
      menu.classList.remove('open');
      btn.classList.remove('open');
    }
  });
}

/* ----------------------------------------------------------
   BACK TO TOP
   ---------------------------------------------------------- */
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ----------------------------------------------------------
   INIT SEMUA — dipanggil di setiap halaman
   ---------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  renderNavbar();
  renderFooter();

  // AOS init jika tersedia
  if (typeof AOS !== 'undefined') {
    AOS.init({ once: true, duration: 700, offset: 60 });
  }
});
