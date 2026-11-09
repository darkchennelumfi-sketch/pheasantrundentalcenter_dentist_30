import Link from "next/link";
import { ArrowUpRight, GraduationCap } from "lucide-react";

import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { doctors } from "@/lib/site";

export function Doctors() {
  return (
    <section className="grain-panel relative overflow-hidden bg-ink py-20 text-shell lg:py-28">
      <div className="pointer-events-none absolute -right-40 -top-40 size-[36rem] rounded-full border border-shell/[0.07]" />
      <div className="pointer-events-none absolute -right-24 -top-24 size-[24rem] rounded-full border border-shell/[0.05]" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 size-80 rounded-full bg-oxblood/25 blur-3xl" />

      <div className="container-x relative">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <p className="eyebrow text-gold-soft">
              <span className="h-px w-7 bg-gold-soft/60" />
              The people behind the practice
            </p>
            <h2 className="display-section mt-5 max-w-2xl text-shell">
              Three dentists.{" "}
              <span className="italic text-gold-soft">One standard of care.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <Button
              asChild
              variant="outline"
              className="border-shell/20 text-shell hover:border-gold-soft/50 hover:bg-shell/10"
            >
              <Link href="/about">
                More about our team
                <ArrowUpRight />
              </Link>
            </Button>
          </Reveal>
        </div>

        <Stagger className="mt-12 grid gap-4 lg:grid-cols-3" delay={0.1}>
          {doctors.map((doctor, index) => (
            <StaggerItem key={doctor.name} className="h-full">
              <article className="group relative flex h-full flex-col overflow-hidden rounded-[1.7rem] border border-shell/10 bg-shell/[0.045] p-6 transition-colors duration-500 hover:border-gold-soft/35 hover:bg-shell/[0.07] sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <span className="flex size-16 items-center justify-center rounded-full border border-gold-soft/25 bg-gold-soft/[0.08] font-display text-xl tracking-[-0.02em] text-gold-soft">
                    {doctor.initials}
                  </span>
                  <span className="rounded-full border border-shell/12 px-3 py-1.5 text-[0.58rem] font-bold uppercase tracking-[0.16em] text-shell/65">
                    {doctor.tenure}
                  </span>
                </div>

                <div className="mt-7">
                  <p className="text-[0.58rem] font-bold uppercase tracking-[0.2em] text-gold-soft/60">
                    Dentist {index + 1}
                  </p>
                  <h3 className="mt-2 font-display text-2xl tracking-[-0.03em] text-shell">
                    {doctor.name},{" "}
                    <span className="text-gold-soft">{doctor.credentials}</span>
                  </h3>
                  <p className="mt-2 flex items-center gap-2 text-xs text-shell/65">
                    <GraduationCap className="size-3.5" />
                    {doctor.school}
                  </p>
                </div>

                <p className="mt-5 text-sm leading-7 text-shell/62">{doctor.bio}</p>
                <p className="mt-4 border-t border-shell/10 pt-4 text-xs leading-6 text-shell/65">
                  {doctor.personal}
                </p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.12}>
          <p className="mt-8 text-center text-xs text-shell/65">
            Children, adults, and seniors — all cared for in one Williston practice.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
