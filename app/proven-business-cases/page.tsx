export const dynamic = 'force-dynamic';

import type { Metadata } from "next"
import HeroBeams from "@/components/HeroBeams"
import CaseResults from "@/components/CaseResults"
import CTAVortex from "@/components/CTAVortex"
import ScrollReveal from "@/components/ScrollReveal"

export const metadata: Metadata = {
  title: "Proven Business Cases | DHL Same Hour Delivery",
  description:
    "Representative same-hour delivery outcomes that protected deadlines and reduced operational risk.",
}

export default function ProvenBusinessCasesPage() {
  return (
    <main>
      <div className="animate-fade-in-up">
        <HeroBeams
          title="When minutes matter: proven same-hour outcomes."
          highlightText="proven same-hour outcomes"
          subtitle="Examples of time-critical deliveries supported by disciplined dispatch and verified handoff."
          primaryCta={{ label: "Request Pickup", href: "/contact" }}
          secondaryCta={{ label: "Same-Hour Service", href: "/same-hour-delivery" }}
        />
      </div>

      <ScrollReveal>
        <section className="py-16 md:py-20 bg-background animate-fade-in-up">
          <div className="container max-w-7xl mx-auto px-4">
            <CaseResults />
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="py-16 md:py-20 bg-secondary text-secondary-foreground animate-fade-in-up">
          <div className="container max-w-7xl mx-auto px-4">
            <CTAVortex
              title="Have a deadline today?"
              subtitle="Send pickup and drop-off details and we’ll confirm the fastest available option."
              ctaLabel="Request Pickup"
              ctaHref="/contact"
              secondaryCtaLabel="FAQ"
              secondaryCtaHref="/"
            />
          </div>
        </section>
      </ScrollReveal>
    </main>
  )
}
