import { useEffect, useRef, useState } from 'react';
import therapyImage from '../assets/files_8595244-2026-05-21T09-14-29-499Z-image.png';

const stats = [
  { target: 25, suffix: '', label: 'év tapasztalat' },
  { target: 1000, suffix: '', label: 'konzultáció' },
  { target: 4, suffix: '', label: 'szakterület' },
  { target: 20, suffix: '', label: 'helyszín' },
];

function useCounter(target: number, active: boolean, duration = 1400) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    let raf: number;
    const startTime = performance.now();

    function step(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) {
        raf = requestAnimationFrame(step);
      }
    }

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration]);

  return value;
}

function StatItem({ target, suffix, label, active, index }: {
  target: number;
  suffix: string;
  label: string;
  active: boolean;
  index: number;
}) {
  const value = useCounter(target, active);

  return (
    <div
      className="text-center flex-1 min-w-[140px]"
      style={{
        opacity: active ? 1 : 0,
        transform: active ? 'scale(1) translateY(0)' : 'scale(0.9) translateY(12px)',
        transition: `opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${index * 0.1}s, transform 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${index * 0.1}s`,
      }}
    >
      <div className="font-display text-[42px] font-extrabold text-cyan tracking-normal">
        {value}{suffix}
      </div>
      <div
        className="font-body text-[13px] font-medium text-white/75 tracking-normal mt-1"
        style={{
          opacity: active ? 1 : 0,
          transform: active ? 'translateY(0)' : 'translateY(8px)',
          transition: `opacity 0.5s ease ${index * 0.1 + 0.15}s, transform 0.5s ease ${index * 0.1 + 0.15}s`,
        }}
      >
        {label}
      </div>
    </div>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-14 overflow-hidden">
      {/* Blurred therapy background */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={therapyImage}
          alt=""
          className="w-full h-full object-cover"
          style={{ filter: 'blur(5px) saturate(0.2)', opacity: 0.08 }}
        />
      </div>
      <div className="absolute inset-0 bg-cobalt/[0.93] pointer-events-none" />

      <div className="max-w-[1100px] mx-auto px-6 flex flex-wrap justify-between gap-8 relative z-10">
        {stats.map((stat, i) => (
          <StatItem
            key={stat.label}
            target={stat.target}
            suffix={stat.suffix}
            label={stat.label}
            active={visible}
            index={i}
          />
        ))}
      </div>
    </section>
  );
}
