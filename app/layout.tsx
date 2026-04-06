import type { Metadata } from "next"
import { Libre_Baskerville, Source_Sans_3 } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-heading",
})

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-body",
})

export const metadata: Metadata = {
  title: "DHL Same Hour Delivery | Time-Critical Courier Service",
  description:
    "Request same-hour pickup with DHL. Priority dispatch, real-time updates, and verified handoff for legal documents, medical deliveries, and high-value items.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${libreBaskerville.variable} ${sourceSans.variable} font-sans bg-background text-foreground`}
      >
        <Navbar
          logo="DHL Same Hour Delivery"
          navItems={[
            { label: "Home", href: "/" },
            { label: "Same-Hour Delivery", href: "/same-hour-delivery" },
            { label: "About", href: "/about" },
            { label: "Proven Business Cases", href: "/proven-business-cases" },
            { label: "Contact", href: "/contact" },
          ]}
          ctaLabel="Request Pickup"
          ctaHref="/contact"
        />
        {children}
        <Footer
          brand="DHL Same Hour Delivery"
          description="Time-critical delivery with legal-grade reliability, verified handoff, and chain-of-custody discipline."
          columns={[
            {
              title: "Services",
              links: [
                { label: "Same-Hour Delivery", href: "/same-hour-delivery" },
                { label: "Proven Business Cases", href: "/proven-business-cases" },
              ],
            },
            {
              title: "Company",
              links: [
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
              ],
            },
            {
              title: "Dispatch",
              links: [
                { label: "Request Pickup", href: "/contact" },
                { label: "Home", href: "/" },
              ],
            },
          ]}
          copyright="© 2026 DHL Same Hour Delivery. Service availability varies by location and operational constraints."
        />
      </body>
    </html>
  )
}
