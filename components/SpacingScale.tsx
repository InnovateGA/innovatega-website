const steps = [
  { token: "0", px: 0 },
  { token: "1", px: 4 },
  { token: "2", px: 8 },
  { token: "3", px: 12 },
  { token: "4", px: 16 },
  { token: "6", px: 24 },
  { token: "8", px: 32 },
  { token: "12", px: 48 },
  { token: "16", px: 64 },
  { token: "20", px: 80 },
  { token: "24", px: 96 },
  { token: "32", px: 128 },
];

export function SpacingScale() {
  return (
    <div className="rounded-lg border border-rule bg-paper-raised divide-y divide-rule">
      {steps.map((s) => (
        <div
          key={s.token}
          className="grid grid-cols-[5rem_4rem_1fr] items-center gap-4 px-4 py-3 sm:grid-cols-[6rem_5rem_1fr]"
        >
          <code className="font-mono text-mono text-ink">space-{s.token}</code>
          <span className="font-mono text-mono text-ink-muted">{s.px}px</span>
          <span aria-hidden className="block h-2 rounded-sm bg-ink" style={{ width: `${s.px}px`, maxWidth: "100%" }} />
        </div>
      ))}
    </div>
  );
}
