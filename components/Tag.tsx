import * as React from "react";

type Variant = "default" | "accent" | "outline";

type Props = React.HTMLAttributes<HTMLSpanElement> & { variant?: Variant };

const styles: Record<Variant, string> = {
  default: "bg-transparent text-ink-muted border border-rule",
  accent: "bg-ink text-paper",
  outline: "bg-transparent text-ink border border-ink/40",
};

export function Tag({ variant = "default", className, ...rest }: Props) {
  return (
    <span
      className={`inline-flex items-center rounded-sm px-2 py-0.5 font-mono text-mono uppercase tracking-wider ${styles[variant]} ${className ?? ""}`}
      {...rest}
    />
  );
}
