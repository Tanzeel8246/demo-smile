import type { Metadata } from "next";
import Link from "next/link";
import { SITE, OG_IMAGE, FAQS } from "@/lib/site";
import Reveal from "@/components/Reveal";
import FaqAccordion from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";
import { PageHero, AppointmentCtaBand } from "@/components/ui";

export const metadata: Metadata = {
  title: { absolute: "Dental FAQs – Costs, Pain & Braces | SmileCraft" },
  description:
    "Real answers about dental pain, braces cost and duration, whitening safety, implants vs dentures, kids dentistry, sterilization and payment plans at SmileCraft.",
  alternates: { canonical: `${SITE.domain}/faq/` },
  openGraph: {
    title: "Dental FAQs – Costs, Pain & Braces | SmileCraft",
    description: "Real answers about pain, cost, braces, whitening, implants and kids dentistry.",
    url: `${SITE.domain}/faq/`,
    type: "website",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dental FAQs – Costs, Pain & Braces | SmileCraft",
    description: "Real answers about pain, cost, braces, whitening, implants and kids dentistry.",
    images: [OG_IMAGE.url],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqJsonLd} />
      <PageHero
        eyebrow="FAQs"
        title={<>Questions? <span className="accent-text">Answered.</span></>}
        lead="The things patients actually ask us — about pain, cost, braces timelines, kids and safety. Still curious? Ask us on WhatsApp."
      />
      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container">
          <Reveal>
            <FaqAccordion />
          </Reveal>
          <Reveal>
            <p style={{ textAlign: "center", color: "var(--muted)", marginTop: 36 }}>
              Didn&apos;t find your answer?{" "}
              <Link href="/contact/" style={{ color: "var(--accent)", fontWeight: 700 }}>
                Contact us directly
              </Link>{" "}
              — we reply within clinic hours.
            </p>
          </Reveal>
        </div>
      </section>
      <AppointmentCtaBand />
    </>
  );
}
