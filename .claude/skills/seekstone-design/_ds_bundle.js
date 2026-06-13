/* @ds-bundle: {"format":3,"namespace":"SeekstoneDesignSystem_a9cecb","components":[{"name":"GemMark","sourcePath":"components/brand/GemMark.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"CodeBlock","sourcePath":"components/core/CodeBlock.jsx"},{"name":"Metric","sourcePath":"components/core/Metric.jsx"},{"name":"Tabs","sourcePath":"components/core/Tabs.jsx"},{"name":"Icon","sourcePath":"ui_kits/website/icons.jsx"}],"sourceHashes":{"components/brand/GemMark.jsx":"b750a3c3b031","components/core/Badge.jsx":"92a7a952e10c","components/core/Button.jsx":"d7f6c17d8969","components/core/Card.jsx":"c94b4a5f4985","components/core/CodeBlock.jsx":"a78f18160ff9","components/core/Metric.jsx":"41bb5c160c8f","components/core/Tabs.jsx":"13330b806d99","ui_kits/website/Benchmark.jsx":"96c896ebe1db","ui_kits/website/Faq.jsx":"d71f6bfd8b3c","ui_kits/website/Footer.jsx":"dcf965622fe3","ui_kits/website/Hero.jsx":"3ef06d5b8fba","ui_kits/website/Install.jsx":"278b1b553fe0","ui_kits/website/Nav.jsx":"570c547042b8","ui_kits/website/Pillars.jsx":"044a2dfebe3f","ui_kits/website/Tools.jsx":"7d06fa611b07","ui_kits/website/anim.js":"baf7d71d8359","ui_kits/website/icons.jsx":"8b3ca6ae295b"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SeekstoneDesignSystem_a9cecb = window.SeekstoneDesignSystem_a9cecb || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/GemMark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * GemMark — the Seekstone faceted gemstone, the core brand mark.
 * Renders the actual logo geometry (5 violet facets + optional amber
 * spark) as inline SVG so it can be tinted, sized, glowed and animated.
 */

const CSS = `
.ss-gem { display:inline-block; line-height:0; position:relative; }
.ss-gem--glow::after{
  content:""; position:absolute; inset:-30%; z-index:-1; border-radius:50%;
  background: radial-gradient(circle at 50% 45%, rgba(124,92,255,0.55), transparent 68%);
  filter: blur(6px);
}
.ss-gem svg{ display:block; width:100%; height:100%; overflow:visible; }
.ss-gem--spin svg{ animation: ssGemFloat 6s infinite; animation-timing-function: var(--ease-in-out, ease); transform-origin:50% 50%; }
@keyframes ssGemFloat{ 0%,100%{ transform: translateY(0) } 50%{ transform: translateY(-4%) } }
.ss-gem__spark{ transform-origin:80px 8px; }
.ss-gem--spin .ss-gem__spark{ animation: ssSpark 3.2s infinite; animation-timing-function: var(--ease-in-out, ease); }
@keyframes ssSpark{ 0%,72%,100%{ opacity:.85; transform:scale(1) } 84%{ opacity:1; transform:scale(1.5) } }
@media (prefers-reduced-motion: reduce){
  .ss-gem--spin svg, .ss-gem--spin .ss-gem__spark{ animation:none; }
}
`;
if (typeof document !== 'undefined' && !document.getElementById('ss-gem-css')) {
  const s = document.createElement('style');
  s.id = 'ss-gem-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function GemMark({
  size = 48,
  variant = 'color',
  glow = false,
  spark = false,
  animated = false,
  className = '',
  style = {},
  ...rest
}) {
  const mono = variant === 'mono';
  const cls = ['ss-gem', glow ? 'ss-gem--glow' : '', animated ? 'ss-gem--spin' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls,
    style: {
      width: size,
      height: size,
      color: mono ? 'currentColor' : undefined,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 96 96",
    role: "img",
    "aria-label": "Seekstone"
  }, mono ? /*#__PURE__*/React.createElement("g", {
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("polygon", {
    points: "48,10 16,40 48,52",
    fillOpacity: "0.85"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "48,10 80,40 48,52",
    fillOpacity: "1"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "16,40 48,52 48,86",
    fillOpacity: "0.68"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "80,40 48,52 48,86",
    fillOpacity: "0.5"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "48,10 33,25 48,36 63,25",
    fillOpacity: "0.95"
  })) : /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("polygon", {
    points: "48,10 16,40 48,52",
    fill: "var(--violet-400, #9a7dff)"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "48,10 80,40 48,52",
    fill: "var(--violet-500, #7c5cff)"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "16,40 48,52 48,86",
    fill: "var(--violet-600, #6344e0)"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "80,40 48,52 48,86",
    fill: "var(--violet-700, #4c2fb8)"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "48,10 33,25 48,36 63,25",
    fill: "var(--violet-300, #b8a6ff)"
  })), spark && /*#__PURE__*/React.createElement("path", {
    className: "ss-gem__spark",
    d: "M80,4 l2.2,5.8 5.8,2.2 -5.8,2.2 -2.2,5.8 -2.2,-5.8 -5.8,-2.2 5.8,-2.2 z",
    fill: "var(--amber-500, #f59e0b)"
  })));
}
Object.assign(__ds_scope, { GemMark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/GemMark.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — compact status / metadata pill.
 * Used for: MIT license, version tags, "16 tools", "fastest", npm names.
 */

const CSS = `
.ss-badge{
  display:inline-flex; align-items:center; gap:0.4em;
  height:1.55em; padding:0 0.6em;
  font-family:var(--font-sans); font-size:var(--text-xs,0.75rem);
  font-weight:var(--weight-semibold,600); letter-spacing:0.005em; line-height:1;
  border-radius:var(--radius-pill,999px); border:1px solid transparent; white-space:nowrap;
}
.ss-badge--mono{ font-family:var(--font-mono); font-weight:var(--weight-medium,500); letter-spacing:var(--tracking-mono,-0.01em); }
.ss-badge__dot{ width:0.45em; height:0.45em; border-radius:50%; background:currentColor; flex:none; }
.ss-badge__icon{ display:inline-flex; width:1em; height:1em; }
.ss-badge__icon svg{ width:100%; height:100%; display:block; }

.ss-badge--violet{ background:var(--accent-soft,rgba(124,92,255,0.14)); color:var(--violet-200,#d8cfff); border-color:rgba(124,92,255,0.28); }
.ss-badge--spark{ background:var(--spark-soft,rgba(245,158,11,0.14)); color:var(--amber-300,#fcd34d); border-color:rgba(245,158,11,0.28); }
.ss-badge--success{ background:rgba(16,185,129,0.13); color:var(--green-400,#34d399); border-color:rgba(16,185,129,0.28); }
.ss-badge--danger{ background:rgba(239,68,68,0.13); color:var(--red-400,#f87171); border-color:rgba(239,68,68,0.28); }
.ss-badge--neutral{ background:rgba(180,166,255,0.06); color:var(--text-secondary,#a9a2c0); border-color:var(--border-default,rgba(180,166,255,0.12)); }
.ss-badge--outline{ background:transparent; color:var(--text-secondary,#a9a2c0); border-color:var(--border-strong,rgba(180,166,255,0.20)); }
`;
if (typeof document !== 'undefined' && !document.getElementById('ss-badge-css')) {
  const s = document.createElement('style');
  s.id = 'ss-badge-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Badge({
  variant = 'neutral',
  mono = false,
  dot = false,
  icon = null,
  className = '',
  children,
  ...rest
}) {
  const cls = ['ss-badge', `ss-badge--${variant}`, mono ? 'ss-badge--mono' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    className: "ss-badge__dot"
  }), icon && /*#__PURE__*/React.createElement("span", {
    className: "ss-badge__icon"
  }, icon), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — primary action control.
 * Variants: primary (violet, the main CTA), secondary (outlined glass),
 * ghost (text only), spark (amber, for delight moments / "try it").
 */

const CSS = `
.ss-btn{
  --_h: var(--control-md, 40px);
  display:inline-flex; align-items:center; justify-content:center; gap:0.5em;
  height:var(--_h); padding:0 1.1em;
  font-family:var(--font-sans); font-size:var(--text-sm,0.8125rem);
  font-weight:var(--weight-semibold,600); letter-spacing:-0.005em;
  line-height:1; white-space:nowrap; text-decoration:none;
  border-radius:var(--radius-md,10px); border:1px solid transparent;
  cursor:pointer; user-select:none; position:relative;
  transition: background var(--dur-fast,120ms) var(--ease-out),
              border-color var(--dur-fast,120ms) var(--ease-out),
              color var(--dur-fast,120ms) var(--ease-out),
              transform var(--dur-fast,120ms) var(--ease-out),
              box-shadow var(--dur-base,200ms) var(--ease-out);
}
.ss-btn:active{ transform: translateY(0.5px) scale(0.985); }
.ss-btn:disabled,.ss-btn[aria-disabled="true"]{ opacity:0.45; pointer-events:none; }
.ss-btn--sm{ --_h: var(--control-sm,32px); padding:0 0.85em; font-size:var(--text-xs,0.75rem); border-radius:var(--radius-sm,6px); }
.ss-btn--lg{ --_h: var(--control-lg,48px); padding:0 1.5em; font-size:var(--text-base,0.9375rem); }
.ss-btn--block{ display:flex; width:100%; }
.ss-btn__icon{ display:inline-flex; width:1.15em; height:1.15em; }
.ss-btn__icon svg{ width:100%; height:100%; display:block; }

/* primary */
.ss-btn--primary{
  background:var(--violet-500,#7c5cff); color:#fff;
  box-shadow: 0 1px 0 0 rgba(255,255,255,0.18) inset, 0 6px 20px -8px rgba(124,92,255,0.7);
}
.ss-btn--primary:hover{ background:var(--violet-400,#9a7dff); box-shadow:0 1px 0 0 rgba(255,255,255,0.22) inset, 0 8px 28px -8px rgba(124,92,255,0.85); }
.ss-btn--primary:active{ background:var(--violet-600,#6344e0); }

/* secondary — glass outline */
.ss-btn--secondary{
  background:rgba(180,166,255,0.04); color:var(--text-primary,#f1eefb);
  border-color:var(--border-strong,rgba(180,166,255,0.20));
}
.ss-btn--secondary:hover{ background:rgba(180,166,255,0.09); border-color:var(--border-violet,rgba(124,92,255,0.45)); }

/* ghost */
.ss-btn--ghost{ background:transparent; color:var(--text-secondary,#a9a2c0); }
.ss-btn--ghost:hover{ background:var(--surface-hover,#2a2540); color:var(--text-primary,#f1eefb); }

/* spark — amber delight */
.ss-btn--spark{
  background:var(--amber-500,#f59e0b); color:#1a1206;
  box-shadow:0 1px 0 0 rgba(255,255,255,0.3) inset, 0 6px 20px -8px rgba(245,158,11,0.7);
}
.ss-btn--spark:hover{ background:var(--amber-400,#fbbf24); }
.ss-btn--spark:active{ background:var(--amber-600,#d97706); }
`;
if (typeof document !== 'undefined' && !document.getElementById('ss-btn-css')) {
  const s = document.createElement('style');
  s.id = 'ss-btn-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Button({
  variant = 'primary',
  size = 'md',
  iconLeft = null,
  iconRight = null,
  block = false,
  as,
  className = '',
  children,
  ...rest
}) {
  const Tag = as || (rest.href ? 'a' : 'button');
  const cls = ['ss-btn', `ss-btn--${variant}`, size !== 'md' ? `ss-btn--${size}` : '', block ? 'ss-btn--block' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls
  }, rest), iconLeft && /*#__PURE__*/React.createElement("span", {
    className: "ss-btn__icon"
  }, iconLeft), children, iconRight && /*#__PURE__*/React.createElement("span", {
    className: "ss-btn__icon"
  }, iconRight));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — surface container for grouped content (tool cards, feature
 * cards, benchmark panels). Variants control elevation & the brand glow.
 */

