The Seekstone faceted gem — the core brand mark; use it as a logo lockup element, hero centerpiece, favicon stand-in, or loading indicator.

```jsx
<GemMark size={64} glow spark animated />
```

Variants & props:
- `variant="color"` (default) renders the five violet facets; `variant="mono"` uses `currentColor` so it inherits text color — use mono on busy or single-color surfaces.
- `glow` adds a soft violet halo (good on the hero / dark panels). `spark` adds the amber sparkle. `animated` makes it gently float and twinkle.
- Pair with the wordmark text in a flex row to build the full logo lockup; keep at least its own width of clear space around it.
