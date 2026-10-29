// "use client";

// import { useEffect, useState } from "react";
// import { Arrow } from "@/components/ui/Arrow";

// export function InsightsGrid({ insights }) {
//   const [selected, setSelected] = useState(null);
//   useEffect(() => {
//     if (!selected) return undefined;
//     const onKeyDown = (event) => event.key === "Escape" && setSelected(null);
//     document.body.style.overflow = "hidden";
//     window.addEventListener("keydown", onKeyDown);
//     return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKeyDown); };
//   }, [selected]);

//   return <>{<div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7">
//     {insights.map((insight, index) => <article key={insight.title} className="group relative flex min-h-[200px] flex-col justify-between overflow-hidden rounded-2xl border border-neutral-900/10 bg-white/40 p-6 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-[#8f6b2c]/30 hover:bg-white/70 hover:shadow-xl sm:min-h-[220px] sm:p-7">
//       <div className="flex items-center justify-between gap-4"><span className="text-xs tracking-[0.12em] text-neutral-900/35">{String(index + 1).padStart(2, "0")}</span><span className="whitespace-nowrap rounded-full border border-neutral-900/10 px-3 py-1 text-[0.65rem] uppercase tracking-[0.14em] text-neutral-900/55">{insight.category}</span></div>
//       <div className="mt-6"><h3 className="font-serif text-lg font-normal leading-snug tracking-tight text-neutral-900 sm:text-xl">{insight.title}</h3>{insight.excerpt && <p className="mt-3 text-xs leading-relaxed text-neutral-900/60">{insight.excerpt}</p>}</div>
//       <div className="mt-6 border-t border-neutral-900/10 pt-4">{insight.article ? <button type="button" onClick={() => setSelected(insight)} className="inline-flex items-center gap-2 text-sm text-neutral-900/50 transition-all group-hover:gap-3 group-hover:text-[#8f6b2c]">Read article <Arrow diagonal /></button> : <a href="#contact" className="inline-flex items-center gap-2 text-sm text-neutral-900/50">Coming soon <Arrow diagonal /></a>}</div>
//     </article>)}
//   </div>}
//   {selected && <div role="dialog" aria-modal="true" aria-labelledby="article-title" onClick={() => setSelected(null)} className="fixed inset-0 z-[100] flex items-end bg-black/75 backdrop-blur-sm sm:items-center sm:justify-center sm:p-6 lg:p-10">
//     <article onClick={(event) => event.stopPropagation()} className="flex h-[90svh] w-full flex-col overflow-hidden rounded-t-3xl bg-[#f7f1e6] text-neutral-900 shadow-2xl sm:h-[min(86svh,760px)] sm:max-w-3xl sm:rounded-3xl">
//       <header className="z-10 shrink-0 border-b border-neutral-900/10 bg-[#f7f1e6] px-6 pb-5 pt-4 sm:px-10 sm:pb-6 sm:pt-7">
//         <div className="mb-5 h-1 w-10 rounded-full bg-neutral-900/15 sm:hidden" />
//         <div className="flex items-start justify-between gap-5">
//           <p className="pt-2 text-[10px] font-medium uppercase tracking-[0.3em] text-[#8f6b2c]">{selected.category} guide</p>
//           <button type="button" onClick={() => setSelected(null)} aria-label="Close article" className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-neutral-900/15 text-xl transition-colors hover:border-[#8f6b2c] hover:text-[#8f6b2c]">×</button>
//         </div>
//         <h2 id="article-title" className="mt-4 max-w-2xl font-serif text-3xl font-normal leading-tight tracking-tight sm:text-4xl">{selected.title}</h2>
//       </header>
//       <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-6 py-7 sm:px-10 sm:py-9">
//         <p className="max-w-2xl text-[0.95rem] leading-7 text-neutral-900/70 sm:text-base sm:leading-8">{selected.article.intro}</p>
//         <div className="mt-9 space-y-8 border-t border-neutral-900/10 pt-8 sm:mt-10 sm:space-y-10">{selected.article.sections.map(([heading, content], index) => <section key={heading}><p className="text-[10px] uppercase tracking-[0.18em] text-[#8f6b2c]">{String(index + 1).padStart(2, "0")}</p><h3 className="mt-2 font-serif text-2xl font-normal leading-tight sm:text-[1.7rem]">{heading}</h3><p className="mt-3 text-sm leading-7 text-neutral-900/70 sm:text-[0.95rem]">{content}</p></section>)}</div>
//         <p className="mt-10 border-t border-neutral-900/10 pt-7 font-serif text-xl leading-relaxed sm:text-2xl">{selected.article.conclusion}</p>
//         <p className="mt-6 text-xs leading-relaxed text-neutral-900/50">{selected.article.disclaimer}</p>
//       </div>
//       <footer className="shrink-0 border-t border-neutral-900/10 bg-[#f7f1e6] px-6 py-4 sm:px-10 sm:py-5">
//         <a href="#contact" onClick={() => setSelected(null)} className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#8f6b2c] px-6 py-3.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-[#704f1b] sm:w-auto">Discuss a property matter <Arrow diagonal /></a>
//       </footer>
//     </article>
//   </div>}</>;
// }

