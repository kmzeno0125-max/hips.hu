import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Loader2, AlertCircle } from 'lucide-react';

type SessionState = 'loading' | 'success' | 'error';

interface SessionData {
  valid: boolean;
  customerName: string | null;
  customerEmail: string | null;
  amountTotal: number | null;
  currency: string | null;
  productDescription: string | null;
  sessionId: string | null;
}

export default function SikeresFizetes() {
  const [state, setState] = useState<SessionState>('loading');
  const [sessionData, setSessionData] = useState<SessionData | null>(null);

  useEffect(() => {
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.setAttribute('name', 'robots');
      document.head.appendChild(metaRobots);
    }
    metaRobots.setAttribute('content', 'noindex, nofollow');

    return () => {
      metaRobots?.setAttribute('content', 'index, follow');
    };
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const sessionId = params.get('session_id');

    if (!sessionId) {
      setState('error');
      return;
    }

    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
    const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

    fetch(`${supabaseUrl}/functions/v1/verify-stripe-session?session_id=${encodeURIComponent(sessionId)}`, {
      headers: {
        Authorization: `Bearer ${supabaseAnonKey}`,
        'Content-Type': 'application/json',
      },
    })
      .then(async (res) => {
        if (!res.ok) {
          setState('error');
          return null;
        }
        const data = await res.json();
        if (!data.valid) {
          setState('error');
          return null;
        }
        setSessionData(data);
        setState('success');
        return data;
      })
      .catch(() => setState('error'));
  }, []);

  if (state === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F8FBFD]">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-navy mx-auto animate-spin" />
          <p className="mt-4 text-navy" style={{ fontFamily: "'Times New Roman', Times, serif", fontSize: '18px' }}>
            Fizetés ellenőrzése folyamatban…
          </p>
        </div>
      </div>
    );
  }

  if (state === 'error') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F8FBFD] px-4">
        <div className="max-w-md text-center">
          <AlertCircle className="w-12 h-12 text-red-500 mx-auto" />
          <h1
            className="mt-4 text-navy"
            style={{ fontFamily: "'Times New Roman', Times, serif", fontSize: '24px', fontWeight: 700 }}
          >
            Az oldal nem érhető el
          </h1>
          <p className="mt-2 text-[#666]" style={{ fontSize: '15px' }}>
            Érvénytelen vagy hiányzó fizetési adatok. Kérjük, lépjen vissza a főoldalra.
          </p>
          <Link
            to="/"
            className="inline-block mt-6 text-[14px] font-semibold text-white bg-navy rounded-[6px] px-6 py-3 hover:bg-cobalt transition-colors"
            style={{ fontFamily: "'Times New Roman', Times, serif" }}
          >
            Vissza a főoldalra
          </Link>
        </div>
      </div>
    );
  }

  const formatAmount = (amount: number | null, currency: string | null) => {
    if (amount === null) return null;
    const value = (amount / 100).toLocaleString('hu-HU');
    const symbol = currency === 'huf' ? 'Ft' : currency?.toUpperCase() ?? '';
    return `${value} ${symbol}`;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8FBFD] px-4 py-12">
      <div className="max-w-2xl w-full">
        <div className="bg-white border border-navy/[0.08] rounded-[12px] p-8 sm:p-10 shadow-sm">
          <div className="text-center">
            <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto" />
            <h1
              className="mt-6 text-navy"
              style={{ fontFamily: "'Times New Roman', Times, serif", fontSize: '32px', fontWeight: 700 }}
            >
              Köszönjük a fizetést!
            </h1>
          </div>

          <div className="mt-8 space-y-4">
            <p className="text-[#333]" style={{ fontFamily: "'Times New Roman', Times, serif", fontSize: '16px', lineHeight: 1.6 }}>
              A fizetését sikeresen fogadtuk és visszaigazoltuk. Hamarosan e-mailben kapja a további részleteket.
            </p>

            <div className="bg-[#F8FBFD] border border-cyan/30 rounded-[8px] p-5 space-y-3">
              <p className="text-navy font-semibold" style={{ fontFamily: "'Times New Roman', Times, serif", fontSize: '15px' }}>
                Fontos információk:
              </p>
              <ul className="space-y-2 text-[#444]" style={{ fontFamily: "'Times New Roman', Times, serif", fontSize: '15px', lineHeight: 1.6 }}>
                <li className="flex gap-2">
                  <span className="text-cobalt">•</span>
                  <span>A konferenciafelvételeket a megadott e-mail címre küldjük el a rendezvény után.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cobalt">•</span>
                  <span>Kérjük, ellenőrizze a spam mappát is, ha nem kapja meg a visszaigazolást.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cobalt">•</span>
                  <span>Ha kérdése van, írjon nekünk a kapcsolatfelvételi oldalon keresztül.</span>
                </li>
              </ul>
            </div>

            {sessionData && (
              <div className="mt-6 border-t border-navy/[0.08] pt-6">
                <p className="text-navy font-semibold mb-3" style={{ fontFamily: "'Times New Roman', Times, serif", fontSize: '15px' }}>
                  Rendelés adatai:
                </p>
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[14px]" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                  {sessionData.customerName && (
                    <div>
                      <dt className="text-[#999]">Vásárló neve</dt>
                      <dd className="text-navy font-medium">{sessionData.customerName}</dd>
                    </div>
                  )}
                  {sessionData.amountTotal !== null && (
                    <div>
                      <dt className="text-[#999]">Fizetett összeg</dt>
                      <dd className="text-navy font-medium">{formatAmount(sessionData.amountTotal, sessionData.currency)}</dd>
                    </div>
                  )}
                  {sessionData.productDescription && (
                    <div>
                      <dt className="text-[#999]">Vásárolt szolgáltatás</dt>
                      <dd className="text-navy font-medium">{sessionData.productDescription}</dd>
                    </div>
                  )}
                  {sessionData.sessionId && (
                    <div>
                      <dt className="text-[#999]">Fizetési azonosító</dt>
                      <dd className="text-navy font-medium break-all">{sessionData.sessionId}</dd>
                    </div>
                  )}
                </dl>
              </div>
            )}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/"
              className="inline-block text-[14px] font-semibold text-navy border border-navy/20 rounded-[6px] px-6 py-3 hover:bg-navy hover:text-white transition-colors"
              style={{ fontFamily: "'Times New Roman', Times, serif" }}
            >
              Vissza a főoldalra
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
