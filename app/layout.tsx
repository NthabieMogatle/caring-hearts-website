import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Great_Vibes, Inter } from "next/font/google";
import { seo, site } from "@/lib/content";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const script = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-script",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://caringhearts.example";

export const metadata: Metadata = {
  metadataBase: new URL(/^https?:\/\//.test(SITE_URL) ? SITE_URL : `https://${SITE_URL}`),
  title: {
    default: seo.title,
    template: `%s · ${site.brand}`,
  },
  description: seo.description,
  applicationName: site.brand,
  authors: [{ name: site.brand }],
  keywords: [
    "assisted living Hartford CT",
    "senior care Hartford",
    "elderly care Connecticut",
    "compassionate senior living",
    "small assisted living home",
    "Caring Hearts Assisted Living",
  ],
  openGraph: {
    type: "website",
    title: seo.title,
    description: seo.description,
    siteName: site.brand,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#FAF6EF",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${script.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
