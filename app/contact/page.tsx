"use client"


export const dynamic = 'force-dynamic';
import HeroSpotlight from "@/components/HeroSpotlight"
import ContactSection from "@/components/ContactSection"
import ContactForm from "@/components/ContactForm"
import CTABanner from "@/components/CTABanner"
import ScrollReveal from "@/components/ScrollReveal"
import SiteContainer from "@/components/SiteContainer"
import SEOHead from "@/components/SEOHead"

export default function ContactPage() {
  return (
    <main>
      <SEOHead
        title="Contact DHL Same Hour Delivery"
        description="Request same hour delivery and get coverage confirmation, ETA, and pricing during service hours."
      />
      <HeroSpotlight
        title="Request Same Hour Delivery"
        subtitle="Send your shipment details and we’ll confirm coverage, ETA, and pricing during service hours."
        primaryCta={{ label: "Submit request", href: "#contact-form" }}
        secondaryCta={{ label: "Call now", href: "tel:+1-800-555-0199" }}
        imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576868/site-images/corporate/12274675.jpg"
      />

      <ScrollReveal className="animate-fade-in-up bg-background py-20 md:py-24">
        <SiteContainer>
          <ContactSection />
        </SiteContainer>
      </ScrollReveal>

      <ScrollReveal className="animate-fade-in-up bg-muted py-20 md:py-24">
        <SiteContainer>
          <div id="contact-form">
            <ContactForm
              headline="Shipment request form"
              subheadline="Provide the essentials so we can confirm availability and ETA quickly."
              contactInfo={[
                { icon: "Phone", label: "Same Hour Delivery Desk", value: "+1 (800) 555-0199" },
                { icon: "Mail", label: "Email", value: "samehour@dhl-example.com" },
                { icon: "Clock3", label: "Service Hours", value: "Mon–Fri 07:00–21:00, Sat 09:00–17:00" },
              ]}
            />
          </div>
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
