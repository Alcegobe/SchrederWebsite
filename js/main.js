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

// Menu mobile (placeholder — le méga-menu sera défini plus tard)
const burger = document.querySelector('.burger');
if (burger) {
  burger.addEventListener('click', () => {
    alert('Header / navigation : à concevoir dans une prochaine itération.');
  });
}
