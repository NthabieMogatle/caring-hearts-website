import Link from "next/link";
import { LogoMark, Wordmark } from "./Logo";
import { nav, site } from "@/lib/content";
import { Ornament } from "./Ornament";

const socialIcon = (name: string) => {
  switch (name) {
    case "Facebook":
      return (
        <path d="M13.5 9V7.5c0-.7.3-1 1-1H16V3.5h-2.5c-2 0-3 1.2-3 3V9H8.5v3h2V21h3v-9H16l.5-3h-3z" />
      );
    case "Instagram":
      return (
        <>
          <rect x="3.5" y="3.5" width="17" height="17" rx="4" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17" cy="7" r="1" />
        </>
      );
    case "LinkedIn":
      return (
        <>
          <path d="M4 9h3v11H4zM5.5 4a1.7 1.7 0 1 1 0 3.5 1.7 1.7 0 0 1 0-3.5zM10 9h3v1.6c.6-1 2-1.9 3.6-1.9 2.7 0 4.4 1.7 4.4 4.6V20h-3v-5.5c0-1.4-.7-2.3-2-2.3s-2 .9-2 2.3V20h-3V9z" />
        </>
      );
    default:
      return null;
  }
};

export function Footer() {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="container-page py-16 sm:py-20">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <LogoMark className="h-10 w-10" handColor="#C9A35B" />
              <Wordmark variant="light" />
            </div>
            <p className="mt-5 max-w-xs text-sm text-cream/70 leading-relaxed">
              {site.tagline}
            </p>
            <p className="mt-2 max-w-xs script text-xl text-gold">
              {site.heroLine}
            </p>
          </div>

          <div>
            <h3 className="font-serif text-xl text-cream">Explore</h3>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-cream/75 hover:text-gold transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-xl text-cream">Contact</h3>
            <ul className="mt-5 space-y-3 text-sm text-cream/75">
              <li>
                <a href={site.phoneHref} className="hover:text-gold transition-colors">
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={site.emailHref} className="hover:text-gold transition-colors break-all">
                  {site.email}
                </a>
              </li>
              <li>{site.address}</li>
            </ul>

            <ul className={`mt-6 flex items-center gap-3 ${site.socials.length === 0 ? "hidden" : ""}`}>
              {site.socials.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.href}
                    aria-label={s.name}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 text-cream/80 transition hover:border-gold hover:text-gold"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {socialIcon(s.name)}
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Ornament className="mt-14" />

        <div className="mt-8 flex flex-col items-center gap-2 text-center text-xs text-cream/60 sm:flex-row sm:justify-between sm:text-left">
          <p>© {new Date().getFullYear()} {site.brand}. All rights reserved.</p>
          <p className="tracking-wide">{site.license}</p>
        </div>
      </div>
    </footer>
  );
}
