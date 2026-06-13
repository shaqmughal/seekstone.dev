/* Footer — closing CTA band + footer links. */
const { Button: FBtn, GemMark: FGem, Badge: FBadge } = window.SeekstoneDesignSystem_a9cecb;
const FtIcon = window.SS_Icon;

function Footer() {
  return (
    <footer className="ftr">
      {/* Closing CTA band */}
      <section className="section cta">
        <div className="grid-bg"></div>
        <div className="glow-blob" style={{ width: 560, height: 360, bottom: -120, left: '50%', transform: 'translateX(-50%)', background: 'radial-gradient(circle, rgba(124,92,255,0.32), transparent 65%)' }}></div>
        <div className="container relativ cta__inner">
          <FGem size={64} glow spark animated />
          <h2 className="cta__title">It's your time to <span className="cta__grad">seek.</span></h2>
          <p className="cta__sub">Free and open source under MIT. Give Claude millisecond access to your vault — and your context window back.</p>
          <div className="cta__btns">
            <FBtn variant="primary" size="lg" href="#install" iconRight={<FtIcon name="arrowRight" size={17} />}>Get Seekstone</FBtn>
            <FBtn variant="secondary" size="lg" href="https://github.com/shaqmughal/seekstone" target="_blank" rel="noreferrer" iconLeft={<FtIcon name="github" size={17} />}>View source</FBtn>
          </div>
        </div>
      </section>

      <hr className="divider" />

      <div className="container ftr__inner">
        <div className="ftr__brand">
          <a className="ftr__lockup" href="#top"><FGem size={26} spark /><span>Seekstone</span></a>
          <p className="ftr__tag">The fastest Obsidian MCP server for Claude.</p>
          <div className="ftr__badges">
            <FBadge variant="spark">MIT</FBadge>
            <FBadge variant="neutral" mono>v1.0</FBadge>
          </div>
        </div>
        <div className="ftr__cols">
          <div className="ftr__col">
            <span className="ftr__h">Product</span>
            <a href="#benchmark">Benchmarks</a>
            <a href="#tools">Tools</a>
            <a href="#install">Install</a>
            <a href="#faq">FAQ</a>
          </div>
          <div className="ftr__col">
            <span className="ftr__h">Packages</span>
            <a href="https://www.npmjs.com/package/obsidian-mcp-seekstone" target="_blank" rel="noreferrer">npm · obsidian-mcp-seekstone</a>
            <a href="https://www.npmjs.com/package/seekstone" target="_blank" rel="noreferrer">npm · seekstone</a>
            <a href="https://github.com/shaqmughal/seekstone" target="_blank" rel="noreferrer">GitHub</a>
          </div>
          <div className="ftr__col">
            <span className="ftr__h">Domains</span>
            <a href="https://seekstone.dev" target="_blank" rel="noreferrer">seekstone.dev</a>
            <a href="https://getseekstone.com" target="_blank" rel="noreferrer">getseekstone.com</a>
            <a href="https://bestobsidianmcp.com" target="_blank" rel="noreferrer">bestobsidianmcp.com</a>
          </div>
        </div>
      </div>

      <div className="container ftr__bottom">
        <span>© 2026 Seekstone · MIT License</span>
        <span className="ftr__made">Built for <a href="https://obsidian.md" target="_blank" rel="noreferrer">Obsidian</a> + <a href="https://modelcontextprotocol.io" target="_blank" rel="noreferrer">MCP</a></span>
      </div>

      <style>{`
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
      `}</style>
    </footer>
  );
}
window.SS_Footer = Footer;
