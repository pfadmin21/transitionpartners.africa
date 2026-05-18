/* ── TAP I · GLOBAL JS ──────────────────────────────────────── */

// ── SHARED NAV HTML ──────────────────────────────────────────
// Call renderNav() after DOM ready to inject nav + footer
function renderNav(activePage) {
  const pages = [
    { href: 'fund.html',     label: 'The Fund' },
    { href: 'markets.html',  label: 'Markets' },
    { href: 'pipeline.html', label: 'Pipeline' },
    { href: 'partners.html', label: 'Partners' },
    { href: 'engage.html',   label: 'Engage' },
    { href: 'commons.html',  label: 'Digital Commons' },
  ];

  const navLinks = pages.map(p =>
    `<li><a href="${p.href}" class="${p.href === activePage ? 'active' : ''}">${p.label}</a></li>`
  ).join('');

  const mobLinks = pages.map(p =>
    `<a href="${p.href}" onclick="closeMob()">${p.label}</a>`
  ).join('');

  document.getElementById('nav-placeholder').outerHTML = `
    <a href="#main" class="skip-link">Skip to content</a>

    <div class="mob-overlay" id="mobOverlay">
      ${mobLinks}
      <a href="apply.html" class="mob-cta" onclick="closeMob()">Request Access</a>
    </div>

    <div id="scroll-bar" aria-hidden="true"></div>

    <div id="prog-nav" role="navigation" aria-label="Section navigation"></div>

    <button id="back-top" aria-label="Back to top" onclick="window.scrollTo({top:0,behavior:'smooth'})">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M7 11V3M3 7l4-4 4 4" stroke="rgba(255,255,255,.85)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>

    <div id="cursor-ring"></div>
    <div id="cursor-dot"></div>

    <nav id="nav">
      <a href="index.html" class="logo">
        <div class="logo-mark">T<span>A</span>P</div>
        <div class="logo-rule"></div>
        <div class="logo-full">
          <span class="lf-t">Transition</span>
          <span class="lf-a"> Africa</span>
          <span class="lf-p"> Partners</span>
        </div>
      </a>
      <div class="nav-r">
        <ul class="nav-links">${navLinks}</ul>
        <a href="apply.html" class="nav-btn">Request Access</a>
        <button class="mob-ham" id="mobHam" onclick="toggleMob()" aria-label="Toggle menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  `;
}

// ── SHARED FOOTER HTML ───────────────────────────────────────
function renderFooter() {
  document.getElementById('footer-placeholder').outerHTML = `
    <footer>
      <div class="ft-grid">
        <div class="ft-brand">
          <div class="ft-name">TAP I · Transition Africa Partners</div>
          <div class="ft-sub">GBC Licensed · FSC Mauritius · Africa &amp; Indian Ocean · Est. 2026</div>
          <p class="ft-p">A governance-anchored blended finance platform mobilising institutional capital into climate infrastructure across Africa and the Indian Ocean. FSC-regulated CIS. Administered by DTOS. Legal counsel: Eversheds Sutherland.</p>
        </div>
        <div class="ft-col">
          <h4>Platform</h4>
          <ul class="ft-links">
            <li><a href="fund.html">The Fund</a></li>
            <li><a href="markets.html">Markets</a></li>
            <li><a href="pipeline.html">Pipeline</a></li>
            <li><a href="partners.html">Partners</a></li>
            <li><a href="commons.html">Digital Commons</a></li>
          </ul>
        </div>
        <div class="ft-col">
          <h4>Engage</h4>
          <ul class="ft-links">
            <li><a href="mailto:admin@philanthropicfoundation.net?subject=Project%20Submission">Present a Project</a></li>
            <li><a href="mailto:admin@philanthropicfoundation.net?subject=Co-Investment%20Enquiry">Explore Co-Investment</a></li>
            <li><a href="mailto:admin@philanthropicfoundation.net?subject=Dialogue%20Partner%20Enquiry">Institutional Dialogue</a></li>
          </ul>
        </div>
        <div class="ft-col">
          <h4>Foundation</h4>
          <ul class="ft-links">
            <li><a href="https://www.philanthropicfoundation.net" target="_blank" rel="noopener">The Philanthropic Foundation</a></li>
            <li><a href="#">GBC Compliance</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="mailto:admin@philanthropicfoundation.net">Contact</a></li>
          </ul>
        </div>
      </div>
      <div class="ft-bottom">
        <div class="ft-copy">© 2026 Transition Africa Partners I · A programme of <a href="https://www.philanthropicfoundation.net" target="_blank" rel="noopener">The Philanthropic Foundation</a> · Reg. No. 679 · Mauritius</div>
        <div class="ft-legal">Administered by DTOS · Eversheds Sutherland · AfrAsia Bank</div>
      </div>
    </footer>
  `;
}

