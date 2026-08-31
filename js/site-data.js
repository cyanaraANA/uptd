/* Data konten portal UPT PPA Kota Palembang
   Statistik kasus, nama pejabat, dan dasar hukum lokal tidak dikarang.
   Konten berita/galeri bersifat placeholder dokumentasi. */

const SITE = {
  wa: '6282179858798',
  tel: '082179858798',
  email: 'uptdppakotapalembang@gmail.com',
  alamat: 'Jl. Demang Lebar Daun No. 3, Kel. Demang Lebar Daun, Kec. Ilir Barat I, Palembang 30137',
  maps: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.41285!2d104.729123!3d-2.983050!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3b758da8150419%3A0x6a1bc9a499092d6e!2sDinas%20Pemberdayaan%20Perempuan%20dan%20Perlindungan%20Anak%20Kota%20Palembang!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid',
  mapsLink: 'https://maps.app.goo.gl/dBbP5LXJDz34Z74fA'
};

const LAYANAN = {
  pengaduan: {
    slug: 'pengaduan',
    icon: 'fa-solid fa-bullhorn',
    title: 'Pengaduan',
    ringkas: 'Menerima laporan terkait kekerasan, diskriminasi, atau pelanggaran hak perempuan dan anak secara aman dan rahasia.',
    sasaran: 'Korban, keluarga, saksi, masyarakat, atau lembaga yang mengetahui adanya kasus.',
    cara: 'Datang langsung, WhatsApp, hotline, atau formulir pengaduan online.',
    pengertian: 'Layanan penerimaan laporan masyarakat terkait kekerasan, eksploitasi, penelantaran, atau pelanggaran hak perempuan dan anak. Setiap laporan ditangani secara rahasia dan profesional.',
    siapa: ['Korban kekerasan perempuan atau anak', 'Keluarga atau wali', 'Saksi atau masyarakat', 'Instansi atau lembaga rujukan'],
    proses: ['Penyampaian laporan', 'Penerimaan dan pencatatan', 'Verifikasi informasi', 'Asesmen kebutuhan', 'Rencana penanganan'],
    dokumen: 'Identitas pelapor (jika memungkinkan), kronologi kejadian, dan dokumen pendukung bila ada. Laporan tetap dapat diterima meskipun dokumen belum lengkap.',
    kontak: true
  },
  konsultasi: {
    slug: 'konsultasi',
    icon: 'fa-solid fa-comments',
    title: 'Konsultasi',
    ringkas: 'Konsultasi dan konseling bagi korban maupun masyarakat yang membutuhkan informasi atau dukungan.',
    sasaran: 'Korban, keluarga, dan masyarakat yang membutuhkan panduan layanan.',
    cara: 'Janji temu di kantor UPT, WhatsApp, atau rujukan dari instansi lain.',
    pengertian: 'Layanan konsultasi dan konseling untuk memberikan informasi, dukungan psikososial, serta panduan langkah yang dapat diambil.',
    siapa: ['Korban yang membutuhkan dukungan', 'Keluarga atau pendamping', 'Masyarakat yang ingin berkonsultasi'],
    proses: ['Pendaftaran/konsultasi awal', 'Wawancara kebutuhan', 'Sesi konsultasi/konseling', 'Rencana tindak lanjut'],
    dokumen: 'Tidak diwajibkan dokumen tertentu pada konsultasi awal.',
    kontak: true
  },
  pendampingan: {
    slug: 'pendampingan',
    icon: 'fa-solid fa-hand-holding-hand',
    title: 'Pendampingan',
    ringkas: 'Pendampingan emosional, psikososial, administratif, dan hukum selama proses penanganan kasus.',
    sasaran: 'Korban yang sedang dalam proses penanganan kasus.',
    cara: 'Setelah asesmen, petugas menyusun rencana pendampingan sesuai kebutuhan.',
    pengertian: 'Pendampingan terpadu bagi korban selama proses penanganan, termasuk dukungan psikososial, administratif, dan proses hukum bila diperlukan.',
    siapa: ['Korban kekerasan', 'Anak yang membutuhkan pendampingan khusus', 'Keluarga sesuai asesmen'],
    proses: ['Asesmen kebutuhan', 'Penunjukan pendamping', 'Pelaksanaan pendampingan', 'Monitoring berkala'],
    dokumen: 'Disesuaikan dengan jenis pendampingan (administratif atau hukum).',
    kontak: true
  },
  perlindungan: {
    slug: 'perlindungan',
    icon: 'fa-solid fa-house-lock',
    title: 'Perlindungan',
    ringkas: 'Perlindungan sementara dan langkah pengamanan bagi korban yang berada dalam situasi tidak aman.',
    sasaran: 'Perempuan dan anak yang membutuhkan tempat atau perlindungan sementara.',
    cara: 'Melalui pengaduan dan asesmen urgensi oleh petugas UPT.',
    pengertian: 'Layanan perlindungan bagi korban yang berada dalam ancaman atau situasi bahaya, termasuk fasilitasi tempat aman sesuai ketersediaan dan ketentuan yang berlaku.',
    siapa: ['Korban yang terancam keselamatannya', 'Anak yang memerlukan perlindungan khusus'],
    proses: ['Laporan/penjangkauan', 'Asesmen risiko', 'Penempatan perlindungan sementara', 'Koordinasi dengan instansi terkait'],
    dokumen: 'Disesuaikan dengan kondisi kasus. Keselamatan korban menjadi prioritas.',
    kontak: true
  },
  penanganan: {
    slug: 'penanganan',
    icon: 'fa-solid fa-kit-medical',
    title: 'Penanganan',
    ringkas: 'Penanganan kasus secara terpadu sesuai kebutuhan korban, termasuk koordinasi lintas instansi.',
    sasaran: 'Korban yang telah melalui penerimaan laporan dan asesmen.',
    cara: 'Ditentukan setelah asesmen; tidak semua kasus menempuh jalur yang sama.',
    pengertian: 'Rangkaian intervensi setelah asesmen, meliputi pendampingan, mediasi (jika sesuai), bantuan hukum, dan pemulihan sesuai kepentingan terbaik korban.',
    siapa: ['Korban yang kasusnya sedang ditangani UPT'],
    proses: ['Rencana intervensi', 'Pelaksanaan layanan', 'Koordinasi lintas lembaga', 'Evaluasi perkembangan'],
    dokumen: 'Dokumen kasus dikelola secara rahasia oleh petugas.',
    kontak: true
  },
  rujukan: {
    slug: 'rujukan',
    icon: 'fa-solid fa-hospital-user',
    title: 'Rujukan',
    ringkas: 'Merujuk korban ke layanan kesehatan, psikologis, hukum, atau lembaga lain sesuai kebutuhan.',
    sasaran: 'Korban yang membutuhkan layanan di luar kapasitas langsung UPT.',
    cara: 'Petugas menyusun rujukan setelah asesmen.',
    pengertian: 'UPT berkoordinasi dengan fasilitas kesehatan, aparat penegak hukum, dan lembaga terkait agar kebutuhan korban terpenuhi secara utuh.',
    siapa: ['Korban yang memerlukan layanan medis, visum, psikologis, atau bantuan lembaga lain'],
    proses: ['Identifikasi kebutuhan rujukan', 'Koordinasi lembaga tujuan', 'Pendampingan saat rujukan', 'Umpan balik penanganan'],
    dokumen: 'Surat rujukan atau dokumen pendukung disiapkan petugas bila diperlukan.',
    kontak: true
  }
};

