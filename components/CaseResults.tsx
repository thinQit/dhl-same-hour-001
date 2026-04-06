'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { ArrowUpRight, Clock3, ShieldCheck, Truck } from 'lucide-react'

interface ResultItem {
  title: string
  metric: string
  detail: string
  icon: string
}

interface CaseResultsProps {
  heading: string
  intro: string
  results: ResultItem[]
  className: string
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Clock3,
  ShieldCheck,
  Truck,
  ArrowUpRight,
}

export default function CaseResults({
  heading = 'Proven Business Case Results',
  intro = 'Operational outcomes delivered for time-critical logistics programs.',
  results = [
    {
      title: 'Medical Device Recall',
      metric: '94 min avg. resolution',
      detail: 'Reduced replacement cycle time across 14 hospital sites with same-hour dispatch.',
      icon: 'Clock3',
    },
    {
      title: 'Legal Filing Escalations',
      metric: '99.2% on-time completion',
      detail: 'Maintained court-sensitive document delivery standards with verifiable chain-of-custody.',
      icon: 'ShieldCheck',
    },
    {
      title: 'Manufacturing Line Support',
      metric: '31% downtime reduction',
      detail: 'Rapid part movement prevented prolonged production interruptions in multi-site operations.',
      icon: 'Truck',
    },
  ],
  className = '',
}: Partial<CaseResultsProps>) {
  return (
    <section className={cn('bg-muted/30 py-16 md:py-20', className)}>
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-8 md:mb-10">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">{heading}</h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">{intro}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {results.map((result) => {
            const Icon = iconMap[result.icon] || ArrowUpRight
            return (
              <Card
                key={result.title}
                className="group rounded-xl border bg-card text-card-foreground shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <CardHeader>
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-xl">{result.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-semibold text-foreground">{result.metric}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{result.detail}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
