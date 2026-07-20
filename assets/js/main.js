/* =========================================================================
   作品集 v2 — 渲染與互動
   依賴：assets/js/data.js（PROFILE / HERO_STATS / CASES / SERVICES / PROCESS）
   ========================================================================= */

(function () {
  'use strict';

  const $ = (sel, root) => (root || document).querySelector(sel);
  const esc = (s) =>
    String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');

  /* ---------------------------------------------------------------
     Hero
     --------------------------------------------------------------- */
  function renderHero() {
    const tagsWrap = $('#heroTags');
    if (tagsWrap) {
      tagsWrap.innerHTML = PROFILE.roleTags
        .map((t) => `<span class="hero__tag">${esc(t)}</span>`)
        .join('');
    }

    const intro = $('#heroIntro');
    if (intro) {
      const lines = PROFILE.introLines || [PROFILE.intro || ''];
      intro.innerHTML = lines
        .map((t) => `<span class="hero__intro-line">${esc(t)}</span>`)
        .join('');
    }

    const statsWrap = $('#heroStats');
    if (!statsWrap) return;

    statsWrap.innerHTML = HERO_STATS.map(
      (s) => `
      <div class="stat reveal">
        <div class="stat__value"
             data-target="${s.value}"
             data-decimals="${s.decimals}"
             data-suffix="${esc(s.suffix)}">0${esc(s.suffix)}</div>
        <div class="stat__label">${esc(s.label)}</div>
        <div class="stat__note">${esc(s.note)}</div>
      </div>`
    ).join('');
  }

  /* ---------------------------------------------------------------
     案例卡
     --------------------------------------------------------------- */
  function caseTemplate(c) {
    const platforms = c.platforms
      .map((p) => `<span class="platform">${esc(p)}</span>`)
      .join('');

    const did = c.did.map((d) => `<li>${esc(d)}</li>`).join('');

    const metrics = c.metrics
      .map(
        (m) => `
        <div class="metric ${m.highlight ? 'metric--hl' : ''}">
          <div class="metric__value">${esc(m.value)}</div>
          <div class="metric__label">${esc(m.label)}</div>
          ${m.note ? `<div class="metric__note">${esc(m.note)}</div>` : ''}
        </div>`
      )
      .join('');

    const table = c.table
      ? `
      <div class="dtable">
        <div class="dtable__caption">${esc(c.table.caption)}</div>
        <div class="dtable__scroll">
        <table>
          <thead>
            <tr>${c.table.head.map((h) => `<th>${esc(h)}</th>`).join('')}</tr>
          </thead>
          <tbody>
            ${c.table.rows
              .map(
                (r) => `<tr>${r.map((cell) => `<td>${esc(cell)}</td>`).join('')}</tr>`
              )
              .join('')}
          </tbody>
        </table>
        </div>
      </div>`
      : '';

    const help = c.help
      .map(
        (h) => `
        <div class="help__item">
          <h4 class="help__title">${esc(h.title)}</h4>
          <p class="help__desc">${esc(h.desc)}</p>
        </div>`
      )
      .join('');

    const tags = c.tags
      .map((t) => `<span class="case__tag">${esc(t)}</span>`)
      .join('');

    return `
    <article class="case reveal" id="${esc(c.id)}" style="--accent:${esc(c.accent)}">
      <div class="case__head">
        <span class="case__industry">${esc(c.industry)}</span>
        <h3 class="case__title">${esc(c.title)}</h3>
        ${c.oneLiner ? `<p class="case__oneliner">${esc(c.oneLiner)}</p>` : ''}
        <div class="case__meta">
          <span>${esc(c.period)}</span>
          <div class="case__tags">${tags}</div>
        </div>
      </div>

      <div class="case__body">
        <div class="col">
          <div class="col__head">
            <span class="col__num">1</span>
            <h4 class="col__title">做了什麼</h4>
          </div>
          <div class="platforms">${platforms}</div>
          <ul class="did">${did}</ul>
        </div>

        <div class="col">
          <div class="col__head">
            <span class="col__num">2</span>
            <h4 class="col__title">帶來的成效</h4>
          </div>
          <div class="metrics">${metrics}</div>
          ${table}
        </div>

        <div class="col">
          <div class="col__head">
            <span class="col__num">3</span>
            <h4 class="col__title">能幫你做什麼</h4>
          </div>
          <div class="help">${help}</div>
        </div>
      </div>
    </article>`;
  }

  function renderCases() {
    const wrap = $('#casesWrap');
    if (wrap) wrap.innerHTML = CASES.map(caseTemplate).join('');
  }

  /* ---------------------------------------------------------------
     早期實績
     --------------------------------------------------------------- */

  // 所有證據截圖攤平成一維陣列，供 lightbox 前後切換
  const EVIDENCE = [];

  const ICON_ZOOM =
    '<svg class="evbtn__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
    'stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
    '<circle cx="11" cy="11" r="7"></circle><path d="M21 21l-4.3-4.3"></path>' +
    '<path d="M11 8v6M8 11h6"></path></svg>';

  function renderEarly() {
    const intro = $('#earlyIntro');
    if (intro && typeof EARLY_INTRO !== 'undefined') intro.textContent = EARLY_INTRO;

    const wrap = $('#earlyWrap');
    if (!wrap || typeof EARLY_CASES === 'undefined') return;

    wrap.innerHTML = EARLY_CASES.map((c) => {
      const platforms = c.platforms
        .map((p) => `<span class="ecase__platform">${esc(p)}</span>`)
        .join('');

      const metrics = c.metrics
        .map(
          (m) => `
          <div class="metric ${m.highlight ? 'metric--hl' : ''}">
            <div class="metric__value">${esc(m.value)}</div>
            <div class="metric__label">${esc(m.label)}</div>
            ${m.note ? `<div class="metric__note">${esc(m.note)}</div>` : ''}
          </div>`
        )
        .join('');

      const buttons = (c.evidence || [])
        .map((ev) => {
          const idx = EVIDENCE.push({ src: ev.src, caption: ev.caption }) - 1;
          return `<button type="button" class="evbtn" data-ev="${idx}">
                    ${ICON_ZOOM}<span>查看原始截圖</span>
                  </button>`;
        })
        .join('');

      return `
      <article class="ecase reveal">
        <div class="ecase__top">
          <h3 class="ecase__industry">${esc(c.industry)}</h3>
          <span class="ecase__period">${esc(c.period)}</span>
        </div>
        <div class="ecase__platforms">${platforms}</div>
        <p class="ecase__summary">${esc(c.summary)}</p>
        <div class="ecase__metrics">${metrics}</div>
        ${c.extra ? `<p class="ecase__extra">${esc(c.extra)}</p>` : ''}
        ${buttons ? `<div class="ecase__evidence">${buttons}</div>` : ''}
      </article>`;
    }).join('');
  }

  /* ---------------------------------------------------------------
     Lightbox
     --------------------------------------------------------------- */
  function initLightbox() {
    const lb = $('#lightbox');
    const img = $('#lbImg');
    const cap = $('#lbCaption');
    const count = $('#lbCount');
    const btnPrev = $('#lbPrev');
    const btnNext = $('#lbNext');
    const btnClose = $('#lbClose');
    if (!lb || !img) return;

    let current = 0;
    let lastFocus = null;

    function show(i) {
      if (!EVIDENCE.length) return;
      current = (i + EVIDENCE.length) % EVIDENCE.length;
      const item = EVIDENCE[current];
      img.src = item.src;
      img.alt = item.caption || '原始數據截圖';
      cap.textContent = item.caption || '';
      count.textContent = current + 1 + ' / ' + EVIDENCE.length;
      const multi = EVIDENCE.length > 1;
      btnPrev.hidden = !multi;
      btnNext.hidden = !multi;
    }

    function open(i) {
      lastFocus = document.activeElement;
      show(i);
      lb.hidden = false;
      document.body.classList.add('lb-open');
      btnClose.focus();
    }

    function close() {
      lb.hidden = true;
      img.src = '';
      document.body.classList.remove('lb-open');
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    }

    // 事件委派：所有 .evbtn 共用
    document.addEventListener('click', function (e) {
      const btn = e.target.closest ? e.target.closest('.evbtn') : null;
      if (btn) {
        e.preventDefault();
        open(parseInt(btn.dataset.ev, 10) || 0);
      }
    });

    btnClose.addEventListener('click', close);
    btnPrev.addEventListener('click', () => show(current - 1));
    btnNext.addEventListener('click', () => show(current + 1));

    // 點背景關閉（點圖片本身不關）
    lb.addEventListener('click', function (e) {
      if (e.target === lb || e.target.id === 'lbStage') close();
    });

    document.addEventListener('keydown', function (e) {
      if (lb.hidden) return;
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowLeft') show(current - 1);
      else if (e.key === 'ArrowRight') show(current + 1);
    });
  }

  /* ---------------------------------------------------------------
     服務項目 / 合作流程
     --------------------------------------------------------------- */
  function renderServices() {
    const wrap = $('#servicesWrap');
    if (!wrap) return;

    wrap.innerHTML = SERVICES.map(
      (s) => `
      <div class="service reveal">
        <h3 class="service__role">${esc(s.role)}</h3>
        <p class="service__desc">${esc(s.desc)}</p>
        <ul class="service__points">
          ${s.points.map((p) => `<li>${esc(p)}</li>`).join('')}
        </ul>
      </div>`
    ).join('');
  }

  function renderProcess() {
    const wrap = $('#processWrap');
    if (!wrap) return;

    wrap.innerHTML = PROCESS.map(
      (p) => `
      <div class="pstep reveal">
        <div class="pstep__num">${esc(p.step)}</div>
        <h3 class="pstep__title">${esc(p.title)}</h3>
        <p class="pstep__desc">${esc(p.desc)}</p>
      </div>`
    ).join('');
  }

  /* ---------------------------------------------------------------
     聯絡資訊 / 頁尾
     --------------------------------------------------------------- */
  function renderContact() {
    const emailChip = $('#emailChip');
    const emailText = $('#emailText');
    if (emailChip && emailText) {
      emailChip.href =
        'mailto:' +
        PROFILE.email +
        '?subject=' +
        encodeURIComponent('廣告合作諮詢');
      emailText.textContent = PROFILE.email;
    }

    const lineChip = $('#lineChip');
    const lineText = $('#lineText');
    if (lineChip && lineText) {
      lineChip.href = PROFILE.lineUrl;
      lineText.textContent = PROFILE.lineLabel;
    }

    const fName = $('#footerName');
    const fTitle = $('#footerTitle');
    const fCopy = $('#footerCopy');
    if (fName) fName.textContent = PROFILE.name;
    if (fTitle) fTitle.textContent = PROFILE.title;
    if (fCopy) {
      fCopy.textContent = '© 2026 晨揚企業有限公司. All rights reserved.';
    }
  }

  /* ---------------------------------------------------------------
     數字 count-up
     --------------------------------------------------------------- */
  // 依 data-decimals 加上千分位，供動畫與 fallback 共用
  function formatStat(el, n) {
    const decimals = parseInt(el.dataset.decimals, 10) || 0;
    return (
      n.toLocaleString('en-US', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
      }) + (el.dataset.suffix || '')
    );
  }

  function countUp(el) {
    const target = parseFloat(el.dataset.target);
    const decimals = parseInt(el.dataset.decimals, 10) || 0;
    const suffix = el.dataset.suffix || '';
    const duration = 1400;
    const start = performance.now();

    function fmt(n) {
      return n.toLocaleString('en-US', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
      });
    }

    function frame(now) {
      const p = Math.min((now - start) / duration, 1);
      // easeOutExpo
      const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
      el.textContent = fmt(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(frame);
      else el.textContent = fmt(target) + suffix;
    }

    requestAnimationFrame(frame);
  }

  /* ---------------------------------------------------------------
     Scroll reveal
     --------------------------------------------------------------- */
  function initReveal() {
    const items = document.querySelectorAll('.reveal');
    const reduce =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduce || !('IntersectionObserver' in window)) {
      items.forEach((el) => {
        el.classList.add('is-in');
        const v = el.querySelector('.stat__value');
        if (v) v.textContent = formatStat(v, parseFloat(v.dataset.target));
      });
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          el.classList.add('is-in');

          const value = el.querySelector('.stat__value');
          if (value && !value.dataset.done) {
            value.dataset.done = '1';
            countUp(value);
          }
          io.unobserve(el);
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    items.forEach((el, i) => {
      el.style.transitionDelay = Math.min(i % 4, 3) * 70 + 'ms';
      io.observe(el);
    });
  }

  /* ---------------------------------------------------------------
     導覽列滾動狀態
     --------------------------------------------------------------- */
  function initNav() {
    const nav = $('#nav');
    if (!nav) return;
    const onScroll = () => {
      nav.classList.toggle('is-scrolled', window.scrollY > 10);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---------------------------------------------------------------
     表單送出（Formspree AJAX，失敗時回退為一般送出）
     --------------------------------------------------------------- */
  function initForm() {
    const form = $('#contactForm');
    const status = $('#formStatus');
    const btn = $('#submitBtn');
    if (!form) return;

    form.addEventListener('submit', function (e) {
      // 尚未設定 Formspree ID：改用 mailto 回退，避免使用者送出後石沉大海
      if (form.action.indexOf('YOUR_FORM_ID') !== -1) {
        e.preventDefault();
        const fd = new FormData(form);
        const body = [
          '稱呼：' + (fd.get('name') || ''),
          '品牌／公司：' + (fd.get('company') || ''),
          'Email：' + (fd.get('email') || ''),
          '電話／LINE：' + (fd.get('phone') || ''),
          '月廣告預算：' + (fd.get('budget') || ''),
          '主要需求：' + (fd.get('need') || ''),
          '',
          '想解決的問題：',
          fd.get('message') || ''
        ].join('\n');

        window.location.href =
          'mailto:' +
          PROFILE.email +
          '?subject=' +
          encodeURIComponent('廣告合作諮詢') +
          '&body=' +
          encodeURIComponent(body);

        if (status) {
          status.textContent = '已開啟你的郵件軟體，請確認後寄出。';
          status.className = 'form__status is-ok';
        }
        return;
      }

      e.preventDefault();
      if (btn) {
        btn.disabled = true;
        btn.textContent = '送出中…';
      }
      if (status) {
        status.textContent = '';
        status.className = 'form__status';
      }

      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      })
        .then((res) => {
          if (!res.ok) throw new Error('送出失敗');
          form.reset();
          if (status) {
            status.textContent = '已收到，我會在 1 個工作天內回覆。';
            status.className = 'form__status is-ok';
          }
        })
        .catch(() => {
          if (status) {
            status.textContent =
              '送出失敗，請直接來信 ' + PROFILE.email;
            status.className = 'form__status is-err';
          }
        })
        .finally(() => {
          if (btn) {
            btn.disabled = false;
            btn.textContent = '送出諮詢';
          }
        });
    });
  }

  /* ---------------------------------------------------------------
     Init
     --------------------------------------------------------------- */
  function init() {
    renderHero();
    renderCases();
    renderEarly();
    renderServices();
    renderProcess();
    renderContact();
    initNav();
    initForm();
    initLightbox();
    initReveal();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
