"use client";

import { useState } from "react";
import Link from "next/link";
import { TREATMENTS, waLink, formatPKR } from "@/lib/site";
import { ClockIcon, ArrowRightIcon } from "@/components/icons";

export default function TreatmentTabs() {
  const [active, setActive] = useState(TREATMENTS[0].id);
  const tab = TREATMENTS.find((t) => t.id === active)!;

  return (
    <div>
      <div className="tabs" role="tablist" aria-label="Treatment categories">
        {TREATMENTS.map((t) => (
          <button
            key={t.id}
            role="tab"
            aria-selected={active === t.id}
            className={`tab-btn ${active === t.id ? "active" : ""}`}
            onClick={() => setActive(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>
      <p className="tab-blurb">{tab.blurb}</p>
      <div className="proc-list" key={tab.id} role="tabpanel">
        {tab.procedures.map((p) => (
          <article className="proc-row" key={p.name}>
            <div>
              <h3>{p.name}</h3>
              <p className="desc">{p.desc}</p>
              <div className="meta">
                <span className="dur">
                  <ClockIcon /> {p.duration}
                </span>
                <Link className="link" href="/appointment/">
                  Book this <ArrowRightIcon />
                </Link>
              </div>
            </div>
            <div className="proc-right">
              <div>
                <div className="price-tag">{formatPKR(p.price)}</div>
                {p.priceNote && <div className="price-note">{p.priceNote}</div>}
              </div>
              <a
                className="btn btn-ghost btn-sm"
                href={waLink(`Hello SmileCraft! I'd like to ask about "${p.name}" (${formatPKR(p.price)}${p.priceNote ? " " + p.priceNote : ""}).`)}
                target="_blank"
                rel="noopener"
              >
                Ask on WhatsApp
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
