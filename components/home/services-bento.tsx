import Link from "next/link";
import { ArrowRight, ArrowUpRight, Asterisk } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { getService, services } from "@/lib/services";
import { cn } from "@/lib/utils";

const featureSlugs = [
  "dental-implants",
  "dental-crown",
  "root-canal",
  "dentures",
  "cosmetic-dentistry",
  "patient-financing",
] as const;

function ServiceCard({
  slug,
  index,
  dark = false,
  className,
}: {
  slug: string;
  index: number;
  dark?: boolean;
  className?: string;
}) {
  const service = getService(slug);
  if (!service) return null;

  return (
    <Link
      href={`/services/${service.slug}`}
      className={cn(
        "service-sheen focus-ring group relative flex h-full min-h-[15rem] flex-col justify-between overflow-hidden rounded-[1.6rem] border p-6 transition-all duration-500 hover:-translate-y-1 sm:p-7",
        dark
          ? "border-shell/12 bg-oxblood-deep text-shell shadow-[0_32px_80px_-50px_rgba(69,19,23,0.9)]"
          : "border-ink/10 bg-shell/55 text-ink hover:border-oxblood/25 hover:bg-shell/85",
        className,
      )}
    >
      <div className="relative z-10 flex items-start justify-between gap-4">
        <span
          className={cn(
            "flex size-11 items-center justify-center rounded-full border",
            dark
              ? "border-shell/18 bg-shell/10 text-gold-soft"
              : "border-ink/10 bg-bone/70 text-oxblood",
          )}
        >
          <service.icon className="size-[1.15rem]" />
        </span>
        <span
          className={cn(
            "text-[0.6rem] font-bold uppercase tracking-[0.2em]",
            dark ? "text-shell/65" : "text-ink-muted",
          )}
        >
          0{index + 1}
        </span>
      </div>

      <div className="relative z-10 mt-10">
        <p
          className={cn(
            "text-[0.6rem] font-bold uppercase tracking-[0.18em]",
            dark ? "text-gold-soft/75" : "text-oxblood/70",
          )}
        >
          {service.eyebrow}
        </p>
        <h3 className="display-card mt-2">{service.name}</h3>
        <p
          className={cn(
            "mt-3 max-w-md text-sm leading-6",
            dark ? "text-shell/62" : "text-ink-muted",
          )}
        >
          {service.summary}
        </p>
        <span
          className={cn(
            "mt-5 inline-flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-[0.16em]",
            dark ? "text-gold-soft" : "text-oxblood",
          )}
        >
          Explore treatment
          <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}

export function ServicesBento() {
  const remaining = services.filter(
    (service) => !featureSlugs.includes(service.slug as (typeof featureSlugs)[number]),
  );

  return (
    <section className="relative border-t border-ink/10 py-20 lg:py-28">
      <div className="container-x">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <p className="eyebrow text-oxblood">
              <Asterisk className="size-4" />
              Comprehensive dental services
            </p>
            <h2 className="display-section mt-5 max-w-2xl">
              Everything your smile needs,{" "}
              <span className="italic text-oxblood">under one roof.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Button asChild variant="outline">
              <Link href="/services">
                View all 11 services
                <ArrowRight />
              </Link>
            </Button>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-12">
          <Reveal className="md:col-span-7 md:row-span-2" delay={0.04}>
            <ServiceCard
              slug="dental-implants"
              index={0}
              dark
              className="min-h-[27rem]"
            />
          </Reveal>
          <Reveal className="md:col-span-5" delay={0.08}>
            <ServiceCard slug="dental-crown" index={1} className="min-h-[12.8rem]" />
          </Reveal>
          <Reveal className="md:col-span-5" delay={0.12}>
            <ServiceCard slug="root-canal" index={2} className="min-h-[12.8rem]" />
          </Reveal>
          <Reveal className="md:col-span-4" delay={0.16}>
            <ServiceCard slug="dentures" index={3} />
          </Reveal>
          <Reveal className="md:col-span-4" delay={0.2}>
            <ServiceCard slug="cosmetic-dentistry" index={4} />
          </Reveal>
          <Reveal className="md:col-span-4" delay={0.24}>
            <ServiceCard slug="patient-financing" index={5} dark />
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-col items-start gap-4 rounded-2xl border border-ink/10 bg-shell/35 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-ink-muted">
              Also at Pheasant Run
            </p>
            <div className="flex flex-wrap gap-2">
              {remaining.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="focus-ring rounded-full border border-ink/10 bg-bone/70 px-3.5 py-1.5 text-xs font-semibold text-ink-muted transition-colors hover:border-oxblood/30 hover:text-oxblood"
                >
                  {service.shortName}
                </Link>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
