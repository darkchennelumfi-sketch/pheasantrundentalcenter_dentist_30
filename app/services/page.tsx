import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Asterisk, Phone } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Cta } from "@/components/home/cta";
import { ServiceFilter } from "@/components/services/service-filter";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Dental Services in Williston, ND",
  description:
    "Explore preventive, restorative, and cosmetic dentistry at Pheasant Run Dental Center — crowns, bridges, implants, dentures, root canals, extractions, whitening, white fillings, and patient financing.",
  alternates: { canonical: "/services" },
};

const quickFacts = [
  { value: "11", label: "Treatment services" },
  { value: "3", label: "Dentists in practice" },
  { value: "5", label: "Days open each week" },
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-ink/10 pb-16 pt-12 lg:pb-24 lg:pt-16">
        <div className="pointer-events-none absolute -right-40 -top-52 size-[40rem] rounded-full border border-ink/[0.06]" />
        <div className="pointer-events-none absolute -left-40 bottom-0 size-[30rem] rounded-full bg-sage/15 blur-3xl" />
        <div className="container-x relative">
          <Reveal>
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-ink-muted"
            >
              <Link href="/" className="transition-colors hover:text-oxblood">
                Home
              </Link>
              <span aria-hidden="true">/</span>
              <span className="text-oxblood">Services</span>
            </nav>
          </Reveal>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <Reveal delay={0.05}>
                <p className="eyebrow text-oxblood">
                  <Asterisk className="size-4" />
                  Comprehensive dental services
                </p>
                <h1 className="display-hero mt-6 max-w-3xl text-ink">
                  Dentistry,{" "}
                  <span className="italic text-oxblood">without the guesswork.</span>
                </h1>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="lede mt-7 max-w-2xl">
                  From routine exams and cleanings to crowns, implants, root
                  canals, dentures, whitening, and beyond, our Williston practice
                  offers a wide range of quality dental services under one roof.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.18}>
              <div className="rounded-[1.5rem] border border-ink/10 bg-shell/50 p-5">
                <div className="grid grid-cols-3 divide-x divide-ink/10">
                  {quickFacts.map((fact) => (
                    <div key={fact.label} className="px-3 text-center first:pl-0 last:pr-0">
                      <p className="font-display text-3xl leading-none tracking-[-0.04em] text-oxblood">
                        {fact.value}
                      </p>
                      <p className="mt-2 text-[0.56rem] font-bold uppercase leading-4 tracking-[0.14em] text-ink-muted">
                        {fact.label}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-5 flex flex-col gap-2 border-t border-ink/10 pt-5 sm:flex-row">
                  <Button asChild size="sm" className="flex-1">
                    <Link href="/contact">
                      Book a visit
                      <ArrowUpRight />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="flex-1">
                    <a href={site.phoneHref}>
                      <Phone />
                      Call us
                    </a>
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container-x">
          <ServiceFilter />
        </div>
      </section>

      <section className="border-t border-ink/10 py-16 lg:py-20">
        <div className="container-x">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-6 rounded-[1.8rem] border border-ink/10 bg-shell/45 p-7 sm:flex-row sm:items-center lg:p-9">
              <div>
                <p className="eyebrow text-oxblood">Not sure where to start?</p>
                <h2 className="display-card mt-3 max-w-xl">
                  Tell us what is bothering you. We will help map the next step.
                </h2>
              </div>
              <Button asChild size="lg">
                <Link href="/contact">
                  Talk with our team
                  <ArrowUpRight />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <Cta />
    </>
  );
}
