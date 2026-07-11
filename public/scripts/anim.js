/* ============================================================
   Seekstone website — motion controller (plain JS, no build).
   Loaded AFTER the React app mounts.

   Hard rule: the animation clock can be frozen (throttled /
   backgrounded tabs, capture environments). Nothing here may
   depend on that clock to make content VISIBLE. So:
     • Reveal targets are hidden only if we PROVE the clock is
       live (motionLive); otherwise they show instantly.
     • Multiple instant-reveal failsafes (timer + scroll +
       ultimate backstop) guarantee content is never stuck.
     • Count-up only runs when motionLive (else shows the real
       number immediately).
   ============================================================ */
(function () {
  'use strict';

  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var finePointer = window.matchMedia && window.matchMedia('(pointer: fine)').matches;

  /* ---- prove the animation clock actually advances ---- */
  var motionLive = false;
  try {
    requestAnimationFrame(function (a) {
      requestAnimationFrame(function (b) { if (b > a) motionLive = true; });
    });
  } catch (e) { /* no rAF — treat as frozen */ }

  /* Wait for the React app to commit, then init. */
  function whenMounted(fn, tries) {
    tries = tries || 0;
    var site = document.querySelector('.ss-site');
    if (site && site.children.length) return fn();
    if (tries > 60) return fn();
    setTimeout(function () { whenMounted(fn, tries + 1); }, 50);
  }

  function onReady(fn) {
    if (document.readyState === 'complete' || document.readyState === 'interactive') fn();
    else window.addEventListener('DOMContentLoaded', fn);
  }

  onReady(function () { whenMounted(init); });

  /* ============================================================ */
  function init() {
    setupAurora();
    setupReveal();
    setupCountUp();
    setupParallax();
    setupSpotlight();
  }

  /* ---- 0. Ambient aurora (fixed light field behind content) -- */
  function setupAurora() {
    if (document.querySelector('.ss-aurora')) return;
    var aur = document.createElement('div');
    aur.className = 'ss-aurora';
    aur.setAttribute('aria-hidden', 'true');
    aur.innerHTML =
      '<div class="ss-aurora__bloom ss-aurora__a"></div>' +
      '<div class="ss-aurora__bloom ss-aurora__b"></div>' +
      '<div class="ss-aurora__bloom ss-aurora__c"></div>' +
      '<div class="ss-aurora__veil"></div>';
    document.body.insertBefore(aur, document.body.firstChild);

    if (reduce) return;
    // Gentle, bounded scroll parallax: the whole field drifts a little as you
    // scroll, so it "shifts" against the content. Bounded so edges never show.
    var cur = 0, tgt = 0, raf = null;
    function onScroll() {
      var doc = document.documentElement;
      var max = (doc.scrollHeight - doc.clientHeight) || 1;
      var prog = Math.min(Math.max((window.scrollY || doc.scrollTop) / max, 0), 1);
      tgt = prog * 64;            // px, total travel across the whole page
      if (!raf) raf = requestAnimationFrame(loop);
    }
    function loop() {
      cur += (tgt - cur) * 0.12;
      aur.style.transform = 'translate3d(0,' + cur.toFixed(2) + 'px,0)';
      if (Math.abs(tgt - cur) > 0.3) raf = requestAnimationFrame(loop); else raf = null;
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---- 1. Scroll reveal (robust) ---------------------------- */
  var REVEAL_SELECTORS = [
    '.head',
    '.bench__stats > *',
    '.bench__chart',
    '.tools__tabswrap',
    '.pillar',
    '.inst__card',
    '.inst__pkgs',
    '.faq__item',
    '.cta__inner'
  ];

  function setupReveal() {
    var targets = [];
    REVEAL_SELECTORS.forEach(function (sel) {
      document.querySelectorAll(sel).forEach(function (el) { targets.push(el); });
    });
    if (!targets.length) return;

    // stagger siblings within the same parent
    var seen = new Map();
    targets.forEach(function (el) {
      var p = el.parentNode;
      var i = seen.get(p) || 0;
      el.style.setProperty('--r-delay', (i * 80) + 'ms');
      seen.set(p, i + 1);
    });

    function showInstant(el) { el.classList.remove('r-hidden'); el.classList.add('r-instant'); }
    function showAnimated(el) { el.classList.remove('r-hidden'); el.classList.add('r-in'); }
    function revealAll(instant) {
      targets.forEach(function (el) {
        if (el.classList.contains('r-in') || el.classList.contains('r-instant')) return;
        instant ? showInstant(el) : showAnimated(el);
      });
    }

    if (reduce) { return; } // motion off → leave everything in its visible base state

    // hide all targets up front
    targets.forEach(function (el) { el.classList.add('r-hidden'); });

    var io = null;
    if ('IntersectionObserver' in window) {
      io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) {
            var el = en.target;
            motionLive ? showAnimated(el) : showInstant(el);
            io.unobserve(el);
          }
        });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
      targets.forEach(function (el) { io.observe(el); });
    } else {
      revealAll(!motionLive);
    }

    // Failsafe A: clock clearly frozen → reveal instantly, fast.
    setTimeout(function () { if (!motionLive) revealAll(true); }, 220);
    // Failsafe B: ultimate backstop — force EVERY target visible with no
    // transition, after the staggered entrance would have finished in a live
    // browser. In a live browser the animation is already done (no-op); in a
    // frozen/backgrounded tab this guarantees nothing is ever stuck hidden.
    setTimeout(function () {
      targets.forEach(function (el) { el.classList.add('r-instant'); });
    }, 1500);
    // Failsafe C: on first scroll, make sure in-view items are shown even if IO lagged.
    window.addEventListener('scroll', function onF() {
      revealVisible();
      window.removeEventListener('scroll', onF);
    }, { passive: true });

    function revealVisible() {
      var vh = window.innerHeight || document.documentElement.clientHeight;
      targets.forEach(function (el) {
        if (el.classList.contains('r-in') || el.classList.contains('r-instant')) return;
        var r = el.getBoundingClientRect();
        if (r.top < vh && r.bottom > 0) { motionLive ? showAnimated(el) : showInstant(el); if (io) io.unobserve(el); }
      });
    }
  }

  /* ---- 2. Count-up numerals --------------------------------- */
  function setupCountUp() {
    var nodes = [];
    document.querySelectorAll('.ss-metric__value, .bench__ms').forEach(function (el) {
      var tn = el.firstChild;
      if (tn && tn.nodeType === 3 && /\d/.test(tn.nodeValue)) nodes.push(tn);
    });
    if (!nodes.length) return;

    function run(tn) {
      if (!motionLive) return; // never replace the real number when the clock is frozen
      var raw = tn.nodeValue;
      var m = raw.match(/^(\s*[^\d-]*)(-?[\d,]*\.?\d+)(.*)$/);
      if (!m) return;
      var prefix = m[1], numStr = m[2].replace(/,/g, ''), suffix = m[3];
      var target = parseFloat(numStr);
      if (!isFinite(target)) return;
      var dec = (numStr.split('.')[1] || '').length;
      var dur = 1000, start = null;
      function fmt(v) { return prefix + (dec ? v.toFixed(dec) : Math.round(v).toLocaleString()) + suffix; }
      function tick(ts) {
        if (start === null) start = ts;
        var p = Math.min((ts - start) / dur, 1);
        var e = 1 - Math.pow(1 - p, 3);
        tn.nodeValue = fmt(target * e);
        if (p < 1) requestAnimationFrame(tick); else tn.nodeValue = raw;
      }
      tn.nodeValue = fmt(0);
      requestAnimationFrame(tick);
      // safety: restore the true value no matter what
      setTimeout(function () { tn.nodeValue = raw; }, dur + 600);
    }

    if (reduce || !('IntersectionObserver' in window)) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { run(en.target.__tn); io.unobserve(en.target); }
      });
    }, { threshold: 0.6 });
    nodes.forEach(function (tn) {
      var host = tn.parentNode;
      host.__tn = tn;
      io.observe(host);
    });
  }

  /* ---- 3. Hero cursor parallax ------------------------------ */
  function setupParallax() {
    if (reduce || !finePointer) return;
    var hero = document.querySelector('.hero');
    if (!hero) return;
    var gem = hero.querySelector('.hero__gem');
    var blobs = hero.querySelectorAll('.glow-blob');
    blobs.forEach(function (b) { b.dataset.baseTransform = b.style.transform || ''; });
    var tx = 0, ty = 0, cx = 0, cy = 0, raf = null;

    hero.addEventListener('pointermove', function (e) {
      var r = hero.getBoundingClientRect();
      tx = ((e.clientX - r.left) / r.width - 0.5) * 2;   // -1..1
      ty = ((e.clientY - r.top) / r.height - 0.5) * 2;
      if (!raf) raf = requestAnimationFrame(loop);
    });
    hero.addEventListener('pointerleave', function () { tx = 0; ty = 0; if (!raf) raf = requestAnimationFrame(loop); });

    function loop() {
      cx += (tx - cx) * 0.08; cy += (ty - cy) * 0.08;
      if (gem) gem.style.transform = 'translate(' + (cx * 14) + 'px,' + (cy * 12) + 'px)';
      blobs.forEach(function (b, i) {
        var k = (i + 1) * 10;
        b.style.transform = (b.dataset.baseTransform || '') + ' translate(' + (cx * k) + 'px,' + (cy * k) + 'px)';
      });
      if (Math.abs(tx - cx) > 0.002 || Math.abs(ty - cy) > 0.002) raf = requestAnimationFrame(loop);
      else raf = null;
    }
  }

  /* ---- 4. Card cursor spotlight ----------------------------- */
  function setupSpotlight() {
    if (reduce || !finePointer) return;
    var cards = document.querySelectorAll('.pillar, .tool, .bench__chart, .inst__card, .bm__trade, .bm__tier, .chl__card, .gs__card');
    cards.forEach(function (card) {
      card.classList.add('has-spot');
      card.addEventListener('pointermove', function (e) {
        var r = card.getBoundingClientRect();
        card.style.setProperty('--spot-x', (e.clientX - r.left) + 'px');
        card.style.setProperty('--spot-y', (e.clientY - r.top) + 'px');
      });
    });
  }
})();
