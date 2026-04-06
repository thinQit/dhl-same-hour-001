"use client";

import { cn } from "@/lib/utils";

interface SiteContainerProps {
  children?: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export default function SiteContainer({
  children = null,
  className = "",
  as = "div",
}: Partial<SiteContainerProps>) {
  const Comp = as;
  return (
    <Comp
      className={cn(
        "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8",
        className
      )}
    >
      {children}
    </Comp>
  );
}
