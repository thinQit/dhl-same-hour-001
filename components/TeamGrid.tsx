"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

interface TeamMember {
  name: string;
  title: string;
  imageUrl?: string;
  bio?: string;
}

interface TeamGridProps {
  headline: string;
  subheadline?: string;
  members: TeamMember[];
}

export default function TeamGrid({
  headline = "Leadership team focused on same-hour operations, compliance, and customer outcomes",
  subheadline = "Experienced logistics leaders who run dispatch, quality, and customer response like a mission-critical practice.",
  members = [
    {
      name: "Monica Reyes",
      title: "Director of Same-Hour Dispatch",
      imageUrl:
        "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577357/site-images/team-people/1181738.jpg",
      bio: "Leads city dispatch operations with focus on fast assignment, route quality, and dependable ETAs.",
    },
    {
      name: "Daniel Foster",
      title: "Head of Network Operations",
      imageUrl:
        "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577327/site-images/team-people/12899112.jpg",
      bio: "Oversees courier network performance to maintain same-hour reliability across high-volume corridors.",
    },
    {
      name: "Aisha Campbell",
      title: "Customer Solutions Lead",
      imageUrl:
        "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577370/site-images/team-people/10375912.jpg",
      bio: "Designs delivery workflows for legal, medical, and enterprise clients with documented intake standards.",
    },
    {
      name: "Ethan Wu",
      title: "Compliance & Quality Manager",
      imageUrl:
        "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577325/site-images/team-people/10347164.jpg",
      bio: "Maintains chain-of-custody controls, proof-of-delivery quality, and escalation response procedures.",
    },
  ],
}: Partial<TeamGridProps>) {
  return (
    <section className="py-16 md:py-20 bg-muted/50">
      <div className="container mx-auto max-w-7xl px-4 animate-fade-in-up">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {headline}
          </h2>
          {subheadline && (
            <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>
          )}
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {members.map(function (member, i) {
            return (
              <Card
                key={i}
                className="overflow-hidden border-0 bg-background shadow-md text-center card-hover"
              >
                {member.imageUrl && (
                  <div className="aspect-square overflow-hidden">
                    <Image
                      src={member.imageUrl}
                      alt={member.name}
                      width={600}
                      height={600}
                      unoptimized
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                )}
                <CardContent className="p-5">
                  <h3 className="text-lg font-semibold text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-sm text-primary">{member.title}</p>
                  {member.bio && (
                    <p className="mt-2 text-sm text-muted-foreground">{member.bio}</p>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
