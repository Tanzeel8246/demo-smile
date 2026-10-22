"use client";

import { useState } from "react";
import { waLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/icons";

/** Quick inquiry form — composes a WhatsApp message, stores nothing. */
export default function ContactInquiryForm() {
  const [name, setName] = useState("");
  const [question, setQuestion] = useState("");

  const inquiry = `Hello SmileCraft!\n\nName: ${name || "—"}\nMy question: ${question || "—"}`;

  return (
    <form
      className="form-card"
      style={{ padding: 32 }}
      onSubmit={(e) => {
        e.preventDefault();
        window.open(waLink(inquiry), "_blank", "noopener");
      }}
    >
      <h3 style={{ marginBottom: 6 }}>Quick inquiry</h3>
      <p style={{ color: "var(--muted)", fontSize: "0.92rem", marginBottom: 18 }}>
        Type your question — it opens WhatsApp, prefilled and ready to send.
      </p>
      <div className="form-grid" style={{ gridTemplateColumns: "1fr" }}>
        <div className="field">
          <label htmlFor="in-name">Your name</label>
          <input
            id="in-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Ahmed Raza"
          />
        </div>
        <div className="field">
          <label htmlFor="in-q">Your question</label>
          <textarea
            id="in-q"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="e.g. How much would clear aligners cost for me?"
            required
          />
        </div>
      </div>
      <button type="submit" className="btn btn-whatsapp" style={{ marginTop: 18, width: "100%" }}>
        <WhatsAppIcon /> Send via WhatsApp
      </button>
    </form>
  );
}
