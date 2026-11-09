import Image from "next/image";

import { cn } from "@/lib/utils";

export function BrandMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "relative flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-full border border-ink/10 bg-shell shadow-[0_6px_18px_-10px_rgba(25,26,23,0.45)]",
        className,
      )}
    >
      <Image
        src="/images/logo.jpg"
        alt=""
        width={96}
        height={96}
        className="size-full scale-[1.18] object-cover mix-blend-multiply"
        priority
      />
    </span>
  );
}
