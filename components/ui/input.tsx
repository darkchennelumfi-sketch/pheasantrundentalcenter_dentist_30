import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "focus-ring h-12 w-full rounded-xl border border-ink/15 bg-shell/70 px-4 text-[0.95rem] text-ink shadow-[0_1px_0_0_rgba(255,255,255,0.7)_inset] transition-colors placeholder:text-ink-muted hover:border-ink/25 focus:border-oxblood/50 focus:bg-shell disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
