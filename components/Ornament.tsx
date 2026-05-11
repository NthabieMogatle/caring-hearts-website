/**
 * Gold hairline divider with a small heart ornament in the middle.
 * Used as a visual breath between heading and body in section intros.
 */
export function Ornament({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-center gap-3 ${className}`}
      aria-hidden="true"
    >
      <span className="h-px w-12 sm:w-20 bg-gold/60" />
      <svg
        viewBox="0 0 24 24"
        className="h-3 w-3 text-gold"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 21s-7-4.5-7-11a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 6.5-7 11-7 11z"
          fill="currentColor"
        />
      </svg>
      <span className="h-px w-12 sm:w-20 bg-gold/60" />
    </div>
  );
}
