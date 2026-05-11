import type { SVGProps } from "react";
import { site } from "@/lib/content";

type LogoProps = SVGProps<SVGSVGElement> & {
  /** Color of the cradling hands. Defaults to gold. */
  handColor?: string;
  /** Color of the heart. Defaults to brand red. */
  heartColor?: string;
};

/**
 * Inline SVG logomark: two stylized hands cradling a heart.
 * Designed minimal and premium — works at favicon scale and large hero scale.
 */
export function LogoMark({
  handColor = "#C9A35B",
  heartColor = "#C8262C",
  ...props
}: LogoProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      role="img"
      aria-label={`${site.brand} logo`}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Left hand */}
      <path
        d="M6 38c0-6 4-11 9-11 3 0 5 1.5 6.5 3.5L32 42l-6 6c-4 4-10 4-14 0-4-4-6-6-6-10z"
        fill="none"
        stroke={handColor}
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      {/* Right hand (mirrored) */}
      <path
        d="M58 38c0-6-4-11-9-11-3 0-5 1.5-6.5 3.5L32 42l6 6c4 4 10 4 14 0 4-4 6-6 6-10z"
        fill="none"
        stroke={handColor}
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      {/* Heart cradled between them */}
      <path
        d="M32 36s-9-5-9-12a6 6 0 0 1 9-5 6 6 0 0 1 9 5c0 7-9 12-9 12z"
        fill={heartColor}
      />
    </svg>
  );
}

type WordmarkProps = {
  variant?: "dark" | "light";
  className?: string;
  showSub?: boolean;
};

/**
 * Brand wordmark with the two-line treatment used in the hero and footer.
 * `variant` controls text color so it works on both cream and charcoal backgrounds.
 */
export function Wordmark({ variant = "dark", className = "", showSub = true }: WordmarkProps) {
  const main = variant === "dark" ? "text-charcoal" : "text-cream";
  const sub = variant === "dark" ? "text-gold-600" : "text-gold";
  return (
    <span className={`flex flex-col leading-none ${className}`}>
      <span className={`wordmark text-lg sm:text-xl ${main}`}>{site.wordmark.line1}</span>
      {showSub && (
        <span className={`wordmark text-[10px] sm:text-xs mt-1 ${sub}`}>
          {site.wordmark.line2}
        </span>
      )}
    </span>
  );
}

/**
 * Compact lockup: mark + wordmark side by side. Used in the top nav and footer.
 */
export function Logo({ variant = "dark", className = "" }: { variant?: "dark" | "light"; className?: string }) {
  return (
    <a href="/" className={`group inline-flex items-center gap-3 ${className}`} aria-label={`${site.brand} — Home`}>
      <LogoMark className="h-10 w-10 transition-transform duration-300 group-hover:scale-105" />
      <Wordmark variant={variant} />
    </a>
  );
}
