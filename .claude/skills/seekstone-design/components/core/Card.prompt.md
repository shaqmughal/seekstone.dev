Surface container for grouped content — feature blocks, tool cards, benchmark panels.

```jsx
<Card variant="glow" interactive>
  <h3>search</h3>
  <p>Ranked ~200-char excerpts, not full notes.</p>
</Card>
```

Variants:
- `default` for most grids; `raised` for popovers / hero-floating panels; `sunken` for code wells; `glow` for the one hero/feature card you want to draw the eye to (violet gradient edge).
- Set `interactive` on clickable cards to get the lift + violet ring on hover. Compose freely — cards just provide the surface, you bring the content (and other components).
