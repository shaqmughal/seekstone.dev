import React from 'react';

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

export function Badge({
	variant = 'neutral',
	mono = false,
	dot = false,
	icon = null,
	className = '',
	children,
	...rest
}) {
	const cls = [
		'ss-badge',
		`ss-badge--${variant}`,
		mono ? 'ss-badge--mono' : '',
		className,
	].filter(Boolean).join(' ');

	return (
		<span className={cls} {...rest}>
			{dot && <span className="ss-badge__dot" />}
			{icon && <span className="ss-badge__icon">{icon}</span>}
			{children}
		</span>
	);
}
