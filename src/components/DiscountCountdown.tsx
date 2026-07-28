import { useEffect, useState } from 'react';

const DEADLINE_MS = new Date('2026-09-30T23:59:00+02:00').getTime();
const MID_TIER_END_MS = new Date('2026-12-01T00:00:00+01:00').getTime();

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(): TimeLeft | null {
  const diff = DEADLINE_MS - Date.now();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  };
}

function pad(n: number) {
  return String(n).padStart(2, '0');
}

function TimeBox({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center bg-white border border-cyan/40 rounded-[8px] px-3 py-2 min-w-[64px] shadow-[0_2px_8px_rgba(13,30,82,0.06)]">
      <span
        className="text-[22px] sm:text-[26px] font-bold text-navy leading-none tabular-nums"
        style={{ fontFamily: "'Times New Roman', Times, serif" }}
      >
        {pad(value)}
      </span>
      <span className="text-[11px] sm:text-[12px] text-[#555] mt-1">{label}</span>
    </div>
  );
}

export default function DiscountCountdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(getTimeLeft);

  useEffect(() => {
    if (getTimeLeft() === null) return;
    const id = setInterval(() => {
      const t = getTimeLeft();
      setTimeLeft(t);
      if (t === null) clearInterval(id);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const now = Date.now();
  const isDecemberPhase = now >= MID_TIER_END_MS;
  const isExpired = timeLeft === null;

  return (
    <div
      className="border border-cyan/40 rounded-[10px] p-5 sm:p-6 bg-[#F5FAFD] shadow-[0_4px_16px_rgba(13,30,82,0.06)]"
      style={{ fontFamily: "'Times New Roman', Times, serif" }}
    >
      <h4 className="text-[17px] sm:text-[18px] font-bold text-navy mb-3">
        Időszakos kedvezmény
      </h4>

      {isDecemberPhase ? (
        <p className="text-[16px] text-[#1E293B] leading-[1.7]">
          A belépőjegy aktuális ára:{' '}
          <span className="text-[20px] font-bold text-navy">19.000 Ft</span>.
        </p>
      ) : isExpired ? (
        <div>
          <p className="text-[16px] font-bold text-navy leading-[1.7]">
            A 9.000 Ft-os kedvezményes időszak lejárt.
          </p>
          <p className="text-[15px] text-[#444] leading-[1.7] mt-2">
            2026. október 1. és november 30. között a belépőjegy kedvezményes ára{' '}
            <span className="font-bold text-navy">15.000 Ft</span>.
          </p>
        </div>
      ) : (
        <>
          <p className="text-[16px] text-[#1E293B] leading-[1.7]">
            A belépőjegy ára{' '}
            <span className="line-through text-[#94A3B8]">19.000 Ft</span> helyett most{' '}
            <span className="font-bold">CSAK</span>{' '}
            <span className="text-[24px] sm:text-[28px] font-bold text-navy">9.000 Ft</span>{' '}
            2026. szeptember 30-ig.
          </p>
          <p className="text-[13.5px] text-[#555] leading-[1.65] mt-2">
            2026. október 1. és november 30. között a jegyár 19.000 Ft helyett 15.000 Ft
            lesz, 2026. december 1-től pedig 19.000 Ft áron lehet megvásárolni a
            belépőjegyet.
          </p>

          <div className="mt-4">
            <p className="text-[13px] font-bold text-cobalt tracking-[0.08em] mb-2">
              AKCIÓS ÁR VÉGÉIG:
            </p>
            <div
              className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 max-w-[400px]"
              role="timer"
              aria-live="off"
              aria-label={`A 9.000 forintos kedvezmény lejártáig hátralévő idő: ${timeLeft.days} nap, ${timeLeft.hours} óra, ${timeLeft.minutes} perc, ${timeLeft.seconds} másodperc`}
            >
              <TimeBox value={timeLeft.days} label="nap" />
              <TimeBox value={timeLeft.hours} label="óra" />
              <TimeBox value={timeLeft.minutes} label="perc" />
              <TimeBox value={timeLeft.seconds} label="másodperc" />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
