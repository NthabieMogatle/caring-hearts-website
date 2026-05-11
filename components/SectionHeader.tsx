"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Ornament } from "./Ornament";

type SectionHeaderProps = {
  eyebrow?: string;
  heading: string;
  script?: string;
  body?: string;
  align?: "left" | "center";
  variant?: "light" | "dark";
};

/**
 * Reusable section title block — eyebrow → heading → script flourish → ornament → body.
 * Used to keep typographic rhythm consistent across every section.
 */
export function SectionHeader({
  eyebrow,
  heading,
  script,
  body,
  align = "center",
  variant = "light",
}: SectionHeaderProps) {
  const reduce = useReducedMotion();
  const alignCls = align === "center" ? "text-center items-center" : "text-left items-start";
  const ornamentJustify = align === "center" ? "" : "justify-start";
  const headingCls = variant === "dark" ? "text-cream" : "text-charcoal";
  const bodyCls = variant === "dark" ? "text-cream/80" : "text-muted";

  return (
    <motion.div
      initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`flex flex-col ${alignCls}`}
    >
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className={`mt-3 font-serif text-4xl sm:text-5xl leading-tight ${headingCls}`}>
        {heading}
      </h2>
      {script && (
        <p className="script mt-2 text-3xl sm:text-4xl text-gold">{script}</p>
      )}
      <Ornament className={`mt-6 ${ornamentJustify}`} />
      {body && (
        <p className={`mt-8 max-w-2xl text-base sm:text-lg leading-relaxed ${bodyCls}`}>
          {body}
        </p>
      )}
    </motion.div>
  );
}
