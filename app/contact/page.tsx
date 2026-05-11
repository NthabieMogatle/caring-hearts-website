import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Reach Caring Hearts Assisted Living in Hartford, CT — schedule a visit, ask a question, or just say hello. We respond within one business day.",
};

export default function ContactPage() {
  return (
    <>
      <Nav solid />
      <main>
        {/* Spacer for the fixed nav (~80px) */}
        <div className="h-20 bg-cream" aria-hidden="true" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
