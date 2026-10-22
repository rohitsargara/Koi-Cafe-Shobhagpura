import React from 'react';

export const ArchedVerandaArtwork: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full h-full overflow-hidden bg-[#FAF7F2] select-none ${className}`}>
      <svg
        viewBox="0 0 800 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="verandaLight" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FAF7F2" />
            <stop offset="60%" stopColor="#F2ECE0" />
            <stop offset="100%" stopColor="#E5DCcb" />
          </linearGradient>
          <linearGradient id="archInterior" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#E0D6C3" />
            <stop offset="100%" stopColor="#C9BDA6" />
          </linearGradient>
        </defs>

        <rect width="800" height="600" fill="url(#verandaLight)" />

        {/* Deep colonnade of arches in perspective */}
        {/* Arch 1 (Foreground) */}
        <path
          d="M60 600 V220 C60 120 160 60 300 60 C440 60 540 120 540 220 V600 H480 V240 C480 150 400 100 300 100 C200 100 120 150 120 240 V600 Z"
          fill="#DDD3C0"
        />

        {/* Arch 2 (Midground) */}
        <path
          d="M200 600 V300 C200 220 270 170 360 170 C450 170 520 220 520 300 V600 H480 V310 C480 240 430 200 360 200 C290 200 240 240 240 310 V600 Z"
          fill="#C8BD9F"
          opacity="0.8"
        />

        {/* Arch 3 (Distant courtyard garden) */}
        <path
          d="M290 600 V360 C290 310 330 270 390 270 C450 270 490 310 490 360 V600 Z"
          fill="#7C866A"
          opacity="0.35"
        />

        {/* Linen banquette seat along left arch wall */}
        <rect x="80" y="460" width="160" height="140" fill="#EDE4D5" />
        <rect x="80" y="440" width="160" height="24" rx="4" fill="#5D634E" opacity="0.85" />
        {/* Terracotta throw pillow */}
        <polygon points="120,440 160,400 180,440 140,460" fill="#C26747" opacity="0.9" />

        {/* Fluted Ceramic Pendant Lamp Hanging */}
        <line x1="300" y1="0" x2="300" y2="180" stroke="#4A4136" strokeWidth="2" />
        <path d="M260 210 Q300 175 340 210 Z" fill="#C26747" />
        <ellipse cx="300" cy="210" rx="40" ry="8" fill="#E88867" />
        {/* Subtle Warm Pendant Light Glow */}
        <circle cx="300" cy="225" r="50" fill="#FFF4D9" opacity="0.45" />

        {/* Floor stone tiles */}
        <line x1="0" y1="500" x2="800" y2="500" stroke="#D3C7B2" strokeWidth="1" />
        <line x1="0" y1="550" x2="800" y2="550" stroke="#D3C7B2" strokeWidth="1.5" />
      </svg>
    </div>
  );
};

export const IndoorLoungeArtwork: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full h-full overflow-hidden bg-[#FAF7F2] select-none ${className}`}>
      <svg
        viewBox="0 0 800 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="barWall" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F5EFE6" />
            <stop offset="100%" stopColor="#E2D7C5" />
          </linearGradient>
          <linearGradient id="travertineCounter" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#FAF7F2" />
            <stop offset="50%" stopColor="#EFE7DA" />
            <stop offset="100%" stopColor="#E3D6C1" />
          </linearGradient>
        </defs>

        <rect width="800" height="600" fill="url(#barWall)" />

        {/* Fluted Espresso Bar Monolith Counter */}
        <rect x="150" y="360" width="560" height="240" rx="10" fill="url(#travertineCounter)" />
        {/* Counter Top Edge */}
        <rect x="130" y="340" width="600" height="25" rx="6" fill="#FAF7F2" stroke="#DFD4C2" strokeWidth="1" />

        {/* Fluted texture vertical stripes */}
        {Array.from({ length: 24 }).map((_, i) => (
          <line
            key={i}
            x1={170 + i * 22}
            y1={365}
            x2={170 + i * 22}
            y2={600}
            stroke="#D8CCA8"
            strokeWidth="3"
            opacity="0.6"
          />
        ))}

        {/* Minimalist Espresso Machine Silhouette (Italian Dual-Boiler) */}
        <rect x="220" y="270" width="120" height="70" rx="4" fill="#3D3833" />
        <rect x="235" y="255" width="90" height="15" rx="2" fill="#5A524A" />
        {/* Portafilters */}
        <circle cx="260" cy="315" r="8" fill="#C26747" />
        <circle cx="300" cy="315" r="8" fill="#C26747" />

        {/* Artisanal Pour-Over Stand */}
        <path d="M420 340 V280 H460 V340" stroke="#7A6852" strokeWidth="4" />
        <polygon points="430,285 450,285 440,305" fill="#FAF7F2" stroke="#7A6852" strokeWidth="2" />
        <ellipse cx="440" cy="325" rx="15" ry="12" fill="#EDE4D6" stroke="#4A4136" strokeWidth="1.5" />

        {/* Back Shelving with amber bottles and ceramic cups */}
        <line x1="160" y1="200" x2="680" y2="200" stroke="#C8BFA8" strokeWidth="4" />
        <line x1="160" y1="120" x2="680" y2="120" stroke="#C8BFA8" strokeWidth="4" />

        {/* Amber bottles on shelf */}
        <rect x="200" y="145" width="22" height="55" rx="4" fill="#6A4532" />
        <rect x="230" y="140" width="22" height="60" rx="4" fill="#4B3124" />
        <rect x="260" y="150" width="20" height="50" rx="4" fill="#6A4532" />

        {/* Stack of handmade ceramic cups */}
        <rect x="520" y="160" width="30" height="20" rx="3" fill="#EDE5D7" />
        <rect x="520" y="140" width="30" height="20" rx="3" fill="#EDE5D7" />
        <rect x="580" y="150" width="35" height="25" rx="4" fill="#C26747" />

        {/* Ambient Warm Bar Lighting */}
        <circle cx="280" cy="230" r="90" fill="#FFF4D9" opacity="0.25" />
      </svg>
    </div>
  );
};

