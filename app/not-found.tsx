import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <main className="min-h-[60vh] bg-background flex items-center justify-center px-6">
      <div className="max-w-xl text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-semibold text-foreground">Page not found</h1>
        <p className="text-muted-foreground">
          The page you’re looking for doesn’t exist or may have moved.
        </p>
        <Button asChild className="transition-all duration-200 hover:scale-105">
          <Link href="/">Back to landing page</Link>
        </Button>
      </div>
    </main>
  )
}
