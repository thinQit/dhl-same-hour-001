"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
}

interface TestimonialsGridProps {
  title?: string;
  testimonials?: Testimonial[];
  className?: string;
}

export default function TestimonialsGrid({
  title = "What Customers Say",
  testimonials = [],
  className = "",
}: Partial<TestimonialsGridProps>) {
  const fallback = testimonials.length
    ? testimonials
    : [
        {
          quote:
            "DHL same hour helped us avoid production downtime three times this quarter.",
          name: "Lars B.",
          title: "Operations Director",
          company: "Nordic Manufacturing Group",
        },
      ];

  return (
    <section className={className}>
      <h2 className="text-3xl font-semibold text-[#1E3A5F]">{title}</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {fallback.map((item, i) => (
          <motion.div
            key={item.name + i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <Card className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-slate-700">“{item.quote}”</p>
              <p className="mt-4 font-semibold text-[#1E3A5F]">{item.name}</p>
              <p className="text-sm text-slate-600">
                {item.title}, {item.company}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
