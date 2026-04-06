"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main className="min-h-[60vh] bg-background flex items-center justify-center px-6">
      <div className="max-w-xl text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-semibold text-foreground">Something went wrong</h1>
        <p className="text-muted-foreground">
          We couldn’t load this page right now. Please try again or contact the Same Hour Delivery Desk.
        </p>
        <Button onClick={() => reset()} className="transition-all duration-200 hover:scale-105">
          Try again
        </Button>
      </div>
    </main>
  )
}