const LAYANAN_ORDER = ['pengaduan', 'konsultasi', 'pendampingan', 'perlindungan', 'penanganan', 'rujukan'];

const BERITA = [
  {
    slug: 'sosialisasi-perlindungan-anak',
    kategori: 'Sosialisasi',
    tanggal: '[Tanggal kegiatan]',
    judul: 'Kegiatan Sosialisasi Perlindungan Anak',
    ringkas: 'Kegiatan edukasi masyarakat mengenai pencegahan kekerasan dan pemenuhan hak anak. Isi lengkap akan dilengkapi dengan dokumentasi resmi UPT.',
    isi: [
      'Halaman ini merupakan kerangka berita kegiatan UPT Perlindungan Perempuan dan Anak Kota Palembang.',
      'Foto, tanggal, dan uraian kegiatan akan diganti dengan dokumentasi resmi setelah tersedia.',
      'Masyarakat dapat menghubungi UPT untuk informasi layanan pengaduan dan pendampingan.'
    ]
  },
  {
    slug: 'edukasi-pencegahan-kekerasan',
    kategori: 'Edukasi',
    tanggal: '[Tanggal kegiatan]',
    judul: 'Edukasi Pencegahan Kekerasan terhadap Perempuan dan Anak',
    ringkas: 'Kegiatan penyuluhan mengenai bentuk kekerasan, cara mengenali tanda bahaya, dan jalur pengaduan resmi.',
    isi: [
      'Materi edukasi mencakup pengenalan bentuk kekerasan, hak perempuan dan anak, serta cara mengakses layanan UPT.',
      'Konten ini bersifat placeholder dan bukan laporan kinerja atau data kasus.'
    ]
  },
  {
    slug: 'koordinasi-penanganan',
    kategori: 'Kegiatan UPT',
    tanggal: '[Tanggal kegiatan]',
    judul: 'Koordinasi Penanganan Layanan dengan Instansi Terkait',
    ringkas: 'Rapat atau koordinasi layanan terpadu agar penanganan korban berjalan sesuai kewenangan masing-masing instansi.',
    isi: [
      'UPT berkoordinasi dengan instansi terkait dalam penanganan kasus sesuai ketentuan yang berlaku.',
      'Detail kegiatan akan dilengkapi dari dokumentasi resmi UPT.'
    ]
  },
  {
    slug: 'pelayanan-pengaduan',
    kategori: 'Pelayanan',
    tanggal: '[Tanggal kegiatan]',
    judul: 'Informasi Layanan Pengaduan dan Pendampingan',
    ringkas: 'Pengingat bahwa layanan pengaduan UPT dapat diakses langsung, melalui WhatsApp, atau formulir online.',
    isi: [
      'Layanan pengaduan bersifat rahasia. Data pelapor dan korban tidak ditampilkan kepada publik.',
      'Masyarakat diimbau menggunakan kanal resmi UPT.'
    ]
  },
  {
    slug: 'pendampingan-masyarakat',
    kategori: 'Pendampingan',
    tanggal: '[Tanggal kegiatan]',
    judul: 'Kegiatan Pendampingan Layanan Masyarakat',
    ringkas: 'Dokumentasi kerangka kegiatan pendampingan. Foto resmi dapat ditambahkan kemudian.',
    isi: [
      'Pendampingan diberikan sesuai asesmen kebutuhan korban.',
      'Tidak ada data identitas atau jumlah kasus yang ditampilkan pada laman ini.'
    ]
  },
  {
    slug: 'kegiatan-internal-upt',
    kategori: 'Kegiatan UPT',
    tanggal: '[Tanggal kegiatan]',
    judul: 'Kegiatan Internal dan Peningkatan Pelayanan UPT',
    ringkas: 'Kerangka berita untuk kegiatan internal, pelatihan petugas, atau peningkatan mutu layanan.',
    isi: [
      'Judul dan isi akan disesuaikan dengan agenda resmi UPT.',
      'Gunakan laman ini sebagai templat berita kegiatan.'
    ]
  }
];

