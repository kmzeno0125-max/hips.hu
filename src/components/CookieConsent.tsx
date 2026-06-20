import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Cookie } from 'lucide-react';

const STORAGE_KEY = 'drhips-cookie-consent';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (!saved) {
        const t = setTimeout(() => setVisible(true), 400);
        return () => clearTimeout(t);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  const handleChoice = (value: 'accepted' | 'necessary') => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // ignore
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed left-4 right-4 bottom-4 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-[480px] animate-cookie-in"
      style={{ zIndex: 9998 }}
      role="dialog"
      aria-live="polite"
      aria-label="Cookie-beállítások"
    >
      <div
        className="bg-white border border-[#E2E8F0] overflow-hidden"
        style={{
          borderRadius: '20px',
          boxShadow: '0 24px 64px rgba(13, 30, 82, 0.18), 0 4px 12px rgba(13, 30, 82, 0.08)',
        }}
      >
        <div className="h-[3px] w-full bg-gradient-to-r from-cyan via-cobalt to-navy" />

        <div className="px-6 pt-6 pb-6 sm:px-7 sm:pt-7 sm:pb-7">
          <div className="flex items-center gap-3 mb-3">
            <span
              className="inline-flex items-center justify-center w-9 h-9 rounded-full"
              style={{
                background: 'rgba(77, 197, 232, 0.12)',
                color: '#152E7A',
              }}
            >
              <Cookie size={18} strokeWidth={1.75} />
            </span>
            <h2
              className="font-display font-bold text-navy tracking-tight"
              style={{ fontSize: '1.2rem', lineHeight: 1.25 }}
            >
              Cookie-beállítások
            </h2>
          </div>

          <p
            className="font-body text-[#1E293B]"
            style={{ fontSize: '14.5px', lineHeight: 1.65 }}
          >
            Weboldalunk sütiket használ a megfelelő működés, a felhasználói élmény
            javítása és az oldal látogatottságának elemzése érdekében. A
            {' '}<span className="text-navy font-semibold">„Minden elfogadása"</span>{' '}
            gombra kattintva hozzájárul a sütik használatához. A
            {' '}<span className="text-navy font-semibold">„Csak szükséges sütik"</span>{' '}
            választásával kizárólag az oldal működéséhez szükséges sütik kerülnek
            használatra.
          </p>

          <div className="mt-5 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => handleChoice('accepted')}
              className="font-body font-semibold tracking-[0.01em] transition-all duration-200 hover:shadow-[0_8px_22px_rgba(21,46,122,0.28)] hover:-translate-y-[1px] active:translate-y-0"
              style={{
                background: '#152E7A',
                color: '#FFFFFF',
                padding: '12px 20px',
                borderRadius: '12px',
                fontSize: '14.5px',
                border: '1px solid #152E7A',
                flex: 1,
              }}
            >
              Minden elfogadása
            </button>

            <button
              type="button"
              onClick={() => handleChoice('necessary')}
              className="font-body font-semibold tracking-[0.01em] transition-all duration-200 hover:bg-[#F4F6FB] hover:shadow-[0_4px_14px_rgba(21,46,122,0.10)]"
              style={{
                background: '#FFFFFF',
                color: '#152E7A',
                padding: '12px 20px',
                borderRadius: '12px',
                fontSize: '14.5px',
                border: '1px solid #152E7A',
                flex: 1,
              }}
            >
              Csak szükséges sütik
            </button>
          </div>

          <div className="mt-4 pt-4 border-t border-[#E2E8F0]">
            <Link
              to="/adatkezelesi-tajekoztato"
              className="font-body text-cobalt hover:text-navy transition-colors"
              style={{
                fontSize: '13px',
                textDecoration: 'underline',
                textUnderlineOffset: '3px',
                textDecorationColor: 'rgba(29, 77, 168, 0.35)',
              }}
            >
              Adatkezelési tájékoztató
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
