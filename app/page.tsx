export const dynamic = 'force-dynamic';

import HeroSpotlight from "@/components/HeroSpotlight"
import ServicesGrid from "@/components/ServicesGrid"
import AboutSection from "@/components/AboutSection"
import TeamGrid from "@/components/TeamGrid"
import TestimonialsGrid from "@/components/TestimonialsGrid"
import CaseStudiesSection from "@/components/CaseStudiesSection"
import CTABanner from "@/components/CTABanner"
import ContactSection from "@/components/ContactSection"
import ScrollReveal from "@/components/ScrollReveal"
import SiteContainer from "@/components/SiteContainer"
import SEOHead from "@/components/SEOHead"

export default function HomePage() {
  return (
    <main>
      <SEOHead
        title="DHL Same Hour Delivery | Urgent metro delivery with tracking & proof of delivery"
        description="Learn about DHL Same Hour Delivery for urgent intra-city shipments. Get coverage confirmation, ETA, tracking, and proof of delivery."
      />
      <HeroSpotlight
        title="Same Hour Delivery for time-critical shipments—across the city, on demand"
        subtitle="DHL Same Hour Delivery helps operations teams, healthcare providers, and retail brands move urgent parcels in as little as 60 minutes."
        primaryCta={{ label: "Request a Same Hour Pickup", href: "/contact" }}
        secondaryCta={{ label: "How it works", href: "/same-hour-delivery" }}
        imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576895/site-images/corporate/1398761.jpg"
      />

      <ScrollReveal className="animate-fade-in-up bg-background py-20 md:py-24">
        <SiteContainer>
          <ServicesGrid />
        </SiteContainer>
      </ScrollReveal>

      <ScrollReveal className="animate-fade-in-up bg-muted py-20 md:py-24">
        <SiteContainer>
          <AboutSection />
        </SiteContainer>
      </ScrollReveal>

      <ScrollReveal className="animate-fade-in-up bg-background py-20 md:py-24">
        <SiteContainer>
          <TeamGrid />
        </SiteContainer>
      </ScrollReveal>

      <ScrollReveal className="animate-fade-in-up bg-muted py-20 md:py-24">
        <SiteContainer>
          <TestimonialsGrid />
        </SiteContainer>
      </ScrollReveal>

      <ScrollReveal className="animate-fade-in-up bg-background py-20 md:py-24">
        <SiteContainer>
          <CaseStudiesSection />
        </SiteContainer>
      </ScrollReveal>

      <ScrollReveal className="animate-fade-in-up bg-primary py-20 md:py-24">
        <SiteContainer>
          <CTABanner />
        </SiteContainer>
      </ScrollReveal>

      <ScrollReveal className="animate-fade-in-up bg-muted py-20 md:py-24">
        <SiteContainer>
          <ContactSection />
        </SiteContainer>
      </ScrollReveal>
    </main>
  )
}
