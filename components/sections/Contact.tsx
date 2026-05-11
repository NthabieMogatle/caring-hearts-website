import { SectionHeader } from "@/components/SectionHeader";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/content";

const HARTFORD_MAP_EMBED =
  "https://www.google.com/maps?q=Hartford,CT&output=embed";

export function Contact() {
  return (
    <section id="contact" className="section-padding bg-cream">
      <div className="container-page">
        <SectionHeader
          eyebrow="Get in Touch"
          heading="Let's start a conversation"
          script="We're here to listen."
          body="Whether you're ready to schedule a visit or just exploring options, we'd be honored to hear about your loved one and answer your questions."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-5 lg:gap-14">
          {/* Form */}
          <div className="lg:col-span-3 rounded-[16px] bg-white p-7 sm:p-10 shadow-card ring-1 ring-charcoal/5">
            <ContactForm />
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-2 flex flex-col gap-6">
            <div className="rounded-[16px] bg-charcoal p-7 text-cream shadow-soft">
              <h3 className="font-serif text-2xl text-cream">Reach us directly</h3>
              <div className="mt-5 h-px w-12 bg-gold" aria-hidden="true" />
              <dl className="mt-6 space-y-5 text-sm">
                <div>
                  <dt className="text-cream/60 text-xs uppercase tracking-[0.22em]">Phone</dt>
                  <dd className="mt-1">
                    <a
                      href={site.phoneHref}
                      className="text-lg font-medium text-cream hover:text-gold transition-colors"
                    >
                      {site.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-cream/60 text-xs uppercase tracking-[0.22em]">Email</dt>
                  <dd className="mt-1">
                    <a
                      href={site.emailHref}
                      className="text-cream hover:text-gold transition-colors break-all"
                    >
                      {site.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-cream/60 text-xs uppercase tracking-[0.22em]">Location</dt>
                  <dd className="mt-1 text-cream">{site.address}</dd>
                </div>
              </dl>
            </div>

            <div className="rounded-[16px] bg-white p-7 shadow-card ring-1 ring-charcoal/5">
              <h3 className="font-serif text-xl text-charcoal">Hours</h3>
              <div className="mt-3 h-px w-10 bg-gold" aria-hidden="true" />
              <ul className="mt-4 space-y-3 text-sm">
                {site.hours.map((h) => (
                  <li key={h.label} className="flex flex-col">
                    <span className="text-xs uppercase tracking-[0.18em] text-muted/80">{h.label}</span>
                    <span className="text-charcoal">{h.value}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="overflow-hidden rounded-[16px] shadow-card ring-1 ring-charcoal/5">
              <iframe
                title={`Map of ${site.address}`}
                src={HARTFORD_MAP_EMBED}
                width="100%"
                height="240"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full"
              />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
