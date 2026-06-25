// Homepage — interactions minimales

// Logo : on tente de charger le vrai fichier ; repli sur le logo texte sinon.
// Header -> assets/Logo-Schreder-Black-Left.svg · Footer -> ...White-Left.svg
document.querySelectorAll('.logo').forEach((logo) => {
  const invert = logo.classList.contains('logo--invert'); // footer sombre -> version blanche
  const img = document.createElement('img');
  img.className = 'logo__img';
  img.alt = 'Schréder — Experts in lightability';
  img.addEventListener('load', () => logo.classList.add('has-logo-img'));
  img.src = invert
    ? 'assets/Logo-Schreder-White-Left.svg'
    : 'assets/Logo-Schreder-Black-Left.svg';
  logo.prepend(img);
});

// Header : transparent sur le hero, solide au défilement
const siteHeader = document.querySelector('.site-header');
if (siteHeader) {
  const onScroll = () => siteHeader.classList.toggle('scrolled', window.scrollY > 60);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

// Chiffres clés : apparition au défilement + comptage progressif (classe)
(function () {
  var els = document.querySelectorAll('.kpi__num, .case__metric, .sus-pillar__metric, .hero__card-num');
  if (!els.length || !('IntersectionObserver' in window)) return;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function format(v, el) {
    var s = el._dec > 0 ? v.toFixed(el._dec) : String(Math.round(v));
    var parts = s.split('.');
    if (el._space) parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    return parts.length > 1 ? parts[0] + el._sep + parts[1] : parts[0];
  }

  els.forEach(function (el) {
    el.classList.add('statnum', 'prep');
    el._raw = el.textContent.trim();
    var m = el._raw.match(/[0-9][0-9.,\s]*[0-9]|[0-9]/);
    if (m) {
      var n = m[0];
      el._prefix = el._raw.slice(0, m.index);
      el._suffix = el._raw.slice(m.index + n.length);
      var d = n.match(/[.,](\d+)\s*$/);
      el._dec = d ? d[1].length : 0;
      el._space = /\s/.test(n);
      el._sep = n.indexOf(',') > -1 ? ',' : '.';
      el._target = parseFloat(n.replace(/\s/g, '').replace(',', '.'));
      if (!reduce) el.textContent = el._prefix + format(0, el) + el._suffix;
    }
  });

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      var el = e.target; io.unobserve(el);
      el.classList.add('in');
      if (reduce || el._target === undefined) { el.textContent = el._raw; return; }
      var dur = 1100, start = null;
      function step(ts) {
        if (start === null) start = ts;
        var p = Math.min((ts - start) / dur, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        el.textContent = el._prefix + format(el._target * eased, el) + el._suffix;
        if (p < 1) requestAnimationFrame(step); else el.textContent = el._raw;
      }
      requestAnimationFrame(step);
    });
  }, { threshold: 0.4 });
  els.forEach(function (el) { io.observe(el); });
})();

// Menu mobile (placeholder — le méga-menu sera défini plus tard)
const burger = document.querySelector('.burger');
if (burger) {
  burger.addEventListener('click', () => {
    alert('Header / navigation : à concevoir dans une prochaine itération.');
  });
}
