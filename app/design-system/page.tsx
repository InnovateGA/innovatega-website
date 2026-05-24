import type { Metadata } from "next";
import Image from "next/image";
import { asset } from "@/lib/assetPath";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Eyebrow } from "@/components/Eyebrow";
import { ColorSwatch } from "@/components/ColorSwatch";
import { TypeSpecimen } from "@/components/TypeSpecimen";
import { SpacingScale } from "@/components/SpacingScale";
import { Button } from "@/components/Button";
import { Tag } from "@/components/Tag";
import { Card } from "@/components/Card";
import { CompanyCard } from "@/components/CompanyCard";
import { PullQuote } from "@/components/PullQuote";
import { ValueList } from "@/components/ValueList";
import { Divider } from "@/components/Divider";
import { siteConfig } from "@/lib/siteConfig";
import { companies } from "@/app/companies";

export const metadata: Metadata = {
  alternates: {
    canonical: siteConfig.routes.designSystem,
  },
  description: "Tokens, typography, components, and motion for InnovateGA properties.",
  robots: {
    follow: false,
    index: false,
  },
  title: "Design System",
};

const sections = [
  { id: "logo", label: "Logo" },
  { id: "foundations", label: "Foundations" },
  { id: "colors", label: "Colors" },
  { id: "type", label: "Typography" },
  { id: "spacing", label: "Spacing" },
  { id: "layout", label: "Layout" },
  { id: "shape", label: "Radii, shadows, borders" },
  { id: "motion", label: "Motion" },
  { id: "components", label: "Components" },
];

const palette = [
  { name: "Ink", token: "--ink", hex: "#0B1B3A", usage: "Primary text, headings, primary buttons. Navy-tinted near-black.", textOn: "paper" as const },
  { name: "Ink muted", token: "--ink-muted", hex: "#4A5573", usage: "Body copy, supporting text. Slate-leaning.", textOn: "paper" as const },
  { name: "Ink subtle", token: "--ink-subtle", hex: "#7C869E", usage: "Captions, meta, eyebrows.", textOn: "paper" as const },
  { name: "Paper", token: "--paper", hex: "#FFFFFF", usage: "Page background. Pure white.", textOn: "ink" as const },
  { name: "Paper raised", token: "--paper-raised", hex: "#FAFBFD", usage: "Cards on hover, recessed sections.", textOn: "ink" as const },
  { name: "Rule", token: "--rule", hex: "#E2E5EC", usage: "Hairlines, dividers, all borders.", textOn: "ink" as const },
  { name: "Navy", token: "--navy", hex: "#051836", usage: "Brand surface. Footers, dark sections, the dark logo lockup.", textOn: "paper" as const },
  { name: "Navy deep", token: "--navy-deep", hex: "#03102A", usage: "Used over navy for contrast — captions, deeper sections.", textOn: "paper" as const },
  { name: "Cyan", token: "--cyan", hex: "#45C9F7", usage: "The single chromatic accent. Reserved for the logo dot and rare moments of emphasis on navy.", textOn: "ink" as const },
];

const radii = [
  { name: "sm", value: "4px" },
  { name: "md", value: "8px" },
  { name: "lg", value: "12px" },
  { name: "xl", value: "20px" },
];

