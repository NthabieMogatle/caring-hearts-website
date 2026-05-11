"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { whyUs } from "@/lib/content";
import { Ornament } from "@/components/Ornament";

export function WhyUs() {
  const reduce = useReducedMotion();
  return (
    <section id="why" className="section-padding bg-white">
      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={reduce ? { opacity: 1 } : { opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative aspect-[4/5] overflow-hidden rounded-[16px] shadow-soft ring-1 ring-charcoal/5"
          >
            <Image
              src={whyUs.image}
              alt={whyUs.imageAlt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-charcoal/30 via-transparent to-transparent"
            />
            <div className="absolute bottom-6 left-6 right-6 flex items-center gap-3 rounded-full bg-cream/95 px-5 py-3 shadow-soft backdrop-blur">
              <svg viewBox="0 0 20 20" className="h-4 w-4 text-heart" fill="currentColor" aria-hidden="true">
                <path d="M10 17s-7-4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 17 7c0 6-7 10-7 10z" />
              </svg>
              <span className="text-xs font-medium tracking-wide text-charcoal">
                Family-owned in Hartford since day one
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={reduce ? { opacity: 1 } : { opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            <p className="eyebrow">Why Caring Hearts</p>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl text-charcoal leading-tight">
              {whyUs.heading}
            </h2>
            <p className="script mt-2 text-3xl sm:text-4xl text-gold">{whyUs.script}</p>
            <Ornament className="mt-6 justify-start" />
            <p className="mt-7 text-lg leading-relaxed text-muted max-w-xl">
              {whyUs.body}
            </p>

            <ul className="mt-10 space-y-6">
              {whyUs.points.map((point, i) => (
                <motion.li
                  key={point.title}
                  initial={reduce ? { opacity: 1 } : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                  className="flex items-start gap-4"
                >
                  <span
                    aria-hidden="true"
                    className="mt-1.5 inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-gold/50 text-gold"
                  >
                    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 8.5l3.5 3.5L13 5" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-serif text-xl text-charcoal">{point.title}</h3>
                    <p className="mt-1 text-muted leading-relaxed">{point.body}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