const CSS = `
.ss-card{
  position:relative; display:flex; flex-direction:column;
  background:var(--surface,#1a1726);
  border:1px solid var(--border-default,rgba(180,166,255,0.12));
  border-radius:var(--radius-lg,14px);
  padding:var(--space-5,1.5rem);
  box-shadow:var(--ring-inset, inset 0 1px 0 0 rgba(255,255,255,0.05));
  transition: transform var(--dur-base,200ms) var(--ease-out),
              border-color var(--dur-base,200ms) var(--ease-out),
              box-shadow var(--dur-base,200ms) var(--ease-out),
              background var(--dur-base,200ms) var(--ease-out);
}
.ss-card--raised{ background:var(--surface-raised,#211d2f); box-shadow:var(--shadow-lg,0 12px 40px -8px rgba(0,0,0,0.6)), var(--ring-inset); }
.ss-card--sunken{ background:var(--bg-sunken,#0c0a12); box-shadow:none; }

/* a hairline violet top-edge gradient for the "glow" treatment */
.ss-card--glow{
  border-color:var(--border-violet,rgba(124,92,255,0.45));
  box-shadow:var(--ring-inset), 0 0 0 1px rgba(124,92,255,0.10), 0 18px 50px -18px rgba(124,92,255,0.45);
}
.ss-card--glow::before{
  content:""; position:absolute; inset:0; border-radius:inherit; padding:1px; pointer-events:none;
  background:linear-gradient(140deg, rgba(184,166,255,0.5), transparent 40%);
  -webkit-mask:linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask-composite:xor; mask-composite:exclude;
}

.ss-card--interactive{ cursor:pointer; }
.ss-card--interactive:hover{
  transform:translateY(-3px);
  border-color:var(--border-violet,rgba(124,92,255,0.45));
  box-shadow:var(--ring-inset), 0 20px 48px -20px rgba(0,0,0,0.7), 0 0 0 1px rgba(124,92,255,0.18);
}
.ss-card--pad-sm{ padding:var(--space-4,1rem); }
.ss-card--pad-lg{ padding:var(--space-6,2rem); }
.ss-card--pad-none{ padding:0; }
`;
if (typeof document !== 'undefined' && !document.getElementById('ss-card-css')) {
  const s = document.createElement('style');
  s.id = 'ss-card-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Card({
  variant = 'default',
  interactive = false,
  padding = 'md',
  as: Tag = 'div',
  className = '',
  children,
  ...rest
}) {
  const cls = ['ss-card', variant !== 'default' ? `ss-card--${variant}` : '', interactive ? 'ss-card--interactive' : '', padding !== 'md' ? `ss-card--pad-${padding}` : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/CodeBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * CodeBlock — terminal-style code / command surface with a copy button.
 * The install command is the conversion moment, so this is a first-class
 * component: window chrome optional, $ prompt optional, one-click copy.
 */

const CSS = `
.ss-code{
  position:relative; display:flex; flex-direction:column;
  background:var(--bg-sunken,#0c0a12);
  border:1px solid var(--border-default,rgba(180,166,255,0.12));
  border-radius:var(--radius-md,10px); overflow:hidden;
  font-family:var(--font-mono);
}
.ss-code__bar{
  display:flex; align-items:center; gap:0.55rem;
  padding:0.55rem 0.85rem; border-bottom:1px solid var(--border-subtle,rgba(180,166,255,0.07));
  background:rgba(180,166,255,0.025);
}
.ss-code__dots{ display:flex; gap:0.4rem; }
.ss-code__dot{ width:11px; height:11px; border-radius:50%; }
.ss-code__title{ font-size:var(--text-xs,0.75rem); color:var(--text-muted,#8b84a3); letter-spacing:-0.01em; }
.ss-code__body{
  display:flex; align-items:flex-start; gap:0.65rem;
  padding:0.95rem 1rem; overflow-x:auto;
  font-size:var(--text-sm,0.8125rem); line-height:1.7; color:var(--neutral-100,#e1ddee);
}
.ss-code__prompt{ color:var(--violet-400,#9a7dff); user-select:none; flex:none; font-weight:600; }
.ss-code__text{ white-space:pre; }
.ss-code__text .tok-flag{ color:var(--amber-400,#fbbf24); }
.ss-code__text .tok-cmd{ color:var(--violet-200,#d8cfff); }
.ss-code__copy{
  position:absolute; top:0.5rem; right:0.5rem;
  display:inline-flex; align-items:center; gap:0.35rem;
  height:28px; padding:0 0.6rem; border-radius:var(--radius-sm,6px);
  background:rgba(180,166,255,0.06); border:1px solid var(--border-default,rgba(180,166,255,0.12));
  color:var(--text-secondary,#a9a2c0); font-family:var(--font-sans);
  font-size:var(--text-xs,0.75rem); font-weight:600; cursor:pointer;
  transition:all var(--dur-fast,120ms) var(--ease-out);
}
.ss-code--bar .ss-code__copy{ top:0.45rem; }
.ss-code__copy:hover{ background:rgba(180,166,255,0.12); color:var(--text-primary,#f1eefb); border-color:var(--border-violet,rgba(124,92,255,0.45)); }
.ss-code__copy.is-copied{ color:var(--green-400,#34d399); border-color:rgba(16,185,129,0.4); }
.ss-code__copy svg{ width:13px; height:13px; }
`;
if (typeof document !== 'undefined' && !document.getElementById('ss-code-css')) {
  const s = document.createElement('style');
  s.id = 'ss-code-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
const CopyIcon = () => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("rect", {
  x: "9",
  y: "9",
  width: "13",
  height: "13",
  rx: "2"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
}));
const CheckIcon = () => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.5",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M20 6 9 17l-5-5"
}));
function CodeBlock({
  code = '',
  prompt = false,
  title = null,
  chrome = false,
  copy = true,
  className = '',
  ...rest
}) {
  const [copied, setCopied] = React.useState(false);
  const onCopy = () => {
    try {
      navigator.clipboard?.writeText(code);
    } catch (e) {/* noop */}
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };
  const cls = ['ss-code', chrome ? 'ss-code--bar' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), chrome && /*#__PURE__*/React.createElement("div", {
    className: "ss-code__bar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ss-code__dots"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ss-code__dot",
    style: {
      background: '#3d3656'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "ss-code__dot",
    style: {
      background: '#3d3656'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "ss-code__dot",
    style: {
      background: '#3d3656'
    }
  })), title && /*#__PURE__*/React.createElement("span", {
    className: "ss-code__title"
  }, title)), /*#__PURE__*/React.createElement("div", {
    className: "ss-code__body"
  }, prompt && /*#__PURE__*/React.createElement("span", {
    className: "ss-code__prompt"
  }, "$"), /*#__PURE__*/React.createElement("code", {
    className: "ss-code__text"
  }, code)), copy && /*#__PURE__*/React.createElement("button", {
    className: `ss-code__copy${copied ? ' is-copied' : ''}`,
    onClick: onCopy,
    "aria-label": "Copy to clipboard"
  }, copied ? /*#__PURE__*/React.createElement(CheckIcon, null) : /*#__PURE__*/React.createElement(CopyIcon, null), copied ? 'Copied' : 'Copy'));
}
Object.assign(__ds_scope, { CodeBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/CodeBlock.jsx", error: String((e && e.message) || e) }); }

// components/core/Metric.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Metric — the brand's signature device. A large monospace numeral
 * with a unit and a label. Built for the benchmark story:
 * 575×, 1.4 ms, 160× faster, 16 tools.
 */

const CSS = `
.ss-metric{ display:flex; flex-direction:column; gap:0.35rem; }
.ss-metric--center{ align-items:center; text-align:center; }
.ss-metric__value{
  font-family:var(--font-mono); font-weight:var(--weight-bold,700);
  font-size:var(--_size,3.25rem); line-height:0.95; letter-spacing:-0.03em;
  font-feature-settings:'zero','ss02'; display:inline-flex; align-items:baseline; gap:0.08em;
  color:var(--text-primary,#f1eefb);
}
.ss-metric__unit{ font-size:0.42em; font-weight:var(--weight-semibold,600); letter-spacing:-0.01em; color:var(--text-secondary,#a9a2c0); }
.ss-metric__label{ font-family:var(--font-sans); font-size:var(--text-sm,0.8125rem); font-weight:var(--weight-medium,500); color:var(--text-muted,#8b84a3); letter-spacing:-0.005em; }
.ss-metric__sub{ font-family:var(--font-sans); font-size:var(--text-xs,0.75rem); color:var(--text-faint,#6b6486); }

.ss-metric--violet .ss-metric__value{ color:var(--violet-300,#b8a6ff); }
.ss-metric--spark  .ss-metric__value{ color:var(--amber-400,#fbbf24); }
.ss-metric--green  .ss-metric__value{ color:var(--green-400,#34d399); }
.ss-metric--gradient .ss-metric__value{
  background:var(--gradient-spark, linear-gradient(120deg,#9a7dff,#fbbf24));
  -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent; color:transparent;
}

.ss-metric--sm{ --_size: 1.75rem; }
.ss-metric--md{ --_size: 2.5rem; }
.ss-metric--lg{ --_size: 3.25rem; }
.ss-metric--xl{ --_size: clamp(3rem, 2rem + 4vw, 4.75rem); }
`;
if (typeof document !== 'undefined' && !document.getElementById('ss-metric-css')) {
  const s = document.createElement('style');
  s.id = 'ss-metric-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Metric({
  value,
  unit = null,
  label = null,
  sub = null,
  accent = 'default',
  size = 'lg',
  center = false,
  className = '',
  ...rest
}) {
  const cls = ['ss-metric', accent !== 'default' ? `ss-metric--${accent}` : '', `ss-metric--${size}`, center ? 'ss-metric--center' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "ss-metric__value"
  }, value, unit && /*#__PURE__*/React.createElement("span", {
    className: "ss-metric__unit"
  }, unit)), label && /*#__PURE__*/React.createElement("span", {
    className: "ss-metric__label"
  }, label), sub && /*#__PURE__*/React.createElement("span", {
    className: "ss-metric__sub"
  }, sub));
}
Object.assign(__ds_scope, { Metric });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Metric.jsx", error: String((e && e.message) || e) }); }

