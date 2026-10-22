import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { SITE, OG_IMAGE } from "@/lib/site";
import { WhatsAppIcon } from "@/components/icons";

const inter = Inter({ variable: "--font-body", subsets: ["latin"] });
const manrope = Manrope({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.domain),
  title: {
    default: "SmileCraft Dental Clinic – Gentle Dentistry, Lahore",
    template: "%s | SmileCraft Dental Clinic",
  },
  description:
    "SmileCraft Dental Clinic in Gulberg III, Lahore: painless-first dentistry — braces, clear aligners, implants, whitening and family dental care. Book on WhatsApp.",
  keywords: [
    "dentist Lahore",
    "dental clinic Gulberg",
    "braces Lahore",
    "clear aligners Pakistan",
    "dental implants",
    "teeth whitening Lahore",
    "painless dentistry",
  ],
  authors: [{ name: "SmileCraft Dental Clinic" }],
  creator: "SmileCraft Dental Clinic",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.domain,
    siteName: "SmileCraft Dental Clinic",
    title: "SmileCraft Dental Clinic – Gentle Dentistry, Lahore",
    description:
      "Painless-first dentistry: braces, aligners, implants, whitening and family care in Lahore.",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "SmileCraft Dental Clinic – Gentle Dentistry, Lahore",
    description:
      "Painless-first dentistry: braces, aligners, implants, whitening and family care in Lahore.",
    images: [OG_IMAGE.url],
  },
};

const dentistJsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "SmileCraft Dental Clinic",
  url: SITE.domain,
  telephone: "+92 42 3577 1234",
  priceRange: "Rs 1,000 – Rs 350,000",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2nd Floor, Al-Hafeez Heights, Gulberg III",
    addressLocality: "Lahore",
    addressRegion: "Punjab",
    addressCountry: "PK",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:00",
      closes: "21:00",
    },
  ],
  sameAs: ["https://wa.me/923023448246"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${manrope.variable}`}>
      <Script
        id="theme-init"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(){try{var t=localStorage.getItem('smile-theme');if(!t){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.dataset.theme=t;}catch(e){document.documentElement.dataset.theme='light';}})();`,
        }}
      />
      <body>
        <JsonLd data={dentistJsonLd} />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <a
          className="wa-float"
          href={`${SITE.whatsappUrl}?text=${encodeURIComponent("Hello SmileCraft! I have a question about dental treatment.")}`}
          target="_blank"
          rel="noopener"
          aria-label="Chat with SmileCraft on WhatsApp"
        >
          <WhatsAppIcon />
        </a>
      </body>
    </html>
  );
}
