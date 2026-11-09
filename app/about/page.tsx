import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Asterisk,
  GraduationCap,
  HeartHandshake,
  MapPin,
  ShieldCheck,
  Users,
} from "lucide-react";

import { Cta } from "@/components/home/cta";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { doctors, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Our Dentists in Williston, ND",
  description:
    "Meet Dr. Ryan B. Davis, Dr. Steven P. Blackhurst, and Dr. Robert Blackhurst — three experienced dentists serving Williston, North Dakota with family-friendly, state-of-the-art care.",
  alternates: { canonical: "/about" },
};

const practiceFacts = [
  {
    icon: ShieldCheck,
    title: "American Dental Association",
    copy: "Our dentists are members of the American Dental Association.",
  },
  {
    icon: Users,
    title: "Care for every age",
    copy: "Extensive experience treating children, adults, and seniors.",
  },
  {
    icon: HeartHandshake,
    title: "Family friendly",
    copy: "State-of-the-art procedures in a warm, family-friendly environment.",
  },
  {
    icon: MapPin,
    title: "Rooted in Williston",
    copy: "Proudly serving Williston, North Dakota, and the surrounding areas.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-ink/10 pb-16 pt-12 lg:pb-24 lg:pt-16">
        <div className="pointer-events-none absolute -right-40 -top-52 size-[42rem] rounded-full border border-ink/[0.06]" />
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
              <span className="text-oxblood">About</span>
            </nav>
          </Reveal>

          <div className="mt-8 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20">
            <div>
              <Reveal delay={0.04}>
                <p className="eyebrow text-oxblood">
                  <Asterisk className="size-4" />
                  About our practice
                </p>
                <h1 className="display-hero mt-6 max-w-3xl text-ink">
                  People first.{" "}
                  <span className="italic text-oxblood">Dentistry second.</span>
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="lede mt-7 max-w-2xl">
                  Pheasant Run Dental Center is a family-friendly practice in
                  Williston, North Dakota. Our three dentists bring decades of
                  combined experience — and a shared belief that good care starts
                  with listening.
                </p>
              </Reveal>
              <Reveal delay={0.16}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button asChild>
                    <Link href="/contact">
                      Schedule a visit
                      <ArrowUpRight />
                    </Link>
                  </Button>
                  <Button asChild variant="outline">
                    <a href={site.phoneHref}>{site.phone}</a>
                  </Button>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.14}>
              <div className="relative mx-auto max-w-md">
                <div className="arch relative aspect-[4/4.4] overflow-hidden border border-white/60 bg-parchment shadow-[0_36px_90px_-50px_rgba(25,26,23,0.5)]">
                  <Image
                    src="/images/clinic-wide.jpg"
                    alt="Pheasant Run Dental Center"
                    fill
                    sizes="(min-width: 1024px) 38vw, 90vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-ink/45 via-transparent to-transparent" />
                </div>
                <div className="absolute -bottom-6 -left-4 rounded-2xl border border-white/60 bg-shell/92 p-4 shadow-[0_24px_60px_-34px_rgba(25,26,23,0.55)] backdrop-blur-xl">
                  <p className="font-display text-3xl leading-none text-oxblood">
                    60+
                  </p>
                  <p className="mt-1 text-[0.56rem] font-bold uppercase leading-4 tracking-[0.16em] text-ink-muted">
                    Combined years
                    <br />
                    of experience
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container-x">
          <Reveal>
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="eyebrow text-oxblood">The care team</p>
                <h2 className="display-section mt-4 max-w-2xl">
                  Three dentists who know your{" "}
                  <span className="italic text-oxblood">name.</span>
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-7 text-ink-muted">
                Different backgrounds, shared standards. Meet the people who
                will be looking after your smile.
              </p>
            </div>
          </Reveal>

          <div className="mt-11 space-y-4">
            {doctors.map((doctor, index) => (
              <Reveal key={doctor.name} delay={index * 0.06}>
                <article className="group grid gap-6 rounded-[1.7rem] border border-ink/10 bg-shell/45 p-6 transition-colors hover:border-oxblood/20 hover:bg-shell/70 sm:p-8 lg:grid-cols-[0.34fr_0.66fr] lg:gap-10">
                  <div className="flex items-start gap-5">
                    <div className="relative flex size-24 shrink-0 items-center justify-center overflow-hidden rounded-full border border-oxblood/15 bg-oxblood-deep font-display text-3xl tracking-[-0.04em] text-gold-soft">
                      <span className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(197,155,84,0.25),transparent_62%)]" />
                      {doctor.initials}
                    </div>
                    <div>
                      <p className="text-[0.58rem] font-bold uppercase tracking-[0.2em] text-oxblood/80">
                        Dentist {index + 1} · {doctor.tenure}
                      </p>
                      <h3 className="mt-2 font-display text-[1.7rem] leading-tight tracking-[-0.03em] text-ink">
                        Dr. {doctor.name}
                      </h3>
                      <p className="mt-1 text-sm font-semibold text-oxblood">
                        {doctor.credentials}
                      </p>
                      <p className="mt-3 flex items-start gap-2 text-xs leading-5 text-ink-muted">
                        <GraduationCap className="mt-0.5 size-3.5 shrink-0" />
                        {doctor.school}
                      </p>
                    </div>
                  </div>
                  <div className="lg:border-l lg:border-ink/10 lg:pl-10">
                    <p className="text-sm leading-7 text-ink-muted">{doctor.bio}</p>
                    <p className="mt-4 border-t border-ink/10 pt-4 text-xs leading-6 text-ink-muted">
                      {doctor.personal}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-ink/10 bg-shell/35 py-16 lg:py-24">
        <div className="pointer-events-none absolute -right-40 -top-40 size-[34rem] rounded-full bg-gold/10 blur-3xl" />
        <div className="container-x relative grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <Badge className="border-oxblood/15 bg-shell/60 text-oxblood">
              Our promise
            </Badge>
            <h2 className="display-section mt-5">
              The same care we would want for our own{" "}
              <span className="italic text-oxblood">family.</span>
            </h2>
            <p className="lede mt-6 max-w-sm">
              We offer preventive and cosmetic dentistry as well as emergency
              services for people of all ages, in a setting that feels personal
              from the first visit.
            </p>
          </Reveal>
          <div className="grid gap-3 sm:grid-cols-2">
            {practiceFacts.map((fact, index) => (
              <Reveal key={fact.title} delay={index * 0.05}>
                <div className="h-full rounded-2xl border border-ink/10 bg-bone/65 p-5">
                  <fact.icon className="size-5 text-oxblood/75" />
                  <h3 className="mt-4 text-sm font-bold text-ink">{fact.title}</h3>
                  <p className="mt-2 text-xs leading-5 text-ink-muted">
                    {fact.copy}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container-x">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] bg-oxblood-deep px-6 py-10 text-shell sm:px-10 lg:px-14 lg:py-12">
              <div className="pointer-events-none absolute -right-20 -top-24 size-72 rounded-full border border-shell/10" />
              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                <div>
                  <p className="eyebrow text-gold-soft">Visit the practice</p>
                  <h2 className="display-card mt-3 max-w-lg">
                    Find us on the west side of Williston.
                  </h2>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <p className="text-[0.58rem] font-bold uppercase tracking-[0.18em] text-shell/65">
                      Address
                    </p>
                    <p className="mt-2 text-sm leading-6 text-shell/80">
                      {site.address.line1}
                      <br />
                      {site.address.city}, {site.address.state}{" "}
                      {site.address.zip}
                    </p>
                  </div>
                  <div>
                    <p className="text-[0.58rem] font-bold uppercase tracking-[0.18em] text-shell/65">
                      Hours
                    </p>
                    <p className="mt-2 text-sm leading-6 text-shell/80">
                      Monday – Friday
                      <br />
                      8:00 am – 5:00 pm
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex flex-col gap-3 border-t border-shell/12 pt-7 sm:flex-row">
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
                  <Link href={site.mapsUrl} target="_blank" rel="noreferrer">
                    <MapPin />
                    Get directions
                  </Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Cta />
    </>
  );
}
