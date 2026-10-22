"use client";

import { useState } from "react";
import { TREATMENTS, waLink, formatPKR } from "@/lib/site";
import { WhatsAppIcon } from "@/components/icons";

/** Checkbox cost estimator — patients tick procedures and see a live PKR total. */
export default function CostEstimator() {
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const toggle = (name: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });
  };

  const total = TREATMENTS.flatMap((t) => t.procedures)
    .filter((p) => selected.has(p.name))
    .reduce((sum, p) => sum + p.price, 0);

  const chosen = Array.from(selected);

  return (
    <section className="estimator" aria-label="Treatment cost estimator">
      <div className="estimator-head">
        <div>
          <span className="eyebrow">Instant estimate</span>
          <h2 className="h2" style={{ marginBottom: 6 }}>Build your treatment estimate</h2>
          <p>Tick what you need — the total updates live. No surprises at the clinic.</p>
        </div>
        <div className="estimator-total" aria-live="polite">
          <div className="label">Estimated total</div>
          <div className="amount">{formatPKR(total)}</div>
        </div>
      </div>
      <div className="est-groups">
        {TREATMENTS.map((t) => (
          <div className="est-group" key={t.id}>
            <h4>{t.label}</h4>
            {t.procedures.map((p) => {
              const checked = selected.has(p.name);
              return (
                <label key={p.name} className={`est-item ${checked ? "checked" : ""}`}>
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggle(p.name)}
                    aria-label={`${p.name} — ${formatPKR(p.price)}`}
                  />
                  <span>
                    <span className="ename">{p.name}</span>
                    <span className="eprice">{formatPKR(p.price)}{p.priceNote ? ` ${p.priceNote}` : ""}</span>
                  </span>
                </label>
              );
            })}
          </div>
        ))}
      </div>
      <div style={{ marginTop: 26, display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
        <a
          className="btn btn-whatsapp"
          href={waLink(
            chosen.length
              ? `Hello SmileCraft! I used the cost estimator. My selection: ${chosen.join(", ")}. Estimated total: ${formatPKR(total)}. Please confirm pricing.`
              : "Hello SmileCraft! I'd like a cost estimate for my dental treatment."
          )}
          target="_blank"
          rel="noopener"
        >
          <WhatsAppIcon /> Send this estimate on WhatsApp
        </a>
        {chosen.length > 0 && (
          <button className="btn btn-ghost" onClick={() => setSelected(new Set())}>
            Clear selection
          </button>
        )}
      </div>
    </section>
  );
}
