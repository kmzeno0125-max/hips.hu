import { Link } from 'react-router-dom';
import Reveal from './Reveal';
import spiralImage from '../assets/spiral-clock.png';
import { eventLocations, EventLocation } from '../data/events';

function SignupBlock({ event }: { event: EventLocation }) {
  const isPlaceholder = event.placeholder;
  const isWebinar = event.format === 'webinar';

  return (
    <div id={isWebinar ? 'online-webinar' : undefined} className="bg-white rounded-[10px] border border-navy/[0.08] p-6 md:p-7">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
        <div>
          <h4 className="text-[18px] font-bold text-navy">
            {event.city}
          </h4>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mt-0.5">
            <p className="text-[15px] text-[#555]">{event.date}</p>
            {isWebinar && (
              <span
                className="inline-flex items-center"
                style={{
                  padding: '4px 10px',
                  border: '1px solid #4DC5E8',
                  borderRadius: '999px',
                  background: 'transparent',
                  color: '#4DC5E8',
                  fontFamily: "'Figtree', sans-serif",
                  fontSize: '12px',
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  lineHeight: 1,
                }}
              >
                Webinár
              </span>
            )}
          </div>
        </div>
        {isPlaceholder && (
          <span className="text-[12px] font-semibold text-[#999] uppercase tracking-wide">
            Hamarosan
          </span>
        )}
      </div>

      {event.type === 'webinar' && <WebinarButtons event={event} />}
      {event.type === 'keszthely' && <KeszthelyButton event={event} />}
      {event.type === 'location' && <LocationButtons event={event} />}
      {event.type === 'singleOnly' && <SingleOnlyButton event={event} />}

      <CardContactCta />
    </div>
  );
}

function CardContactCta() {
  return (
    <div className="mt-4 pt-4 border-t border-navy/[0.06] text-center">
      <p className="text-[13px] text-[#666] mb-2">
        Kérdésed van a jelentkezéssel kapcsolatban?
      </p>
      <a
        href="#kapcsolat"
        className="inline-block font-body text-[13px] font-medium text-cobalt hover:underline transition-colors"
      >
        Kérdésem van a jelentkezés előtt &darr;
      </a>
    </div>
  );
}

function ProgramContactCta() {
  return (
    <div className="mt-6 pt-5 border-t border-navy/[0.06]">
      <p className="text-[14px] text-[#555] mb-3 leading-[1.6]">
        Ha valamelyik részlet nem egyértelmű, kérjen segítséget közvetlenül.
      </p>
      <a
        href="#kapcsolat"
        className="inline-flex items-center gap-2 font-body text-[14px] font-semibold text-navy/70 border border-navy/20 rounded-[6px] px-5 py-2.5 hover:border-navy/40 hover:text-navy hover:bg-navy/[0.03] transition-colors"
      >
        Kérdésem van a programmal kapcsolatban &darr;
      </a>
    </div>
  );
}

