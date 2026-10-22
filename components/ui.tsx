import Link from "next/link";
import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";
import { waLink, DEFAULT_BOOKING_MSG } from "@/lib/site";
import { WhatsAppIcon } from "@/components/icons";

export function SectionHeading({
  eyebrow,
  title,
  lead,
  center = false,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: string;
  center?: boolean;
}) {
  return (
    <Reveal>
      <div className={`section-head ${center ? "center" : ""}`}>
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="h2">{title}</h2>
        {lead && <p className="lead">{lead}</p>}
      </div>
    </Reveal>
  );
}

export function PageHero({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: string;
}) {
  return (
    <section className="page-hero">
      <div className="hero-glow" aria-hidden="true">
        <div className="glow glow-1" />
        <div className="glow glow-2" />
      </div>
      <div className="container" style={{ position: "relative" }}>
        <Reveal>
          <span className="eyebrow" style={{ justifyContent: "center" }}>{eyebrow}</span>
          <h1>{title}</h1>
          {lead && <p>{lead}</p>}
        </Reveal>
      </div>
    </section>
  );
}

export function AppointmentCtaBand({
  title = <>Ready for a <span className="accent-text">healthier smile?</span></>,
  text = "Book a consultation in under a minute. Message us your preferred day and treatment — we'll confirm your slot on WhatsApp.",
}: {
  title?: ReactNode;
  text?: string;
}) {
  return (
    <section className="section-sm">
      <div className="container">
        <Reveal>
          <div className="cta-band">
            <span className="eyebrow">Book in 60 seconds</span>
            <h2>{title}</h2>
            <p>{text}</p>
            <div className="cta-band btn-row">
              <Link className="btn btn-primary btn-lg" href="/appointment/">
                Book Appointment
              </Link>
              <a
                className="btn btn-whatsapp btn-lg"
                href={waLink(DEFAULT_BOOKING_MSG)}
                target="_blank"
                rel="noopener"
              >
                <WhatsAppIcon /> WhatsApp Us
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
