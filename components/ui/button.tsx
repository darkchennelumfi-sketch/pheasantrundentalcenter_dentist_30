import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "focus-ring inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold tracking-[-0.01em] transition-[transform,background-color,color,border-color,box-shadow] duration-300 ease-out disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-oxblood text-shell shadow-[0_14px_34px_-16px_rgba(69,19,23,0.75)] hover:-translate-y-0.5 hover:bg-oxblood-deep hover:shadow-[0_20px_44px_-18px_rgba(69,19,23,0.8)]",
        outline:
          "border border-ink/20 bg-transparent text-ink hover:-translate-y-0.5 hover:border-oxblood/45 hover:bg-shell/60",
        ghost: "text-ink hover:bg-ink/5",
        light:
          "bg-shell text-oxblood-deep shadow-[0_14px_34px_-16px_rgba(0,0,0,0.45)] hover:-translate-y-0.5 hover:bg-white",
        dark: "bg-ink text-shell hover:-translate-y-0.5 hover:bg-moss",
      },
      size: {
        default: "h-11 px-6",
        sm: "h-9 px-4 text-xs",
        lg: "h-13 px-7 text-[0.95rem]",
        icon: "size-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
