/* Tools — 16 tools, one warm index. Read/Write tab switcher over a card grid. */
const { Card: TCard, Badge: TBadge, Tabs: TTabs } = window.SeekstoneDesignSystem_a9cecb;
const TIcon = window.SS_Icon;

const READ = [
  ['search', 'search', 'Full-text search returning ranked ~200-char excerpts — not full notes.'],
  ['read_note', 'fileText', 'Read a note by path. Return a single section, block, or line range.'],
  ['list_notes', 'list', 'List notes, optionally filtered by folder prefix or tag.'],
  ['list_tags', 'tag', 'Every tag in the vault, sorted by usage count or alphabetically.'],
  ['outline_note', 'listTree', 'Heading & block structure — cheap navigation before a targeted read.'],
  ['get_backlinks', 'link', 'Find all notes that link to a given note.'],
  ['get_links', 'link', 'List all outgoing wikilinks and markdown links from a note.'],
  ['get_periodic_note', 'calendar', "Read any date's daily / weekly / monthly note — Obsidian closed."],
];
const WRITE = [
  ['create_note', 'filePlus', 'Create a note with optional frontmatter; parent dirs made for you.', false],
  ['append_note', 'filePen', 'Append text to a note body without ever touching frontmatter.', false],
  ['patch_frontmatter', 'braces', 'Edit YAML in place — key order, quote style and comments preserved.', false],
  ['patch_note', 'filePen', 'Insert text immediately after a heading, frontmatter untouched.', false],
  ['replace_in_note', 'replace', 'Replace the first occurrence of a phrase, with a dry-run preview.', false],
  ['move_note', 'move', 'Move or rename a note; destination directories created automatically.', false],
  ['append_periodic_note', 'calendarPlus', "Append to today's periodic note, creating it from a template.", false],
  ['delete_note', 'trash', 'Permanently delete a note. Irreversible — only when you ask.', true],
];

function ToolGrid({ items }) {
  return (
    <div className="tools__grid">
      {items.map(([name, icon, desc, danger]) => (
        <TCard key={name} className="tool" interactive padding="md">
          <div className={'tool__icon' + (danger ? ' tool__icon--danger' : '')}>
            <TIcon name={icon} size={18} />
          </div>
          <div className="tool__body">
            <code className="tool__name">{name}</code>
            <p className="tool__desc">{desc}</p>
          </div>
        </TCard>
      ))}
    </div>
  );
}

function Tools() {
  return (
    <section className="section" id="tools">
      <div className="container">
        <div className="head head--center">
          <span className="eyebrow eyebrow--center"><TIcon name="database" size={13} /> 16 tools · one warm index</span>
          <h2>Everything Claude needs<br />to <span className="grad">work your vault.</span></h2>
          <p>Read and write, link-graph and periodic notes — the broadest toolset of any Obsidian MCP server. Four capabilities no other tested server even ships.</p>
        </div>

        <div className="tools__tabswrap">
          <TTabs
            items={[{ id: 'read', label: 'Read · 8', icon: <TIcon name="search" size={15} /> }, { id: 'write', label: 'Write · 8', icon: <TIcon name="filePen" size={15} /> }]}
            renderPanel={(id) => <ToolGrid items={id === 'read' ? READ : WRITE} />}
          />
        </div>
      </div>

      <style>{`
        #tools .head { margin-bottom: 2.5rem; }
        .tools__tabswrap { display: flex; flex-direction: column; align-items: center; }
        .tools__tabswrap .ss-tabs { width: 100%; align-items: center; }
        .tools__grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; width: 100%; margin-top: 0.5rem; }
        .tool { gap: 0.85rem; }
        .tool__icon { width: 38px; height: 38px; display: grid; place-items: center; border-radius: 10px; color: var(--violet-300); background: var(--accent-soft); border: 1px solid rgba(124,92,255,0.25); flex: none; }
        .tool__icon--danger { color: var(--red-400); background: rgba(239,68,68,0.1); border-color: rgba(239,68,68,0.25); }
        .tool__name { font-family: var(--font-mono); font-size: 0.8125rem; font-weight: 600; color: var(--text-primary); }
        .tool__desc { margin: 0.35rem 0 0; font-size: 0.8125rem; line-height: 1.5; color: var(--text-muted); text-wrap: pretty; }
        @media (max-width: 1000px) { .tools__grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 560px) { .tools__grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}
window.SS_Tools = Tools;
