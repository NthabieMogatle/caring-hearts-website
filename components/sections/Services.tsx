"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SafeImage } from "@/components/SafeImage";
import { SectionHeader } from "@/components/SectionHeader";
import { services } from "@/lib/content";

export function Services() {
  const reduce = useReducedMotion();

  return (
    <section id="services" className="section-padding bg-cream">
      <div className="container-page">
        <SectionHeader
          eyebrow="What We Offer"
          heading="Care that meets each day as it comes"
          script="Thoughtful, personal, never rushed."
          body="From the everyday rhythms of getting up and getting dressed to the harder moments that take a steady hand, every part of life here is met with patience, skill, and warmth."
        />

        <div className="mt-20 flex flex-col gap-20 sm:gap-28">
          {services.map((s, i) => {
            const reversed = i % 2 === 1;
            return (
              <motion.article
                key={s.title}
                initial={reduce ? { opacity: 1 } : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className={`grid items-center gap-10 sm:gap-14 lg:grid-cols-2 ${
                  reversed ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative aspect-[5/4] overflow-hidden rounded-[16px] shadow-soft ring-1 ring-charcoal/5">
                  <SafeImage
                    src={s.image}
                    alt={s.alt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover transition-transform duration-[1200ms] ease-out hover:scale-[1.04]"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-tr from-charcoal/10 via-transparent to-transparent"
                  />
                </div>

                <div className={reversed ? "lg:pr-6" : "lg:pl-6"}>
                  <p className="eyebrow">Service {String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-3 font-serif text-3xl sm:text-4xl text-charcoal leading-tight">
                    {s.title}
                  </h3>
                  <div className="mt-5 h-px w-16 bg-gold" aria-hidden="true" />
                  <p className="mt-6 text-lg leading-relaxed text-muted">
                    {s.body}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
