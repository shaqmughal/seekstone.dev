import React from 'react';

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

export function GemMark({
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
	const cls = [
		'ss-gem',
		glow ? 'ss-gem--glow' : '',
		animated ? 'ss-gem--spin' : '',
		className,
	].filter(Boolean).join(' ');

	return (
		<span
			className={cls}
			style={{ width: size, height: size, color: mono ? 'currentColor' : undefined, ...style }}
			{...rest}
		>
			<svg viewBox="0 0 96 96" role="img" aria-label="Seekstone">
				{mono ? (
					<g fill="currentColor">
						<polygon points="48,10 16,40 48,52" fillOpacity="0.85" />
						<polygon points="48,10 80,40 48,52" fillOpacity="1" />
						<polygon points="16,40 48,52 48,86" fillOpacity="0.68" />
						<polygon points="80,40 48,52 48,86" fillOpacity="0.5" />
						<polygon points="48,10 33,25 48,36 63,25" fillOpacity="0.95" />
					</g>
				) : (
					<g>
						<polygon points="48,10 16,40 48,52" fill="var(--violet-400, #9a7dff)" />
						<polygon points="48,10 80,40 48,52" fill="var(--violet-500, #7c5cff)" />
						<polygon points="16,40 48,52 48,86" fill="var(--violet-600, #6344e0)" />
						<polygon points="80,40 48,52 48,86" fill="var(--violet-700, #4c2fb8)" />
						<polygon points="48,10 33,25 48,36 63,25" fill="var(--violet-300, #b8a6ff)" />
					</g>
				)}
				{spark && (
					<path
						className="ss-gem__spark"
						d="M80,4 l2.2,5.8 5.8,2.2 -5.8,2.2 -2.2,5.8 -2.2,-5.8 -5.8,-2.2 5.8,-2.2 z"
						fill="var(--amber-500, #f59e0b)"
					/>
				)}
			</svg>
		</span>
	);
}
