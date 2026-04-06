"use client";

import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CTABannerProps {
  title?: string;
  description?: string;
  bullets?: string[];
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
}

export default function CTABanner({
  title = "Need a shipment delivered within the hour?",
  description = "Speak with our urgent logistics team and get immediate pickup support.",
  bullets = ["Rapid dispatch", "Real-time tracking", "Enterprise SLA options"],
  ctaLabel = "Book Same Hour Delivery",
  ctaHref = "/contact",
  className = "",
}: Partial<CTABannerProps>) {
  return (
    <section className={className}>
      <div className="relative overflow-hidden rounded-2xl bg-[#1E3A5F] p-8 text-white md:p-10">
        <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full border-8 border-[#0EA5E9]/30" />
        <h2 className="text-2xl font-semibold md:text-3xl">{title}</h2>
        <p className="mt-3 max-w-2xl text-slate-200">{description}</p>
        <ul className="mt-5 grid gap-2 md:grid-cols-3">
          {bullets.map((bullet, idx) => (
            <li key={bullet + idx} className="flex items-center gap-2 text-sm">
              <CheckCircle2 className="h-4 w-4 text-[#0EA5E9]" />
              {bullet}
            </li>
          ))}
        </ul>
        <Button asChild className="mt-6 bg-[#D40511] text-white hover:bg-[#B8040E]">
          <Link href={ctaHref}>{ctaLabel}</Link>
        </Button>
      </div>
    </section>
  );
}
