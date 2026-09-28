"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Arrow } from "@/components/ui/Arrow";
import { profile } from "@/data/profile";

export function SiteFooter() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  useEffect(() => {
    if (!isConsultationOpen) return undefined;
    const onKeyDown = (event) => { if (event.key === "Escape") setIsConsultationOpen(false); };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKeyDown); };
  }, [isConsultationOpen]);

  return <footer id="contact"><div className="footer-main section-pad"><p className="section-kicker" data-reveal>08 / Contact</p><div className="footer-grid"><div data-reveal><h2>Let&apos;s discuss your<br /><em>next transaction.</em></h2><p className="footer-address">Based in Nigeria, with strong professional roots in Enugu and experience across legal, commercial, property and agricultural interests.</p></div><div className="contact-side" data-reveal><p>For legal advisory, corporate matters, property transactions, business partnerships, agricultural projects or speaking engagements, get in touch.</p><div className="contact-actions"><button className="button-solid" type="button" onClick={() => setIsConsultationOpen(true)}>Book a consultation <Arrow diagonal /></button><a className="button-outline" href={`mailto:${profile.emails[0]}`}>Send an enquiry</a><a className="button-outline" href={profile.whatsappHref} target="_blank" rel="noreferrer">WhatsApp</a></div><a className="contact-email" href={`mailto:${profile.emails[0]}`}>{profile.emails[0]} <Arrow diagonal /></a><div className="contact-details"><a href={`tel:${profile.phoneHref}`}>{profile.phone}</a><a href={`tel:${profile.secondaryPhoneHref}`}>{profile.secondaryPhone}</a></div></div></div></div><div className="footer-bottom"><a className="footer-logo" href="#top" aria-label="Back to top"><Image src="/Mirian1.jpeg" alt="" fill sizes="38px" /></a><span>© {new Date().getFullYear()} Mirian Okoro</span><span>Nigeria · WAT</span><a href="#top">Back to top ↑</a></div>{isConsultationOpen && <div className="consultation-modal" role="dialog" aria-modal="true" aria-labelledby="consultation-title" onClick={() => setIsConsultationOpen(false)}><section className="consultation-card" onClick={(event) => event.stopPropagation()}><button className="consultation-close" type="button" onClick={() => setIsConsultationOpen(false)} aria-label="Close consultation details"><span /><span /></button><p className="section-kicker">Start a conversation</p><h2 id="consultation-title">Book your<br /><em>consultation.</em></h2><p>Choose the contact method that works best for you. Mirian&apos;s office will respond to discuss the next steps.</p><div className="consultation-options"><a href={`mailto:${profile.emails[0]}`}><span>Email</span><strong>{profile.emails[0]}</strong><Arrow diagonal /></a><a href={`tel:${profile.phoneHref}`}><span>Call</span><strong>{profile.phone}</strong><Arrow diagonal /></a><a href={profile.whatsappHref} target="_blank" rel="noreferrer"><span>WhatsApp</span><strong>Start a WhatsApp conversation</strong><Arrow diagonal /></a></div></section></div>}</footer>;
}
