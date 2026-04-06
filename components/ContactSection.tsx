"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";

interface ContactSectionProps {
  title?: string;
  description?: string;
  className?: string;
}

export default function ContactSection({
  title = "Contact DHL Same Hour Team",
  description = "Reach us for urgent delivery requests, SLA consultations, or custom business setups.",
  className = "",
}: Partial<ContactSectionProps>) {
  return (
    <section className={className}>
      <div className="mb-8 max-w-2xl">
        <h2 className="text-3xl font-semibold text-[#1E3A5F]">{title}</h2>
        <p className="mt-3 text-slate-600">{description}</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="rounded-xl border border-slate-200 p-6">
          <Phone className="h-5 w-5 text-[#D40511]" />
          <h3 className="mt-3 font-semibold text-[#1E3A5F]">Phone</h3>
          <p className="mt-1 text-sm text-slate-600">+31 20 555 0123</p>
        </Card>
        <Card className="rounded-xl border border-slate-200 p-6">
          <Mail className="h-5 w-5 text-[#D40511]" />
          <h3 className="mt-3 font-semibold text-[#1E3A5F]">Email</h3>
          <p className="mt-1 text-sm text-slate-600">samehour@dhl-logistics.example</p>
        </Card>
        <Card className="rounded-xl border border-slate-200 p-6">
          <MapPin className="h-5 w-5 text-[#D40511]" />
          <h3 className="mt-3 font-semibold text-[#1E3A5F]">Office</h3>
          <p className="mt-1 text-sm text-slate-600">123 Express Way, Amsterdam</p>
        </Card>
      </div>

      <Card className="mt-6 rounded-xl border border-slate-200 p-6">
        <h3 className="font-semibold text-[#1E3A5F]">Request a Callback</h3>
        <p className="mt-2 text-sm text-slate-600">
          Use your preferred contact form page to collect shipment details and callback windows.
        </p>
        <Button className="mt-4 bg-[#D40511] text-white hover:bg-[#B8040E]">
          Open Contact Form
        </Button>
      </Card>
    </section>
  );
}
