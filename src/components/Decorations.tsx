export function SpiralMotif({ className = '', opacity = 0.06 }: { className?: string; opacity?: number }) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity }}
    >
      <circle cx="200" cy="200" r="40" stroke="#4DC5E8" strokeWidth="1" />
      <circle cx="200" cy="200" r="70" stroke="#4DC5E8" strokeWidth="0.8" />
      <circle cx="200" cy="200" r="105" stroke="#4DC5E8" strokeWidth="0.6" />
      <circle cx="200" cy="200" r="145" stroke="#4DC5E8" strokeWidth="0.5" />
      <circle cx="200" cy="200" r="185" stroke="#152E7A" strokeWidth="0.4" />
      <path
        d="M200 60 C280 60 340 120 340 200 C340 280 280 340 200 340 C120 340 60 280 60 200"
        stroke="#4DC5E8"
        strokeWidth="0.5"
        strokeDasharray="4 6"
      />
    </svg>
  );
}

export function CellNetwork({ className = '', opacity = 0.05 }: { className?: string; opacity?: number }) {
  return (
    <svg
      className={className}
      viewBox="0 0 500 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity }}
    >
      <circle cx="100" cy="120" r="24" stroke="#4DC5E8" strokeWidth="0.8" />
      <circle cx="220" cy="80" r="18" stroke="#152E7A" strokeWidth="0.6" />
      <circle cx="340" cy="150" r="30" stroke="#4DC5E8" strokeWidth="0.7" />
      <circle cx="160" cy="280" r="22" stroke="#152E7A" strokeWidth="0.6" />
      <circle cx="380" cy="300" r="16" stroke="#4DC5E8" strokeWidth="0.5" />
      <circle cx="280" cy="240" r="20" stroke="#4DC5E8" strokeWidth="0.6" />
      <line x1="124" y1="120" x2="202" y2="80" stroke="#4DC5E8" strokeWidth="0.4" strokeDasharray="3 4" />
      <line x1="238" y1="80" x2="310" y2="150" stroke="#152E7A" strokeWidth="0.4" strokeDasharray="3 4" />
      <line x1="160" y1="258" x2="260" y2="240" stroke="#4DC5E8" strokeWidth="0.3" strokeDasharray="2 4" />
      <line x1="300" y1="240" x2="364" y2="300" stroke="#152E7A" strokeWidth="0.3" strokeDasharray="3 5" />
      <line x1="340" y1="180" x2="280" y2="220" stroke="#4DC5E8" strokeWidth="0.3" strokeDasharray="2 3" />
      <circle cx="100" cy="120" r="4" fill="#4DC5E8" fillOpacity="0.3" />
      <circle cx="340" cy="150" r="5" fill="#4DC5E8" fillOpacity="0.2" />
      <circle cx="280" cy="240" r="3" fill="#152E7A" fillOpacity="0.2" />
    </svg>
  );
}

export function HarmonyCircles({ className = '', opacity = 0.06 }: { className?: string; opacity?: number }) {
  return (
    <svg
      className={className}
      viewBox="0 0 300 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity }}
    >
      <circle cx="150" cy="150" r="60" stroke="#4DC5E8" strokeWidth="0.8" />
      <circle cx="150" cy="150" r="90" stroke="#152E7A" strokeWidth="0.5" strokeDasharray="6 4" />
      <circle cx="150" cy="150" r="120" stroke="#4DC5E8" strokeWidth="0.4" strokeDasharray="3 6" />
      <circle cx="150" cy="150" r="145" stroke="#152E7A" strokeWidth="0.3" strokeDasharray="2 8" />
      <path d="M150 90 L150 30" stroke="#4DC5E8" strokeWidth="0.4" />
      <path d="M210 150 L270 150" stroke="#4DC5E8" strokeWidth="0.4" />
      <path d="M150 210 L150 270" stroke="#4DC5E8" strokeWidth="0.4" />
      <path d="M90 150 L30 150" stroke="#4DC5E8" strokeWidth="0.4" />
      <circle cx="150" cy="150" r="6" fill="#4DC5E8" fillOpacity="0.15" />
    </svg>
  );
}

