"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Menu, X, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import SiteContainer from "@/components/SiteContainer";

interface NavLinkItem {
  label: string;
  href: string;
}

interface NavbarProps {
  logo?: string;
  navItems?: NavLinkItem[];
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
}

const DEFAULT_NAV_ITEMS: NavLinkItem[] = [
  { label: "Landing", href: "/" },
  { label: "Same Hour Delivery", href: "/same-hour-delivery" },
  { label: "About Us", href: "/about" },
  { label: "Proven Business Cases", href: "/proven-business-cases" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar({
  logo = "DHL Same Hour Delivery",
  navItems = DEFAULT_NAV_ITEMS,
  ctaLabel = "Request Pickup",
  ctaHref = "/contact",
  className = "",
}: Partial<NavbarProps>) {
  const [open, setOpen] = useState(false);

  // Accessibility: close on ESC & focus first menu item on open
  const firstMenuItemRef = useRef<HTMLAnchorElement | null>(null);
  useEffect(() => {
    if (open && firstMenuItemRef.current) {
      firstMenuItemRef.current.focus();
    }
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) {
      window.addEventListener("keydown", handler);
    }
    return () => {
      window.removeEventListener("keydown", handler);
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur",
        className
      )}
    >
      <SiteContainer>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2" aria-label="DHL Same Hour Delivery Home">
            <span className="rounded-md bg-[#D40511] p-1.5 text-white">
              <Truck className="h-4 w-4" />
            </span>
            <span className="font-semibold text-[#1E3A5F]">{logo}</span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex" aria-label="Main Navigation">
            {navItems.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-700 transition hover:text-[#D40511]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button asChild className="bg-[#D40511] text-white hover:bg-[#B8040E]">
              <Link href={ctaHref}>{ctaLabel}</Link>
            </Button>
          </div>

          <button
            className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 md:hidden focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="nav-mobile-menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </SiteContainer>

      {open && (
        <div className="border-t border-slate-200 bg-white md:hidden" id="nav-mobile-menu" role="menu">
          <SiteContainer>
            <div className="flex flex-col gap-3 py-4">
              {navItems.map((link, idx) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-md px-2 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]"
                  onClick={() => setOpen(false)}
                  ref={idx === 0 ? firstMenuItemRef : undefined}
                  tabIndex={0}
                  role="menuitem"
                >
                  {link.label}
                </Link>
              ))}
              <Button
                asChild
                className="mt-2 w-full bg-[#D40511] text-white hover:bg-[#B8040E]"
              >
                <Link href={ctaHref} onClick={() => setOpen(false)} tabIndex={0}>
                  {ctaLabel}
                </Link>
              </Button>
            </div>
          </SiteContainer>
        </div>
      )}
    </header>
  );
}
