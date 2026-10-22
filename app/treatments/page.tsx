import type { Metadata } from "next";
import { SITE, OG_IMAGE } from "@/lib/site";
import Reveal from "@/components/Reveal";
import TreatmentTabs from "@/components/TreatmentTabs";
import CostEstimator from "@/components/CostEstimator";
import { PageHero, AppointmentCtaBand } from "@/components/ui";

export const metadata: Metadata = {
  title: { absolute: "Dental Treatments & Prices in Lahore | SmileCraft" },
  description:
    "Transparent PKR prices for braces, clear aligners, dental implants, teeth whitening and root canal treatment in Lahore — build an instant cost estimate online.",
  alternates: { canonical: `${SITE.domain}/treatments/` },
  openGraph: {
    title: "Dental Treatments & Prices in Lahore | SmileCraft",
    description: "Transparent PKR pricing for braces, aligners, implants, whitening and more.",
    url: `${SITE.domain}/treatments/`,
    type: "website",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dental Treatments & Prices in Lahore | SmileCraft",
    description: "Transparent PKR pricing for braces, aligners, implants, whitening and more.",
    images: [OG_IMAGE.url],
  },
};

export default function TreatmentsPage() {
  return (
    <>
      <PageHero
        eyebrow="Treatments & prices"
        title={<>Honest treatments. <span className="accent-text">Honest prices.</span></>}
        lead="Every procedure has a fixed, written price — agreed before we begin. Switch categories, tap a treatment, or build an instant estimate below."
      />
      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container">
          <Reveal>
            <TreatmentTabs />
          </Reveal>
          <Reveal>
            <CostEstimator />
          </Reveal>
        </div>
      </section>
      <AppointmentCtaBand
        title={<>Know what you need? <span className="accent-text">Book it in.</span></>}
        text="Send us your estimate or just your preferred day — we'll confirm your slot on WhatsApp within clinic hours."
      />
    </>
  );
}