function WebinarButtons({ event }: { event: EventLocation }) {
  return (
    <>
      <p className="text-[14px] text-[#555] mb-4 leading-[1.6]">
        Válassza ki az Önnek megfelelő webinar részvételi lehetőséget.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        {event.webinarOptions?.map((option, i) => (
          <a
            key={option.label}
            href={option.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn-primary flex-1 text-center rounded-[6px] px-5 py-3 transition-colors ${
              i === 0
                ? 'bg-navy text-white hover:bg-cobalt text-[14px] font-semibold'
                : i === 1
                  ? 'border-[1.5px] border-cyan bg-cyan/[0.08] text-navy hover:bg-cyan/[0.18] text-[14px] font-semibold'
                  : 'border-[1.5px] border-navy/20 text-navy/80 hover:border-navy/40 hover:bg-navy/[0.04] text-[14px] font-semibold'
            }`}
          >
            {option.label}: {option.price}
          </a>
        ))}
      </div>
      <p
        className="text-center mt-3"
        style={{
          fontFamily: "'Figtree', sans-serif",
          fontSize: '12px',
          fontWeight: 400,
          color: '#64748B',
        }}
      >
        A jelentkezéssel elfogadja az{' '}
        <Link
          to="/aszf"
          style={{ color: '#1D4DA8', textDecoration: 'underline', fontWeight: 500 }}
        >
          Általános Szerződési Feltételeket
        </Link>{' '}
        és az{' '}
        <Link
          to="/adatkezelesi-tajekoztato"
          style={{ color: '#1D4DA8', textDecoration: 'underline', fontWeight: 500 }}
        >
          Adatkezelési tájékoztatót
        </Link>
        .
      </p>
    </>
  );
}

function KeszthelyButton({ event }: { event: EventLocation }) {
  return (
    <>
      <p className="text-[14px] text-[#555] mb-4 leading-[1.6]">
        A részvételi díj egységesen {event.singlePrice}.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href={event.singleLink || '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary flex-1 text-center text-[14px] font-semibold rounded-[6px] px-5 py-3 transition-colors bg-navy text-white hover:bg-cobalt"
        >
          Jelentkezem: {event.singlePrice}
        </a>
      </div>
      <p
        className="text-center mt-3"
        style={{
          fontFamily: "'Figtree', sans-serif",
          fontSize: '12px',
          fontWeight: 400,
          color: '#64748B',
        }}
      >
        A jelentkezéssel elfogadja az{' '}
        <Link
          to="/aszf"
          style={{ color: '#1D4DA8', textDecoration: 'underline', fontWeight: 500 }}
        >
          Általános Szerződési Feltételeket
        </Link>{' '}
        és az{' '}
        <Link
          to="/adatkezelesi-tajekoztato"
          style={{ color: '#1D4DA8', textDecoration: 'underline', fontWeight: 500 }}
        >
          Adatkezelési tájékoztatót
        </Link>
        .
      </p>
    </>
  );
}

function SingleOnlyButton({ event }: { event: EventLocation }) {
  return (
    <>
      <p className="text-[14px] text-[#555] mb-4 leading-[1.6]">
        A részvételi díj egységesen {event.singlePrice}.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href={event.singleLink || '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary flex-1 text-center text-[14px] font-semibold rounded-[6px] px-5 py-3 transition-colors bg-navy text-white hover:bg-cobalt"
        >
          Jelentkezem: {event.singlePrice}
        </a>
      </div>
      <p
        className="text-center mt-3"
        style={{
          fontFamily: "'Figtree', sans-serif",
          fontSize: '12px',
          fontWeight: 400,
          color: '#64748B',
        }}
      >
        A jelentkezéssel elfogadja az{' '}
        <Link
          to="/aszf"
          style={{ color: '#1D4DA8', textDecoration: 'underline', fontWeight: 500 }}
        >
          Általános Szerződési Feltételeket
        </Link>{' '}
        és az{' '}
        <Link
          to="/adatkezelesi-tajekoztato"
          style={{ color: '#1D4DA8', textDecoration: 'underline', fontWeight: 500 }}
        >
          Adatkezelési tájékoztatót
        </Link>
        .
      </p>
    </>
  );
}

function LocationButtons({ event }: { event: EventLocation }) {
  const disabled = event.placeholder;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (disabled) e.preventDefault();
  };

  return (
    <>
      <p className="text-[14px] text-[#555] mb-4 leading-[1.6]">
        Válassza ki, hány fővel szeretne részt venni az eseményen.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href={event.links?.single || '#'}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
          aria-disabled={disabled}
          tabIndex={disabled ? -1 : 0}
          className={`btn-primary flex-1 text-center text-[14px] font-semibold rounded-[6px] px-5 py-3 transition-colors ${
            disabled
              ? 'bg-navy/40 text-white/70 pointer-events-none'
              : 'bg-navy text-white hover:bg-cobalt'
          }`}
        >
          Jelentkezem (1 fő)
        </a>
        <a
          href={event.links?.double || '#'}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
          aria-disabled={disabled}
          tabIndex={disabled ? -1 : 0}
          className={`btn-primary flex-1 text-center text-[14px] font-semibold rounded-[6px] px-5 py-3 border-[1.5px] transition-colors ${
            disabled
              ? 'border-cyan/30 text-cyan/50 pointer-events-none'
              : 'border-cyan bg-cyan/[0.08] text-navy hover:bg-cyan/[0.18]'
          }`}
        >
          Ketten jövünk (-20%)
        </a>
        <a
          href={event.links?.triple || '#'}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
          aria-disabled={disabled}
          tabIndex={disabled ? -1 : 0}
          className={`btn-secondary flex-1 text-center text-[14px] font-semibold rounded-[6px] px-5 py-3 border-[1.5px] transition-colors ${
            disabled
              ? 'border-navy/10 text-navy/30 pointer-events-none'
              : 'border-navy/20 text-navy/80 hover:border-navy/40 hover:bg-navy/[0.04]'
          }`}
        >
          Hárman jövünk (-33%)
        </a>
      </div>
      {!disabled && (
        <p
          className="text-center mt-3"
          style={{
            fontFamily: "'Figtree', sans-serif",
            fontSize: '12px',
            fontWeight: 400,
            color: '#64748B',
          }}
        >
          A jelentkezéssel elfogadja az{' '}
          <Link
            to="/aszf"
            style={{ color: '#1D4DA8', textDecoration: 'underline', fontWeight: 500 }}
          >
            Általános Szerződési Feltételeket
          </Link>{' '}
          és az{' '}
          <Link
            to="/adatkezelesi-tajekoztato"
            style={{ color: '#1D4DA8', textDecoration: 'underline', fontWeight: 500 }}
          >
            Adatkezelési tájékoztatót
          </Link>
          .
        </p>
      )}
      {disabled && (
        <p className="text-[12px] text-[#999] mt-3 text-center italic">
          Fizetési link hamarosan
        </p>
      )}
    </>
  );
}

export default function Events() {
  return (
    <section id="esemenyek" className="relative py-24 overflow-hidden bg-off-white">
      {/* Spiral clock as decorative background atmosphere */}
      <div className="absolute top-1/2 right-[2%] -translate-y-1/2 w-[420px] h-[420px] pointer-events-none hidden md:block">
        <img
          src={spiralImage}
          alt=""
          className="w-full h-full object-cover rounded-full"
          style={{
            filter: 'blur(1px) saturate(0.4)',
            opacity: 0.3,
            maskImage: 'radial-gradient(ellipse at center, black 50%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 50%, transparent 80%)',
          }}
        />
      </div>

      {/* Decorative rings */}
      <div className="absolute top-[12%] right-[7%] w-[160px] h-[160px] rounded-full border border-cyan/[0.1] pointer-events-none hidden lg:block" />
      <div className="absolute bottom-[10%] left-[4%] w-[80px] h-[80px] rounded-full bg-cyan/[0.06] blur-[20px] pointer-events-none" />

      <div className="max-w-[900px] mx-auto px-6 relative z-10">
        <Reveal direction="up" delay={0}>
          <span className="font-body text-[11px] font-semibold tracking-[0.1em] uppercase text-cyan mb-4 block">
            Közelgő programok
          </span>
        </Reveal>
        <Reveal direction="up" delay={0.1}>
          <h2
            className="font-display font-bold text-navy mb-4 tracking-normal"
            style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}
          >
            Öngyógyító Napok
          </h2>
        </Reveal>
        <Reveal direction="up" delay={0.18}>
          <p className="font-body text-[16px] text-[#444] max-w-[560px] leading-[1.7] mb-12">
            Szemléletformáló, élményalapú programok szerte az országban. Csatlakozz
            és ismerd meg tested biológiai összefüggéseit egy inspiráló közösségben.
          </p>
        </Reveal>

        <div className="space-y-10">
          {/* EVENT 1 — Ongyogyito Napok */}
          <Reveal direction="left" delay={0.08}>
            <div className="bg-white rounded-[12px] border border-navy/[0.08] shadow-[0_4px_24px_rgba(21,46,122,0.06)] p-8 md:p-10">
              <p className="text-[17px] font-semibold text-cyan italic mb-6 leading-[1.5]">
                „Az Egészség a Legnagyobb Érték."
              </p>

              <h3 className="font-display text-[22px] font-bold text-navy mb-4">
                Öngyógyító Nap
              </h3>
              <p className="text-[16px] text-navy font-semibold mb-8">
                Keszthely, szombati napokon
              </p>

              <h4 className="font-display text-[18px] font-bold text-navy mb-5">
                További időpontok és helyszínek:
              </h4>

              <div className="bg-[#F8FAFC] border border-navy/[0.08] rounded-[8px] p-5 mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <p className="text-[15px] text-[#444] leading-[1.6]">
                  Nem biztos benne, melyik program vagy jelentkezési forma megfelelő Önnek?
                </p>
                <a
                  href="#kapcsolat"
                  className="inline-flex items-center justify-center font-body text-[14px] font-semibold text-navy border-[1.5px] border-navy/30 rounded-[6px] px-6 py-2.5 hover:border-navy hover:bg-navy/[0.04] transition-colors whitespace-nowrap"
                >
                  Kérdésem van a jelentkezés előtt
                </a>
              </div>

              {/* Per-location signup blocks */}
              <div className="space-y-4 mb-8">
                {eventLocations.map((event, index) => (
                  <SignupBlock key={`${event.city}-${index}`} event={event} />
                ))}
              </div>

              <div className="border-t border-navy/[0.08] pt-6 mt-2">
                <p className="text-[15px] text-[#444] leading-[1.8] mb-4">
                  Nem mindenki tudja kifizetni az útiköltséget és/vagy a részvételi díjat az adott szombaton tartandó Öngyógyító Nap eseményre, ezért adományos jelleggel, akár Zoom kapcsolatban is, lehet részt venni az általam szervezendő eseményeken.
                </p>
                <a
                  href="https://4fund.com/hu/sdmth4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block font-body text-[15px] font-semibold text-navy bg-cyan/20 border border-cyan/40 rounded-[6px] px-7 py-3 hover:bg-cyan/30 transition-colors mb-5"
                >
                  Adományos részvétel támogatása
                </a>
                <p className="text-[15px] text-[#444] leading-[1.8] mb-2">
                  Írjon e-mail levelet ide kattintva:
                </p>
                <a
                  href="mailto:hips.hu@gmail.com"
                  className="text-[16px] font-semibold text-cyan hover:underline mb-6 inline-block"
                >
                  hips.hu@gmail.com
                </a>
              </div>

              <div className="border-t border-navy/[0.08] pt-6 mt-4">
                <p className="text-[15px] text-[#444] leading-[1.8] mb-4">
                  Minden pénteken 17.00–18.00 között tartandó webinar beszélgetésen lesz szó az esemény részleteiről.
                </p>

                <p className="text-[17px] font-bold text-navy italic mb-5">
                  „MINDEN ÉRTÉKNEK VAN ELLENÉRTÉKE!"
                </p>

                <p className="text-[15px] text-[#444] leading-[1.8] mb-2">
                  A webinaron alkalmanként 600 Ft/óra részvételi díj előre történő kifizetésével lehetséges a részvétel.
                </p>
                <p className="text-[15px] text-[#444] leading-[1.8] mb-5">
                  A webinar havi előfizetéssel: 1.000 Ft/hó, valamint éves előfizetéssel: 10.000 Ft/év díj befizetése után lehetséges.
                </p>

                <div className="flex flex-wrap gap-3 mb-6">
                  <a
                    href="https://buy.stripe.com/6oU4gz0nHfIG40A0EN6g809"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-[14px] font-semibold text-navy bg-off-white border border-navy/[0.12] rounded-[6px] px-5 py-2 hover:bg-navy/[0.06] transition-colors"
                  >
                    600 Ft/óra
                  </a>
                  <a
                    href="https://buy.stripe.com/eVqeVdeex8geeFeafn6g808"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-[14px] font-semibold text-navy bg-off-white border border-navy/[0.12] rounded-[6px] px-5 py-2 hover:bg-navy/[0.06] transition-colors"
                  >
                    1.000 Ft/hó
                  </a>
                  <a
                    href="https://buy.stripe.com/00wcN54DX3ZY0Oobjr6g807"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-[14px] font-semibold text-navy bg-off-white border border-navy/[0.12] rounded-[6px] px-5 py-2 hover:bg-navy/[0.06] transition-colors"
                  >
                    10.000 Ft/év
                  </a>
                </div>

                <p className="text-[15px] text-[#444] leading-[1.8] mb-5">
                  EGÉSZSÉG témában minden pénteken 17.00–18.00 között lehet feltenni kérdéseket, amelyre 5–10 perc / kérdező időkeretben konkrét választ adok.
                </p>

                <a
                  href="#online-webinar"
                  className="btn-primary inline-block font-body text-[15px] font-semibold text-navy bg-cyan rounded-[6px] px-7 py-3 hover:bg-cyan/80"
                >
                  Webinar Jelentkezés &rarr;
                </a>

                <ProgramContactCta />
              </div>
            </div>
          </Reveal>

          {/* EVENT 2 — Sorsfordito Nagy Utazas */}
          <Reveal direction="left" delay={0.18}>
            <div className="bg-white rounded-[12px] border border-navy/[0.08] shadow-[0_4px_24px_rgba(21,46,122,0.06)] p-8 md:p-10">
              <p className="text-[17px] font-semibold text-cyan italic mb-6 leading-[1.5]">
                „Az Egészség a Legnagyobb Érték."
              </p>

              <p className="text-[16px] text-[#444] leading-[1.8] mb-6">
                2026. július 4-től minden szombaton Keszthelyen, a Balaton-parton 12.00–14.00 között találkozom az oda érkező zarándokokkal, és beavatom a jelenlévőket abba a tudásba, amely nekem rendelkezésemre áll „Egészséges Életmód" témában.
              </p>

              <div className="bg-off-white rounded-[8px] p-5 mb-6 border-l-[3px] border-cyan">
                <h4 className="font-display text-[17px] font-bold text-navy mb-3">
                  Indulás előtti gyülekező:
                </h4>
                <p className="text-[15px] text-[#444] leading-[1.8] mb-4">
                  Budapest, Kelenföld vasútállomás jegypénztáránál 8.10–8.30 között.
                </p>

                <h4 className="font-display text-[17px] font-bold text-navy mb-2">
                  Indulás:
                </h4>
                <p className="text-[15px] text-[#444] leading-[1.8] mb-4">
                  8.42-kor Kelenföld vasútállomásról.
                </p>

                <p className="text-[15px] text-[#444] leading-[1.8] mb-4">
                  Kelenföld és Keszthely között bármelyik vasútállomáson fel lehet szállni a vonatra a menetjegy és a helyjegy előzetes megvásárlását követően, és lehet csatlakozni a büfékocsiban tartózkodó utastársakhoz.
                </p>

                <h4 className="font-display text-[17px] font-bold text-navy mb-2">
                  Érkezés Keszthely vasútállomásra:
                </h4>
                <p className="text-[15px] text-[#444] leading-[1.8]">
                  11.11-kor.
                </p>
              </div>

              <p className="text-[15px] text-[#444] leading-[1.8] mb-2">
                A Keszthelyen 12.00–14.00 között tartandó „Egészséges Életmód Áldás" programon való részvételi díj:
              </p>
              <p className="text-[17px] font-bold text-navy mb-1">
                9.000 Ft / fő
              </p>
              <p className="text-[15px] text-[#444] mb-6">
                Az útiköltség + étel-ital a büfékocsiban egyénileg külön fizetendő.
              </p>

              <a
                href="https://buy.stripe.com/bJecN5gmFbsqcx6gDL6g806"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block font-body text-[15px] font-semibold text-white bg-navy rounded-[6px] px-7 py-3 hover:bg-cobalt"
              >
                „Sorsfordító Nagy Utazás" Jelentkezés &rarr;
              </a>

              <ProgramContactCta />
            </div>
          </Reveal>

          {/* EVENT 3 — December 12 Budapest */}
          <Reveal direction="left" delay={0.28}>
            <div className="bg-white rounded-[12px] border border-navy/[0.08] shadow-[0_4px_24px_rgba(21,46,122,0.06)] p-8 md:p-10">
              <p className="text-[17px] font-semibold text-cyan italic mb-6 leading-[1.5]">
                „Az Egészség a Legnagyobb Érték."
              </p>

              <p className="text-[16px] text-[#444] leading-[1.8] mb-4">
                2026. december 12-én, a Guadalupei Szűzanya tiszteletére rendezek egy országos eseményt Budapesten, hogy az „Öngyógyítás Felsőfokon" ökumenikus módszerrel azokat is tájékoztassam, akik mostanában kezdtek el foglalkozni a témával.
              </p>

              <p className="text-[16px] text-[#444] leading-[1.8] mb-6">
                Várom szeretettel azon résztvevőket is, akik már évtizedek óta foglalkoznak betegekkel, emberekkel, gyermekekkel akár orvosként, akár gyógyszerészként vagy ápolóként, esetleg természetgyógyászként, vallási vezetőként.
              </p>

              <a
                href="#kapcsolat"
                className="btn-primary inline-block font-body text-[15px] font-semibold text-white bg-navy rounded-[6px] px-7 py-3 hover:bg-cobalt"
              >
                Jelentkezés &rarr;
              </a>

              <ProgramContactCta />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
