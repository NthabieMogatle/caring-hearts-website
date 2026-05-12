"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SafeImage } from "@/components/SafeImage";
import { Ornament } from "@/components/Ornament";
import { hero, site } from "@/lib/content";

export function Hero() {
  const reduce = useReducedMotion();

  const fadeUp = {
    initial: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[88vh] lg:min-h-screen items-center overflow-hidden text-cream"
      aria-label="Welcome to Caring Hearts Assisted Living"
    >
      {/* Photo */}
      <motion.div
        initial={reduce ? { scale: 1 } : { scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 -z-20"
      >
        <SafeImage
          src={hero.image}
          alt={hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* Warm vignette + readable gradient overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-charcoal/70 via-charcoal/45 to-charcoal/90"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(14,14,16,0.45)_85%)]"
      />

      {/* Content */}
      <div className="container-page relative w-full pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="max-w-3xl">
          <motion.div {...fadeUp} transition={{ duration: 0.7, delay: 0.1 }}>
            <Ornament className="justify-start" />
          </motion.div>

          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8"
          >
            <span className="block wordmark text-cream text-4xl sm:text-6xl lg:text-7xl">
              {site.wordmark.line1}
            </span>
            <span className="mt-3 block wordmark text-gold text-xs sm:text-sm lg:text-base">
              {site.wordmark.line2}
            </span>
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="script mt-8 text-4xl sm:text-5xl lg:text-6xl text-gold leading-tight"
          >
            {site.tagline}
          </motion.p>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 max-w-xl text-cream/85 text-base sm:text-lg leading-relaxed"
          >
            A small, locally-owned assisted living home in {site.city}, where
            seniors are cared for with warmth, dignity, and the kind of
            attention only a real home can give.
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a href={hero.primary.href} className="btn-gold">
              {hero.primary.label}
              <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 10h12M11 5l5 5-5 5" />
              </svg>
            </a>
            <a href={hero.secondary.href} className="btn-gold-outline">
              <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor">
                <path d="M2.5 4.2c0-1 .8-1.7 1.7-1.7h2.2c.8 0 1.5.6 1.6 1.4l.5 2.6c.1.6-.1 1.3-.6 1.7L6.4 9.4a11 11 0 0 0 4.2 4.2l1.2-1.5c.4-.5 1.1-.7 1.7-.6l2.6.5c.8.2 1.4.8 1.4 1.6v2.2c0 .9-.8 1.7-1.7 1.7C8.5 17.5 2.5 11.5 2.5 4.2z"/>
              </svg>
              {hero.secondary.label}
            </a>
          </motion.div>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.8, delay: 0.85 }}
            className="mt-6 text-xs uppercase tracking-[0.28em] text-cream/60"
          >
            Locally Owned · Hartford, CT · 24/7 On-Site Care
          </motion.p>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.a
        href="#about"
        aria-label="Scroll to learn more"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-cream/70 hover:text-gold transition-colors"
      >
        <span className="text-[10px] uppercase tracking-[0.28em]">Discover the home</span>
        <motion.span
          animate={reduce ? {} : { y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="inline-block"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M6 13l6 6 6-6" />
          </svg>
        </motion.span>
      </motion.a>
    </section>
  );
}
