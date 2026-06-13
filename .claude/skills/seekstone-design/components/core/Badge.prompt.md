A compact pill for status, counts, and metadata — license (`MIT`), tool counts (`16 tools`), versions, or a `fastest` winner tag.

```jsx
<Badge variant="success" dot>Fastest</Badge>
<Badge variant="violet" mono>v1.0.0</Badge>
<Badge variant="spark">MIT</Badge>
```

Notes:
- Use `mono` for anything numeric or package-like so it matches the codeblock/numeral language.
- `dot` is good for live status; `icon` accepts an inline SVG. Keep text to 1–2 words.
- `violet` = brand/neutral-positive, `spark` = highlight/delight, `success` = winner/fast, `danger` = destructive (e.g. `delete_note`).
