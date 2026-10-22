import type { Metadata } from "next";
import Link from "next/link";
import { SITE, OG_IMAGE } from "@/lib/site";
import { PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: { absolute: "Privacy Policy | SmileCraft Dental Clinic" },
  description:
    "How SmileCraft Dental Clinic collects, uses and protects your information — WhatsApp enquiries, appointment requests, cookies and advertising on this website.",
  alternates: { canonical: `${SITE.domain}/privacy-policy/` },
  openGraph: {
    title: "Privacy Policy | SmileCraft Dental Clinic",
    description: "How SmileCraft collects, uses and protects your information.",
    url: `${SITE.domain}/privacy-policy/`,
    type: "website",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | SmileCraft Dental Clinic",
    description: "How SmileCraft collects, uses and protects your information.",
    images: [OG_IMAGE.url],
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        lead="How SmileCraft Dental Clinic handles the information you share with us — in plain language, with no surprises."
      />
      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container">
          <div className="prose">
            <p className="updated">Last updated: 20 October 2026 · SmileCraft Dental Clinic, {SITE.address}</p>

            <h2>1. Who we are</h2>
            <p>
              SmileCraft Dental Clinic ("SmileCraft", "we", "us") operates this website and
              provides dental care at {SITE.address}. You can reach us about this policy at any
              time by phone at {SITE.phoneDisplay} or through the{" "}
              <Link href="/contact/">contact page</Link>.
            </p>

            <h2>2. Information we collect</h2>
            <p>
              This website is informational. It has no user accounts, no online payments and no
              patient portal, and it does not store form submissions on a server. The information
              we receive is limited to what you choose to send us:
            </p>
            <ul>
              <li>
                <strong>Appointment and enquiry messages.</strong> Our booking and contact forms
                do not transmit data to us directly — they open WhatsApp with a message you have
                composed (your name, phone number, chosen treatment, preferred date and time, and
                any notes you add). That message is sent through WhatsApp only when you press
                send, and it is then governed by WhatsApp's own privacy policy as well as this
                one.
              </li>
              <li>
                <strong>Phone calls.</strong> If you call the clinic, our front desk may record
                your name, number and appointment details in the clinic's appointment register so
                we can manage your visit.
              </li>
              <li>
                <strong>Clinical records.</strong> If you become a patient, we create treatment
                records (examination notes, X-rays, treatment plans and invoices) which are held
                at the clinic as part of your dental care.
              </li>
              <li>
                <strong>Technical data.</strong> Like most websites, our hosting provider may log
                basic technical information such as your IP address, browser type and the pages
                visited, for security and performance purposes.
              </li>
            </ul>

            <h2>3. How we use your information</h2>
            <ul>
              <li>To respond to enquiries and arrange, confirm or reschedule appointments.</li>
              <li>To provide your dental treatment and maintain accurate clinical records.</li>
              <li>To send appointment reminders and aftercare guidance related to your treatment.</li>
              <li>To improve our services and this website.</li>
            </ul>
            <p>
              We do not sell your personal information, and we do not use patient information for
              marketing to third parties.
            </p>

            <h2>4. Cookies and advertising</h2>
            <p>
              This website itself sets only the cookies needed for basic functionality, such as
              remembering your light/dark theme preference on your own device. We may display
              advertising served by Google AdSense. Google and its partners may use cookies to
              serve ads based on your prior visits to this and other websites. You can opt out of
              personalised advertising by visiting Google Ads Settings, and you can learn how
              Google uses data from sites that use its services at Google's partner-sites policy
              page. You can also disable cookies entirely in your browser settings; the website
              will continue to work.
            </p>

            <h2>5. Sharing and retention</h2>
            <p>
              We share information only where necessary: with dental laboratories (for example,
              for crowns or aligners, using the minimum details required), with referral
              specialists with your knowledge, or where required by law. Clinical records are
              retained for as long as needed for your ongoing care and to meet professional and
              legal record-keeping obligations. WhatsApp messages remain on your device and ours
              within WhatsApp; you may delete them from your side at any time.
            </p>

            <h2>6. Your rights</h2>
            <p>
              You may ask us what personal information we hold about you, request a copy of your
              clinical records, ask for corrections, or ask us to delete enquiry messages we no
              longer need. Contact us at {SITE.phoneDisplay} and we will respond within a
              reasonable time. Deleting clinical records may be limited where professional
              standards require us to retain them.
            </p>

            <h2>7. Security and changes</h2>
            <p>
              We take reasonable administrative and technical steps to protect information held at
              the clinic. No method of transmission over the internet is completely secure, so
              please avoid sending highly sensitive medical documents through public messaging
              channels unless we ask for them. We may update this policy from time to time; the
              current version will always be published on this page with its revision date.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
