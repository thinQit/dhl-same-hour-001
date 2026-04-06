"use client";

import { cn } from '@/lib/utils'

interface MapEmbedProps {
  title: string
  address: string
  mapSrc: string
  className: string
}

export default function MapEmbed({
  title = 'DHL Operations Center',
  address = '360 Westar Blvd, Westerville, OH 43082',
  mapSrc = 'https://www.google.com/maps?q=360+Westar+Blvd+Westerville+OH+43082&output=embed',
  className = '',
}: Partial<MapEmbedProps>) {
  return (
    <section className={cn('py-16 md:py-20', className)}>
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-6">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">{title}</h2>
          <p className="mt-2 text-muted-foreground">{address}</p>
        </div>
        <div className="overflow-hidden rounded-xl border bg-card shadow-sm">
          <div className="aspect-[16/9] w-full">
            <iframe
              title={title}
              src={mapSrc}
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
