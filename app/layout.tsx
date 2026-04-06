import "./globals.css"
import { Inter, IBM_Plex_Sans } from "next/font/google"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-heading",
})

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const navItems = [
    { label: "Landing", href: "/" },
    { label: "Same Hour Delivery", href: "/same-hour-delivery" },
    { label: "About Us", href: "/about" },
    { label: "Proven Business Cases", href: "/proven-business-cases" },
    { label: "Contact", href: "/contact" },
  ]

  const footerColumns = [
    {
      title: "Services",
      links: [
        { label: "Same Hour Delivery", href: "/same-hour-delivery" },
        { label: "Proven Business Cases", href: "/proven-business-cases" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy", href: "/privacy" },
        { label: "Terms", href: "/terms" },
      ],
    },
  ]

  return (
    <html lang="en">
      <body className={`${inter.variable} ${ibmPlexSans.variable} font-sans bg-background text-foreground`}>
        <Navbar logo="DHL Same Hour Delivery" navItems={navItems} ctaLabel="Request Pickup" ctaHref="/contact" />
        {children}
        <Footer
          brand="DHL Same Hour Delivery"
          description="Urgent, trackable, business-ready delivery within your metro area."
          columns={footerColumns}
          address="DHL Express (Sample) • 200 Logistics Parkway, Suite 120 • Metro City, NY 10001"
          copyright="© 2026 DHL Same Hour Delivery. All rights reserved."
        />
      </body>
    </html>
  )
}
