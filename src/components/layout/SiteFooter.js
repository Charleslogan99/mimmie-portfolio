"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Arrow } from "@/components/ui/Arrow";
import { profile } from "@/data/profile";

const reveal =
  "opacity-0 translate-y-8 transition-all duration-700 ease-out [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0";

export function SiteFooter() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  useEffect(() => {
    if (!isConsultationOpen) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setIsConsultationOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isConsultationOpen]);

  return (
    <footer id="contact" className="bg-[#0b090a] text-neutral-100">
      <div className="px-6 pb-16 pt-20 sm:px-10 sm:pb-20 sm:pt-28 lg:px-16 lg:pb-24 lg:pt-32 xl:px-24">
        <p
          data-reveal
          className={`mb-10 text-[10px] font-medium uppercase tracking-[0.3em] text-[#c9a45c] sm:mb-14 ${reveal}`}
        >
          08 / Contact
        </p>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20 xl:gap-28">
          <div data-reveal className={reveal}>
            <h2 className="font-serif text-4xl font-normal leading-[1.02] tracking-tight text-neutral-50 sm:text-5xl lg:text-6xl">
              Let&apos;s discuss your
              <br />
              <em className="not-italic font-normal text-[#d9bb77]">
                next transaction.
              </em>
            </h2>
            <p className="mt-7 max-w-md text-sm leading-relaxed text-neutral-400">
              Based in Nigeria, with strong professional roots in Enugu and
              experience across legal, commercial, property and agricultural
              interests.
            </p>
          </div>

          <div data-reveal className={reveal}>
            <p className="max-w-sm text-sm leading-relaxed text-neutral-400">
              For legal advisory, corporate matters, property transactions,
              business partnerships, agricultural projects or speaking
              engagements, get in touch.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                type="button"
                onClick={() => setIsConsultationOpen(true)}
                className="group inline-flex items-center gap-3 rounded-full border border-[#c9a45c] bg-[#c9a45c] px-7 py-3.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-neutral-950 shadow-[0_10px_30px_-12px_rgba(201,164,92,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e0c17a] hover:shadow-[0_16px_40px_-14px_rgba(201,164,92,0.65)] active:translate-y-0"
              >
                Book a consultation
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  <Arrow diagonal />
                </span>
              </button>
              <a
                href={`mailto:${profile.emails[0]}`}
                className="inline-flex items-center gap-3 rounded-full border border-white/15 px-7 py-3.5 text-[10px] uppercase tracking-[0.15em] text-neutral-200 transition-all duration-300 hover:border-[#c9a45c]/70 hover:bg-[#c9a45c]/10 hover:text-[#e0c17a]"
              >
                Send an enquiry
              </a>
              <a
                href={profile.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-white/15 px-7 py-3.5 text-[10px] uppercase tracking-[0.15em] text-neutral-200 transition-all duration-300 hover:border-[#c9a45c]/70 hover:bg-[#c9a45c]/10 hover:text-[#e0c17a]"
              >
                WhatsApp
              </a>
            </div>

            <a
              href={`mailto:${profile.emails[0]}`}
              className="mt-8 flex items-center justify-between gap-4 border-b border-[#c9a45c]/50 pb-3 font-serif text-lg text-neutral-50 transition-colors hover:text-[#e0c17a] sm:mt-9 sm:text-xl"
            >
              {profile.emails[0]} <Arrow diagonal />
            </a>

            <div className="mt-6 flex flex-wrap gap-6">
              <a
                href={`tel:${profile.phoneHref}`}
                className="text-[10px] tracking-[0.08em] text-neutral-400 transition-colors hover:text-[#e0c17a]"
              >
                {profile.phone}
              </a>
              <a
                href={`tel:${profile.secondaryPhoneHref}`}
                className="text-[10px] tracking-[0.08em] text-neutral-400 transition-colors hover:text-[#e0c17a]"
              >
                {profile.secondaryPhone}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 items-center gap-4 border-t border-white/10 px-6 py-8 sm:grid-cols-[auto_1fr_1fr_auto] sm:px-10 sm:py-0 sm:min-h-[88px] lg:px-16 xl:px-24">
        <a
          href="#top"
          aria-label="Back to top"
          className="relative block h-9 w-9 overflow-hidden rounded-full border border-white/20 transition-colors hover:border-[#c9a45c]"
        >
          <Image
            src="/Mirian1.jpeg"
            alt=""
            fill
            sizes="38px"
            className="object-cover"
          />
        </a>
        <span className="text-[8px] uppercase tracking-[0.12em] text-neutral-400">
          © {new Date().getFullYear()} Mirian Okoro
        </span>
        <span className="hidden text-[8px] uppercase tracking-[0.12em] text-neutral-400 sm:block">
          Nigeria · WAT
        </span>
        <a
          href="#top"
          className="col-span-2 text-right text-[8px] uppercase tracking-[0.12em] text-neutral-400 transition-colors hover:text-[#e0c17a] sm:col-span-1"
        >
          Back to top ↑
        </a>
      </div>

      {isConsultationOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="consultation-title"
          onClick={() => setIsConsultationOpen(false)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm sm:p-6"
        >
          <section
            onClick={(event) => event.stopPropagation()}
            className="relative w-full max-w-lg rounded-2xl border border-white/10 bg-[#12100f] p-7 shadow-2xl sm:p-10"
          >
            <button
              type="button"
              onClick={() => setIsConsultationOpen(false)}
              aria-label="Close consultation details"
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-[#c9a45c] hover:bg-[#c9a45c]/10"
            >
              <span className="absolute h-px w-4 rotate-45 bg-neutral-200" />
              <span className="absolute h-px w-4 -rotate-45 bg-neutral-200" />
            </button>

            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#c9a45c]">
              Start a conversation
            </p>
            <h2
              id="consultation-title"
              className="mt-6 font-serif text-3xl font-normal leading-[1.05] tracking-tight text-neutral-50 sm:text-4xl"
            >
              Book your
              <br />
              <em className="not-italic font-normal text-[#d9bb77]">
                consultation.
              </em>
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-neutral-400">
              Choose the contact method that works best for you. Mirian&apos;s
              office will respond to discuss the next steps.
            </p>

            <div className="mt-8 divide-y divide-white/10 border-t border-white/10">
              <a
                href={`mailto:${profile.emails[0]}`}
                className="group flex items-center justify-between gap-4 py-5 transition-colors hover:text-[#e0c17a]"
              >
                <div>
                  <span className="block text-[8px] uppercase tracking-[0.15em] text-neutral-500">
                    Email
                  </span>
                  <strong className="mt-1 block font-serif text-lg font-normal text-neutral-50 group-hover:text-[#e0c17a] sm:text-xl">
                    {profile.emails[0]}
                  </strong>
                </div>
                <span className="text-neutral-500 transition-colors group-hover:text-[#e0c17a]">
                  <Arrow diagonal />
                </span>
              </a>
              <a
                href={`tel:${profile.phoneHref}`}
                className="group flex items-center justify-between gap-4 py-5 transition-colors hover:text-[#e0c17a]"
              >
                <div>
                  <span className="block text-[8px] uppercase tracking-[0.15em] text-neutral-500">
                    Call
                  </span>
                  <strong className="mt-1 block font-serif text-lg font-normal text-neutral-50 group-hover:text-[#e0c17a] sm:text-xl">
                    {profile.phone}
                  </strong>
                </div>
                <span className="text-neutral-500 transition-colors group-hover:text-[#e0c17a]">
                  <Arrow diagonal />
                </span>
              </a>
              <a
                href={profile.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between gap-4 py-5 transition-colors hover:text-[#e0c17a]"
              >
                <div>
                  <span className="block text-[8px] uppercase tracking-[0.15em] text-neutral-500">
                    WhatsApp
                  </span>
                  <strong className="mt-1 block font-serif text-lg font-normal text-neutral-50 group-hover:text-[#e0c17a] sm:text-xl">
                    Start a WhatsApp conversation
                  </strong>
                </div>
                <span className="text-neutral-500 transition-colors group-hover:text-[#e0c17a]">
                  <Arrow diagonal />
                </span>
              </a>
            </div>
          </section>
        </div>
      )}
    </footer>
  );
}