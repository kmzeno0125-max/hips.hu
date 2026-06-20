import Reveal from './Reveal';
import { Facebook, Instagram, Youtube, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import pendulumImage from '../assets/files_8595244-2026-05-21T09-14-35-749Z-image.png';

function TikTokIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}

const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/share/1NPWD1cvSJ/',
    icon: Facebook,
    active: true,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/frigyeszsolthips?igsh=bnNjMGwxNmVqb3g1',
    icon: Instagram,
    active: true,
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@frizso8?_r=1&_t=ZN-96vQBonsJza',
    icon: TikTokIcon,
    active: true,
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@frizso',
    icon: Youtube,
    active: true,
  },
];

export default function Footer() {
  return (
    <footer id="kapcsolat" className="relative overflow-hidden">
      {/* Blurred background */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={pendulumImage}
          alt=""
          className="w-full h-full object-cover"
          style={{ filter: 'blur(10px) saturate(0.15)', opacity: 0.05 }}
        />
      </div>
      <div className="absolute inset-0 bg-[#0D1E52]/[0.97] pointer-events-none" />

      {/* Glow */}
      <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[260px] h-[160px] rounded-full bg-cyan/[0.04] blur-[40px] pointer-events-none" />

      <div className="max-w-[900px] mx-auto px-6 py-16 relative z-10">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 mb-12">
          <Reveal direction="left" delay={0.1}>
            <div>
              <h3 className="font-display text-[24px] font-bold text-white mb-2 tracking-normal">
                Kapcsolat
              </h3>
              <p className="font-body text-[15px] text-white/60 mb-3 max-w-[360px] leading-[1.6]">
                Kérdésed van vagy szeretnél személyes konzultációt? Keress bizalommal.
              </p>
              <a
                href="mailto:hips.hu@gmail.com"
                className="font-body text-[16px] text-cyan hover:underline transition-colors duration-200"
              >
                hips.hu@gmail.com
              </a>
              <a
                href="tel:+36203162442"
                className="flex items-center gap-2 font-body text-[16px] text-cyan hover:underline transition-colors duration-200 mt-2"
              >
                <Phone size={16} />
                +36 20 316 24 42
              </a>
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.2}>
            <div>
              <h4 className="font-display text-[16px] font-bold text-white/80 mb-4 tracking-normal">
                Közösségi média
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  if (social.active) {
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2.5 font-body text-[14px] text-white/70 border border-white/15 rounded-[6px] px-4 py-2.5 hover:border-cyan/50 hover:text-cyan transition-colors duration-200"
                      >
                        <Icon size={18} />
                        <span>{social.label}</span>
                      </a>
                    );
                  }
                  return (
                    <span
                      key={social.label}
                      className="flex items-center gap-2.5 font-body text-[14px] text-white/30 border border-white/8 rounded-[6px] px-4 py-2.5 cursor-default"
                    >
                      <Icon size={18} />
                      <span className="flex flex-col leading-tight">
                        <span>{social.label}</span>
                        <span className="text-[11px] text-white/25">Hamarosan</span>
                      </span>
                    </span>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="border-t border-white/10 relative z-10">
        <div className="max-w-[900px] mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="font-body text-[13px] text-white/50">
            &copy; 2026 Dr. Hips Frigyes Zsolt. Minden jog fenntartva.
          </span>
          <div className="flex gap-6">
            <Link
              to="/adatkezelesi-tajekoztato"
              className="link-hover-underline font-body text-[13px] text-white/50 hover:text-white transition-colors duration-200"
            >
              Adatkezelési tájékoztató
            </Link>
            <Link
              to="/aszf"
              className="link-hover-underline font-body text-[13px] text-white/50 hover:text-white transition-colors duration-200"
            >
              ÁSZF
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