"use client";

import { useEffect, useState } from "react";
import { Arrow } from "@/components/ui/Arrow";

const toArray = (value) => {
  if (Array.isArray(value)) return value;
  if (value === null || value === undefined || value === "") return [];
  return [value];
};

const isExternal = (href) => /^https?:\/\//i.test(href || "");

function ArticleBlock({ block }) {
  if (!block) return null;

  if (block.type === "p") {
    return (
      <p className="mt-4 text-sm leading-7 text-neutral-900/70 sm:text-[0.95rem]">
        {block.text}
      </p>
    );
  }

  if (block.type === "label") {
    return (
      <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8f6b2c]">
        {block.text}
      </p>
    );
  }

  if (block.type === "list") {
    return (
      <ul className="mt-4 space-y-2.5">
        {toArray(block.items).map((item, index) => (
          <li
            key={`${index}-${item}`}
            className="flex gap-3 text-sm leading-7 text-neutral-900/70 sm:text-[0.95rem]"
          >
            <span className="mt-[0.7rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#8f6b2c]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }

  if (block.type === "terms") {
    return (
      <div className="mt-4 divide-y divide-neutral-900/10 overflow-hidden rounded-xl border border-neutral-900/10 bg-white/50">
        {toArray(block.items).map((entry, index) => {
          const term = Array.isArray(entry) ? entry[0] : entry?.term;
          const description = Array.isArray(entry)
            ? entry[1]
            : entry?.description;

          return (
            <div key={`${index}-${term}`} className="p-4 sm:p-5">
              <p className="text-sm font-semibold leading-snug text-neutral-900 sm:text-[0.95rem]">
                {term}
              </p>
              {description ? (
                <p className="mt-1.5 text-sm leading-7 text-neutral-900/70 sm:text-[0.95rem]">
                  {description}
                </p>
              ) : null}
            </div>
          );
        })}
      </div>
    );
  }

  if (block.type === "links") {
    return (
      <ul className="mt-4 space-y-2">
        {toArray(block.items).map((entry, index) => {
          const label = Array.isArray(entry) ? entry[0] : entry?.label;
          const href = Array.isArray(entry) ? entry[1] : entry?.href;

          return (
            <li key={`${index}-${href}`}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group/link inline-flex flex-wrap items-center gap-2 break-all text-sm text-[#8f6b2c] underline decoration-[#8f6b2c]/30 underline-offset-4 transition-colors hover:text-[#704f1b] hover:decoration-[#704f1b]"
              >
                <span className="font-medium">{label}</span>
                <span className="text-neutral-900/45 no-underline">
                  {href}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    );
  }

  return null;
}

function ArticleBody({ article }) {
  const intro = toArray(article.intro);
  const sections = toArray(article.sections);
  const conclusion = toArray(article.conclusion);
  const cta = article.cta;
  const resources = toArray(article.resources);

  return (
    <>
      {article.subheading ? (
        <p className="mb-5 max-w-2xl font-serif text-xl italic leading-snug text-[#8f6b2c] sm:text-2xl">
          {article.subheading}
        </p>
      ) : null}

      <div className="max-w-2xl space-y-4">
        {intro.map((paragraph, index) => (
          <p
            key={`intro-${index}`}
            className={
              index === 0
                ? "text-[0.95rem] leading-7 text-neutral-900/80 sm:text-base sm:leading-8"
                : "text-[0.95rem] leading-7 text-neutral-900/70 sm:text-base sm:leading-8"
            }
          >
            {paragraph}
          </p>
        ))}
      </div>

      <div className="mt-9 space-y-9 border-t border-neutral-900/10 pt-8 sm:mt-10 sm:space-y-11">
        {sections.map((section, index) => (
          <section key={`${section?.heading}-${index}`}>
            {section?.number ? (
              <p className="text-[10px] uppercase tracking-[0.18em] text-[#8f6b2c]">
                {String(section.number).padStart(2, "0")}
              </p>
            ) : (
              <p className="text-[10px] uppercase tracking-[0.18em] text-[#8f6b2c]">
                Note
              </p>
            )}
            <h3 className="mt-2 font-serif text-2xl font-normal leading-tight sm:text-[1.7rem]">
              {section?.heading}
            </h3>
            {toArray(section?.blocks).map((block, blockIndex) => (
              <ArticleBlock key={`block-${index}-${blockIndex}`} block={block} />
            ))}
          </section>
        ))}
      </div>

      {conclusion.length > 0 ? (
        <div className="mt-10 space-y-4 border-t border-neutral-900/10 pt-8">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8f6b2c]">
            Conclusion
          </p>
          {conclusion.map((paragraph, index) => (
            <p
              key={`conclusion-${index}`}
              className={
                index === conclusion.length - 1
                  ? "font-serif text-xl leading-relaxed sm:text-2xl"
                  : "text-sm leading-7 text-neutral-900/70 sm:text-[0.95rem]"
              }
            >
              {paragraph}
            </p>
          ))}
        </div>
      ) : null}

      {cta ? (
        <div className="mt-10 rounded-2xl border border-[#8f6b2c]/25 bg-white/60 p-6 sm:p-8">
          <h3 className="font-serif text-2xl font-normal leading-tight sm:text-[1.7rem]">
            {cta.heading}
          </h3>
          <div className="mt-4 space-y-3">
            {toArray(cta.paragraphs).map((paragraph, index) => (
              <p
                key={`cta-${index}`}
                className="text-sm leading-7 text-neutral-900/70 sm:text-[0.95rem]"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {toArray(cta.contact).length > 0 ? (
            <>
              <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8f6b2c]">
                {cta.contactHeading || "Get in Touch"}
              </p>
              <ul className="mt-3 divide-y divide-neutral-900/10 border-y border-neutral-900/10">
                {toArray(cta.contact).map((item, index) => (
                  <li
                    key={`contact-${index}`}
                    className="flex flex-col gap-1 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
                  >
                    <span className="text-[10px] uppercase tracking-[0.15em] text-neutral-900/45">
                      {item.label}
                    </span>
                    <a
                      href={item.href}
                      target={isExternal(item.href) ? "_blank" : undefined}
                      rel={isExternal(item.href) ? "noreferrer" : undefined}
                      className="break-all text-sm font-medium text-[#8f6b2c] transition-colors hover:text-[#704f1b]"
                    >
                      {item.value}
                    </a>
                  </li>
                ))}
              </ul>
            </>
          ) : null}

          {cta.tagline ? (
            <p className="mt-6 font-serif text-lg italic leading-snug text-neutral-900/80 sm:text-xl">
              {cta.tagline}
            </p>
          ) : null}
        </div>
      ) : null}

      {resources.length > 0 ? (
        <div className="mt-8">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8f6b2c]">
            Official resources
          </p>
          <ul className="mt-3 space-y-2">
            {resources.map((entry, index) => {
              const label = Array.isArray(entry) ? entry[0] : entry?.label;
              const href = Array.isArray(entry) ? entry[1] : entry?.href;

              return (
                <li key={`resource-${index}`}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex flex-wrap items-center gap-2 break-all text-sm text-[#8f6b2c] underline decoration-[#8f6b2c]/30 underline-offset-4 transition-colors hover:text-[#704f1b]"
                  >
                    <span className="font-medium">{label}</span>
                    <span className="text-neutral-900/45">{href}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}

      {article.disclaimer ? (
        <p className="mt-8 border-t border-neutral-900/10 pt-6 text-xs leading-relaxed text-neutral-900/50">
          <span className="font-semibold">Disclaimer: </span>
          {article.disclaimer}
        </p>
      ) : null}
    </>
  );
}

export function InsightsGrid({ insights }) {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (!selected) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setSelected(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selected]);

  return (
    <>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7">
        {insights.map((insight, index) => (
          <article
            key={insight.title}
            className="group relative flex min-h-[200px] flex-col justify-between overflow-hidden rounded-2xl border border-neutral-900/10 bg-white/40 p-6 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-[#8f6b2c]/30 hover:bg-white/70 hover:shadow-xl sm:min-h-[220px] sm:p-7"
          >
            <div className="flex items-center justify-between gap-4">
              <span className="text-xs tracking-[0.12em] text-neutral-900/35">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="whitespace-nowrap rounded-full border border-neutral-900/10 px-3 py-1 text-[0.65rem] uppercase tracking-[0.14em] text-neutral-900/55">
                {insight.category}
              </span>
            </div>
            <div className="mt-6">
              <h3 className="font-serif text-lg font-normal leading-snug tracking-tight text-neutral-900 sm:text-xl">
                {insight.title}
              </h3>
              {insight.excerpt && (
                <p className="mt-3 text-xs leading-relaxed text-neutral-900/60">
                  {insight.excerpt}
                </p>
              )}
            </div>
            <div className="mt-6 border-t border-neutral-900/10 pt-4">
              {insight.article ? (
                <button
                  type="button"
                  onClick={() => setSelected(insight)}
                  className="inline-flex items-center gap-2 text-sm text-neutral-900/50 transition-all group-hover:gap-3 group-hover:text-[#8f6b2c]"
                >
                  Read article <Arrow diagonal />
                </button>
              ) : (
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm text-neutral-900/50"
                >
                  Coming soon <Arrow diagonal />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>

      {selected && selected.article && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="article-title"
          onClick={() => setSelected(null)}
          className="fixed inset-0 z-[100] flex items-end bg-black/75 backdrop-blur-sm sm:items-center sm:justify-center sm:p-6 lg:p-10"
        >
          <article
            onClick={(event) => event.stopPropagation()}
            className="flex h-[90svh] w-full flex-col overflow-hidden rounded-t-3xl bg-[#f7f1e6] text-neutral-900 shadow-2xl sm:h-[min(86svh,760px)] sm:max-w-3xl sm:rounded-3xl"
          >
            <header className="z-10 shrink-0 border-b border-neutral-900/10 bg-[#f7f1e6] px-6 pb-5 pt-4 sm:px-10 sm:pb-6 sm:pt-7">
              <div className="mb-5 h-1 w-10 rounded-full bg-neutral-900/15 sm:hidden" />
              <div className="flex items-start justify-between gap-5">
                <p className="pt-2 text-[10px] font-medium uppercase tracking-[0.3em] text-[#8f6b2c]">
                  {selected.category} guide
                </p>
                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  aria-label="Close article"
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-neutral-900/15 text-xl transition-colors hover:border-[#8f6b2c] hover:text-[#8f6b2c]"
                >
                  ×
                </button>
              </div>
              <h2
                id="article-title"
                className="mt-4 max-w-2xl font-serif text-3xl font-normal leading-tight tracking-tight sm:text-4xl"
              >
                {selected.article.heading || selected.title}
              </h2>
            </header>

            <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-6 py-7 sm:px-10 sm:py-9">
              <ArticleBody article={selected.article} />
            </div>

            <footer className="shrink-0 border-t border-neutral-900/10 bg-[#f7f1e6] px-6 py-4 sm:px-10 sm:py-5">
              <a
                href="#contact"
                onClick={() => setSelected(null)}
                className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#8f6b2c] px-6 py-3.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-[#704f1b] sm:w-auto"
              >
                Discuss a property matter <Arrow diagonal />
              </a>
            </footer>
          </article>
        </div>
      )}
    </>
  );
}