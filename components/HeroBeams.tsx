"use client";
import { BackgroundBeams } from "@/components/ui/backgrounds/background-beams";
import { Highlight } from "@/components/ui/text/hero-highlight";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface HeroBeamsProps {
  title: string;
  highlightText: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export default function HeroBeams({
  title = "Same-hour delivery for time-critical documents and parcels—handled with chain-of-custody discipline.",
  highlightText = "chain-of-custody discipline",
  subtitle = "DHL Same Hour Delivery supports legal filings, contracts, medical specimens, and high-value items with real-time updates, verified handoff, and city-wide courier coverage.",
  primaryCta = { label: "Request Same-Hour Pickup", href: "/contact" },
  secondaryCta = { label: "See Proven Business Cases", href: "/proven-business-cases" },
}: Partial<HeroBeamsProps>) {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden bg-foreground antialiased">
      <BackgroundBeams
        // Use only tokens/colors matching DHL yellow/red/secondary
        beamColors={[
          "hsl(var(--primary))",
          "hsl(var(--accent))",
          "hsl(var(--secondary))",
          "hsl(var(--muted))",
          "hsl(var(--card-foreground))",
        ]}
      />
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center animate-fade-in-up">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: [20, -5, 0] }}
          transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
          className="text-4xl font-bold leading-tight text-background sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {title} <Highlight className="text-foreground">{highlightText}</Highlight>
        </motion.h1>
        <p className="mx-auto mt-6 max-w-2xl text-base text-background/80 md:text-lg">{subtitle}</p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="px-8 py-6 text-lg transition-all duration-200 hover:scale-105" asChild>
            <a href={primaryCta?.href || "#"}>{primaryCta?.label || ""}</a>
          </Button>
          {secondaryCta && (
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-6 text-lg border-background/40 text-background hover:bg-background/10 transition-all duration-200 hover:scale-105"
              asChild
            >
              <a href={secondaryCta.href}>{secondaryCta.label}</a>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
