export const dynamic = 'force-dynamic';

import HeroSpotlight from "@/components/HeroSpotlight"
import AboutSection from "@/components/AboutSection"
import TeamGrid from "@/components/TeamGrid"
import CTABanner from "@/components/CTABanner"
import ScrollReveal from "@/components/ScrollReveal"
import SiteContainer from "@/components/SiteContainer"
import SEOHead from "@/components/SEOHead"

export default function AboutPage() {
  return (
    <main>
      <SEOHead
        title="About DHL Same Hour Delivery"
        description="Learn the mission, values, and team behind DHL Same Hour Delivery."
      />
      <HeroSpotlight
        title="About DHL Same Hour Delivery"
        subtitle="A service designed for urgent, intra-city shipments—built on DHL’s operational standards and customer-first communication."
        primaryCta={{ label: "Talk to our team", href: "/contact" }}
        secondaryCta={{ label: "Explore the service", href: "/same-hour-delivery" }}
        imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576912/site-images/corporate/10384120.jpg"
      />

      <ScrollReveal className="animate-fade-in-up bg-background py-20 md:py-24">
        <SiteContainer>
          <AboutSection />
        </SiteContainer>
      </ScrollReveal>

      <ScrollReveal className="animate-fade-in-up bg-muted py-20 md:py-24">
        <SiteContainer>
          <TeamGrid />
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
