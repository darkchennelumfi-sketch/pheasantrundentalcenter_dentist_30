"use client";

import * as React from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import { serviceCategories, services, type ServiceCategory } from "@/lib/services";
import { cn } from "@/lib/utils";

export function ServiceFilter() {
  const [active, setActive] = React.useState<"All" | ServiceCategory>("All");
  const reduceMotion = useReducedMotion();

  const filtered =
    active === "All"
      ? services
      : services.filter((service) => service.category === active);

  return (
    <div>
      <div
        className="flex flex-wrap items-center gap-2"
        role="tablist"
        aria-label="Filter services by category"
      >
        {serviceCategories.map((category) => {
          const count =
            category.value === "All"
              ? services.length
              : services.filter((service) => service.category === category.value)
                  .length;
          const isActive = active === category.value;
          return (
            <button
              key={category.value}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(category.value)}
              className={cn(
                "focus-ring inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-[0.72rem] font-bold uppercase tracking-[0.14em] transition-all duration-300",
                isActive
                  ? "border-oxblood bg-oxblood text-shell shadow-[0_14px_30px_-18px_rgba(69,19,23,0.8)]"
                  : "border-ink/12 bg-shell/45 text-ink-muted hover:border-oxblood/30 hover:text-ink",
              )}
            >
              {category.label}
              <span
                className={cn(
                  "text-[0.6rem] tabular-nums",
                  isActive ? "text-shell/70" : "text-ink-muted",
                )}
              >
                {String(count).padStart(2, "0")}
              </span>
            </button>
          );
        })}
      </div>

      <motion.div layout className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout" initial={false}>
          {filtered.map((service) => (
            <motion.div
              layout
              key={service.slug}
              initial={reduceMotion ? false : { opacity: 0, scale: 0.97, y: 14 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, scale: 0.97, y: -10 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href={`/services/${service.slug}`}
                className="focus-ring service-sheen group flex h-full min-h-[19rem] flex-col justify-between rounded-[1.5rem] border border-ink/10 bg-shell/50 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-oxblood/25 hover:bg-shell/85"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="flex size-11 items-center justify-center rounded-full border border-ink/10 bg-bone/70 text-oxblood">
                    <service.icon className="size-[1.15rem]" />
                  </span>
                  <span className="rounded-full border border-ink/10 px-2.5 py-1 text-[0.55rem] font-bold uppercase tracking-[0.14em] text-ink-muted">
                    {service.category === "Financial"
                      ? "Financing"
                      : service.category}
                  </span>
                </div>
                <div className="mt-8">
                  <h2 className="display-card">{service.name}</h2>
                  <p className="mt-3 text-sm leading-6 text-ink-muted">
                    {service.summary}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-[0.64rem] font-bold uppercase tracking-[0.16em] text-oxblood">
                    Learn more
                    <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
