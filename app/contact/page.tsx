"use client"


export const dynamic = 'force-dynamic';
import type { Metadata } from "next"
import { useState } from "react"
import HeroBeams from "@/components/HeroBeams"
import ContactForm from "@/components/ContactForm"
import MapEmbed from "@/components/MapEmbed"
import ScrollReveal from "@/components/ScrollReveal"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Contact | DHL Same Hour Delivery",
  description:
    "Request same-hour pickup and connect with DHL dispatch for urgent delivery coordination.",
}

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
                { icon: "MapPin", label: "Address", value: "DHL Express Operations Center, 1250 Logistics Way, New York, NY 10001" },
                { icon: "Clock3", label: "Hours", value: "Mon–Fri 7:00–20:00" },
                { icon: "Mail", label: "Email", value: "samehour@dhl.com" },
                { icon: "Phone", label: "Phone", value: "+1 (212) 555-0138" },
              ]}
            />

            <Card className="rounded-xl border bg-card text-card-foreground shadow-sm p-6 md:p-8 card-hover">
              <form
                className="grid gap-4"
                onSubmit={(e) => {
                  e.preventDefault()
                  setSubmitted(true)
                }}
              >
                <input
                  type="text"
                  required
                  placeholder="Full name"
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground"
                />
                <input
                  type="email"
                  required
                  placeholder="Email"
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground"
                />
                <input
                  type="text"
                  placeholder="Company (optional)"
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground"
                />
                <textarea
                  required
                  rows={5}
                  placeholder="Pickup address, drop-off address, package size, deadline, recipient name/phone, and any access instructions."
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground"
                />
                <Button
                  type="submit"
                  className="rounded-lg px-6 py-3 font-medium transition-all duration-200 hover:scale-105"
                >
                  Request Same-Hour Pickup
                </Button>
                {submitted ? (
                  <p className="text-sm text-muted-foreground">
                    Thanks—dispatch has received your request and will respond shortly.
                  </p>
                ) : null}
              </form>
            </Card>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="py-16 md:py-20 bg-muted animate-fade-in-up">
          <div className="container max-w-7xl mx-auto px-4">
            <MapEmbed />
          </div>
        </section>
      </ScrollReveal>
    </main>
  )
}
