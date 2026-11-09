import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";

import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["SOFT", "WONK", "opsz"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Pheasant Run Dental Center | Dentist in Williston, ND",
    template: "%s | Pheasant Run Dental Center",
  },
  description: site.description,
  keywords: [
    "dentist Williston ND",
    "Pheasant Run Dental Center",
    "family dentist Williston",
    "cosmetic dentistry Williston",
    "dental implants Williston",
    "emergency dentist Williston",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: "Pheasant Run Dental Center | Dentist in Williston, ND",
    description: site.description,
    images: [
      {
        url: "/images/hero.jpg",
        width: 2000,
        height: 1109,
        alt: "Pheasant Run Dental Center in Williston, North Dakota",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pheasant Run Dental Center | Dentist in Williston, ND",
    description: site.description,
    images: ["/images/hero.jpg"],
  },
  icons: {
    icon: "/icon.svg",
  },
};

const dentistSchema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: site.name,
  url: site.url,
  telephone: site.phone,
  email: site.email,
  description: site.description,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.line1,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    postalCode: site.address.zip,
    addressCountry: "US",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "17:00",
  },
  sameAs: [site.facebook],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <body>
        <a
          href="#main-content"
          className="focus-ring fixed left-4 top-4 z-[100] -translate-y-24 rounded-full bg-oxblood px-5 py-3 text-sm font-semibold text-shell transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(dentistSchema) }}
        />
      </body>
    </html>
  );
}
