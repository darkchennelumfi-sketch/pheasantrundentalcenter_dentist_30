"use client";

import * as React from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Sparkles,
  Wrench,
  type LucideIcon,
} from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

type Pathway = {
  id: string;
  label: string;
  icon: LucideIcon;
  title: string;
  description: string;
  items: { label: string; href: string }[];
  note: string;
};

const pathways: Pathway[] = [
  {
    id: "preventive",
    label: "Preventive & family",
    icon: ShieldCheck,
    title: "Everyday care that keeps small things small.",
    description:
      "Routine exams, cleanings, sealants, fluoride treatments, mouth guards, and TMJ care — the steady habits that protect your smile for the long run.",
    items: [
      { label: "Routine dental exams & cleanings", href: "/services" },
      { label: "Sealants & fluoride treatments", href: "/services" },
      { label: "Mouth guards", href: "/services" },
      { label: "TMJ care & nitrous oxide", href: "/services" },
      { label: "Emergency services", href: "/contact" },
    ],
    note: "For children, adults, and seniors.",
  },
  {
    id: "restorative",
    label: "Restorative",
    icon: Wrench,
    title: "Bring the mouth back to comfort and function.",
    description:
      "When a tooth is damaged or missing, our goal is to preserve what is natural and rebuild what is not — with options that consider both health and budget.",
    items: [
      { label: "Dental bridges", href: "/services/dental-bridge" },
      { label: "Dental crowns", href: "/services/dental-crown" },
      { label: "Dental implants", href: "/services/dental-implants" },
      { label: "Root canals & extractions", href: "/services/root-canal" },
      { label: "Dentures & white fillings", href: "/services/dentures" },
    ],
    note: "Restorative dentistry at Pheasant Run.",
  },
  {
    id: "cosmetic",
    label: "Cosmetic",
    icon: Sparkles,
    title: "A brighter smile that still feels like you.",
    description:
      "From custom whitening trays to porcelain veneers and complete smile makeovers, cosmetic care that respects the health and function underneath.",
    items: [
      { label: "Custom teeth whitening", href: "/services/whitening" },
      { label: "Porcelain veneers", href: "/services/cosmetic-dentistry" },
      { label: "White fillings", href: "/services/white-fillings" },
      { label: "Dental crowns", href: "/services/dental-crown" },
      { label: "Complete smile makeovers", href: "/services/cosmetic-dentistry" },
    ],
    note: "Training, skill, and experience.",
  },
];

export function CarePathways() {
  const [active, setActive] = React.useState(pathways[0].id);
  const reduceMotion = useReducedMotion();
  const current = pathways.find((pathway) => pathway.id === active) ?? pathways[0];

  return (
    <section className="relative border-t border-ink/10 py-20 lg:py-28">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="eyebrow text-oxblood">
                <span className="h-px w-7 bg-oxblood/50" />
                How we care
              </p>
              <h2 className="display-section mt-5">
                Care that meets you{" "}
                <span className="italic text-oxblood">where you are.</span>
              </h2>
              <p className="lede mt-6 max-w-sm">
                Whether you are here for a routine cleaning, a second chance for
                a damaged tooth, or a confidence boost, there is a path for it.
              </p>
            </Reveal>

            <div className="mt-9 space-y-2" role="tablist" aria-label="Care pathways">
              {pathways.map((pathway, index) => (
                <Reveal key={pathway.id} delay={0.05 * index}>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={active === pathway.id}
                    aria-controls={`pathway-${pathway.id}`}
                    onClick={() => setActive(pathway.id)}
                    className={cn(
                      "focus-ring group flex w-full items-center gap-4 rounded-2xl border px-4 py-4 text-left transition-all duration-300",
                      active === pathway.id
                        ? "border-oxblood/25 bg-shell/80 shadow-[0_18px_45px_-32px_rgba(25,26,23,0.5)]"
                        : "border-transparent hover:border-ink/10 hover:bg-shell/45",
                    )}
                  >
                    <span
                      className={cn(
                        "flex size-10 items-center justify-center rounded-full border transition-colors",
                        active === pathway.id
                          ? "border-oxblood/20 bg-oxblood text-shell"
                          : "border-ink/10 bg-bone/70 text-ink-muted group-hover:text-oxblood",
                      )}
                    >
                      <pathway.icon className="size-4" />
                    </span>
                    <span className="flex-1">
                      <span className="block text-sm font-bold text-ink">
                        {pathway.label}
                      </span>
                      <span className="mt-0.5 block text-[0.68rem] text-ink-muted">
                        0{index + 1} — {pathway.note}
                      </span>
                    </span>
                    <ArrowRight
                      className={cn(
                        "size-4 transition-transform",
                        active === pathway.id
                          ? "translate-x-0 text-oxblood"
                          : "-translate-x-1 text-ink-muted",
                      )}
                    />
                  </button>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.12}>
            <div className="relative min-h-[30rem] overflow-hidden rounded-[2rem] border border-ink/10 bg-oxblood-deep p-7 text-shell sm:p-10">
              <div className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full border border-shell/10" />
              <div className="pointer-events-none absolute -right-10 -top-10 size-52 rounded-full border border-shell/[0.07]" />
              <div className="pointer-events-none absolute bottom-0 left-0 size-72 rounded-full bg-moss/25 blur-3xl" />

              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={current.id}
                  id={`pathway-${current.id}`}
                  role="tabpanel"
                  initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="relative flex h-full flex-col"
                >
                  <span className="flex size-12 items-center justify-center rounded-full border border-shell/18 bg-shell/10 text-gold-soft">
                    <current.icon className="size-5" />
                  </span>
                  <p className="mt-8 text-[0.58rem] font-bold uppercase tracking-[0.22em] text-gold-soft/65">
                    {current.label}
                  </p>
                  <h3 className="mt-3 max-w-lg font-display text-[2.1rem] leading-[1.05] tracking-[-0.035em] text-shell sm:text-[2.5rem]">
                    {current.title}
                  </h3>
                  <p className="mt-5 max-w-lg text-sm leading-7 text-shell/62">
                    {current.description}
                  </p>

                  <ul className="mt-8 grid gap-2.5 border-t border-shell/12 pt-6">
                    {current.items.map((item) => (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          className="focus-ring group flex items-center justify-between gap-4 rounded-lg py-1 text-sm text-shell/70 transition-colors hover:text-shell"
                        >
                          {item.label}
                          <ArrowUpRight className="size-3.5 text-gold-soft/50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
