Terminal-style command surface with a one-click copy button — use it for every install/CLI command. This is the conversion moment, so make it inviting.

```jsx
<CodeBlock prompt code="npx -y obsidian-mcp-seekstone init" />
<CodeBlock chrome title="claude_desktop_config.json" copy code={json} />
```

Notes:
- Use `prompt` for single shell commands (adds the violet `$`); use `chrome` + `title` for multi-line config/file snippets.
- Copy is on by default and shows a green "Copied" confirmation. Keep commands copy-paste-ready (the canonical install is `npx -y obsidian-mcp-seekstone`).
