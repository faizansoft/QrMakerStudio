import React, { useEffect, useRef, useCallback } from 'react';

/**
 * Accessible dialog primitive.
 *
 * The app previously hand-rolled eight overlays (customize panel, auth, save
 * link, delete confirmations, QR preview). None of them closed on Escape,
 * trapped focus, exposed dialog semantics, or locked the page behind them —
 * so keyboard users could tab out of an open dialog into the page underneath,
 * screen readers announced nothing, and the background scrolled while a modal
 * was open. This centralises all of that.
 *
 * Usage:
 *   <Modal open={x} onClose={...} title="…" subtitle="…" size="lg">…</Modal>
 */

const SIZES = {
  sm: 'max-w-md',
  md: 'max-w-lg',
  lg: 'max-w-2xl',
  xl: 'max-w-4xl'
} as const;

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  /** Optional node rendered left of the title (icon chip). */
  icon?: React.ReactNode;
  size?: keyof typeof SIZES;
  /** Dark surface matches the generator widget; light suits page dialogs. */
  tone?: 'dark' | 'light';
  /** Sticky area pinned to the bottom of the dialog. */
  footer?: React.ReactNode;
  children: React.ReactNode;
}

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), summary, [tabindex]:not([tabindex="-1"])';

let openCount = 0;

/**
 * Dialog behaviour without the chrome: Escape to close, focus trapping,
 * background scroll lock and focus restore.
 *
 * Use this for the dialogs that already have bespoke markup worth keeping;
 * use <Modal> for new ones. Spread the returned props onto the panel element
 * so it also carries the correct ARIA roles.
 */
export function useDialogBehaviour(
  open: boolean,
  onClose: () => void,
  labelledById?: string
) {
  const panelRef = useRef<HTMLDivElement>(null);
  const restoreFocusTo = useRef<HTMLElement | null>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.stopPropagation();
        onClose();
        return;
      }
      if (e.key !== 'Tab' || !panelRef.current) return;
      const items = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE)
      ).filter((el) => el.offsetParent !== null);
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement as HTMLElement | null;
      if (e.shiftKey && (active === first || !panelRef.current.contains(active))) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (!open) return;
    restoreFocusTo.current = document.activeElement as HTMLElement | null;
    document.addEventListener('keydown', handleKeyDown, true);
    openCount += 1;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const timer = window.setTimeout(() => {
      const target =
        panelRef.current?.querySelector<HTMLElement>(FOCUSABLE) ?? panelRef.current;
      target?.focus();
    }, 0);
    return () => {
      window.clearTimeout(timer);
      document.removeEventListener('keydown', handleKeyDown, true);
      openCount = Math.max(0, openCount - 1);
      if (openCount === 0) document.body.style.overflow = previousOverflow;
      restoreFocusTo.current?.focus?.();
    };
  }, [open, handleKeyDown]);

  return {
    /** Attach to the backdrop element. */
    backdropProps: {
      onMouseDown: (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) onClose();
      }
    },
    /** Attach to the dialog panel element. */
    panelProps: {
      ref: panelRef,
      role: 'dialog' as const,
      'aria-modal': true,
      'aria-labelledby': labelledById,
      tabIndex: -1
    }
  };
}

export const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  title,
  subtitle,
  icon,
  size = 'lg',
  tone = 'dark',
  footer,
  children
}) => {
  const panelRef = useRef<HTMLDivElement>(null);
  const titleId = useRef(`modal-title-${Math.random().toString(36).slice(2, 9)}`).current;
  const restoreFocusTo = useRef<HTMLElement | null>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.stopPropagation();
        onClose();
        return;
      }
      if (e.key !== 'Tab' || !panelRef.current) return;

      // Focus trap: cycle within the dialog rather than escaping to the page.
      const items = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE)
      ).filter((el) => el.offsetParent !== null);
      if (!items.length) return;

      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (e.shiftKey && (active === first || !panelRef.current.contains(active))) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (!open) return;

    restoreFocusTo.current = document.activeElement as HTMLElement | null;
    document.addEventListener('keydown', handleKeyDown, true);

    // Nested dialogs must not each restore scrolling on their own unmount.
    openCount += 1;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Move focus into the dialog so the next Tab starts inside it.
    const timer = window.setTimeout(() => {
      const target =
        panelRef.current?.querySelector<HTMLElement>(FOCUSABLE) ?? panelRef.current;
      target?.focus();
    }, 0);

    return () => {
      window.clearTimeout(timer);
      document.removeEventListener('keydown', handleKeyDown, true);
      openCount = Math.max(0, openCount - 1);
      if (openCount === 0) document.body.style.overflow = previousOverflow;
      restoreFocusTo.current?.focus?.();
    };
  }, [open, handleKeyDown]);

  if (!open) return null;

  const dark = tone === 'dark';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-3 backdrop-blur-sm sm:p-5"
      onMouseDown={(e) => {
        // Close on backdrop click, but not when a drag started inside the panel.
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        className={`flex max-h-[92vh] w-full ${SIZES[size]} flex-col overflow-hidden rounded-panel shadow-2xl outline-none ${
          dark ? 'border border-white/15 bg-slate-900' : 'border border-line bg-white'
        }`}
      >
        <header
          className={`flex items-center justify-between gap-4 px-6 py-4 ${
            dark ? 'border-b border-white/10 bg-white/[0.03]' : 'border-b border-line bg-surface-subtle'
          }`}
        >
          <div className="flex min-w-0 items-center gap-3">
            {icon}
            <div className="min-w-0">
              <h2
                id={titleId}
                className={`truncate text-base font-semibold ${dark ? 'text-white' : 'text-ink'}`}
              >
                {title}
              </h2>
              {subtitle && (
                <p className={`truncate text-xs ${dark ? 'text-slate-400' : 'text-ink-soft'}`}>
                  {subtitle}
                </p>
              )}
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${
              dark
                ? 'bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white'
                : 'bg-slate-100 text-ink-soft hover:bg-slate-200 hover:text-ink'
            }`}
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </header>

        <div className="min-h-0 flex-1 overflow-y-auto">{children}</div>

        {footer && (
          <footer
            className={`px-6 py-4 ${
              dark ? 'border-t border-white/10 bg-white/[0.03]' : 'border-t border-line bg-surface-subtle'
            }`}
          >
            {footer}
          </footer>
        )}
      </div>
    </div>
  );
};

export default Modal;
