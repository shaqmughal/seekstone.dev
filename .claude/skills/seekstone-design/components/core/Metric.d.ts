import React from 'react';

export interface MetricProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The headline figure, e.g. "575×", "1.4", "160×". */
  value: React.ReactNode;
  /** Small trailing unit, e.g. "ms", "tokens", "faster". */
  unit?: React.ReactNode;
  /** Label under the figure. */
  label?: React.ReactNode;
  /** Optional fine print under the label. */
  sub?: React.ReactNode;
  /** Numeral color. @default "default" */
  accent?: 'default' | 'violet' | 'spark' | 'green' | 'gradient';
  /** Numeral size. @default "lg" */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** Center-align the stack. @default false */
  center?: boolean;
}

/**
 * Big monospace benchmark numeral with unit + label — Seekstone's signature stat device.
 * @startingPoint section="Core" subtitle="Benchmark numerals (575×, 1.4 ms, 160×)" viewport="640x200"
 */
export function Metric(props: MetricProps): JSX.Element;
