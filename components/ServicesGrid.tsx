"use client";

import { Card } from "@/components/ui/card";
import { Clock3, ShieldCheck, Route, Warehouse, PackageCheck } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceItem {
  title: string;
  description: string;
  highlight: string;
  icon: string;
}

interface ServicesGridProps {
  title?: string;
  subtitle?: string;
  services?: ServiceItem[];
  className?: string;
}

const iconMap = {
  Clock3,
  ShieldCheck,
  Route,
  Warehouse,
  PackageCheck,
};

export default function ServicesGrid({
  title = "Same Hour Delivery Services",
  subtitle = "Purpose-built urgent logistics options for businesses that cannot wait.",
  services = [
    {
      title: "Immediate Pickup",
      description: "Driver dispatched within minutes after booking confirmation.",
      highlight: "Average pickup in 20 minutes",
      icon: "Clock3",
    },
    {
      title: "Secure Chain of Custody",
      description: "End-to-end monitored transit with proof of handover.",
      highlight: "100% tracked movement",
      icon: "ShieldCheck",
    },
    {
      title: "Direct Route Delivery",
      description: "No hub delays. Courier runs direct from sender to recipient.",
      highlight: "Reduced transit risk",
      icon: "Route",
    },
    {
      title: "Critical Parts Logistics",
      description: "Ideal for manufacturing stoppage prevention and replacement parts.",
      highlight: "Downtime minimized",
      icon: "Warehouse",
    },
    {
      title: "Medical & Legal Priority",
      description: "Time-sensitive documents and medical kits handled with urgency.",
      highlight: "Priority handling",
      icon: "PackageCheck",
    },
  ],
  className = "",
}: Partial<ServicesGridProps>) {
  return (
    <section className={cn("py-20 md:py-24", className)}>
      <div className="mb-10 max-w-2xl">
        <h2 className="text-3xl font-semibold text-[#1E3A5F] md:text-4xl">{title}</h2>
        <p className="mt-3 text-slate-600">{subtitle}</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => {
          const Icon = iconMap[service.icon as keyof typeof iconMap] || PackageCheck;
          return (
            <Card
              key={service.title + index}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div className="mb-4 inline-flex rounded-lg bg-[#FFF4F5] p-2 text-[#D40511]">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-[#1E3A5F]">{service.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{service.description}</p>
              <p className="mt-4 text-sm font-medium text-[#0EA5E9]">{service.highlight}</p>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
