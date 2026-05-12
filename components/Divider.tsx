type Props = { className?: string; label?: string };

export function Divider({ className, label }: Props) {
  if (label) {
    return (
      <div className={`flex items-center gap-4 ${className ?? ""}`}>
        <span className="h-px flex-1 bg-rule" />
        <span className="font-mono text-mono uppercase tracking-[0.18em] text-ink-subtle">
          {label}
        </span>
        <span className="h-px flex-1 bg-rule" />
      </div>
    );
  }
  return <hr className={`h-px border-0 bg-rule ${className ?? ""}`} />;
}
