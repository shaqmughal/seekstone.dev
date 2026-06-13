import React from 'react';

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

export function Card({
	variant = 'default',
	interactive = false,
	padding = 'md',
	as: Tag = 'div',
	className = '',
	children,
	...rest
}) {
	const cls = [
		'ss-card',
		variant !== 'default' ? `ss-card--${variant}` : '',
		interactive ? 'ss-card--interactive' : '',
		padding !== 'md' ? `ss-card--pad-${padding}` : '',
		className,
	].filter(Boolean).join(' ');

	return (
		<Tag className={cls} {...rest}>
			{children}
		</Tag>
	);
}
