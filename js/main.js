// Wireframe — interactions minimales

// Toggle des annotations wireframe (numéros de section, notes placeholder)
const toggle = document.getElementById('wfToggle');
if (toggle) {
  toggle.addEventListener('click', () => {
    const off = document.body.classList.toggle('no-annotations');
    toggle.textContent = off ? 'Annotations : OFF' : 'Annotations : ON';
    toggle.setAttribute('aria-pressed', String(!off));
  });
}

// Menu mobile (placeholder — le méga-menu sera défini plus tard)
const burger = document.querySelector('.burger');
if (burger) {
  burger.addEventListener('click', () => {
    alert('Header / navigation : à concevoir dans une prochaine itération.');
  });
}
