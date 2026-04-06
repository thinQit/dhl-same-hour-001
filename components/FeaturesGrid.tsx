"use client";

import React from "react";
import {
  Briefcase,
  Building2,
  FileText,
  Scale,
  Shield,
  ShieldCheck,
  Store,
  Truck,
  FlaskConical,
  Clapperboard,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface FeaturesGridProps {
  badge?: string;
  headline: string;
  subheadline?: string;
  features: Feature[];
}

// Extend iconMap to include all relevant icons for DHL blueprint
const iconMap: Record<string, React.ElementType> = {
  Scale,
  Briefcase,
  Shield,
  FileText,
  Building2,
  ShieldCheck,
  Store,
  Truck,
  FlaskConical,
  Clapperboard,
};

export default function FeaturesGrid({
  badge = "Service Categories",
  headline = "Time-critical delivery services for same-hour operational deadlines",
  subheadline = "Structured delivery options—clear handling, documented handoffs, and reliable SLAs for regulated industries.",
  features = [
    {
      icon: "Scale",
      title: "Court & Legal Filings",
      description: "Rush filings, notarized documents, and exhibits with signature confirmation and timestamped proof.",
    },
    {
      icon: "FileText",
      title: "Contracts & Corporate Documents",
      description: "Confidential agreements and board packets with controlled handling and verified recipient handoff.",
    },
    {
      icon: "FlaskConical",
      title: "Medical & Lab Specimens",
      description: "Priority specimen movement with route visibility and documented delivery confirmation.",
    },
    {
      icon: "ShieldCheck",
      title: "High-Value & Secure Items",
      description: "Sensitive assets moved with secure pickup, tracking, and proof of delivery.",
    },
    {
      icon: "Store",
      title: "Retail & Parts Recovery",
      description: "Urgent parts and stock transfers to prevent downtime and lost sales.",
    },
    {
      icon: "Clapperboard",
      title: "Event & Production Logistics",
      description: "Last-minute credentials, equipment, and materials delivered to tight windows.",
    },
  ],
}: Partial<FeaturesGridProps>) {
  return (
    <section className="py-16 md:py-20 bg-muted/50">
      <div className="container mx-auto max-w-7xl px-4 animate-fade-in-up">
        <div className="mx-auto max-w-2xl text-center">
          {badge && (
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
              {badge}
            </span>
          )}
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {headline}
          </h2>
          {subheadline && (
            <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>
          )}
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map(function (feature, index) {
            const Icon = iconMap[feature.icon] || Scale;
            return (
              <Card
                key={index}
                className="border-0 bg-background shadow-md hover:shadow-lg transition-shadow card-hover"
              >
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    {React.createElement(Icon, { className: "h-6 w-6" })}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
