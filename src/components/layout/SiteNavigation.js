import Image from "next/image";
import { Arrow } from "@/components/ui/Arrow";

const links = [
  ["01", "About", "about"],
  ["02", "Practice", "practice"],
  ["03", "Ventures", "ventures"],
  ["04", "Impact", "impact"],
  ["05", "Insights", "insights"],
  ["06", "Contact", "contact"],
];

export function SiteNavigation() {
  return (
    <nav className="fixed left-[2%] top-3.5 z-50 flex h-16 w-[96%] items-center justify-between rounded-full border border-white/15 bg-[#0b0b0a]/80 px-[6vw] backdrop-blur-lg lg:h-[72px] lg:px-[5vw]" aria-label="Main navigation">
      <a className="relative z-50 block h-14 w-14 shrink-0 overflow-hidden rounded-full border border-white/15 lg:h-12 lg:w-12" href="#top" aria-label="Mirian Okoro home">
        <Image
          className="object-cover object-[center_20%]"
          src="/Mirian1.jpeg"
          alt="Mirian Okoro"
          fill
          sizes="(max-width: 1023px) 56px, 48px"
          priority
        />
      </a>
      <div className="hidden items-center gap-7 text-[9px] uppercase tracking-[0.14em] lg:flex">
        {links.map(([, label, id]) => (
          <a className="text-neutral-100/65 transition-colors hover:text-[#d9bb77]" href={`#${id}`} key={id}>
            {label}
          </a>
        ))}
      </div>
      <a className="hidden items-center gap-3 rounded-full border border-white/15 px-[18px] py-[13px] text-[9px] uppercase tracking-[0.13em] transition-colors hover:border-[#d9bb77] hover:bg-[#d9bb77]/10 lg:inline-flex" href="#contact">
        Start a conversation <Arrow diagonal />
      </a>
    </nav>
  );
}
