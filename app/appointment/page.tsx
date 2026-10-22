import type { Metadata } from "next";
import { SITE, OG_IMAGE } from "@/lib/site";
import Reveal from "@/components/Reveal";
import BookingForm from "@/components/BookingForm";
import { PageHero, SectionHeading } from "@/components/ui";
import { CheckIcon, ClockIcon, PinIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: { absolute: "Book a Dental Appointment in Lahore | SmileCraft" },
  description:
    "Book your dental appointment at SmileCraft, Gulberg III Lahore. Choose your treatment, date and time slot — confirm instantly on WhatsApp.",
  alternates: { canonical: `${SITE.domain}/appointment/` },
  openGraph: {
    title: "Book a Dental Appointment in Lahore | SmileCraft",
    description: "Choose your treatment, date and time — confirm on WhatsApp in under a minute.",
    url: `${SITE.domain}/appointment/`,
    type: "website",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Dental Appointment in Lahore | SmileCraft",
    description: "Choose your treatment, date and time — confirm on WhatsApp in under a minute.",
    images: [OG_IMAGE.url],
  },
};

export default function AppointmentPage() {
  return (
    <>
      <PageHero
        eyebrow="Book an appointment"
        title={<>Your smile, <span className="accent-text">scheduled.</span></>}
        lead="Pick your treatment, date and time — we'll open WhatsApp with everything prefilled. One tap to confirm."
      />
      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container split">
          <Reveal>
            <div>
              <SectionHeading
                eyebrow="What happens next"
                title="Three taps to a confirmed slot"
              />
              <ul className="feature-list">
                <li>
                  <span className="tick"><CheckIcon /></span>
                  <div>
                    <strong>Fill the form</strong>
                    <span>Your name, treatment, preferred date and time slot.</span>
                  </div>
                </li>
                <li>
                  <span className="tick"><CheckIcon /></span>
                  <div>
                    <strong>Tap "Confirm on WhatsApp"</strong>
                    <span>Your details are composed into a message automatically.</span>
                  </div>
                </li>
                <li>
                  <span className="tick"><CheckIcon /></span>
                  <div>
                    <strong>We confirm your slot</strong>
                    <span>Within clinic hours (Mon–Sat, 10 AM–9 PM) we reply with confirmation.</span>
                  </div>
                </li>
              </ul>
              <div style={{ display: "grid", gap: 12, marginTop: 28 }}>
                <div className="info-row">
                  <span className="k" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}><ClockIcon /> Clinic hours</span>
                  <span className="v">Mon – Sat · 10 AM – 9 PM</span>
                </div>
                <div className="info-row">
                  <span className="k" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}><PinIcon /> Find us</span>
                  <span className="v">{SITE.address}</span>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <BookingForm />
          </Reveal>
        </div>
      </section>
      <section className="section-sm" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHeading
            center
            eyebrow="Good to know"
            title="Before your visit"
          />
          <div className="grid-3">
            {[
              {
                t: "Arrive 10 minutes early",
                d: "It gives us time to review your history and any previous X-rays calmly — no rushing into the chair. First visits include a full examination and a written treatment plan.",
              },
              {
                t: "Bring your records",
                d: "Previous X-rays, prescriptions or a list of medicines you take regularly all help us plan safely — especially for implants, surgery and treatment during pregnancy.",
              },
              {
                t: "Pay the way you prefer",
                d: "We accept cash, bank transfer and cards at the clinic. Braces, aligners and implants can be split into monthly installments with 0% markup for up to 12 months.",
              },
            ].map((c, i) => (
              <Reveal key={c.t} delay={(i % 3) as 0 | 1 | 2}>
                <div className="card">
                  <h3>{c.t}</h3>
                  <p>{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="prose" style={{ marginTop: 40 }}>
            <h2>Rescheduling and cancellations</h2>
            <p>
              Plans change — we understand. If you cannot make your slot, message us on WhatsApp
              at least 3 hours ahead and we will move your appointment to the next convenient
              time at no charge. Running late? Call us and we will hold your slot for up to 15
              minutes where the schedule allows. For dental emergencies — severe pain, a broken
              tooth, swelling or a knocked-out tooth — skip the form and message us immediately;
              we reserve emergency slots every day and will guide you on what to do before you
              arrive.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
