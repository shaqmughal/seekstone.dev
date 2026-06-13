Segmented control for "pick one of a few" — built for the install-method switcher (One-click / Guided CLI / Claude Code / Manual).

```jsx
<Tabs
  items={[{id:'cli',label:'Guided CLI'},{id:'code',label:'Claude Code'},{id:'manual',label:'Manual'}]}
  renderPanel={(id) => <CodeBlock prompt code={COMMANDS[id]} />}
/>
```

Notes:
- Works controlled (`value` + `onChange`) or uncontrolled (`defaultValue`). Pass `renderPanel` to swap content per tab, or just place your own conditional `children` below the list.
- `full` makes equal-width tabs that fill the row. Keep labels to 1–2 words; an optional `icon` per item is supported.
