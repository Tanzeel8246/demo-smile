import type { Metadata } from "next";
import Link from "next/link";
import { SITE, OG_IMAGE } from "@/lib/site";
import { PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: { absolute: "Terms of Service | SmileCraft Dental Clinic" },
  description:
    "The terms for using the SmileCraft Dental Clinic website: appointment requests, pricing information, medical disclaimers and limits of liability.",
  alternates: { canonical: `${SITE.domain}/terms/` },
  openGraph: {
    title: "Terms of Service | SmileCraft Dental Clinic",
    description: "Terms for using the SmileCraft website and requesting appointments.",
    url: `${SITE.domain}/terms/`,
    type: "website",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | SmileCraft Dental Clinic",
    description: "Terms for using the SmileCraft website and requesting appointments.",
    images: [OG_IMAGE.url],
  },
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        lead="The terms that apply when you use this website, request an appointment or receive information from SmileCraft Dental Clinic."
      />
      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container">
          <div className="prose">
            <p className="updated">Last updated: 20 October 2026 · SmileCraft Dental Clinic, {SITE.address}</p>

            <h2>1. About this website</h2>
            <p>
              This website is operated by SmileCraft Dental Clinic ("SmileCraft", "we", "us") and
              provides general information about our clinic, treatments, doctors and prices. By
              using this website you agree to these terms. If you do not agree, please do not use
              the website.
            </p>

            <h2>2. Information, not medical advice</h2>
            <p>
              Content on this website — including treatment descriptions, FAQs, prices and the
              cost estimator — is general information for education and planning only. It is not
              medical or dental advice, does not create a dentist–patient relationship, and is
              not a substitute for an in-person examination. Diagnosis and treatment
              recommendations are made only after a clinical assessment at the clinic. If you
              have a dental emergency, contact us immediately at {SITE.phoneDisplay} or seek
              urgent care.
            </p>

            <h2>3. Prices and estimates</h2>
            <p>
              Prices shown on this website are in Pakistani Rupees (PKR) and are accurate at the
              time of publication, but they may change without notice. The online cost estimator
              produces an indicative total based on the procedures you select; your confirmed
              price is the fixed written quote given after your consultation, which reflects your
              individual diagnosis. Where a price is shown "per tooth", "per implant" or
              "starting from", the final quote depends on clinical findings explained to you
              before treatment begins. No treatment will be started — or charged — without your
              agreement to the written plan.
            </p>

            <h2>4. Appointments</h2>
            <p>
              Appointment requests sent through this website or WhatsApp are requests only; your
              slot is confirmed when we reply confirming the date and time. We may need to
              reschedule in rare circumstances (for example, equipment maintenance or a clinical
              emergency) and will offer the earliest alternative. Please arrive on time; late
              arrival may shorten or move your appointment. Repeated missed appointments without
              notice may lead us to ask for advance booking confirmation for future visits.
            </p>

            <h2>5. Acceptable use</h2>
            <ul>
              <li>Do not use this website for any unlawful purpose or to send false appointment or enquiry details.</li>
              <li>Do not attempt to disrupt, probe or gain unauthorised access to the website or its hosting.</li>
              <li>Do not copy substantial parts of the website's text or images for commercial use without our written permission.</li>
            </ul>

            <h2>6. Intellectual property</h2>
            <p>
              The SmileCraft name, logo, text and design of this website belong to SmileCraft
              Dental Clinic or its licensors. Photographs are used under licence from their
              respective stock libraries. You may view and print pages for your personal use in
              planning your own dental care.
            </p>

            <h2>7. Third-party services and links</h2>
            <p>
              This website links to third-party services including WhatsApp, Google Maps and our
              website developer, CodeHubb. We are not responsible for the content, availability
              or privacy practices of third-party services; their own terms apply when you use
              them. Advertising displayed on this website, including through Google AdSense, is
              the responsibility of the respective advertisers and does not imply our endorsement
              of their products or services.
            </p>

            <h2>8. Liability</h2>
            <p>
              We work hard to keep the information on this website accurate and the website
              available, but we do not guarantee that it will always be error-free or
              uninterrupted. To the fullest extent permitted by law, SmileCraft is not liable for
              loss arising from reliance on website information without a clinical consultation.
              Nothing in these terms limits your rights as a patient in relation to treatment
              actually provided at the clinic, which is governed by professional standards and
              the treatment plan you agree with us.
            </p>

            <h2>9. Changes and governing law</h2>
            <p>
              We may update these terms from time to time; the version published on this page
              applies from its revision date. These terms are governed by the laws of Pakistan.
              Questions about these terms can be sent through our{" "}
              <Link href="/contact/">contact page</Link> or by phone at {SITE.phoneDisplay}. See
              also our <Link href="/privacy-policy/">Privacy Policy</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
