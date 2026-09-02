const DATA_BASE = '/dist';

async function fetchIndex() {
  const res = await fetch(`${DATA_BASE}/index.json`);
  if (!res.ok) return [];
  return res.json();
}

function getVisitorCount() {
  if (typeof window.goatcounter === 'undefined') return '—';
  const count = window.goatcounter?.get?.('total');
  return count != null ? String(count) : '—';
}

async function initMarquee() {
  const el = document.getElementById('marquee-content');
  if (!el) return;

  const index = await fetchIndex();
  const count = index.length;
  const last = index.length > 0
    ? index.reduce((a, b) => (a.addedAt > b.addedAt ? a : b))
    : null;
  const lastLabel = last
    ? `${last.name}${last.location ? ` (${last.location})` : ''}`
    : 'none yet';
  const visitors = getVisitorCount();

  const text = [
    `Contributions: ${count}`,
    `Latest: ${lastLabel}`,
    `Visitors: ${visitors}`,
  ].join('   •   ');

  el.innerHTML = `<span>${text}</span><span aria-hidden="true">${text}</span>`;
}

initMarquee();