export default function DesignSystem() {
  return (
    <>
      <Nav />
      <main id="main">
        {/* Hero */}
        <section className="section-y">
          <div className="container-page">
            <div className="max-w-prose">
              <Eyebrow number="DS">Design System</Eyebrow>
              <h1 className="mt-5 font-display text-display text-ink">
                The InnovateGA design system.
              </h1>
              <p className="mt-8 text-lead text-ink-muted">
                Tokens, type, components and motion that any InnovateGA property can adopt. The
                manifesto site is the first implementation. This page is the source of truth.
              </p>
            </div>

            <nav aria-label="On this page" className="mt-12 max-w-3xl">
              <ul className="grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-3">
                {sections.map((s, i) => (
                  <li key={s.id} className="flex items-baseline gap-3">
                    <span className="font-mono text-mono text-ink-subtle">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <a
                      className="text-body text-ink-muted underline-offset-4 hover:text-ink hover:underline"
                      href={`#${s.id}`}
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </section>

        {/* Logo */}
        <section id="logo" className="section-y border-t border-rule">
          <div className="container-page">
            <SectionHead number="01" eyebrow="Logo" title="The InnovateGA mark." />
            <p className="mt-6 max-w-prose text-body text-ink-muted">
              Two variants. Use the light wordmark on paper backgrounds. Reserve the dark
              wordmark with the cyan accent point for inverted surfaces &mdash; product splash
              screens, conference panels, dark UI shells.
            </p>

            <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-rule bg-rule lg:grid-cols-2">
              {/* Light variant — black wordmark on paper */}
              <figure className="bg-paper">
                <div className="flex aspect-[16/7] items-center justify-center px-12">
                  <Image
                    src={asset("/brand/innovatega-mark-light-v2.png")}
                    alt="InnovateGA wordmark, light variant"
                    width={1074}
                    height={153}
                    className="max-h-24 w-auto"
                  />
                </div>
                <figcaption className="border-t border-rule bg-paper-raised px-6 py-4 font-mono text-mono uppercase tracking-[0.2em] text-ink-subtle">
                  Light · on paper
                </figcaption>
              </figure>

              {/* Dark variant — white wordmark + cyan dot on brand navy */}
              <figure className="bg-navy">
                <div className="flex aspect-[16/7] items-center justify-center px-12">
                  <Image
                    src={asset("/brand/innovatega-mark-dark-v2.png")}
                    alt="InnovateGA wordmark, dark variant"
                    width={1046}
                    height={150}
                    className="max-h-24 w-auto"
                  />
                </div>
                <figcaption className="border-t border-navy-deep bg-navy-deep px-6 py-4 font-mono text-mono uppercase tracking-[0.2em] text-paper/60">
                  Dark · on navy
                </figcaption>
              </figure>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              <div className="rounded-lg border border-rule bg-paper-raised p-6">
                <div className="font-mono text-mono uppercase tracking-[0.18em] text-ink-subtle">
                  Construction
                </div>
                <p className="mt-3 text-body text-ink-muted">
                  Word-spaced lockup: <code className="font-mono text-mono text-ink">Innovate</code>{" "}
                  in a regular weight, <code className="font-mono text-mono text-ink">GA</code> in
                  a heavier weight as the locked monogram.
                </p>
              </div>
              <div className="rounded-lg border border-rule bg-paper-raised p-6">
                <div className="font-mono text-mono uppercase tracking-[0.18em] text-ink-subtle">
                  Accent point
                </div>
                <p className="mt-3 text-body text-ink-muted">
                  The square at the foot of the <code className="font-mono text-mono text-ink">A</code>{" "}
                  is the brand&apos;s only chromatic accent. Cyan only on the dark variant; never
                  on light.
                </p>
              </div>
              <div className="rounded-lg border border-rule bg-paper-raised p-6">
                <div className="font-mono text-mono uppercase tracking-[0.18em] text-ink-subtle">
                  Clear space
                </div>
                <p className="mt-3 text-body text-ink-muted">
                  Maintain at least the height of the cap as clear space on every side. Never
                  crop, recolour, or stretch the mark.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Foundations */}
        <section id="foundations" className="section-y border-t border-rule">
          <div className="container-page">
            <SectionHead number="02" eyebrow="Foundations" title="Brand voice." />
            <div className="mt-10 grid gap-10 lg:grid-cols-2">
              <div className="space-y-4 max-w-prose">
                <p className="text-lead text-ink">
                  An open letter, set on paper. Monochrome, calm, and unhurried.
                </p>
                <p className="text-body text-ink-muted">
                  The page should read like a printed letter, not a marketing site. White paper,
                  black ink, hairline rules. No accent colours, no decorative imagery, no
                  product-marketing flourishes. Whitespace is the loudest element on the page.
                </p>
              </div>
              <div className="space-y-4 max-w-prose">
                <p className="text-body text-ink-muted">
                  <strong className="text-ink font-semibold">A single typeface for everything</strong>
                  . Inter for headings and body, JetBrains Mono for technical accents. Hierarchy
                  comes from weight, size, tracking, and whitespace, never from face or colour.
                </p>
                <p className="text-body text-ink-muted">
                  <strong className="text-ink font-semibold">Restraint over expression.</strong> If
                  a rule, swatch, or icon doesn't serve the letter, it goes. Anything that signals
                  &ldquo;startup landing page&rdquo; should fail review.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Colors */}
        <section id="colors" className="section-y border-t border-rule">
          <div className="container-page">
            <SectionHead number="03" eyebrow="Color" title="Palette." />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {palette.map((c) => (
                <ColorSwatch key={c.token} {...c} />
              ))}
            </div>
          </div>
        </section>

        {/* Type */}
        <section id="type" className="section-y border-t border-rule">
          <div className="container-page">
            <SectionHead number="04" eyebrow="Typography" title="Type scale." />
            <div className="mt-8 grid gap-8 lg:grid-cols-2">
              <FaceCard
                label="Sans"
                family="Inter"
                role="Everything: headings, body, UI. Hierarchy via weight, size & tracking."
                fontClass="font-sans"
              />
              <FaceCard
                label="Mono"
                family="JetBrains Mono"
                role="Eyebrows, codes, technical labels. The one typographic accent."
                fontClass="font-mono"
              />
            </div>

            <div className="mt-12 divide-y divide-rule">
              <TypeSpecimen
                label="display"
                scale="display"
                size="clamp(2.5rem, 6vw, 4.5rem)"
                family="sans"
                sample="Built by the people who fly."
              />
              <TypeSpecimen
                label="h1"
                scale="h1"
                size="clamp(2rem, 4vw, 3rem)"
                family="sans"
                sample="A manifesto for general aviation."
              />
              <TypeSpecimen
                label="h2"
                scale="h2"
                size="clamp(1.5rem, 3vw, 2.25rem)"
                family="sans"
                sample="Through this work we have come to value."
              />
              <TypeSpecimen label="h3" scale="h3" size="1.5rem" family="sans" sample="Build what you use." />
              <TypeSpecimen label="h4" scale="h4" size="1.25rem" family="sans" sample="AirfieldFinder" />
              <TypeSpecimen
                label="lead"
                scale="lead"
                size="1.25rem"
                family="sans"
                sample="Pilots, airfield operators, and developers building the software that modern GA runs on."
              />
              <TypeSpecimen
                label="body"
                scale="body"
                size="1.0625rem"
                family="sans"
                sample="A tool that does one job brilliantly is worth more than one that promises the world and delivers a loading spinner."
              />
              <TypeSpecimen label="small" scale="small" size="0.875rem" family="sans" sample="Caption. Last updated 2026" />
              <TypeSpecimen label="mono" scale="mono" size="0.8125rem" family="mono" sample="EGTF · 09L · QFE 1013" />
            </div>
          </div>
        </section>

        {/* Spacing */}
        <section id="spacing" className="section-y border-t border-rule">
          <div className="container-page">
            <SectionHead number="05" eyebrow="Spacing" title="Spacing scale." />
            <p className="mt-4 max-w-prose text-body text-ink-muted">
              Tailwind's 4px-base scale, restricted to the steps below. Compose padding, gaps, and
              margins from these values only.
            </p>
            <div className="mt-10 max-w-3xl">
              <SpacingScale />
            </div>
          </div>
        </section>

        {/* Layout */}
        <section id="layout" className="section-y border-t border-rule">
          <div className="container-page">
            <SectionHead number="06" eyebrow="Layout" title="Containers & rhythm." />
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <Card>
                <h3 className="text-h4">Page container</h3>
                <p className="mt-2 text-body text-ink-muted">
                  <code className="font-mono text-mono">--container-page: 1200px</code>. Used for
                  cards, grids, and any non-prose content.
                </p>
                <div className="mt-4 h-3 rounded-sm bg-accent-soft" />
              </Card>
              <Card>
                <h3 className="text-h4">Prose container</h3>
                <p className="mt-2 text-body text-ink-muted">
                  <code className="font-mono text-mono">--container-prose: 68ch</code>. Used for
                  body copy and the manifesto. Optimises reading line-length.
                </p>
                <div className="mt-4 h-3 w-2/3 rounded-sm bg-accent-soft" />
              </Card>
              <Card>
                <h3 className="text-h4">Gutter</h3>
                <p className="mt-2 text-body text-ink-muted">
                  <code className="font-mono text-mono">clamp(1.25rem, 4vw, 4rem)</code> horizontal
                  padding on every container. Fluid across breakpoints.
                </p>
              </Card>
              <Card>
                <h3 className="text-h4">Section rhythm</h3>
                <p className="mt-2 text-body text-ink-muted">
                  <code className="font-mono text-mono">clamp(4rem, 10vw, 8rem)</code> vertical
                  padding between major sections. Hairlines separate them.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Shape */}
        <section id="shape" className="section-y border-t border-rule">
          <div className="container-page">
            <SectionHead number="07" eyebrow="Shape" title="Radii, shadows & borders." />

            <div className="mt-10">
              <h3 className="font-display text-h3">Radii</h3>
              <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-4">
                {radii.map((r) => (
                  <div key={r.name} className="space-y-2 text-center">
                    <div
                      className="aspect-square w-full bg-accent-soft border border-accent/20"
                      style={{ borderRadius: r.value }}
                    />
                    <div className="font-mono text-mono text-ink-muted">
                      {r.name} · {r.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              <div>
                <h3 className="font-display text-h3">Shadow</h3>
                <p className="mt-2 max-w-prose text-body text-ink-muted">
                  One soft elevation only. Used for hover states on cards.
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg border border-rule bg-paper-raised p-6 text-center">
                    <div className="font-mono text-mono text-ink-subtle">none</div>
                    <div className="mt-2 text-h4">Default</div>
                  </div>
                  <div className="rounded-lg border border-rule bg-paper-raised p-6 text-center shadow-card">
                    <div className="font-mono text-mono text-ink-subtle">shadow-card</div>
                    <div className="mt-2 text-h4">Elevated</div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-display text-h3">Borders & rules</h3>
                <p className="mt-2 max-w-prose text-body text-ink-muted">
                  1px hairlines using <code className="font-mono text-mono">--rule</code>. Avoid
                  heavier borders.
                </p>
                <div className="mt-6 space-y-4">
                  <Divider />
                  <Divider label="Signed" />
                  <div className="rounded-lg border border-rule bg-paper-raised p-4 font-mono text-mono text-ink-muted">
                    border · rounded-lg · paper-raised
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Motion */}
        <section id="motion" className="section-y border-t border-rule">
          <div className="container-page">
            <SectionHead number="08" eyebrow="Motion" title="Motion principles." />
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <Card>
                <h3 className="text-h4">Duration & easing</h3>
                <p className="mt-2 text-body text-ink-muted">
                  Default <code className="font-mono text-mono">150ms</code> with{" "}
                  <code className="font-mono text-mono">cubic-bezier(.2,.6,.2,1)</code>. Keep it
                  short. The manifesto reads, it doesn&apos;t dance.
                </p>
                <div className="mt-6">
                  <Button variant="primary">Hover me</Button>
                </div>
              </Card>
              <Card>
                <h3 className="text-h4">Reduced motion</h3>
                <p className="mt-2 text-body text-ink-muted">
                  All transitions and animations honour{" "}
                  <code className="font-mono text-mono">prefers-reduced-motion: reduce</code> and
                  shrink to ~0ms.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Components */}
        <section id="components" className="section-y border-t border-rule">
          <div className="container-page">
            <SectionHead number="09" eyebrow="Components" title="Components." />

            {/* Buttons */}
            <ComponentBlock title="Buttons" subtitle="4 variants × 3 sizes.">
              {(["sm", "md", "lg"] as const).map((size) => (
                <div key={size} className="flex flex-wrap items-center gap-3">
                  <span className="w-12 font-mono text-mono uppercase tracking-[0.18em] text-ink-subtle">
                    {size}
                  </span>
                  <Button variant="primary" size={size}>Primary</Button>
                  <Button variant="secondary" size={size}>Secondary</Button>
                  <Button variant="ghost" size={size}>Ghost</Button>
                  <Button variant="link">Link variant</Button>
                </div>
              ))}
            </ComponentBlock>

            {/* Tags */}
            <ComponentBlock title="Tags / Pills" subtitle="Mono microcopy. 3 variants.">
              <div className="flex flex-wrap gap-3">
                <Tag>Default</Tag>
                <Tag variant="accent">Accent</Tag>
                <Tag variant="outline">Outline</Tag>
                <Tag variant="accent">EGTF</Tag>
                <Tag>NOTAM</Tag>
              </div>
            </ComponentBlock>

            {/* Cards */}
            <ComponentBlock title="Card" subtitle="Surface for content blocks.">
              <div className="grid gap-6 sm:grid-cols-2">
                <Card>
                  <Tag variant="accent">Card</Tag>
                  <h4 className="mt-4 text-h4">A standard card.</h4>
                  <p className="mt-2 text-body text-ink-muted">
                    Hairline border, white surface, soft hover lift. Compose anything inside.
                  </p>
                </Card>
                <Card>
                  <h4 className="text-h4">Hover me.</h4>
                  <p className="mt-2 text-body text-ink-muted">
                    Cards lift 2px and pick up <code className="font-mono text-mono">shadow-card</code>{" "}
                    on hover.
                  </p>
                </Card>
              </div>
            </ComponentBlock>

            {/* Company card */}
            <ComponentBlock title="CompanyCard" subtitle="Card variant for the InnovateGA member directory.">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {companies.slice(0, 3).map((c) => (
                  <CompanyCard key={c.name} company={c} />
                ))}
              </div>
            </ComponentBlock>

            {/* Pull quote */}
            <ComponentBlock title="PullQuote" subtitle="For emphatic statements.">
              <PullQuote cite="The Manifesto">
                A tool that does one job brilliantly is worth more than one that promises the world
                and delivers a loading spinner.
              </PullQuote>
            </ComponentBlock>

            {/* Value list */}
            <ComponentBlock title="ValueList" subtitle="The signature manifesto pattern.">
              <ValueList
                items={[
                  { left: "Pilots and airfields", right: "platforms and profit margins" },
                  { left: "Working software", right: "feature wishlists" },
                ]}
              />
            </ComponentBlock>

            {/* Eyebrow + heading */}
            <ComponentBlock title="Eyebrow + heading" subtitle="Section-header pattern.">
              <div>
                <Eyebrow number="04">Section eyebrow</Eyebrow>
                <h2 className="mt-3 font-display text-h2 text-ink">
                  A heading sits beneath an eyebrow.
                </h2>
              </div>
            </ComponentBlock>

            {/* Divider */}
            <ComponentBlock title="Divider" subtitle="Plain and labelled variants.">
              <div className="space-y-6">
                <Divider />
                <Divider label="Signed" />
              </div>
            </ComponentBlock>

            {/* Inline mono */}
            <ComponentBlock title="Inline mono" subtitle="Code, runways, codes, identifiers.">
              <p className="text-body text-ink-muted">
                The aircraft <code className="font-mono text-mono text-ink">G-INVA</code> departed{" "}
                <code className="font-mono text-mono text-ink">EGTF</code> at{" "}
                <code className="font-mono text-mono text-ink">14:32</code> with QNH{" "}
                <code className="font-mono text-mono text-ink">1013</code>.
              </p>
            </ComponentBlock>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function SectionHead({
  number,
  eyebrow,
  title,
}: {
  number: string;
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="max-w-prose">
      <Eyebrow number={number}>{eyebrow}</Eyebrow>
      <h2 className="mt-5 font-display text-h1 text-ink">{title}</h2>
    </div>
  );
}

function FaceCard({
  label,
  family,
  role,
  fontClass,
}: {
  label: string;
  family: string;
  role: string;
  fontClass: string;
}) {
  return (
    <div className="rounded-lg border border-rule bg-paper-raised p-6">
      <div className="font-mono text-mono uppercase tracking-[0.18em] text-ink-subtle">{label}</div>
      <div className={`${fontClass} mt-3 text-[3rem] leading-none text-ink`}>Aa</div>
      <div className="mt-4 text-h4 text-ink">{family}</div>
      <p className="mt-2 text-small text-ink-muted">{role}</p>
    </div>
  );
}

function ComponentBlock({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-t border-rule py-12 first:border-t-0">
      <div className="mb-8 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
        <h3 className="font-display text-h3 text-ink">{title}</h3>
        <p className="text-small text-ink-muted">{subtitle}</p>
      </div>
      <div className="space-y-4">{children}</div>
    </div>
  );
}
