// import Image from "next/image";
// import { SiteNavigation } from "@/components/layout/SiteNavigation";
// import { SiteFooter } from "@/components/layout/SiteFooter";
// import { Arrow } from "@/components/ui/Arrow";
// import { Gallery } from "@/components/ui/Gallery";
// import { RevealObserver } from "@/components/ui/RevealObserver";
// import { credentials, disciplines, galleryPortraits, insights, matters, practiceAreas, ventures } from "@/data/profile";

// export default function Home() {
//   return <main>
//     <RevealObserver />
//     <SiteNavigation />

//     <section className="hero" id="top">
//       <div className="hero-grain" />
//       <div className="hero-copy">
//         <p className="eyebrow hero-in one"><span /> Mirian Okoro, Esq.</p>
//         <h1 className="hero-in two">Law. Business.<br /><span>Property. Agriculture.</span></h1>
//         <p className="hero-intro hero-in three">Legal Practitioner, Corporate &amp; Commercial Adviser, Real Estate Professional &amp; Agribusiness Entrepreneur.</p>
//         <p className="hero-support hero-in three">Building, protecting and advising businesses, investments and property interests across Nigeria.</p>
//         <div className="hero-actions hero-in four"><a href="#practice" className="button-solid">Explore my practice <Arrow /></a><a href="#contact" className="text-link">Start a conversation <Arrow /></a></div>
//       </div>
//       <div className="portrait-wrap hero-in image-in"><div className="portrait-frame"><Image src="/Mirian2.jpeg" alt="Mirian Okoro" fill priority sizes="(max-width: 900px) 100vw, 47vw" /><div className="portrait-shade" /></div><div className="experience-seal"><span className="seal-top">LAW · BUSINESS</span><strong>10<span className="plus">+</span></strong><span>YEARS EXPERIENCE</span></div></div>
//       <div className="hero-meta hero-in four"><span>Nigeria · Enugu roots</span><span className="meta-line" /><span>Legal · Commercial · Advisory</span></div>
//     </section>

//     <section className="about section-pad" id="about">
//       <div className="about-intro" data-reveal><p className="section-kicker">01 / About</p><h2>A multidisciplinary<br /><em>perspective.</em></h2></div>
//       <div className="about-copy" data-reveal><p className="lead">Mirian Okoro is a Nigerian Legal Practitioner, Corporate &amp; Commercial Adviser and Real Estate Professional with over a decade of experience spanning law, property, business development and agriculture.</p><p>Her professional practice focuses primarily on Corporate &amp; Commercial Law and Property &amp; Real Estate Law, with experience advising businesses, property owners, developers, investors and organisations on transactions, documentation, contracts, corporate matters and strategic legal issues.</p><p>Beyond legal practice, Mirian is actively involved in real estate development and agribusiness and serves as a director in companies operating across real estate, agriculture, technology, media and related sectors.</p><p>Her multidisciplinary experience gives her a practical understanding of the legal and commercial realities behind the transactions and businesses she advises. She is also involved in social-impact initiatives focused on youth development, advocacy, women and children.</p></div>
//       <div className="credentials" data-reveal>{credentials.map((item) => <div key={item.value}><strong>{item.value}</strong><span>{item.label}</span></div>)}</div>
//     </section>

//     <section className="practice section-pad" id="practice">
//       <div className="section-head" data-reveal><div><p className="section-kicker">02 / Practice</p><h2>Advice built for<br /><em>real decisions.</em></h2></div><p>Legal clarity, commercial judgment and a practical view of the people and projects behind every transaction.</p></div>
//       <div className="practice-grid">{practiceAreas.map((area) => <article className="practice-card" data-reveal key={area.number}><span className="card-number">{area.number}</span><h3>{area.title}</h3><p>{area.summary}</p><ul>{area.services.map((service) => <li key={service}>{service}</li>)}</ul></article>)}</div>
//       <aside className="corporate-note" data-reveal><p className="section-kicker">Selected corporate advisory engagements</p><div><h3>Corporate &amp; Legal Secretarial Advisory</h3><p>Providing ongoing legal, corporate governance, documentation and advisory support to businesses and organisations across diverse sectors.</p></div><ul><li>Basani Digital Innovations Limited</li><li>Peter Love Concept</li><li>Other privately held companies &amp; organisations</li></ul></aside>
//     </section>

