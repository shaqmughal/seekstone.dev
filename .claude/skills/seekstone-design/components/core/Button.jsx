import React from 'react';

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

export function Button({
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
	const cls = [
		'ss-btn',
		`ss-btn--${variant}`,
		size !== 'md' ? `ss-btn--${size}` : '',
		block ? 'ss-btn--block' : '',
		className,
	].filter(Boolean).join(' ');

	return (
		<Tag className={cls} {...rest}>
			{iconLeft && <span className="ss-btn__icon">{iconLeft}</span>}
			{children}
			{iconRight && <span className="ss-btn__icon">{iconRight}</span>}
		</Tag>
	);
}
