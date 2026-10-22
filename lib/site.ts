/* ==========================================================================
   SmileCraft Dental Clinic — central site data: contact details, opening
   hours, treatment prices, doctor profiles, testimonials and FAQs.
   ========================================================================== */

/** Shared Open Graph / Twitter preview image (clinic interior, no people). */
export const OG_IMAGE = {
  url: "/images/clinic-interior.jpg",
  width: 1200,
  height: 802,
  alt: "Inside SmileCraft Dental Clinic in Gulberg, Lahore — a bright, modern treatment room",
};

export const SITE = {
  name: "SmileCraft",
  tagline: "Gentle dentistry. Confident smiles.",
  domain: "https://smile.mamfss.com",
  address: "2nd Floor, Al-Hafeez Heights, Gulberg III, Lahore",
  phoneDisplay: "+92 42 3577 1234",
  phoneHref: "tel:+924235771234",
  whatsappNumber: "923023448246",
  whatsappUrl: "https://wa.me/923023448246",
  hours: [
    { days: "Monday – Saturday", time: "10:00 AM – 9:00 PM" },
    { days: "Sunday", time: "Closed" },
  ],
};

/** Build a WhatsApp deep link with a pre-filled message. */
export function waLink(message: string): string {
  return `${SITE.whatsappUrl}?text=${encodeURIComponent(message)}`;
}

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
  { href: "/treatments/", label: "Treatments" },
  { href: "/doctors/", label: "Doctors" },
  { href: "/faq/", label: "FAQs" },
  { href: "/contact/", label: "Contact" },
];

export type Procedure = {
  name: string;
  desc: string;
  price: number;
  priceNote?: string;
  duration: string;
};

export type TreatmentTab = {
  id: string;
  label: string;
  blurb: string;
  procedures: Procedure[];
};

export const TREATMENTS: TreatmentTab[] = [
  {
    id: "general",
    label: "General Dentistry",
    blurb:
      "Everyday care that keeps your teeth and gums healthy — checkups, cleanings, fillings and pain relief, all done gently.",
    procedures: [
      {
        name: "Dental Checkup & Consultation",
        desc: "Full oral examination, digital X-ray review and a written treatment plan with honest pricing.",
        price: 1000,
        duration: "20 min",
      },
      {
        name: "Scaling & Polishing",
        desc: "Ultrasonic deep cleaning that removes plaque, tartar and tea/coffee stains for fresh, healthy gums.",
        price: 4000,
        duration: "40 min",
      },
      {
        name: "Tooth-Colored Filling",
        desc: "Mercury-free composite fillings that blend invisibly with your natural tooth.",
        price: 6500,
        priceNote: "per tooth",
        duration: "45 min",
      },
      {
        name: "Root Canal Treatment",
        desc: "Single-visit, rotary endodontics that saves an infected tooth — painless-first technique.",
        price: 18000,
        priceNote: "per tooth",
        duration: "60 min",
      },
      {
        name: "Painless Tooth Extraction",
        desc: "Gentle, atraumatic extraction with proper anesthesia — including post-care guidance.",
        price: 5000,
        priceNote: "per tooth",
        duration: "30 min",
      },
      {
        name: "Wisdom Tooth Surgery",
        desc: "Surgical removal of impacted wisdom teeth by an experienced oral surgeon, with sedation options.",
        price: 25000,
        priceNote: "per tooth",
        duration: "60–90 min",
      },
    ],
  },
  {
    id: "cosmetic",
    label: "Cosmetic Dentistry",
    blurb:
      "Whitening, veneers and smile design for a smile you love showing — preview your result before we begin.",
    procedures: [
      {
        name: "Teeth Whitening",
        desc: "Professional in-office whitening that lifts 6–8 shades in a single session — enamel-safe.",
        price: 25000,
        duration: "90 min",
      },
      {
        name: "E-Max Veneers",
        desc: "Ultra-thin porcelain shells for shape, gap and colour correction. Digital smile design included.",
        price: 35000,
        priceNote: "per tooth",
        duration: "2 visits",
      },
      {
        name: "Smile Makeover",
        desc: "A complete plan combining whitening, veneers and gum shaping — designed around your face.",
        price: 60000,
        priceNote: "starting from",
        duration: "3–4 visits",
      },
      {
        name: "Dental Bonding",
        desc: "Same-day repair for chips, cracks and small gaps with tooth-colored resin.",
        price: 12000,
        priceNote: "per tooth",
        duration: "45 min",
      },
      {
        name: "Gum Contouring",
        desc: "Laser gum reshaping for a balanced gum-to-tooth ratio and a fuller smile.",
        price: 30000,
        duration: "45 min",
      },
      {
        name: "Dental Implant",
        desc: "Titanium implant with crown — the closest thing to a natural tooth, for single missing teeth.",
        price: 95000,
        priceNote: "per implant",
        duration: "2–3 visits",
      },
    ],
  },
  {
    id: "orthodontics",
    label: "Orthodontics",
    blurb:
      "Braces and clear aligners for teens and adults — straighten your teeth at any age with honest timelines.",
    procedures: [
      {
        name: "Metal Braces",
        desc: "Classic, reliable and the most affordable way to straighten teeth — great for teens.",
        price: 120000,
        priceNote: "full treatment",
        duration: "18–24 months",
      },
      {
        name: "Ceramic (Tooth-Colored) Braces",
        desc: "Same results as metal braces with discreet, tooth-colored brackets.",
        price: 160000,
        priceNote: "full treatment",
        duration: "18–24 months",
      },
      {
        name: "Clear Aligners",
        desc: "Invisalign-style removable aligners — nearly invisible, no food restrictions.",
        price: 350000,
        priceNote: "full treatment",
        duration: "12–18 months",
      },
      {
        name: "Lingual Braces",
        desc: "Braces placed behind the teeth — completely hidden from view.",
        price: 280000,
        priceNote: "full treatment",
        duration: "18–30 months",
      },
      {
        name: "Interceptive Orthodontics (Kids)",
        desc: "Early treatment for children 7–12 to guide jaw growth and prevent complex braces later.",
        price: 60000,
        priceNote: "phase one",
        duration: "6–12 months",
      },
      {
        name: "Retainers",
        desc: "Custom clear or fixed retainers to protect your straightened smile after treatment.",
        price: 15000,
        priceNote: "per set",
        duration: "1 visit",
      },
    ],
  },
];

