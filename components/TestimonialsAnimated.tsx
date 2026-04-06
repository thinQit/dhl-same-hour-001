"use client";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

interface TestimonialItem {
  quote: string;
  name: string;
  designation: string;
  src: string;
}

interface TestimonialsAnimatedProps {
  headline: string;
  subheadline?: string;
  testimonials: TestimonialItem[];
  autoplay?: boolean;
}

export default function TestimonialsAnimated({
  headline = "What Our Customers Say",
  subheadline = "Trusted by legal, medical, and enterprise clients for urgent, verifiable delivery.",
  testimonials = [
    {
      quote:
        "DHL Same Hour rescued a court filing deadline for us. The dispatch team updated us every step and sent proof of delivery within minutes of drop-off.",
      name: "Allison Patel",
      designation: "Operations Director, Fisher Bernstein LLP",
      src: "https://res.cloudinary.com/dwc294mzm/image/upload/v1771578440/site-images/logistics/attorney1.jpg",
    },
    {
      quote:
        "We rely on DHL for last-mile medical specimen movement—pickups are prompt and every delivery includes recipient verification and compliance documentation.",
      name: "James Carter",
      designation: "Logistics Manager, Perimeter Hospital",
      src: "https://res.cloudinary.com/dwc294mzm/image/upload/v1771578442/site-images/logistics/labmanager.jpg",
    },
    {
      quote:
        "Critical circuit board needed fast. DHL Same Hour helped us prevent major downtime and sent tracking links so our techs could coordinate handoff.",
      name: "Latoya Nguyen",
      designation: "Plant Supervisor, Stellar Manufacturing",
      src: "https://res.cloudinary.com/dwc294mzm/image/upload/v1771578451/site-images/logistics/manufacturing.jpg",
    },
  ],
  autoplay = true,
}: Partial<TestimonialsAnimatedProps>) {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto max-w-7xl px-4 animate-fade-in-up">
        <div className="mx-auto max-w-2xl text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <AnimatedTestimonials testimonials={testimonials} autoplay={autoplay} />
      </div>
    </section>
  );
}
