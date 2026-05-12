import * as React from "react";

type Props = React.HTMLAttributes<HTMLSpanElement> & {
  number?: string;
};

export function Eyebrow({ number, children, className, ...rest }: Props) {
  return (
    <span
      className={`inline-flex items-center gap-2 font-mono text-mono uppercase tracking-[0.18em] text-ink-subtle ${className ?? ""}`}
      {...rest}
    >
      {number && (
        <>
          <span aria-hidden className="text-ink">{number}</span>
          <span aria-hidden className="h-px w-6 bg-rule" />
        </>
      )}
      <span>{children}</span>
    </span>
  );
}
