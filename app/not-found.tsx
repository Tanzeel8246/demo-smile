import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { ToothIllustration } from "@/components/icons";

export const metadata: Metadata = {
  title: "This tooth is missing (404)",
  description: "The page you're looking for doesn't exist at SmileCraft Dental Clinic.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="notfound">
      <div className="container">
        <div className="big">404</div>
        <div style={{ maxWidth: 220, margin: "0 auto 18px", opacity: 0.9 }}>
          <ToothIllustration />
        </div>
        <h1 className="h2">This tooth is missing</h1>
        <p className="lead" style={{ margin: "0 auto 32px" }}>
          The page you're looking for isn't in our mouth — I mean, on our site.
          Let's get you back to a healthy homepage.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link className="btn btn-primary" href="/">
            Back to home
          </Link>
          <Link className="btn btn-ghost" href="/appointment/">
            Book an appointment
          </Link>
        </div>
      </div>
    </section>
  );
}
