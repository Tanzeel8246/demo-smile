import type { Metadata } from "next";
import Link from "next/link";
import { SITE, OG_IMAGE } from "@/lib/site";
import Reveal from "@/components/Reveal";
import Counters from "@/components/Counters";
import { PageHero, SectionHeading, AppointmentCtaBand } from "@/components/ui";
import { ShieldIcon, HeartIcon, SmileIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: { absolute: "About SmileCraft Dental Clinic, Lahore" },
  description:
    "SmileCraft is a painless-first dental clinic in Gulberg, Lahore — specialist dentists, transparent PKR pricing, strict sterilization and gentle family care.",
  alternates: { canonical: `${SITE.domain}/about/` },
  openGraph: {
    title: "About SmileCraft Dental Clinic, Lahore",
    description: "Specialist dentists, transparent pricing and painless-first care in Gulberg, Lahore.",
    url: `${SITE.domain}/about/`,
    type: "website",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "About SmileCraft Dental Clinic, Lahore",
    description: "Specialist dentists, transparent pricing and painless-first care in Gulberg, Lahore.",
    images: [OG_IMAGE.url],
  },
};

const values = [
  {
    icon: <HeartIcon />,
    t: "Painless first, always",
    d: "Fear of pain keeps more people away from dentists than anything else. Effective anesthesia, gentle technique and unhurried appointments are built into every procedure we do — including root canals and extractions.",
  },
  {
    icon: <ShieldIcon />,
    t: "Sterilization you can ask about",
    d: "Sealed instrument pouches, autoclave sterilization with indicators, single-use gloves and suction tips, and disinfected surfaces between every patient. Ask us to walk you through the protocol — we are proud of it.",
  },
  {
    icon: <SmileIcon />,
    t: "Honest, written pricing",
    d: "Every treatment plan comes with a fixed PKR quote before we begin. If a cheaper option will serve you just as well — bonding instead of a veneer, for example — we will recommend the cheaper option.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={<>A calmer kind of <span className="accent-text">dental clinic</span></>}
        lead="SmileCraft Dental Clinic in Gulberg III, Lahore was built around one observation: most people don't hate dentistry — they hate not knowing what will happen, whether it will hurt, and what it will cost."
      />
      <Counters />
      <section className="section">
        <div className="container">
          <div className="prose">
            <h2>Why we started SmileCraft</h2>
            <p>
              SmileCraft opened its doors in Gulberg, Lahore with a simple frustration: too many
              patients were arriving with small problems that had become big ones, simply because
              an earlier dental visit had been painful, rushed or confusingly priced. A cavity
              that needed a Rs 6,500 filling had become a root canal. A teenager who needed
              timely braces had waited until treatment took twice as long. We believed Lahore
              deserved a clinic organised around removing those three fears — pain, surprises
              and pressure — and that belief shapes everything from our appointment lengths to
              the way we write our price list.
            </p>
            <h2>Specialists, not generalists</h2>
            <p>
              Modern dentistry is too broad for one pair of hands. At SmileCraft your treatment
              is planned and performed by a specialist in that exact field: orthodontics by
              Dr. Ayesha Khan, implants and full-mouth rehabilitation by Dr. Bilal Ahmed, cosmetic
              dentistry and smile design by Dr. Sana Malik, and root canal treatment by
              Dr. Usman Tariq. Specialists work faster, gentler and with fewer complications —
              and when a case crosses specialties, the team plans it together so you never hear
              two different opinions from the same clinic.
            </p>
            <h2>Dentistry for the whole family</h2>
            <p>
              From a child's first checkup to a grandparent's implants, families across Lahore —
              Gulberg, DHA, Model Town, Johar Town and Cantt — trust us with every generation.
              Children's first visits are deliberately fun and pressure-free, because a child
              who trusts the dentist becomes an adult who never skips a checkup. For anxious
              adults we offer unhurried consultations, clear explanations at every step and
              sedation options where appropriate.
            </p>
            <h2>Visit us</h2>
            <p>
              You will find us at {SITE.address}, open Monday to Saturday, 10:00 AM to 9:00 PM.
              Book through our <Link href="/appointment/">appointment page</Link>, browse our{" "}
              <Link href="/treatments/">treatments and prices</Link>, or simply message us on
              WhatsApp at {SITE.phoneDisplay} — a real person will reply within clinic hours.
            </p>
          </div>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHeading
            center
            eyebrow="Our values"
            title="What we refuse to compromise"
          />
          <div className="grid-3">
            {values.map((v, i) => (
              <Reveal key={v.t} delay={(i % 3) as 0 | 1 | 2}>
                <div className="card">
                  <div className="card-icon">{v.icon}</div>
                  <h3>{v.t}</h3>
                  <p>{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <AppointmentCtaBand
        title={<>Come and see the difference <span className="accent-text">yourself</span></>}
        text="Your first consultation includes a full examination and a written treatment plan with fixed pricing — no obligation to proceed."
      />
    </>
  );
}
