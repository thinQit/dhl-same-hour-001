export const dynamic = 'force-dynamic';

import type { Metadata } from "next"
import HeroBeams from "@/components/HeroBeams"
import TeamGrid from "@/components/TeamGrid"
import ScrollReveal from "@/components/ScrollReveal"

export const metadata: Metadata = {
  title: "About | DHL Same Hour Delivery",
  description:
    "Learn about the leadership and operational mission behind DHL Same Hour Delivery.",
}

export default function AboutPage() {
  return (
    <main>
      <div className="animate-fade-in-up">
        <HeroBeams
          title="Operational excellence for time-critical delivery."
          highlightText="Operational excellence"
          subtitle="Our same-hour team runs dispatch, quality, and customer response with disciplined processes and clear communication."
          primaryCta={{ label: "Meet the Team", href: "#team" }}
          secondaryCta={{ label: "Contact", href: "/contact" }}
        />
      </div>

      <ScrollReveal>
        <section className="py-16 md:py-20 bg-background animate-fade-in-up">
          <div className="container max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-heading)] mb-6">Our mission</h2>
            <p className="text-base md:text-lg text-muted-foreground mb-4">
              Deliver urgent items safely, quickly, and with documentation you can rely on.
            </p>
            <p className="text-base md:text-lg text-muted-foreground mb-4">
              Same-hour delivery is about more than speed—it’s about certainty. We focus on predictable intake,
              clear ETAs, and verified delivery confirmation.
            </p>
            <p className="text-base md:text-lg text-muted-foreground">
              For legal, medical, and high-value deliveries, we emphasize controlled handling and communication at every step.
            </p>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section id="team" className="py-16 md:py-20 bg-muted animate-fade-in-up">
          <div className="container max-w-7xl mx-auto px-4">
            <TeamGrid
              headline="Leadership"
              subheadline="Experienced operators focused on dispatch performance and customer outcomes."
              members={[
                {
                  name: "Monica Reyes",
                  title: "Director of Same-Hour Dispatch",
                  imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577351/site-images/team-people/12903244.jpg",
                  bio: "Coordinates dispatch standards and rapid response workflows for legal and enterprise clients.",
                },
                {
                  name: "Daniel Foster",
                  title: "Head of Network Operations",
                  imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577363/site-images/team-people/12903169.jpg",
                  bio: "Optimizes metro routing and courier capacity to protect same-hour SLAs.",
                },
                {
                  name: "Aisha Campbell",
                  title: "Customer Solutions Lead",
                  imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577335/site-images/team-people/1181734.jpg",
                  bio: "Builds delivery plans for sensitive workflows requiring secure handling and clear communication.",
                },
                {
                  name: "Ethan Wu",
                  title: "Compliance & Quality Manager",
                  imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577321/site-images/team-people/1181622.jpg",
                  bio: "Maintains chain-of-custody, delivery verification, and escalation governance.",
                },
              ]}
            />
          </div>
        </section>
      </ScrollReveal>
    </main>
  )
}