/** Flat lookup of every procedure for the cost estimator + appointment form. */
export const ALL_PROCEDURES: (Procedure & { tab: string })[] = TREATMENTS.flatMap(
  (t) => t.procedures.map((p) => ({ ...p, tab: t.label }))
);

export type Doctor = {
  name: string;
  role: string;
  qualification: string;
  experience: string;
  specialties: string[];
  days: string;
  initials: string;
  photo: string;
  photoAlt: string;
};

export const DOCTORS: Doctor[] = [
  {
    name: "Dr. Ayesha Khan",
    role: "Orthodontist",
    qualification: "BDS, MDS (Orthodontics) — University of Health Sciences",
    experience: "12 years",
    specialties: ["Metal & Ceramic Braces", "Clear Aligners", "Kids Orthodontics"],
    days: "Mon, Wed, Fri",
    initials: "AK",
    photo: "/images/doctor-ayesha.jpg",
    photoAlt: "Dr. Ayesha Khan, orthodontist at SmileCraft, wearing a black hijab and maroon scrubs with a stethoscope",
  },
  {
    name: "Dr. Bilal Ahmed",
    role: "Implantologist",
    qualification: "BDS, MDS (Oral Implantology) — Aga Khan University",
    experience: "10 years",
    specialties: ["Dental Implants", "Full-Mouth Rehabilitation", "Bone Grafting"],
    days: "Tue, Thu, Sat",
    initials: "BA",
    photo: "/images/doctor-bilal.jpg",
    photoAlt: "Dr. Bilal Ahmed, implantologist at SmileCraft, in a white coat",
  },
  {
    name: "Dr. Sana Malik",
    role: "Cosmetic Dentist",
    qualification: "BDS, Fellowship in Aesthetic Dentistry — King Edward Medical University",
    experience: "8 years",
    specialties: ["Smile Design", "Veneers", "Teeth Whitening"],
    days: "Mon – Sat",
    initials: "SM",
    photo: "/images/doctor-sana.jpg",
    photoAlt: "Dr. Sana Malik, cosmetic dentist at SmileCraft, wearing a light hijab and dark scrubs with a stethoscope",
  },
  {
    name: "Dr. Usman Tariq",
    role: "Endodontist",
    qualification: "BDS, MDS (Endodontics) — University of the Punjab",
    experience: "9 years",
    specialties: ["Root Canal Treatment", "Painless Dentistry", "Dental Trauma"],
    days: "Mon, Tue, Thu, Sat",
    initials: "UT",
    photo: "/images/dentist-at-work.jpg",
    photoAlt: "Dr. Usman Tariq performing a precise, painless dental procedure under the clinic light",
  },
];

