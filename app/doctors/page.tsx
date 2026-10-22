import type { Metadata } from "next";
import Link from "next/link";
import { SITE, OG_IMAGE, DOCTORS } from "@/lib/site";
import Reveal from "@/components/Reveal";
import { PageHero, SectionHeading, AppointmentCtaBand } from "@/components/ui";
import { ArrowRightIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: { absolute: "Our Dentists & Specialists in Lahore | SmileCraft" },
  description:
    "Meet the SmileCraft specialists in Gulberg, Lahore: an orthodontist, implantologist, cosmetic dentist and endodontist — experienced, gentle, honestly priced.",
  alternates: { canonical: `${SITE.domain}/doctors/` },
  openGraph: {
    title: "Our Dentists & Specialists in Lahore | SmileCraft",
    description: "Orthodontist, implantologist, cosmetic dentist and endodontist — specialists for every smile.",
    url: `${SITE.domain}/doctors/`,
    type: "website",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Dentists & Specialists in Lahore | SmileCraft",
    description: "Orthodontist, implantologist, cosmetic dentist and endodontist.",
    images: [OG_IMAGE.url],
  },
};

export default function DoctorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our doctors"
        title={<>Specialists, <span className="accent-text">not generalists</span></>}
        lead="Your root canal is done by an endodontist, your braces by an orthodontist. Meet the doctors who'll look after your smile."
      />
      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container">
          <div className="doc-grid doc-grid-wide">
            {DOCTORS.map((d, i) => (
              <Reveal key={d.name} delay={(i % 2) as 0 | 1}>
                <article className="doc-card" style={{ textAlign: "left", padding: 36 }}>
                  <div style={{ display: "flex", gap: 20, alignItems: "center", marginBottom: 18 }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img className="doc-photo-lg" src={d.photo} alt={d.photoAlt} loading="lazy" width={800} height={800} />
                    <div>
                      <h3 style={{ fontSize: "1.3rem" }}>{d.name}</h3>
                      <div className="doc-role">{d.role} · {d.experience}</div>
                    </div>
                  </div>
                  <p className="qual" style={{ fontSize: "0.9rem", marginBottom: 16 }}>{d.qualification}</p>
                  <div className="spec-chips" style={{ justifyContent: "flex-start", marginBottom: 18 }}>
                    {d.specialties.map((s) => (
                      <span key={s}>{s}</span>
                    ))}
                  </div>
                  <div className="doc-meta">
                    <span>Available: <strong>{d.days}</strong></span>
                    <Link href="/appointment/" style={{ color: "var(--accent)", fontWeight: 700, display: "inline-flex", alignItems: "center", gap: 5 }}>
                      Book <ArrowRightIcon />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section-sm" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHeading
            center
            eyebrow="The SmileCraft standard"
            title="How our specialists work"
            lead="Every SmileCraft doctor follows the same rules: diagnose before treating, explain before charging, and never recommend a procedure we would not choose for our own family."
          />
          <div className="prose" style={{ marginBottom: 44 }}>
            <p>
              Specialist-led care means the doctor treating you has advanced training in exactly
              that field. Dr. Ayesha Khan plans every braces and aligner case personally, including
              the 3D scan review and the retention plan at the end. Dr. Bilal Ahmed handles implant
              surgery and full-mouth rehabilitation, Dr. Sana Malik leads smile design, veneers and
              whitening, and Dr. Usman Tariq performs root canal treatments with rotary endodontics
              and microscope-level precision. Between them, the team has placed thousands of
              fillings, hundreds of implants and completed orthodontic cases for patients from
              across Lahore — Gulberg, DHA, Model Town, Johar Town and Cantt.
            </p>
            <p>
              You will always know who is treating you, what it costs and how long it takes before
              treatment begins. If a second opinion would help, we will tell you that too — honest
              advice is part of the treatment plan, not an extra.
            </p>
          </div>
          <SectionHeading
            center
            eyebrow="How it works"
            title="Your first visit, step by step"
          />
          <div className="grid-3">
            {[
              { n: "01", t: "Consultation", d: "20-minute relaxed exam, digital X-ray if needed. We listen first." },
              { n: "02", t: "Written plan", d: "Exact diagnosis, fixed PKR quote and honest timeline — no pressure." },
              { n: "03", t: "Gentle treatment", d: "Painless-first care by the specialist for your case. You approve every step." },
            ].map((s, i) => (
              <Reveal key={s.n} delay={(i % 3) as 0 | 1 | 2}>
                <div className="card">
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "2.2rem", color: "var(--accent)", opacity: 0.85 }}>{s.n}</div>
                  <h3 style={{ marginTop: 8 }}>{s.t}</h3>
                  <p>{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <AppointmentCtaBand
        title={<>Choose your <span className="accent-text">specialist</span></>}
        text="Mention your preferred doctor when booking — we'll match you with their next available slot."
      />
    </>
  );
}
