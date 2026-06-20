import Reveal from './Reveal';
import aboutPortrait from '../assets/image copy copy copy.png';
import pendulumImage from '../assets/files_8595244-2026-05-21T09-14-35-749Z-image.png';

export default function About() {
  return (
    <section id="rolam" className="bg-white py-24 relative overflow-hidden">
      {/* Blurred pendulum as subtle right-side atmosphere */}
      <div className="absolute top-[10%] right-0 w-[300px] h-[400px] pointer-events-none hidden lg:block">
        <img
          src={pendulumImage}
          alt=""
          className="w-full h-full object-cover"
          style={{
            filter: 'blur(6px) saturate(0.25)',
            opacity: 0.08,
            maskImage: 'radial-gradient(ellipse, black 30%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(ellipse, black 30%, transparent 70%)',
          }}
        />
      </div>

      <div className="max-w-[1100px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
        {/* Left: Therapy consultation image - FULLY VISIBLE */}
        <Reveal direction="left" delay={0.1} className="lg:col-span-5">
          <div className="relative">
            <div className="w-full aspect-[4/5] rounded-[16px] overflow-hidden shadow-[0_20px_56px_rgba(21,46,122,0.16)] relative">
              <img
                src={aboutPortrait}
                alt="Dr. Hips Frigyes Zsolt portré"
                className="w-full h-full object-cover object-top"
              />
              {/* Very light overlay - image stays clearly visible */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/15 via-transparent to-transparent" />
            </div>

            {/* Accent gradient bar under image */}
            <div className="absolute -bottom-2 left-8 right-8 h-[4px] bg-gradient-to-r from-cyan via-cobalt to-navy rounded-full" />

            {/* Decorative glow spots */}
            <div className="absolute -top-5 -right-5 w-[80px] h-[80px] rounded-full bg-cyan/20 blur-[20px] hidden lg:block" />
          </div>
        </Reveal>

        {/* Right: Text content */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <Reveal direction="up" delay={0.15}>
            <span className="font-body text-[11px] font-semibold tracking-[0.1em] uppercase text-cyan mb-4 block">
              Rólam
            </span>
          </Reveal>
          <Reveal direction="up" delay={0.25}>
            <h2
              className="font-display font-bold text-navy mb-6 tracking-normal"
              style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}
            >
              Dr. Hips Frigyes Zsolt
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.35}>
            <p className="font-body text-[16px] text-[#2a2a2a] leading-[1.7] mb-4">
              Szakgyógyszerész, Biologika konzulens és hipnoterapeuta vagyok.
              Több mint egy évtizede foglalkozom a test és lélek összefüggéseivel,
              a biológiai törvényszerűségek gyakorlati alkalmazásával.
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.4}>
            <p className="font-body text-[16px] text-[#2a2a2a] leading-[1.7] mb-4">
              Munkám során nem gyógyítok — segítek megérteni a tünetek mögötti
              okokat, és támogatom az önismereti folyamatot, amelynek végén
              mindenki saját maga aktiválhatja belső erőforrásait.
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.45}>
            <p className="font-body text-[16px] text-[#2a2a2a] leading-[1.7] mb-8">
              Az Öngyógyító Napok programsorozattal Magyarország-szerte tartok
              szemléletformáló előadásokat és gyakorlati workshopokat.
            </p>
          </Reveal>

          <Reveal direction="up" delay={0.55}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="border-l-[3px] border-cyan pl-5 py-4 pr-5 bg-off-white rounded-r-[8px] shadow-sm">
                <span className="font-body text-[14px] font-semibold text-navy block mb-1">
                  Tudatos megközelítés
                </span>
                <span className="font-body text-[13px] text-[#666]">
                  A biológiai összefüggések megértése az alapja a szemléletváltásnak.
                </span>
              </div>
              <div className="border-l-[3px] border-cyan pl-5 py-4 pr-5 bg-off-white rounded-r-[8px] shadow-sm">
                <span className="font-body text-[14px] font-semibold text-navy block mb-1">
                  Személyre szabott út
                </span>
                <span className="font-body text-[13px] text-[#666]">
                  Mindenki saját tempójában, saját erőforrásait aktiválva halad előre.
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
