The primary action control — use `primary` for the single main CTA on a surface, `secondary` for adjacent actions, `ghost` for low-emphasis/nav actions, and `spark` (amber) sparingly for a delight moment like "Try it now".

```jsx
<Button variant="primary" size="lg" iconRight={<ChevronRight/>}>Get Seekstone</Button>
<Button variant="secondary" href="https://github.com/shaqmughal/seekstone">Star on GitHub</Button>
```

Notes:
- Renders an `<a>` automatically when `href` is set; otherwise a `<button>`. Override with `as`.
- One primary per view. Don't combine `spark` with `primary` side-by-side — spark is the exception, not a second CTA.
- `iconLeft` / `iconRight` take any inline SVG (Lucide icons recommended). Keep labels short and in sentence case.
