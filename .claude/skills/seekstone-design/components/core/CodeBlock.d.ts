import React from 'react';

export interface CodeBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The code / command text. */
  code: string;
  /** Show a leading violet `$` shell prompt. @default false */
  prompt?: boolean;
  /** Title shown in the window chrome bar. */
  title?: React.ReactNode;
  /** Show macOS-style window chrome (three dots + title). @default false */
  chrome?: boolean;
  /** Show the one-click copy button. @default true */
  copy?: boolean;
}

/**
 * Terminal-style command / code surface with one-click copy — the install moment.
 * @startingPoint section="Core" subtitle="Install command with copy button" viewport="640x160"
 */
export function CodeBlock(props: CodeBlockProps): JSX.Element;
