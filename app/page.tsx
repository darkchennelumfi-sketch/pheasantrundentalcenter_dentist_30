import type { Metadata } from "next";

import { CarePathways } from "@/components/home/care-pathways";
import { Cta } from "@/components/home/cta";
import { Doctors } from "@/components/home/doctors";
import { FaqSection } from "@/components/home/faq-section";
import { Hero } from "@/components/home/hero";
import { Intro } from "@/components/home/intro";
import { Philosophy } from "@/components/home/philosophy";
import { ServicesBento } from "@/components/home/services-bento";
import { Marquee } from "@/components/motion/marquee";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Dentist in Williston, ND | Family, Cosmetic & Restorative Dentistry",
  description: site.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <Intro />
      <ServicesBento />
      <CarePathways />
      <Philosophy />
      <Doctors />
      <FaqSection />
      <Cta />
    </>
  );
}
