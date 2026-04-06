"use client"

export const dynamic = "force-dynamic"

import { useState } from "react"
import HeroBeams from "@/components/HeroBeams"
import ContactForm from "@/components/ContactForm"
import MapEmbed from "@/components/MapEmbed"
import ScrollReveal from "@/components/ScrollReveal"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <main>
      <div className="animate-fade-in-up">
        <HeroBeams
          title="Request a same-hour pickup"
          highlightText="same-hour pickup"
          subtitle="Share the details and dispatch will respond with confirmation and next steps."
          primaryCta={{ label: "Submit Request", href: "#contact-form" }}
          secondaryCta={{ label: "Same-Hour Service", href: "/same-hour-delivery" }}
        />
      </div>

      <ScrollReveal>
        <section id="contact-form" className="py-16 md:py-20 bg-background animate-fade-in-up">
          <div className="container max-w-7xl mx-auto px-4 space-y-8">
            <ContactForm
              headline="Dispatch intake form"
              subheadline="We use this information to confirm ETA, handling requirements, and recipient details."
              contactInfo={[
                {
                  icon: "MapPin",
                  label: "Address",
                  value: "DHL Express Operations Center, 1250 Logistics Way, New York, NY 10001",
                },
                { icon: "Clock3", label: "Hours", value: "Mon–Fri 7:00–20:00" },
                { icon: "Mail", label: "Email", value: "samehour@dhl.com" },
                { icon: "Phone", label: "Phone", value: "+1 (212) 555-0138" },
              ]}
            />

            <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
              <Card className="rounded-3xl border border-border/50 bg-card/80 p-8 shadow-lg">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">What happens next</h3>
                  <p className="text-muted-foreground">
                    Our dispatch team reviews every request, confirms availability, and calls back
                    with a pickup window and driver details.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button asChild>
                      <a href="tel:+12125550138">Call dispatch</a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href="mailto:samehour@dhl.com">Email dispatch</a>
                    </Button>
                  </div>
                </div>
              </Card>
              <Card className="rounded-3xl border border-border/50 bg-card/80 p-4 shadow-lg">
                <MapEmbed />
              </Card>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </main>
  )
}
