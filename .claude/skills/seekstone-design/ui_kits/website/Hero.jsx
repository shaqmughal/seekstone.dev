/* Hero — the centerpiece. Floating gem, headline, CTAs, install one-liner, trust strip. */
const { Button: HBtn, Badge: HBadge, GemMark: HGem, CodeBlock: HCode } = window.SeekstoneDesignSystem_a9cecb;
const HIcon = window.SS_Icon;

function Hero() {
  return (
    <section className="hero section--tight" id="top">
      <div className="grid-bg"></div>
      <div className="glow-blob" style={{ width: 620, height: 620, top: -260, left: '50%', transform: 'translateX(-50%)', background: 'radial-gradient(circle, rgba(124,92,255,0.45), transparent 65%)' }}></div>
      <div className="glow-blob" style={{ width: 360, height: 360, top: 40, left: '8%', background: 'radial-gradient(circle, rgba(245,158,11,0.16), transparent 65%)' }}></div>

      <div className="container relativ hero__inner">
        <span className="eyebrow eyebrow--center rise rise-1">
          <HIcon name="sparkles" size={13} /> Open source · MIT · Obsidian MCP
        </span>

        <div className="hero__gem rise rise-1">
          <HGem size={96} glow spark animated />
        </div>

        <h1 className="hero__title rise rise-2">
          Search your entire vault<br />in <span className="hero__grad">milliseconds.</span>
        </h1>

        <p className="hero__sub rise rise-3">
          Seekstone is the fastest Obsidian MCP server for Claude — filesystem-direct,
          no plugins, no app required. Searches return in <strong>1.4&nbsp;ms</strong> with
          <strong> ~575× smaller</strong> payloads, so Claude reads your whole note library
          without burning its context.
        </p>

        <div className="hero__cta rise rise-3">
          <HBtn variant="primary" size="lg" href="#install" iconRight={<HIcon name="download" size={17} />}>Get Seekstone</HBtn>
          <HBtn variant="secondary" size="lg" href="https://github.com/shaqmughal/seekstone" target="_blank" rel="noreferrer" iconLeft={<HIcon name="github" size={17} />}>Star on GitHub</HBtn>
        </div>

        <div className="hero__install rise rise-4">
          <HCode prompt code="npx -y obsidian-mcp-seekstone init" />
        </div>

        <div className="trust hero__trust rise rise-4">
          <span className="trust__item"><HIcon name="zap" size={15} /> 25–160× faster</span>
          <span className="trust__item"><HIcon name="plug" size={15} /> No plugins required</span>
          <span className="trust__item"><HIcon name="shield" size={15} /> No network calls</span>
          <span className="trust__item"><HIcon name="hardDrive" size={15} /> macOS · Linux · Windows</span>
        </div>
      </div>

      <style>{`
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
      `}</style>
    </section>
  );
}
window.SS_Hero = Hero;
