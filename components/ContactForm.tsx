"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Clock3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

interface ContactInfo {
  icon: string;
  label: string;
  value: string;
}

interface ContactFormProps {
  headline: string;
  subheadline?: string;
  contactInfo?: ContactInfo[];
}

const iconMap: Record<string, React.ElementType> = {
  Phone,
  Mail,
  MapPin,
  Clock3,
};

export default function ContactForm({
  headline = "Request a same-hour pickup",
  subheadline = "Send the details and we’ll respond quickly with confirmation and next steps.",
  contactInfo = [
    {
      icon: "MapPin",
      label: "Address",
      value: "DHL Express Operations Center, 1250 Logistics Way, New York, NY 10001",
    },
    {
      icon: "Clock3",
      label: "Hours",
      value: "Mon–Fri 7:00–20:00",
    },
    {
      icon: "Mail",
      label: "Email",
      value: "samehour@dhl.com",
    },
    {
      icon: "Phone",
      label: "Phone",
      value: "+1 (212) 555-0138",
    },
  ],
}: Partial<ContactFormProps>) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    // Would handle API submit here if connected.
  }

  return (
    <section className="py-16 md:py-20 bg-muted/50">
      <div className="container mx-auto max-w-7xl px-4 animate-fade-in-up">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {headline}
          </h2>
          {subheadline && (
            <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>
          )}
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <Card className="border bg-background card-hover">
            <CardContent className="p-6">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      placeholder="Your full name"
                      autoComplete="name"
                      value={form.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="name@email.com"
                      autoComplete="email"
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Company (optional)"
                    value={form.company}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Pickup &amp; delivery details</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Pickup address, drop-off address, package size, deadline, recipient name/phone, and any access instructions."
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full transition-all duration-200 hover:scale-105"
                  disabled={submitted}
                >
                  {submitted ? "Request Sent" : "Request Same-Hour Pickup"}
                </Button>
                {submitted && (
                  <p className="text-sm text-muted-foreground">
                    Thanks—dispatch has received your request and will respond shortly.
                  </p>
                )}
              </form>
            </CardContent>
          </Card>
          {contactInfo && contactInfo.length > 0 && (
            <div className="flex flex-col justify-center space-y-8">
              {contactInfo.map(function (info, i) {
                const Icon = iconMap[info.icon] || Phone;
                return (
                  <div key={i} className="flex items-start gap-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">{info.label}</p>
                      <p className="text-muted-foreground">{info.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
