import Link from "next/link";
import { Wordmark } from "./Wordmark";

export function Footer() {
  const year = new Date().getFullYear();
  const showDesignSystem = process.env.NODE_ENV === "development";
  return (
    <footer className="bg-navy text-paper mt-16">
      <div className="container-page py-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="space-y-4 max-w-prose">
          <Wordmark variant="dark" className="!h-7" />
          <p className="text-small text-paper/60">
            A coalition of independent general aviation companies, building tools we use ourselves.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-small text-paper/60">
          {showDesignSystem && (
            <>
              <Link
                href="/design-system/"
                className="text-paper/70 underline underline-offset-[6px] decoration-paper/30 hover:text-paper hover:decoration-paper"
              >
                Design system
              </Link>
              <span aria-hidden className="text-paper/40">·</span>
            </>
          )}
          <span>© {year} InnovateGA</span>
        </div>
      </div>
    </footer>
  );
}
