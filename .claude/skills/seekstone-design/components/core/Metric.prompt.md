The signature stat device — a big monospace numeral that carries Seekstone's benchmark story. Reach for this whenever a number is the point.

```jsx
<Metric value="575×" label="smaller payloads" accent="gradient" size="xl" center />
<Metric value="1.4" unit="ms" label="warm search latency" accent="green" />
<Metric value="16" label="tools" accent="violet" />
```

Notes:
- The value is always set in JetBrains Mono with tabular figures — keep it terse (`575×`, not "575 times smaller").
- `accent="gradient"` (violet→amber) is the hero treatment; use it for the single biggest number on a page. `green` reads as "fastest/winner".
- Group several at `size="md"` for a stat row; use `size="xl" center` for a single hero figure.
