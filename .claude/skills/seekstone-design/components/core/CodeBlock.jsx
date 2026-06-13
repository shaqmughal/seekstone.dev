import React from 'react';

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

const CopyIcon = () => (
	<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
		<rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
	</svg>
);
const CheckIcon = () => (
	<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
);

export function CodeBlock({
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
		try { navigator.clipboard?.writeText(code); } catch (e) { /* noop */ }
		setCopied(true);
		setTimeout(() => setCopied(false), 1600);
	};
	const cls = ['ss-code', chrome ? 'ss-code--bar' : '', className].filter(Boolean).join(' ');

	return (
		<div className={cls} {...rest}>
			{chrome && (
				<div className="ss-code__bar">
					<div className="ss-code__dots">
						<span className="ss-code__dot" style={{ background: '#3d3656' }} />
						<span className="ss-code__dot" style={{ background: '#3d3656' }} />
						<span className="ss-code__dot" style={{ background: '#3d3656' }} />
					</div>
					{title && <span className="ss-code__title">{title}</span>}
				</div>
			)}
			<div className="ss-code__body">
				{prompt && <span className="ss-code__prompt">$</span>}
				<code className="ss-code__text">{code}</code>
			</div>
			{copy && (
				<button className={`ss-code__copy${copied ? ' is-copied' : ''}`} onClick={onCopy} aria-label="Copy to clipboard">
					{copied ? <CheckIcon /> : <CopyIcon />}
					{copied ? 'Copied' : 'Copy'}
				</button>
			)}
		</div>
	);
}
