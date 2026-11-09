import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "focus-ring min-h-32 w-full resize-y rounded-xl border border-ink/15 bg-shell/70 px-4 py-3.5 text-[0.95rem] text-ink shadow-[0_1px_0_0_rgba(255,255,255,0.7)_inset] transition-colors placeholder:text-ink-muted hover:border-ink/25 focus:border-oxblood/50 focus:bg-shell disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
