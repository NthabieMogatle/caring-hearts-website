type IconName = "heart" | "home" | "person" | "leaf";

/**
 * Thin gold line-icons for the Four Promises grid. 1.5px stroke, rounded joins,
 * no fill — keeps the premium hairline feel consistent with the gold ornaments.
 */
export function PromiseIcon({ name, className = "" }: { name: IconName; className?: string }) {
  const common = {
    viewBox: "0 0 40 40",
    fill: "none" as const,
    stroke: "currentColor" as const,
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
  };

  switch (name) {
    case "heart":
      return (
        <svg {...common}>
          <path d="M20 33s-12-7-12-18a7 7 0 0 1 12-4.6A7 7 0 0 1 32 15c0 11-12 18-12 18z" />
        </svg>
      );
    case "home":
      return (
        <svg {...common}>
          <path d="M6 20l14-12 14 12" />
          <path d="M9 18v14h22V18" />
          <path d="M17 32v-8h6v8" />
        </svg>
      );
    case "person":
      return (
        <svg {...common}>
          <circle cx="20" cy="13" r="5" />
          <path d="M8 33c1-6 6-10 12-10s11 4 12 10" />
          <path d="M15 28h10" />
        </svg>
      );
    case "leaf":
      return (
        <svg {...common}>
          <path d="M8 32c0-12 8-22 24-24-2 16-12 24-24 24z" />
          <path d="M8 32l16-16" />
        </svg>
      );
    default:
      return null;
  }
}
