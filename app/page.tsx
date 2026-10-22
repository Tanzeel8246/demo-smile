import type { Metadata } from "next";
import Link from "next/link";
import { SITE, OG_IMAGE, waLink, DOCTORS, DEFAULT_BOOKING_MSG, formatPKR } from "@/lib/site";
import Reveal from "@/components/Reveal";
import Counters from "@/components/Counters";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { SectionHeading, AppointmentCtaBand } from "@/components/ui";
import {
  ShieldIcon, StarIcon, SmileIcon, HeartIcon, ClockIcon,
  ArrowRightIcon, WhatsAppIcon, CheckIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: { absolute: "SmileCraft Dental Clinic – Gentle Dentistry, Lahore" },
  description:
    "Painless-first dentistry in Lahore: braces, clear aligners, implants, whitening and family care. 10,000+ smiles, 4.9 rating. Book your visit on WhatsApp.",
  alternates: { canonical: `${SITE.domain}/` },
  openGraph: {
    title: "SmileCraft Dental Clinic – Gentle Dentistry, Lahore",
    description: "Painless-first dentistry: braces, aligners, implants, whitening and family care.",
    url: `${SITE.domain}/`,
    type: "website",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "SmileCraft Dental Clinic – Gentle Dentistry, Lahore",
    description: "Painless-first dentistry: braces, aligners, implants, whitening and family care.",
    images: [OG_IMAGE.url],
  },
};

const heroBadges = [
  { icon: <ShieldIcon />, text: "Painless-first dentistry" },
  { icon: <SmileIcon />, text: "10k+ smiles" },
  { icon: <StarIcon />, text: "4.9 patient rating" },
];

const whyPoints = [
  {
    title: "Honestly painless",
    text: "Effective anesthesia, gentle hands and sedation options. If you're anxious about dentists, you're our favourite kind of patient.",
  },
  {
    title: "Transparent PKR pricing",
    text: "Written quote before we start. No surprise add-ons, no upselling treatments you don't need — ever.",
  },
  {
    title: "Specialists, not generalists",
    text: "Your root canal is done by an endodontist, your braces by an orthodontist. The right expert for every tooth.",
  },
];

const previewCards = [
  {
    mini: "General",
    title: "Scaling & Polishing",
    text: "Deep ultrasonic cleaning that removes plaque and tea stains in 40 minutes.",
    price: 4000,
    wide: false,
    img: "/images/dental-instruments.jpg",
    imgAlt: "Sterile dental instruments and a mouth mirror prepared for a scaling and polishing session",
  },
  {
    mini: "Orthodontics",
    title: "Braces & Clear Aligners",
    text: "From Rs 120,000 metal braces to invisible aligners — straighten your smile at any age.",
    price: null,
    wide: true,
    img: "/images/aligner-scan.jpg",
    imgAlt: "3D digital dental scanner used to plan clear aligner treatment at SmileCraft",
  },
  {
    mini: "Cosmetic",
    title: "Teeth Whitening",
    text: "6–8 shades brighter in one 90-minute session. Wedding-ready smiles, enamel-safe.",
    price: 25000,
    wide: false,
    img: "/images/whitening-smile.jpg",
    imgAlt: "Patient smiling with bright, white teeth after a professional whitening session",
  },
];

const galleryItems = [
  {
    img: "/images/whitening-smile.jpg",
    alt: "Patient smiling with a bright, confident smile after teeth whitening",
    title: "Teeth Whitening",
    caption: "Danish from Gulberg — 7 shades brighter in one 90-minute session before his graduation.",
  },
  {
    img: "/images/smile-man.jpg",
    alt: "Patient smiling with straight white teeth after orthodontic treatment",
    title: "Braces, completed",
    caption: "Hamza from Model Town — 16 months of metal braces, finished right on schedule.",
  },
  {
    img: "/images/aligner-scan.jpg",
    alt: "3D digital dental scanner used to plan clear aligner treatment without messy impressions",
    title: "Clear Aligners",
    caption: "Every aligner plan starts with a precise 3D scan — no messy impressions, no guesswork.",
  },
  {
    img: "/images/dentist-consult.jpg",
    alt: "SmileCraft dentist reviewing a patient's treatment plan beside the dental chair",
    title: "Gentle Checkups",
    caption: "Six-monthly scaling and review — the visit that keeps every other treatment away.",
  },
];

