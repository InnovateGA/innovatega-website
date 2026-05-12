type Scale =
  | "display"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "lead"
  | "body"
  | "small"
  | "mono";

type Props = {
  label: string;
  scale: Scale;
  size: string;
  family: "display" | "sans" | "mono";
  sample: string;
  className?: string;
};

const fontClass = {
  display: "font-display",
  sans: "font-sans",
  mono: "font-mono",
} as const;

const sizeClass: Record<Scale, string> = {
  display: "text-display",
  h1: "text-h1",
  h2: "text-h2",
  h3: "text-h3",
  h4: "text-h4",
  lead: "text-lead",
  body: "text-body",
  small: "text-small",
  mono: "text-mono",
};

export function TypeSpecimen({ label, scale, size, family, sample, className }: Props) {
  return (
    <div
      className={`grid grid-cols-1 gap-3 py-6 sm:grid-cols-[10rem_1fr] sm:items-baseline sm:gap-8 ${className ?? ""}`}
    >
      <div className="space-y-1">
        <div className="font-mono text-mono uppercase tracking-[0.18em] text-ink-subtle">
          {label}
        </div>
        <div className="font-mono text-mono text-ink-muted">{size}</div>
      </div>
      <div className={`${fontClass[family]} ${sizeClass[scale]} text-ink`}>{sample}</div>
    </div>
  );
}
