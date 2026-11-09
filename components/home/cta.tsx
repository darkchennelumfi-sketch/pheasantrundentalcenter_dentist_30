import Link from "next/link";
import {
  ArrowUpRight,
  Clock,
  MapPin,
  MessageSquareText,
  Phone,
} from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

const contactCards = [
  {
    icon: Phone,
    label: "Call us",
    value: site.phone,
    href: site.phoneHref,
    detail: "Or text " + site.textPhone,
  },
  {
    icon: MapPin,
    label: "Find us",
    value: `${site.address.line1}`,
    href: site.mapsUrl,
    detail: `${site.address.city}, ${site.address.state} ${site.address.zip}`,
  },
  {
    icon: Clock,
    label: "Office hours",
    value: "Monday – Friday",
    href: "/contact",
    detail: "8:00 am – 5:00 pm",
  },
];

export function Cta() {
  return (
    <section className="relative overflow-hidden bg-oxblood py-20 text-shell lg:py-28">
      <div className="pointer-events-none absolute -right-40 -top-52 size-[40rem] rounded-full border border-shell/10" />
      <div className="pointer-events-none absolute -right-24 -top-36 size-[28rem] rounded-full border border-shell/[0.07]" />
      <div className="pointer-events-none absolute -bottom-64 -left-32 size-[36rem] rounded-full bg-oxblood-deep/60 blur-3xl" />
      <div className="grain-panel container-x relative">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <Reveal>
            <p className="eyebrow text-gold-soft">
              <span className="h-px w-7 bg-gold-soft/60" />
              Schedule a consultation
            </p>
            <h2 className="display-section mt-5 max-w-2xl">
              Your smile is in{" "}
              <span className="italic text-gold-soft">good hands.</span>
            </h2>
            <p className="mt-6 max-w-lg text-sm leading-7 text-shell/65">
              We offer appointments Monday through Friday from 8:00 am to 5:00
              pm. Call, text, or send a message — we look forward to hearing from
              you.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="light" size="lg">
                <Link href="/contact">
                  Contact our practice
                  <ArrowUpRight />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-shell/25 text-shell hover:border-shell/50 hover:bg-shell/10"
              >
                <a href={site.textHref}>
                  <MessageSquareText />
                  Text us
                </a>
              </Button>
            </div>
          </Reveal>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {contactCards.map((card, index) => (
              <Reveal key={card.label} delay={0.08 + index * 0.06}>
                <Link
                  href={card.href}
                  target={card.href.startsWith("http") ? "_blank" : undefined}
                  rel={card.href.startsWith("http") ? "noreferrer" : undefined}
                  className="focus-ring group flex items-center gap-4 rounded-2xl border border-shell/14 bg-shell/[0.06] px-5 py-4 backdrop-blur-md transition-colors hover:border-gold-soft/40 hover:bg-shell/10"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-shell/16 text-gold-soft">
                    <card.icon className="size-4" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[0.57rem] font-bold uppercase tracking-[0.18em] text-shell/65">
                      {card.label}
                    </span>
                    <span className="mt-1 block break-words text-sm font-semibold leading-snug text-shell">
                      {card.value}
                    </span>
                    <span className="mt-0.5 block break-words text-xs leading-snug text-shell/65">
                      {card.detail}
                    </span>
                  </span>
                  <ArrowUpRight className="size-4 shrink-0 text-gold-soft/40 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
