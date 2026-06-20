import { ArrowRight } from 'lucide-react';
import Reveal from './Reveal';
import pendulumImage from '../assets/files_8595244-2026-05-21T09-14-35-749Z-image.png';
import therapyImage from '../assets/files_8595244-2026-05-21T09-14-29-499Z-image.png';

const services = [
  {
    title: 'Biologika konzultáció',
    description:
      'A tünetek mögötti biológiai összefüggések feltárása egyéni konzultáció keretében, ahol megértheted tested jelzéseit.',
    visual: 'cell',
    href: 'mailto:hips.hu@gmail.com',
    target: undefined,
  },
  {
    title: 'Hipnoterápia',
    description:
      'Tudatalatti minták feltárása és átalakítása hipnotikus állapotban, a belső erőforrások aktiválásáért.',
    visual: 'pendulum',
    href: 'https://subscribepage.io/Dr-Hips-Frigyes-Zsolt',
    target: '_blank',
  },
  {
    title: 'Tudatos Sejtszintű Programozás',
    description:
      'A sejtek szintjén tárolt információk tudatos átalakítása, a test és elme mélyebb összhangjáért.',
    visual: 'therapy',
    href: 'https://kti.apostolimagyarkiralysag.org/TAN-folyam/tudatos-sejtszintu-programozas',
    target: '_blank',
  },
  {
    title: 'Aranykori Öngyógyítás',
    description:
      'Oktatási program, amely az ősi tudás és a modern szemlélet ötvözésével támogatja az önismereti folyamatot.',
    visual: 'harmony',
    href: 'https://youtu.be/8N9Zweb9gg0?is=vWyktxWtMcM4NVO9',
    target: '_blank',
  },
];

function CardVisual({ type }: { type: string }) {
  if (type === 'pendulum') {
    return (
      <div className="absolute top-0 right-0 w-[120px] h-[120px] pointer-events-none overflow-hidden rounded-bl-[20px]">
        <img
          src={pendulumImage}
          alt=""
          className="w-full h-full object-cover"
          style={{ filter: 'saturate(0.3) brightness(1.2)', opacity: 0.25 }}
        />
        <div className="absolute inset-0 bg-cobalt/50" />
      </div>
    );
  }
  if (type === 'therapy') {
    return (
      <div className="absolute top-0 right-0 w-[120px] h-[120px] pointer-events-none overflow-hidden rounded-bl-[20px]">
        <img
          src={therapyImage}
          alt=""
          className="w-full h-full object-cover"
          style={{ filter: 'saturate(0.3) brightness(1.1)', opacity: 0.2 }}
        />
        <div className="absolute inset-0 bg-cobalt/50" />
      </div>
    );
  }
  if (type === 'cell') {
    return (
      <div className="absolute top-4 right-4 w-[80px] h-[80px] pointer-events-none" style={{ opacity: 0.15 }}>
        <svg viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="25" stroke="#4DC5E8" strokeWidth="1" />
          <circle cx="30" cy="30" r="12" stroke="#4DC5E8" strokeWidth="0.7" />
          <circle cx="70" cy="35" r="10" stroke="#fff" strokeWidth="0.5" />
          <line x1="42" y1="38" x2="55" y2="45" stroke="#4DC5E8" strokeWidth="0.5" strokeDasharray="2 2" />
          <line x1="55" y1="50" x2="65" y2="40" stroke="#fff" strokeWidth="0.4" strokeDasharray="2 3" />
          <circle cx="50" cy="50" r="4" fill="#4DC5E8" fillOpacity="0.3" />
        </svg>
      </div>
    );
  }
  return (
    <div className="absolute bottom-4 right-4 w-[80px] h-[80px] pointer-events-none" style={{ opacity: 0.12 }}>
      <svg viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="20" stroke="#4DC5E8" strokeWidth="0.8" />
        <circle cx="50" cy="50" r="32" stroke="#fff" strokeWidth="0.5" strokeDasharray="3 3" />
        <circle cx="50" cy="50" r="44" stroke="#4DC5E8" strokeWidth="0.4" strokeDasharray="2 5" />
        <circle cx="50" cy="50" r="4" fill="#4DC5E8" fillOpacity="0.25" />
      </svg>
    </div>
  );
}

export default function Services() {
  return (
    <section id="szolgaltatasok" className="relative py-24 overflow-hidden">
      {/* Section background - pendulum image, blurred */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={pendulumImage}
          alt=""
          className="w-full h-full object-cover"
          style={{ filter: 'blur(5px) saturate(0.2)', opacity: 0.1 }}
        />
      </div>
      <div className="absolute inset-0 bg-navy/[0.92] pointer-events-none" />

      <div className="max-w-[1100px] mx-auto px-6 relative z-10">
        <Reveal direction="left" delay={0}>
          <span className="font-body text-[11px] font-semibold tracking-[0.1em] uppercase text-cyan mb-4 block">
            Megközelítés
          </span>
        </Reveal>
        <Reveal direction="left" delay={0.1}>
          <h2
            className="font-display font-bold text-white mb-4 tracking-normal"
            style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}
          >
            Szolgáltatások
          </h2>
        </Reveal>
        <Reveal direction="up" delay={0.15}>
          <p className="font-body text-[16px] text-white/60 max-w-[520px] leading-[1.7] mb-12">
            Minden szolgáltatásom a belső erőforrások aktiválását és a tudatos szemléletváltást támogatja.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((service, i) => (
            <Reveal key={service.title} direction="up" delay={0.12 + i * 0.1}>
              <a
                href={service.href}
                target={service.target}
                rel={service.target === '_blank' ? 'noopener noreferrer' : undefined}
                className="service-card relative rounded-[14px] overflow-hidden group min-h-[220px] bg-cobalt block"
              >
                <CardVisual type={service.visual} />

                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-cyan/80 via-cyan/40 to-transparent" />

                {/* Content */}
                <div className="relative z-10 p-9">
                  <h3 className="font-display text-[20px] font-bold text-white mb-3 tracking-normal">
                    {service.title}
                  </h3>
                  <p className="font-body text-[15px] text-white/70 leading-[1.7] mb-6">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2 text-cyan">
                    <span className="font-body text-[13px] font-semibold">Részletek</span>
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform duration-200"
                    />
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
