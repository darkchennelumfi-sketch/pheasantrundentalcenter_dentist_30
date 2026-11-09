import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  Clock,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getRelatedServices, getService, services } from "@/lib/services";
import { site } from "@/lib/site";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return { title: "Service not found" };
  }

  return {
    title: `${service.name} in Williston, ND`,
    description: service.summary,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.name} | Pheasant Run Dental Center`,
      description: service.summary,
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  const related = getRelatedServices(service);

  return (
    <>
      <section className="relative overflow-hidden border-b border-ink/10 pb-16 pt-10 lg:pb-24 lg:pt-14">
        <div className="pointer-events-none absolute -right-52 -top-40 size-[40rem] rounded-full border border-ink/[0.06]" />
        <div className="pointer-events-none absolute right-1/3 top-20 size-52 rounded-full bg-gold/15 blur-3xl" />
        <div className="container-x relative">
          <Reveal>
            <nav
              aria-label="Breadcrumb"
              className="flex flex-wrap items-center gap-2 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-ink-muted"
            >
              <Link href="/" className="transition-colors hover:text-oxblood">
                Home
              </Link>
              <span aria-hidden="true">/</span>
              <Link
                href="/services"
                className="transition-colors hover:text-oxblood"
              >
                Services
              </Link>
              <span aria-hidden="true">/</span>
              <span className="text-oxblood">{service.name}</span>
            </nav>
          </Reveal>

          <div className="mt-9 grid gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:gap-16">
            <div>
              <Reveal delay={0.04}>
                <Badge className="border-oxblood/15 bg-shell/55 text-oxblood">
                  <service.icon className="size-3.5" />
                  {service.eyebrow}
                </Badge>
                <h1 className="display-hero mt-6 max-w-3xl text-ink">
                  {service.name}
                </h1>
                <p className="mt-5 max-w-2xl font-display text-[1.6rem] italic leading-tight tracking-[-0.025em] text-oxblood/80">
                  {service.tagline}
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="lede mt-6 max-w-2xl">{service.intro}</p>
              </Reveal>
              <Reveal delay={0.16}>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button asChild size="lg">
                    <Link href="/contact">
                      Book a consultation
                      <ArrowUpRight />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a href={site.phoneHref}>
                      <Phone />
                      {site.phone}
                    </a>
                  </Button>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.12}>
              <aside className="lg:sticky lg:top-32">
                <div className="overflow-hidden rounded-[1.7rem] border border-ink/10 bg-shell/55">
                  <div className="border-b border-ink/10 bg-oxblood-deep px-6 py-5 text-shell">
                    <p className="eyebrow text-gold-soft">
                      <Sparkles className="size-3.5" />
                      At a glance
                    </p>
                    <p className="mt-2 font-display text-2xl tracking-[-0.03em]">
                      {service.shortName}
                    </p>
                  </div>
                  <dl className="divide-y divide-ink/10 px-6">
                    {service.meta.map((item) => (
                      <div
                        key={item.label}
                        className="flex items-baseline justify-between gap-4 py-4"
                      >
                        <dt className="text-[0.6rem] font-bold uppercase tracking-[0.16em] text-ink-muted">
                          {item.label}
                        </dt>
                        <dd className="text-right text-sm font-semibold text-ink">
                          {item.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                  <div className="space-y-3 border-t border-ink/10 p-5">
                    <Button asChild className="w-full">
                      <Link href="/contact">
                        Request an appointment
                        <ArrowUpRight />
                      </Link>
                    </Button>
                    <div className="grid gap-2 text-xs text-ink-muted">
                      <a
                        href={site.phoneHref}
                        className="focus-ring flex items-center gap-2 transition-colors hover:text-oxblood"
                      >
                        <Phone className="size-3.5 text-oxblood/70" />
                        {site.phone}
                      </a>
                      <Link
                        href={site.mapsUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="focus-ring flex items-start gap-2 transition-colors hover:text-oxblood"
                      >
                        <MapPin className="mt-0.5 size-3.5 shrink-0 text-oxblood/70" />
                        {site.address.line1}, {site.address.city},{" "}
                        {site.address.state} {site.address.zip}
                      </Link>
                      <span className="flex items-center gap-2">
                        <Clock className="size-3.5 text-oxblood/70" />
                        {site.hours}
                      </span>
                    </div>
                  </div>
                </div>
              </aside>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[0.28fr_0.72fr] lg:gap-16">
          <div className="hidden lg:block">
            <div className="sticky top-32">
              <p className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-ink-muted">
                On this page
              </p>
              <ol className="mt-4 space-y-2.5">
                {service.sections.map((section, index) => (
                  <li key={section.heading}>
                    <a
                      href={`#section-${index + 1}`}
                      className="focus-ring group flex items-baseline gap-3 text-sm text-ink-muted transition-colors hover:text-oxblood"
                    >
                      <span className="text-[0.6rem] font-bold tabular-nums text-ink-muted">
                        0{index + 1}
                      </span>
                      <span className="border-b border-transparent pb-0.5 transition-colors group-hover:border-oxblood/30">
                        {section.heading}
                      </span>
                    </a>
                  </li>
                ))}
              </ol>
              <Link
                href="/services"
                className="focus-ring mt-8 inline-flex items-center gap-2 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-ink-muted transition-colors hover:text-oxblood"
              >
                <ArrowLeft className="size-3.5" />
                All services
              </Link>
            </div>
          </div>

          <div className="max-w-3xl">
            {service.sections.map((section, index) => (
              <Reveal
                key={section.heading}
                delay={index * 0.03}
                className={
                  index === 0
                    ? ""
                    : "mt-12 border-t border-ink/10 pt-10 lg:mt-14 lg:pt-12"
                }
              >
                <article id={`section-${index + 1}`} className="scroll-mt-32">
                  <div className="flex items-baseline gap-4">
                    <span className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-oxblood/80">
                      0{index + 1}
                    </span>
                    <h2 className="font-display text-[1.85rem] leading-tight tracking-[-0.03em] text-ink sm:text-[2.15rem]">
                      {section.heading}
                    </h2>
                  </div>

                  <div className="prose-ritual mt-5 text-[0.98rem]">
                    {section.paragraphs?.map((paragraph) => (
                      <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                    ))}
                  </div>

                  {section.bullets ? (
                    section.ordered ? (
                      <ol className="mt-5 space-y-3">
                        {section.bullets.map((item, itemIndex) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 rounded-xl border border-ink/10 bg-shell/40 px-4 py-3 text-sm leading-6 text-ink-muted"
                          >
                            <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-oxblood/10 text-[0.62rem] font-bold text-oxblood">
                              {itemIndex + 1}
                            </span>
                            {item}
                          </li>
                        ))}
                      </ol>
                    ) : (
                      <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                        {section.bullets.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2.5 rounded-xl border border-ink/10 bg-shell/40 px-4 py-3 text-sm leading-6 text-ink-muted"
                          >
                            <Check className="mt-0.5 size-4 shrink-0 text-oxblood/70" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )
                  ) : null}
                </article>
              </Reveal>
            ))}

            {service.image ? (
              <Reveal className="mt-12 border-t border-ink/10 pt-10">
                <div className="flex flex-col items-start gap-5 rounded-[1.5rem] border border-ink/10 bg-shell/45 p-6 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-[0.6rem] font-bold uppercase tracking-[0.18em] text-ink-muted">
                      Financing partner
                    </p>
                    <Image
                      src={service.image.src}
                      alt={service.image.alt}
                      width={service.image.width}
                      height={service.image.height}
                      className="mt-3 h-12 w-auto object-contain"
                    />
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {service.externalLinks?.map((link, index) => (
                      <Button
                        key={link.label}
                        asChild
                        variant={index === 0 ? "default" : "outline"}
                      >
                        <Link href={link.href} target="_blank" rel="noreferrer">
                          {link.label}
                          <ArrowUpRight />
                        </Link>
                      </Button>
                    ))}
                  </div>
                </div>
              </Reveal>
            ) : null}

            {service.externalLinks && !service.image ? (
              <div className="mt-10 flex flex-wrap gap-3">
                {service.externalLinks.map((link, index) => (
                  <Button
                    key={link.label}
                    asChild
                    variant={index === 0 ? "default" : "outline"}
                  >
                    <Link href={link.href} target="_blank" rel="noreferrer">
                      {link.label}
                      <ArrowUpRight />
                    </Link>
                  </Button>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </section>

      {related.length > 0 ? (
        <section className="border-t border-ink/10 bg-shell/30 py-16 lg:py-20">
          <div className="container-x">
            <div className="flex items-end justify-between gap-6">
              <div>
                <p className="eyebrow text-oxblood">Keep exploring</p>
                <h2 className="display-card mt-3">Related treatments</h2>
              </div>
              <Link
                href="/services"
                className="focus-ring hidden items-center gap-1.5 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-ink-muted transition-colors hover:text-oxblood sm:flex"
              >
                All services
                <ArrowUpRight className="size-3.5" />
              </Link>
            </div>
            <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/services/${item.slug}`}
                  className="focus-ring group flex items-center justify-between gap-4 rounded-2xl border border-ink/10 bg-bone/70 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-oxblood/25 hover:bg-shell"
                >
                  <span className="flex items-center gap-3">
                    <span className="flex size-9 items-center justify-center rounded-full bg-oxblood/8 text-oxblood">
                      <item.icon className="size-4" />
                    </span>
                    <span className="text-sm font-semibold text-ink">
                      {item.name}
                    </span>
                  </span>
                  <ArrowUpRight className="size-4 text-ink-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-oxblood" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="relative overflow-hidden bg-oxblood py-16 text-shell lg:py-20">
        <div className="pointer-events-none absolute -right-32 -top-40 size-[30rem] rounded-full border border-shell/10" />
        <div className="container-x relative flex flex-col items-start justify-between gap-7 lg:flex-row lg:items-center">
          <div>
            <p className="eyebrow text-gold-soft">Ready when you are</p>
            <h2 className="display-card mt-3 max-w-xl">
              Have a question about {service.name.toLowerCase()}? Let&apos;s talk.
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="light">
              <Link href="/contact">
                Book a visit
                <ArrowUpRight />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-shell/25 text-shell hover:border-shell/50 hover:bg-shell/10"
            >
              <a href={site.phoneHref}>
                <Phone />
                {site.phone}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
