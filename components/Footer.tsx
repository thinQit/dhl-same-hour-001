"use client";

import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Clock3, MapPin, Phone } from 'lucide-react'

interface FooterLink {
  label: string
  href: string
}

interface FooterColumn {
  title: string
  links: FooterLink[]
}

interface FooterProps {
  brand: string
  description: string
  columns: FooterColumn[]
  copyright?: string
  className?: string
}

export default function Footer({
  brand = 'DHL Same Hour Delivery',
  description = 'Mission-critical, same-hour logistics solutions for healthcare, legal, manufacturing, and enterprise operations.',
  columns = [
    {
      title: 'Company',
      links: [
        { label: 'Home', href: '/' },
        { label: 'Same Hour Delivery', href: '/same-hour-delivery' },
        { label: 'About', href: '/about' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Proven Business Cases', href: '/proven-business-cases' },
        { label: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy', href: '/contact' },
        { label: 'Terms', href: '/contact' },
      ],
    },
  ],
  copyright,
  className = '',
}: Partial<FooterProps>) {
  return (
    <footer className={cn('border-t bg-muted/40', className)}>
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-2 md:px-6 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <h3 className="font-semibold text-foreground">{brand}</h3>
          <p className="mt-3 max-w-md text-sm text-muted-foreground">{description}</p>

          <div className="mt-6 space-y-2 text-sm text-muted-foreground">
            <p className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 text-primary" />
              DHL Operations Center, 360 Westar Blvd, Westerville, OH 43082
            </p>
            <p className="flex items-center gap-2">
              <Clock3 className="h-4 w-4 text-primary" />
              24/7 Dispatch • 365 Days a Year
            </p>
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              Priority Line: +1 (800) 225-5345
            </p>
          </div>
        </div>

        {columns.map((column) => (
          <div key={column.title}>
            <h4 className="text-sm font-semibold text-foreground">{column.title}</h4>
            <ul className="mt-3 space-y-2">
              {column.links.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 text-xs text-muted-foreground md:px-6">
          <span>{copyright ?? `© ${new Date().getFullYear()} ${brand}. All rights reserved.`}</span>
          <span>Built for time-critical logistics performance.</span>
        </div>
      </div>
    </footer>
  )
}
