"use client";

import { Card } from "@/components/ui/card";

interface CaseStudy {
  client: string;
  challenge: string;
  solution: string;
  results: string;
}

interface CaseStudiesSectionProps {
  title?: string;
  studies?: CaseStudy[];
  className?: string;
}

export default function CaseStudiesSection({
  title = "Proven Business Cases",
  studies = [
    {
      client: "Automotive Parts Supplier",
      challenge: "Assembly line risk due to missing component across city.",
      solution: "Activated same hour courier with direct hand-carry route.",
      results: "Delivery completed in 54 minutes; avoided €45k downtime cost.",
    },
    {
      client: "Medical Diagnostics Network",
      challenge: "Urgent bio-sample transfer needed before lab cutoff time.",
      solution: "Priority pickup and monitored transfer to central lab.",
      results: "Samples arrived 36 minutes ahead of deadline.",
    },
  ],
  className = "",
}: Partial<CaseStudiesSectionProps>) {
  return (
    <section className={className}>
      <h2 className="text-3xl font-semibold text-[#1E3A5F]">{title}</h2>
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {studies.map((study, i) => (
          <Card key={study.client + i} className="rounded-xl border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-[#1E3A5F]">{study.client}</h3>
            <p className="mt-3 text-sm text-slate-700"><strong>Challenge:</strong> {study.challenge}</p>
            <p className="mt-2 text-sm text-slate-700"><strong>Solution:</strong> {study.solution}</p>
            <p className="mt-2 text-sm font-medium text-[#0EA5E9]"><strong>Results:</strong> {study.results}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
