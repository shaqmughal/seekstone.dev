import React from 'react';

export interface GemMarkProps {
  /** Rendered width & height in px (square). @default 48 */
  size?: number;
  /** "color" = violet facets; "mono" = single-color via currentColor. @default "color" */
  variant?: 'color' | 'mono';
  /** Soft violet radial glow behind the gem. @default false */
  glow?: boolean;
  /** Show the amber spark accent. @default false */
  spark?: boolean;
  /** Gentle float + spark twinkle (respects prefers-reduced-motion). @default false */
  animated?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * The Seekstone faceted gemstone — the primary brand mark.
 * @startingPoint section="Brand" subtitle="The faceted gem logo, tintable & animatable" viewport="320x240"
 */
export function GemMark(props: GemMarkProps): JSX.Element;
