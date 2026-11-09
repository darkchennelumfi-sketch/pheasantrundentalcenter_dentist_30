"use client";

import * as React from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import { FaqAccordion } from "@/components/faq-accordion";
import { faqs, type Faq } from "@/lib/faq";
import { cn } from "@/lib/utils";

const categories: ("All" | Faq["category"])[] = [
  "All",
  "Visiting",
  "Treatments",
  "Comfort",
  "Payment",
];

export function FaqExplorer() {
  const [active, setActive] = React.useState<(typeof categories)[number]>("All");
  const reduceMotion = useReducedMotion();

  const items =
    active === "All" ? faqs : faqs.filter((faq) => faq.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="FAQ categories">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            role="tab"
            aria-selected={active === category}
            onClick={() => setActive(category)}
            className={cn(
              "focus-ring rounded-full border px-4 py-2.5 text-[0.7rem] font-bold uppercase tracking-[0.14em] transition-all duration-300",
              active === category
                ? "border-oxblood bg-oxblood text-shell"
                : "border-ink/12 bg-shell/45 text-ink-muted hover:border-oxblood/30 hover:text-ink",
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={active}
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-7 rounded-[1.6rem] border border-ink/10 bg-shell/45 px-5 sm:px-7"
        >
          <FaqAccordion items={items} showCategory={active === "All"} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
