import React from 'react';

export interface TabItem {
  /** Stable id, returned by onChange and matched against value. */
  id: string;
  /** Visible label. */
  label: React.ReactNode;
  /** Optional leading icon (inline SVG). */
  icon?: React.ReactNode;
}

export interface TabsProps {
  /** The tabs to render. */
  items: TabItem[];
  /** Controlled active id. Omit for uncontrolled. */
  value?: string;
  /** Initial active id when uncontrolled. Defaults to the first item. */
  defaultValue?: string;
  /** Fired with the newly-selected id. */
  onChange?: (id: string) => void;
  /** Stretch the tab list to full width with equal tabs. @default false */
  full?: boolean;
  /** Render the panel body for the active id. */
  renderPanel?: (activeId: string) => React.ReactNode;
  children?: React.ReactNode;
}

/**
 * Segmented switcher — install methods and any "pick one" surface.
 * @startingPoint section="Core" subtitle="Segmented tab switcher" viewport="640x180"
 */
export function Tabs(props: TabsProps): JSX.Element;
