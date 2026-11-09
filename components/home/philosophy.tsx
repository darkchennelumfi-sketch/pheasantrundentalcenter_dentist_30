import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, Quote } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";

const commitments = [
  "Members of the American Dental Association",
  "Preventive, cosmetic, and emergency services",
  "Care for children, adults, and seniors",
  "A full range of treatment in one practice",
];

export function Philosophy() {
  return (
    <section className="relative overflow-hidden border-t border-ink/10 bg-shell/35 py-20 lg:py-28">
      <div className="pointer-events-none absolute -left-40 bottom-0 size-[30rem] rounded-full bg-sage/15 blur-3xl" />
      <div className="container-x relative grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
        <Reveal y={30}>
          <div className="relative mx-auto max-w-lg">
            <div className="arch relative aspect-[4/4.6] overflow-hidden border border-white/60 bg-parchment shadow-[0_36px_90px_-50px_rgba(25,26,23,0.55)]">
              <Image
                src="/images/clinic-wide.jpg"
                alt="The Pheasant Run Dental Center practice"
                fill
                sizes="(min-width: 1024px) 42vw, 90vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-ink/30 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-8 -right-4 w-52 rounded-2xl border border-white/60 bg-shell/92 p-4 shadow-[0_24px_60px_-34px_rgba(25,26,23,0.55)] backdrop-blur-xl sm:-right-8">
              <Quote className="size-4 text-oxblood/50" />
              <p className="mt-2 font-display text-base leading-snug tracking-[-0.02em] text-ink">
                “State-of-the-art dentistry in a family-friendly environment.”
              </p>
            </div>
            <div className="absolute -left-5 top-10 hidden rounded-full border border-oxblood/15 bg-shell/85 px-4 py-2 text-[0.58rem] font-bold uppercase tracking-[0.2em] text-oxblood shadow-sm backdrop-blur sm:block">
              Williston, ND
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow text-oxblood">
              <span className="h-px w-7 bg-oxblood/50" />
              The Pheasant Run difference
            </p>
            <h2 className="display-section mt-5 max-w-xl">
              Modern dentistry, with a{" "}
              <span className="italic text-oxblood">neighbor&apos;s handshake.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="lede mt-6 max-w-xl">
              We bring more than 20 years of experience to Williston and the
              surrounding areas. Our team combines current techniques with the
              time, attention, and continuity you want from a dental home.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {commitments.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm leading-6 text-ink-muted"
                >
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-oxblood/10 text-oxblood">
                    <Check className="size-3" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button asChild>
                <Link href="/about">
                  Meet our dentists
                  <ArrowUpRight />
                </Link>
              </Button>
              <Link
                href="/about"
                className="link-line focus-ring text-xs font-bold uppercase tracking-[0.16em] text-ink-muted hover:text-oxblood"
              >
                About the practice
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
