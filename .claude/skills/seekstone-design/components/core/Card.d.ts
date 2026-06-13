import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  /** Elevation / treatment. @default "default" */
  variant?: 'default' | 'raised' | 'sunken' | 'glow';
  /** Lift + violet ring on hover (use for clickable cards). @default false */
  interactive?: boolean;
  /** Inner padding. @default "md" */
  padding?: 'none' | 'sm' | 'md' | 'lg';
  /** Render element. @default "div" */
  as?: React.ElementType;
  children?: React.ReactNode;
}

/**
 * Surface container for grouped content — feature cards, tool cards, panels.
 * @startingPoint section="Core" subtitle="Surface containers: default / raised / glow" viewport="640x220"
 */
export function Card(props: CardProps): JSX.Element;
