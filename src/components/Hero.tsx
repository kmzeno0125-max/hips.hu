import { useEffect, useState } from 'react';
import pendulumImage from '../assets/files_8595244-2026-05-21T09-14-35-749Z-image.png';

const profileImage = '/files_8595244-2026-05-21T16-48-03-362Z-files_8595244-2026-05-21T16-40-25-631Z-image.webp';

const badges = [
  'Szakgyógyszerész',
  'Biologika konzulens',
  'Hipnoterapeuta',
  'Aranykori Öngyógyítás',
];

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen bg-white pt-[72px] flex items-center overflow-hidden">
      {/* Pendulum background image - visible atmospheric layer on right */}
      <div className="absolute top-0 right-0 w-[55%] h-full pointer-events-none hidden lg:block">
        <img
          src={pendulumImage}
          alt=""
          className="w-full h-full object-cover"
          style={{
            filter: 'blur(3px) saturate(0.4)',
            opacity: 0.14,
            maskImage: 'linear-gradient(to right, transparent 0%, black 40%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 40%)',
          }}
        />
      </div>

      {/* Soft gradient over background */}
      <div
        className="absolute top-0 right-0 w-[55%] h-full pointer-events-none hidden lg:block"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.85) 0%, rgba(77,197,232,0.05) 60%, rgba(21,46,122,0.03) 100%)',
        }}
      />

      {/* Decorative rings behind profile photo */}
      <div className="absolute top-[50%] right-[15%] -translate-y-1/2 pointer-events-none hidden lg:block">
        <div className="w-[360px] h-[360px] rounded-full border-[1.5px] border-cyan/[0.12]" />
        <div className="absolute inset-[30px] rounded-full border border-navy/[0.07]" />
        <div className="absolute inset-[60px] rounded-full border border-cyan/[0.09] border-dashed" />
      </div>

      <div className="max-w-[1280px] mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 py-20 lg:py-24 relative z-10">
        {/* Left: Text content */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <span
            className="font-body font-bold tracking-[0.14em] uppercase text-cyan mb-6 block"
            style={{
              fontSize: 'clamp(13px, 1.2vw, 18px)',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : 'translateX(-32px)',
              transition: 'opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.12s, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.12s',
            }}
          >
            Holisztikus egészség &middot; Öngyógyítás
          </span>

          <h1
            className="font-display font-extrabold text-navy leading-[1.05] tracking-tight mb-7"
            style={{ fontSize: 'clamp(40px, 7vw, 100px)' }}
          >
            <span
              className="block"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateX(0)' : 'translateX(-28px)',
                transition: 'opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.24s, transform 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.24s',
              }}
            >
              A változás
            </span>
            <span
              className="text-cyan block"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(12px)',
                transition: 'opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.4s, transform 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.4s',
              }}
            >
              te magad vagy.
            </span>
          </h1>

          <p
            className="font-body text-[#444] max-w-[540px] mb-10 leading-[1.7]"
            style={{
              fontSize: 'clamp(16px, 1.4vw, 20px)',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.48s, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.48s',
            }}
          >
            Szemléletformáló, élményalapú programok szerte az országban. Csatlakozz
            és ismerd meg tested biológiai összefüggéseit egy inspiráló közösségben.
          </p>

          <div
            className="flex flex-wrap gap-5 mb-14"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.58s, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.58s',
            }}
          >
            <a
              href="#esemenyek"
              className="btn-primary font-body text-[17px] font-semibold bg-cyan text-navy px-9 py-4 rounded-[6px]"
            >
              Öngyógyító Napok
            </a>
            <a
              href="#rolam"
              className="btn-secondary font-body text-[17px] font-semibold text-navy border-[1.5px] border-navy/30 px-9 py-4 rounded-[6px] hover:border-navy"
            >
              Tudj meg többet
            </a>
          </div>

          <div
            className="flex flex-wrap gap-7"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.7s, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.7s',
            }}
          >
            {badges.map((badge) => (
              <div key={badge} className="border-l-[3px] border-cyan pl-4">
                <span className="font-body text-[14px] lg:text-[15px] font-medium text-navy/80">
                  {badge}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Profile photo - PROMINENTLY VISIBLE */}
        <div
          className="hidden lg:flex lg:col-span-5 items-center justify-center relative"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateX(0)' : 'translateX(40px)',
            transition: 'opacity 1s cubic-bezier(0.22, 1, 0.36, 1) 0.5s, transform 1s cubic-bezier(0.22, 1, 0.36, 1) 0.5s',
          }}
        >
          <div className="relative">
            {/* Soft glow behind photo */}
            <div className="absolute inset-[-24px] rounded-full bg-gradient-to-br from-cyan/25 via-cyan/10 to-navy/15 blur-[25px]" />

            {/* PROFILE IMAGE - fully visible, large, circular */}
            <div className="relative w-[420px] h-[420px] rounded-full overflow-hidden shadow-[0_24px_64px_rgba(21,46,122,0.22)] border-[5px] border-white">
              <img
                src={profileImage}
                alt="Dr. Hips Frigyes Zsolt"
                className="w-full h-full object-cover"
                style={{ objectPosition: '50% 20%' }}
              />
            </div>

            {/* Floating experience badge */}
            <div className="hero-float absolute -bottom-5 -left-10 bg-white rounded-[10px] shadow-[0_8px_28px_rgba(21,46,122,0.14)] px-5 py-3 border-l-[3px] border-cyan">
              <span className="font-display text-[15px] font-bold text-navy block">25 év</span>
              <span className="font-body text-[12px] text-[#666]">tapasztalat</span>
            </div>

            {/* Small pendulum accent circle */}
            <div className="absolute -top-2 -right-4 w-[72px] h-[72px] rounded-full overflow-hidden shadow-lg border-[3px] border-white">
              <img
                src={pendulumImage}
                alt="Hipnózis"
                className="w-full h-full object-cover"
                style={{ filter: 'saturate(0.5) brightness(1.1)' }}
              />
            </div>
          </div>
        </div>

        {/* Mobile: profile photo below text */}
        <div
          className="lg:hidden flex justify-center mt-4"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.6s, transform 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.6s',
          }}
        >
          <div className="w-[260px] h-[260px] rounded-full overflow-hidden shadow-[0_16px_48px_rgba(21,46,122,0.18)] border-[4px] border-white">
            <img
              src={profileImage}
              alt="Dr. Hips Frigyes Zsolt"
              className="w-full h-full object-cover"
              style={{ objectPosition: '50% 20%' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
