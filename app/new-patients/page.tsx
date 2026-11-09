import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  CalendarCheck,
  ClipboardList,
  CreditCard,
  HeartHandshake,
  MapPin,
  MessageCircleQuestion,
  Phone,
  Stethoscope,
} from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "New Patients",
  description:
    "A simple guide to your first visit at Pheasant Run Dental Center in Williston, ND — scheduling, what to expect, payment options, and how to reach our team.",
  alternates: { canonical: "/new-patients" },
};

const steps = [
  {
    icon: CalendarCheck,
    title: "Call, text, or send a message",
    copy: "Tell us what you need and when you are available. We offer appointments Monday through Friday from 8:00 am to 5:00 pm.",
    action: { label: "Contact the office", href: "/contact" },
  },
  {
    icon: Stethoscope,
    title: "Meet your dentist",
    copy: "Our team treats children, adults, and seniors in all aspects of dental treatment. We will listen first, then talk through what we find.",
    action: { label: "Meet the dentists", href: "/about" },
  },
  {
    icon: ClipboardList,
    title: "Build a plan that fits",
    copy: "From preventive care to restorative and cosmetic treatment, we will discuss the options and the next step that makes sense for you.",
    action: { label: "Browse services", href: "/services" },
  },
];

const essentials = [
  {
    icon: MapPin,
    label: "Location",
    value: `${site.address.line1}, ${site.address.city}, ${site.address.state} ${site.address.zip}`,
    href: site.mapsUrl,
  },
  {
    icon: Phone,
    label: "Phone",
    value: site.phone,
    href: site.phoneHref,
  },
  {
    icon: MessageCircleQuestion,
    label: "Questions",
    value: "Read our frequently asked questions",
    href: "/faq",
  },
  {
    icon: CreditCard,
    label: "Financing",
    value: "CareCredit payment options",
    href: "/services/patient-financing",
  },
];

export default function NewPatientsPage() {
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
              <span className="text-oxblood">New Patients</span>
            </nav>
          </Reveal>
          <div className="mt-8 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20">
            <div>
              <Reveal delay={0.04}>
                <Badge className="border-oxblood/15 bg-shell/55 text-oxblood">
                  <HeartHandshake className="size-3.5" />
                  Welcome to the practice
                </Badge>
                <h1 className="display-hero mt-6 max-w-3xl text-ink">
                  Your first visit,{" "}
                  <span className="italic text-oxblood">minus the mystery.</span>
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="lede mt-7 max-w-2xl">
                  New to Pheasant Run Dental Center? Start here. We keep the
                  process simple: tell us what you need, meet your dentist, and
                  leave with a clear next step.
                </p>
              </Reveal>
              <Reveal delay={0.16}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button asChild size="lg">
                    <Link href="/contact">
                      Schedule a visit
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

            <Reveal delay={0.14}>
              <div className="rounded-[1.7rem] border border-ink/10 bg-shell/55 p-6 sm:p-7">
                <p className="eyebrow text-oxblood">The essentials</p>
                <div className="mt-5 divide-y divide-ink/10">
                  {essentials.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                      className="focus-ring group flex items-start gap-3.5 py-4 first:pt-0 last:pb-0"
                    >
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-ink/10 bg-bone/65 text-oxblood">
                        <item.icon className="size-3.5" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-[0.55rem] font-bold uppercase tracking-[0.16em] text-ink-muted">
                          {item.label}
                        </span>
                        <span className="mt-1 block text-sm leading-6 text-ink-muted transition-colors group-hover:text-oxblood">
                          {item.value}
                        </span>
                      </span>
                      <ArrowUpRight className="mt-1 size-3.5 shrink-0 text-ink-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-oxblood" />
                    </Link>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow text-oxblood">Three simple steps</p>
            <h2 className="display-section mt-4 max-w-2xl">
              From first call to a{" "}
              <span className="italic text-oxblood">clear plan.</span>
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {steps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.06}>
                <div className="flex h-full flex-col rounded-[1.6rem] border border-ink/10 bg-shell/45 p-6 sm:p-7">
                  <div className="flex items-start justify-between">
                    <span className="flex size-11 items-center justify-center rounded-full border border-oxblood/15 bg-oxblood/8 text-oxblood">
                      <step.icon className="size-[1.1rem]" />
                    </span>
                    <span className="font-display text-3xl leading-none text-oxblood/60">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-2xl leading-tight tracking-[-0.03em] text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-ink-muted">
                    {step.copy}
                  </p>
                  <Link
                    href={step.action.href}
                    className="focus-ring mt-6 inline-flex items-center gap-2 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-oxblood"
                  >
                    {step.action.label}
                    <ArrowUpRight className="size-3.5" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-shell/35 py-16 lg:py-20">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow text-oxblood">Good to know</p>
            <h2 className="display-section mt-4 max-w-xl">
              The details that make a visit{" "}
              <span className="italic text-oxblood">easier.</span>
            </h2>
            <p className="lede mt-5 max-w-lg">
              We are located on the west side of Williston, open five days a
              week, and happy to answer questions before you book.
            </p>
          </Reveal>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              {
                title: "Office hours",
                copy: "Monday through Friday, 8:00 am – 5:00 pm.",
              },
              {
                title: "Address",
                copy: `${site.address.line1}, ${site.address.city}, ${site.address.state} ${site.address.zip}`,
              },
              {
                title: "Payment options",
                copy: "CareCredit financing and online payments after your visit.",
              },
              {
                title: "For every age",
                copy: "Children, adults, and seniors are all welcome.",
              },
            ].map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <div className="h-full rounded-2xl border border-ink/10 bg-bone/65 p-5">
                  <p className="text-sm font-bold text-ink">{item.title}</p>
                  <p className="mt-2 text-xs leading-6 text-ink-muted">
                    {item.copy}
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
            <div className="flex flex-col items-start justify-between gap-6 rounded-[1.8rem] border border-ink/10 bg-oxblood-deep p-7 text-shell sm:flex-row sm:items-center lg:p-10">
              <div>
                <p className="eyebrow text-gold-soft">Ready to start?</p>
                <h2 className="display-card mt-3 max-w-2xl">
                  Tell us what you need. We will help you find the next step.
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
                    Call us
                  </a>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
