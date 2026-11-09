import Link from "next/link";
import {
  ArrowUpRight,
  Clock,
  Mail,
  MapPin,
  MessageSquareText,
  Phone,
} from "lucide-react";

import { BrandMark } from "@/components/brand-mark";
import { Button } from "@/components/ui/button";
import { navigation, site } from "@/lib/site";
import { services } from "@/lib/services";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M14.2 8.2V6.6c0-.8.5-1 1-1h2.6V2.1L14.3 2C10.9 2 10 4.5 10 6.3v1.9H8v3.5h2v8.2h4.2v-8.2h2.8l.4-3.5h-3.2Z" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-oxblood-deep text-shell">
      <div className="pointer-events-none absolute -right-32 -top-48 size-[34rem] rounded-full border border-shell/10" />
      <div className="pointer-events-none absolute -right-20 -top-36 size-[26rem] rounded-full border border-shell/[0.06]" />
      <div className="pointer-events-none absolute -bottom-64 left-1/3 size-[38rem] rounded-full bg-moss/20 blur-3xl" />

      <div className="container-x relative">
        <div className="grid gap-10 border-b border-shell/12 py-16 md:grid-cols-[1.3fr_1fr] md:items-end md:py-20">
          <div>
            <p className="eyebrow text-gold-soft">
              <span className="h-px w-7 bg-gold-soft/70" />
              Start here
            </p>
            <h2 className="display-section mt-5 max-w-2xl text-shell">
              A healthier smile starts with a{" "}
              <span className="italic text-gold-soft">conversation.</span>
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
            <Button asChild variant="light" size="lg">
              <Link href="/contact">
                Book a visit
                <ArrowUpRight />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-shell/25 text-shell hover:border-shell/50 hover:bg-shell/10"
            >
              <a href={site.phoneHref}>
                <Phone />
                {site.phone}
              </a>
            </Button>
          </div>
        </div>

        <div className="grid gap-12 py-16 lg:grid-cols-[1.45fr_0.8fr_0.9fr_1fr]">
          <div>
            <Link
              href="/"
              className="focus-ring inline-flex items-center gap-3 rounded-full"
            >
              <BrandMark className="border-shell/20 bg-shell" />
              <span className="leading-none">
                <span className="block font-display text-xl font-semibold tracking-[-0.03em] text-shell">
                  Pheasant Run
                </span>
                <span className="mt-1 block text-[0.55rem] font-bold uppercase tracking-[0.31em] text-gold-soft">
                  Dental Center
                </span>
              </span>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-7 text-shell/62">
              State-of-the-art dental procedures in a family-friendly
              environment. Preventive and cosmetic dentistry, emergency
              services, and more than 20 years of experience serving Williston,
              North Dakota.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <a
                href={site.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Pheasant Run Dental Center on Facebook"
                className="focus-ring flex size-10 items-center justify-center rounded-full border border-shell/18 text-shell/75 transition-colors hover:border-gold-soft/60 hover:text-gold-soft"
              >
                <FacebookIcon className="size-4" />
              </a>
              <a
                href={site.textHref}
                aria-label={`Text us at ${site.textPhone}`}
                className="focus-ring flex size-10 items-center justify-center rounded-full border border-shell/18 text-shell/75 transition-colors hover:border-gold-soft/60 hover:text-gold-soft"
              >
                <MessageSquareText className="size-4" />
              </a>
              <a
                href={`mailto:${site.email}`}
                aria-label={`Email ${site.email}`}
                className="focus-ring flex size-10 items-center justify-center rounded-full border border-shell/18 text-shell/75 transition-colors hover:border-gold-soft/60 hover:text-gold-soft"
              >
                <Mail className="size-4" />
              </a>
            </div>
          </div>

          <div>
            <p className="text-[0.63rem] font-bold uppercase tracking-[0.22em] text-gold-soft/75">
              Explore
            </p>
            <ul className="mt-5 space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="focus-ring text-sm text-shell/65 transition-colors hover:text-shell"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[0.63rem] font-bold uppercase tracking-[0.22em] text-gold-soft/75">
              Treatments
            </p>
            <ul className="mt-5 grid gap-3">
              {services.slice(0, 7).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="focus-ring text-sm text-shell/65 transition-colors hover:text-shell"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[0.63rem] font-bold uppercase tracking-[0.22em] text-gold-soft/75">
              Visit us
            </p>
            <ul className="mt-5 space-y-4 text-sm text-shell/65">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-gold-soft/80" />
                <Link
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring leading-6 transition-colors hover:text-shell"
                >
                  {site.address.line1}
                  <br />
                  {site.address.city}, {site.address.state} {site.address.zip}
                </Link>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 size-4 shrink-0 text-gold-soft/80" />
                <span className="leading-6">{site.hours}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-gold-soft/80" />
                <a
                  href={site.phoneHref}
                  className="focus-ring leading-6 transition-colors hover:text-shell"
                >
                  {site.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-gold-soft/80" />
                <a
                  href={`mailto:${site.email}`}
                  className="focus-ring break-all leading-6 transition-colors hover:text-shell"
                >
                  {site.email}
                </a>
              </li>
            </ul>
            <Link
              href={site.jobApplication}
              target="_blank"
              rel="noreferrer"
              className="focus-ring mt-6 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.16em] text-gold-soft underline-offset-4 hover:underline"
            >
              Job application
              <ArrowUpRight className="size-3.5" />
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-shell/12 py-6 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-shell/65 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Pheasant Run Dental. All rights reserved.</p>
          <p className="flex flex-wrap items-center gap-2">
            Williston, North Dakota
            <span className="size-1 rounded-full bg-gold-soft/60" />
            Family & cosmetic dentistry
            <span className="size-1 rounded-full bg-gold-soft/60" />
            <a
              href="https://drwebsites.com/"
              target="_blank"
              rel="noreferrer"
              className="underline-offset-4 transition-colors hover:text-shell/70 hover:underline"
            >
              Original site design by DrWebsites
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
