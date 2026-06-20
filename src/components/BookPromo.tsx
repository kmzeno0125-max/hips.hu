import Reveal from './Reveal';
import bookCoverImage from '../assets/files_8595244-2026-05-22T14-40-22-166Z-LXJzufHlHY6iDmzj5CdVxWYJUxs06X4H5HaRkGUF.webp';

export default function BookPromo() {
  return (
    <section className="relative py-24 overflow-hidden bg-white">
      {/* Subtle background glow */}
      <div className="absolute top-[30%] right-[10%] w-[300px] h-[300px] rounded-full bg-cyan/[0.06] blur-[60px] pointer-events-none hidden lg:block" />
      <div className="absolute bottom-[20%] left-[5%] w-[200px] h-[200px] rounded-full bg-navy/[0.03] blur-[40px] pointer-events-none hidden lg:block" />

      <div className="max-w-[1100px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        {/* Left: Text content */}
        <div className="lg:col-span-7">
          <Reveal direction="up" delay={0.1}>
            <span className="font-body text-[11px] font-semibold tracking-[0.1em] uppercase text-cyan mb-4 block">
              Könyvajánló
            </span>
          </Reveal>

          <Reveal direction="up" delay={0.18}>
            <h2
              className="font-display font-bold text-navy mb-4 tracking-normal"
              style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}
            >
              Szeretnél gyorsabban haladni?
            </h2>
          </Reveal>

          <Reveal direction="up" delay={0.26}>
            <p className="font-body text-[17px] text-navy/80 leading-[1.7] mb-6 max-w-[540px]">
              Az{' '}
              <span className="font-semibold text-navy">
                Elme Térkép a Szívhez
              </span>{' '}
              című könyv segít megérteni a belső folyamataidat.
            </p>
          </Reveal>

          <Reveal direction="up" delay={0.32}>
            <div className="flex items-baseline gap-2 mb-6 border-l-[3px] border-cyan pl-4 py-2">
              <span className="font-display text-[22px] font-bold text-navy">
                5 000 Ft
              </span>
              <span className="font-body text-[14px] text-[#666]">
                + 900 Ft postaköltség
              </span>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.38}>
            <a
              href="https://buy.stripe.com/5kQbJ10nH9ki0Oo0EN6g800"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block font-body text-[15px] font-semibold bg-cyan text-navy px-8 py-[14px] rounded-[6px] mb-8"
            >
              MEGVÁSÁROLOM A KÖNYVET
            </a>
          </Reveal>

          <Reveal direction="up" delay={0.44}>
            <p className="font-body text-[15px] text-[#444] leading-[1.8] max-w-[540px]">
              Elme Térkép a Szívhez c. könyvben 13 csodálatos ember életének
              egy-egy epizódját bemutató történetek leírása olvasható. Az emberi
              test egy tükörkép, méghozzá olyan tükörkép, amelyben a gondolatok,
              érzések és a kimondott szavak hatásait láthatjuk visszatükröződni.
              Az emberi test működését megváltoztató szavak képesek betegségeket
              kialakítani, vagy az ellentétes értelemben véve a meglévő
              konfliktusokat feloldani és az évtizedeken át tartó elváltozások
              visszafordítására is. Az "egészség a legnagyobb érték" gondolatnak
              az összetettségét mutatja be a szerző által leírt felnőtteknek
              szóló novella.
            </p>
          </Reveal>
        </div>

        {/* Right: Book image */}
        <Reveal direction="right" delay={0.2} className="lg:col-span-5">
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative glow behind book */}
              <div className="absolute inset-[-16px] bg-gradient-to-br from-cyan/15 via-transparent to-navy/10 rounded-[24px] blur-[16px]" />

              {/* Book image container */}
              <div className="relative w-[280px] sm:w-[320px] rounded-[16px] overflow-hidden shadow-[0_20px_60px_rgba(21,46,122,0.18)] border border-navy/[0.08]">
                <img
                  src={bookCoverImage}
                  alt="Elme Térkép a Szívhez könyv"
                  className="w-full h-auto object-contain"
                />
                {/* Very light tint overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/10 via-transparent to-transparent" />
              </div>

              {/* Small floating accent */}
              <div className="absolute -bottom-3 -left-3 bg-white rounded-[8px] shadow-[0_6px_20px_rgba(21,46,122,0.1)] px-4 py-2 border-l-[3px] border-cyan">
                <span className="font-body text-[12px] font-semibold text-navy">13 történet</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
