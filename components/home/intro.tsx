import { Asterisk, HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";

import { CountUp } from "@/components/motion/count-up";
import { Reveal } from "@/components/motion/reveal";
import { stats } from "@/lib/site";

const values = [
  {
    icon: HeartHandshake,
    title: "Family friendly",
    copy: "Children, adults, and seniors — all under one familiar roof.",
  },
  {
    icon: ShieldCheck,
    title: "Preventive first",
    copy: "Routine exams, cleanings, sealants, fluoride, and early care.",
  },
  {
    icon: Sparkles,
    title: "Cosmetic too",
    copy: "Whitening, veneers, and smile makeovers that still respect health.",
  },
];

export function Intro() {
  return (
    <section className="relative overflow-hidden border-t border-ink/10 py-20 lg:py-28">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="eyebrow text-oxblood">
                <Asterisk className="size-4" />
                A practice built on people
              </p>
              <p className="mt-6 max-w-xs text-sm leading-7 text-ink-muted">
                Located in Williston, North Dakota, Pheasant Run Dental Center
                provides modern dental care with small-town warmth.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <Reveal delay={0.08}>
              <h2 className="display-section max-w-3xl">
                A dental home in the heart of{" "}
                <span className="italic text-oxblood">Williston.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="mt-7 grid gap-5 text-[1.02rem] leading-[1.8] text-ink-muted md:grid-cols-2">
                <p>
                  We provide all of our patients with state-of-the-art dental
                  procedures in a family-friendly environment. From preventive
                  checkups to cosmetic care and emergency services, our doors
                  are open to people of all ages.
                </p>
                <p>
                  As members of the American Dental Association, our dentists
                  bring more than 20 years of experience to the fine residents
                  of Williston and the surrounding areas — with the kind of
                  continuity that comes from a practice rooted in community.
                </p>
              </div>
            </Reveal>
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {values.map((value, index) => (
                <Reveal key={value.title} delay={0.2 + index * 0.07}>
                  <div className="group h-full rounded-2xl border border-ink/10 bg-shell/45 p-5 transition-colors hover:border-oxblood/25 hover:bg-shell/75">
                    <value.icon className="size-5 text-oxblood/75" />
                    <p className="mt-4 text-sm font-bold text-ink">{value.title}</p>
                    <p className="mt-2 text-xs leading-5 text-ink-muted">
                      {value.copy}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container-x mt-16 lg:mt-24">
        <Reveal>
          <div className="grain-panel relative overflow-hidden rounded-[2rem] bg-oxblood-deep px-6 py-10 text-shell sm:px-10 lg:px-14 lg:py-12">
            <div className="pointer-events-none absolute -right-20 -top-24 size-72 rounded-full border border-shell/10" />
            <div className="pointer-events-none absolute -right-8 -top-12 size-48 rounded-full border border-shell/[0.07]" />
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={
                    index === 0
                      ? "lg:pr-8"
                      : "border-l-0 sm:border-l sm:border-shell/15 sm:pl-8 lg:pr-8"
                  }
                >
                  <p className="font-display text-[3.4rem] font-light leading-none tracking-[-0.05em] text-gold-soft">
                    <CountUp value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-3 max-w-40 text-[0.66rem] font-bold uppercase leading-5 tracking-[0.18em] text-shell/70">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
