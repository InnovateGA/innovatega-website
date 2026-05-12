import Link from "next/link";
import { Wordmark } from "./Wordmark";

const links = [
  { href: "/#manifesto", label: "Manifesto" },
  { href: "/#products", label: "Our Products" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-paper/85 backdrop-blur supports-[backdrop-filter]:bg-paper/75">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" aria-label="InnovateGA home" className="inline-flex items-center rounded-sm">
          <Wordmark />
        </Link>
        <nav aria-label="Primary">
          <ul className="flex items-center gap-1 sm:gap-2">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="rounded-sm px-3 py-2 text-small text-ink-muted transition hover:text-ink"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
