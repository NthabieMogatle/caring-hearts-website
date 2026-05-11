"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { testimonials } from "@/lib/content";

export function Testimonials() {
  const reduce = useReducedMotion();

  return (
    <section className="section-padding bg-white">
      <div className="container-page">
        <SectionHeader
          eyebrow="From the Families"
          heading="What loved ones tell us"
          script="In their own words."
        />

        <div className="mt-16 grid gap-7 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={reduce ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              className="relative flex h-full flex-col rounded-[16px] bg-cream p-8 shadow-card ring-1 ring-gold/20"
            >
              <svg
                viewBox="0 0 32 24"
                className="h-6 w-6 text-gold"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M10 0C4 4 0 9 0 16c0 5 3 8 7 8 3 0 6-2 6-6s-3-6-6-6c-1 0-2 0-2 1 0-3 2-7 7-10L10 0zm17 0c-6 4-10 9-10 16 0 5 3 8 7 8 3 0 6-2 6-6s-3-6-6-6c-1 0-2 0-2 1 0-3 2-7 7-10l-2-3z" />
              </svg>
              <blockquote className="mt-5 flex-1 font-serif text-xl leading-relaxed text-charcoal">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="mt-7 h-px w-12 bg-gold" aria-hidden="true" />
              <figcaption className="mt-4">
                <p className="font-medium text-charcoal">{t.name}</p>
                <p className="text-sm text-muted">{t.relation}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-muted/70">
          Quotes shown are illustrative samples for the launch site. Real,
          attributed testimonials will replace these as families share them.
        </p>
      </div>
    </section>
  );
}
