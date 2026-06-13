/* Benchmark — the proof. Hero stats + a latency comparison bar chart. */
const { Card: BCard, Badge: BBadge, Metric: BMetric } = window.SeekstoneDesignSystem_a9cecb;
const BIcon = window.SS_Icon;

const BENCH = [
  { name: 'Seekstone', arch: 'in-process index', ms: 2.4, you: true },
  { name: 'obsidian-mcp-server', arch: 'REST API', ms: 58 },
  { name: 'mcp-obsidian', arch: 'REST API', ms: 81 },
  { name: 'obsidian-mcp-pro', arch: 'fs subprocess', ms: 104 },
  { name: 'mcpvault', arch: 'fs subprocess', ms: 199 },
  { name: 'obsidian-mcp', arch: 'fs subprocess', ms: 219 },
];
const BMAX = 224;

function Benchmark() {
  const [lit, setLit] = React.useState(false);
  React.useEffect(() => {
    const t = setTimeout(() => setLit(true), 350);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="section" id="benchmark">
      <div className="container">
        <div className="head head--center">
          <span className="eyebrow eyebrow--center"><BIcon name="gauge" size={13} /> Benchmarked, not claimed</span>
          <h2>The only Obsidian MCP server<br />with <span className="grad">published numbers.</span></h2>
          <p>Measured against 5 popular servers on a real vault — 1,955 notes, 20 runs each. The harness is open source; run it on your own vault and verify every figure.</p>
        </div>

        <div className="bench__stats">
          <BCard variant="glow" padding="lg"><BMetric value="575×" label="smaller search payloads" sub="~3 KB vs ~1.75 MB via REST" accent="gradient" size="lg" /></BCard>
          <BCard padding="lg"><BMetric value="1.4" unit="ms" label="warm search latency" sub="p50, in-process index" accent="green" size="lg" /></BCard>
          <BCard padding="lg"><BMetric value="160×" label="faster than the slowest" sub="no subprocess, no HTTP" accent="violet" size="lg" /></BCard>
        </div>

        <BCard padding="lg" className="bench__chart">
          <div className="bench__chart-head">
            <span className="bench__chart-title">Warm search latency — median <span className="bench__lower">lower is better</span></span>
            <BBadge variant="neutral" mono>milliseconds</BBadge>
          </div>
          <div className="bench__rows">
            {BENCH.map((r) => (
              <div key={r.name} className={'bench__row' + (r.you ? ' is-you' : '')}>
                <div className="bench__label">
                  <span className="bench__name">{r.name}{r.you && <BBadge variant="success" dot>fastest</BBadge>}</span>
                  <span className="bench__arch">{r.arch}</span>
                </div>
                <div className="bench__track">
                  <div className="bench__bar" style={{ width: lit ? (Math.max(r.ms / BMAX * 100, 1.2)) + '%' : 0 }}></div>
                </div>
                <span className="bench__ms">{r.ms < 10 ? r.ms.toFixed(1) : r.ms}<span className="bench__unit">ms</span></span>
              </div>
            ))}
          </div>
        </BCard>
      </div>

      <style>{`
        #benchmark .head { margin-bottom: 3rem; }
        .bench__stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-bottom: 1rem; }
        .bench__chart-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.5rem; }
        .bench__chart-title { font-size: 0.9375rem; font-weight: 600; color: var(--text-primary); }
        .bench__lower { font-weight: 400; color: var(--text-faint); font-size: 0.8125rem; margin-left: 0.4rem; }
        .bench__rows { display: flex; flex-direction: column; gap: 0.85rem; }
        .bench__row { display: grid; grid-template-columns: 200px 1fr 64px; align-items: center; gap: 1rem; }
        .bench__label { display: flex; flex-direction: column; gap: 1px; min-width: 0; }
        .bench__name { display: inline-flex; align-items: center; gap: 0.5rem; font-family: var(--font-mono); font-size: 0.8125rem; color: var(--text-secondary); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .bench__row.is-you .bench__name { color: var(--text-primary); font-weight: 600; }
        .bench__arch { font-size: 0.6875rem; color: var(--text-faint); }
        .bench__track { height: 12px; background: var(--bg-sunken); border-radius: 999px; overflow: hidden; border: 1px solid var(--border-subtle); }
        .bench__bar { height: 100%; border-radius: 999px; background: linear-gradient(90deg, var(--neutral-600), var(--neutral-500)); transition: width 1.1s var(--ease-out); }
        .bench__row.is-you .bench__bar { background: var(--gradient-spark); box-shadow: 0 0 18px -2px rgba(124,92,255,0.7); }
        .bench__ms { font-family: var(--font-mono); font-size: 0.875rem; font-weight: 600; color: var(--text-secondary); text-align: right; font-feature-settings: 'zero'; }
        .bench__row.is-you .bench__ms { color: var(--green-400); }
        .bench__unit { font-size: 0.6875rem; color: var(--text-faint); margin-left: 1px; }
        @media (max-width: 720px) {
          .bench__stats { grid-template-columns: 1fr; }
          .bench__row { grid-template-columns: 130px 1fr 52px; gap: 0.6rem; }
          .bench__name { font-size: 0.75rem; }
        }
      `}</style>
    </section>
  );
}
window.SS_Benchmark = Benchmark;
