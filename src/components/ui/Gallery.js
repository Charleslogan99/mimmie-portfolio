"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function Gallery({ portraits }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const previous = () => setActiveIndex((current) => (current - 1 + portraits.length) % portraits.length);
  const next = () => setActiveIndex((current) => (current + 1) % portraits.length);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setIsOpen(false);
      if (event.key === "ArrowRight") setActiveIndex((current) => (current + 1) % portraits.length);
      if (event.key === "ArrowLeft") setActiveIndex((current) => (current - 1 + portraits.length) % portraits.length);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, portraits.length]);

  const thumbnails = (className = "") => (
    <div className={`gallery-thumbnails ${className}`} aria-label="Choose a portrait">
      {portraits.map((portrait, index) => (
        <button className={index === activeIndex ? "active" : ""} type="button" key={portrait.src} onClick={(event) => { event.stopPropagation(); setActiveIndex(index); }} aria-label={`Show ${portrait.title}`} aria-current={index === activeIndex ? "true" : undefined}>
          <Image src={portrait.src} alt="" fill sizes="52px" />
        </button>
      ))}
    </div>
  );

  return (
    <>
      <div className="gallery-carousel" data-reveal>
        <button className="gallery-stage" type="button" onClick={() => setIsOpen(true)} aria-label={`View ${portraits[activeIndex].title} full screen`}>
          {portraits.map((portrait, index) => <Image className={index === activeIndex ? "active" : ""} key={portrait.src} src={portrait.src} alt={`${portrait.title} — professional portrait of Mirian Okoro`} fill sizes="(max-width: 900px) 100vw, 62vw" priority={index === 0} />)}
          <span className="gallery-view">View full portrait ↗</span>
        </button>
        <button className="gallery-arrow gallery-prev" type="button" onClick={previous} aria-label="Previous portrait"><span>←</span></button>
        <button className="gallery-arrow gallery-next" type="button" onClick={next} aria-label="Next portrait"><span>→</span></button>
        <div className="gallery-caption" aria-live="polite"><strong>{portraits[activeIndex].title}</strong><span>{portraits[activeIndex].note}</span></div>
        {thumbnails()}
      </div>

      {isOpen && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Professional portrait viewer" onClick={() => setIsOpen(false)}>
          <button className="lightbox-close" type="button" onClick={() => setIsOpen(false)} aria-label="Close portrait viewer"><span /><span /></button>
          <div className="lightbox-image" onClick={(event) => event.stopPropagation()}>
            {portraits.map((portrait, index) => <Image className={index === activeIndex ? "active" : ""} key={portrait.src} src={portrait.src} alt={`${portrait.title} — professional portrait of Mirian Okoro`} fill sizes="100vw" priority={index === activeIndex} />)}
          </div>
          <button className="gallery-arrow lightbox-prev" type="button" onClick={(event) => { event.stopPropagation(); previous(); }} aria-label="Previous portrait"><span>←</span></button>
          <button className="gallery-arrow lightbox-next" type="button" onClick={(event) => { event.stopPropagation(); next(); }} aria-label="Next portrait"><span>→</span></button>
          {thumbnails("lightbox-thumbnails")}
        </div>
      )}
    </>
  );
}
