export const dynamic = 'force-dynamic';

import type { Metadata } from "next"
import HeroBeams from "@/components/HeroBeams"
import FeaturesGrid from "@/components/FeaturesGrid"
import TeamGrid from "@/components/TeamGrid"
import CaseResults from "@/components/CaseResults"
import CTAVortex from "@/components/CTAVortex"
import FAQAccordion from "@/components/FAQAccordion"
import ContactForm from "@/components/ContactForm"
import ScrollReveal from "@/components/ScrollReveal"

export const metadata: Metadata = {
  title: "DHL Same Hour Delivery | Home",
  description:
    "Same-hour delivery for legal, medical, and high-value shipments with real-time updates and verified handoff.",
}

export default function HomePage() {
  return (
    <main>
      <div className="animate-fade-in-up">
        <HeroBeams
          title="Same-hour delivery for time-critical documents and parcels—handled with chain-of-custody discipline."
          highlightText="chain-of-custody discipline"
          subtitle="DHL Same Hour Delivery supports legal filings, contracts, medical specimens, and high-value items with real-time updates, verified handoff, and city-wide courier coverage."
          primaryCta={{ label: "Request Same-Hour Pickup", href: "/contact" }}
          secondaryCta={{ label: "See Proven Business Cases", href: "/proven-business-cases" }}
        />
      </div>

      <ScrollReveal>
        <section className="py-16 md:py-20 bg-background animate-fade-in-up">
          <div className="container max-w-7xl mx-auto px-4">
            <FeaturesGrid
              badge="Practice Areas"
              headline="Time-critical delivery services built for regulated and high-stakes workflows"
              subheadline="Structured like a legal practice: clear service scopes, documented handoffs, and predictable SLAs."
              features={[
                { icon: "Scale", title: "Court & Legal Filings", description: "Rush filings, notarized documents, and exhibits with signature confirmation and timestamped proof." },
                { icon: "FileText", title: "Contracts & Corporate Documents", description: "Confidential agreements and board packets with controlled handling and verified recipient handoff." },
                { icon: "FlaskConical", title: "Medical & Lab Specimens", description: "Priority specimen movement with route visibility and documented delivery confirmation." },
                { icon: "ShieldCheck", title: "High-Value & Secure Items", description: "Sensitive assets moved with secure pickup, tracking, and proof of delivery." },
                { icon: "Store", title: "Retail & Parts Recovery", description: "Urgent parts and stock transfers to prevent downtime and lost sales." },
                { icon: "Clapperboard", title: "Event & Production Logistics", description: "Last-minute credentials, equipment, and materials delivered to tight windows." },
              ]}
            />
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="py-16 md:py-20 bg-muted animate-fade-in-up">
          <div className="container max-w-7xl mx-auto px-4">
            <TeamGrid
              headline="Leadership team focused on same-hour operations, compliance, and customer outcomes"
              subheadline="Experienced logistics leaders who run dispatch, quality, and customer response like a mission-critical practice."
              members={[
                {
                  name: "Monica Reyes",
                  title: "Director of Same-Hour Dispatch",
                  imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577357/site-images/team-people/1181738.jpg",
                  bio: "Leads city dispatch operations with focus on fast assignment, route quality, and dependable ETAs.",
                },
                {
                  name: "Daniel Foster",
                  title: "Head of Network Operations",
                  imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577327/site-images/team-people/12899112.jpg",
                  bio: "Oversees courier network performance to maintain same-hour reliability across high-volume corridors.",
                },
                {
                  name: "Aisha Campbell",
                  title: "Customer Solutions Lead",
                  imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577370/site-images/team-people/10375912.jpg",
                  bio: "Designs delivery workflows for legal, medical, and enterprise clients with documented intake standards.",
                },
                {
                  name: "Ethan Wu",
                  title: "Compliance & Quality Manager",
                  imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577325/site-images/team-people/10347164.jpg",
                  bio: "Maintains chain-of-custody controls, proof-of-delivery quality, and escalation response procedures.",
                },
              ]}
            />
          </div>
        </section>
      </ScrollReveal>

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
              title="Need a same-hour courier right now?"
              subtitle="Tell us pickup and drop-off details. Dispatch will confirm availability and the fastest route."
              ctaLabel="Request Pickup"
              ctaHref="/contact"
              secondaryCtaLabel="Same-Hour Service Details"
              secondaryCtaHref="/same-hour-delivery"
            />
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="py-16 md:py-20 bg-muted animate-fade-in-up">
          <div className="container max-w-7xl mx-auto px-4">
            <FAQAccordion />
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="py-16 md:py-20 bg-background animate-fade-in-up">
          <div className="container max-w-7xl mx-auto px-4">
            <ContactForm
              headline="Request a same-hour pickup"
              subheadline="Send the details and we’ll respond quickly with confirmation and next steps."
              contactInfo={[
                { icon: "MapPin", label: "Address", value: "DHL Express Operations Center, 1250 Logistics Way, New York, NY 10001" },
                { icon: "Clock3", label: "Hours", value: "Mon–Fri 7:00–20:00" },
                { icon: "Mail", label: "Email", value: "samehour@dhl.com" },
                { icon: "Phone", label: "Phone", value: "+1 (212) 555-0138" },
              ]}
            />
          </div>
        </section>
      </ScrollReveal>
    </main>
  )
}
