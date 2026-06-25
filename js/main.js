// Wireframe — interactions minimales

// Toggle des annotations wireframe
const toggle = document.getElementById('wfToggle');
if (toggle) {
  toggle.addEventListener('click', () => {
    const off = document.body.classList.toggle('no-annotations');
    toggle.textContent = off ? 'Annotations : OFF' : 'Annotations : ON';
    toggle.setAttribute('aria-pressed', String(!off));
  });
}

// Fermeture de la barre pays
const utilbar = document.getElementById('utilbar');
if (utilbar) {
  const close = utilbar.querySelector('[data-close]');
  if (close) close.addEventListener('click', () => utilbar.classList.add('is-hidden'));
}

// Défilement du portfolio
const scroller = document.getElementById('portfolioScroller');
document.querySelectorAll('[data-scroll]').forEach((btn) => {
  btn.addEventListener('click', () => {
    if (!scroller) return;
    const dir = Number(btn.getAttribute('data-scroll'));
    scroller.scrollBy({ left: dir * 320, behavior: 'smooth' });
  });
});

// Menu mobile (placeholder — le méga-menu sera défini plus tard)
const burger = document.querySelector('.burger');
if (burger) {
  burger.addEventListener('click', () => {
    alert('Header / navigation : à concevoir dans une prochaine itération.');
  });
}
