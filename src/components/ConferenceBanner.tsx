export default function ConferenceBanner() {
  return (
    <section
      className="bg-white pt-[72px]"
      style={{ fontFamily: "'Times New Roman', Times, serif" }}
    >
      <div className="max-w-[1180px] mx-auto px-6 pt-10 md:pt-14 pb-4">
        <div className="rounded-[16px] border border-cyan/30 bg-[#F5FAFD] shadow-[0_6px_28px_rgba(21,46,122,0.08)] px-5 py-6 sm:px-8 sm:py-8 md:px-10 md:py-9">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-9 items-center">
            {/* Banner image — clickable, in-page scroll */}
            <div className="md:col-span-3">
              <a
                href="#egeszseg-konferencia-jegy"
                aria-label="Ugrás az Egészségmegőrző és Életmód Konferencia jegyvásárlásához"
                className="group block rounded-[12px] overflow-hidden shadow-[0_4px_18px_rgba(21,46,122,0.12)] cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan/50 transition-shadow duration-300 hover:shadow-[0_10px_32px_rgba(21,46,122,0.22)]"
              >
                <img
                  src="/files_10287071-2026-08-05T07-16-21-259Z-files_10287071-2026-08-05T07-10-13-866Z-image.webp"
                  alt="Egészség a Legnagyobb Érték – Országos Egészségmegőrző és Életmód Konferencia, Budapest"
                  className="w-full h-auto object-contain block transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                />
              </a>
            </div>

            {/* Kísérő szöveg */}
            <div className="md:col-span-2">
              <p className="text-[19px] sm:text-[21px] md:text-[22px] leading-[1.5] text-navy font-bold">
                Már most vásárolja meg a belépőjegyet{' '}
                <span className="text-cobalt">2026. szeptember 30-ig</span>{' '}
                <span className="text-cobalt">kedvezményes áron</span> az
                Egészségmegőrző és Életmód Konferenciára.
              </p>
              <a
                href="#egeszseg-konferencia-jegy"
                aria-label="Ugrás az Egészségmegőrző és Életmód Konferencia jegyvásárlásához"
                className="inline-block mt-4 text-[15px] sm:text-[16px] text-cobalt font-semibold hover:text-navy underline decoration-cyan/50 underline-offset-4 transition-colors"
              >
                További információért kattints a képre!
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
