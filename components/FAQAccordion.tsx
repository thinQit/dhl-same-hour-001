'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

interface FAQItem {
  question: string
  answer: string
}

interface FAQAccordionProps {
  title: string
  subtitle: string
  items: FAQItem[]
  className: string
}

export default function FAQAccordion({
  title = 'Frequently Asked Questions',
  subtitle = 'Answers to common DHL Same Hour Delivery operational questions.',
  items = [
    {
      question: 'How fast can DHL arrange a same-hour pickup?',
      answer: 'Most pickups are dispatched within minutes after confirmation, subject to location and service availability.',
    },
    {
      question: 'Do you provide real-time tracking and proof of delivery?',
      answer: 'Yes. Every mission includes live tracking visibility and digital proof-of-delivery documentation.',
    },
    {
      question: 'Can you handle legal documents and sensitive materials?',
      answer: 'Absolutely. We support chain-of-custody procedures for legal, healthcare, and compliance-critical shipments.',
    },
    {
      question: 'Is service available outside standard business hours?',
      answer: 'Yes. DHL Same Hour Delivery operates 24/7, including weekends and holidays.',
    },
  ],
  className = '',
}: Partial<FAQAccordionProps>) {
  return (
    <section className={cn('py-16 md:py-20', className)}>
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">{title}</h2>
          <p className="mt-2 text-muted-foreground">{subtitle}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-xl border bg-card p-2 md:p-4"
        >
          <Accordion type="single" collapsible className="w-full">
            {items.map((item, index) => (
              <AccordionItem key={item.question} value={'item-' + index}>
                <AccordionTrigger className="text-left text-foreground">{item.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
