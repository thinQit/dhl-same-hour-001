'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

interface NavItem {
  label: string
  href: string
}

interface NavbarProps {
  logo: string
  navItems: NavItem[]
  ctaLabel?: string
  ctaHref?: string
  logoImageSrc?: string
  className?: string
}

export default function Navbar({
  logo = 'DHL Same Hour Delivery',
  navItems = [
    { label: 'Home', href: '/' },
    { label: 'Same Hour Delivery', href: '/same-hour-delivery' },
    { label: 'About', href: '/about' },
    { label: 'Proven Business Cases', href: '/proven-business-cases' },
    { label: 'Contact', href: '/contact' },
  ],
  ctaLabel = 'Request Pickup',
  ctaHref = '/contact',
  logoImageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576897/site-images/corporate/10041267.jpg',
  className = '',
}: Partial<NavbarProps>) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className={cn('sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/90', className)}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={logoImageSrc}
            alt={logo}
            width={40}
            height={40}
            unoptimized
            className="rounded-md object-cover"
          />
          <span className="font-semibold tracking-tight text-foreground">{logo}</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href + item.label}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          {ctaLabel && ctaHref ? (
            <Button className="ml-2 bg-primary text-primary-foreground hover:bg-primary/90" asChild>
              <Link href={ctaHref}>{ctaLabel}</Link>
            </Button>
          ) : null}
        </nav>

        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {isOpen && (
        <div className="border-t bg-background md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3">
            {navItems.map((item) => (
              <Link
                key={item.href + '-mobile'}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-muted hover:text-foreground"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            {ctaLabel && ctaHref ? (
              <Button className="mt-2 bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                <Link href={ctaHref}>{ctaLabel}</Link>
              </Button>
            ) : null}
          </nav>
        </div>
      )}
    </header>
  )
}
