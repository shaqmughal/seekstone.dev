/* Pillars — three trust statements in Obsidian's "Your X is Y" voice. */
const { Card: PCard, GemMark: PGem } = window.SeekstoneDesignSystem_a9cecb;
const PIcon = window.SS_Icon;

const PILLARS = [
  ['zap', 'Your context is precious.', 'Most servers return full note content for every hit — megabytes your model has to read. Seekstone returns short ranked excerpts, so a query that cost 459,000 tokens costs about 800.'],
  ['shield', 'Your vault stays yours.', 'No Obsidian app, no Local REST API plugin, no cloud. Seekstone reads files straight from disk, makes zero network calls, and sends no telemetry. Writes only ever happen when you ask.'],
  ['hardDrive', 'Your files, forever.', 'Plain Markdown on your machine — nothing to lock you in. Frontmatter edits are byte-identical by design: key order, quote style and comments preserved, proven by the test harness.'],
];

function Pillars() {
  return (
    <section className="section section--tight pillars">
      <div className="glow-blob" style={{ width: 480, height: 480, top: '20%', right: '-10%', background: 'radial-gradient(circle, rgba(124,92,255,0.12), transparent 65%)' }}></div>
      <div className="container relativ">
        <div className="pillars__grid">
          {PILLARS.map(([icon, title, body]) => (
            <PCard key={title} padding="lg" className="pillar">
              <div className="pillar__icon"><PIcon name={icon} size={20} /></div>
              <h3 className="pillar__title">{title}</h3>
              <p className="pillar__body">{body}</p>
            </PCard>
          ))}
        </div>
      </div>
      <style>{`
        .pillars__grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.25rem; }
        .pillar { gap: 0.9rem; }
        .pillar__icon { width: 44px; height: 44px; display: grid; place-items: center; border-radius: 12px; color: var(--amber-300); background: var(--spark-soft); border: 1px solid rgba(245,158,11,0.22); }
        .pillar__title { margin: 0.3rem 0 0; font-size: 1.25rem; font-weight: 700; letter-spacing: -0.02em; color: var(--text-primary); }
        .pillar__body { margin: 0; font-size: 0.9375rem; line-height: 1.6; color: var(--text-secondary); text-wrap: pretty; }
        @media (max-width: 900px) { .pillars__grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}
window.SS_Pillars = Pillars;
