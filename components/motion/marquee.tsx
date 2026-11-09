import { Asterisk } from "lucide-react";

import { services } from "@/lib/services";

export function Marquee() {
  const items = services.map((service) => service.shortName);

  return (
    <div className="relative overflow-hidden border-y border-ink/10 bg-shell/45 py-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r from-bone to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l from-bone to-transparent" />
      <div className="flex w-max animate-marquee items-center gap-8 whitespace-nowrap">
        {[0, 1].map((copy) => (
          <div
            key={copy}
            className="flex items-center gap-8"
            aria-hidden={copy === 1}
          >
            {items.map((item) => (
              <span
                key={`${copy}-${item}`}
                className="flex items-center gap-8 text-[0.68rem] font-bold uppercase tracking-[0.24em] text-ink-muted"
              >
                {item}
                <Asterisk className="size-3 text-oxblood/80" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
