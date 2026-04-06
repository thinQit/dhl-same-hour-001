export const dynamic = 'force-dynamic';

import type { Metadata } from "next"
import HeroBeams from "@/components/HeroBeams"
import FeaturesGrid from "@/components/FeaturesGrid"
import CTAVortex from "@/components/CTAVortex"
import ScrollReveal from "@/components/ScrollReveal"

export const metadata: Metadata = {
  title: "Same-Hour Delivery | DHL Same Hour Delivery",
  description:
    "Priority dispatch, verified handoff, and real-time tracking for urgent same-hour deliveries.",
}

export default function SameHourDeliveryPage() {
  return (
    <main>
      <div className="animate-fade-in-up">
        <HeroBeams
          title="Same-hour delivery, engineered for deadlines."
          highlightText="engineered for deadlines"
          subtitle="Priority dispatch, real-time updates, and verified handoff for documents and parcels that can’t wait."
          primaryCta={{ label: "Request Pickup", href: "/contact" }}
          secondaryCta={{ label: "View Business Cases", href: "/proven-business-cases" }}
        />
      </div>

      <ScrollReveal>
        <section className="py-16 md:py-20 bg-background animate-fade-in-up">
          <div className="container max-w-7xl mx-auto px-4">
            <FeaturesGrid
              badge="Service Details"
              headline="What you get with DHL Same Hour"
              subheadline="A structured, documented delivery process designed to reduce risk and uncertainty."
              features={[
                { icon: "ClipboardCheck", title: "Intake Control", description: "Pickup/drop-off details, deadlines, handling notes, and recipient contacts captured up front." },
                { icon: "Truck", title: "Priority Dispatch", description: "Courier assignment and ETA confirmation aligned to urgency and route constraints." },
                { icon: "Radar", title: "Live Visibility", description: "In-transit monitoring with real-time status updates and proactive exception handling." },
                { icon: "Signature", title: "Verified Completion", description: "Signature and timestamped confirmation for dependable proof of delivery." },
                { icon: "Briefcase", title: "Common Use Cases", description: "Court filings, contract packets, specimens, and critical parts recovery." },
                { icon: "Shield", title: "Secure Handling", description: "Disciplined handoff procedures for confidential and high-value items." },
              ]}
            />
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="py-16 md:py-20 bg-secondary text-secondary-foreground animate-fade-in-up">
          <div className="container max-w-7xl mx-auto px-4">
            <CTAVortex
              title="Ready to book a same-hour courier?"
              subtitle="Send your request and we’ll confirm the fastest available option."
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