export const TESTIMONIALS = [
  {
    name: "Fatima Raza",
    area: "DHA, Lahore",
    quote:
      "I used to dread dental visits. At SmileCraft I genuinely didn't feel the root canal — Dr. Usman explained every step. Painless is real here.",
    treatment: "Root Canal",
  },
  {
    name: "Hamza Sheikh",
    area: "Model Town, Lahore",
    quote:
      "My braces took 16 months and the result is beyond what I expected. They gave me a realistic timeline on day one and stuck to it.",
    treatment: "Metal Braces",
  },
  {
    name: "Amina Tariq",
    area: "Gulberg, Lahore",
    quote:
      "Got whitening done before my wedding. Natural, not that artificial white — and my 6-year-old daughter now asks to visit the dentist herself!",
    treatment: "Teeth Whitening",
  },
  {
    name: "Rashid Mehmood",
    area: "Johar Town, Lahore",
    quote:
      "Two implants, zero complications. Transparent pricing on WhatsApp before I even visited. This is how a clinic should treat patients.",
    treatment: "Dental Implants",
  },
  {
    name: "Nadia Aslam",
    area: "Cantt, Lahore",
    quote:
      "They refused to do a veneer I didn't need and suggested bonding instead — half the cost. That honesty is why our whole family comes here.",
    treatment: "Dental Bonding",
  },
];

export const FAQS = [
  {
    q: "Does dental treatment hurt?",
    a: "We practice painless-first dentistry: effective local anesthesia, gentle technique, and sedation options for anxious patients. Most patients are surprised by how comfortable procedures like root canals and extractions feel with modern methods.",
  },
  {
    q: "How much do braces cost, and how long do they take?",
    a: "Metal braces start from Rs 120,000 and typically take 18–24 months; clear aligners start from Rs 350,000 and take 12–18 months. After a free assessment, your orthodontist gives you an exact timeline and fixed quote — with installment plans available.",
  },
  {
    q: "Is teeth whitening safe for enamel?",
    a: "Yes — professional in-office whitening uses controlled gels under dentist supervision and does not damage enamel. Some temporary sensitivity is normal and fades within 48 hours. Over-the-counter home kits are where most damage happens.",
  },
  {
    q: "What is the difference between an implant and a denture?",
    a: "An implant (Rs 95,000 per implant) is a fixed titanium root that feels and works like a natural tooth. Dentures are removable and more affordable but less stable. For one missing tooth, implants are the long-term gold standard.",
  },
  {
    q: "Do you treat children?",
    a: "Absolutely. We have a dedicated kids-friendly approach — first visits are fun checkups, fluoride application and cavity prevention. We also do interceptive orthodontics for ages 7–12 to guide jaw growth early.",
  },
  {
    q: "How often should I get scaling and polishing?",
    a: "Every 6–12 months, depending on your gum health. Tea, coffee and smoking can build tartar faster. Regular scaling prevents gum disease, which is the leading cause of tooth loss in adults.",
  },
  {
    q: "Do you offer payment plans?",
    a: "Yes. Braces, aligners and implants can be paid in monthly installments with 0% markup for 12 months. Cosmetic treatments can be split across two visits.",
  },
  {
    q: "What should I do in a dental emergency?",
    a: "Call or WhatsApp us immediately at +92 42 3577 1234. For a knocked-out tooth, keep it in milk and reach us within an hour — we reserve daily slots for emergencies. Tooth pain after hours? Message us and we'll guide you.",
  },
  {
    q: "How do you ensure sterilization?",
    a: "We follow a 4-step protocol: sealed instrument pouches, autoclave sterilization with indicators, disposable gloves and suction tips, and surface disinfection between every patient. You're welcome to ask about it — we're proud of it.",
  },
  {
    q: "What happens on my first visit?",
    a: "A 20-minute relaxed consultation: full examination, digital X-ray if needed, and a written treatment plan with honest pricing. No pressure — you decide at your own pace.",
  },
];

export const DEFAULT_BOOKING_MSG =
  "Hello SmileCraft! I would like to book an appointment.";

export const TIME_SLOTS = [
  "10:00 AM",
  "11:30 AM",
  "1:00 PM",
  "3:00 PM",
  "4:30 PM",
  "6:00 PM",
  "7:30 PM",
];

export function formatPKR(n: number): string {
  return "Rs " + n.toLocaleString("en-PK");
}
