import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Reveal from './Reveal';

const faqs = [
  {
    question: 'Kinek ajánlott az Öngyógyító Nap?',
    answer:
      'Mindenkinek, aki nyitott a szemléletváltásra és szeretné megérteni a tünetek mögötti biológiai összefüggéseket. Nem szükséges előzetes tudás vagy tapasztalat.',
  },
  {
    question: 'Kell-e előzetes tapasztalat?',
    answer:
      'Nem, a programok úgy vannak felépítve, hogy a kezdők is könnyedén bekapcsolódhassanak. Az alapfogalmakat közösen áttekintjük.',
  },
  {
    question: 'Mit tartalmaz pontosan a program?',
    answer:
      'Egy teljes napos esemény, amely előadásokat, gyakorlati bemutatókat és interaktív workshopot tartalmaz. A részletes tematikát és a helyszínt a jelentkezés után küldjük el.',
  },
  {
    question: 'Hogyan zajlik a Stripe-on keresztüli fizetés?',
    answer:
      'A "Jelentkezem" gombra kattintva a Stripe biztonságos fizetési oldalára kerülsz, ahol bankkártyával fizethetsz. A tranzakció titkosított és biztonságos.',
  },
  {
    question: 'Mi történik lemondás esetén?',
    answer:
      'A program előtt több mint 7 nappal történő lemondás esetén a teljes összeget visszatérítjük. 6 vagy kevesebb nappal a program előtt lemondás már nem lehetséges, de a részvételi díj 50%-át visszautaljuk. A részvételi jog másra átruházható.',
  },
  {
    question: 'Hogyan vehetek részt online vagy személyesen?',
    answer:
      'Az online konzultációs lehetőségek adottak. A részleteket a pénteki webináron részletesen átbeszéljük.',
  },
];

function EyeDecoration() {
  return (
    <svg
      className="absolute top-[8%] right-[-5%] w-[420px] h-[420px] pointer-events-none opacity-[0.06] hidden lg:block"
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="200" cy="200" rx="160" ry="90" stroke="currentColor" strokeWidth="1.2" className="text-cyan" />
      <ellipse cx="200" cy="200" rx="130" ry="70" stroke="currentColor" strokeWidth="0.8" className="text-white" />
      <circle cx="200" cy="200" r="45" stroke="currentColor" strokeWidth="1.5" className="text-cyan" />
      <circle cx="200" cy="200" r="28" stroke="currentColor" strokeWidth="0.8" className="text-white" />
      <circle cx="200" cy="200" r="12" fill="currentColor" className="text-cyan" fillOpacity="0.3" />
      <path d="M40 200 Q120 130 200 110 Q280 130 360 200" stroke="currentColor" strokeWidth="0.6" className="text-white" />
      <path d="M40 200 Q120 270 200 290 Q280 270 360 200" stroke="currentColor" strokeWidth="0.6" className="text-white" />
    </svg>
  );
}

function ClockDecoration() {
  return (
    <svg
      className="absolute bottom-[5%] left-[-8%] w-[380px] h-[380px] pointer-events-none opacity-[0.05] hidden lg:block"
      viewBox="0 0 360 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="180" cy="180" r="155" stroke="currentColor" strokeWidth="1.2" className="text-cyan" />
      <circle cx="180" cy="180" r="140" stroke="currentColor" strokeWidth="0.6" className="text-white" strokeDasharray="4 6" />
      <circle cx="180" cy="180" r="125" stroke="currentColor" strokeWidth="0.8" className="text-cyan" />
      <circle cx="180" cy="180" r="5" fill="currentColor" className="text-cyan" fillOpacity="0.5" />
      {/* Hour marks */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 30 - 90) * (Math.PI / 180);
        const x1 = 180 + 135 * Math.cos(angle);
        const y1 = 180 + 135 * Math.sin(angle);
        const x2 = 180 + 145 * Math.cos(angle);
        const y2 = 180 + 145 * Math.sin(angle);
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="currentColor"
            strokeWidth={i % 3 === 0 ? '2' : '1'}
            className="text-cyan"
          />
        );
      })}
      {/* Clock hands */}
      <line x1="180" y1="180" x2="180" y2="80" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-white" />
      <line x1="180" y1="180" x2="240" y2="150" stroke="currentColor" strokeWidth="1" strokeLinecap="round" className="text-cyan" />
      {/* Spiral accent */}
      <path
        d="M180 180 C180 160 195 150 200 155 C205 160 195 170 185 168 C175 166 170 158 178 152 C186 146 198 148 202 158"
        stroke="currentColor"
        strokeWidth="0.6"
        className="text-white"
        fill="none"
      />
    </svg>
  );
}

