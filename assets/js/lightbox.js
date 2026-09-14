document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  const img = document.createElement('img');
  overlay.appendChild(img);
  document.body.appendChild(overlay);

  function close() {
    overlay.classList.remove('is-open');
  }

  document.querySelectorAll('main img.filled').forEach((el) => {
    el.addEventListener('click', () => {
      img.src = el.currentSrc || el.src;
      img.alt = el.alt;
      overlay.classList.add('is-open');
    });
  });

  overlay.addEventListener('click', close);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });
});
