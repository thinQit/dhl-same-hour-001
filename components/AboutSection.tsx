"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface KPI {
  label: string;
  value: string;
}

interface AboutSectionProps {
  title?: string;
  mission?: string;
  copy?: string;
  kpis?: KPI[];
  imageSrc?: string;
  className?: string;
}

export default function AboutSection({
  title = "About DHL Same Hour Logistics",
  mission = "Our mission is to keep your operations moving with ultra-fast, dependable transport.",
  copy = "From emergency parts to critical documents, our same hour team combines local market expertise, operational precision, and DHL global standards to deliver when every minute matters.",
  kpis = [
    { label: "On-time urgent deliveries", value: "98.7%" },
    { label: "Cities covered", value: "120+" },
    { label: "Average response time", value: "20 min" },
  ],
  imageSrc = "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576895/site-images/corporate/1398761.jpg",
  className = "",
}: Partial<AboutSectionProps>) {
  return (
    <section className={cn("py-20 md:py-24", className)}>
      <div className="grid items-center gap-8 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold text-[#1E3A5F] md:text-4xl">{title}</h2>
          <p className="mt-4 text-lg font-medium text-slate-800">{mission}</p>
          <p className="mt-4 text-slate-600">{copy}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {kpis.map((kpi, idx) => (
              <div
                key={kpi.label + idx}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm"
              >
                <span className="font-semibold text-[#1E3A5F]">{kpi.value}</span>{" "}
                <span className="text-slate-600">{kpi.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="overflow-hidden rounded-xl border border-slate-200">
          <Image
            src={imageSrc}
            alt="DHL logistics operations team"
            width={1200}
            height={800}
            unoptimized
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
