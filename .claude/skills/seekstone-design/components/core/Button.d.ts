import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. @default "primary" */
  variant?: 'primary' | 'secondary' | 'ghost' | 'spark';
  /** Size / height. @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Icon element (e.g. an inline SVG) before the label. */
  iconLeft?: React.ReactNode;
  /** Icon element after the label. */
  iconRight?: React.ReactNode;
  /** Stretch to full container width. @default false */
  block?: boolean;
  /** Override the rendered element (defaults to <a> when href is set, else <button>). */
  as?: React.ElementType;
  /** When set, renders as an anchor. */
  href?: string;
  children?: React.ReactNode;
}

/**
 * The primary action control for Seekstone surfaces.
 * @startingPoint section="Core" subtitle="Primary / secondary / ghost / spark buttons" viewport="520x120"
 */
export function Button(props: ButtonProps): JSX.Element;
