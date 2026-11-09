import * as React from "react";

import { cn } from "@/lib/utils";

export function Badge({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-ink/12 bg-shell/60 px-3.5 py-1.5 text-[0.66rem] font-bold uppercase tracking-[0.18em] text-ink-muted backdrop-blur-md",
        className,
      )}
      {...props}
    />
  );
}
