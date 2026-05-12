type Props = {
  name: string;
  token: string;
  hex: string;
  usage: string;
  textOn?: "ink" | "paper";
};

export function ColorSwatch({ name, token, hex, usage, textOn = "ink" }: Props) {
  return (
    <div className="rounded-lg border border-rule bg-paper-raised overflow-hidden">
      <div
        className="aspect-[5/3] w-full"
        style={{ background: hex, color: textOn === "paper" ? "var(--paper)" : "var(--ink)" }}
      >
        <div className="h-full w-full p-4 flex items-end font-mono text-mono">{hex}</div>
      </div>
      <div className="p-4 space-y-1.5">
        <div className="flex items-center justify-between gap-2">
          <span className="text-body text-ink">{name}</span>
          <code className="font-mono text-mono text-ink-subtle">{token}</code>
        </div>
        <p className="text-small text-ink-muted">{usage}</p>
      </div>
    </div>
  );
}
