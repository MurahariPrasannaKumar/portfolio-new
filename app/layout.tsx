import type { Metadata, Viewport } from "next"
import { JetBrains_Mono, Barlow_Condensed } from "next/font/google"
import { CONTACT } from "@/lib/content"
import { PREFS_BOOT } from "@/lib/prefs-boot"
import "./globals.css"

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
})

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  variable: "--font-barlow-condensed",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Prasanna Kumar — Full Stack Developer",
  description: "SaaS, AI agents, and the systems in between. Bangalore, India.",
  // Link previews need absolute URLs; app/opengraph-image.tsx supplies the image.
  metadataBase: new URL(CONTACT.site),
  twitter: { card: "summary_large_image" },
}

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  // The page is a fixed canvas — stop mobile browsers from rubber-banding it.
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // suppressHydrationWarning: PREFS_BOOT may set data-theme before
    // hydration — the one deliberate difference from the server markup.
    <html
      lang="en"
      className={`${jetbrains.variable} ${barlow.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: PREFS_BOOT }} />
      </head>
      <body>{children}</body>
    </html>
  )
}
