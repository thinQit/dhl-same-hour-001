"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import SiteContainer from "@/components/SiteContainer";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterProps {
  companyName?: string;
  navLinks?: FooterLink[];
  legalLinks?: FooterLink[];
  address?: string;
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
}

export default function Footer({
  companyName = "DHL Same Hour Delivery",
  navLinks = [
    { label: "Landing Page", href: "/" },
    { label: "Same Hour Delivery", href: "/same-hour-delivery" },
    { label: "About Us", href: "/about-us" },
    { label: "Proven Business Cases", href: "/proven-business-cases" },
    { label: "Contact", href: "/contact" },
  ],
  legalLinks = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Use", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
  address = "DHL Logistics Hub, 123 Express Way, Amsterdam, NL",
  ctaLabel = "Request Same Hour Pickup",
  ctaHref = "/contact",
  className = "",
}: Partial<FooterProps>) {
  return (
    <footer className={cn("border-t border-slate-200 bg-slate-50", className)}>
      <SiteContainer className="py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold text-[#1E3A5F]">{companyName}</h3>
            <p className="mt-3 text-sm text-slate-600">
              Fast, reliable same hour delivery for urgent business shipments.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-[#1E3A5F]">Navigation</h4>
            <ul className="mt-3 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-600 hover:text-[#D40511]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#1E3A5F]">Legal</h4>
            <ul className="mt-3 space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-600 hover:text-[#D40511]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#1E3A5F]">Get Started</h4>
            <p className="mt-3 text-sm text-slate-600">{address}</p>
            <Button asChild className="mt-4 bg-[#D40511] text-white hover:bg-[#B8040E]">
              <Link href={ctaHref}>{ctaLabel}</Link>
            </Button>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 text-sm text-slate-500">
          © {new Date().getFullYear()} {companyName}. All rights reserved.
        </div>
      </SiteContainer>
    </footer>
  );
}
