"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  title?: string;
  items?: FAQItem[];
  className?: string;
}

export default function FAQAccordion({
  title = "Frequently Asked Questions",
  items = [
    {
      question: "How fast can you pick up a parcel?",
      answer: "In most metro areas, pickup starts within 20 minutes after confirmation.",
    },
    {
      question: "Can I track my same hour shipment live?",
      answer: "Yes, we provide real-time tracking and proof of delivery updates.",
    },
    {
      question: "Do you support enterprise contracts?",
      answer: "Yes, we offer SLA-based plans for recurring urgent delivery needs.",
    },
  ],
  className = "",
}: Partial<FAQAccordionProps>) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className={className}>
      <h2 className="text-3xl font-semibold text-[#1E3A5F]">{title}</h2>
      <div className="mt-6 space-y-3">
        {items.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={item.question + idx} className="rounded-xl border border-slate-200 bg-white">
              <button
                className="flex w-full items-center justify-between px-4 py-4 text-left"
                onClick={() => setOpenIndex(isOpen ? -1 : idx)}
              >
                <span className="font-medium text-[#1E3A5F]">{item.question}</span>
                <ChevronDown className={cn("h-4 w-4 transition-transform", isOpen && "rotate-180")} />
              </button>
              {isOpen && <p className="px-4 pb-4 text-sm text-slate-600">{item.answer}</p>}
            </div>
          );
        })}
      </div>
    </section>
  );
}
