import React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Color role. @default "neutral" */
  variant?: 'violet' | 'spark' | 'success' | 'danger' | 'neutral' | 'outline';
  /** Use the monospace face (for versions, package names, counts). @default false */
  mono?: boolean;
  /** Leading status dot in the current color. @default false */
  dot?: boolean;
  /** Optional leading icon (inline SVG). */
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

/**
 * Compact pill for status, counts, license, and package metadata.
 * @startingPoint section="Core" subtitle="Status & metadata pills" viewport="520x90"
 */
export function Badge(props: BadgeProps): JSX.Element;
