import Image from "next/image";
import { asset } from "@/lib/assetPath";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Eyebrow } from "@/components/Eyebrow";
import { Button } from "@/components/Button";
import { CompanyCard } from "@/components/CompanyCard";
import { Divider } from "@/components/Divider";
import { companies } from "./companies";
import { principles } from "./manifesto";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        {/* Hero */}
        <section className="pt-8 pb-16 lg:pt-10 lg:pb-20">
          <div className="container-page">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-stretch">
              <div>
                <Eyebrow>A coalition for the good of General Aviation</Eyebrow>
                <h1 className="mt-4 text-h2 text-ink">
                  General Aviation deserves software that can be relied on.
                </h1>

                <p className="mt-6 text-lead font-normal text-ink-muted">
                  AI is changing how software gets built. But pilots, operators, and airfields
                  don&rsquo;t need more software. They need better software. Reliable,
                  purposeful, built to a standard worth trusting and providing value.
                </p>

                <p className="mt-6 text-lead font-normal text-ink-muted">
                  InnovateGA is a coalition of small developers building the software and
                  products that General Aviation runs on. We&rsquo;re joining forces to commit
                  publicly to a shared set of values, hold each other to account, and make sure
                  the GA community gets tools that are genuinely fit for purpose.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
                  <Button href="#manifesto" variant="primary" size="md">
                    Read the manifesto →
                  </Button>
                  <Button href="#products" variant="link">
                    See our products
                  </Button>
                </div>
              </div>

              {/* Hero image */}
              <div className="aspect-[4/3] lg:aspect-auto lg:h-full">
                <div className="relative h-full w-full overflow-hidden rounded-md">
                  <Image
                    src={asset("/hero/airfield.jpg")}
                    alt="Two light aircraft parked on an airfield apron under a wide blue sky with scattered cloud."
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Manifesto */}
        <section id="manifesto" className="border-t border-rule section-y">
          <div className="container-page">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Left column — sticky title block */}
              <div className="lg:sticky lg:top-24 lg:self-start">
                <Eyebrow>The Manifesto</Eyebrow>
                <h2 className="mt-6 text-h2 text-ink">
                  A Manifesto for General Aviation
                </h2>
                <p className="mt-8 font-mono text-mono uppercase tracking-[0.2em] text-ink-subtle">
                  Est. May 2026
                </p>
              </div>

              {/* Right column — body */}
              <div>
                <p className="text-lead text-ink">
                  We are pilots, airfield operators, and developers. We fly, we operate, we
                  solve our own problems, and we share what we learn.
                </p>

                <div className="my-14">
                  <Divider />
                </div>

                {/* Principles */}
                <h3 className="text-h3 text-ink">Our Principles</h3>

                <div className="mt-10 space-y-8">
                  {principles.map((p) => (
                    <p key={p.title} className="text-body text-ink-muted">
                      <strong className="text-ink font-semibold">{p.title}</strong> {p.body}
                    </p>
                  ))}
                </div>

                <div className="my-14">
                  <Divider />
                </div>

                {/* Who we are */}
                <h3 className="text-h3 text-ink">Who We Are</h3>

                <ul className="mt-10 space-y-3 text-body text-ink-muted">
                  {companies.map((c) => (
                    <li key={c.name} className="flex gap-3">
                      <span aria-hidden className="select-none text-ink-subtle">·</span>
                      <span>
                        <strong className="text-ink font-semibold">{c.name}</strong> -{" "}
                        {c.tagline.replace(/\.$/, "")}
                      </span>
                    </li>
                  ))}
                </ul>

                <p className="mt-12 text-h3 text-ink">
                  Discover. Book. Fly. Log. Connect. Trade. Manage.
                </p>

                <p className="mt-6 text-body text-ink-muted">Built by the people who use it.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our products */}
        <section id="products" className="border-t border-rule section-y">
          <div className="container-page">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Left column — sticky title block */}
              <div className="lg:sticky lg:top-24 lg:self-start">
                <Eyebrow>Our Products</Eyebrow>
                <h2 className="mt-6 text-h2 text-ink">
                  Seven products. One standard.
                </h2>
                <p className="mt-6 text-body text-ink-muted">
                  Each one independent. Each one built by people passionate about general
                  aviation. By joining InnovateGA, they have commited to its principles in the
                  products they build.
                </p>
              </div>

              {/* Right column — list of products */}
              <div>
                <div className="grid gap-px border border-rule bg-rule">
                  {companies.map((c) => (
                    <CompanyCard key={c.name} company={c} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