export const EveningPatioArtwork: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full h-full overflow-hidden bg-[#24211E] select-none ${className}`}>
      <svg
        viewBox="0 0 1000 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="twilightSky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1B1E24" />
            <stop offset="60%" stopColor="#2D2825" />
            <stop offset="100%" stopColor="#3F342B" />
          </linearGradient>

          <filter id="lanternGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="24" />
          </filter>
        </defs>

        <rect width="1000" height="600" fill="url(#twilightSky)" />

        {/* Distant Udaipur Stars & Crescent Moon */}
        <circle cx="750" cy="90" r="1.5" fill="#FAF7F2" opacity="0.8" />
        <circle cx="820" cy="140" r="2" fill="#FAF7F2" opacity="0.6" />
        <circle cx="650" cy="120" r="1.5" fill="#FAF7F2" opacity="0.7" />
        <circle cx="480" cy="80" r="2" fill="#FAF7F2" opacity="0.9" />
        <circle cx="320" cy="110" r="1.5" fill="#FAF7F2" opacity="0.5" />

        {/* Stucco Walls in Twilight Warm Glow */}
        <polygon points="0,200 450,250 450,600 0,600" fill="#3A3229" />
        <polygon points="450,250 1000,200 1000,600 450,600" fill="#312B24" />

        {/* Arched portal glowing from within */}
        <path
          d="M120 600 V350 C120 280 180 230 260 230 C340 230 400 280 400 350 V600 Z"
          fill="#4A3D30"
        />
        {/* Warm light inside arch */}
        <circle cx="260" cy="360" r="120" fill="#FFC988" opacity="0.35" filter="url(#lanternGlow)" />

        {/* Hanging Lanterns with Warm Amber Flame Effect */}
        {/* Lantern 1 */}
        <line x1="260" y1="0" x2="260" y2="280" stroke="#5E4E3A" strokeWidth="2" />
        <rect x="245" y="280" width="30" height="45" rx="6" fill="#1C1814" stroke="#8A6E4C" strokeWidth="2" />
        <circle cx="260" cy="302" r="28" fill="#FFA54F" opacity="0.85" filter="url(#lanternGlow)" />
        <circle cx="260" cy="302" r="6" fill="#FFF6E0" />

        {/* Lantern 2 */}
        <line x1="680" y1="0" x2="680" y2="240" stroke="#5E4E3A" strokeWidth="2" />
        <rect x="665" y="240" width="30" height="45" rx="6" fill="#1C1814" stroke="#8A6E4C" strokeWidth="2" />
        <circle cx="680" cy="262" r="32" fill="#FFA54F" opacity="0.85" filter="url(#lanternGlow)" />
        <circle cx="680" cy="262" r="7" fill="#FFF6E0" />

        {/* Olive Trees Silhouettes */}
        <ellipse cx="880" cy="380" rx="90" ry="70" fill="#1B1E19" />
        <ellipse cx="820" cy="420" rx="60" ry="50" fill="#1B1E19" />
        <line x1="860" y1="600" x2="860" y2="420" stroke="#1B1E19" strokeWidth="8" />

        {/* Patio Candlelit Tables */}
        <ellipse cx="500" cy="510" rx="90" ry="22" fill="#FAF7F2" opacity="0.1" />
        {/* Candle Glow */}
        <circle cx="500" cy="495" r="16" fill="#FFB054" opacity="0.9" filter="url(#lanternGlow)" />
        <circle cx="500" cy="495" r="4" fill="#FFFFFF" />
      </svg>
    </div>
  );
};
