"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ctaBand } from "@/lib/content";
import { Ornament } from "@/components/Ornament";

export function CTABand() {
  const reduce = useReducedMotion();
  return (
    <section className="relative isolate overflow-hidden bg-charcoal text-cream">
      {/* Decorative gold corner flourish */}
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-gold/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -bottom-32 h-80 w-80 rounded-full bg-heart/10 blur-3xl"
      />

      <motion.div
        initial={reduce ? { opacity: 1 } : { opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="container-page py-20 sm:py-24 text-center"
      >
        <p className="eyebrow text-gold">{ctaBand.eyebrow}</p>
        <h2 className="mt-4 font-serif text-3xl sm:text-5xl text-cream leading-tight max-w-3xl mx-auto">
          {ctaBand.heading}
        </h2>
        <Ornament className="mt-7" />
        <p className="mt-7 mx-auto max-w-2xl text-cream/80 text-base sm:text-lg leading-relaxed">
          {ctaBand.body}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href={ctaBand.primary.href} className="btn-gold">
            {ctaBand.primary.label}
            <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 10h12M11 5l5 5-5 5" />
            </svg>
          </a>
          <a href={ctaBand.secondary.href} className="btn-gold-outline">
            <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor">
              <path d="M2.5 4.2c0-1 .8-1.7 1.7-1.7h2.2c.8 0 1.5.6 1.6 1.4l.5 2.6c.1.6-.1 1.3-.6 1.7L6.4 9.4a11 11 0 0 0 4.2 4.2l1.2-1.5c.4-.5 1.1-.7 1.7-.6l2.6.5c.8.2 1.4.8 1.4 1.6v2.2c0 .9-.8 1.7-1.7 1.7C8.5 17.5 2.5 11.5 2.5 4.2z" />
            </svg>
            {ctaBand.secondary.label}
          </a>
        </div>
      </motion.div>
    </section>
  );
}