const journeySteps = [
  {
    n: "01",
    t: "Book on WhatsApp",
    d: "Message us a day and time that suits you. We confirm your slot within clinic hours — no hold music, no forms at a desk.",
  },
  {
    n: "02",
    t: "Consult & X-ray — Rs 1,000",
    d: "A relaxed 20-minute examination with a digital X-ray if needed. We show you exactly what we see, on screen, in plain words.",
  },
  {
    n: "03",
    t: "Written plan, fixed price",
    d: "You leave with a written treatment plan and a fixed PKR quote. Take it home, think it over — the price won't change later.",
  },
  {
    n: "04",
    t: "Treatment & aftercare",
    d: "Painless-first treatment by your specialist, then a follow-up call the next day and a free review visit within two weeks.",
  },
];

export default function Home() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="hero">
        <div className="hero-glow" aria-hidden="true">
          <div className="glow glow-1" />
          <div className="glow glow-2" />
        </div>
        <div className="container hero-grid">
          <Reveal>
            <div className="hero-badges">
              {heroBadges.map((b) => (
                <span key={b.text} className="trust-chip">
                  {b.icon}
                  {b.text}
                </span>
              ))}
            </div>
            <h1 className="h1">
              Gentle dentistry.<br />
              <span className="accent-text">Confident smiles.</span>
            </h1>
            <p className="lead">
              At SmileCraft in Gulberg, Lahore, we do dentistry differently:
              painless-first techniques, honest pricing in PKR, and specialists
              for every treatment — from a simple cleaning to a full smile makeover.
            </p>
            <div className="hero-actions">
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
          </Reveal>
          <Reveal delay={1}>
            <div>
              <div className="hero-photo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/hero-interior.jpg"
                  alt="Inside SmileCraft Dental Clinic in Gulberg — bright, modern treatment rooms with teal dental chairs"
                  width={1200}
                  height={800}
                />
              </div>
            <aside className="hero-card" aria-label="Clinic hours">
              <div className="card-title">Visit us this week</div>
              <p className="card-sub">{SITE.address}</p>
              <div className="slot-row">
                <span className="day">Monday – Saturday</span>
                <span className="open">10:00 AM – 9:00 PM</span>
              </div>
              <div className="slot-row">
                <span className="day">Sunday</span>
                <span className="closed">Closed</span>
              </div>
              <div className="slot-row">
                <span className="day">Emergency slots</span>
                <span className="open">Daily, reserved</span>
              </div>
              <div className="hero-rating">
                <span className="stars" aria-hidden="true">★★★★★</span>
                <p><strong>4.9/5</strong> from 1,200+ patient reviews</p>
              </div>
            </aside>
            </div>
          </Reveal>
        </div>
      </section>

      <Counters />

      {/* ================= WHY ================= */}
      <section className="section">
        <div className="container split">
          <Reveal>
            <div>
              <SectionHeading
                eyebrow="Why SmileCraft"
                title={<>Dentistry that doesn't feel like <span className="accent-text">dentistry</span></>}
              />
              <ul className="feature-list">
                {whyPoints.map((w) => (
                  <li key={w.title}>
                    <span className="tick"><CheckIcon /></span>
                    <div>
                      <strong>{w.title}</strong>
                      <span>{w.text}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div className="illustration-panel photo-panel">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/implant-consult.jpg"
                alt="SmileCraft dentist reviewing dental implant scans and 3D X-rays on a lightbox"
                loading="lazy"
                width={1200}
                height={900}
              />
              <p className="caption">Sterilized, sealed, single-use — ask us about our 4-step protocol.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= TREATMENTS PREVIEW ================= */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHeading
            center
            eyebrow="Popular treatments"
            title="What patients come to us for"
            lead="A few favourites from our full treatment menu — every procedure has a fixed, written price."
          />
          <div className="bento">
            {previewCards.map((c, i) => (
              <Reveal key={c.title} delay={(i % 3) as 0 | 1 | 2}>
                <article className={`bento-card ${c.wide ? "wide" : ""}`}>
                  {!c.wide && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img className="card-photo" src={c.img} alt={c.imgAlt} loading="lazy" width={1200} height={750} />
                  )}
                  <div style={{ flex: 1 }}>
                    <span className="mini-label">{c.mini}</span>
                    <h3>{c.title}</h3>
                    <p>{c.text}</p>
                    {c.price && <div className="price-tag">from {formatPKR(c.price)}</div>}
                    <Link className="link" href="/treatments/" style={{ marginTop: 12 }}>
                      See all treatments <ArrowRightIcon />
                    </Link>
                  </div>
                  {c.wide && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img className="card-photo-wide" src={c.img} alt={c.imgAlt} loading="lazy" width={1200} height={900} />
                  )}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= DOCTORS TEASER ================= */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHeading
            center
            eyebrow="Meet your dentists"
            title="Specialists for every smile"
            lead="No generalist guesswork — your treatment is done by the doctor who does it all day, every day."
          />
          <div className="doc-grid">
            {DOCTORS.slice(0, 4).map((d, i) => (
              <Reveal key={d.name} delay={(i % 4) as 0 | 1 | 2 | 3}>
                <article className="doc-card">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img className="doc-photo" src={d.photo} alt={d.photoAlt} loading="lazy" width={800} height={800} />
                  <h3>{d.name}</h3>
                  <div className="doc-role">{d.role}</div>
                  <p className="qual">{d.qualification.split(" — ")[0]}</p>
                  <div className="spec-chips">
                    {d.specialties.slice(0, 2).map((s) => (
                      <span key={s}>{s}</span>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 36 }}>
            <Link className="btn btn-ghost" href="/doctors/">
              Meet all 4 doctors <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= PATIENT JOURNEY ================= */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container split">
          <Reveal>
            <div className="illustration-panel photo-panel">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/clinic-interior.jpg"
                alt="Inside the SmileCraft clinic in Gulberg — a bright, modern treatment room with a teal dental chair"
                loading="lazy"
                width={1200}
                height={900}
              />
              <p className="caption">Our Gulberg clinic — bright, calm and sterilized between every patient.</p>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div>
              <SectionHeading
                eyebrow="Your visit, step by step"
                title={<>From first message to <span className="accent-text">final smile</span></>}
                lead="No surprises at any step — most patients tell us the not-knowing was the worst part, so we removed it."
              />
              <div className="journey-steps">
                {journeySteps.map((s) => (
                  <div key={s.n} className="journey-step">
                    <span className="journey-num">{s.n}</span>
                    <div>
                      <strong>{s.t}</strong>
                      <span>{s.d}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="section" style={{ background: "var(--bg-2)", borderBlock: "1px solid var(--line)" }}>
        <div className="container">
          <SectionHeading
            center
            eyebrow="Patient stories"
            title="Smiles that speak for us"
            lead="Real patients, real treatments, real reviews — here's why Lahore trusts SmileCraft."
          />
          <Reveal>
            <TestimonialCarousel />
          </Reveal>
        </div>
      </section>

      {/* ================= SMILE GALLERY ================= */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHeading
            center
            eyebrow="Smile gallery"
            title="Real treatments, real smiles"
            lead="A look inside the clinic and at the results our patients walk out with — whitening, braces, aligners and everyday gentle care."
          />
          <div className="gallery-grid">
            {galleryItems.map((g, i) => (
              <Reveal key={g.title} delay={(i % 4) as 0 | 1 | 2 | 3}>
                <figure className="gallery-item">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={g.img} alt={g.alt} loading="lazy" width={1000} height={1250} />
                  <figcaption>
                    <strong>{g.title}</strong>
                    <span>{g.caption}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= KIDS + EMERGENCY SPLIT ================= */}
      <section className="section">
        <div className="container split flipped">
          <Reveal>
            <div>
              <SectionHeading
                eyebrow="For the whole family"
                title={<>Kids who <span className="accent-text">ask</span> to visit the dentist</>}
              />
              <p className="lead" style={{ marginBottom: 24 }}>
                First visits are fun checkups, fluoride application and cavity
                prevention — plus interceptive orthodontics for ages 7–12 that
                can prevent complex braces later. And for dental emergencies,
                we keep daily slots reserved: call or WhatsApp, we'll fit you in.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Link className="btn btn-primary" href="/faq/">Common questions</Link>
                <a className="btn btn-ghost" href={SITE.phoneHref}>
                  <ClockIcon /> Emergency: {SITE.phoneDisplay}
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="kids-photo"
                src="/images/kids-suite.jpg"
                alt="SmileCraft's bright family treatment suite with a child-friendly orange dental chair"
                loading="lazy"
                width={1200}
                height={675}
              />
            <div className="grid-2">
              <div className="card" style={{ textAlign: "center" }}>
                <div className="card-icon" style={{ marginInline: "auto" }}><HeartIcon /></div>
                <h3>Kids dentistry</h3>
                <p>Fun first visits &amp; cavity prevention for little smiles.</p>
              </div>
              <div className="card" style={{ textAlign: "center" }}>
                <div className="card-icon" style={{ marginInline: "auto" }}><SmileIcon /></div>
                <h3>Same-day fixes</h3>
                <p>Chips, cracks and pain relief — often in a single visit.</p>
              </div>
            </div>
            </div>
          </Reveal>
        </div>
      </section>

      <AppointmentCtaBand />
    </>
  );
}
