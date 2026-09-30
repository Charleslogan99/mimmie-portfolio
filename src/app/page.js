import Image from "next/image";
import { SiteNavigation } from "@/components/layout/SiteNavigation";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Arrow } from "@/components/ui/Arrow";
import { Gallery } from "@/components/ui/Gallery";
import { RevealObserver } from "@/components/ui/RevealObserver";
import {
  credentials,
  disciplines,
  galleryPortraits,
  insights,
  matters,
  practiceAreas,
  ventures,
} from "@/data/profile";

const reveal =
  "opacity-0 translate-y-8 transition-all duration-700 ease-out [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0";

export default function Home() {
  return (
    <main className="bg-neutral-950 font-sans text-neutral-100">
      <RevealObserver />
      <SiteNavigation />

      <section id="top" className="relative overflow-hidden bg-neutral-950">
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.95' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(circle at 22% 30%, rgba(201,164,92,0.14), transparent 45%)",
          }}
        />
        <div className="relative z-10 grid min-h-[100svh] grid-cols-1 lg:grid-cols-[56%_44%]">
          <div className="relative z-10 flex flex-col justify-center px-6 pb-16 pt-28 sm:px-10 sm:pt-32 lg:px-16 lg:py-0 xl:px-24">
            <p
              data-reveal
              className={`flex items-center gap-3 text-[9px] uppercase tracking-[0.3em] text-[#c9a45c] ${reveal}`}
            >
              <span className="h-px w-6 bg-[#c9a45c]" /> Mirian Okoro, Esq.
            </p>
            <h1
              data-reveal
              className={`mt-7 font-serif text-[13vw] font-normal leading-[0.88] tracking-tight text-neutral-50 delay-150 xs:text-6xl sm:text-7xl lg:text-6xl xl:text-8xl ${reveal}`}
            >
              Law. Business.
              <br />
              <span className="italic text-[#d9bb77]">
                Property. Agriculture.
              </span>
            </h1>
            <p
              data-reveal
              className={`mt-7 max-w-md text-sm leading-relaxed text-neutral-100/90 delay-300 sm:text-base ${reveal}`}
            >
              Legal Practitioner, Corporate &amp; Commercial Adviser, Real
              Estate Professional &amp; Agribusiness Entrepreneur.
            </p>
            <p
              data-reveal
              className={`mt-4 max-w-sm font-serif text-lg leading-snug text-neutral-400 delay-300 sm:text-xl ${reveal}`}
            >
              Building, protecting and advising businesses, investments and
              property interests across Nigeria.
            </p>
            <div
              data-reveal
              className={`mt-9 flex flex-wrap items-center gap-4 delay-500 ${reveal}`}
            >
              <a
                href="#practice"
                className="group inline-flex items-center gap-3 rounded-full border border-[#c9a45c] bg-[#c9a45c] px-7 py-3.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-neutral-950 shadow-[0_10px_30px_-12px_rgba(201,164,92,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e0c17a] hover:shadow-[0_16px_40px_-14px_rgba(201,164,92,0.65)] active:translate-y-0"
              >
                Explore my practice
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  <Arrow />
                </span>
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 rounded-full border border-white/15 px-7 py-3.5 text-[10px] uppercase tracking-[0.15em] text-neutral-200 transition-all duration-300 hover:border-[#c9a45c]/70 hover:bg-[#c9a45c]/10 hover:text-[#e0c17a]"
              >
                Start a conversation
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  <Arrow />
                </span>
              </a>
            </div>
          </div>

          <div
            data-reveal
            className="relative h-[340px] opacity-0 translate-x-8 transition-all duration-1000 ease-out [&.is-visible]:opacity-100 [&.is-visible]:translate-x-0 sm:h-[440px] lg:h-auto"
          >
            <div className="absolute inset-0">
              <Image
                src="/Mirian2.jpeg"
                alt="Mirian Okoro"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 44vw"
                className="object-cover object-[center_18%] saturate-[0.78] contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/10 to-transparent lg:from-neutral-950" />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />
            </div>
            <div className="absolute left-6 bottom-8 flex h-24 w-24 flex-col items-center justify-center rounded-full border border-[#c9a45c]/50 bg-neutral-950/70 text-center shadow-xl backdrop-blur-md sm:left-8 sm:bottom-12 sm:h-28 sm:w-28 lg:-left-12 lg:h-32 lg:w-32">
              <span className="absolute top-4 text-[6px] tracking-[0.15em] text-neutral-200 sm:top-5 sm:text-[7px]">
                LAW · BUSINESS
              </span>
              <strong className="font-serif text-3xl font-normal leading-none text-neutral-50 sm:text-4xl">
                10
                <span className="relative -top-2.5 text-sm font-sans sm:-top-3 sm:text-base">
                  +
                </span>
              </strong>
              <span className="text-[6px] tracking-[0.15em] text-neutral-200 sm:text-[7px]">
                YEARS EXPERIENCE
              </span>
            </div>
          </div>
        </div>

        <div className="relative z-10 flex flex-wrap items-center gap-4 px-6 pb-8 text-[8px] uppercase tracking-[0.2em] text-neutral-400 sm:px-10 lg:px-16 lg:pb-10 xl:px-24">
          <span>Nigeria · Enugu roots</span>
          <span className="h-px w-10 bg-white/15" />
          <span>Legal · Commercial · Advisory</span>
        </div>
      </section>

      <section
        id="about"
        className="bg-neutral-950 px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-32 xl:px-24"
      >
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-20 xl:gap-28">
          <div data-reveal className={reveal}>
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#c9a45c]">
              01 / About
            </p>
            <h2 className="mt-7 font-serif text-4xl font-normal leading-[1.02] tracking-tight text-neutral-50 sm:text-5xl lg:text-6xl">
              A multidisciplinary
              <br />
              <em className="not-italic font-normal text-[#d9bb77]">
                perspective.
              </em>
            </h2>
          </div>
          <div
            data-reveal
            className={`max-w-xl space-y-5 sm:space-y-6 ${reveal}`}
          >
            <p className="font-serif text-xl leading-relaxed text-neutral-100 sm:text-2xl">
              Mirian Okoro is a Nigerian Legal Practitioner, Corporate &amp;
              Commercial Adviser and Real Estate Professional with over a decade
              of experience spanning law, property, business development and
              agriculture.
            </p>
            <p className="text-sm leading-relaxed text-neutral-400">
              Her professional practice focuses primarily on Corporate &amp;
              Commercial Law and Property &amp; Real Estate Law, with experience
              advising businesses, property owners, developers, investors and
              organisations on transactions, documentation, contracts, corporate
              matters and strategic legal issues.
            </p>
            <p className="text-sm leading-relaxed text-neutral-400">
              Beyond legal practice, Mirian is actively involved in real estate
              development and agribusiness and serves as a director in companies
              operating across real estate, agriculture, technology, media and
              related sectors.
            </p>
            <p className="text-sm leading-relaxed text-neutral-400">
              Her multidisciplinary experience gives her a practical
              understanding of the legal and commercial realities behind the
              transactions and businesses she advises. She is also involved in
              social-impact initiatives focused on youth development, advocacy,
              women and children.
            </p>
          </div>
        </div>

        <div
          data-reveal
          className={`mt-14 grid grid-cols-2 divide-x divide-y divide-white/10 border-y border-white/10 sm:mt-16 sm:grid-cols-4 ${reveal}`}
        >
          {credentials.map((item) => (
            <div
              key={item.value}
              className="flex min-h-[110px] items-center gap-3 p-4 transition-colors duration-300 hover:bg-white/[0.02] sm:min-h-[120px] sm:gap-4 sm:p-5"
            >
              <strong className="font-serif text-3xl font-normal text-neutral-50 sm:text-4xl">
                {item.value}
              </strong>
              <span className="max-w-[100px] text-[7px] uppercase leading-relaxed tracking-[0.1em] text-neutral-400 sm:text-[8px]">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section
        id="practice"
        className="bg-neutral-950 px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-32 xl:px-24"
      >
        <div
          data-reveal
          className={`mb-14 grid grid-cols-1 items-end gap-6 sm:mb-16 lg:grid-cols-[1fr_330px] lg:gap-24 ${reveal}`}
        >
          <div>
            <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.3em] text-[#c9a45c] sm:mb-8">
              02 / Practice
            </p>
            <h2 className="font-serif text-4xl font-normal leading-[1.02] tracking-tight text-neutral-50 sm:text-5xl lg:text-6xl">
              Advice built for
              <br />
              <em className="not-italic font-normal text-[#d9bb77]">
                real decisions.
              </em>
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-neutral-400">
            Legal clarity, commercial judgment and a practical view of the
            people and projects behind every transaction.
          </p>
        </div>

        <div className="grid grid-cols-1 divide-y divide-white/10 border border-white/10 sm:grid-cols-2 sm:divide-x">
          {practiceAreas.map((area) => (
            <article
              data-reveal
              key={area.number}
              className={`min-h-[280px] p-7 transition-colors duration-300 hover:bg-white/[0.02] sm:min-h-[320px] sm:p-10 ${reveal}`}
            >
              <span className="font-serif text-sm text-[#c9a45c]">
                {area.number}
              </span>
              <h3 className="mt-8 max-w-sm font-serif text-2xl font-normal leading-tight text-neutral-50 sm:mt-10 sm:text-3xl">
                {area.title}
              </h3>
              <p className="mt-4 max-w-md text-xs leading-relaxed text-neutral-400">
                {area.summary}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2 sm:mt-7">
                {area.services.map((service) => (
                  <li
                    key={service}
                    className="rounded-full border border-white/10 px-3 py-1.5 text-[8px] tracking-wide text-neutral-400 transition-colors duration-300 hover:border-[#c9a45c]/50 hover:text-[#d9bb77]"
                  >
                    {service}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <aside
          data-reveal
          className={`mt-14 grid grid-cols-1 gap-8 rounded-2xl border border-white/10 bg-white/[0.02] p-7 sm:mt-16 sm:p-10 lg:grid-cols-[0.7fr_1.2fr_1fr] lg:gap-14 ${reveal}`}
        >
          <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#c9a45c]">
            Selected corporate advisory engagements
          </p>
          <div>
            <h3 className="font-serif text-xl font-normal text-neutral-50 sm:text-2xl">
              Corporate &amp; Legal Secretarial Advisory
            </h3>
            <p className="mt-4 text-xs leading-relaxed text-neutral-400">
              Providing ongoing legal, corporate governance, documentation and
              advisory support to businesses and organisations across diverse
              sectors.
            </p>
          </div>
          <ul className="divide-y divide-white/10">
            <li className="py-3 font-serif text-base text-neutral-200">
              Basani Digital Innovations Limited
            </li>
            <li className="py-3 font-serif text-base text-neutral-200">
              Peter Love Concept
            </li>
            <li className="py-3 font-serif text-base text-neutral-200">
              Other privately held companies &amp; organisations
            </li>
          </ul>
        </aside>
      </section>

      <section
        id="ventures"
        className="bg-[#efe7d8] px-6 py-20 text-neutral-900 sm:px-10 sm:py-28 lg:px-16 lg:py-32 xl:px-24"
      >
        <div
          data-reveal
          className={`mb-14 grid grid-cols-1 items-end gap-6 sm:mb-16 lg:grid-cols-[1fr_330px] lg:gap-24 ${reveal}`}
        >
          <div>
            <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.3em] text-[#8f6b2c] sm:mb-8">
              03 / Ventures &amp; leadership
            </p>
            <h2 className="font-serif text-4xl font-normal leading-[1.02] tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
              Built from the
              <br />
              <em className="not-italic font-normal text-[#8f6b2c]">
                inside out.
              </em>
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-neutral-900/60">
            Direct involvement in ventures gives Mirian an informed perspective
            on how businesses are built, operated and advised.
          </p>
        </div>

        <div className="border-t border-neutral-900/15">
          {ventures.map((group) => (
            <div
              data-reveal
              key={group.category}
              className={`grid grid-cols-1 gap-5 border-b border-neutral-900/15 py-7 sm:gap-6 sm:py-8 lg:grid-cols-[0.55fr_1.45fr] lg:gap-12 ${reveal}`}
            >
              <p className="text-[8px] uppercase tracking-[0.2em] text-[#8f6b2c]">
                {group.category}
              </p>
              <div className="divide-y divide-neutral-900/10">
                {group.items.map((item) => (
                  <article
                    key={item.company}
                    className="grid grid-cols-1 gap-2 py-5 sm:grid-cols-[1fr_0.7fr] sm:gap-8"
                  >
                    <div>
                      <h3 className="font-serif text-xl font-normal leading-tight text-neutral-900 sm:text-2xl">
                        {item.company}
                      </h3>
                      <span className="text-[8px] uppercase tracking-[0.15em] text-neutral-900/50">
                        {item.role}
                      </span>
                    </div>
                    <p className="text-xs leading-relaxed text-neutral-900/60">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="work"
        className="bg-neutral-950 px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-32 xl:px-24"
      >
        <div
          data-reveal
          className={`mb-14 grid grid-cols-1 items-end gap-6 sm:mb-16 lg:grid-cols-[1fr_330px] lg:gap-24 ${reveal}`}
        >
          <div>
            <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.3em] text-[#c9a45c] sm:mb-8">
              04 / Representative work
            </p>
            <h2 className="font-serif text-4xl font-normal leading-[1.02] tracking-tight text-neutral-50 sm:text-5xl lg:text-6xl">
              Experience with
              <br />
              <em className="not-italic font-normal text-[#d9bb77]">
                real consequence.
              </em>
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-neutral-400">
            A representative selection of legal and business matters, described
            with appropriate discretion.
          </p>
        </div>

        <div className="divide-y divide-white/10 border-y border-white/10">
          {matters.map((matter, index) => (
            <article
              data-reveal
              key={matter.title}
              className={`group py-7 transition-colors duration-300 hover:bg-white/[0.02] sm:py-8 sm:grid sm:grid-cols-[55px_1fr_1fr_28px] sm:items-center sm:gap-8 ${reveal}`}
            >
              <div className="flex items-baseline gap-4 sm:contents">
                <span className="text-[10px] text-[#c9a45c]">0{index + 1}</span>
                <h3 className="font-serif text-xl font-normal leading-tight text-neutral-50 sm:text-3xl">
                  {matter.title}
                </h3>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-neutral-400 sm:mt-0">
                {matter.text}
              </p>
              <span className="mt-4 hidden text-neutral-500 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#d9bb77] sm:mt-0 sm:flex">
                <Arrow diagonal />
              </span>
            </article>
          ))}
        </div>
      </section>

      <section
        id="impact"
        className="bg-neutral-950 px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-32 xl:px-24"
      >
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-20 xl:gap-28">
          <div data-reveal className={reveal}>
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#c9a45c]">
              05 / Social impact
            </p>
            <h2 className="mt-7 font-serif text-4xl font-normal leading-[1.02] tracking-tight text-neutral-50 sm:text-5xl lg:text-6xl">
              Work that extends
              <br />
              <em className="not-italic font-normal text-[#d9bb77]">
                beyond business.
              </em>
            </h2>
            <p className="mt-7 max-w-md text-sm leading-relaxed text-neutral-400">
              Beyond professional practice, Mirian is involved in initiatives
              focused on youth development, advocacy, women, children and
              community empowerment.
            </p>
          </div>
          <div
            data-reveal
            className={`divide-y divide-white/10 border-y border-white/10 ${reveal}`}
          >
            <article className="py-7 sm:py-8 sm:grid sm:grid-cols-[42px_1fr_auto] sm:items-start sm:gap-6">
              <span className="text-[9px] text-[#c9a45c] sm:pt-1">01</span>
              <h3 className="mt-2 font-serif text-xl font-normal leading-tight text-neutral-50 sm:mt-0 sm:text-3xl">
                African Youth Rehabilitation Initiative
              </h3>
              <strong className="mt-3 block text-[8px] uppercase tracking-[0.15em] text-neutral-400 sm:mt-0 sm:pt-1">
                Director
              </strong>
            </article>
            <article className="py-7 sm:py-8 sm:grid sm:grid-cols-[42px_1fr_auto] sm:items-start sm:gap-6">
              <span className="text-[9px] text-[#c9a45c] sm:pt-1">02</span>
              <h3 className="mt-2 font-serif text-xl font-normal leading-tight text-neutral-50 sm:mt-0 sm:text-3xl">
                Star Advocacy for African Women &amp; Children
              </h3>
              <strong className="mt-3 block text-[8px] uppercase tracking-[0.15em] text-neutral-400 sm:mt-0 sm:pt-1">
                Founder &amp; Trustee
              </strong>
            </article>
          </div>
        </div>
      </section>

      <section
        id="engagement"
        className="bg-[#100f0d] px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-32 xl:px-24"
      >
        <div data-reveal className={`max-w-2xl ${reveal}`}>
          <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#c9a45c]">
            06 / Public engagement
          </p>
          <span className="mt-6 block text-[9px] uppercase tracking-[0.2em] text-neutral-400">
            Radio &amp; advocacy
          </span>
          <h2 className="mt-6 font-serif text-4xl font-normal leading-[1.02] tracking-tight text-neutral-50 sm:text-5xl lg:text-6xl">
            Knowledge shared is
            <br />
            <em className="not-italic font-normal text-[#d9bb77]">
              confidence built.
            </em>
          </h2>
          <p className="mt-7 max-w-lg text-sm leading-relaxed text-neutral-400">
            Engaging the public on real estate, property ownership,
            documentation, investment and fraud prevention, as well as
            good-governance advocacy, through radio and other public platforms.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 divide-y divide-white/10 border border-white/10 sm:mt-20 sm:grid-cols-2 sm:divide-x lg:grid-cols-4">
          {disciplines.map(([title, text], index) => (
            <article
              data-reveal
              key={title}
              className={`min-h-[170px] p-6 transition-colors duration-300 hover:bg-white/[0.02] sm:min-h-[190px] ${reveal}`}
            >
              <span className="text-[9px] text-[#c9a45c]">0{index + 1}</span>
              <h3 className="mt-10 font-serif text-xl font-normal text-neutral-50 sm:mt-12 sm:text-2xl">
                {title}
              </h3>
              <p className="mt-3 text-[11px] leading-relaxed text-neutral-400">
                {text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-neutral-950 px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-32 xl:px-24">
        <div
          data-reveal
          className={`mb-14 grid grid-cols-1 items-end gap-6 sm:mb-16 lg:grid-cols-[1fr_330px] lg:gap-24 ${reveal}`}
        >
          <div>
            <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.3em] text-[#c9a45c] sm:mb-8">
              Media, speaking &amp; publications
            </p>
            <h2 className="font-serif text-4xl font-normal leading-[1.02] tracking-tight text-neutral-50 sm:text-5xl lg:text-6xl">
              A voice beyond
              <br />
              <em className="not-italic font-normal text-[#d9bb77]">
                the boardroom.
              </em>
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-neutral-400">
            Public-facing legal and property education complements Mirian&apos;s
            professional practice and commitment to clearer decision-making.
          </p>
        </div>

        <div
          data-reveal
          className={`grid grid-cols-1 divide-y divide-white/10 border border-white/10 sm:grid-cols-2 sm:divide-x ${reveal}`}
        >
          <article className="p-7 transition-colors duration-300 hover:bg-white/[0.02] sm:p-8">
            <span className="text-[9px] uppercase tracking-[0.15em] text-[#c9a45c]">
              01 / Radio
            </span>
            <h3 className="mt-5 font-serif text-xl font-normal text-neutral-50 sm:text-2xl">
              Dream FM, Enugu
            </h3>
            <p className="mt-3 text-xs leading-relaxed text-neutral-400">
              Real estate education and public awareness on ownership,
              documentation, investment and fraud prevention.
            </p>
          </article>
          <article className="p-7 transition-colors duration-300 hover:bg-white/[0.02] sm:p-8">
            <span className="text-[9px] uppercase tracking-[0.15em] text-[#c9a45c]">
              02 / Advocacy
            </span>
            <h3 className="mt-5 font-serif text-xl font-normal text-neutral-50 sm:text-2xl">
              Urban Radio 94.5 FM &amp; Solid 100.9 FM
            </h3>
            <p className="mt-3 text-xs leading-relaxed text-neutral-400">
              Guest speaker representing the Youth Alliance for Good Governance
              in its Good Governance Advocacy Project.
            </p>
          </article>
          <article className="p-7 transition-colors duration-300 hover:bg-white/[0.02] sm:p-8">
            <span className="text-[9px] uppercase tracking-[0.15em] text-[#c9a45c]">
              03 / Speaking
            </span>
            <h3 className="mt-5 font-serif text-xl font-normal text-neutral-50 sm:text-2xl">
              Public engagement
            </h3>
            <p className="mt-3 text-xs leading-relaxed text-neutral-400">
              Available for conversations on legal, commercial, property,
              agricultural and good-governance topics with practical relevance
              to businesses and communities.
            </p>
          </article>
          <article className="p-7 transition-colors duration-300 hover:bg-white/[0.02] sm:p-8">
            <span className="text-[9px] uppercase tracking-[0.15em] text-[#c9a45c]">
              04 / Publications
            </span>
            <h3 className="mt-5 font-serif text-xl font-normal text-neutral-50 sm:text-2xl">
              Practical insights
            </h3>
            <p className="mt-3 text-xs leading-relaxed text-neutral-400">
              Short, authoritative perspectives on property, business, corporate
              law and agriculture are developed for this platform.
            </p>
          </article>
        </div>
      </section>

      <section
        id="gallery"
        className="bg-[#0e0d0c] px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-32 xl:px-24"
      >
        <div
          data-reveal
          className={`mb-14 grid grid-cols-1 items-end gap-6 sm:mb-16 lg:grid-cols-[1fr_310px] lg:gap-24 ${reveal}`}
        >
          <div>
            <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.3em] text-[#c9a45c] sm:mb-8">
              Beyond the desk
            </p>
            <h2 className="font-serif text-4xl font-normal leading-[1.02] tracking-tight text-neutral-50 sm:text-5xl lg:text-6xl">
              Presence with
              <br />
              <em className="not-italic font-normal text-[#d9bb77]">
                purpose.
              </em>
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-neutral-400">
            A considered view of the professional environments and perspectives
            behind the work.
          </p>
        </div>
        <Gallery portraits={galleryPortraits} />
      </section>

      <section
        id="insights"
        className="bg-[#efe7d8] px-6 py-20 text-neutral-900 sm:px-10 sm:py-28 lg:px-16 lg:py-32 xl:px-24"
      >
        <div
          data-reveal
          className={`mb-14 grid grid-cols-1 items-end gap-6 sm:mb-16 lg:grid-cols-[1fr_330px] lg:gap-24 ${reveal}`}
        >
          <div>
            <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.3em] text-[#8f6b2c] sm:mb-8">
              07 / Insights
            </p>
            <h2 className="font-serif text-4xl font-normal leading-[1.02] tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
              Clear thinking,
              <br />
              <em className="not-italic font-normal text-[#8f6b2c]">
                shared generously.
              </em>
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-neutral-900/60">
            Practical perspectives on law, property, business and agriculture.
            New articles will be published here.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7">
          {insights.map((insight, index) => (
            <article
              data-reveal
              key={insight.title}
              className={`group relative flex min-h-[200px] flex-col justify-between overflow-hidden rounded-2xl border border-neutral-900/10 bg-white/40 p-6 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-[#8f6b2c]/30 hover:bg-white/70 hover:shadow-xl sm:min-h-[220px] sm:p-7 ${reveal}`}
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs tracking-[0.12em] text-neutral-900/35">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="whitespace-nowrap rounded-full border border-neutral-900/10 px-3 py-1 text-[0.65rem] uppercase tracking-[0.14em] text-neutral-900/55 sm:text-[0.7rem]">
                  {insight.category}
                </span>
              </div>
              <h3 className="mt-6 font-serif text-lg font-normal leading-snug tracking-tight text-neutral-900 sm:text-xl">
                {insight.title}
              </h3>
              <div className="mt-6 flex items-center border-t border-neutral-900/10 pt-4 sm:mt-7 sm:pt-5">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm text-neutral-900/50 transition-all duration-300 group-hover:gap-3 group-hover:text-[#8f6b2c]"
                >
                  Coming soon <Arrow diagonal />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}