//     <section className="ventures section-pad" id="ventures">
//       <div className="section-head" data-reveal><div><p className="section-kicker">03 / Ventures &amp; leadership</p><h2>Built from the<br /><em>inside out.</em></h2></div><p>Direct involvement in ventures gives Mirian an informed perspective on how businesses are built, operated and advised.</p></div>
//       <div className="venture-groups">{ventures.map((group) => <div className="venture-group" data-reveal key={group.category}><p>{group.category}</p>{group.items.map((item) => <article key={item.company}><div><h3>{item.company}</h3><span>{item.role}</span></div><p>{item.description}</p></article>)}</div>)}</div>
//     </section>

//     <section className="work section-pad" id="work">
//       <div className="section-head" data-reveal><div><p className="section-kicker">04 / Representative work</p><h2>Experience with<br /><em>real consequence.</em></h2></div><p>A representative selection of legal and business matters, described with appropriate discretion.</p></div>
//       <div className="matter-list">{matters.map((matter, index) => <article data-reveal key={matter.title}><span>0{index + 1}</span><h3>{matter.title}</h3><p>{matter.text}</p><Arrow diagonal /></article>)}</div>
//     </section>

//     <section className="impact section-pad" id="impact">
//       <div className="impact-copy" data-reveal><p className="section-kicker">05 / Social impact</p><h2>Work that extends<br /><em>beyond business.</em></h2><p>Beyond professional practice, Mirian is involved in initiatives focused on youth development, advocacy, women, children and community empowerment.</p></div>
//       <div className="impact-list" data-reveal><article><span>01</span><h3>African Youth Rehabilitation Initiative</h3><strong>Director</strong></article><article><span>02</span><h3>Star Advocacy for African Women &amp; Children</h3><strong>Founder &amp; Trustee</strong></article></div>
//     </section>

//     <section className="engagement section-pad" id="engagement">
//       <div className="engagement-feature" data-reveal><p className="section-kicker">06 / Public engagement</p><span>Radio &amp; advocacy</span><h2>Knowledge shared is<br /><em>confidence built.</em></h2><p>Engaging the public on real estate, property ownership, documentation, investment and fraud prevention, as well as good-governance advocacy, through radio and other public platforms.</p></div>
//       <div className="discipline-grid" data-reveal>{disciplines.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
//     </section>

//     <section className="media section-pad" id="media">
//       <div className="section-head" data-reveal><div><p className="section-kicker">Media, speaking &amp; publications</p><h2>A voice beyond<br /><em>the boardroom.</em></h2></div><p>Public-facing legal and property education complements Mirian&apos;s professional practice and commitment to clearer decision-making.</p></div>
//       <div className="media-grid" data-reveal><article><span>01 / Radio</span><h3>Dream FM, Enugu</h3><p>Real estate education and public awareness on ownership, documentation, investment and fraud prevention.</p></article><article><span>02 / Advocacy</span><h3>Urban Radio 94.5 FM &amp; Solid 100.9 FM</h3><p>Guest speaker representing the Youth Alliance for Good Governance in its Good Governance Advocacy Project.</p></article><article><span>03 / Speaking</span><h3>Public engagement</h3><p>Available for conversations on legal, commercial, property, agricultural and good-governance topics with practical relevance to businesses and communities.</p></article><article><span>04 / Publications</span><h3>Practical insights</h3><p>Short, authoritative perspectives on property, business, corporate law and agriculture are developed for this platform.</p></article></div>
//     </section>

//     <section className="gallery section-pad" id="gallery">
//       <div className="gallery-heading" data-reveal><div><p className="section-kicker">Beyond the desk</p><h2>Presence with<br /><em>purpose.</em></h2></div><p>A considered view of the professional environments and perspectives behind the work.</p></div>
//       <Gallery portraits={galleryPortraits} />
//     </section>

//     <section className="insights section-pad" id="insights">
//       <div className="section-head" data-reveal><div><p className="section-kicker">07 / Insights</p><h2>Clear thinking,<br /><em>shared generously.</em></h2></div><p>Practical perspectives on law, property, business and agriculture. New articles will be published here.</p></div>
//       <div className="insight-grid">{insights.map((insight, index) => <article data-reveal key={insight.title}><span>{String(index + 1).padStart(2, "0")} / {insight.category}</span><h3>{insight.title}</h3><a href="#contact">Coming soon <Arrow diagonal /></a></article>)}</div>
//     </section>

//     <SiteFooter />
//   </main>;
// }

import Image from "next/image";
import { SiteNavigation } from "@/components/layout/SiteNavigation";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Arrow } from "@/components/ui/Arrow";
import { Gallery } from "@/components/ui/Gallery";
import { RevealObserver } from "@/components/ui/RevealObserver";
import { credentials, disciplines, galleryPortraits, insights, matters, practiceAreas, ventures } from "@/data/profile";

