"use client";

import { useCallback, useEffect, useState } from "react";
import { TESTIMONIALS } from "@/lib/site";
import { ChevronLeftIcon } from "@/components/icons";

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback(
    (dir: 1 | -1) => setIndex((i) => (i + dir + TESTIMONIALS.length) % TESTIMONIALS.length),
    []
  );

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => go(1), 6500);
    return () => clearInterval(t);
  }, [paused, go]);

  const t = TESTIMONIALS[index];

  return (
    <div
      className="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Patient testimonials"
    >
      <div className="carousel-track">
        <div className="carousel-slide" key={index}>
          <div className="stars" aria-label="5 out of 5 stars">★★★★★</div>
          <span className="treat-chip">{t.treatment}</span>
          <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
          <div className="who">
            <strong>{t.name}</strong>
            {t.area}
          </div>
        </div>
      </div>
      <div className="carousel-nav">
        <button className="carousel-btn" onClick={() => go(-1)} aria-label="Previous testimonial">
          <ChevronLeftIcon />
        </button>
        <div className="carousel-dots" aria-label="Testimonial selector">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              className={i === index ? "active" : ""}
              onClick={() => setIndex(i)}
              aria-label={`Show testimonial ${i + 1}`}
            />
          ))}
        </div>
        <button
          className="carousel-btn"
          onClick={() => go(1)}
          aria-label="Next testimonial"
          style={{ transform: "scaleX(-1)" }}
        >
          <ChevronLeftIcon />
        </button>
      </div>
    </div>
  );
}