// components/core/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tabs — segmented switcher. Used for install methods
 * (One-click / CLI / Claude Code / Manual) and any "pick one" surface.
 * Controlled or uncontrolled.
 */

const CSS = `
.ss-tabs{ display:flex; flex-direction:column; gap:var(--space-4,1rem); }
.ss-tabs__list{
  display:inline-flex; align-items:center; gap:0.2rem; align-self:flex-start;
  padding:0.28rem; border-radius:var(--radius-md,10px);
  background:var(--bg-sunken,#0c0a12);
  border:1px solid var(--border-default,rgba(180,166,255,0.12));
}
.ss-tabs__list--full{ display:flex; align-self:stretch; }
.ss-tabs__list--full .ss-tabs__tab{ flex:1; justify-content:center; }
.ss-tabs__tab{
  display:inline-flex; align-items:center; gap:0.45rem;
  height:34px; padding:0 0.9rem; border:none; background:transparent;
  font-family:var(--font-sans); font-size:var(--text-sm,0.8125rem); font-weight:var(--weight-semibold,600);
  color:var(--text-muted,#8b84a3); border-radius:var(--radius-sm,6px); cursor:pointer; white-space:nowrap;
  transition:color var(--dur-fast,120ms) var(--ease-out), background var(--dur-fast,120ms) var(--ease-out);
}
.ss-tabs__tab:hover{ color:var(--text-secondary,#a9a2c0); }
.ss-tabs__tab[aria-selected="true"]{
  color:var(--text-primary,#f1eefb);
  background:var(--surface-raised,#211d2f);
  box-shadow:var(--ring-inset, inset 0 1px 0 0 rgba(255,255,255,0.05)), 0 1px 2px rgba(0,0,0,0.4);
}
.ss-tabs__tab svg{ width:15px; height:15px; }
.ss-tabs__icon{ display:inline-flex; }
`;
if (typeof document !== 'undefined' && !document.getElementById('ss-tabs-css')) {
  const s = document.createElement('style');
  s.id = 'ss-tabs-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  full = false,
  renderPanel,
  className = '',
  children,
  ...rest
}) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue !== undefined ? defaultValue : items[0] && items[0].id);
  const active = isControlled ? value : internal;
  const select = id => {
    if (!isControlled) setInternal(id);
    onChange && onChange(id);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['ss-tabs', className].filter(Boolean).join(' ')
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: ['ss-tabs__list', full ? 'ss-tabs__list--full' : ''].filter(Boolean).join(' '),
    role: "tablist"
  }, items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.id,
    role: "tab",
    "aria-selected": active === it.id,
    className: "ss-tabs__tab",
    onClick: () => select(it.id)
  }, it.icon && /*#__PURE__*/React.createElement("span", {
    className: "ss-tabs__icon"
  }, it.icon), it.label))), renderPanel ? renderPanel(active) : children);
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Benchmark.jsx
try { (() => {
/* Benchmark — the proof. Hero stats + a latency comparison bar chart. */
const {
  Card: BCard,
  Badge: BBadge,
  Metric: BMetric
} = window.SeekstoneDesignSystem_a9cecb;
const BIcon = window.SS_Icon;
const BENCH = [{
  name: 'Seekstone',
  arch: 'in-process index',
  ms: 2.4,
  you: true
}, {
  name: 'obsidian-mcp-server',
  arch: 'REST API',
  ms: 58
}, {
  name: 'mcp-obsidian',
  arch: 'REST API',
  ms: 81
}, {
  name: 'obsidian-mcp-pro',
  arch: 'fs subprocess',
  ms: 104
}, {
  name: 'mcpvault',
  arch: 'fs subprocess',
  ms: 199
}, {
  name: 'obsidian-mcp',
  arch: 'fs subprocess',
  ms: 219
}];
const BMAX = 224;
function Benchmark() {
  const [lit, setLit] = React.useState(false);
  React.useEffect(() => {
    const t = setTimeout(() => setLit(true), 350);
    return () => clearTimeout(t);
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "benchmark"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "head head--center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow eyebrow--center"
  }, /*#__PURE__*/React.createElement(BIcon, {
    name: "gauge",
    size: 13
  }), " Benchmarked, not claimed"), /*#__PURE__*/React.createElement("h2", null, "The only Obsidian MCP server", /*#__PURE__*/React.createElement("br", null), "with ", /*#__PURE__*/React.createElement("span", {
    className: "grad"
  }, "published numbers.")), /*#__PURE__*/React.createElement("p", null, "Measured against 5 popular servers on a real vault \u2014 1,955 notes, 20 runs each. The harness is open source; run it on your own vault and verify every figure.")), /*#__PURE__*/React.createElement("div", {
    className: "bench__stats"
  }, /*#__PURE__*/React.createElement(BCard, {
    variant: "glow",
    padding: "lg"
  }, /*#__PURE__*/React.createElement(BMetric, {
    value: "575\xD7",
    label: "smaller search payloads",
    sub: "~3 KB vs ~1.75 MB via REST",
    accent: "gradient",
    size: "lg"
  })), /*#__PURE__*/React.createElement(BCard, {
    padding: "lg"
  }, /*#__PURE__*/React.createElement(BMetric, {
    value: "1.4",
    unit: "ms",
    label: "warm search latency",
    sub: "p50, in-process index",
    accent: "green",
    size: "lg"
  })), /*#__PURE__*/React.createElement(BCard, {
    padding: "lg"
  }, /*#__PURE__*/React.createElement(BMetric, {
    value: "160\xD7",
    label: "faster than the slowest",
    sub: "no subprocess, no HTTP",
    accent: "violet",
    size: "lg"
  }))), /*#__PURE__*/React.createElement(BCard, {
    padding: "lg",
    className: "bench__chart"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bench__chart-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bench__chart-title"
  }, "Warm search latency \u2014 median ", /*#__PURE__*/React.createElement("span", {
    className: "bench__lower"
  }, "lower is better")), /*#__PURE__*/React.createElement(BBadge, {
    variant: "neutral",
    mono: true
  }, "milliseconds")), /*#__PURE__*/React.createElement("div", {
    className: "bench__rows"
  }, BENCH.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.name,
    className: 'bench__row' + (r.you ? ' is-you' : '')
  }, /*#__PURE__*/React.createElement("div", {
    className: "bench__label"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bench__name"
  }, r.name, r.you && /*#__PURE__*/React.createElement(BBadge, {
    variant: "success",
    dot: true
  }, "fastest")), /*#__PURE__*/React.createElement("span", {
    className: "bench__arch"
  }, r.arch)), /*#__PURE__*/React.createElement("div", {
    className: "bench__track"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bench__bar",
    style: {
      width: lit ? Math.max(r.ms / BMAX * 100, 1.2) + '%' : 0
    }
  })), /*#__PURE__*/React.createElement("span", {
    className: "bench__ms"
  }, r.ms < 10 ? r.ms.toFixed(1) : r.ms, /*#__PURE__*/React.createElement("span", {
    className: "bench__unit"
  }, "ms"))))))), /*#__PURE__*/React.createElement("style", null, `
        #benchmark .head { margin-bottom: 3rem; }
        .bench__stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-bottom: 1rem; }
        .bench__chart-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.5rem; }
        .bench__chart-title { font-size: 0.9375rem; font-weight: 600; color: var(--text-primary); }
        .bench__lower { font-weight: 400; color: var(--text-faint); font-size: 0.8125rem; margin-left: 0.4rem; }
        .bench__rows { display: flex; flex-direction: column; gap: 0.85rem; }
        .bench__row { display: grid; grid-template-columns: 200px 1fr 64px; align-items: center; gap: 1rem; }
        .bench__label { display: flex; flex-direction: column; gap: 1px; min-width: 0; }
        .bench__name { display: inline-flex; align-items: center; gap: 0.5rem; font-family: var(--font-mono); font-size: 0.8125rem; color: var(--text-secondary); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .bench__row.is-you .bench__name { color: var(--text-primary); font-weight: 600; }
        .bench__arch { font-size: 0.6875rem; color: var(--text-faint); }
        .bench__track { height: 12px; background: var(--bg-sunken); border-radius: 999px; overflow: hidden; border: 1px solid var(--border-subtle); }
        .bench__bar { height: 100%; border-radius: 999px; background: linear-gradient(90deg, var(--neutral-600), var(--neutral-500)); transition: width 1.1s var(--ease-out); }
        .bench__row.is-you .bench__bar { background: var(--gradient-spark); box-shadow: 0 0 18px -2px rgba(124,92,255,0.7); }
        .bench__ms { font-family: var(--font-mono); font-size: 0.875rem; font-weight: 600; color: var(--text-secondary); text-align: right; font-feature-settings: 'zero'; }
        .bench__row.is-you .bench__ms { color: var(--green-400); }
        .bench__unit { font-size: 0.6875rem; color: var(--text-faint); margin-left: 1px; }
        @media (max-width: 720px) {
          .bench__stats { grid-template-columns: 1fr; }
          .bench__row { grid-template-columns: 130px 1fr 52px; gap: 0.6rem; }
          .bench__name { font-size: 0.75rem; }
        }
      `));
}
window.SS_Benchmark = Benchmark;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Benchmark.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Faq.jsx
try { (() => {
/* Faq — accordion of the questions that unblock a download. */
const FIcon = window.SS_Icon;
const FAQS = [['Does the Obsidian app need to be running?', 'No. Seekstone reads the vault folder directly from disk. Obsidian can be open or closed — it never has to be running.'], ['Do I need the Local REST API plugin?', "No. Seekstone bypasses it entirely — that's the source of the ~575× payload reduction. No plugins are required at all."], ['Which AI clients does it support?', 'Any client that speaks the Model Context Protocol over stdio — Claude Desktop, Claude Code, Cursor, Windsurf, Continue, and more.'], ['Is it safe to use on my vault?', 'Seekstone only modifies files when you explicitly call a write tool. It makes no network requests, and the vault path is sandboxed — no tool can read or write outside it.'], ['Does it work on Windows?', 'Yes. Seekstone is tested on macOS, Linux, and Windows in CI on every commit.'], ['How big a vault can it handle?', 'It has been profiled against vaults with thousands of notes. The in-memory index is a few MB and starts in a few seconds.']];
function FaqItem({
  q,
  a,
  open,
  onToggle
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: 'faq__item' + (open ? ' is-open' : '')
  }, /*#__PURE__*/React.createElement("button", {
    className: "faq__q",
    onClick: onToggle,
    "aria-expanded": open
  }, /*#__PURE__*/React.createElement("span", null, q), /*#__PURE__*/React.createElement(FIcon, {
    name: "chevronDown",
    size: 18,
    className: "faq__chev"
  })), /*#__PURE__*/React.createElement("div", {
    className: "faq__a-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "faq__a"
  }, a)));
}
function Faq() {
  const [open, setOpen] = React.useState(0);
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "faq"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container container--narrow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "head head--center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow eyebrow--center"
  }, /*#__PURE__*/React.createElement(FIcon, {
    name: "sparkles",
    size: 13
  }), " Good to know"), /*#__PURE__*/React.createElement("h2", null, "Questions, answered.")), /*#__PURE__*/React.createElement("div", {
    className: "faq__list"
  }, FAQS.map(([q, a], i) => /*#__PURE__*/React.createElement(FaqItem, {
    key: i,
    q: q,
    a: a,
    open: open === i,
    onToggle: () => setOpen(open === i ? -1 : i)
  })))), /*#__PURE__*/React.createElement("style", null, `
        #faq .head { margin-bottom: 2.25rem; }
        .faq__list { display: flex; flex-direction: column; gap: 0.6rem; }
        .faq__item { border: 1px solid var(--border-default); border-radius: var(--radius-md); background: var(--surface); overflow: hidden; transition: border-color var(--dur-base); }
        .faq__item.is-open { border-color: var(--border-violet); }
        .faq__q { width: 100%; display: flex; align-items: center; justify-content: space-between; gap: 1rem; padding: 1.1rem 1.25rem; background: none; border: none; cursor: pointer; text-align: left; font-family: var(--font-sans); font-size: 1rem; font-weight: 600; color: var(--text-primary); }
        .faq__chev { color: var(--text-muted); transition: transform var(--dur-base) var(--ease-out), color var(--dur-base); flex: none; }
        .faq__item.is-open .faq__chev { transform: rotate(180deg); color: var(--violet-300); }
        .faq__a-wrap { display: grid; grid-template-rows: 0fr; transition: grid-template-rows var(--dur-base) var(--ease-out); }
        .faq__item.is-open .faq__a-wrap { grid-template-rows: 1fr; }
        .faq__a { overflow: hidden; padding: 0 1.25rem; font-size: 0.9375rem; line-height: 1.6; color: var(--text-secondary); }
        .faq__item.is-open .faq__a { padding-bottom: 1.2rem; }
      `));
}
window.SS_Faq = Faq;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Faq.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
/* Footer — closing CTA band + footer links. */
const {
  Button: FBtn,
  GemMark: FGem,
  Badge: FBadge
} = window.SeekstoneDesignSystem_a9cecb;
const FtIcon = window.SS_Icon;
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    className: "ftr"
  }, /*#__PURE__*/React.createElement("section", {
    className: "section cta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid-bg"
  }), /*#__PURE__*/React.createElement("div", {
    className: "glow-blob",
    style: {
      width: 560,
      height: 360,
      bottom: -120,
      left: '50%',
      transform: 'translateX(-50%)',
      background: 'radial-gradient(circle, rgba(124,92,255,0.32), transparent 65%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "container relativ cta__inner"
  }, /*#__PURE__*/React.createElement(FGem, {
    size: 64,
    glow: true,
    spark: true,
    animated: true
  }), /*#__PURE__*/React.createElement("h2", {
    className: "cta__title"
  }, "It's your time to ", /*#__PURE__*/React.createElement("span", {
    className: "cta__grad"
  }, "seek.")), /*#__PURE__*/React.createElement("p", {
    className: "cta__sub"
  }, "Free and open source under MIT. Give Claude millisecond access to your vault \u2014 and your context window back."), /*#__PURE__*/React.createElement("div", {
    className: "cta__btns"
  }, /*#__PURE__*/React.createElement(FBtn, {
    variant: "primary",
    size: "lg",
    href: "#install",
    iconRight: /*#__PURE__*/React.createElement(FtIcon, {
      name: "arrowRight",
      size: 17
    })
  }, "Get Seekstone"), /*#__PURE__*/React.createElement(FBtn, {
    variant: "secondary",
    size: "lg",
    href: "https://github.com/shaqmughal/seekstone",
    target: "_blank",
    rel: "noreferrer",
    iconLeft: /*#__PURE__*/React.createElement(FtIcon, {
      name: "github",
      size: 17
    })
  }, "View source")))), /*#__PURE__*/React.createElement("hr", {
    className: "divider"
  }), /*#__PURE__*/React.createElement("div", {
    className: "container ftr__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ftr__brand"
  }, /*#__PURE__*/React.createElement("a", {
    className: "ftr__lockup",
    href: "#top"
  }, /*#__PURE__*/React.createElement(FGem, {
    size: 26,
    spark: true
  }), /*#__PURE__*/React.createElement("span", null, "Seekstone")), /*#__PURE__*/React.createElement("p", {
    className: "ftr__tag"
  }, "The fastest Obsidian MCP server for Claude."), /*#__PURE__*/React.createElement("div", {
    className: "ftr__badges"
  }, /*#__PURE__*/React.createElement(FBadge, {
    variant: "spark"
  }, "MIT"), /*#__PURE__*/React.createElement(FBadge, {
    variant: "neutral",
    mono: true
  }, "v1.0"))), /*#__PURE__*/React.createElement("div", {
    className: "ftr__cols"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ftr__col"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ftr__h"
  }, "Product"), /*#__PURE__*/React.createElement("a", {
    href: "#benchmark"
  }, "Benchmarks"), /*#__PURE__*/React.createElement("a", {
    href: "#tools"
  }, "Tools"), /*#__PURE__*/React.createElement("a", {
    href: "#install"
  }, "Install"), /*#__PURE__*/React.createElement("a", {
    href: "#faq"
  }, "FAQ")), /*#__PURE__*/React.createElement("div", {
    className: "ftr__col"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ftr__h"
  }, "Packages"), /*#__PURE__*/React.createElement("a", {
    href: "https://www.npmjs.com/package/obsidian-mcp-seekstone",
    target: "_blank",
    rel: "noreferrer"
  }, "npm \xB7 obsidian-mcp-seekstone"), /*#__PURE__*/React.createElement("a", {
    href: "https://www.npmjs.com/package/seekstone",
    target: "_blank",
    rel: "noreferrer"
  }, "npm \xB7 seekstone"), /*#__PURE__*/React.createElement("a", {
    href: "https://github.com/shaqmughal/seekstone",
    target: "_blank",
    rel: "noreferrer"
  }, "GitHub")), /*#__PURE__*/React.createElement("div", {
    className: "ftr__col"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ftr__h"
  }, "Domains"), /*#__PURE__*/React.createElement("a", {
    href: "https://seekstone.dev",
    target: "_blank",
    rel: "noreferrer"
  }, "seekstone.dev"), /*#__PURE__*/React.createElement("a", {
    href: "https://getseekstone.com",
    target: "_blank",
    rel: "noreferrer"
  }, "getseekstone.com"), /*#__PURE__*/React.createElement("a", {
    href: "https://bestobsidianmcp.com",
    target: "_blank",
    rel: "noreferrer"
  }, "bestobsidianmcp.com")))), /*#__PURE__*/React.createElement("div", {
    className: "container ftr__bottom"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Seekstone \xB7 MIT License"), /*#__PURE__*/React.createElement("span", {
    className: "ftr__made"
  }, "Built for ", /*#__PURE__*/React.createElement("a", {
    href: "https://obsidian.md",
    target: "_blank",
    rel: "noreferrer"
  }, "Obsidian"), " + ", /*#__PURE__*/React.createElement("a", {
    href: "https://modelcontextprotocol.io",
    target: "_blank",
    rel: "noreferrer"
  }, "MCP"))), /*#__PURE__*/React.createElement("style", null, `
        .cta { text-align: center; }
        .cta__inner { display: flex; flex-direction: column; align-items: center; }
        .cta__title { margin: 1.25rem 0 0; font-size: var(--text-3xl); font-weight: 800; letter-spacing: -0.04em; color: var(--text-primary); }
        .cta__grad { background: var(--gradient-text-shimmer); background-size: 200% auto; -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; color: transparent; }
        @media (prefers-reduced-motion: no-preference) { .cta__grad { animation: ssShimmer 8s linear infinite; } }
        .cta__sub { margin: 1rem 0 0; max-width: 50ch; font-size: var(--text-md); line-height: 1.6; color: var(--text-secondary); }
        .cta__btns { display: flex; flex-wrap: wrap; justify-content: center; gap: 0.75rem; margin-top: 2rem; }
        .ftr { background: var(--bg-base); }
        .ftr__inner { display: grid; grid-template-columns: 1.3fr 2fr; gap: 2.5rem; padding-block: 3.5rem 2.5rem; }
        .ftr__lockup { display: inline-flex; align-items: center; gap: 0.55rem; font-weight: 600; font-size: 1.1rem; letter-spacing: -0.03em; color: var(--violet-100); }
        .ftr__tag { margin: 0.9rem 0 1rem; font-size: 0.875rem; color: var(--text-muted); max-width: 32ch; }
        .ftr__badges { display: flex; gap: 0.5rem; }
        .ftr__cols { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
        .ftr__col { display: flex; flex-direction: column; gap: 0.7rem; }
        .ftr__h { font-size: 0.6875rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--text-faint); margin-bottom: 0.15rem; }
        .ftr__col a { font-size: 0.875rem; color: var(--text-secondary); transition: color var(--dur-fast); }
        .ftr__col a:hover { color: var(--violet-300); }
        .ftr__bottom { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.75rem; padding-block: 1.5rem 2.5rem; border-top: 1px solid var(--border-subtle); font-size: 0.8125rem; color: var(--text-faint); }
        .ftr__made a { color: var(--text-muted); }
        .ftr__made a:hover { color: var(--violet-300); }
        @media (max-width: 760px) { .ftr__inner { grid-template-columns: 1fr; gap: 2rem; } .ftr__cols { grid-template-columns: repeat(2, 1fr); } }
      `));
}
window.SS_Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
/* Hero — the centerpiece. Floating gem, headline, CTAs, install one-liner, trust strip. */
const {
  Button: HBtn,
  Badge: HBadge,
  GemMark: HGem,
  CodeBlock: HCode
} = window.SeekstoneDesignSystem_a9cecb;
const HIcon = window.SS_Icon;
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    className: "hero section--tight",
    id: "top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid-bg"
  }), /*#__PURE__*/React.createElement("div", {
    className: "glow-blob",
    style: {
      width: 620,
      height: 620,
      top: -260,
      left: '50%',
      transform: 'translateX(-50%)',
      background: 'radial-gradient(circle, rgba(124,92,255,0.45), transparent 65%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "glow-blob",
    style: {
      width: 360,
      height: 360,
      top: 40,
      left: '8%',
      background: 'radial-gradient(circle, rgba(245,158,11,0.16), transparent 65%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "container relativ hero__inner"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow eyebrow--center rise rise-1"
  }, /*#__PURE__*/React.createElement(HIcon, {
    name: "sparkles",
    size: 13
  }), " Open source \xB7 MIT \xB7 Obsidian MCP"), /*#__PURE__*/React.createElement("div", {
    className: "hero__gem rise rise-1"
  }, /*#__PURE__*/React.createElement(HGem, {
    size: 96,
    glow: true,
    spark: true,
    animated: true
  })), /*#__PURE__*/React.createElement("h1", {
    className: "hero__title rise rise-2"
  }, "Search your entire vault", /*#__PURE__*/React.createElement("br", null), "in ", /*#__PURE__*/React.createElement("span", {
    className: "hero__grad"
  }, "milliseconds.")), /*#__PURE__*/React.createElement("p", {
    className: "hero__sub rise rise-3"
  }, "Seekstone is the fastest Obsidian MCP server for Claude \u2014 filesystem-direct, no plugins, no app required. Searches return in ", /*#__PURE__*/React.createElement("strong", null, "1.4\xA0ms"), " with", /*#__PURE__*/React.createElement("strong", null, " ~575\xD7 smaller"), " payloads, so Claude reads your whole note library without burning its context."), /*#__PURE__*/React.createElement("div", {
    className: "hero__cta rise rise-3"
  }, /*#__PURE__*/React.createElement(HBtn, {
    variant: "primary",
    size: "lg",
    href: "#install",
    iconRight: /*#__PURE__*/React.createElement(HIcon, {
      name: "download",
      size: 17
    })
  }, "Get Seekstone"), /*#__PURE__*/React.createElement(HBtn, {
    variant: "secondary",
    size: "lg",
    href: "https://github.com/shaqmughal/seekstone",
    target: "_blank",
    rel: "noreferrer",
    iconLeft: /*#__PURE__*/React.createElement(HIcon, {
      name: "github",
      size: 17
    })
  }, "Star on GitHub")), /*#__PURE__*/React.createElement("div", {
    className: "hero__install rise rise-4"
  }, /*#__PURE__*/React.createElement(HCode, {
    prompt: true,
    code: "npx -y obsidian-mcp-seekstone init"
  })), /*#__PURE__*/React.createElement("div", {
    className: "trust hero__trust rise rise-4"
  }, /*#__PURE__*/React.createElement("span", {
    className: "trust__item"
  }, /*#__PURE__*/React.createElement(HIcon, {
    name: "zap",
    size: 15
  }), " 25\u2013160\xD7 faster"), /*#__PURE__*/React.createElement("span", {
    className: "trust__item"
  }, /*#__PURE__*/React.createElement(HIcon, {
    name: "plug",
    size: 15
  }), " No plugins required"), /*#__PURE__*/React.createElement("span", {
    className: "trust__item"
  }, /*#__PURE__*/React.createElement(HIcon, {
    name: "shield",
    size: 15
  }), " No network calls"), /*#__PURE__*/React.createElement("span", {
    className: "trust__item"
  }, /*#__PURE__*/React.createElement(HIcon, {
    name: "hardDrive",
    size: 15
  }), " macOS \xB7 Linux \xB7 Windows"))), /*#__PURE__*/React.createElement("style", null, `
        .hero { padding-top: clamp(2.5rem, 1rem + 6vw, 5rem); }
        .hero__inner { display: flex; flex-direction: column; align-items: center; text-align: center; }
        .hero__gem { margin: 0.25rem 0 1.5rem; }
        .hero__title { margin: 0.75rem 0 0; font-weight: 800; font-size: var(--text-4xl); line-height: 1.02; letter-spacing: -0.045em; color: var(--text-primary); text-wrap: balance; }
        .hero__grad { background: var(--gradient-text-shimmer); background-size: 200% auto; -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; color: transparent; }
        @media (prefers-reduced-motion: no-preference) { .hero__grad { animation: ssShimmer 8s linear infinite; } }
        .hero__sub { margin: 1.4rem 0 0; max-width: 60ch; font-size: var(--text-md); line-height: 1.6; color: var(--text-secondary); text-wrap: pretty; }
        .hero__sub strong { color: var(--violet-200); font-weight: 600; }
        .hero__cta { display: flex; flex-wrap: wrap; justify-content: center; gap: 0.75rem; margin-top: 2rem; }
        .hero__install { width: 100%; max-width: 440px; margin-top: 2rem; }
        .hero__trust { justify-content: center; margin-top: 2.25rem; }
      `));
}
window.SS_Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Install.jsx
try { (() => {
/* Install — up and running in 30 seconds. Method switcher with real commands. */
const {
  Card: ICard,
  Button: IBtn,
  Badge: IBadge,
  Tabs: ITabs,
  CodeBlock: ICode,
  GemMark: IGem
} = window.SeekstoneDesignSystem_a9cecb;
const IIcon = window.SS_Icon;
const CONFIG_JSON = `{
  "mcpServers": {
    "seekstone": {
      "command": "npx",
      "args": ["-y", "obsidian-mcp-seekstone"],
      "env": { "SEEKSTONE_VAULT": "/path/to/your/vault" }
    }
  }
}`;
function Steps({
  items
}) {
  return /*#__PURE__*/React.createElement("ol", {
    className: "inst__steps"
  }, items.map((s, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    className: "inst__step"
  }, /*#__PURE__*/React.createElement("span", {
    className: "inst__num"
  }, i + 1), /*#__PURE__*/React.createElement("span", null, s))));
}
function Install() {
  const panels = {
    oneclick: /*#__PURE__*/React.createElement("div", {
      className: "inst__panel"
    }, /*#__PURE__*/React.createElement(Steps, {
      items: [/*#__PURE__*/React.createElement("span", null, "Download ", /*#__PURE__*/React.createElement("code", null, "seekstone.mcpb"), " from GitHub Releases."), /*#__PURE__*/React.createElement("span", null, "Open it with Claude Desktop \u2014 double-click in Finder."), /*#__PURE__*/React.createElement("span", null, "Pick your Obsidian vault when prompted. Done.")]
    }), /*#__PURE__*/React.createElement("div", {
      className: "inst__row"
    }, /*#__PURE__*/React.createElement(IBtn, {
      variant: "spark",
      href: "https://github.com/shaqmughal/seekstone/releases/latest",
      target: "_blank",
      rel: "noreferrer",
      iconLeft: /*#__PURE__*/React.createElement(IIcon, {
        name: "download",
        size: 16
      })
    }, "Download .mcpb"), /*#__PURE__*/React.createElement("span", {
      className: "inst__note"
    }, "No terminal \xB7 no Node.js required"))),
    cli: /*#__PURE__*/React.createElement("div", {
      className: "inst__panel"
    }, /*#__PURE__*/React.createElement("p", {
      className: "inst__lead"
    }, "Auto-detects your vault, validates it, and patches Claude Desktop for you."), /*#__PURE__*/React.createElement(ICode, {
      prompt: true,
      code: "npx -y obsidian-mcp-seekstone init"
    }), /*#__PURE__*/React.createElement("span", {
      className: "inst__note"
    }, "Add ", /*#__PURE__*/React.createElement("code", null, "--write"), " to patch in place, or ", /*#__PURE__*/React.createElement("code", null, "--vault"), " to choose.")),
    code: /*#__PURE__*/React.createElement("div", {
      className: "inst__panel"
    }, /*#__PURE__*/React.createElement("p", {
      className: "inst__lead"
    }, "One command configures Claude Code end-to-end."), /*#__PURE__*/React.createElement(ICode, {
      chrome: true,
      title: "Terminal",
      code: 'claude mcp add seekstone \\\n  --env SEEKSTONE_VAULT=/path/to/vault \\\n  -- npx -y obsidian-mcp-seekstone'
    })),
    manual: /*#__PURE__*/React.createElement("div", {
      className: "inst__panel"
    }, /*#__PURE__*/React.createElement("p", {
      className: "inst__lead"
    }, "Paste into ", /*#__PURE__*/React.createElement("code", null, "claude_desktop_config.json"), " (Settings \u2192 Developer)."), /*#__PURE__*/React.createElement(ICode, {
      chrome: true,
      title: "claude_desktop_config.json",
      code: CONFIG_JSON
    }))
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "install"
  }, /*#__PURE__*/React.createElement("div", {
    className: "glow-blob",
    style: {
      width: 520,
      height: 520,
      top: '-5%',
      left: '50%',
      transform: 'translateX(-50%)',
      background: 'radial-gradient(circle, rgba(124,92,255,0.18), transparent 65%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "container container--narrow relativ"
  }, /*#__PURE__*/React.createElement("div", {
    className: "head head--center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow eyebrow--center"
  }, /*#__PURE__*/React.createElement(IIcon, {
    name: "terminal",
    size: 13
  }), " 30 seconds to first search"), /*#__PURE__*/React.createElement("h2", null, "Pick your way in."), /*#__PURE__*/React.createElement("p", null, "Two npm names, one server. Works with Claude Desktop, Claude Code, Cursor, Windsurf \u2014 any MCP-over-stdio client.")), /*#__PURE__*/React.createElement(ICard, {
    variant: "raised",
    padding: "lg",
    className: "inst__card"
  }, /*#__PURE__*/React.createElement(ITabs, {
    full: true,
    items: [{
      id: 'oneclick',
      label: 'One-click'
    }, {
      id: 'cli',
      label: 'Guided CLI'
    }, {
      id: 'code',
      label: 'Claude Code'
    }, {
      id: 'manual',
      label: 'Manual'
    }],
    renderPanel: id => panels[id]
  })), /*#__PURE__*/React.createElement("div", {
    className: "inst__pkgs"
  }, /*#__PURE__*/React.createElement("span", {
    className: "inst__pkglabel"
  }, "Installs as"), /*#__PURE__*/React.createElement(IBadge, {
    variant: "violet",
    mono: true,
    icon: /*#__PURE__*/React.createElement(IIcon, {
      name: "package",
      size: 12
    })
  }, "obsidian-mcp-seekstone"), /*#__PURE__*/React.createElement(IBadge, {
    variant: "neutral",
    mono: true,
    icon: /*#__PURE__*/React.createElement(IIcon, {
      name: "package",
      size: 12
    })
  }, "seekstone"), /*#__PURE__*/React.createElement(IBadge, {
    variant: "outline",
    mono: true
  }, "Node \u2265 22"))), /*#__PURE__*/React.createElement("style", null, `
        #install .head { margin-bottom: 2.25rem; }
        .inst__card { margin-top: 0.5rem; }
        .inst__panel { display: flex; flex-direction: column; gap: 1.1rem; padding-top: 0.25rem; }
        .inst__lead { margin: 0; font-size: 0.9375rem; color: var(--text-secondary); }
        .inst__lead code, .inst__note code, .inst__step code { font-family: var(--font-mono); font-size: 0.85em; color: var(--violet-200); background: var(--accent-soft); padding: 0.1em 0.4em; border-radius: 5px; }
        .inst__steps { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 0.85rem; }
        .inst__step { display: flex; align-items: flex-start; gap: 0.75rem; font-size: 0.9375rem; line-height: 1.5; color: var(--text-secondary); }
        .inst__num { flex: none; width: 24px; height: 24px; display: grid; place-items: center; border-radius: 50%; font-family: var(--font-mono); font-size: 0.75rem; font-weight: 700; color: var(--violet-200); background: var(--accent-soft); border: 1px solid rgba(124,92,255,0.3); margin-top: 1px; }
        .inst__row { display: flex; align-items: center; gap: 1rem; flex-wrap: wrap; }
        .inst__note { font-size: 0.8125rem; color: var(--text-muted); }
        .inst__pkgs { display: flex; align-items: center; justify-content: center; flex-wrap: wrap; gap: 0.6rem; margin-top: 1.75rem; }
        .inst__pkglabel { font-size: 0.8125rem; color: var(--text-faint); margin-right: 0.2rem; }
      `));
}
window.SS_Install = Install;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Install.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Nav.jsx
try { (() => {
/* Nav — sticky glass top bar with logo lockup, links, and CTAs. */
const {
  Button,
  Badge,
  GemMark
} = window.SeekstoneDesignSystem_a9cecb;
const NavIcon = window.SS_Icon;
function Nav({
  stars = '1.2k'
}) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const root = document.querySelector('.ss-scroll') || window;
    const el = document.querySelector('.ss-scroll');
    const onScroll = () => setScrolled((el ? el.scrollTop : window.scrollY) > 8);
    root.addEventListener('scroll', onScroll, {
      passive: true
    });
    return () => root.removeEventListener('scroll', onScroll);
  }, []);
  const links = [['Benchmarks', '#benchmark'], ['Tools', '#tools'], ['Install', '#install'], ['FAQ', '#faq']];
  return /*#__PURE__*/React.createElement("header", {
    className: 'ss-nav' + (scrolled ? ' is-scrolled' : '')
  }, /*#__PURE__*/React.createElement("div", {
    className: "container ss-nav__inner"
  }, /*#__PURE__*/React.createElement("a", {
    className: "ss-nav__brand",
    href: "#top"
  }, /*#__PURE__*/React.createElement(GemMark, {
    size: 30,
    spark: true
  }), /*#__PURE__*/React.createElement("span", {
    className: "ss-nav__word"
  }, "Seekstone")), /*#__PURE__*/React.createElement("nav", {
    className: "ss-nav__links hide-md"
  }, links.map(([label, href]) => /*#__PURE__*/React.createElement("a", {
    key: href,
    href: href,
    className: "ss-nav__link"
  }, label))), /*#__PURE__*/React.createElement("div", {
    className: "ss-nav__actions"
  }, /*#__PURE__*/React.createElement("a", {
    className: "ss-nav__ghost hide-md",
    href: "https://github.com/shaqmughal/seekstone",
    target: "_blank",
    rel: "noreferrer"
  }, /*#__PURE__*/React.createElement(NavIcon, {
    name: "github",
    size: 16
  }), /*#__PURE__*/React.createElement("span", null, stars)), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    href: "#install",
    iconRight: /*#__PURE__*/React.createElement(NavIcon, {
      name: "arrowRight",
      size: 15
    })
  }, "Get Seekstone"))), /*#__PURE__*/React.createElement("style", null, `
        .ss-nav { position: sticky; top: 0; z-index: var(--z-nav); transition: background var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out), backdrop-filter var(--dur-base); border-bottom: 1px solid transparent; }
        .ss-nav.is-scrolled { background: var(--glass); backdrop-filter: var(--blur-md); -webkit-backdrop-filter: var(--blur-md); border-bottom-color: var(--border-subtle); }
        .ss-nav__inner { display: flex; align-items: center; justify-content: space-between; height: 64px; }
        .ss-nav__brand { display: inline-flex; align-items: center; gap: 0.6rem; text-decoration: none; }
        .ss-nav__word { font-weight: 600; font-size: 1.15rem; letter-spacing: -0.03em; color: var(--violet-100); }
        .ss-nav__links { display: flex; align-items: center; gap: 0.35rem; }
        .ss-nav__link { padding: 0.4rem 0.7rem; border-radius: var(--radius-sm); font-size: 0.875rem; font-weight: 500; color: var(--text-secondary); transition: color var(--dur-fast), background var(--dur-fast); }
        .ss-nav__link:hover { color: var(--text-primary); background: var(--surface-hover); }
        .ss-nav__actions { display: flex; align-items: center; gap: 0.6rem; }
        .ss-nav__ghost { display: inline-flex; align-items: center; gap: 0.4rem; height: 32px; padding: 0 0.7rem; border-radius: var(--radius-sm); font-family: var(--font-mono); font-size: 0.8125rem; color: var(--text-secondary); border: 1px solid var(--border-default); transition: all var(--dur-fast); }
        .ss-nav__ghost:hover { color: var(--text-primary); border-color: var(--border-violet); background: var(--surface-hover); }
      `));
}
window.SS_Nav = Nav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Pillars.jsx
try { (() => {
/* Pillars — three trust statements in Obsidian's "Your X is Y" voice. */
const {
  Card: PCard,
  GemMark: PGem
} = window.SeekstoneDesignSystem_a9cecb;
const PIcon = window.SS_Icon;
const PILLARS = [['zap', 'Your context is precious.', 'Most servers return full note content for every hit — megabytes your model has to read. Seekstone returns short ranked excerpts, so a query that cost 459,000 tokens costs about 800.'], ['shield', 'Your vault stays yours.', 'No Obsidian app, no Local REST API plugin, no cloud. Seekstone reads files straight from disk, makes zero network calls, and sends no telemetry. Writes only ever happen when you ask.'], ['hardDrive', 'Your files, forever.', 'Plain Markdown on your machine — nothing to lock you in. Frontmatter edits are byte-identical by design: key order, quote style and comments preserved, proven by the test harness.']];
function Pillars() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section section--tight pillars"
  }, /*#__PURE__*/React.createElement("div", {
    className: "glow-blob",
    style: {
      width: 480,
      height: 480,
      top: '20%',
      right: '-10%',
      background: 'radial-gradient(circle, rgba(124,92,255,0.12), transparent 65%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "container relativ"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pillars__grid"
  }, PILLARS.map(([icon, title, body]) => /*#__PURE__*/React.createElement(PCard, {
    key: title,
    padding: "lg",
    className: "pillar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pillar__icon"
  }, /*#__PURE__*/React.createElement(PIcon, {
    name: icon,
    size: 20
  })), /*#__PURE__*/React.createElement("h3", {
    className: "pillar__title"
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "pillar__body"
  }, body))))), /*#__PURE__*/React.createElement("style", null, `
        .pillars__grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.25rem; }
        .pillar { gap: 0.9rem; }
        .pillar__icon { width: 44px; height: 44px; display: grid; place-items: center; border-radius: 12px; color: var(--amber-300); background: var(--spark-soft); border: 1px solid rgba(245,158,11,0.22); }
        .pillar__title { margin: 0.3rem 0 0; font-size: 1.25rem; font-weight: 700; letter-spacing: -0.02em; color: var(--text-primary); }
        .pillar__body { margin: 0; font-size: 0.9375rem; line-height: 1.6; color: var(--text-secondary); text-wrap: pretty; }
        @media (max-width: 900px) { .pillars__grid { grid-template-columns: 1fr; } }
      `));
}
window.SS_Pillars = Pillars;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Pillars.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Tools.jsx
try { (() => {
/* Tools — 16 tools, one warm index. Read/Write tab switcher over a card grid. */
const {
  Card: TCard,
  Badge: TBadge,
  Tabs: TTabs
} = window.SeekstoneDesignSystem_a9cecb;
const TIcon = window.SS_Icon;
const READ = [['search', 'search', 'Full-text search returning ranked ~200-char excerpts — not full notes.'], ['read_note', 'fileText', 'Read a note by path. Return a single section, block, or line range.'], ['list_notes', 'list', 'List notes, optionally filtered by folder prefix or tag.'], ['list_tags', 'tag', 'Every tag in the vault, sorted by usage count or alphabetically.'], ['outline_note', 'listTree', 'Heading & block structure — cheap navigation before a targeted read.'], ['get_backlinks', 'link', 'Find all notes that link to a given note.'], ['get_links', 'link', 'List all outgoing wikilinks and markdown links from a note.'], ['get_periodic_note', 'calendar', "Read any date's daily / weekly / monthly note — Obsidian closed."]];
const WRITE = [['create_note', 'filePlus', 'Create a note with optional frontmatter; parent dirs made for you.', false], ['append_note', 'filePen', 'Append text to a note body without ever touching frontmatter.', false], ['patch_frontmatter', 'braces', 'Edit YAML in place — key order, quote style and comments preserved.', false], ['patch_note', 'filePen', 'Insert text immediately after a heading, frontmatter untouched.', false], ['replace_in_note', 'replace', 'Replace the first occurrence of a phrase, with a dry-run preview.', false], ['move_note', 'move', 'Move or rename a note; destination directories created automatically.', false], ['append_periodic_note', 'calendarPlus', "Append to today's periodic note, creating it from a template.", false], ['delete_note', 'trash', 'Permanently delete a note. Irreversible — only when you ask.', true]];
function ToolGrid({
  items
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "tools__grid"
  }, items.map(([name, icon, desc, danger]) => /*#__PURE__*/React.createElement(TCard, {
    key: name,
    className: "tool",
    interactive: true,
    padding: "md"
  }, /*#__PURE__*/React.createElement("div", {
    className: 'tool__icon' + (danger ? ' tool__icon--danger' : '')
  }, /*#__PURE__*/React.createElement(TIcon, {
    name: icon,
    size: 18
  })), /*#__PURE__*/React.createElement("div", {
    className: "tool__body"
  }, /*#__PURE__*/React.createElement("code", {
    className: "tool__name"
  }, name), /*#__PURE__*/React.createElement("p", {
    className: "tool__desc"
  }, desc)))));
}
function Tools() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "tools"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "head head--center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow eyebrow--center"
  }, /*#__PURE__*/React.createElement(TIcon, {
    name: "database",
    size: 13
  }), " 16 tools \xB7 one warm index"), /*#__PURE__*/React.createElement("h2", null, "Everything Claude needs", /*#__PURE__*/React.createElement("br", null), "to ", /*#__PURE__*/React.createElement("span", {
    className: "grad"
  }, "work your vault.")), /*#__PURE__*/React.createElement("p", null, "Read and write, link-graph and periodic notes \u2014 the broadest toolset of any Obsidian MCP server. Four capabilities no other tested server even ships.")), /*#__PURE__*/React.createElement("div", {
    className: "tools__tabswrap"
  }, /*#__PURE__*/React.createElement(TTabs, {
    items: [{
      id: 'read',
      label: 'Read · 8',
      icon: /*#__PURE__*/React.createElement(TIcon, {
        name: "search",
        size: 15
      })
    }, {
      id: 'write',
      label: 'Write · 8',
      icon: /*#__PURE__*/React.createElement(TIcon, {
        name: "filePen",
        size: 15
      })
    }],
    renderPanel: id => /*#__PURE__*/React.createElement(ToolGrid, {
      items: id === 'read' ? READ : WRITE
    })
  }))), /*#__PURE__*/React.createElement("style", null, `
        #tools .head { margin-bottom: 2.5rem; }
        .tools__tabswrap { display: flex; flex-direction: column; align-items: center; }
        .tools__tabswrap .ss-tabs { width: 100%; align-items: center; }
        .tools__grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; width: 100%; margin-top: 0.5rem; }
        .tool { gap: 0.85rem; }
        .tool__icon { width: 38px; height: 38px; display: grid; place-items: center; border-radius: 10px; color: var(--violet-300); background: var(--accent-soft); border: 1px solid rgba(124,92,255,0.25); flex: none; }
        .tool__icon--danger { color: var(--red-400); background: rgba(239,68,68,0.1); border-color: rgba(239,68,68,0.25); }
        .tool__name { font-family: var(--font-mono); font-size: 0.8125rem; font-weight: 600; color: var(--text-primary); }
        .tool__desc { margin: 0.35rem 0 0; font-size: 0.8125rem; line-height: 1.5; color: var(--text-muted); text-wrap: pretty; }
        @media (max-width: 1000px) { .tools__grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 560px) { .tools__grid { grid-template-columns: 1fr; } }
      `));
}
window.SS_Tools = Tools;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Tools.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/anim.js
try { (() => {
/* ============================================================
   Seekstone website — motion controller (plain JS, no build).
   Loaded AFTER the React app mounts.

   Hard rule: the animation clock can be frozen (throttled /
   backgrounded tabs, capture environments). Nothing here may
   depend on that clock to make content VISIBLE. So:
     • Reveal targets are hidden only if we PROVE the clock is
       live (motionLive); otherwise they show instantly.
     • Multiple instant-reveal failsafes (timer + scroll +
       ultimate backstop) guarantee content is never stuck.
     • Count-up only runs when motionLive (else shows the real
       number immediately).
   ============================================================ */
(function () {
  'use strict';

  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var finePointer = window.matchMedia && window.matchMedia('(pointer: fine)').matches;

  /* ---- prove the animation clock actually advances ---- */
  var motionLive = false;
  try {
    requestAnimationFrame(function (a) {
      requestAnimationFrame(function (b) {
        if (b > a) motionLive = true;
      });
    });
  } catch (e) {/* no rAF — treat as frozen */}

  /* Wait for the React app to commit, then init. */
  function whenMounted(fn, tries) {
    tries = tries || 0;
    var site = document.querySelector('.ss-site');
    if (site && site.children.length) return fn();
    if (tries > 60) return fn();
    setTimeout(function () {
      whenMounted(fn, tries + 1);
    }, 50);
  }
  function onReady(fn) {
    if (document.readyState === 'complete' || document.readyState === 'interactive') fn();else window.addEventListener('DOMContentLoaded', fn);
  }
  onReady(function () {
    whenMounted(init);
  });

  /* ============================================================ */
  function init() {
    setupAurora();
    setupReveal();
    setupCountUp();
    setupParallax();
    setupSpotlight();
  }

  /* ---- 0. Ambient aurora (fixed light field behind content) -- */
  function setupAurora() {
    if (document.querySelector('.ss-aurora')) return;
    var aur = document.createElement('div');
    aur.className = 'ss-aurora';
    aur.setAttribute('aria-hidden', 'true');
    aur.innerHTML = '<div class="ss-aurora__bloom ss-aurora__a"></div>' + '<div class="ss-aurora__bloom ss-aurora__b"></div>' + '<div class="ss-aurora__bloom ss-aurora__c"></div>' + '<div class="ss-aurora__veil"></div>';
    document.body.insertBefore(aur, document.body.firstChild);
    if (reduce) return;
    // Gentle, bounded scroll parallax: the whole field drifts a little as you
    // scroll, so it "shifts" against the content. Bounded so edges never show.
    var cur = 0,
      tgt = 0,
      raf = null;
    function onScroll() {
      var doc = document.documentElement;
      var max = doc.scrollHeight - doc.clientHeight || 1;
      var prog = Math.min(Math.max((window.scrollY || doc.scrollTop) / max, 0), 1);
      tgt = prog * 64; // px, total travel across the whole page
      if (!raf) raf = requestAnimationFrame(loop);
    }
    function loop() {
      cur += (tgt - cur) * 0.12;
      aur.style.transform = 'translate3d(0,' + cur.toFixed(2) + 'px,0)';
      if (Math.abs(tgt - cur) > 0.3) raf = requestAnimationFrame(loop);else raf = null;
    }
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    onScroll();
  }

  /* ---- 1. Scroll reveal (robust) ---------------------------- */
  var REVEAL_SELECTORS = ['.head', '.bench__stats > *', '.bench__chart', '.tools__tabswrap', '.pillar', '.inst__card', '.inst__pkgs', '.faq__item', '.cta__inner'];
  function setupReveal() {
    var targets = [];
    REVEAL_SELECTORS.forEach(function (sel) {
      document.querySelectorAll(sel).forEach(function (el) {
        targets.push(el);
      });
    });
    if (!targets.length) return;

    // stagger siblings within the same parent
    var seen = new Map();
    targets.forEach(function (el) {
      var p = el.parentNode;
      var i = seen.get(p) || 0;
      el.style.setProperty('--r-delay', i * 80 + 'ms');
      seen.set(p, i + 1);
    });
    function showInstant(el) {
      el.classList.remove('r-hidden');
      el.classList.add('r-instant');
    }
    function showAnimated(el) {
      el.classList.remove('r-hidden');
      el.classList.add('r-in');
    }
    function revealAll(instant) {
      targets.forEach(function (el) {
        if (el.classList.contains('r-in') || el.classList.contains('r-instant')) return;
        instant ? showInstant(el) : showAnimated(el);
      });
    }
    if (reduce) {
      return;
    } // motion off → leave everything in its visible base state

    // hide all targets up front
    targets.forEach(function (el) {
      el.classList.add('r-hidden');
    });
    var io = null;
    if ('IntersectionObserver' in window) {
      io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) {
            var el = en.target;
            motionLive ? showAnimated(el) : showInstant(el);
            io.unobserve(el);
          }
        });
      }, {
        rootMargin: '0px 0px -8% 0px',
        threshold: 0.08
      });
      targets.forEach(function (el) {
        io.observe(el);
      });
    } else {
      revealAll(!motionLive);
    }

    // Failsafe A: clock clearly frozen → reveal instantly, fast.
    setTimeout(function () {
      if (!motionLive) revealAll(true);
    }, 220);
    // Failsafe B: ultimate backstop — force EVERY target visible with no
    // transition, after the staggered entrance would have finished in a live
    // browser. In a live browser the animation is already done (no-op); in a
    // frozen/backgrounded tab this guarantees nothing is ever stuck hidden.
    setTimeout(function () {
      targets.forEach(function (el) {
        el.classList.add('r-instant');
      });
    }, 1500);
    // Failsafe C: on first scroll, make sure in-view items are shown even if IO lagged.
    window.addEventListener('scroll', function onF() {
      revealVisible();
      window.removeEventListener('scroll', onF);
    }, {
      passive: true
    });
    function revealVisible() {
      var vh = window.innerHeight || document.documentElement.clientHeight;
      targets.forEach(function (el) {
        if (el.classList.contains('r-in') || el.classList.contains('r-instant')) return;
        var r = el.getBoundingClientRect();
        if (r.top < vh && r.bottom > 0) {
          motionLive ? showAnimated(el) : showInstant(el);
          if (io) io.unobserve(el);
        }
      });
    }
  }

  /* ---- 2. Count-up numerals --------------------------------- */
  function setupCountUp() {
    var nodes = [];
    document.querySelectorAll('.ss-metric__value, .bench__ms').forEach(function (el) {
      var tn = el.firstChild;
      if (tn && tn.nodeType === 3 && /\d/.test(tn.nodeValue)) nodes.push(tn);
    });
    if (!nodes.length) return;
    function run(tn) {
      if (!motionLive) return; // never replace the real number when the clock is frozen
      var raw = tn.nodeValue;
      var m = raw.match(/^(\s*[^\d-]*)(-?[\d,]*\.?\d+)(.*)$/);
      if (!m) return;
      var prefix = m[1],
        numStr = m[2].replace(/,/g, ''),
        suffix = m[3];
      var target = parseFloat(numStr);
      if (!isFinite(target)) return;
      var dec = (numStr.split('.')[1] || '').length;
      var dur = 1000,
        start = null;
      function fmt(v) {
        return prefix + (dec ? v.toFixed(dec) : Math.round(v).toLocaleString()) + suffix;
      }
      function tick(ts) {
        if (start === null) start = ts;
        var p = Math.min((ts - start) / dur, 1);
        var e = 1 - Math.pow(1 - p, 3);
        tn.nodeValue = fmt(target * e);
        if (p < 1) requestAnimationFrame(tick);else tn.nodeValue = raw;
      }
      tn.nodeValue = fmt(0);
      requestAnimationFrame(tick);
      // safety: restore the true value no matter what
      setTimeout(function () {
        tn.nodeValue = raw;
      }, dur + 600);
    }
    if (reduce || !('IntersectionObserver' in window)) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          run(en.target.__tn);
          io.unobserve(en.target);
        }
      });
    }, {
      threshold: 0.6
    });
    nodes.forEach(function (tn) {
      var host = tn.parentNode;
      host.__tn = tn;
      io.observe(host);
    });
  }

  /* ---- 3. Hero cursor parallax ------------------------------ */
  function setupParallax() {
    if (reduce || !finePointer) return;
    var hero = document.querySelector('.hero');
    if (!hero) return;
    var gem = hero.querySelector('.hero__gem');
    var blobs = hero.querySelectorAll('.glow-blob');
    blobs.forEach(function (b) {
      b.dataset.baseTransform = b.style.transform || '';
    });
    var tx = 0,
      ty = 0,
      cx = 0,
      cy = 0,
      raf = null;
    hero.addEventListener('pointermove', function (e) {
      var r = hero.getBoundingClientRect();
      tx = ((e.clientX - r.left) / r.width - 0.5) * 2; // -1..1
      ty = ((e.clientY - r.top) / r.height - 0.5) * 2;
      if (!raf) raf = requestAnimationFrame(loop);
    });
    hero.addEventListener('pointerleave', function () {
      tx = 0;
      ty = 0;
      if (!raf) raf = requestAnimationFrame(loop);
    });
    function loop() {
      cx += (tx - cx) * 0.08;
      cy += (ty - cy) * 0.08;
      if (gem) gem.style.transform = 'translate(' + cx * 14 + 'px,' + cy * 12 + 'px)';
      blobs.forEach(function (b, i) {
        var k = (i + 1) * 10;
        b.style.transform = (b.dataset.baseTransform || '') + ' translate(' + cx * k + 'px,' + cy * k + 'px)';
      });
      if (Math.abs(tx - cx) > 0.002 || Math.abs(ty - cy) > 0.002) raf = requestAnimationFrame(loop);else raf = null;
    }
  }

  /* ---- 4. Card cursor spotlight ----------------------------- */
  function setupSpotlight() {
    if (reduce || !finePointer) return;
    var cards = document.querySelectorAll('.pillar, .tool, .bench__chart, .inst__card');
    cards.forEach(function (card) {
      card.classList.add('has-spot');
      card.addEventListener('pointermove', function (e) {
        var r = card.getBoundingClientRect();
        card.style.setProperty('--spot-x', e.clientX - r.left + 'px');
        card.style.setProperty('--spot-y', e.clientY - r.top + 'px');
      });
    });
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/anim.js", error: String((e && e.message) || e) }); }

// ui_kits/website/icons.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/*
 * Lucide icons (MIT) — the Seekstone icon system.
 * Curated subset, inlined as React components so they tint via
 * currentColor and need no network. Stroke width 2, round caps —
 * the Obsidian-compatible line style.
 */

const P = {
  search: ['M21 21l-4.34-4.34', 'M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z'],
  fileText: ['M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z', 'M14 2v5h6', 'M9 13h6', 'M9 17h6', 'M9 9h1'],
  list: ['M8 6h13', 'M8 12h13', 'M8 18h13', 'M3 6h.01', 'M3 12h.01', 'M3 18h.01'],
  tag: ['M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z', 'M7 7h.01'],
  listTree: ['M21 12h-8', 'M21 6H8', 'M21 18h-8', 'M3 6v4c0 1.1.9 2 2 2h3', 'M3 10v6c0 1.1.9 2 2 2h3'],
  link: ['M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71', 'M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71'],
  calendar: ['M8 2v4', 'M16 2v4', 'M3 10h18', 'M21 6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z'],
  filePlus: ['M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z', 'M14 2v5h6', 'M12 11v6', 'M9 14h6'],
  trash: ['M3 6h18', 'M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2', 'M10 11v6', 'M14 11v6'],
  move: ['M5 3a2 2 0 0 0-2 2', 'M19 3a2 2 0 0 1 2 2', 'M21 19a2 2 0 0 1-2 2', 'M5 21a2 2 0 0 1-2-2', 'M9 3h1', 'M9 21h1', 'M14 3h1', 'M14 21h1', 'M3 9v1', 'M21 9v1', 'M3 14v1', 'M21 14v1'],
  filePen: ['M12.5 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8.5L20 7.5V12', 'M14 2v5h6', 'M21.378 15.626a1 1 0 1 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z'],
  braces: ['M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5a2 2 0 0 0 2 2h1', 'M16 3h1a2 2 0 0 1 2 2v5a2 2 0 0 0 2 2 2 2 0 0 0-2 2v5a2 2 0 0 1-2 2h-1'],
  replace: ['M14 4a2 2 0 0 1 2-2', 'M16 10a2 2 0 0 1-2-2', 'M20 2a2 2 0 0 1 2 2', 'M22 8a2 2 0 0 1-2 2', 'm3 7 3 3 3-3', 'M6 10V5a3 3 0 0 1 3-3', 'M7 21a4 4 0 0 1-4-4v-4a2 2 0 0 0-2-2 2 2 0 0 0 2-2'],
  calendarPlus: ['M8 2v4', 'M16 2v4', 'M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7', 'M3 10h18', 'M16 19h6', 'M19 16v6'],
  zap: ['M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'],
  shield: ['M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z'],
  hardDrive: ['M22 12H2', 'M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z', 'M6 16h.01', 'M10 16h.01'],
  gauge: ['M12 14 8.5 9.5', 'M21 12a9 9 0 1 0-18 0', 'M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z'],
  arrowRight: ['M5 12h14', 'm13 6 6 6-6 6'],
  chevronDown: ['m6 9 6 6 6-6'],
  star: ['M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.726 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.49 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z'],
  sparkles: ['M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z', 'M20 3v4', 'M22 5h-4', 'M4 17v2', 'M5 18H3'],
  package: ['M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z', 'M3.3 7 12 12l8.7-5', 'M12 22V12'],
  github: ['M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4', 'M9 18c-4.51 2-5-2-7-2'],
  terminal: ['m4 17 6-6-6-6', 'M12 19h8'],
  download: ['M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4', 'M7 10l5 5 5-5', 'M12 15V3'],
  check: ['M20 6 9 17l-5-5'],
  lock: ['M19 11a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2z', 'M7 11V7a5 5 0 0 1 10 0v4'],
  database: ['M12 8c4.97 0 9-1.34 9-3s-4.03-3-9-3-9 1.34-9 3 4.03 3 9 3Z', 'M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5', 'M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3'],
  plug: ['M12 22v-5', 'M9 8V2', 'M15 8V2', 'M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z']
};
function Icon({
  name,
  size = 20,
  strokeWidth = 2,
  className = '',
  style = {},
  ...rest
}) {
  const paths = P[name] || P.search;
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: className,
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: style,
    "aria-hidden": "true"
  }, rest), paths.map((d, i) => /*#__PURE__*/React.createElement("path", {
    key: i,
    d: d
  })));
}
if (typeof window !== 'undefined') window.SS_Icon = Icon;
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/icons.jsx", error: String((e && e.message) || e) }); }

__ds_ns.GemMark = __ds_scope.GemMark;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CodeBlock = __ds_scope.CodeBlock;

__ds_ns.Metric = __ds_scope.Metric;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Icon = __ds_scope.Icon;

})();
