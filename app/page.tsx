import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { Promises } from "@/components/sections/Promises";
import { Services } from "@/components/sections/Services";
import { WhyUs } from "@/components/sections/WhyUs";
import { Gallery } from "@/components/sections/Gallery";
// Testimonials section is intentionally omitted until real, attributed quotes
// are collected. The component is kept in components/sections/Testimonials.tsx
// and can be re-imported and dropped back into the page when ready.
import { CTABand } from "@/components/sections/CTABand";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Intro />
        <Promises />
        <Services />
        <WhyUs />
        <Gallery />
        <CTABand />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
