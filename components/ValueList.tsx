type Item = { left: string; right: string };

type Props = {
  items: Item[];
  className?: string;
};

export function ValueList({ items, className }: Props) {
  return (
    <ul className={`flex flex-col border-y border-rule divide-y divide-rule ${className ?? ""}`}>
      {items.map((it, i) => (
        <li
          key={i}
          className="grid grid-cols-1 gap-2 py-6 sm:grid-cols-[1fr_auto_1fr] sm:items-baseline sm:gap-8"
        >
          <span className="font-display text-h3 text-ink">{it.left}</span>
          <span className="font-mono text-mono uppercase tracking-[0.2em] text-ink-subtle sm:text-center">
            over
          </span>
          <span className="text-body text-ink-subtle sm:text-right">{it.right}</span>
        </li>
      ))}
    </ul>
  );
}
