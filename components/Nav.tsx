"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { nav, site } from "@/lib/content";

export function Nav({ solid = false }: { solid?: boolean }) {
  const [scrolled, setScrolled] = useState(solid);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (solid) return;
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [solid]);

  // Lock body scroll when mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      }`}
    >
      <nav
        className="container-page flex items-center justify-between py-4"
        aria-label="Primary"
      >
        <Logo variant={scrolled ? "dark" : "light"} />

        <ul className="hidden lg:flex items-center gap-8">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-gold ${
                  scrolled ? "text-charcoal" : "text-cream"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a href={site.phoneHref} className="btn-gold text-sm">
            Call Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className={`lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border ${
            scrolled
              ? "border-charcoal/15 text-charcoal"
              : "border-cream/40 text-cream"
          }`}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {open ? (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu sheet */}
      <div
        id="mobile-nav"
        className={`lg:hidden overflow-hidden bg-cream transition-[max-height,opacity] duration-300 ease-out ${
          open ? "max-h-[80vh] opacity-100 border-t border-gold/20" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="container-page flex flex-col gap-1 py-4">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 text-base font-medium text-charcoal hover:bg-gold/10"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <a
              href={site.phoneHref}
              onClick={() => setOpen(false)}
              className="btn-gold w-full"
            >
              Call {site.phone}
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
