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

  const arrows = "absolute z-10 grid h-11 w-11 place-items-center rounded-full border border-white/30 bg-[#0b0b0a]/65 text-lg text-[#d9bb77] backdrop-blur-sm transition-colors hover:border-[#d9bb77] hover:bg-[#0b0b0a]";
  const thumbnails = (lightbox = false) => (
    <div className={"flex gap-2 " + (lightbox ? "absolute bottom-3 left-3 right-3 z-10 w-auto md:bottom-6 md:left-1/2 md:right-auto md:w-max md:-translate-x-1/2" : "absolute bottom-0 left-0 right-0")} aria-label="Choose a portrait">
      {portraits.map((portrait, index) => (
        <button className={"relative h-[52px] w-[52px] overflow-hidden border transition-colors " + (index === activeIndex ? "border-[#d9bb77]" : "border-white/20 hover:border-[#d9bb77]/70")} type="button" key={portrait.src} onClick={(event) => { event.stopPropagation(); setActiveIndex(index); }} aria-label={"Show " + portrait.title} aria-current={index === activeIndex ? "true" : undefined}>
          <Image className="object-cover" src={portrait.src} alt="" fill sizes="52px" />
        </button>
      ))}
    </div>
  );
  const images = (sizes) => portraits.map((portrait, index) => <Image className={"object-cover transition-opacity duration-500 " + (index === activeIndex ? "opacity-100" : "pointer-events-none opacity-0")} key={portrait.src} src={portrait.src} alt={portrait.title + " — professional portrait of Mirian Okoro"} fill sizes={sizes} priority={index === activeIndex} />);

  return (
    <>
      <div className="relative w-full pb-[82px] lg:w-[62%]" data-reveal>
        <button className="relative block h-[min(68vw,640px)] min-h-[420px] w-full overflow-hidden bg-[#161411] text-left max-sm:h-[80vw] max-sm:min-h-[320px]" type="button" onClick={() => setIsOpen(true)} aria-label={"View " + portraits[activeIndex].title + " full screen"}>
          {images("(max-width: 900px) 100vw, 62vw")}
          <span className="absolute bottom-5 left-5 z-10 text-[8px] uppercase tracking-[0.16em] text-[#d9bb77]">View full portrait ↗</span>
        </button>
        <button className={arrows + " left-2 top-1/2 -translate-y-1/2 md:left-5"} type="button" onClick={previous} aria-label="Previous portrait">←</button>
        <button className={arrows + " right-2 top-1/2 -translate-y-1/2 md:right-5"} type="button" onClick={next} aria-label="Next portrait">→</button>
        <div className="mt-4 flex items-end justify-between gap-5" aria-live="polite"><div><strong className="block font-serif text-2xl font-normal text-neutral-50">{portraits[activeIndex].title}</strong><span className="mt-1 block text-xs text-neutral-400">{portraits[activeIndex].note}</span></div></div>
        {thumbnails()}
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-[100] grid place-items-center bg-black/85 p-3 backdrop-blur-sm md:p-6" role="dialog" aria-modal="true" aria-label="Professional portrait viewer" onClick={() => setIsOpen(false)}>
          <button className="absolute right-5 top-5 z-20 grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-[#0b0b0a]/80 text-[#d9bb77] transition-colors hover:border-[#d9bb77]" type="button" onClick={() => setIsOpen(false)} aria-label="Close portrait viewer">×</button>
          <div className="relative h-[calc(100dvh-135px)] w-full max-w-6xl overflow-hidden bg-[#161411] md:h-[calc(100dvh-96px)]" onClick={(event) => event.stopPropagation()}>{images("100vw")}</div>
          <button className={arrows + " left-3 top-1/2 -translate-y-1/2 md:left-8"} type="button" onClick={(event) => { event.stopPropagation(); previous(); }} aria-label="Previous portrait">←</button>
          <button className={arrows + " right-3 top-1/2 -translate-y-1/2 md:right-8"} type="button" onClick={(event) => { event.stopPropagation(); next(); }} aria-label="Next portrait">→</button>
          {thumbnails(true)}
        </div>
      )}
    </>
  );
}
