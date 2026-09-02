// Resolve paths correctly on GitHub Pages project sites (e.g. /buildmysite/)
window.sitePath = function sitePath(relativePath) {
  return new URL(relativePath, document.baseURI).pathname;
};

window.siteHref = function siteHref(relativePath) {
  const url = new URL(relativePath, document.baseURI);
  return url.pathname + url.search + url.hash;
};

window.DATA_BASE = window.sitePath('dist');
