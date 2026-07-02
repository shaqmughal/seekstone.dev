/* Install — up and running in 30 seconds. Method switcher with real commands. */
const { Card: ICard, Button: IBtn, Badge: IBadge, Tabs: ITabs, CodeBlock: ICode, GemMark: IGem } = window.SeekstoneDesignSystem_a9cecb;
const IIcon = window.SS_Icon;

const CONFIG_JSON = `{
  "mcpServers": {
    "seekstone": {
      "command": "npx",
      "args": ["-y", "seekstone"],
      "env": { "SEEKSTONE_VAULT": "/path/to/your/vault" }
    }
  }
}`;

function Steps({ items }) {
  return (
    <ol className="inst__steps">
      {items.map((s, i) => (
        <li key={i} className="inst__step"><span className="inst__num">{i + 1}</span><span>{s}</span></li>
      ))}
    </ol>
  );
}

function Install() {
  const panels = {
    oneclick: (
      <div className="inst__panel">
        <Steps items={[
          <span>Download <code>seekstone.mcpb</code> from GitHub Releases.</span>,
          <span>Open it with Claude Desktop — double-click in Finder.</span>,
          <span>Pick your Obsidian vault when prompted. Done.</span>,
        ]} />
        <div className="inst__row">
          <IBtn variant="spark" href="https://github.com/shaqmughal/seekstone/releases/latest" target="_blank" rel="noreferrer" iconLeft={<IIcon name="download" size={16} />}>Download .mcpb</IBtn>
          <span className="inst__note">No terminal · no Node.js required</span>
        </div>
      </div>
    ),
    cli: (
      <div className="inst__panel">
        <p className="inst__lead">Auto-detects your vault, validates it, and patches Claude Desktop for you.</p>
        <ICode prompt code="npx -y seekstone init" />
        <span className="inst__note">Add <code>--write</code> to patch in place, or <code>--vault</code> to choose.</span>
      </div>
    ),
    code: (
      <div className="inst__panel">
        <p className="inst__lead">One command configures Claude Code end-to-end.</p>
        <ICode chrome title="Terminal" code={'claude mcp add seekstone \\\n  --env SEEKSTONE_VAULT=/path/to/vault \\\n  -- npx -y seekstone'} />
      </div>
    ),
    manual: (
      <div className="inst__panel">
        <p className="inst__lead">Paste into <code>claude_desktop_config.json</code> (Settings → Developer).</p>
        <ICode chrome title="claude_desktop_config.json" code={CONFIG_JSON} />
      </div>
    ),
  };

  return (
    <section className="section" id="install">
      <div className="glow-blob" style={{ width: 520, height: 520, top: '-5%', left: '50%', transform: 'translateX(-50%)', background: 'radial-gradient(circle, rgba(124,92,255,0.18), transparent 65%)' }}></div>
      <div className="container container--narrow relativ">
        <div className="head head--center">
          <span className="eyebrow eyebrow--center"><IIcon name="terminal" size={13} /> 30 seconds to first search</span>
          <h2>Pick your way in.</h2>
          <p>Two npm names, one server. Works with Claude Desktop, Claude Code, Cursor, Windsurf — any MCP-over-stdio client.</p>
        </div>

        <ICard variant="raised" padding="lg" className="inst__card">
          <ITabs
            full
            items={[
              { id: 'oneclick', label: 'One-click' },
              { id: 'cli', label: 'Guided CLI' },
              { id: 'code', label: 'Claude Code' },
              { id: 'manual', label: 'Manual' },
            ]}
            renderPanel={(id) => panels[id]}
          />
        </ICard>

        <div className="inst__pkgs">
          <span className="inst__pkglabel">Installs as</span>
          <IBadge variant="violet" mono icon={<IIcon name="package" size={12} />}>seekstone</IBadge>
          <IBadge variant="outline" mono>Node ≥ 22</IBadge>
        </div>
      </div>

      <style>{`
        #install .head { margin-bottom: 2.25rem; }
        .inst__card { margin-top: 0.5rem; }
        .inst__panel { display: flex; flex-direction: column; gap: 1.1rem; padding-top: 0.25rem; }
        .inst__lead { margin: 0; font-size: 0.9375rem; color: var(--text-secondary); }
        .inst__lead code, .inst__note code, .inst__step code { font-family: var(--font-mono); font-size: 0.85em; color: var(--violet-200); background: var(--accent-soft); padding: 0.1em 0.4em; border-radius: 5px; }
        .inst__steps { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 0.85rem; }
        .inst__step { display: flex; align-items: flex-start; gap: 0.75rem; font-size: 0.9375rem; line-height: 1.5; color: var(--text-secondary); }
        .inst__num { flex: none; width: 24px; height: 24px; display: grid; place-items: center; border-radius: 50%; font-family: var(--font-mono); font-size: 0.75rem; font-weight: 700; color: var(--violet-200); background: var(--accent-soft); border: 1px solid rgba(124,92,255,0.3); margin-top: 1px; }
        .inst__row { display: flex; align-items: center; gap: 1rem; flex-wrap: wrap; }
        .inst__note { font-size: 0.8125rem; color: var(--text-muted); }
        .inst__pkgs { display: flex; align-items: center; justify-content: center; flex-wrap: wrap; gap: 0.6rem; margin-top: 1.75rem; }
        .inst__pkglabel { font-size: 0.8125rem; color: var(--text-faint); margin-right: 0.2rem; }
      `}</style>
    </section>
  );
}
window.SS_Install = Install;
