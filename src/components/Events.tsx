import { useState, type ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from './Reveal';
import DiscountCountdown from './DiscountCountdown';
import spiralImage from '../assets/spiral-clock.png';
import { eventLocations, EventLocation } from '../data/events';

function ExpandableDetails({ id, children }: { id: string; children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-4 border-t border-navy/[0.08] pt-3">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={id}
        onClick={() => setIsOpen((open) => !open)}
        className="flex w-full items-center justify-between gap-4 text-left text-[14px] font-semibold text-navy hover:text-cobalt transition-colors"
      >
        <span>Mit tartalmaz?</span>
        <ChevronDown
          aria-hidden="true"
          size={18}
          strokeWidth={2}
          className={`shrink-0 transition-transform duration-250 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        id={id}
        aria-hidden={!isOpen}
        className={`grid transition-[grid-template-rows,opacity] duration-250 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="mt-3 border-l-[3px] border-cyan bg-[#F5FAFD] px-4 py-3 text-[14px] leading-[1.7] text-[#444]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

function BenefitList({ items, columns = 1 }: { items: string[]; columns?: 1 | 2 }) {
  return (
    <ul className={`mt-3 grid gap-x-4 gap-y-2 text-[13px] leading-[1.45] text-[#444] ${columns === 2 ? 'sm:grid-cols-2' : 'grid-cols-1'}`}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2">
          <span aria-hidden="true" className="mt-[0.45em] h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

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
      <div className="flex flex-col gap-3">
        {event.webinarOptions?.map((option) => (
          <div key={option.label} className="border border-navy/[0.08] rounded-[8px] p-4 flex flex-col gap-3">
            <p className="text-[15px] font-semibold text-navy">{option.label}</p>
            <p className="text-[17px] font-bold text-navy">{option.price}</p>
            <a
              href={option.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-payment w-full"
            >
              MEGVÁSÁROLOM
            </a>
          </div>
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
          className="btn-payment flex-1"
        >
          MEGVÁSÁROLOM
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
          className={`btn-payment flex-1 ${disabled ? 'opacity-40 pointer-events-none' : ''}`}
        >
          MEGVÁSÁROLOM
        </a>
        <a
          href={event.links?.double || '#'}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
          aria-disabled={disabled}
          tabIndex={disabled ? -1 : 0}
          className={`btn-payment flex-1 ${disabled ? 'opacity-40 pointer-events-none' : ''}`}
        >
          MEGVÁSÁROLOM
        </a>
        <a
          href={event.links?.triple || '#'}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
          aria-disabled={disabled}
          tabIndex={disabled ? -1 : 0}
          className={`btn-payment flex-1 ${disabled ? 'opacity-40 pointer-events-none' : ''}`}
        >
          MEGVÁSÁROLOM
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
              <p className="text-[18px] text-navy font-bold mb-2">
                Budapest
              </p>
              <p className="text-[15px] text-navy font-semibold mb-1">
                2026. szeptember 13. vasárnap
              </p>
              <p className="text-[15px] text-navy font-semibold mb-8">
                2026. szeptember 27. vasárnap
              </p>

              <div className="bg-[#F8FAFC] border border-navy/[0.08] rounded-[8px] p-5 mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <p className="text-[15px] text-[#444] leading-[1.6]">
                  Amennyiben kérdése van a részleteket illetően, akkor kattintson az alábbi gombra!
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

                <div className="flex flex-col gap-3 mb-6">
                  <div className="border border-navy/[0.08] rounded-[8px] p-4 flex flex-col gap-3">
                    <p className="text-[15px] font-semibold text-navy">Éves bérlet</p>
                    <p className="text-[17px] font-bold text-navy">10.000 Ft</p>
                    <a
                      href="https://buy.stripe.com/00wcN54DX3ZY0Oobjr6g807"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-payment w-full"
                    >
                      MEGVÁSÁROLOM
                    </a>
                  </div>
                  <div className="border border-navy/[0.08] rounded-[8px] p-4 flex flex-col gap-3">
                    <p className="text-[15px] font-semibold text-navy">Havi bérlet</p>
                    <p className="text-[17px] font-bold text-navy">1.000 Ft</p>
                    <a
                      href="https://buy.stripe.com/eVqeVdeex8geeFeafn6g808"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-payment w-full"
                    >
                      MEGVÁSÁROLOM
                    </a>
                  </div>
                  <div className="border border-navy/[0.08] rounded-[8px] p-4 flex flex-col gap-3">
                    <p className="text-[15px] font-semibold text-navy">Egyszeri alkalom</p>
                    <p className="text-[17px] font-bold text-navy">600 Ft</p>
                    <a
                      href="https://buy.stripe.com/6oU4gz0nHfIG40A0EN6g809"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-payment w-full"
                    >
                      MEGVÁSÁROLOM
                    </a>
                  </div>
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

          {/* EVENT 2 — December 12 Budapest Konferencia Jegyek */}
          <Reveal direction="left" delay={0.18}>
            <div id="egeszseg-konferencia-jegy" style={{ scrollMarginTop: '110px' }} className="bg-white rounded-[12px] border border-navy/[0.08] shadow-[0_4px_24px_rgba(21,46,122,0.06)] p-8 md:p-10">
              <p className="text-[17px] font-semibold text-cyan italic mb-6 leading-[1.5]">
                „Az Egészség a Legnagyobb Érték."
              </p>

              <p className="text-[16px] text-[#444] leading-[1.8] mb-4">
                2026. december 12-én, a Guadalupei Szűzanya védőszent napján rendezek egy országos eseményt Budapesten, hogy az „Öngyógyítás Felsőfokon" ökumenikus módszerrel azokat is tájékoztassam, akik mostanában kezdtek el foglalkozni a témával.
              </p>

              <p className="text-[16px] text-[#444] leading-[1.8] mb-6">
                Várom szeretettel azon résztvevőket is, akik már évtizedek óta foglalkoznak betegekkel, emberekkel, gyermekekkel akár orvosként, akár gyógyszerészként vagy ápolóként, esetleg természetgyógyászként, vallási vezetőként.
              </p>

              <div className="mb-8">
                <h3
                  className="font-display font-bold text-navy leading-[1.15] tracking-[-0.01em]"
                  style={{ fontSize: 'clamp(26px, 3.5vw, 38px)' }}
                >
                  Egészség a Legnagyobb Érték – Országos<br className="hidden sm:inline" /> Egészségmegőrző és Életmód konferencia
                </h3>
                <p className="text-[17px] sm:text-[19px] font-bold text-navy mt-2 leading-[1.4]">
                  2026. december 12., szombat 9.00-17.00 Budapest
                </p>
                <div className="mt-3">
                  <span className="inline-block text-[15px] font-semibold text-navy border border-navy/[0.15] bg-[#f5f6f8] rounded-[6px] px-5 py-2">
                    Smaragd Partner
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                {/* Smaragd Partner */}
                <div className="border border-navy/[0.08] rounded-[10px] p-5">
                  <p className="text-[15px] font-semibold text-navy">Smaragd Partner 2 nm kiállítás +20 db jegy +1 db VIP jegy</p>
                  <p className="text-[17px] font-bold text-navy mt-1">500.000 Ft</p>
                  <BenefitList
                    columns={2}
                    items={[
                      '2 m² kiállítói felület',
                      '20 db normál belépőjegy',
                      '2 db ebédjegy',
                      '2 db vacsorajegy',
                      'szponzori logómegjelenés',
                    ]}
                  />
                  <a
                    href="https://buy.stripe.com/4gM00j6M5fIG2WwfzH6g80a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-payment w-full mt-4"
                  >
                    MEGVÁSÁROLOM
                  </a>
                  <ExpandableDetails id="smaragd-details">
                    A Smaragd Partner az „Egészség a Legnagyobb Érték – Országos Egészségmegőrző és Életmód Konferencia Budapest" szponzora, aki a helyszínen 2 m² kiállítói felületen bemutathatja termékeit, valamint az esemény kommunikációs felületein feltüntetésre kerül a szponzor logója. A Smaragd Partner szponzori jegyet megvásárló 20 db normál belépőjegyet, 2 db ebédjegyet és 2 db vacsorajegyet kap.
                  </ExpandableDetails>
                </div>

                {/* VIP jegy */}
                <div className="border border-navy/[0.08] rounded-[10px] p-5">
                  <p className="text-[15px] font-semibold text-navy">VIP jegy</p>
                  <p className="text-[17px] font-bold text-navy mt-1">250.000 Ft / 2 fő</p>
                  <BenefitList
                    items={[
                      '2 fő részére',
                      'egész napos program',
                      'ebéd',
                      'VIP vacsora',
                      '2 éjszaka szállás',
                    ]}
                  />
                  <a
                    href="https://buy.stripe.com/9B6bJ14DXbsq7cM0EN6g80b"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-payment w-full mt-4"
                  >
                    MEGVÁSÁROLOM
                  </a>
                  <ExpandableDetails id="vip-details">
                    A 2026. december 12-én szombaton tartandó „Egészség a Legnagyobb Érték – Országos Egészségmegőrző és Életmód" konferencia utáni VIP vacsora belépőjegyének ára az egész napos programon való részvételt is tartalmazza ebéddel. A VIP jegy 2 főre szól, és tartalmazza a péntek és a szombat éjszakai szállás költségét is egy közeli hotelben.
                  </ExpandableDetails>
                </div>

                {/* Időszakos kedvezmény + visszaszámláló */}
                <DiscountCountdown />

                {/* Kiállítói jegy */}
                <div className="border border-cyan/40 rounded-[10px] p-5 bg-[#F8FBFD]">
                  <p className="text-[15px] font-semibold text-navy">Kiállítói jegy</p>
                  <p className="text-[17px] font-bold text-navy mt-1">90.000 Ft</p>
                  <BenefitList
                    items={[
                      '2 m² kiállítói stand',
                      '10 db belépőjegy',
                      '2026. december 12.',
                      '9.00–17.00',
                    ]}
                  />
                  <a
                    href="https://buy.stripe.com/14A28rc6p3ZYgNmfzH6g80g"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-payment w-full mt-4"
                  >
                    MEGVÁSÁROLOM
                  </a>
                  <ExpandableDetails id="kiallitoi-details">
                    2026. december 12-én szombaton 9.00–17.00 között rendezzük meg az emberi szervezet öngyógyító képességeit bemutató előadásokat, amelyre várunk szeretettel mindenkit, aki az alternatív gyógyászat, az öngyógyítás és az egészségmegőrzés terén új dolgokat szeretne megtanulni, valamint érdeklődik a tudatalatti programok működése iránt.
                  </ExpandableDetails>
                </div>

                {/* Belépőjegy */}
                <div className="border border-navy/[0.08] rounded-[10px] p-5">
                  <p className="text-[15px] font-semibold text-navy">Belépőjegy</p>
                  <p className="text-[17px] font-bold text-navy mt-1">9.000 Ft / fő</p>
                  <a
                    href="https://buy.stripe.com/cNi00j7Q968654E9bj6g80c"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-payment w-full mt-4"
                  >
                    MEGVÁSÁROLOM
                  </a>
                </div>

                {/* On-line jegy – 6.900 Ft */}
                <div className="border border-cyan/40 rounded-[10px] p-5 bg-[#F8FBFD]">
                  <p className="text-[15px] font-semibold text-navy">On-line jegy</p>
                  <p className="text-[17px] font-bold text-navy mt-1">6.900 Ft</p>
                  <p className="text-[13px] text-[#666] mt-1">Élő online részvétel + a konferencia teljes felvétele utólag e-mailben.</p>
                  <a
                    href="https://link.fastpaydirect.com/payment-link/6a95838dd6768df054448dae"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-payment w-full mt-4"
                  >
                    MEGVÁSÁROLOM
                  </a>
                  <ExpandableDetails id="online-jegy-details">
                    Konferencia internetes jegy. Az „Egészség a Legnagyobb Érték – Országos Egészségmegőrző és Életmód Konferencia Budapest" esemény internetes jegyének ára, amely magában foglalja az Élő Adáshoz történő csatlakozás lehetőségét, valamint a konferenciát követően e-mail levélben megkapja a konferenciáról készült felvételeket.
                  </ExpandableDetails>
                </div>

                {/* Off-line jegy – 5.000 Ft */}
                <div className="border border-navy/[0.08] rounded-[10px] p-5">
                  <p className="text-[15px] font-semibold text-navy">Off-line jegy</p>
                  <p className="text-[17px] font-bold text-navy mt-1">5.000 Ft</p>
                  <p className="text-[13px] text-[#666] mt-1">Ha nem tud részt venni az eseményen, a teljes konferenciafelvételt utólag e-mailben küldjük el.</p>
                  <a
                    href="https://link.fastpaydirect.com/payment-link/6a958523f9c8c807930baf96"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-payment w-full mt-4"
                  >
                    MEGVÁSÁROLOM
                  </a>
                  <ExpandableDetails id="offline-felvetel-details">
                    Internetes kedvezményes jegy. Ez az internetes kedvezményes jegy a 2026. december 12-én tartandó eseményről készült felvétel megrendelésének az ára. Amennyiben nem tud részt venni az eseményen, vagy aznap más elfoglaltsága van, akkor e-mail levélben utólag elküldjük Önnek a teljes felvételt.
                  </ExpandableDetails>
                </div>
              </div>

              <p
                className="text-center mt-4"
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

              <ProgramContactCta />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
