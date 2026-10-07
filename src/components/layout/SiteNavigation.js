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
    <nav className="nav-wrap" aria-label="Main navigation">
      <a className="monogram" href="#top" aria-label="Mirian Okoro home">
        <Image
          src="/Mirian1.jpeg"
          alt="Mirian Okoro"
          fill
          sizes="48px"
          priority
        />
      </a>
      <div className={`nav-links ${open ? "open" : ""}`}>
        <p className="mobile-menu-label">Navigate</p>
        {links.map(([number, label, id]) => (
          <a href={`#${id}`} onClick={() => setOpen(false)} key={id}>
            <span>{number}</span>
            {label}
          </a>
        ))}
        <div className="mobile-menu-foot">
          <span>{profile.location}</span>
          <a href={`mailto:${profile.emails[0]}`}>{profile.emails[0]}</a>
        </div>
      </div>
      <a className="nav-cta" href="#contact">
        Start a conversation <Arrow diagonal />
      </a>
      <button
        className={`menu-button ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-label="Toggle menu"
      >
        <span />
        <span />
      </button>
    </nav>
  );
}