// ── CURSOR ───────────────────────────────────────────────────
function initCursor() {
  const ring = document.getElementById('cursor-ring');
  const dot  = document.getElementById('cursor-dot');
  if (!ring || !dot) return;
  if (!window.matchMedia('(hover:hover)').matches) {
    ring.style.display = 'none'; dot.style.display = 'none'; return;
  }
  let mx = 0, my = 0, rx = 0, ry = 0;
  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx + 'px'; dot.style.top = my + 'px';
    ring.style.opacity = '1';
  });
  (function anim() {
    rx += (mx - rx) * 0.12; ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
    requestAnimationFrame(anim);
  })();
  document.querySelectorAll('a,button,input,select,textarea,.rv,.geo-item,.gp-tab,.ptab,.fc,.pn-dot,.e-card').forEach(el => {
    el.addEventListener('mouseenter', () => { ring.classList.add('hover'); dot.classList.add('hover'); });
    el.addEventListener('mouseleave', () => { ring.classList.remove('hover'); dot.classList.remove('hover'); });
  });
  document.addEventListener('mouseleave', () => { ring.style.opacity = '0'; });
}

// ── SCROLL BAR ───────────────────────────────────────────────
function initScrollBar() {
  const bar = document.getElementById('scroll-bar');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const pct = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) * 100;
    bar.style.width = Math.min(pct, 100) + '%';
  }, { passive: true });
}

// ── NAV SCROLL ───────────────────────────────────────────────
function initNavScroll() {
  const navEl = document.getElementById('nav');
  if (!navEl) return;
  window.addEventListener('scroll', () => navEl.classList.toggle('scrolled', scrollY > 60), { passive: true });
}

// ── BACK TO TOP ──────────────────────────────────────────────
function initBackTop() {
  const bt = document.getElementById('back-top');
  if (!bt) return;
  window.addEventListener('scroll', () => {
    const ratio = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
    bt.classList.toggle('visible', ratio > 0.25);
  }, { passive: true });
}

// ── SECTION PROGRESS NAV ─────────────────────────────────────
function initProgNav(sectionIds, labels) {
  const pn = document.getElementById('prog-nav');
  if (!pn) return;
  pn.innerHTML = sectionIds.map((id, i) =>
    `<a class="pn-dot" href="#${id}" aria-label="${labels[i]}"><span class="pn-label">${labels[i]}</span></a>`
  ).join('');
  const dots = Array.from(pn.querySelectorAll('.pn-dot'));
  function update() {
    pn.classList.toggle('visible', window.scrollY > window.innerHeight * 0.12);
    let active = 0;
    sectionIds.forEach((id, i) => {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.5) active = i;
    });
    dots.forEach((d, i) => d.classList.toggle('active', i === active));
  }
  window.addEventListener('scroll', update, { passive: true });
  update();
}

// ── REVEAL ON SCROLL ─────────────────────────────────────────
function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); } });
  }, { threshold: 0.08 });
  document.querySelectorAll('.rv').forEach(el => obs.observe(el));
}