const EDUKASI = [
  { slug: 'kenali-kekerasan', kat: 'pencegahan', kategori: 'Pencegahan Kekerasan', icon: 'fa-solid fa-triangle-exclamation', title: 'Kenali Kekerasan', ringkas: 'Mengenal bentuk kekerasan fisik, psikis, seksual, ekonomi, dan penelantaran.' },
  { slug: 'lindungi-anak', kat: 'anak', kategori: 'Perlindungan Anak', icon: 'fa-solid fa-child', title: 'Lindungi Anak', ringkas: 'Langkah dasar melindungi anak dari kekerasan, eksploitasi, dan penelantaran.' },
  { slug: 'hak-perempuan-anak', kat: 'hak', kategori: 'Hak Perempuan dan Anak', icon: 'fa-solid fa-scale-balanced', title: 'Hak Perempuan dan Anak', ringkas: 'Informasi umum mengenai hak untuk hidup aman, dilindungi, dan mendapat layanan.' },
  { slug: 'cara-mendapatkan-bantuan', kat: 'pencegahan', kategori: 'Pencegahan Kekerasan', icon: 'fa-solid fa-life-ring', title: 'Cara Mendapatkan Bantuan', ringkas: 'Jalur pengaduan resmi UPT, hotline, dan langkah awal jika terjadi kekerasan.' },
  { slug: 'kekerasan-perempuan', kat: 'perempuan', kategori: 'Perlindungan Perempuan', icon: 'fa-solid fa-venus', title: 'Kekerasan terhadap Perempuan', ringkas: 'Informasi edukatif mengenai kekerasan berbasis gender dan layanan yang tersedia.' },
  { slug: 'kekerasan-anak', kat: 'anak', kategori: 'Perlindungan Anak', icon: 'fa-solid fa-hands-holding-child', title: 'Kekerasan terhadap Anak', ringkas: 'Tanda, dampak, dan pentingnya segera meminta bantuan layanan resmi.' },
  { slug: 'kekerasan-seksual', kat: 'pencegahan', kategori: 'Pencegahan Kekerasan', icon: 'fa-solid fa-shield-halved', title: 'Kekerasan Seksual', ringkas: 'Informasi umum dan ajakan mencari layanan pendampingan tanpa menunda.' },
  { slug: 'perundungan', kat: 'anak', kategori: 'Perlindungan Anak', icon: 'fa-solid fa-users', title: 'Perundungan', ringkas: 'Mengenali perundungan di sekolah atau lingkungan dan ke mana harus melapor.' },
  { slug: 'kdrt', kat: 'perempuan', kategori: 'Perlindungan Perempuan', icon: 'fa-solid fa-house', title: 'Kekerasan dalam Rumah Tangga', ringkas: 'Informasi layanan bagi perempuan dan anak yang mengalami kekerasan di rumah.' },
  { slug: 'hak-perempuan', kat: 'hak', kategori: 'Hak Perempuan dan Anak', icon: 'fa-solid fa-person-dress', title: 'Hak Perempuan', ringkas: 'Hak atas rasa aman, layanan kesehatan, bantuan hukum, dan pendampingan.' },
  { slug: 'hak-anak', kat: 'hak', kategori: 'Hak Perempuan dan Anak', icon: 'fa-solid fa-book-open', title: 'Hak Anak', ringkas: 'Hak anak atas perlindungan, pendidikan, dan tumbuh kembang yang aman.' }
];

