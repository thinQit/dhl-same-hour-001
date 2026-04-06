export const dynamic = 'force-dynamic';

import HeroSpotlight from "@/components/HeroSpotlight"
import CaseStudiesSection from "@/components/CaseStudiesSection"
import CTABanner from "@/components/CTABanner"
import ScrollReveal from "@/components/ScrollReveal"
import SiteContainer from "@/components/SiteContainer"
import SEOHead from "@/components/SEOHead"

export default function ProvenBusinessCasesPage() {
  return (
    <main>
      <SEOHead
        title="Proven Business Cases | DHL Same Hour Delivery"
        description="See real-world same hour delivery case patterns for healthcare, manufacturing, and retail."
      />
      <HeroSpotlight
        title="Proven business cases for Same Hour Delivery"
        subtitle="Realistic examples of urgent delivery scenarios and the outcomes customers care about: uptime, compliance, and customer experience."
        primaryCta={{ label: "Discuss your case", href: "/contact" }}
        secondaryCta={{ label: "Service overview", href: "/same-hour-delivery" }}
        imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576911/site-images/corporate/11408874.jpg"
      />

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
    </main>
  )
}
