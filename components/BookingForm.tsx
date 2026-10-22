"use client";

import { useState } from "react";
import { ALL_PROCEDURES, TIME_SLOTS, waLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/icons";

/** Appointment form — composes a WhatsApp message with every detail prefilled. */
export default function BookingForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [treatment, setTreatment] = useState(ALL_PROCEDURES[0].name);
  const [date, setDate] = useState("");
  const [slot, setSlot] = useState(TIME_SLOTS[0]);
  const [notes, setNotes] = useState("");

  const today = new Date().toISOString().split("T")[0];

  const message = [
    "Hello SmileCraft!",
    "I would like to book an appointment.",
    "",
    `Name: ${name || "—"}`,
    `Phone: ${phone || "—"}`,
    `Treatment: ${treatment}`,
    `Preferred date: ${date || "—"}`,
    `Time slot: ${slot}`,
    notes ? `Notes: ${notes}` : "",
  ]
    .filter((l) => l !== "")
    .join("\n");

  const valid = name.trim().length >= 2 && phone.trim().length >= 7 && date !== "";

  return (
    <form
      className="form-card"
      onSubmit={(e) => {
        e.preventDefault();
        if (valid) window.open(waLink(message), "_blank", "noopener");
      }}
    >
      <div className="form-grid">
        <div className="field">
          <label htmlFor="bk-name">Full name <span className="req">*</span></label>
          <input
            id="bk-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Ayesha Raza"
            required
          />
        </div>
        <div className="field">
          <label htmlFor="bk-phone">Phone number <span className="req">*</span></label>
          <input
            id="bk-phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="03xx xxxxxxx"
            required
          />
        </div>
        <div className="field">
          <label htmlFor="bk-treatment">Treatment</label>
          <select
            id="bk-treatment"
            value={treatment}
            onChange={(e) => setTreatment(e.target.value)}
          >
            {ALL_PROCEDURES.map((p) => (
              <option key={p.name} value={p.name}>
                {p.name} ({p.tab})
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="bk-date">Preferred date <span className="req">*</span></label>
          <input
            id="bk-date"
            type="date"
            value={date}
            min={today}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="field full">
          <label htmlFor="bk-slot">Preferred time slot</label>
          <select id="bk-slot" value={slot} onChange={(e) => setSlot(e.target.value)}>
            {TIME_SLOTS.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
        <div className="field full">
          <label htmlFor="bk-notes">Anything we should know? (optional)</label>
          <textarea
            id="bk-notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Symptoms, anxiety about dental visits, previous treatment…"
          />
        </div>
      </div>
      <div style={{ marginTop: 24, textAlign: "center" }}>
        <button type="submit" className="btn btn-whatsapp btn-lg" disabled={!valid} style={!valid ? { opacity: 0.55, cursor: "not-allowed" } : undefined}>
          <WhatsAppIcon /> Confirm booking on WhatsApp
        </button>
        <p className="form-note">
          This form opens WhatsApp with your details prefilled — no data is stored on any server.
        </p>
      </div>
    </form>
  );
}
