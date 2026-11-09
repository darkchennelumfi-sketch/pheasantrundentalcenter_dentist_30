import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  CalendarCheck,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

const trustPoints = [
  { icon: Users, label: "Care for every age" },
  { icon: ShieldCheck, label: "Preventive & emergency care" },
  { icon: Sparkles, label: "Cosmetic dentistry" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-12 lg:pb-28 lg:pt-16">
      <div className="pointer-events-none absolute -right-40 -top-52 size-[44rem] rounded-full border border-ink/[0.07]" />
      <div className="pointer-events-none absolute -right-20 -top-24 size-[30rem] rounded-full border border-ink/[0.05]" />
      <div className="pointer-events-none absolute -left-48 top-1/3 size-[34rem] rounded-full bg-sage/20 blur-3xl" />
      <div className="pointer-events-none absolute right-1/3 top-8 size-40 rounded-full bg-gold/20 blur-3xl" />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-6 bottom-20 select-none font-display text-[22rem] leading-none tracking-[-0.12em] text-ink/[0.025] lg:text-[30rem]"
      >
        PR
      </span>

      <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1.04fr_0.96fr] lg:gap-16">
        <div>
          <Reveal>
            <Badge className="border-oxblood/15 bg-shell/55 text-oxblood">
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-oxblood/50" />
                <span className="relative inline-flex size-1.5 rounded-full bg-oxblood" />
              </span>
              Williston, North Dakota · Family & cosmetic dentistry
            </Badge>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="display-hero mt-7 text-ink">
              Our smiles{" "}
              <span className="relative inline-block italic text-oxblood">
                speak
                <svg
                  aria-hidden="true"
                  viewBox="0 0 260 22"
                  className="absolute -bottom-2 left-0 w-full text-gold/70"
                  fill="none"
                >
                  <path
                    d="M4 15c52-8 126-11 252-5"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              for themselves.
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="lede mt-8 max-w-xl">
              State-of-the-art dental care in a family-friendly environment.
              Three experienced dentists, a full range of preventive and
              cosmetic services, and a team that treats you like a neighbor.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/contact">
                  Schedule a consultation
                  <ArrowUpRight />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/services">
                  Explore our services
                  <ArrowDown />
                </Link>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-ink/10 pt-6">
              {trustPoints.map((point) => (
                <span
                  key={point.label}
                  className="flex items-center gap-2 text-xs font-semibold text-ink-muted"
                >
                  <point.icon className="size-3.5 text-oxblood/70" />
                  {point.label}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="relative mx-auto w-full max-w-[34rem] lg:max-w-none">
          <Reveal delay={0.18} y={36}>
            <div className="relative">
              <div className="absolute -inset-4 rounded-[999px_999px_2rem_2rem] border border-oxblood/10" />
              <div className="arch relative aspect-[4/4.7] overflow-hidden border border-white/40 bg-parchment shadow-[0_44px_100px_-48px_rgba(69,19,23,0.55)]">
                <Image
                  src="/images/hero.jpg"
                  alt="Pheasant Run Dental Center patient care in Williston, North Dakota"
                  fill
                  priority
                  sizes="(min-width: 1024px) 46vw, 92vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-oxblood-deep/58 via-oxblood-deep/5 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <div className="glass-dark rounded-2xl p-4 text-shell sm:p-5">
                    <p className="font-display text-lg italic tracking-[-0.02em] text-gold-soft">
                      “Our smiles speak for themselves.”
                    </p>
                    <p className="mt-1.5 text-[0.63rem] font-bold uppercase tracking-[0.2em] text-shell/70">
                      Pheasant Run Dental Center
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -left-4 top-12 hidden animate-drift rounded-2xl border border-white/50 bg-shell/85 p-4 shadow-[0_20px_50px_-30px_rgba(25,26,23,0.4)] backdrop-blur-xl sm:block lg:-left-10">
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-full bg-oxblood/10 text-oxblood">
                    <CalendarCheck className="size-4" />
                  </span>
                  <div>
                    <p className="text-[0.6rem] font-bold uppercase tracking-[0.16em] text-ink-muted">
                      Office hours
                    </p>
                    <p className="mt-1 text-sm font-semibold text-ink">
                      {site.hoursShort}
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-5 -right-3 hidden rounded-2xl border border-white/50 bg-shell/90 p-4 shadow-[0_24px_60px_-30px_rgba(25,26,23,0.4)] backdrop-blur-xl sm:block lg:-right-8">
                <p className="font-display text-3xl leading-none text-oxblood">60+</p>
                <p className="mt-1 max-w-24 text-[0.58rem] font-bold uppercase leading-4 tracking-[0.16em] text-ink-muted">
                  Years combined experience
                </p>
              </div>
            </div>
          </Reveal>

          <div className="mt-8 flex items-center justify-between gap-4 px-2 text-[0.62rem] font-bold uppercase tracking-[0.2em] text-ink-muted">
            <span className="flex items-center gap-2">
              <MapPin className="size-3" />
              Williston, ND
            </span>
            <span className="flex items-center gap-2">
              <Phone className="size-3" />
              {site.phone}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
