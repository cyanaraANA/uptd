/* Interaksi halaman portal UPT PPA */

function qs(name) {
  return new URLSearchParams(window.location.search).get(name);
}

function waLink(text) {
  const msg = encodeURIComponent(text || 'Halo UPT PPA Kota Palembang, saya membutuhkan bantuan.');
  return `https://wa.me/${SITE.wa}?text=${msg}`;
}

function initFAQ(listId, searchId) {
  const root = document.getElementById(listId || 'faq-list');
  if (!root) return;
  const limit = root.dataset.home === 'true' ? 8 : FAQ.length;
  const items = FAQ.slice(0, limit).map((item) => `
    <div class="faq-item" data-q="${item.q.toLowerCase()} ${item.a.toLowerCase()}">
      <button class="faq-question" type="button" aria-expanded="false">
        <span>${item.q}</span>
        <span class="faq-icon"><i class="fa-solid fa-chevron-down"></i></span>
      </button>
      <div class="faq-answer"><p>${item.a}</p></div>
    </div>`).join('');
  root.innerHTML = items;
  root.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const open = btn.classList.contains('open');
      root.querySelectorAll('.faq-question').forEach(b => b.classList.remove('open'));
      root.querySelectorAll('.faq-answer').forEach(a => a.classList.remove('open'));
      if (!open) {
        btn.classList.add('open');
        btn.nextElementSibling.classList.add('open');
      }
    });
  });
  const search = document.getElementById(searchId || 'faq-search');
  if (search) {
    search.addEventListener('input', () => {
      const q = search.value.toLowerCase().trim();
      root.querySelectorAll('.faq-item').forEach(el => {
        el.classList.toggle('hidden', q && !el.dataset.q.includes(q));
      });
    });
  }
}

function renderLayananCards(targetId, withMeta) {
  const el = document.getElementById(targetId);
  if (!el) return;
  el.innerHTML = LAYANAN_ORDER.map((key, i) => {
    const s = LAYANAN[key];
    return `
      <article class="layanan-card" data-aos="fade-up" data-aos-delay="${i * 50}">
        <div class="layanan-card-icon"><i class="${s.icon}"></i></div>
        <div>
          <h3 class="layanan-card-title">${s.title}</h3>
          <p class="layanan-card-desc">${s.ringkas}</p>
          ${withMeta ? `<div class="layanan-meta mt-2"><strong>Sasaran</strong>${s.sasaran}<br><strong class="mt-1">Cara mendapatkan</strong>${s.cara}</div>` : ''}
        </div>
        <div style="display:flex;flex-wrap:wrap;gap:.5rem;margin-top:auto;">
          <a href="layanan-detail.html?id=${s.slug}" class="btn btn-outline btn-sm">Selengkapnya</a>
          ${withMeta ? `<a href="pengaduan.html" class="btn btn-primary btn-sm">Pengaduan</a>` : ''}
        </div>
      </article>`;
  }).join('');
}

