export function sitePath(relativePath) {
  return new URL(relativePath, document.baseURI).pathname;
}

export function siteHref(relativePath) {
  const url = new URL(relativePath, document.baseURI);
  return url.pathname + url.search + url.hash;
}

export const DATA_BASE = sitePath('dist');

export async function fetchIndex() {
  const res = await fetch(`${DATA_BASE}/index.json`);
  if (!res.ok) throw new Error('Failed to load index.json');
  return res.json();
}

export function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
