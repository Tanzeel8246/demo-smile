import Link from "next/link";
import { SITE, NAV_LINKS, waLink } from "@/lib/site";
import { LogoMark, WhatsAppIcon } from "@/components/icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link href="/" className="nav-logo" aria-label="SmileCraft Dental Clinic — home">
            <LogoMark />
            Smile<em>Craft</em>
          </Link>
          <p>
            Painless-first dentistry in Gulberg, Lahore. Braces, aligners,
            implants, whitening and family dental care — honest pricing, gentle hands.
          </p>
          <Link
            className="btn btn-whatsapp btn-sm"
            href={waLink("Hello SmileCraft! I have a question.")}
            target="_blank"
            rel="noopener"
          >
            <WhatsAppIcon /> Chat on WhatsApp
          </Link>
        </div>
        <div>
          <h4>Explore</h4>
          <ul>
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
            <li>
              <Link href="/appointment/">Book Appointment</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4>Treatments</h4>
          <ul>
            <li><Link href="/treatments/">Braces & Aligners</Link></li>
            <li><Link href="/treatments/">Teeth Whitening</Link></li>
            <li><Link href="/treatments/">Dental Implants</Link></li>
            <li><Link href="/treatments/">Root Canal</Link></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li><a href={SITE.phoneHref}>{SITE.phoneDisplay}</a></li>
            <li>{SITE.address}</li>
            <li>Mon – Sat: 10:00 AM – 9:00 PM</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container inner">
          <span>© {new Date().getFullYear()} SmileCraft Dental Clinic. All rights reserved.</span>
          <span className="footer-legal">
            <Link href="/privacy-policy/">Privacy Policy</Link>
            <Link href="/terms/">Terms of Service</Link>
          </span>
          <span className="site-credit">
            Website by <a href="https://codehubb.com" target="_blank" rel="noopener">CodeHubb</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
