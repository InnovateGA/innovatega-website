import type { Company } from "@/app/companies";

export function CompanyCard({ company }: { company: Company }) {
  const isExternal = /^https?:\/\//.test(company.href);
  const linkProps = isExternal
    ? { target: "_blank" as const, rel: "noreferrer noopener" as const }
    : {};

  return (
    <article className="group flex flex-col bg-paper p-8 transition-colors duration-200 ease-soft hover:bg-paper-raised">
      <h3 className="text-h3 text-ink">{company.name}</h3>
      <p className="mt-3 text-body text-ink-muted">{company.tagline}</p>

      <a
        href={company.href}
        {...linkProps}
        className="mt-8 inline-flex items-center gap-2 self-start text-small text-ink underline underline-offset-[6px] decoration-ink-subtle/60 transition hover:decoration-ink"
        aria-label={`Visit ${company.name}${isExternal ? " (opens in a new tab)" : ""}`}
      >
        Visit {company.name}
        <svg
          aria-hidden
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          className="transition duration-200 ease-soft group-hover:translate-x-1"
        >
          <path
            d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </article>
  );
}
