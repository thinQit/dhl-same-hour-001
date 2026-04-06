"use client";

interface Step {
  title: string;
  description: string;
}

interface StepsTimelineProps {
  title?: string;
  steps?: Step[];
  className?: string;
}

export default function StepsTimeline({
  title = "How Same Hour Delivery Works",
  steps = [
    { title: "1. Submit Request", description: "Share pickup, drop-off, and parcel details." },
    { title: "2. Instant Dispatch", description: "Nearest courier is assigned immediately." },
    { title: "3. Live Transit", description: "Track movement in real time with milestone updates." },
    { title: "4. Confirm Delivery", description: "Recipient handover is recorded and shared." },
  ],
  className = "",
}: Partial<StepsTimelineProps>) {
  return (
    <section className={className}>
      <h2 className="text-3xl font-semibold text-[#1E3A5F]">{title}</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, idx) => (
          <div key={step.title + idx} className="rounded-xl border border-slate-200 bg-white p-5">
            <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#D40511] text-sm font-semibold text-white">
              {idx + 1}
            </div>
            <h3 className="font-semibold text-[#1E3A5F]">{step.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
