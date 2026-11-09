import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Clock,
  Mail,
  MapPin,
  MessageSquareText,
  Phone,
  Siren,
} from "lucide-react";

import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Our Williston Dental Office",
  description:
    "Contact Pheasant Run Dental Center at 2605 19th Ave. West, Suite #102, Williston, ND 58801. Call (701) 577-3333, text (701) 969-5258, or send a message.",
  alternates: { canonical: "/contact" },
};

const contactDetails = [
  {
    icon: Phone,
    label: "Phone",
    value: site.phone,
    href: site.phoneHref,
    detail: "Call during office hours",
  },
  {
    icon: MessageSquareText,
    label: "Text",
    value: site.textPhone,
    href: site.textHref,
    detail: "Send us a text",
  },
  {
    icon: Mail,
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    detail: "For general questions",
  },
  {
    icon: MapPin,
    label: "Address",
    value: site.address.line1,
    href: site.mapsUrl,
    detail: `${site.address.city}, ${site.address.state} ${site.address.zip}`,
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-ink/10 pb-14 pt-12 lg:pb-20 lg:pt-16">
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
              <span className="text-oxblood">Contact</span>
            </nav>
          </Reveal>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <Reveal delay={0.04}>
                <Badge className="border-oxblood/15 bg-shell/55 text-oxblood">
                  <span className="size-1.5 rounded-full bg-oxblood" />
                  Appointments available Monday – Friday
                </Badge>
                <h1 className="display-hero mt-6 max-w-3xl text-ink">
                  Let&apos;s talk about your{" "}
                  <span className="italic text-oxblood">smile.</span>
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="lede mt-7 max-w-2xl">
                  Call, text, or send a message. We will help you find a time
                  during normal office hours, Monday through Friday from 8:00 am
                  to 5:00 pm.
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.14}>
              <div className="rounded-2xl border border-ink/10 bg-shell/50 p-5">
                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 size-4 shrink-0 text-oxblood/70" />
                  <div>
                    <p className="text-[0.58rem] font-bold uppercase tracking-[0.18em] text-ink-muted">
                      Office hours
                    </p>
                    <p className="mt-1.5 text-sm font-semibold text-ink">
                      Monday – Friday · 8:00 am – 5:00 pm
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-20">
        <div className="container-x grid gap-6 lg:grid-cols-[1.06fr_0.94fr] lg:gap-8">
          <Reveal className="min-w-0">
            <ContactForm />
          </Reveal>

          <div className="min-w-0 space-y-4">
            <Reveal delay={0.06}>
              <div className="rounded-[1.7rem] border border-ink/10 bg-shell/45 p-6 sm:p-7">
                <p className="eyebrow text-oxblood">Location info</p>
                <h2 className="mt-3 font-display text-2xl tracking-[-0.03em] text-ink">
                  Find our office
                </h2>
                <div className="mt-5 divide-y divide-ink/10">
                  {contactDetails.map((detail) => (
                    <Link
                      key={detail.label}
                      href={detail.href}
                      target={detail.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        detail.href.startsWith("http") ? "noreferrer" : undefined
                      }
                      className="focus-ring group flex items-center gap-3.5 py-3.5"
                    >
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-ink/10 bg-bone/65 text-oxblood">
                        <detail.icon className="size-3.5" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-[0.55rem] font-bold uppercase tracking-[0.16em] text-ink-muted">
                          {detail.label}
                        </span>
                        <span className="mt-0.5 block break-words text-sm font-semibold leading-snug text-ink transition-colors group-hover:text-oxblood">
                          {detail.value}
                        </span>
                        <span className="mt-0.5 block break-words text-[0.68rem] leading-snug text-ink-muted">
                          {detail.detail}
                        </span>
                      </span>
                      <ArrowUpRight className="size-3.5 shrink-0 text-ink-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-oxblood" />
                    </Link>
                  ))}
                </div>
                <p className="mt-4 text-[0.65rem] leading-5 text-ink-muted">
                  {site.address.line1}, {site.address.city}, {site.address.state}{" "}
                  {site.address.zip}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="overflow-hidden rounded-[1.7rem] border border-ink/10 bg-parchment">
                <iframe
                  title="Map showing Pheasant Run Dental Center in Williston, North Dakota"
                  src="https://www.google.com/maps?q=2605%2019th%20Ave%20W%20Suite%20102%20Williston%20ND%2058801&output=embed"
                  className="h-72 w-full min-w-0 grayscale-[35%] contrast-[0.95]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="flex items-start gap-3 rounded-2xl border border-oxblood/20 bg-oxblood/[0.055] p-5">
                <Siren className="mt-0.5 size-4 shrink-0 text-oxblood" />
                <div>
                  <p className="text-sm font-bold text-ink">
                    Dental emergency?
                  </p>
                  <p className="mt-1 text-xs leading-5 text-ink-muted">
                    Call us directly at{" "}
                    <a
                      href={site.phoneHref}
                      className="font-semibold text-oxblood underline-offset-2 hover:underline"
                    >
                      {site.phone}
                    </a>
                    . We offer emergency services for people of all ages.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-ink/10 bg-shell/30 py-14 lg:py-16">
        <div className="container-x flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="eyebrow text-oxblood">Before your visit</p>
            <h2 className="display-card mt-3 max-w-xl">
              New here? Start with a quick look at what we offer.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/new-patients">
                New patient guide
                <ArrowUpRight />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/services">Browse services</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
