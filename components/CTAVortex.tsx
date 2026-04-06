"use client";
import { Vortex } from "@/components/ui/backgrounds/vortex";
import { Button } from "@/components/ui/button";

interface CTAVortexProps {
  title: string;
  subtitle?: string;
  ctaLabel: string;
  ctaHref: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
}

export default function CTAVortex({
  title = "Need a same-hour courier right now?",
  subtitle = "Tell us pickup and drop-off details. Dispatch will confirm availability and the fastest route.",
  ctaLabel = "Request Pickup",
  ctaHref = "/contact",
  secondaryCtaLabel = "Same-Hour Service Details",
  secondaryCtaHref = "/same-hour-delivery",
}: Partial<CTAVortexProps>) {
  return (
    <section className="w-full mx-auto rounded-md h-[30rem] overflow-hidden">
      <Vortex
        baseHue={48}
        backgroundColor="hsl(var(--secondary))"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full animate-fade-in-up"
      >
        <h2 className="text-background text-2xl md:text-6xl font-bold text-center">{title}</h2>
        {subtitle && <p className="text-background/70 text-sm md:text-xl max-w-xl mt-6 text-center">{subtitle}</p>}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
          <Button
            size="lg"
            className="px-8 py-6 text-lg bg-background text-foreground hover:bg-background/90 transition-all duration-200 hover:scale-105"
            asChild
          >
            <a href={ctaHref}>{ctaLabel}</a>
          </Button>
          {secondaryCtaLabel && secondaryCtaHref && (
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-6 text-lg border-background/30 text-background hover:bg-background/10 transition-all duration-200 hover:scale-105"
              asChild
            >
              <a href={secondaryCtaHref}>{secondaryCtaLabel}</a>
            </Button>
          )}
        </div>
      </Vortex>
    </section>
  );
}
