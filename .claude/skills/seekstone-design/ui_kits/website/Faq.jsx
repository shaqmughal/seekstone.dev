/* Faq — accordion of the questions that unblock a download. */
const FIcon = window.SS_Icon;

const FAQS = [
  ['Does the Obsidian app need to be running?', 'No. Seekstone reads the vault folder directly from disk. Obsidian can be open or closed — it never has to be running.'],
  ['Do I need the Local REST API plugin?', "No. Seekstone bypasses it entirely — that's the source of the ~575× payload reduction. No plugins are required at all."],
  ['Which AI clients does it support?', 'Any client that speaks the Model Context Protocol over stdio — Claude Desktop, Claude Code, Cursor, Windsurf, Continue, and more.'],
  ['Is it safe to use on my vault?', 'Seekstone only modifies files when you explicitly call a write tool. It makes no network requests, and the vault path is sandboxed — no tool can read or write outside it.'],
  ['Does it work on Windows?', 'Yes. Seekstone is tested on macOS, Linux, and Windows in CI on every commit.'],
  ['How big a vault can it handle?', 'It has been profiled against vaults with thousands of notes. The in-memory index is a few MB and starts in a few seconds.'],
];

function FaqItem({ q, a, open, onToggle }) {
  return (
    <div className={'faq__item' + (open ? ' is-open' : '')}>
      <button className="faq__q" onClick={onToggle} aria-expanded={open}>
        <span>{q}</span>
        <FIcon name="chevronDown" size={18} className="faq__chev" />
      </button>
      <div className="faq__a-wrap"><div className="faq__a">{a}</div></div>
    </div>
  );
}

function Faq() {
  const [open, setOpen] = React.useState(0);
  return (
    <section className="section" id="faq">
      <div className="container container--narrow">
        <div className="head head--center">
          <span className="eyebrow eyebrow--center"><FIcon name="sparkles" size={13} /> Good to know</span>
          <h2>Questions, answered.</h2>
        </div>
        <div className="faq__list">
          {FAQS.map(([q, a], i) => (
            <FaqItem key={i} q={q} a={a} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
          ))}
        </div>
      </div>
      <style>{`
        #faq .head { margin-bottom: 2.25rem; }
        .faq__list { display: flex; flex-direction: column; gap: 0.6rem; }
        .faq__item { border: 1px solid var(--border-default); border-radius: var(--radius-md); background: var(--surface); overflow: hidden; transition: border-color var(--dur-base); }
        .faq__item.is-open { border-color: var(--border-violet); }
        .faq__q { width: 100%; display: flex; align-items: center; justify-content: space-between; gap: 1rem; padding: 1.1rem 1.25rem; background: none; border: none; cursor: pointer; text-align: left; font-family: var(--font-sans); font-size: 1rem; font-weight: 600; color: var(--text-primary); }
        .faq__chev { color: var(--text-muted); transition: transform var(--dur-base) var(--ease-out), color var(--dur-base); flex: none; }
        .faq__item.is-open .faq__chev { transform: rotate(180deg); color: var(--violet-300); }
        .faq__a-wrap { display: grid; grid-template-rows: 0fr; transition: grid-template-rows var(--dur-base) var(--ease-out); }
        .faq__item.is-open .faq__a-wrap { grid-template-rows: 1fr; }
        .faq__a { overflow: hidden; padding: 0 1.25rem; font-size: 0.9375rem; line-height: 1.6; color: var(--text-secondary); }
        .faq__item.is-open .faq__a { padding-bottom: 1.2rem; }
      `}</style>
    </section>
  );
}
window.SS_Faq = Faq;
