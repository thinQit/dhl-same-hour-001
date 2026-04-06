"use client";

import type { Metadata } from "next";

interface SEOHeadProps {
  title?: string;
  description?: string;
  url?: string;
  imageSrc?: string;
}

export default function SEOHead({
  title = "DHL Same Hour Delivery | Urgent Logistics Solutions",
  description = "Discover DHL same hour delivery services for urgent business shipments, proven case studies, and rapid pickup support.",
  url = "https://www.dhl-samehour.example",
  imageSrc = "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577715/site-images/hero-backgrounds/1631677.jpg",
}: Partial<SEOHeadProps>): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      type: "website",
      images: [{ url: imageSrc, width: 1200, height: 800, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageSrc],
    },
  };
}
