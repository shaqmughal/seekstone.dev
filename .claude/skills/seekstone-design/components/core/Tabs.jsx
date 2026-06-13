import React from 'react';

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

export function Tabs({
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
	const [internal, setInternal] = React.useState(
		defaultValue !== undefined ? defaultValue : (items[0] && items[0].id)
	);
	const active = isControlled ? value : internal;

	const select = (id) => {
		if (!isControlled) setInternal(id);
		onChange && onChange(id);
	};

	return (
		<div className={['ss-tabs', className].filter(Boolean).join(' ')} {...rest}>
			<div className={['ss-tabs__list', full ? 'ss-tabs__list--full' : ''].filter(Boolean).join(' ')} role="tablist">
				{items.map((it) => (
					<button
						key={it.id}
						role="tab"
						aria-selected={active === it.id}
						className="ss-tabs__tab"
						onClick={() => select(it.id)}
					>
						{it.icon && <span className="ss-tabs__icon">{it.icon}</span>}
						{it.label}
					</button>
				))}
			</div>
			{renderPanel ? renderPanel(active) : children}
		</div>
	);
}