export function WaveLines({ className = '', opacity = 0.05 }: { className?: string; opacity?: number }) {
  return (
    <svg
      className={className}
      viewBox="0 0 600 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity }}
    >
      <path
        d="M0 100 Q75 60, 150 100 T300 100 T450 100 T600 100"
        stroke="#4DC5E8"
        strokeWidth="0.8"
      />
      <path
        d="M0 120 Q75 80, 150 120 T300 120 T450 120 T600 120"
        stroke="#152E7A"
        strokeWidth="0.5"
      />
      <path
        d="M0 140 Q75 110, 150 140 T300 140 T450 140 T600 140"
        stroke="#4DC5E8"
        strokeWidth="0.4"
        strokeDasharray="4 6"
      />
    </svg>
  );
}

export function PendulumMotif({ className = '', opacity = 0.06 }: { className?: string; opacity?: number }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity }}
    >
      <path d="M100 10 L100 220" stroke="#152E7A" strokeWidth="0.6" />
      <circle cx="100" cy="240" r="18" stroke="#4DC5E8" strokeWidth="0.8" />
      <circle cx="100" cy="240" r="6" fill="#4DC5E8" fillOpacity="0.2" />
      <path d="M40 10 L160 10" stroke="#152E7A" strokeWidth="0.4" />
      <path
        d="M60 240 C60 200, 100 180, 100 220"
        stroke="#4DC5E8"
        strokeWidth="0.3"
        strokeDasharray="2 4"
      />
      <path
        d="M140 240 C140 200, 100 180, 100 220"
        stroke="#4DC5E8"
        strokeWidth="0.3"
        strokeDasharray="2 4"
      />
    </svg>
  );
}

export function EnergyFlow({ className = '', opacity = 0.05 }: { className?: string; opacity?: number }) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity }}
    >
      <path
        d="M20 150 C80 80, 160 220, 240 150 C320 80, 380 150, 380 150"
        stroke="#4DC5E8"
        strokeWidth="0.8"
      />
      <path
        d="M20 160 C90 100, 170 230, 250 160 C330 90, 380 160, 380 160"
        stroke="#152E7A"
        strokeWidth="0.5"
        strokeDasharray="4 4"
      />
      <circle cx="80" cy="130" r="3" fill="#4DC5E8" fillOpacity="0.3" />
      <circle cx="200" cy="170" r="4" fill="#4DC5E8" fillOpacity="0.2" />
      <circle cx="320" cy="130" r="3" fill="#152E7A" fillOpacity="0.2" />
      <circle cx="140" cy="180" r="2" fill="#4DC5E8" fillOpacity="0.25" />
      <circle cx="280" cy="145" r="2.5" fill="#4DC5E8" fillOpacity="0.2" />
    </svg>
  );
}

export function DotGrid({ className = '', opacity = 0.04 }: { className?: string; opacity?: number }) {
  const dots = [];
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 12; col++) {
      dots.push(
        <circle
          key={`${row}-${col}`}
          cx={20 + col * 30}
          cy={20 + row * 30}
          r="1.5"
          fill="#4DC5E8"
        />
      );
    }
  }
  return (
    <svg
      className={className}
      viewBox="0 0 380 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity }}
    >
      {dots}
    </svg>
  );
}

export function LeafOrganics({ className = '', opacity = 0.05 }: { className?: string; opacity?: number }) {
  return (
    <svg
      className={className}
      viewBox="0 0 300 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity }}
    >
      <path
        d="M150 380 C150 280, 80 220, 80 140 C80 60, 150 20, 150 20 C150 20, 220 60, 220 140 C220 220, 150 280, 150 380Z"
        stroke="#4DC5E8"
        strokeWidth="0.7"
      />
      <path
        d="M150 350 L150 60"
        stroke="#4DC5E8"
        strokeWidth="0.5"
      />
      <path
        d="M150 160 C120 140, 100 150, 95 145"
        stroke="#4DC5E8"
        strokeWidth="0.4"
      />
      <path
        d="M150 200 C180 180, 200 190, 205 185"
        stroke="#4DC5E8"
        strokeWidth="0.4"
      />
      <path
        d="M150 240 C125 225, 110 235, 105 230"
        stroke="#4DC5E8"
        strokeWidth="0.4"
      />
      <path
        d="M150 280 C175 265, 190 275, 195 270"
        stroke="#4DC5E8"
        strokeWidth="0.4"
      />
    </svg>
  );
}
