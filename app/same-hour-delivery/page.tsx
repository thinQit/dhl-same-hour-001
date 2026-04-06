export const dynamic = 'force-dynamic';

import HeroSpotlight from "@/components/HeroSpotlight"
import FeaturesGrid from "@/components/FeaturesGrid"
import StepsTimeline from "@/components/StepsTimeline"
import FAQAccordion from "@/components/FAQAccordion"
import CTABanner from "@/components/CTABanner"
import ScrollReveal from "@/components/ScrollReveal"
import SiteContainer from "@/components/SiteContainer"
import SEOHead from "@/components/SEOHead"

export default function SameHourDeliveryPage() {
  return (
    <main>
      <SEOHead
        title="Same Hour Delivery — DHL"
        description="How DHL Same Hour Delivery works, what is included, and how to choose the right urgent service level."
      />
      <HeroSpotlight
        title="Same Hour Delivery—how it works, what’s included, and when to use it"
        subtitle="A clear overview of coverage, service levels, tracking, and proof of delivery—so you can book urgent shipments with confidence."
        primaryCta={{ label: "Request pickup", href: "/contact" }}
        secondaryCta={{ label: "View business cases", href: "/proven-business-cases" }}
        imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576864/site-images/corporate/1181344.jpg"
      />

      <ScrollReveal className="animate-fade-in-up bg-background py-20 md:py-24">
        <SiteContainer>
          <FeaturesGrid
            badge="Service levels"
            headline="Pick the speed and predictability you need"
            subheadline="Choose Same Hour, Rush, or Scheduled Express based on urgency and SLA."
            features={[
              { icon: "Timer", title: "Same Hour (Priority)", description: "Target ~60 minutes with priority dispatch and proactive updates." },
              { icon: "Truck", title: "Rush (90–120 min)", description: "A cost-effective urgent option with live tracking and POD." },
              { icon: "CalendarClock", title: "Scheduled Express", description: "Pre-booked windows with chain-of-custody and confirmation." },
            ]}
          />
        </SiteContainer>
      </ScrollReveal>

      <ScrollReveal className="animate-fade-in-up bg-muted py-20 md:py-24">
        <SiteContainer>
          <StepsTimeline />
        </SiteContainer>
      </ScrollReveal>

      <ScrollReveal className="animate-fade-in-up bg-background py-20 md:py-24">
        <SiteContainer>
          <FAQAccordion />
        </SiteContainer>
      </ScrollReveal>

      <ScrollReveal className="animate-fade-in-up bg-primary py-20 md:py-24">
        <SiteContainer>
          <CTABanner />
        </SiteContainer>
      </ScrollReveal>
    </main>
  )
}
