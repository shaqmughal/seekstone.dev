# Seekstone Design System — team skill

This folder is a **Claude Code Agent Skill**. Committed into the repo at
`.claude/skills/seekstone-design/`, it gives everyone on the team (and Claude Code)
the Seekstone brand system: colors, type, fonts, tokens, reusable components, the
full landing-page UI kit, and a copy-me landing template.

## Install it in this repo (one-time)

From the repo root:

```bash
mkdir -p .claude/skills
# copy this whole folder in, named exactly seekstone-design
cp -R /path/to/seekstone-design .claude/skills/seekstone-design
git add .claude/skills/seekstone-design
git commit -m "Add Seekstone design system as a Claude Code skill"
git push
```

Resulting layout:

```
<repo>/
  .claude/
    skills/
      seekstone-design/
        SKILL.md          ← entry point (must sit here)
        README.md         ← brand voice, colors, type, motion rules
        styles.css        ← the one stylesheet to link (@imports the tokens)
        tokens/           ← color / type / spacing / effects CSS variables
        components/       ← React primitives (Button, Card, Metric, GemMark, …)
        ui_kits/website/  ← the full landing page, factored into sections
        templates/        ← landing-page starter (one line to bind)
        assets/           ← gem logos, wordmarks, favicons
```

> Keep `SKILL.md` at the **top level** of `seekstone-design/` — Claude Code discovers
> skills by finding `SKILL.md` one level under `.claude/skills/`.

## Use it

Anyone with Claude Code open in this repo can invoke it:

- *"Use the seekstone-design skill to build a pricing section."*
- *"Design an OG image for the launch, on-brand."*
- *"Add a docs landing page using the Seekstone tokens."*

Claude Code reads `SKILL.md` → `README.md` → the tokens/components/assets and designs
on-brand, outputting either static HTML artifacts or production code.

## Notes

- **No build step.** Fonts load from Google Fonts (Inter + JetBrains Mono), icons from
  the Lucide CDN. The compiled runtime bundle `_ds_bundle.js` is included.
- **Editing the system.** The source of truth is this folder. Change a token in
  `tokens/`, a component in `components/`, etc., and commit — the team picks it up on pull.
- **Personal use instead of repo:** drop the same folder in `~/.claude/skills/` to use it
  across all your own projects.