const EDUKASI_ISI = {
  default: [
    'Materi pada laman ini bersifat edukatif dan tidak menggantikan asesmen petugas.',
    'Jika Anda atau orang terdekat berada dalam bahaya, segera hubungi layanan UPT atau aparat setempat.',
    'Identitas pelapor dijaga kerahasiaannya sesuai ketentuan yang berlaku.'
  ]
};

const FAQ = [
  { q: 'Apa itu UPT Perlindungan Perempuan dan Anak?', a: 'UPT Perlindungan Perempuan dan Anak Kota Palembang adalah unit pelayanan teknis di bawah Dinas Pemberdayaan Perempuan dan Perlindungan Anak yang memberikan layanan pengaduan, pendampingan, perlindungan, dan rujukan bagi perempuan dan anak.' },
  { q: 'Siapa yang dapat menggunakan layanan UPT?', a: 'Layanan dapat digunakan oleh perempuan dan anak yang membutuhkan perlindungan, serta keluarga, saksi, masyarakat, atau lembaga yang ingin menyampaikan pengaduan.' },
  { q: 'Apakah layanan UPT berbayar?', a: 'Layanan UPT tidak dipungut biaya.' },
  { q: 'Bagaimana cara melakukan pengaduan?', a: 'Pengaduan dapat disampaikan langsung di kantor UPT, melalui WhatsApp/telepon, atau melalui formulir pengaduan online pada laman ini.' },
  { q: 'Apakah pengaduan dapat dilakukan secara online?', a: 'Ya. Masyarakat dapat mengisi formulir pada menu Pengaduan Resmi atau menghubungi WhatsApp layanan.' },
  { q: 'Apakah identitas pelapor dirahasiakan?', a: 'Data dan informasi pengaduan digunakan untuk keperluan penanganan dan tidak ditampilkan kepada publik.' },
  { q: 'Apa yang harus dilakukan jika terjadi kekerasan?', a: 'Utamakan keselamatan. Segera menjauh dari sumber ancaman jika memungkinkan, hubungi layanan UPT atau aparat, dan jangan menunda meminta bantuan.' },
  { q: 'Bagaimana proses setelah pengaduan diterima?', a: 'Petugas melakukan penerimaan laporan, verifikasi, asesmen, kemudian pendampingan, penanganan, dan/atau rujukan, serta tindak lanjut sesuai kebutuhan.' },
  { q: 'Apakah harus membawa dokumen lengkap saat mengadu?', a: 'Tidak harus. Laporan tetap dapat diterima. Dokumen pendukung dapat dilengkapi kemudian bila diperlukan.' },
  { q: 'Apakah anak dapat dilaporkan oleh orang lain?', a: 'Ya. Keluarga, guru, tetangga, atau lembaga dapat menyampaikan pengaduan demi kepentingan terbaik anak.' }
];

const GALERI = [
  { kat: 'pelayanan', judul: 'Pelayanan masyarakat', ket: 'Placeholder foto dokumentasi pelayanan' },
  { kat: 'sosialisasi', judul: 'Sosialisasi', ket: 'Placeholder foto kegiatan sosialisasi' },
  { kat: 'pendampingan', judul: 'Pendampingan', ket: 'Placeholder foto kegiatan pendampingan' },
  { kat: 'edukasi', judul: 'Edukasi', ket: 'Placeholder foto kegiatan edukasi' },
  { kat: 'kegiatan', judul: 'Kegiatan UPT', ket: 'Placeholder foto kegiatan resmi UPT' },
  { kat: 'pelayanan', judul: 'Ruang layanan', ket: 'Placeholder foto gedung/ruang layanan' },
  { kat: 'sosialisasi', judul: 'Penyuluhan', ket: 'Placeholder foto penyuluhan' },
  { kat: 'edukasi', judul: 'Materi edukasi', ket: 'Placeholder dokumentasi edukasi' },
  { kat: 'kegiatan', judul: 'Kegiatan koordinasi', ket: 'Placeholder foto koordinasi' }
];
