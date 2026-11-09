import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, MessageCircleQuestion, Phone } from "lucide-react";

import { FaqExplorer } from "@/components/faq-explorer";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers about appointments, office hours, dental crowns and bridges, whitening, tooth extraction aftercare, financing, and visiting Pheasant Run Dental Center in Williston, ND.",
  alternates: { canonical: "/faq" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Where is Pheasant Run Dental Center located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We are at 2605 19th Ave. West, Suite #102, Williston, North Dakota 58801.",
      },
    },
    {
      "@type": "Question",
      name: "What are your office hours?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer appointments Monday through Friday from 8:00 am to 5:00 pm.",
      },
    },
    {
      "@type": "Question",
      name: "How do I schedule a consultation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Call us at (701) 577-3333, text us at (701) 969-5258, or use the contact form on this website.",
      },
    },
  ],
};

export default function FaqPage() {
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
              <span className="text-oxblood">FAQ</span>
            </nav>
          </Reveal>
          <Reveal delay={0.04}>
            <p className="eyebrow mt-8 text-oxblood">
              <MessageCircleQuestion className="size-4" />
              Questions, answered
            </p>
            <h1 className="display-hero mt-6 max-w-3xl text-ink">
              Good to know{" "}
              <span className="italic text-oxblood">before you visit.</span>
            </h1>
            <p className="lede mt-7 max-w-2xl">
              Practical answers about appointments, treatments, comfort, and
              payment. If you do not see your question here, call or text our
              team — we are happy to help.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-14 lg:py-20">
        <div className="container-x grid gap-12 lg:grid-cols-[0.32fr_0.68fr] lg:gap-16">
          <div>
            <Reveal>
              <div className="sticky top-32 rounded-[1.6rem] border border-ink/10 bg-shell/50 p-6">
                <p className="eyebrow text-oxblood">Still curious?</p>
                <h2 className="mt-3 font-display text-2xl leading-tight tracking-[-0.03em] text-ink">
                  A real person is one call away.
                </h2>
                <p className="mt-3 text-sm leading-6 text-ink-muted">
                  Our front desk can answer questions about scheduling,
                  treatments, and payment options.
                </p>
                <div className="mt-6 flex flex-col gap-2.5">
                  <Button asChild className="w-full">
                    <Link href="/contact">
                      Send a message
                      <ArrowUpRight />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <a href={site.phoneHref}>
                      <Phone />
                      {site.phone}
                    </a>
                  </Button>
                </div>
                <p className="mt-5 border-t border-ink/10 pt-4 text-[0.65rem] leading-5 text-ink-muted">
                  {site.hours}
                  <br />
                  {site.address.line1}
                  <br />
                  {site.address.city}, {site.address.state} {site.address.zip}
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.08}>
            <FaqExplorer />
          </Reveal>
        </div>
      </section>

      <section className="border-t border-ink/10 bg-oxblood-deep py-14 text-shell lg:py-16">
        <div className="container-x flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="eyebrow text-gold-soft">Ready to book?</p>
            <h2 className="display-card mt-3 max-w-xl">
              We look forward to hearing from you.
            </h2>
          </div>
          <Button asChild variant="light" size="lg">
            <Link href="/contact">
              Schedule a consultation
              <ArrowUpRight />
            </Link>
          </Button>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
