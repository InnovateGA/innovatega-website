import * as React from "react";

type Props = React.HTMLAttributes<HTMLQuoteElement> & {
  cite?: string;
};

export function PullQuote({ cite, className, children, ...rest }: Props) {
  return (
    <figure className={`relative my-8 ${className ?? ""}`}>
      <span
        aria-hidden
        className="absolute -left-2 top-0 h-full w-px bg-ink"
      />
      <blockquote
        cite={cite}
        className="pl-6 font-display text-h2 text-ink"
        {...rest}
      >
        {children}
      </blockquote>
      {cite && (
        <figcaption className="pl-6 mt-3 font-mono text-mono uppercase tracking-[0.18em] text-ink-subtle">
          {cite}
        </figcaption>
      )}
    </figure>
  );
}
