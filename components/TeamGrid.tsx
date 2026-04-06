"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  location: string;
  photo?: string;
}

interface TeamGridProps {
  title?: string;
  subtitle?: string;
  members?: TeamMember[];
  className?: string;
}

export default function TeamGrid({
  title = "A team built around urgency and accountability",
  subtitle = "From dispatch to customer support, every role is aligned to deliver fast—with clear communication.",
  members = [
    {
      name: "Amina Keller",
      role: "Same Hour Operations Lead",
      bio: "Oversees dispatch performance, coverage planning, and service quality across metro zones.",
      location: "Operations Hub",
      photo:
        "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_400,h_400,g_auto/v1771577321/site-images/team-people/amina-keller.jpg",
    },
    {
      name: "Jonas Richter",
      role: "Customer Success Manager (B2B)",
      bio: "Helps business customers set up accounts, SLAs, and reporting for recurring urgent shipments.",
      location: "Business Services",
      photo:
        "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_400,h_400,g_auto/v1771577358/site-images/team-people/jonas-richter.jpg",
    },
    {
      name: "Sofia Martins",
      role: "Dispatch & Routing Supervisor",
      bio: "Coordinates priority routing and exception handling to keep deliveries on-time.",
      location: "Dispatch Center",
      photo:
        "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_400,h_400,g_auto/v1771577335/site-images/team-people/sofia-martins.jpg",
    },
    {
      name: "Daniel Okoye",
      role: "Service Quality & Compliance",
      bio: "Manages proof-of-delivery standards, incident reviews, and continuous improvement.",
      location: "Quality",
      photo:
        "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_400,h_400,g_auto/v1771577388/site-images/team-people/daniel-okoye.jpg",
    },
  ],
  className = "",
}: Partial<TeamGridProps>) {
  return (
    <section className={cn("py-20 md:py-24", className)}>
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#1E3A5F]">{title}</h2>
        {subtitle && (
          <p className="mt-3 text-lg text-slate-600">{subtitle}</p>
        )}
      </div>
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {members.map((member, idx) => (
          <Card key={member.name + idx} className="flex flex-col items-center border border-slate-200 bg-white rounded-xl p-6 shadow-sm card-hover transition-all hover:shadow-lg hover:-translate-y-0.5">
            {member.photo &&
              <div className="mb-4 h-24 w-24 relative rounded-full overflow-hidden border-4 border-[#0EA5E9]/10">
                <Image
                  src={member.photo}
                  alt={member.name}
                  width={96}
                  height={96}
                  className="object-cover w-full h-full"
                  unoptimized
                />
              </div>
            }
            <h3 className="text-lg font-semibold text-[#1E3A5F]">{member.name}</h3>
            <p className="mt-1 text-sm text-[#0EA5E9] font-medium">{member.role}</p>
            <p className="mt-2 text-sm text-slate-700 text-center">{member.bio}</p>
            <p className="mt-4 text-xs text-slate-500">{member.location}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
