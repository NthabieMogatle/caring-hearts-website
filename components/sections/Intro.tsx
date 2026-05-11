import { SectionHeader } from "@/components/SectionHeader";
import { intro } from "@/lib/content";

export function Intro() {
  return (
    <section id="about" className="section-padding bg-cream">
      <div className="container-page">
        <SectionHeader
          eyebrow="About Caring Hearts"
          heading={intro.heading}
          script={intro.script}
          body={intro.body}
        />
      </div>
    </section>
  );
}
