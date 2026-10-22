"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_LINKS, waLink, DEFAULT_BOOKING_MSG } from "@/lib/site";
import ThemeToggle from "@/components/ThemeToggle";
import { LogoMark, MenuIcon, CloseIcon, WhatsAppIcon } from "@/components/icons";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href.replace(/\/$/, ""));
  };

  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link href="/" className="nav-logo" aria-label="SmileCraft Dental Clinic — home">
          <LogoMark />
          Smile<em>Craft</em>
        </Link>
        <nav className="nav-links" aria-label="Primary">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={isActive(l.href) ? "active" : ""}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="nav-cta">
          <ThemeToggle />
          <Link
            className="btn btn-primary btn-sm"
            href="/appointment/"
          >
            Book Appointment
          </Link>
          <button
            className="nav-toggle"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
      <nav className={`mobile-menu ${open ? "open" : ""}`} aria-label="Mobile">
        {NAV_LINKS.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className={isActive(l.href) ? "active" : ""}
            onClick={() => setOpen(false)}
          >
            {l.label}
          </Link>
        ))}
        <Link href="/appointment/" className="btn btn-primary" onClick={() => setOpen(false)}>
          Book Appointment
        </Link>
        <Link
          className="btn btn-whatsapp"
          href={waLink(DEFAULT_BOOKING_MSG)}
          target="_blank"
          rel="noopener"
        >
          <WhatsAppIcon /> WhatsApp Us
        </Link>
        <div className="mobile-theme">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
