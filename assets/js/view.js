const DATA_BASE = sitePath('dist');

function getSlug() {
  const params = new URLSearchParams(window.location.search);
  return params.get('c');
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

async function initView() {
  const container = document.getElementById('view-content');
  const slug = getSlug();

  if (!slug) {
    container.innerHTML = '<p class="view-error">No contribution specified.</p>';
    return;
  }

  if (!/^[a-z0-9][a-z0-9-]{0,39}$/.test(slug)) {
    container.innerHTML = '<p class="view-error">Invalid contribution name.</p>';
    return;
  }

  try {
    const res = await fetch(`${DATA_BASE}/index.json`);
    if (!res.ok) throw new Error('Failed to load index');
    const index = await res.json();
    const entry = index.find((e) => e.slug === slug);

    if (!entry) {
      container.innerHTML = '<p class="view-error">Contribution not found.</p>';
      return;
    }

    document.title = `${entry.name} — Build My Site`;

    const locationHtml = entry.location
      ? `<p>${escapeHtml(entry.location)}</p>`
      : '';

    container.innerHTML = `
      <div class="view-meta">
        <h2>${escapeHtml(entry.name)}</h2>
        ${locationHtml}
      </div>
      <div class="view-frame-wrap">
        <iframe
          sandbox=""
          src="${DATA_BASE}/contributions/${encodeURIComponent(slug)}/page.html"
          title="Contribution by ${escapeHtml(entry.name)}"
        ></iframe>
      </div>
    `;
  } catch {
    container.innerHTML = '<p class="view-error">Could not load this contribution.</p>';
  }
}

initView();
