import type { NextConfig } from "next";

const legacyServiceRoutes = [
  "dental-bridge",
  "dental-crown",
  "dental-implants",
  "dentures",
  "root-canal",
  "tooth-extraction",
  "restorative-dentistry",
  "cosmetic-dentistry",
  "whitening",
  "white-fillings",
  "patient-financing",
];

const nextConfig: NextConfig = {
  async redirects() {
    return legacyServiceRoutes.map((slug) => ({
      source: `/${slug}`,
      destination: `/services/${slug}`,
      permanent: true,
    }));
  },
};

export default nextConfig;
