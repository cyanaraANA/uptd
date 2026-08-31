/* ============================================================
   script.js — UPT PPA Kota Palembang
   Semua logika interaktif website (konversi dari index.php)
   ============================================================ */

/* ----------------------------------------------------------
   1. AOS INIT
   ---------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', function () {
  if (typeof AOS !== 'undefined') {
    AOS.init({ once: true, duration: 800 });
  }

  /* --------------------------------------------------------
     2. MOBILE MENU TOGGLE
     -------------------------------------------------------- */
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu    = document.getElementById('mobile-menu');
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
  }

  /* --------------------------------------------------------
     3. MODAL — tutup ketika klik area luar konten
     -------------------------------------------------------- */
  const modal = document.getElementById('modal-form');
  if (modal) {
    modal.addEventListener('click', function (e) {
      if (e.target === this) closeModalForm();
    });
  }

  /* --------------------------------------------------------
     4. NAVBAR — aktifkan link sesuai section yang terlihat
     -------------------------------------------------------- */
  const sections = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('[data-nav-section]');
  if (sections.length && navLinks.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            navLinks.forEach(link => {
              link.classList.toggle(
                'text-amber-300',
                link.dataset.navSection === entry.target.id
              );
            });
          }
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach(s => observer.observe(s));
  }

  /* --------------------------------------------------------
     5. TOMBOL BACK-TO-TOP
     -------------------------------------------------------- */
  const btt = document.getElementById('back-to-top');
  if (btt) {
    window.addEventListener('scroll', () => {
      btt.classList.toggle('opacity-0', window.scrollY < 400);
      btt.classList.toggle('pointer-events-none', window.scrollY < 400);
    });
    btt.addEventListener('click', () =>
      window.scrollTo({ top: 0, behavior: 'smooth' })
    );
  }
});

/* ----------------------------------------------------------
   6. TOGGLE MOBILE MENU
   ---------------------------------------------------------- */
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  if (menu) menu.classList.toggle('hidden');
}

/* ----------------------------------------------------------
   7. SHOW / HIDE VIEW (Beranda ↔ Detail Layanan)
   ---------------------------------------------------------- */
