"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { Lightbox } from "@/components/Lightbox";
import { gallery } from "@/lib/content";

const aspectClass: Record<string, string> = {
  tall: "row-span-2 aspect-[3/4]",
  wide: "aspect-[4/3]",
  square: "aspect-square",
};

export function Gallery() {
  const [open, setOpen] = useState<number | null>(null);
  const reduce = useReducedMotion();

  return (
    <section id="gallery" className="section-padding bg-cream">
      <div className="container-page">
        <SectionHeader
          eyebrow="Inside the Home"
          heading="Glimpses of everyday life"
          script="Where moments matter."
          body="Quiet mornings, shared meals, hands held, laughter at the table. The small ordinary moments are the ones that make a home."
        />

        <div className="mt-16 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4 lg:auto-rows-[180px]">
          {gallery.map((item, i) => (
            <motion.button
              key={item.src}
              type="button"
              onClick={() => setOpen(i)}
              initial={reduce ? { opacity: 1 } : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
              className={`group relative overflow-hidden rounded-[14px] shadow-card ring-1 ring-charcoal/5 ${
                aspectClass[item.aspect] ?? "aspect-square"
              }`}
              aria-label={`View larger: ${item.alt}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-charcoal/0 transition-colors duration-300 group-hover:bg-charcoal/25"
              />
              <span
                aria-hidden="true"
                className="absolute inset-2 rounded-[10px] ring-1 ring-gold/0 transition-all duration-300 group-hover:ring-gold/70"
              />
              <span
                aria-hidden="true"
                className="absolute bottom-3 right-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-cream/90 text-charcoal opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              >
                <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <circle cx="7" cy="7" r="5" />
                  <path d="M11 11l3 3" />
                </svg>
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <Lightbox
        items={gallery}
        index={open}
        onClose={() => setOpen(null)}
        onNavigate={setOpen}
      />
    </section>
  );
}
