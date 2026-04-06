"use client";
import { Spotlight } from "@/components/ui/backgrounds/spotlight";
import { TypewriterEffect } from "@/components/ui/text/typewriter-effect";
import { Button } from "@/components/ui/button";

interface HeroSpotlightProps {
  headline: string;
  subheadline: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export default function HeroSpotlight({
  headline = "Strategic Leadership for Measurable Business Growth",
  subheadline = "I help organizations align teams, optimize operations, and execute high-impact initiatives with clarity and confidence.",
  primaryCta = { label: "Book a Consultation", href: "#contact" },
  secondaryCta = { label: "View Case Studies", href: "#case-studies" },
}: Partial<HeroSpotlightProps>) {
  var words = headline.split(" ").map(function (word) {
    return { text: word, className: "text-foreground" };
  });

  return (
    <section className="relative flex min-h-[600px] flex-col items-center justify-center overflow-hidden rounded-md bg-background antialiased md:min-h-[700px]">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="hsl(var(--primary))" />
      <div className="absolute inset-0 bg-muted/30" />
      <div className="relative z-10 mx-auto w-full max-w-4xl animate-fade-in-up p-4 pt-20 text-center md:pt-0">
        <TypewriterEffect
          words={words}
          className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl"
          cursorClassName="bg-primary"
        />
        <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">{subheadline}</p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="px-8 py-6 text-lg transition-all duration-200 hover:scale-105" asChild>
            <a href={primaryCta.href}>{primaryCta.label}</a>
          </Button>
          {secondaryCta && (
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-6 text-lg transition-all duration-200 hover:scale-105"
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
