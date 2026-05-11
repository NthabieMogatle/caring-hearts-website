"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { PromiseIcon } from "@/components/PromiseIcon";
import { promises } from "@/lib/content";

export function Promises() {
  const reduce = useReducedMotion();

  return (
    <section className="section-padding bg-white">
      <div className="container-page">
        <SectionHeader
          eyebrow="Our Four Promises"
          heading="What every resident can count on"
          script="From our family to yours."
        />

        <div className="mt-16 grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {promises.map((p, i) => (
            <motion.article
              key={p.title}
              initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
              className="group relative flex flex-col items-start gap-5 rounded-[16px] border border-gold/20 bg-cream/40 p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-soft hover:border-gold/60"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 text-gold group-hover:border-gold group-hover:bg-gold/10 transition-colors">
                <PromiseIcon name={p.icon} className="h-7 w-7" />
              </div>
              <h3 className="font-serif text-2xl text-charcoal">{p.title}</h3>
              <p className="text-muted leading-relaxed">{p.body}</p>
              <span aria-hidden="true" className="absolute inset-x-7 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
