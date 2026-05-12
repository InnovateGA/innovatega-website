import * as React from "react";

type Variant = "primary" | "secondary" | "ghost" | "link";
type Size = "sm" | "md" | "lg";

type Props = {
  variant?: Variant;
  size?: Size;
  asChild?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href?: string;
  };

const base =
  "inline-flex items-center justify-center gap-2 rounded-md font-medium transition duration-150 ease-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-ink text-paper hover:bg-accent-strong",
  secondary:
    "bg-transparent text-ink border border-ink/30 hover:border-ink hover:bg-paper-raised",
  ghost:
    "bg-transparent text-ink hover:bg-paper-raised",
  link:
    "bg-transparent text-ink underline underline-offset-[6px] decoration-ink-subtle/60 hover:decoration-ink px-0 h-auto",
};

const sizes: Record<Size, string> = {
  sm: "h-8 px-3 text-small",
  md: "h-10 px-4 text-body",
  lg: "h-12 px-6 text-body",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  href,
  children,
  ...rest
}: Props) {
  const cls = `${base} ${variants[variant]} ${variant !== "link" ? sizes[size] : ""} ${className ?? ""}`;
  if (href) {
    return (
      <a href={href} className={cls} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}
