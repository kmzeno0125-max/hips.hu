import Reveal from './Reveal';
import { Mail } from 'lucide-react';

export default function Consultation() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-[720px] px-6 text-center">
        <Reveal direction="up" delay={0.1}>
          <h2 className="font-display text-[28px] sm:text-[34px] font-bold text-navy leading-[1.2] mb-5">
            Ingyenes 15 perces konzultáció
          </h2>
        </Reveal>

        <Reveal direction="up" delay={0.2}>
          <p className="font-body text-[16px] sm:text-[17px] text-[#444] leading-[1.8] mb-8 max-w-[580px] mx-auto">
            Ha kérdésed van a programokkal kapcsolatban, vagy szeretnél személyesen egyeztetni, jelentkezz egy ingyenes 15 perces konzultációra.
          </p>
        </Reveal>

        <Reveal direction="up" delay={0.3}>
          <div className="flex flex-col items-center gap-4">
            <a
              href="mailto:hips.hu@gmail.com?subject=Ingyenes%2015%20perces%20konzult%C3%A1ci%C3%B3ra%20jelentkez%C3%A9s"
              className="inline-flex items-center gap-3 font-body text-[15px] font-semibold bg-cyan text-navy px-8 py-[14px] rounded-[6px] shadow-[0_4px_16px_rgba(77,197,232,0.25)] hover:bg-cyan/80 transition-colors"
              aria-label="Ingyenes 15 perces konzultációra jelentkezés e-mailben"
            >
              <Mail size={18} strokeWidth={2.2} />
              Ingyenes 15 perces konzultációra jelentkezem
            </a>
            <p className="font-body text-[13px] text-[#888]">
              Ha nem nyílik meg a levelező, írj közvetlenül ide:{' '}
              <a
                href="mailto:hips.hu@gmail.com"
                className="text-navy underline hover:text-cyan transition-colors"
              >
                hips.hu@gmail.com
              </a>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
