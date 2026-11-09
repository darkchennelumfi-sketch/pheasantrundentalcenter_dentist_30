import Link from "next/link";
import { ArrowUpRight, MessageCircleQuestion } from "lucide-react";

import { FaqAccordion } from "@/components/faq-accordion";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { faqs } from "@/lib/faq";
import { site } from "@/lib/site";

export function FaqSection() {
  return (
    <section className="relative border-t border-ink/10 py-20 lg:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
        <div>
          <Reveal>
            <p className="eyebrow text-oxblood">
              <MessageCircleQuestion className="size-4" />
              Questions, answered
            </p>
            <h2 className="display-section mt-5">
              Good to know{" "}
              <span className="italic text-oxblood">before you visit.</span>
            </h2>
            <p className="lede mt-6 max-w-sm">
              A few of the things patients ask us most. If your question is not
              here, our team is one call away.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-start">
              <Button asChild variant="outline">
                <Link href="/faq">
                  Read all FAQs
                  <ArrowUpRight />
                </Link>
              </Button>
              <a
                href={site.phoneHref}
                className="focus-ring inline-flex h-11 items-center gap-2 px-1 text-sm font-semibold text-ink-muted transition-colors hover:text-oxblood"
              >
                Or call {site.phone}
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.08}>
          <div className="rounded-[1.6rem] border border-ink/10 bg-shell/45 px-5 sm:px-7">
            <FaqAccordion items={faqs.slice(0, 6)} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
