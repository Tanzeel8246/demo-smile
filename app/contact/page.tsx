import type { Metadata } from "next";
import { SITE, OG_IMAGE, waLink } from "@/lib/site";
import Reveal from "@/components/Reveal";
import ContactInquiryForm from "@/components/ContactInquiryForm";
import { PageHero, SectionHeading } from "@/components/ui";
import { PinIcon, ClockIcon, PhoneIcon, WhatsAppIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: { absolute: "Contact SmileCraft Dental Clinic, Gulberg Lahore" },
  description:
    "Visit SmileCraft Dental Clinic at Al-Hafeez Heights, Gulberg III, Lahore. Call +92 42 3577 1234 or WhatsApp us — open Monday to Saturday, 10 AM to 9 PM.",
  alternates: { canonical: `${SITE.domain}/contact/` },
  openGraph: {
    title: "Contact SmileCraft Dental Clinic, Gulberg Lahore",
    description: "Address, hours, phone and WhatsApp for SmileCraft Dental Clinic in Gulberg III, Lahore.",
    url: `${SITE.domain}/contact/`,
    type: "website",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact SmileCraft Dental Clinic, Gulberg Lahore",
    description: "Address, hours, phone and WhatsApp for SmileCraft Dental Clinic in Gulberg III, Lahore.",
    images: [OG_IMAGE.url],
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Come say <span className="accent-text">hello.</span></>}
        lead="Visit the clinic, call us, or send a WhatsApp — a real human replies within clinic hours."
      />
      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container">
          <div className="contact-grid">
            <Reveal>
              <div style={{ display: "grid", gap: 22 }}>
                <div className="info-card">
                  <h3><PinIcon /> Visit us</h3>
                  <p style={{ color: "var(--text-2)", fontWeight: 600 }}>{SITE.address}</p>
                  <p style={{ color: "var(--muted)", fontSize: "0.92rem", marginTop: 8 }}>
                    Easy parking available. Look for the SmileCraft signboard on the 2nd floor.
                  </p>
                </div>
                <div className="info-card">
                  <h3><ClockIcon /> Clinic hours</h3>
                  {SITE.hours.map((h) => (
                    <div className="info-row" key={h.days}>
                      <span className="k">{h.days}</span>
                      <span className="v">{h.time}</span>
                    </div>
                  ))}
                </div>
                <div className="info-card">
                  <h3><PhoneIcon /> Call or WhatsApp</h3>
                  <div className="info-row">
                    <span className="k">Phone</span>
                    <a className="v" href={SITE.phoneHref} style={{ color: "var(--accent)" }}>
                      {SITE.phoneDisplay}
                    </a>
                  </div>
                  <div style={{ marginTop: 16 }}>
                    <a
                      className="btn btn-whatsapp"
                      href={waLink("Hello SmileCraft! I have a question.")}
                      target="_blank"
                      rel="noopener"
                    >
                      <WhatsAppIcon /> Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div style={{ display: "grid", gap: 22 }}>
                <div className="map-placeholder" style={{ height: "100%" }}>
                  <PinIcon />
                  <div>
                    <strong style={{ color: "var(--text-2)" }}>Al-Hafeez Heights, Gulberg III, Lahore</strong>
                    <p style={{ fontSize: "0.9rem", marginTop: 6 }}>
                      On Main Boulevard Gulberg, minutes from Liberty Market and Noor Jahan Road.
                    </p>
                  </div>
                  <a
                    className="btn btn-ghost btn-sm"
                    href="https://www.google.com/maps/search/?api=1&query=Al-Hafeez+Heights+Gulberg+III+Lahore"
                    target="_blank"
                    rel="noopener"
                  >
                    Open in Google Maps
                  </a>
                </div>
                <ContactInquiryForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      <section className="section-sm" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHeading
            center
            eyebrow="Getting here"
            title="Easy to reach, easy to talk to"
          />
          <div className="grid-3">
            {[
              {
                t: "By car",
                d: "We are on the 2nd floor of Al-Hafeez Heights, Gulberg III, just off Main Boulevard. Street parking and a paid parking lot are both available within a minute's walk of the entrance.",
              },
              {
                t: "By bus or rickshaw",
                d: "Any route along Main Boulevard Gulberg stops near Liberty Market — from there the clinic is a short walk. Ride-hailing apps find us easily by searching for Al-Hafeez Heights, Gulberg.",
              },
              {
                t: "Dental emergency?",
                d: "Do not wait for opening hours to ask for help. Message us on WhatsApp any time — for severe pain, swelling, a broken tooth or a knocked-out tooth, we will guide you immediately and reserve the earliest emergency slot.",
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
            <h2>What happens after you contact us</h2>
            <p>
              WhatsApp is the fastest way to reach SmileCraft. During clinic hours
              (Monday to Saturday, 10:00 AM to 9:00 PM) we usually reply within 30 minutes.
              Tell us what is bothering you — pain, a cosmetic concern, braces for your child —
              and we will suggest the right specialist, the likely treatment and an honest price
              range before you visit. If you prefer to talk, call {SITE.phoneDisplay} and the
              front desk will book you in directly. Messages received on Sunday are answered
              first thing on Monday morning, except emergencies, which we triage as soon as we
              see them.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
