// templates/landing-page/ds-base.js
// ── ONE LINE TO EDIT ──────────────────────────────────────────────
// Point `base` at wherever this design system's compiled output lives.
//   • In THIS design-system project: the repo root → '../..'
//   • In a CONSUMING project: the bound _ds/<folder> tree relative to
//     this page, e.g. '_ds/seekstone' (page at root) or
//     '../_ds/seekstone' (page one level down).
// ──────────────────────────────────────────────────────────────────
//
// We use document.write (this file is a parser-blocking <script> in
// <head>) so styles.css and _ds_bundle.js are injected *synchronously,
// in order* — the bundle is guaranteed loaded before the page's
// <script type="text/babel"> section files run and read the namespace.
(() => {
  const base = '../..';
  document.write(
    '<link rel="stylesheet" href="' + base + '/styles.css">'
  );
  document.write(
    '<script src="' + base + '/_ds_bundle.js" ' +
    'onerror="console.error(\'ds-base.js: failed to load ' + base +
    '/_ds_bundle.js — point the base line at the bound _ds/&lt;folder&gt; tree.\')">' +
    '<\/script>'
  );
})();
