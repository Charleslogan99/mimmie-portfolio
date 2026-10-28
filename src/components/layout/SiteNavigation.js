"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Arrow } from "@/components/ui/Arrow";
import { profile } from "@/data/profile";

const links = [
  ["01", "About", "about"],
  ["02", "Practice", "practice"],
  ["03", "Ventures", "ventures"],
  ["04", "Impact", "impact"],
  ["05", "Insights", "insights"],
  ["06", "Contact", "contact"],
];

export function SiteNavigation() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <nav className="fixed left-[2%] top-3.5 z-50 flex h-16 w-[96%] items-center justify-between rounded-full border border-white/15 bg-[#0b0b0a]/80 px-[6vw] backdrop-blur-lg lg:h-[72px] lg:px-[5vw]" aria-label="Main navigation">
      <a className="relative block h-12 w-12 shrink-0 overflow-hidden rounded-full border border-white/15" href="#top" aria-label="Mirian Okoro home">
        <Image
          src="/Mirian1.jpeg"
          alt="Mirian Okoro"
          fill
          sizes="48px"
          priority
        />
      </a>
      <div className={`fixed inset-0 -z-10 flex flex-col bg-[#0e0d0c] px-[8vw] pb-10 pt-[110px] transition-all duration-300 lg:static lg:z-auto lg:flex lg:flex-row lg:items-center lg:gap-7 lg:bg-transparent lg:p-0 lg:text-[9px] lg:uppercase lg:tracking-[0.14em] ${open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-4 opacity-0 pointer-events-none lg:visible lg:translate-y-0 lg:opacity-100 lg:pointer-events-auto"}`}>
        <p className="text-[9px] uppercase tracking-[0.2em] text-[#c9a45c] lg:hidden">Navigate</p>
        {links.map(([number, label, id]) => (
          <a className="border-b border-white/15 py-4 font-serif text-[clamp(32px,9vw,58px)] tracking-[-0.03em] transition-colors hover:text-[#d9bb77] lg:border-0 lg:p-0 lg:font-sans lg:text-[9px] lg:tracking-[0.14em] lg:text-neutral-100/65 lg:hover:text-[#d9bb77]" href={`#${id}`} onClick={() => setOpen(false)} key={id}>
            <span className="mr-2 inline-block w-[34px] font-sans text-[9px] tracking-[0.1em] text-[#c9a45c] lg:hidden">{number}</span>
            {label}
          </a>
        ))}
        <div className="mt-auto text-[10px] text-neutral-400 lg:hidden">
          <span>{profile.location}</span>
          <a className="mt-2 block text-[#d9bb77]" href={`mailto:${profile.emails[0]}`}>{profile.emails[0]}</a>
        </div>
      </div>
      <a className="hidden items-center gap-3 rounded-full border border-white/15 px-[18px] py-[13px] text-[9px] uppercase tracking-[0.13em] transition-colors hover:border-[#d9bb77] hover:bg-[#d9bb77]/10 lg:inline-flex" href="#contact">
        Start a conversation <Arrow diagonal />
      </a>
      <button
        className="relative flex h-[42px] w-[42px] items-center justify-center rounded-full border border-white/15 lg:hidden"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-label="Toggle menu"
      >
        <span className={`absolute h-px w-4 bg-[#d9bb77] transition-transform ${open ? "rotate-45" : "-translate-y-1"}`} />
        <span className={`absolute h-px w-4 bg-[#d9bb77] transition-transform ${open ? "-rotate-45" : "translate-y-1"}`} />
      </button>
    </nav>
  );
}
