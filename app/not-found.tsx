import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="pointer-events-none absolute -right-40 -top-52 size-[40rem] rounded-full border border-ink/[0.06]" />
      <div className="pointer-events-none absolute -left-40 bottom-0 size-[30rem] rounded-full bg-sage/15 blur-3xl" />
      <div className="container-x relative">
        <div className="max-w-2xl">
          <p className="eyebrow text-oxblood">404 · Page not found</p>
          <p className="mt-6 font-display text-[8rem] leading-[0.8] tracking-[-0.07em] text-oxblood/55">
            404
          </p>
          <h1 className="display-section mt-4">
            This page slipped{" "}
            <span className="italic text-oxblood">away.</span>
          </h1>
          <p className="lede mt-6">
            The page you are looking for may have moved. Head back home, browse
            our services, or call the office and we will point you in the right
            direction.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/">
                <ArrowLeft />
                Back home
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/services">
                Browse services
                <ArrowUpRight />
              </Link>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <a href={site.phoneHref}>
                <Phone />
                {site.phone}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
