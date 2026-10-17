import React from 'react';

/**
 * Renders the two inline markers allowed in tool-page copy:
 *   **bold**  -> <strong>
 *   `code`    -> <code>
 * Everything else is plain text, so translators never need to write JSX.
 */
export function renderInline(text: string): React.ReactNode[] {
  return text
    .split(/(\*\*[^*]+\*\*|`[^`]+`)/g)
    .filter((part) => part.length > 0)
    .map((part, i) => {
      if (part.startsWith('**')) return <strong key={i}>{part.slice(2, -2)}</strong>;
      if (part.startsWith('`')) return <code key={i} className="font-mono text-[0.92em] font-semibold text-accent">{part.slice(1, -1)}</code>;
      return <React.Fragment key={i}>{part}</React.Fragment>;
    });
}
