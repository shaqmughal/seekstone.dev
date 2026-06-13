import React from 'react';

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

export function Metric({
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
	const cls = [
		'ss-metric',
		accent !== 'default' ? `ss-metric--${accent}` : '',
		`ss-metric--${size}`,
		center ? 'ss-metric--center' : '',
		className,
	].filter(Boolean).join(' ');

	return (
		<div className={cls} {...rest}>
			<span className="ss-metric__value">
				{value}
				{unit && <span className="ss-metric__unit">{unit}</span>}
			</span>
			{label && <span className="ss-metric__label">{label}</span>}
			{sub && <span className="ss-metric__sub">{sub}</span>}
		</div>
	);
}
