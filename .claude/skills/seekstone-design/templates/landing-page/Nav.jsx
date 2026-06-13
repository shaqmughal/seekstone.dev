/* Nav — sticky glass top bar with logo lockup, links, and CTAs. */
const { Button, Badge, GemMark } = window.SeekstoneDesignSystem_a9cecb;
const NavIcon = window.SS_Icon;

function Nav({ stars = '1.2k' }) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const root = document.querySelector('.ss-scroll') || window;
    const el = document.querySelector('.ss-scroll');
    const onScroll = () => setScrolled((el ? el.scrollTop : window.scrollY) > 8);
    root.addEventListener('scroll', onScroll, { passive: true });
    return () => root.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    ['Benchmarks', '#benchmark'],
    ['Tools', '#tools'],
    ['Install', '#install'],
    ['FAQ', '#faq'],
  ];

  return (
    <header className={'ss-nav' + (scrolled ? ' is-scrolled' : '')}>
      <div className="container ss-nav__inner">
        <a className="ss-nav__brand" href="#top">
          <GemMark size={30} spark />
          <span className="ss-nav__word">Seekstone</span>
        </a>
        <nav className="ss-nav__links hide-md">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="ss-nav__link">{label}</a>
          ))}
        </nav>
        <div className="ss-nav__actions">
          <a className="ss-nav__ghost hide-md" href="https://github.com/shaqmughal/seekstone" target="_blank" rel="noreferrer">
            <NavIcon name="github" size={16} />
            <span>{stars}</span>
          </a>
          <Button variant="primary" size="sm" href="#install" iconRight={<NavIcon name="arrowRight" size={15} />}>Get Seekstone</Button>
        </div>
      </div>
      <style>{`
        .ss-nav { position: sticky; top: 0; z-index: var(--z-nav); transition: background var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out), backdrop-filter var(--dur-base); border-bottom: 1px solid transparent; }
        .ss-nav.is-scrolled { background: var(--glass); backdrop-filter: var(--blur-md); -webkit-backdrop-filter: var(--blur-md); border-bottom-color: var(--border-subtle); }
        .ss-nav__inner { display: flex; align-items: center; justify-content: space-between; height: 64px; }
        .ss-nav__brand { display: inline-flex; align-items: center; gap: 0.6rem; text-decoration: none; }
        .ss-nav__word { font-weight: 600; font-size: 1.15rem; letter-spacing: -0.03em; color: var(--violet-100); }
        .ss-nav__links { display: flex; align-items: center; gap: 0.35rem; }
        .ss-nav__link { padding: 0.4rem 0.7rem; border-radius: var(--radius-sm); font-size: 0.875rem; font-weight: 500; color: var(--text-secondary); transition: color var(--dur-fast), background var(--dur-fast); }
        .ss-nav__link:hover { color: var(--text-primary); background: var(--surface-hover); }
        .ss-nav__actions { display: flex; align-items: center; gap: 0.6rem; }
        .ss-nav__ghost { display: inline-flex; align-items: center; gap: 0.4rem; height: 32px; padding: 0 0.7rem; border-radius: var(--radius-sm); font-family: var(--font-mono); font-size: 0.8125rem; color: var(--text-secondary); border: 1px solid var(--border-default); transition: all var(--dur-fast); }
        .ss-nav__ghost:hover { color: var(--text-primary); border-color: var(--border-violet); background: var(--surface-hover); }
      `}</style>
    </header>
  );
}
window.SS_Nav = Nav;