// ── GLOSSARY ─────────────────────────────────────────────────
const GLOSSARY = {
  "blended finance": "The strategic use of concessional (subsidised) capital to mobilise additional commercial finance toward sustainable development in emerging markets.",
  "GBC": "Global Business Company — a Mauritius corporate structure designed for cross-border investment. GBC entities benefit from Mauritius's DTAA treaty network and FSC regulatory oversight.",
  "DTAA": "Double Taxation Avoidance Agreement — a treaty between two countries that prevents the same income being taxed twice. Mauritius has 45 DTAAs, including all TAP I target markets.",
  "FSC": "Financial Services Commission — Mauritius's primary financial regulator. FSC-regulated funds meet the governance standards required by European institutional investors.",
  "IFRS 10 B11": "An accounting standard test that determines whether an investor controls an investee. Passing this test is required for European pension funds to consolidate an investment off their balance sheet.",
  "DFI": "Development Finance Institution — a government-backed entity that provides financing for private sector development in emerging markets. Examples include IFC, AfDB, Proparco, and DEG.",
  "concessional capital": "Finance provided on more favourable terms than the market — lower interest rates, longer tenors, or grant components. Used to de-risk investments that would otherwise not attract commercial capital.",
  "SPV": "Special Purpose Vehicle — a standalone legal entity created for a specific transaction. In the TAP I structure, each investment uses a Mauritius GBC SPV to hold the equity position.",
  "CIS": "Collective Investment Scheme — a regulated fund structure that pools investor capital. TAP I is structured as a Professional CIS under FSC Mauritius regulation.",
  "NDC": "Nationally Determined Contribution — each country's climate action plan submitted under the Paris Agreement, specifying emissions reduction targets and adaptation priorities.",
  "technical assistance": "Pre-investment support — feasibility studies, ESIAs, governance structuring — that brings early-stage projects up to institutional standard before equity is committed.",
  "VCS": "Verified Carbon Standard — Verra's carbon credit standard, one of the most widely used frameworks for certifying nature-based carbon offset projects.",
};

function initGlossary() {
  const tip     = document.getElementById('glossTip');
  const tipTerm = document.getElementById('glossTerm');
  const tipDef  = document.getElementById('glossDef');
  if (!tip) return;

  document.querySelectorAll('.gloss').forEach(el => {
    el.addEventListener('mouseenter', e => showTip(el, e.clientX, e.clientY));
    el.addEventListener('mousemove',  e => placeTip(e.clientX, e.clientY));
    el.addEventListener('mouseleave', () => hideTip());
    el.addEventListener('touchend', e => {
      e.preventDefault();
      const was = tip.classList.contains('visible') && tip._el === el;
      hideTip();
      if (!was) showTip(el, 0, 0);
    }, { passive: false });
  });
  document.addEventListener('touchend', e => { if (!e.target.closest('.gloss')) hideTip(); }, { passive: true });
  window.addEventListener('scroll', hideTip, { passive: true });

  function showTip(el, cx, cy) {
    const key = el.dataset.term || el.textContent.toLowerCase().trim();
    const def = GLOSSARY[key]; if (!def) return;
    tipTerm.textContent = key.toUpperCase();
    tipDef.textContent  = def;
    tip._el = el;
    tip.classList.add('visible');
    placeTip(cx, cy);
  }
  function hideTip() { tip.classList.remove('visible'); tip._el = null; }
  function placeTip(cx, cy) {
    if (window.innerWidth <= 960) return;
    const w = window.innerWidth, h = window.innerHeight;
    const tw = Math.min(280, w - 24), th = tip.offsetHeight || 120;
    let x = cx + 14; if (x + tw > w - 8) x = cx - tw - 14; x = Math.max(8, x);
    let y = cy - 10; if (y + th > h - 8) y = cy - th - 10; y = Math.max(8, y);
    tip.style.left = x + 'px'; tip.style.top = y + 'px';
  }
}

// ── MOBILE NAV ───────────────────────────────────────────────
function toggleMob() {
  const ov = document.getElementById('mobOverlay');
  const ham = document.getElementById('mobHam');
  ov.classList.toggle('open');
  ham.classList.toggle('open');
  ham.setAttribute('aria-expanded', ov.classList.contains('open'));
  document.body.style.overflow = ov.classList.contains('open') ? 'hidden' : '';
}
function closeMob() {
  document.getElementById('mobOverlay').classList.remove('open');
  document.getElementById('mobHam').classList.remove('open');
  document.body.style.overflow = '';
}

// ── SMOOTH SCROLL (anchor links on same page) ─────────────────
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const t = document.querySelector(a.getAttribute('href'));
      if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth' }); }
    });
  });
}

// ── BAND DUPLICATE ───────────────────────────────────────────
function initBand() {
  const bi = document.querySelector('.band-inner');
  if (bi) bi.innerHTML += bi.innerHTML;
}

// ── BOOT ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initCursor();
  initScrollBar();
  initNavScroll();
  initBackTop();
  initReveal();
  initGlossary();
  initSmoothScroll();
  initBand();
});
