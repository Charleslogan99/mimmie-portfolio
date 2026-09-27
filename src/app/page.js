import Image from "next/image";
import { SiteNavigation } from "@/components/layout/SiteNavigation";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Arrow } from "@/components/ui/Arrow";
import { RevealObserver } from "@/components/ui/RevealObserver";
import { Gallery } from "@/components/ui/Gallery";
import { capabilities, experience, focusAreas, galleryPortraits, profile } from "@/data/profile";

export default function Home() {
  return (
    <main>
      <RevealObserver />
      <SiteNavigation />
      <section className="hero" id="top">
        <div className="hero-grain" />
        <div className="hero-copy">
          <p className="eyebrow hero-in one"><span /> Lawyer · Real Estate Consultant</p>
          <h1 className="hero-in two">Mirian <span>Okoro, Esq.</span></h1>
          <p className="hero-intro hero-in three">Legal precision. Property intelligence. A decade of building investor confidence in Enugu&apos;s real estate market.</p>
          <a href="#about" className="text-link hero-in four">Explore her profile <Arrow /></a>
        </div>
        <div className="portrait-wrap hero-in image-in">
          <div className="portrait-frame"><Image src="/Mirian2.jpeg" alt="Portrait of Mirian Okoro" fill priority sizes="(max-width: 900px) 100vw, 47vw" /><div className="portrait-shade" /></div>
          <div className="experience-seal"><span className="seal-top">REAL ESTATE</span><strong>10<span className="plus">+</span></strong><span>YEARS EXPERIENCE</span></div>
        </div>
        <div className="hero-meta hero-in four"><span>{profile.location}</span><span className="meta-line" /><span>Property · Law · Investment</span></div>
        <div className="scroll-cue"><span /> Scroll to explore</div>
      </section>

      <section className="statement section-pad" id="about">
        <p className="section-kicker" data-reveal>01 / Professional profile</p>
        <div className="statement-grid">
          <div data-reveal><h2>Making property<br />investment <em>safer.</em></h2><p className="pull-quote">“Reliable information creates confidence. Confidence creates investment.”</p></div>
          <div className="statement-copy" data-reveal>
            <p>Mirian Okoro is a Legal Practitioner and Real Estate Professional with over 10 years of experience in real estate and more than 11 years of legal and property-related experience.</p>
            <p>Born and bred in Enugu State, she brings a practical understanding of its property market. Her legal background spans land transactions, agreements, due diligence, negotiation, documentation and property disputes.</p>
            <p>Working with owners, buyers, sellers, developers and investors has shaped her mission: make property information accessible, protect investors and connect credible opportunities in Enugu with capital at home and abroad.</p>
          </div>
        </div>
        <div className="credentials" data-reveal>
          <div><strong>10<sup>+</sup></strong><span>Years in<br />real estate</span></div><div><strong>11<sup>+</sup></strong><span>Years legal &<br />property work</span></div><div><strong>LL.B</strong><span>Madonna University<br />Okija</span></div><div><strong>B.L</strong><span>Nigerian Law School<br />NBA member</span></div>
        </div>
      </section>

      <section className="expertise section-pad" id="expertise">
        <div className="section-head" data-reveal><div><p className="section-kicker">02 / Areas of focus</p><h2>One perspective.<br /><em>Three disciplines.</em></h2></div><p>Legal knowledge, local market intelligence and technology-led thinking come together in one integrated practice.</p></div>
        <div className="expertise-list">{focusAreas.map((item) => <article className="expertise-card" key={item.title} data-reveal><span className="card-number">{item.number}</span><div className="card-icon" aria-hidden="true">{item.number === "01" ? "⌂" : item.number === "02" ? "§" : "↗"}</div><h3>{item.title}</h3><p>{item.text}</p><div className="tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><Arrow diagonal /></article>)}</div>
      </section>

      <section className="experience section-pad" id="experience">
        <div className="experience-heading" data-reveal><p className="section-kicker">03 / Professional experience</p><h2>Work grounded in<br /><em>real outcomes.</em></h2></div>
        <div className="experience-list">{experience.map((item, index) => <article key={item.company} data-reveal><span>0{index + 1}</span><div><small>{item.type}</small><h3>{item.company}</h3></div><strong>{item.role}</strong><p>{item.description}</p></article>)}</div>
      </section>

      <section className="engis section-pad">
        <div className="engis-card" data-reveal><p className="section-kicker">04 / Vision for Enugu</p><h2>Confidence is the foundation of <em>development.</em></h2><p>Mirian&apos;s contribution to ENGIS brings together legal knowledge, real estate experience, public engagement, diaspora relationships and technology-driven ideas—supporting government&apos;s statutory role while improving how verified opportunities reach serious investors.</p><div className="capability-cloud">{capabilities.map((item) => <span key={item}>{item}</span>)}</div></div>
        <aside data-reveal><span className="aside-label">Public engagement</span><strong>Dream FM, Enugu</strong><p>Weekly real estate education on ownership, documentation, investment and fraud prevention.</p><span className="aside-label">The ambition</span><blockquote>Make Enugu one of Nigeria&apos;s easiest and safest places to invest in real estate.</blockquote></aside>
      </section>
      <section className="gallery section-pad" id="gallery">
        <div className="gallery-heading" data-reveal>
          <div><p className="section-kicker">05 / Gallery portraits</p><h2>Poise, purpose<br />and <em>presence.</em></h2></div>
          <p>A visual portrait of the woman behind the work—grounded, considered and confidently at home in every room.</p>
        </div>
        <Gallery portraits={galleryPortraits} />
      </section>
      <SiteFooter />
    </main>
  );
}
