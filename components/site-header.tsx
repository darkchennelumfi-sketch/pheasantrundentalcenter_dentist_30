"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";
import {
  ArrowUpRight,
  ChevronDown,
  MapPin,
  Menu,
  MessageSquareText,
  Phone,
  X,
} from "lucide-react";

import { BrandMark } from "@/components/brand-mark";
import { Button } from "@/components/ui/button";
import { navigation, site } from "@/lib/site";
import { services } from "@/lib/services";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-oxblood-deep text-shell">
        <div className="container-x flex h-9 items-center justify-between gap-4 text-[0.64rem] font-semibold uppercase tracking-[0.16em]">
          <Link
            href={site.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-1.5 opacity-80 transition-opacity hover:opacity-100 sm:flex"
          >
            <MapPin className="size-3" />
            2605 19th Ave W · Williston, ND
          </Link>
          <div className="flex items-center gap-5">
            <a
              href={site.textHref}
              className="flex items-center gap-1.5 opacity-80 transition-opacity hover:opacity-100"
            >
              <MessageSquareText className="size-3" />
              Text {site.textPhone}
            </a>
            <a
              href={site.phoneHref}
              className="flex items-center gap-1.5 transition-opacity hover:opacity-100"
            >
              <Phone className="size-3" />
              {site.phone}
            </a>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "border-b transition-all duration-500",
          scrolled
            ? "border-ink/10 bg-bone/88 shadow-[0_18px_50px_-32px_rgba(25,26,23,0.45)] backdrop-blur-xl"
            : "border-transparent bg-bone/55 backdrop-blur-md",
        )}
      >
        <div className="container-x flex h-[4.6rem] items-center justify-between gap-6 lg:h-20">
          <Link
            href="/"
            className="focus-ring group flex items-center gap-3 rounded-full"
          >
            <BrandMark className="transition-transform duration-500 group-hover:rotate-[-6deg]" />
            <span className="leading-none">
              <span className="block font-display text-[1.18rem] font-semibold tracking-[-0.03em] text-ink">
                Pheasant Run
              </span>
              <span className="mt-1 block text-[0.56rem] font-bold uppercase tracking-[0.32em] text-oxblood">
                Dental Center
              </span>
            </span>
          </Link>

          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Primary navigation"
          >
            {navigation.map((item) =>
              item.label === "Services" ? (
                <div key={item.href} className="group relative">
                  <Link
                    href={item.href}
                    className={cn(
                      "focus-ring flex items-center gap-1 rounded-full px-3.5 py-2 text-[0.8rem] font-semibold transition-colors",
                      isActive(item.href)
                        ? "text-oxblood"
                        : "text-ink-muted hover:text-ink",
                    )}
                  >
                    {item.label}
                    <ChevronDown className="size-3.5 transition-transform duration-300 group-hover:rotate-180" />
                  </Link>
                  <div className="invisible absolute left-1/2 top-full w-[34rem] -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                    <div className="glass grid grid-cols-2 gap-1 rounded-3xl p-3">
                      {services.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          className="focus-ring group/link flex items-center gap-3 rounded-2xl px-3.5 py-2.5 text-sm text-ink-muted transition-colors hover:bg-shell/75 hover:text-ink"
                        >
                          <service.icon className="size-4 shrink-0 text-oxblood/65" />
                          <span className="flex-1">{service.name}</span>
                          <ArrowUpRight className="size-3.5 -translate-x-1 opacity-0 transition-all group-hover/link:translate-x-0 group-hover/link:opacity-60" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "focus-ring rounded-full px-3.5 py-2 text-[0.8rem] font-semibold transition-colors",
                    isActive(item.href)
                      ? "text-oxblood"
                      : "text-ink-muted hover:text-ink",
                  )}
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="flex items-center gap-2.5">
            <Button asChild size="sm" className="hidden sm:inline-flex">
              <Link href="/contact">
                Book a visit
                <ArrowUpRight />
              </Link>
            </Button>
            <Dialog.Root open={open} onOpenChange={setOpen}>
              <Dialog.Trigger asChild>
                <button
                  type="button"
                  className="focus-ring flex size-11 items-center justify-center rounded-full border border-ink/15 bg-shell/60 text-ink lg:hidden"
                  aria-label="Open menu"
                >
                  <Menu className="size-5" />
                </button>
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 z-[80] bg-ink/35 backdrop-blur-sm data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0" />
                <Dialog.Content className="fixed inset-y-0 right-0 z-[81] flex w-full max-w-md flex-col overflow-y-auto bg-bone p-6 shadow-2xl data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:animate-in data-[state=open]:slide-in-from-right">
                  <div className="flex items-center justify-between">
                    <Dialog.Title className="flex items-center gap-3">
                      <BrandMark />
                      <span className="text-left leading-none">
                        <span className="block font-display text-lg font-semibold tracking-[-0.03em]">
                          Pheasant Run
                        </span>
                        <span className="mt-1 block text-[0.53rem] font-bold uppercase tracking-[0.3em] text-oxblood">
                          Dental Center
                        </span>
                      </span>
                    </Dialog.Title>
                    <Dialog.Close asChild>
                      <button
                        type="button"
                        className="focus-ring flex size-10 items-center justify-center rounded-full border border-ink/15"
                        aria-label="Close menu"
                      >
                        <X className="size-4" />
                      </button>
                    </Dialog.Close>
                  </div>

                  <nav
                    className="mt-10 flex flex-col"
                    aria-label="Mobile navigation"
                    onClick={() => setOpen(false)}
                  >
                    {navigation.map((item, index) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                          "focus-ring flex items-center justify-between border-b border-ink/10 py-4 font-display text-2xl tracking-[-0.03em] transition-colors",
                          isActive(item.href) ? "text-oxblood" : "text-ink",
                        )}
                      >
                        {item.label}
                        <span className="font-sans text-[0.62rem] font-bold tracking-[0.18em] text-ink-muted">
                          0{index + 1}
                        </span>
                      </Link>
                    ))}
                  </nav>

                  <div className="mt-8">
                    <p className="eyebrow text-oxblood">Popular treatments</p>
                    <div
                      className="mt-4 flex flex-wrap gap-2"
                      onClick={() => setOpen(false)}
                    >
                      {services.slice(0, 6).map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          className="focus-ring rounded-full border border-ink/12 bg-shell/60 px-3.5 py-2 text-xs font-semibold text-ink-muted"
                        >
                          {service.shortName}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto space-y-3 pt-10">
                    <Button asChild className="w-full" size="lg">
                      <Link href="/contact" onClick={() => setOpen(false)}>
                        Book a visit
                        <ArrowUpRight />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full" size="lg">
                      <a href={site.phoneHref}>
                        <Phone />
                        {site.phone}
                      </a>
                    </Button>
                    <p className="pt-2 text-center text-xs text-ink-muted">
                      {site.hours}
                    </p>
                  </div>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </div>
        </div>
      </div>
    </header>
  );
}