function renderLayananDetail() {
  const box = document.getElementById('layanan-detail-root');
  if (!box) return;
  const id = qs('id') || 'pengaduan';
  const s = LAYANAN[id] || LAYANAN.pengaduan;
  document.title = `Layanan ${s.title} — UPT Perlindungan Perempuan dan Anak Kota Palembang`;
  const titleEl = document.getElementById('page-title');
  if (titleEl) titleEl.textContent = 'Layanan ' + s.title;
  box.innerHTML = `
    <div class="grid-2-1" style="align-items:start;">
      <div>
        <div class="card card-body mb-3">
          <div class="layanan-card-icon mb-2"><i class="${s.icon}"></i></div>
          <h2 class="section-title" style="font-size:1.5rem;">${s.title}</h2>
          <p class="mt-2">${s.pengertian}</p>
        </div>
        <div class="card card-body mb-3">
          <h3 class="layanan-card-title">Siapa yang dapat menggunakan</h3>
          <ul class="info-list mt-2">${s.siapa.map(x => `<li><i class="fa-solid fa-circle-check"></i><span>${x}</span></li>`).join('')}</ul>
        </div>
        <div class="card card-body mb-3">
          <h3 class="layanan-card-title">Proses layanan</h3>
          <ol class="info-list mt-2">${s.proses.map((x, i) => `<li><i class="fa-solid fa-${i + 1}"></i><span>${x}</span></li>`).join('')}</ol>
        </div>
        <div class="card card-body">
          <h3 class="layanan-card-title">Dokumen</h3>
          <p class="layanan-card-desc mt-1">${s.dokumen}</p>
        </div>
      </div>
      <aside>
        <div class="card card-body mb-3">
          <h3 class="layanan-card-title">Cara mendapatkan</h3>
          <p class="layanan-card-desc">${s.cara}</p>
          <a href="pengaduan.html" class="btn btn-gold mt-3" style="width:100%;">Ajukan Pengaduan</a>
          <a href="${waLink()}" target="_blank" rel="noopener" class="btn btn-outline mt-2" style="width:100%;">Hubungi WhatsApp</a>
        </div>
        <div class="card card-body">
          <h3 class="layanan-card-title">Kontak</h3>
          <p class="layanan-card-desc">Telp/WA: ${SITE.tel}<br>Email: ${SITE.email}<br>${SITE.alamat}</p>
        </div>
      </aside>
    </div>`;
}

function beritaCard(b) {
  return `
    <article class="berita-card">
      <div class="berita-card-img">
        <i class="fa-solid fa-newspaper berita-card-img-icon"></i>
        <span class="berita-card-badge">${b.kategori}</span>
      </div>
      <div class="berita-card-body">
        <div class="berita-card-date"><i class="fa-regular fa-calendar"></i> ${b.tanggal}</div>
        <a href="berita-detail.html?slug=${b.slug}" class="berita-card-title">${b.judul}</a>
        <p class="berita-card-desc">${b.ringkas}</p>
        <a href="berita-detail.html?slug=${b.slug}" class="btn-text">Baca Selengkapnya <i class="fa-solid fa-arrow-right"></i></a>
      </div>
    </article>`;
}

function renderBeritaHome() {
  const el = document.getElementById('berita-home');
  if (!el) return;
  el.innerHTML = BERITA.slice(0, 6).map(beritaCard).join('');
}

function renderBeritaList() {
  const el = document.getElementById('berita-list');
  if (!el) return;
  const perPage = 4;
  let page = parseInt(qs('hal') || '1', 10);
  const total = Math.ceil(BERITA.length / perPage);
  if (page < 1) page = 1;
  if (page > total) page = total;
  const slice = BERITA.slice((page - 1) * perPage, page * perPage);
  el.innerHTML = slice.map(beritaCard).join('');
  const pag = document.getElementById('berita-pag');
  if (pag) {
    pag.innerHTML = Array.from({ length: total }, (_, i) => {
      const n = i + 1;
      return `<a href="berita.html?hal=${n}" class="${n === page ? 'active' : ''}">${n}</a>`;
    }).join('');
  }
}

function renderBeritaDetail() {
  const el = document.getElementById('berita-detail-root');
  if (!el) return;
  const slug = qs('slug');
  const b = BERITA.find(x => x.slug === slug) || BERITA[0];
  document.title = `${b.judul} — UPT PPA Kota Palembang`;
  const t = document.getElementById('page-title');
  if (t) t.textContent = b.judul;
  const related = BERITA.filter(x => x.slug !== b.slug).slice(0, 3);
  el.innerHTML = `
    <div class="article-meta">
      <span><i class="fa-regular fa-calendar"></i> ${b.tanggal}</span>
      <span><i class="fa-solid fa-tag"></i> ${b.kategori}</span>
    </div>
    <div class="article-hero-img">
      <div class="img-placeholder"><i class="fa-solid fa-image"></i><span>Foto kegiatan — akan diganti dokumentasi resmi</span></div>
    </div>
    <div class="article-body">${b.isi.map(p => `<p>${p}</p>`).join('')}</div>
    <p class="placeholder-note">Konten contoh. Ganti dengan naskah dan foto resmi UPT.</p>
    <h3 class="section-title mt-4" style="font-size:1.25rem;">Berita terkait</h3>
    <div class="grid-3 mt-3">${related.map(beritaCard).join('')}</div>`;
}

