import { fetchIndex, siteHref } from './site.js';

function ensureRandomButton() {
  if (document.getElementById('random-page-btn')) return;

  const btn = document.createElement('button');
  btn.id = 'random-page-btn';
  btn.type = 'button';
  btn.className = 'random-button';
  btn.textContent = '🎲 Random Page';
  btn.addEventListener('click', async () => {
    try {
      const index = await fetchIndex();
      if (index.length === 0) {
        alert('No contributions yet!');
        return;
      }
      const entry = index[Math.floor(Math.random() * index.length)];
      window.location.href = siteHref(`view.html?c=${encodeURIComponent(entry.slug)}`);
    } catch {
      alert('Could not load contributions.');
    }
  });
  document.body.appendChild(btn);
}

ensureRandomButton();