function ConcentricRingsDecoration() {
  return (
    <svg
      className="absolute top-[40%] left-[3%] w-[240px] h-[240px] pointer-events-none opacity-[0.04] hidden xl:block"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="0.8" className="text-cyan" />
      <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="0.6" className="text-white" strokeDasharray="3 5" />
      <circle cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="0.8" className="text-cyan" />
      <circle cx="100" cy="100" r="30" stroke="currentColor" strokeWidth="0.5" className="text-white" />
      <circle cx="100" cy="100" r="10" stroke="currentColor" strokeWidth="1" className="text-cyan" />
    </svg>
  );
}

function GeometricAccent() {
  return (
    <svg
      className="absolute top-[12%] left-[8%] w-[160px] h-[160px] pointer-events-none opacity-[0.04] hidden lg:block"
      viewBox="0 0 140 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon points="70,10 130,45 130,95 70,130 10,95 10,45" stroke="currentColor" strokeWidth="0.8" className="text-cyan" />
      <polygon points="70,25 115,52 115,88 70,115 25,88 25,52" stroke="currentColor" strokeWidth="0.5" className="text-white" />
      <polygon points="70,40 100,58 100,82 70,100 40,82 40,58" stroke="currentColor" strokeWidth="0.6" className="text-cyan" />
    </svg>
  );
}

