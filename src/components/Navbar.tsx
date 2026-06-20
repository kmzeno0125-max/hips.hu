import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Kezdőoldal', href: '#' },
  { label: 'Rólam', href: '#rolam' },
  { label: 'Szolgáltatások', href: '#szolgaltatasok' },
  { label: 'Események', href: '#esemenyek' },
  { label: 'GYIK', href: '#gyik' },
  { label: 'Kapcsolat', href: '#kapcsolat' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-[72px] bg-navy border-b border-[rgba(77,197,232,0.2)] transition-all duration-300 ${scrolled ? 'navbar-scrolled' : ''}`}
      style={{
        opacity: mounted ? 1 : 0,
        transform: mounted ? 'translateY(0)' : 'translateY(-12px)',
        transition: 'opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1), transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.3s ease, background-color 0.3s ease',
      }}
    >
      <div className="max-w-[1200px] mx-auto h-full px-6 flex items-center justify-between">
        <a
          href="#"
          className="font-display text-[16px] sm:text-[18px] font-extrabold text-white tracking-[0.02em]"
          style={{
            opacity: mounted ? 1 : 0,
            transition: 'opacity 0.6s ease 0.1s',
          }}
        >
          DR. HIPS FRIGYES ZSOLT
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className="link-hover-underline font-body text-[13px] font-medium text-white/70 hover:text-white transition-colors duration-200"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? 'translateY(0)' : 'translateY(-8px)',
                transition: `opacity 0.4s ease ${0.15 + i * 0.06}s, transform 0.4s ease ${0.15 + i * 0.06}s`,
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#esemenyek"
            className="font-body text-[14px] font-semibold text-cyan border-[1.5px] border-cyan rounded-[4px] px-5 py-2 hover:bg-cyan hover:text-navy hover:shadow-[0_4px_16px_rgba(77,197,232,0.3)] transition-all duration-200 hover:-translate-y-[1px]"
            style={{
              opacity: mounted ? 1 : 0,
              transition: `opacity 0.4s ease 0.55s, background-color 0.2s ease, color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease`,
            }}
          >
            Jelentkezés
          </a>
        </div>

        <button
          className="lg:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Menü"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden fixed inset-0 bg-[#152E7A] z-[9999] flex flex-col min-h-screen">
          <div className="flex items-center justify-between px-6 h-[72px] border-b border-cyan/20 shrink-0">
            <span className="font-display text-[16px] sm:text-[18px] font-extrabold text-white tracking-[0.02em]">
              DR. HIPS FRIGYES ZSOLT
            </span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Menü bezárása"
              className="text-white"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex flex-col items-start px-8 pt-10 gap-1 flex-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-body text-[20px] font-medium text-white hover:text-cyan transition-colors py-3 w-full"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#esemenyek"
              onClick={() => setOpen(false)}
              className="font-body text-[16px] font-semibold text-cyan border-[1.5px] border-cyan rounded-[4px] px-6 py-3 mt-6 hover:bg-cyan hover:text-navy transition-all duration-200"
            >
              Jelentkezés
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