function renderEdukasi() {
  const el = document.getElementById('edukasi-list');
  if (!el) return;
  const kat = qs('kat');
  document.querySelectorAll('.filter-bar a.filter-btn').forEach(a => {
    const href = a.getAttribute('href') || '';
    a.classList.toggle('active', kat ? href.includes('kat=' + kat) : href === 'edukasi.html');
  });
  const data = kat ? EDUKASI.filter(e => e.kat === kat) : EDUKASI;
  const home = el.dataset.home === 'true';
  const list = home ? EDUKASI.slice(0, 4) : data;
  el.innerHTML = list.map(e => `
    <a href="edukasi.html?kat=${e.kat}#artikel-${e.slug}" class="edukasi-card" id="artikel-${e.slug}">
      <div class="edukasi-card-icon"><i class="${e.icon}"></i></div>
      <h3 class="edukasi-card-title">${e.title}</h3>
      <p class="edukasi-card-desc">${e.ringkas}</p>
    </a>`).join('');
}

function renderGaleri(filterId, gridId) {
  const grid = document.getElementById(gridId || 'galeri-grid');
  if (!grid) return;
  const home = grid.dataset.home === 'true';
  const items = home ? GALERI.slice(0, 6) : GALERI;
  function paint(kat) {
    const data = kat && kat !== 'semua' ? items.filter(g => g.kat === kat) : items;
    grid.innerHTML = data.map(g => `
      <button type="button" class="gallery-item" data-title="${g.judul}" data-ket="${g.ket}">
        <div class="img-placeholder"><i class="fa-solid fa-camera"></i><span>${g.judul}</span></div>
        <span class="gallery-item-cap">${g.judul}</span>
      </button>`).join('');
    grid.querySelectorAll('.gallery-item').forEach(btn => {
      btn.addEventListener('click', () => openLightbox(btn.dataset.title, btn.dataset.ket));
    });
  }
  paint('semua');
  document.querySelectorAll(filterId ? `#${filterId} .filter-btn` : '.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      paint(btn.dataset.kat);
    });
  });
}

function openLightbox(title, ket) {
  let box = document.getElementById('lightbox');
  if (!box) {
    box = document.createElement('div');
    box.id = 'lightbox';
    box.className = 'lightbox';
    box.innerHTML = `<button type="button" class="lightbox-close" aria-label="Tutup"><i class="fa-solid fa-xmark"></i></button>
      <div class="lightbox-inner">
        <div class="img-placeholder" style="min-height:360px;"><i class="fa-solid fa-image"></i><span id="lb-title"></span></div>
        <p id="lb-ket" style="color:#fff;margin-top:1rem;font-size:.85rem;"></p>
      </div>`;
    document.body.appendChild(box);
    box.addEventListener('click', (e) => { if (e.target === box || e.target.closest('.lightbox-close')) box.classList.remove('open'); });
  }
  document.getElementById('lb-title').textContent = title;
  document.getElementById('lb-ket').textContent = ket + ' — ganti dengan foto dokumentasi resmi.';
  box.classList.add('open');
}

function initForm(formId, successId) {
  const form = document.getElementById(formId);
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const ok = document.getElementById(successId);
    if (ok) ok.classList.add('show');
    form.reset();
    ok && ok.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderLayananCards('layanan-home', false);
  renderLayananCards('layanan-page', true);
  renderLayananDetail();
  renderBeritaHome();
  renderBeritaList();
  renderBeritaDetail();
  renderEdukasi();
  renderGaleri('galeri-filter', 'galeri-grid');
  initFAQ();
  initForm('form-pengaduan', 'pengaduan-success');
  initForm('form-kontak', 'kontak-success');
});