function showMainHome() {
  const main   = document.getElementById('main-content-view');
  const detail = document.getElementById('jelita-detail-view');
  if (main)   main.classList.remove('hidden');
  if (detail) detail.classList.add('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function scrollToJelitaSection() {
  showMainHome();
  setTimeout(() => {
    const el = document.getElementById('jelita-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, 100);
}

function scrollToNewsSection() {
  showMainHome();
  setTimeout(() => {
    const el = document.getElementById('news-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, 100);
}

/* ----------------------------------------------------------
   8. MODAL FORM (Google Form Embed)
   ---------------------------------------------------------- */
function openModalForm() {
  const modal = document.getElementById('modal-form');
  if (modal) modal.classList.remove('hidden');
}

function closeModalForm() {
  const modal = document.getElementById('modal-form');
  if (modal) modal.classList.add('hidden');
}

/* ----------------------------------------------------------
   9. DATA 9 LAYANAN UPT PPA
   ---------------------------------------------------------- */
const layananData = {
  pengaduan: {
    icon: 'fa-solid fa-bullhorn',
    title: 'PENERIMAAN PENGADUAN',
    tagline: 'Menerima laporan dan pengaduan masyarakat terkait kekerasan terhadap perempuan dan anak secara aman dan terjamin kerahasiaannya.',
    body: `
      <h3 class="text-xl font-serif-luxury font-bold text-amber-300 mb-4">Penerimaan Laporan &amp; Pengaduan</h3>
      <p class="text-xs text-slate-200 leading-relaxed font-light mb-4">UPT PPA Kota Palembang menerima setiap laporan dan pengaduan masyarakat terkait kasus kekerasan, diskriminasi, eksploitasi, penelantaran, atau pelanggaran hak lainnya terhadap perempuan dan anak. Setiap laporan ditangani secara rahasia, cepat, dan profesional.</p>
      <div class="grid sm:grid-cols-2 gap-3 text-xs text-slate-200">
        <div class="flex items-start gap-2 bg-rose-900/50 p-3 rounded-xl border border-amber-500/20"><i class="fa-solid fa-circle-check text-amber-400 mt-0.5 shrink-0"></i><span>Penerimaan laporan langsung di kantor UPTD</span></div>
        <div class="flex items-start gap-2 bg-rose-900/50 p-3 rounded-xl border border-amber-500/20"><i class="fa-solid fa-circle-check text-amber-400 mt-0.5 shrink-0"></i><span>Penerimaan laporan via hotline 129 atau WhatsApp</span></div>
        <div class="flex items-start gap-2 bg-rose-900/50 p-3 rounded-xl border border-amber-500/20"><i class="fa-solid fa-circle-check text-amber-400 mt-0.5 shrink-0"></i><span>Penerimaan laporan dari lembaga/instansi rujukan</span></div>
        <div class="flex items-start gap-2 bg-rose-900/50 p-3 rounded-xl border border-amber-500/20"><i class="fa-solid fa-circle-check text-amber-400 mt-0.5 shrink-0"></i><span>Kerahasiaan identitas pelapor dan korban dijamin 100%</span></div>
      </div>`
  },
  pendampingan: {
    icon: 'fa-solid fa-hand-holding-hand',
    title: 'PENDAMPINGAN KORBAN',
    tagline: 'Pendampingan langsung bagi korban secara emosional, psikososial, dan administratif selama proses penanganan kasus berlangsung.',
    body: `
      <h3 class="text-xl font-serif-luxury font-bold text-amber-300 mb-4">Layanan Pendampingan Korban</h3>
      <p class="text-xs text-slate-200 leading-relaxed font-light mb-4">Tim pendamping profesional UPT PPA memberikan pendampingan komprehensif kepada korban kekerasan, mulai dari pendampingan psikologis, sosial, hingga administratif selama seluruh proses penanganan kasus. Pendampingan dilakukan dengan pendekatan trauma-informed care.</p>
      <div class="grid sm:grid-cols-2 gap-3 text-xs text-slate-200">
        <div class="flex items-start gap-2 bg-rose-900/50 p-3 rounded-xl border border-amber-500/20"><i class="fa-solid fa-circle-check text-amber-400 mt-0.5 shrink-0"></i><span>Pendampingan emosional dan psikososial</span></div>
        <div class="flex items-start gap-2 bg-rose-900/50 p-3 rounded-xl border border-amber-500/20"><i class="fa-solid fa-circle-check text-amber-400 mt-0.5 shrink-0"></i><span>Pendampingan administratif dan birokrasi</span></div>
        <div class="flex items-start gap-2 bg-rose-900/50 p-3 rounded-xl border border-amber-500/20"><i class="fa-solid fa-circle-check text-amber-400 mt-0.5 shrink-0"></i><span>Pendampingan selama proses pelaporan ke aparat</span></div>
        <div class="flex items-start gap-2 bg-rose-900/50 p-3 rounded-xl border border-amber-500/20"><i class="fa-solid fa-circle-check text-amber-400 mt-0.5 shrink-0"></i><span>Koordinasi antar lembaga untuk kebutuhan korban</span></div>
      </div>`
  },
  konseling: {
    icon: 'fa-solid fa-comments',
    title: 'KONSELING',
    tagline: 'Layanan konseling gratis oleh psikolog dan konselor profesional bagi korban kekerasan maupun masyarakat yang membutuhkan dukungan mental.',
    body: `
      <h3 class="text-xl font-serif-luxury font-bold text-amber-300 mb-4">Layanan Konseling Psikologis &amp; Sosial</h3>
      <p class="text-xs text-slate-200 leading-relaxed font-light mb-4">UPT PPA menyediakan layanan konseling gratis dan rahasia oleh psikolog dan konselor profesional bagi korban kekerasan maupun masyarakat yang membutuhkan dukungan kesehatan mental, konsultasi, atau bimbingan terkait permasalahan perempuan dan anak.</p>
      <div class="grid sm:grid-cols-2 gap-3 text-xs text-slate-200">
        <div class="flex items-start gap-2 bg-rose-900/50 p-3 rounded-xl border border-amber-500/20"><i class="fa-solid fa-circle-check text-amber-400 mt-0.5 shrink-0"></i><span>Konseling psikologis individual untuk korban trauma</span></div>
        <div class="flex items-start gap-2 bg-rose-900/50 p-3 rounded-xl border border-amber-500/20"><i class="fa-solid fa-circle-check text-amber-400 mt-0.5 shrink-0"></i><span>Konseling keluarga dan relasi sosial</span></div>
        <div class="flex items-start gap-2 bg-rose-900/50 p-3 rounded-xl border border-amber-500/20"><i class="fa-solid fa-circle-check text-amber-400 mt-0.5 shrink-0"></i><span>Konsultasi permasalahan anak dan remaja</span></div>
        <div class="flex items-start gap-2 bg-rose-900/50 p-3 rounded-xl border border-amber-500/20"><i class="fa-solid fa-circle-check text-amber-400 mt-0.5 shrink-0"></i><span>Tersedia online (WhatsApp) &amp; offline (tatap muka)</span></div>
      </div>`
  },
  perlindungan: {
    icon: 'fa-solid fa-house-shield',
    title: 'PERLINDUNGAN & PENANGANAN',
    tagline: 'Penyediaan fasilitas rumah aman dan perlindungan sementara bagi korban yang membutuhkan tempat aman dari ancaman kekerasan.',
    body: `
      <h3 class="text-xl font-serif-luxury font-bold text-amber-300 mb-4">Perlindungan &amp; Penanganan Korban</h3>
      <p class="text-xs text-slate-200 leading-relaxed font-light mb-4">UPT PPA menyediakan fasilitas perlindungan sementara (rumah aman) dan penanganan komprehensif bagi perempuan dan anak yang berada dalam situasi bahaya atau ancaman kekerasan, termasuk tindak darurat yang memerlukan respons cepat.</p>
      <div class="grid sm:grid-cols-2 gap-3 text-xs text-slate-200">
        <div class="flex items-start gap-2 bg-rose-900/50 p-3 rounded-xl border border-amber-500/20"><i class="fa-solid fa-circle-check text-amber-400 mt-0.5 shrink-0"></i><span>Fasilitas rumah aman (shelter) sementara</span></div>
        <div class="flex items-start gap-2 bg-rose-900/50 p-3 rounded-xl border border-amber-500/20"><i class="fa-solid fa-circle-check text-amber-400 mt-0.5 shrink-0"></i><span>Penanganan darurat kasus kekerasan</span></div>
        <div class="flex items-start gap-2 bg-rose-900/50 p-3 rounded-xl border border-amber-500/20"><i class="fa-solid fa-circle-check text-amber-400 mt-0.5 shrink-0"></i><span>Perlindungan dari ancaman pelaku kekerasan</span></div>
        <div class="flex items-start gap-2 bg-rose-900/50 p-3 rounded-xl border border-amber-500/20"><i class="fa-solid fa-circle-check text-amber-400 mt-0.5 shrink-0"></i><span>Koordinasi dengan aparat penegak hukum jika diperlukan</span></div>
      </div>`
  },
  hukum: {
    icon: 'fa-solid fa-scale-balanced',
    title: 'PENDAMPINGAN HUKUM',
    tagline: 'Pendampingan hukum dan advokasi bagi korban dalam proses pelaporan, mediasi, hingga penyelesaian kasus secara hukum yang adil.',
    body: `
      <h3 class="text-xl font-serif-luxury font-bold text-amber-300 mb-4">Layanan Pendampingan &amp; Advokasi Hukum</h3>
      <p class="text-xs text-slate-200 leading-relaxed font-light mb-4">UPT PPA memberikan pendampingan dan advokasi hukum secara gratis kepada korban, memastikan hak korban terpenuhi dalam setiap tahap proses hukum, mulai dari pelaporan ke polisi, proses persidangan, hingga penyelesaian kasus.</p>
      <div class="grid sm:grid-cols-2 gap-3 text-xs text-slate-200">
        <div class="flex items-start gap-2 bg-rose-900/50 p-3 rounded-xl border border-amber-500/20"><i class="fa-solid fa-circle-check text-amber-400 mt-0.5 shrink-0"></i><span>Pendampingan saat melapor ke kepolisian</span></div>
        <div class="flex items-start gap-2 bg-rose-900/50 p-3 rounded-xl border border-amber-500/20"><i class="fa-solid fa-circle-check text-amber-400 mt-0.5 shrink-0"></i><span>Advokasi dan bantuan hukum selama proses persidangan</span></div>
        <div class="flex items-start gap-2 bg-rose-900/50 p-3 rounded-xl border border-amber-500/20"><i class="fa-solid fa-circle-check text-amber-400 mt-0.5 shrink-0"></i><span>Koordinasi dengan lembaga bantuan hukum (LBH)</span></div>
        <div class="flex items-start gap-2 bg-rose-900/50 p-3 rounded-xl border border-amber-500/20"><i class="fa-solid fa-circle-check text-amber-400 mt-0.5 shrink-0"></i><span>Pembuatan surat keterangan dan rekomendasi resmi</span></div>
      </div>`
  },
  rujukan: {
    icon: 'fa-solid fa-hospital-user',
    title: 'RUJUKAN LAYANAN',
    tagline: 'Merujuk korban ke fasilitas kesehatan, layanan psikologis, atau lembaga terkait lainnya sesuai kebutuhan pemulihan korban.',
    body: `
      <h3 class="text-xl font-serif-luxury font-bold text-amber-300 mb-4">Rujukan Layanan Kesehatan &amp; Psikologis</h3>
      <p class="text-xs text-slate-200 leading-relaxed font-light mb-4">UPT PPA bekerja sama dengan jaringan fasilitas kesehatan, lembaga psikologi, dan instansi terkait untuk memberikan rujukan layanan yang tepat bagi korban.</p>
      <div class="grid sm:grid-cols-2 gap-3 text-xs text-slate-200">
        <div class="flex items-start gap-2 bg-rose-900/50 p-3 rounded-xl border border-amber-500/20"><i class="fa-solid fa-circle-check text-amber-400 mt-0.5 shrink-0"></i><span>Rujukan ke rumah sakit &amp; puskesmas untuk visum dan perawatan</span></div>
        <div class="flex items-start gap-2 bg-rose-900/50 p-3 rounded-xl border border-amber-500/20"><i class="fa-solid fa-circle-check text-amber-400 mt-0.5 shrink-0"></i><span>Rujukan ke layanan psikologi klinis dan psikiater</span></div>
        <div class="flex items-start gap-2 bg-rose-900/50 p-3 rounded-xl border border-amber-500/20"><i class="fa-solid fa-circle-check text-amber-400 mt-0.5 shrink-0"></i><span>Rujukan ke lembaga sosial dan rumah singgah</span></div>
        <div class="flex items-start gap-2 bg-rose-900/50 p-3 rounded-xl border border-amber-500/20"><i class="fa-solid fa-circle-check text-amber-400 mt-0.5 shrink-0"></i><span>Koordinasi antar OPD untuk pemenuhan hak korban</span></div>
      </div>`
  },
  reintegrasi: {
    icon: 'fa-solid fa-person-circle-check',
    title: 'REINTEGRASI & PEMULIHAN',
    tagline: 'Pendampingan proses reintegrasi sosial korban kembali ke lingkungan keluarga dan masyarakat secara aman, bermartabat, dan berkelanjutan.',
    body: `
      <h3 class="text-xl font-serif-luxury font-bold text-amber-300 mb-4">Layanan Reintegrasi &amp; Pemulihan Korban</h3>
      <p class="text-xs text-slate-200 leading-relaxed font-light mb-4">UPT PPA mendampingi proses pemulihan dan reintegrasi korban ke kehidupan normal secara aman dan bermartabat.</p>
      <div class="grid sm:grid-cols-2 gap-3 text-xs text-slate-200">
        <div class="flex items-start gap-2 bg-rose-900/50 p-3 rounded-xl border border-amber-500/20"><i class="fa-solid fa-circle-check text-amber-400 mt-0.5 shrink-0"></i><span>Pemulihan psikologis pasca trauma</span></div>
        <div class="flex items-start gap-2 bg-rose-900/50 p-3 rounded-xl border border-amber-500/20"><i class="fa-solid fa-circle-check text-amber-400 mt-0.5 shrink-0"></i><span>Fasilitasi reunifikasi keluarga yang aman</span></div>
        <div class="flex items-start gap-2 bg-rose-900/50 p-3 rounded-xl border border-amber-500/20"><i class="fa-solid fa-circle-check text-amber-400 mt-0.5 shrink-0"></i><span>Dukungan pemberdayaan ekonomi pasca penanganan</span></div>
        <div class="flex items-start gap-2 bg-rose-900/50 p-3 rounded-xl border border-amber-500/20"><i class="fa-solid fa-circle-check text-amber-400 mt-0.5 shrink-0"></i><span>Pemantauan kondisi korban secara berkala</span></div>
      </div>`
  },
  informasi: {
    icon: 'fa-solid fa-circle-info',
    title: 'INFORMASI & KONSULTASI',
    tagline: 'Menyediakan informasi dan konsultasi publik mengenai hak-hak perempuan dan anak, bentuk kekerasan berbasis gender, serta upaya pencegahannya.',
    body: `
      <h3 class="text-xl font-serif-luxury font-bold text-amber-300 mb-4">Layanan Informasi &amp; Konsultasi Publik</h3>
      <p class="text-xs text-slate-200 leading-relaxed font-light mb-4">UPT PPA menyediakan layanan informasi dan konsultasi gratis bagi masyarakat umum terkait hak perempuan dan anak, cara melaporkan kasus, dan upaya pencegahan kekerasan.</p>
      <div class="grid sm:grid-cols-2 gap-3 text-xs text-slate-200">
        <div class="flex items-start gap-2 bg-rose-900/50 p-3 rounded-xl border border-amber-500/20"><i class="fa-solid fa-circle-check text-amber-400 mt-0.5 shrink-0"></i><span>Edukasi hak-hak perempuan dan anak</span></div>
        <div class="flex items-start gap-2 bg-rose-900/50 p-3 rounded-xl border border-amber-500/20"><i class="fa-solid fa-circle-check text-amber-400 mt-0.5 shrink-0"></i><span>Sosialisasi pencegahan kekerasan berbasis gender</span></div>
        <div class="flex items-start gap-2 bg-rose-900/50 p-3 rounded-xl border border-amber-500/20"><i class="fa-solid fa-circle-check text-amber-400 mt-0.5 shrink-0"></i><span>Penyuluhan ke sekolah, komunitas, dan lembaga</span></div>
        <div class="flex items-start gap-2 bg-rose-900/50 p-3 rounded-xl border border-amber-500/20"><i class="fa-solid fa-circle-check text-amber-400 mt-0.5 shrink-0"></i><span>Konsultasi awal bagi pihak yang membutuhkan panduan</span></div>
      </div>`
  },
  mediasi: {
    icon: 'fa-solid fa-folder-open',
    title: 'MEDIASI & PENGELOLAAN KASUS',
    tagline: 'Pengelolaan dan dokumentasi kasus secara profesional, termasuk mediasi antara pihak terkait dan perencanaan tindak lanjut sesuai kebutuhan korban.',
    body: `
      <h3 class="text-xl font-serif-luxury font-bold text-amber-300 mb-4">Layanan Mediasi &amp; Manajemen Kasus</h3>
      <p class="text-xs text-slate-200 leading-relaxed font-light mb-4">UPT PPA melakukan pengelolaan dan dokumentasi kasus secara sistematis dan profesional, termasuk mediasi dan perencanaan intervensi yang berfokus pada kepentingan terbaik korban.</p>
      <div class="grid sm:grid-cols-2 gap-3 text-xs text-slate-200">
        <div class="flex items-start gap-2 bg-rose-900/50 p-3 rounded-xl border border-amber-500/20"><i class="fa-solid fa-circle-check text-amber-400 mt-0.5 shrink-0"></i><span>Asesmen dan penilaian kebutuhan korban</span></div>
        <div class="flex items-start gap-2 bg-rose-900/50 p-3 rounded-xl border border-amber-500/20"><i class="fa-solid fa-circle-check text-amber-400 mt-0.5 shrink-0"></i><span>Dokumentasi kasus secara rahasia dan terstruktur</span></div>
        <div class="flex items-start gap-2 bg-rose-900/50 p-3 rounded-xl border border-amber-500/20"><i class="fa-solid fa-circle-check text-amber-400 mt-0.5 shrink-0"></i><span>Mediasi antara pihak terkait (sesuai kondisi kasus)</span></div>
        <div class="flex items-start gap-2 bg-rose-900/50 p-3 rounded-xl border border-amber-500/20"><i class="fa-solid fa-circle-check text-amber-400 mt-0.5 shrink-0"></i><span>Perencanaan intervensi dan monitoring tindak lanjut</span></div>
      </div>`
  },
  uptppa: {
    icon: 'fa-solid fa-hand-holding-hand',
    title: 'UPT PPA KOTA PALEMBANG',
    tagline: 'Unit Pelaksana Teknis Perlindungan Perempuan dan Anak Kota Palembang — pusat layanan perlindungan, pendampingan, dan penanganan terpadu.',
    isOverview: true
  }
};

/* ----------------------------------------------------------
   10. BUKA DETAIL LAYANAN
   ---------------------------------------------------------- */
function openJelitaDetail(type) {
  const mainView   = document.getElementById('main-content-view');
  const detailView = document.getElementById('jelita-detail-view');
  const icon       = document.getElementById('detail-icon');
  const title      = document.getElementById('detail-title');
  const tagline    = document.getElementById('detail-tagline');
  const generalBox = document.getElementById('jelita-general-box');
  const uptppaBox  = document.getElementById('uptppa-detail-box');

  const data = layananData[type] || layananData['uptppa'];

  icon.className    = data.icon;
  title.innerText   = data.title;
  tagline.innerText = data.tagline;

  if (data.isOverview) {
    generalBox.classList.add('hidden');
    uptppaBox.classList.remove('hidden');
  } else {
    uptppaBox.classList.add('hidden');
    generalBox.classList.remove('hidden');
    document.getElementById('layanan-detail-content').innerHTML = data.body;
  }

  mainView.classList.add('hidden');
  detailView.classList.remove('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
