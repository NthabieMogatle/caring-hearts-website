import Link from "next/link";
import { LogoMark } from "@/components/Logo";
import { Ornament } from "@/components/Ornament";
import { site } from "@/lib/content";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-cream px-6 py-20 text-center">
      <LogoMark className="h-14 w-14" />
      <p className="eyebrow mt-8">404 — Page Not Found</p>
      <h1 className="mt-3 font-serif text-4xl sm:text-5xl text-charcoal">
        This page seems to have wandered off.
      </h1>
      <Ornament className="mt-6" />
      <p className="mt-6 max-w-md text-muted">
        Let&apos;s get you back home — or give us a call at{" "}
        <a href={site.phoneHref} className="text-charcoal underline decoration-gold underline-offset-4 hover:text-gold">
          {site.phone}
        </a>
        .
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link href="/" className="btn-charcoal">
          Return Home
        </Link>
        <Link href="/contact" className="btn-gold-outline text-charcoal border-gold/70 hover:text-charcoal">
          Contact Us
        </Link>
      </div>
    </main>
  );
}