function WaveDecoration() {
  return (
    <svg
      className="absolute bottom-[15%] right-[3%] w-[200px] h-[120px] pointer-events-none opacity-[0.05] hidden xl:block"
      viewBox="0 0 200 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 50 Q25 30 50 50 Q75 70 100 50 Q125 30 150 50 Q175 70 200 50" stroke="currentColor" strokeWidth="1" className="text-cyan" />
      <path d="M0 60 Q25 40 50 60 Q75 80 100 60 Q125 40 150 60 Q175 80 200 60" stroke="currentColor" strokeWidth="0.6" className="text-white" />
      <path d="M0 40 Q25 20 50 40 Q75 60 100 40 Q125 20 150 40 Q175 60 200 40" stroke="currentColor" strokeWidth="0.6" className="text-white" />
    </svg>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="gyik" className="relative py-28 overflow-hidden">
      {/* Rich multi-layer gradient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(145deg, #080f1f 0%, #0c1a3a 15%, #112555 35%, #183d78 55%, #153068 75%, #0d1e44 90%, #080f1f 100%)',
        }}
      />

      {/* Radial light spots for depth */}
      <div
        className="absolute top-[-10%] right-[20%] w-[500px] h-[500px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(77,197,232,0.06) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute bottom-[-5%] left-[15%] w-[400px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(30,80,180,0.08) 0%, transparent 65%)',
        }}
      />
      <div
        className="absolute top-[50%] right-[5%] w-[300px] h-[300px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(77,197,232,0.04) 0%, transparent 60%)',
        }}
      />

      {/* Line-art decorative elements */}
      <EyeDecoration />
      <ClockDecoration />
      <ConcentricRingsDecoration />
      <GeometricAccent />
      <WaveDecoration />

      {/* Large concentric background rings - centered */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <svg className="w-[900px] h-[900px] opacity-[0.025]" viewBox="0 0 900 900" fill="none">
          <circle cx="450" cy="450" r="440" stroke="white" strokeWidth="0.5" />
          <circle cx="450" cy="450" r="360" stroke="#4dc5e8" strokeWidth="0.6" strokeDasharray="2 8" />
          <circle cx="450" cy="450" r="280" stroke="white" strokeWidth="0.4" />
          <circle cx="450" cy="450" r="200" stroke="#4dc5e8" strokeWidth="0.5" strokeDasharray="4 12" />
          <circle cx="450" cy="450" r="120" stroke="white" strokeWidth="0.3" />
        </svg>
      </div>

      {/* Subtle bottom wave */}
      <svg
        className="absolute bottom-0 left-0 w-full h-[120px] pointer-events-none opacity-[0.05]"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,60 C240,90 480,30 720,60 C960,90 1200,30 1440,60 L1440,120 L0,120 Z"
          fill="url(#faqWaveGrad)"
        />
        <defs>
          <linearGradient id="faqWaveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4dc5e8" />
            <stop offset="50%" stopColor="#1e50b4" />
            <stop offset="100%" stopColor="#4dc5e8" />
          </linearGradient>
        </defs>
      </svg>

      {/* Content */}
      <div className="max-w-[800px] mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <Reveal direction="up" delay={0}>
            <span className="font-body text-[11px] font-semibold tracking-[0.18em] uppercase text-cyan/90 mb-4 block">
              Gyakori kérdések
            </span>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <h2
              className="font-display font-bold text-white tracking-tight relative inline-block"
              style={{ fontSize: 'clamp(32px, 4.5vw, 52px)' }}
            >
              GYIK
              <span
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 h-[3px] rounded-full"
                style={{ background: 'linear-gradient(90deg, transparent, #4dc5e8, transparent)' }}
              />
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.15}>
            <p className="font-body text-[15px] text-white/50 mt-6 max-w-[480px] mx-auto leading-relaxed">
              Válaszok a leggyakrabban felmerülő kérdésekre az Öngyógyító Napokkal kapcsolatban.
            </p>
          </Reveal>
        </div>

        {/* Accordion items */}
        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={i} direction="up" delay={0.08 + i * 0.05}>
                <div
                  className={`
                    relative rounded-[14px] transition-all duration-400 ease-out
                    ${isOpen
                      ? 'bg-white/[0.09] shadow-[0_8px_40px_rgba(77,197,232,0.1),inset_0_1px_0_rgba(255,255,255,0.12)] border border-cyan/25'
                      : 'bg-white/[0.04] hover:bg-white/[0.07] border border-white/[0.08] hover:border-white/[0.16] shadow-[0_4px_20px_rgba(0,0,0,0.15)]'
                    }
                    backdrop-blur-sm
                  `}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between px-7 py-6 text-left group"
                  >
                    <span
                      className={`font-body text-[16px] font-semibold pr-6 tracking-normal transition-colors duration-300 ${
                        isOpen ? 'text-white' : 'text-white/90 group-hover:text-white'
                      }`}
                    >
                      {faq.question}
                    </span>
                    <span
                      className={`
                        flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300
                        ${isOpen
                          ? 'bg-cyan/20 shadow-[0_0_16px_rgba(77,197,232,0.25)] border border-cyan/30'
                          : 'bg-white/[0.06] border border-white/[0.1] group-hover:bg-white/[0.1] group-hover:border-white/[0.2]'
                        }
                      `}
                    >
                      {isOpen ? (
                        <Minus size={16} className="text-cyan" />
                      ) : (
                        <Plus size={16} className="text-cyan/70 group-hover:text-cyan transition-colors duration-300" />
                      )}
                    </span>
                  </button>
                  <div
                    className="faq-content"
                    style={{
                      maxHeight: isOpen ? '300px' : '0',
                      opacity: isOpen ? 1 : 0,
                      paddingBottom: isOpen ? '24px' : '0',
                    }}
                  >
                    <div className="px-7">
                      <div className="w-14 h-[1px] mb-4" style={{ background: 'linear-gradient(90deg, #4dc5e8, transparent)' }} />
                      <p className="font-body text-[15px] text-white/65 leading-[1.8]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