export default function Home() {
  return <main>
    <RevealObserver />
    <SiteNavigation />

    <section className="hero" id="top">
      <div className="hero-grain" />
      <div className="hero-copy">
        <p className="eyebrow hero-in one"><span /> Mirian Okoro, Esq.</p>
        <h1 className="hero-in two">Law. Business.<br /><span>Property. Agriculture.</span></h1>
        <p className="hero-intro hero-in three">Legal Practitioner, Corporate &amp; Commercial Adviser, Real Estate Professional &amp; Agribusiness Entrepreneur.</p>
        <p className="hero-support hero-in three">Building, protecting and advising businesses, investments and property interests across Nigeria.</p>
        <div className="hero-actions hero-in four"><a href="#practice" className="button-solid">Explore my practice <Arrow /></a><a href="#contact" className="text-link">Start a conversation <Arrow /></a></div>
      </div>
      <div className="portrait-wrap hero-in image-in"><div className="portrait-frame"><Image src="/Mirian2.jpeg" alt="Mirian Okoro" fill priority sizes="(max-width: 900px) 100vw, 47vw" /><div className="portrait-shade" /></div><div className="experience-seal"><span className="seal-top">LAW · BUSINESS</span><strong>10<span className="plus">+</span></strong><span>YEARS EXPERIENCE</span></div></div>
      <div className="hero-meta hero-in four"><span>Nigeria · Enugu roots</span><span className="meta-line" /><span>Legal · Commercial · Advisory</span></div>
    </section>

    <section className="about section-pad" id="about">
      <div className="about-intro" data-reveal><p className="section-kicker">01 / About</p><h2>A multidisciplinary<br /><em>perspective.</em></h2></div>
      <div className="about-copy" data-reveal><p className="lead">Mirian Okoro is a Nigerian Legal Practitioner, Corporate &amp; Commercial Adviser and Real Estate Professional with over a decade of experience spanning law, property, business development and agriculture.</p><p>Her professional practice focuses primarily on Corporate &amp; Commercial Law and Property &amp; Real Estate Law, with experience advising businesses, property owners, developers, investors and organisations on transactions, documentation, contracts, corporate matters and strategic legal issues.</p><p>Beyond legal practice, Mirian is actively involved in real estate development and agribusiness and serves as a director in companies operating across real estate, agriculture, technology, media and related sectors.</p><p>Her multidisciplinary experience gives her a practical understanding of the legal and commercial realities behind the transactions and businesses she advises. She is also involved in social-impact initiatives focused on youth development, advocacy, women and children.</p></div>
      <div className="credentials" data-reveal>{credentials.map((item) => <div key={item.value}><strong>{item.value}</strong><span>{item.label}</span></div>)}</div>
    </section>

    <section className="practice section-pad" id="practice">
      <div className="section-head" data-reveal><div><p className="section-kicker">02 / Practice</p><h2>Advice built for<br /><em>real decisions.</em></h2></div><p>Legal clarity, commercial judgment and a practical view of the people and projects behind every transaction.</p></div>
      <div className="practice-grid">{practiceAreas.map((area) => <article className="practice-card" data-reveal key={area.number}><span className="card-number">{area.number}</span><h3>{area.title}</h3><p>{area.summary}</p><ul>{area.services.map((service) => <li key={service}>{service}</li>)}</ul></article>)}</div>
      <aside className="corporate-note" data-reveal><p className="section-kicker">Selected corporate advisory engagements</p><div><h3>Corporate &amp; Legal Secretarial Advisory</h3><p>Providing ongoing legal, corporate governance, documentation and advisory support to businesses and organisations across diverse sectors.</p></div><ul><li>Basani Digital Innovations Limited</li><li>Peter Love Concept</li><li>Other privately held companies &amp; organisations</li></ul></aside>
    </section>

    <section className="ventures section-pad" id="ventures">
      <div className="section-head" data-reveal><div><p className="section-kicker">03 / Ventures &amp; leadership</p><h2>Built from the<br /><em>inside out.</em></h2></div><p>Direct involvement in ventures gives Mirian an informed perspective on how businesses are built, operated and advised.</p></div>
      <div className="venture-groups">{ventures.map((group) => <div className="venture-group" data-reveal key={group.category}><p>{group.category}</p>{group.items.map((item) => <article key={item.company}><div><h3>{item.company}</h3><span>{item.role}</span></div><p>{item.description}</p></article>)}</div>)}</div>
    </section>

    <section className="work section-pad" id="work">
      <div className="section-head" data-reveal><div><p className="section-kicker">04 / Representative work</p><h2>Experience with<br /><em>real consequence.</em></h2></div><p>A representative selection of legal and business matters, described with appropriate discretion.</p></div>
      <div className="matter-list">{matters.map((matter, index) => <article data-reveal key={matter.title}><span>0{index + 1}</span><h3>{matter.title}</h3><p>{matter.text}</p><Arrow diagonal /></article>)}</div>
    </section>

    <section className="impact section-pad" id="impact">
      <div className="impact-copy" data-reveal><p className="section-kicker">05 / Social impact</p><h2>Work that extends<br /><em>beyond business.</em></h2><p>Beyond professional practice, Mirian is involved in initiatives focused on youth development, advocacy, women, children and community empowerment.</p></div>
      <div className="impact-list" data-reveal><article><span>01</span><h3>African Youth Rehabilitation Initiative</h3><strong>Director</strong></article><article><span>02</span><h3>Star Advocacy for African Women &amp; Children</h3><strong>Founder &amp; Trustee</strong></article></div>
    </section>

    <section className="engagement section-pad" id="engagement">
      <div className="engagement-feature" data-reveal><p className="section-kicker">06 / Public engagement</p><span>Radio &amp; advocacy</span><h2>Knowledge shared is<br /><em>confidence built.</em></h2><p>Engaging the public on real estate, property ownership, documentation, investment and fraud prevention, as well as good-governance advocacy, through radio and other public platforms.</p></div>
      <div className="discipline-grid" data-reveal>{disciplines.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>

    <section className="media section-pad" id="media">
      <div className="section-head" data-reveal><div><p className="section-kicker">Media, speaking &amp; publications</p><h2>A voice beyond<br /><em>the boardroom.</em></h2></div><p>Public-facing legal and property education complements Mirian&apos;s professional practice and commitment to clearer decision-making.</p></div>
      <div className="media-grid" data-reveal><article><span>01 / Radio</span><h3>Dream FM, Enugu</h3><p>Real estate education and public awareness on ownership, documentation, investment and fraud prevention.</p></article><article><span>02 / Advocacy</span><h3>Urban Radio 94.5 FM &amp; Solid 100.9 FM</h3><p>Guest speaker representing the Youth Alliance for Good Governance in its Good Governance Advocacy Project.</p></article><article><span>03 / Speaking</span><h3>Public engagement</h3><p>Available for conversations on legal, commercial, property, agricultural and good-governance topics with practical relevance to businesses and communities.</p></article><article><span>04 / Publications</span><h3>Practical insights</h3><p>Short, authoritative perspectives on property, business, corporate law and agriculture are developed for this platform.</p></article></div>
    </section>

    <section className="gallery section-pad" id="gallery">
      <div className="gallery-heading" data-reveal><div><p className="section-kicker">Beyond the desk</p><h2>Presence with<br /><em>purpose.</em></h2></div><p>A considered view of the professional environments and perspectives behind the work.</p></div>
      <Gallery portraits={galleryPortraits} />
    </section>

    <section className="insights section-pad" id="insights">
      <div className="section-head" data-reveal><div><p className="section-kicker">07 / Insights</p><h2>Clear thinking,<br /><em>shared generously.</em></h2></div><p>Practical perspectives on law, property, business and agriculture. New articles will be published here.</p></div>
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">{insights.map((insight, index) => <article data-reveal key={insight.title} className="group relative flex min-h-[230px] flex-col justify-between overflow-hidden rounded-2xl border border-black/10 bg-black/[0.02] p-7 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-black/20 hover:bg-black/[0.035] hover:shadow-[0_22px_40px_-28px_rgba(0,0,0,0.35)]"><div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-black/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" /><div className="relative flex items-center justify-between gap-4"><span className="text-xs tracking-[0.12em] text-black/35">{String(index + 1).padStart(2, "0")}</span><span className="whitespace-nowrap rounded-full border border-black/10 px-3 py-1 text-[0.7rem] uppercase tracking-[0.14em] text-black/55">{insight.category}</span></div><h3 className="relative mt-6 text-xl font-medium leading-snug tracking-tight">{insight.title}</h3><div className="relative mt-7 flex items-center border-t border-black/10 pt-5"><a href="#contact" className="inline-flex items-center gap-2 text-sm text-black/45 transition-all duration-300 group-hover:gap-3 group-hover:text-black/85">Coming soon <Arrow diagonal /></a></div></article>)}</div>
    </section>

    <SiteFooter />
  </main>;
}