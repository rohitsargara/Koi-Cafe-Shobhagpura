import React from 'react';

/**
 * High-fidelity architectural & culinary artwork components with Warm Contemporary
 * palette: warm ivory (#FAF7F2), sand (#EDE5D8), terracotta (#C26747), and muted olive (#5D634E).
 * Zero broken images, scalable, and responsive.
 */

export const HeroCourtyardArtwork: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full h-full overflow-hidden bg-[#F4EFE6] select-none ${className}`}>
      <svg
        viewBox="0 0 1200 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#EFE8DC" />
            <stop offset="60%" stopColor="#FAF7F2" />
            <stop offset="100%" stopColor="#F2ECE0" />
          </linearGradient>

          <linearGradient id="wallSun" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FAF7F2" />
            <stop offset="50%" stopColor="#F5EFE4" />
            <stop offset="100%" stopColor="#ECE4D4" />
          </linearGradient>

          <linearGradient id="wallShadow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#E0D7C6" />
            <stop offset="100%" stopColor="#D5CBB6" />
          </linearGradient>

          <linearGradient id="archDepth" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#C4B9A2" />
            <stop offset="50%" stopColor="#DFD6C4" />
            <stop offset="100%" stopColor="#EAE2D2" />
          </linearGradient>

          <linearGradient id="travertineFloor" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#EADBCE" />
            <stop offset="50%" stopColor="#DFCEBE" />
            <stop offset="100%" stopColor="#D3C0AF" />
          </linearGradient>

          <linearGradient id="terracottaVessel" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#D87856" />
            <stop offset="50%" stopColor="#C26747" />
            <stop offset="100%" stopColor="#9C4A2E" />
          </linearGradient>

          <linearGradient id="oliveFoliage" x1="0" y1="0" x2="0.8" y2="1">
            <stop offset="0%" stopColor="#7E876B" />
            <stop offset="60%" stopColor="#5D634E" />
            <stop offset="100%" stopColor="#414734" />
          </linearGradient>

          <linearGradient id="caneFurniture" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#D8C8B0" />
            <stop offset="100%" stopColor="#B39F80" />
          </linearGradient>

          <filter id="softSunFilter" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur stdDeviation="30" result="blur" />
          </filter>
        </defs>

        {/* Sky / Ambient Light */}
        <rect width="1200" height="800" fill="url(#skyGrad)" />

        {/* Sun Glow in Courtyard Upper Area */}
        <circle cx="780" cy="180" r="240" fill="#FFF9ED" opacity="0.6" filter="url(#softSunFilter)" />

        {/* Background Architectural Wall with Stucco Texture */}
        <path d="M0 0 H1200 V520 H0 Z" fill="url(#wallSun)" />

        {/* Major Sculptural Arch Openings (Bali & Mediterranean Inspired) */}
        {/* Left Archway */}
        <path
          d="M120 520 V260 C120 170 200 120 300 120 C400 120 480 170 480 260 V520 Z"
          fill="url(#archDepth)"
          opacity="0.85"
        />
        {/* Recessed Inner Wall of Left Arch */}
        <path
          d="M140 520 V270 C140 190 210 140 300 140 C390 140 460 190 460 270 V520 Z"
          fill="#DDD4C2"
        />
        {/* Shadow cast under arch ceiling */}
        <path
          d="M140 270 C140 190 210 140 300 140 C390 140 460 190 460 270 C430 200 370 160 300 160 C230 160 170 200 140 270 Z"
          fill="#3A342B"
          opacity="0.18"
        />

        {/* Center Grand Archway */}
        <path
          d="M540 520 V210 C540 110 640 50 760 50 C880 50 980 110 980 210 V520 Z"
          fill="url(#archDepth)"
          opacity="0.9"
        />
        <path
          d="M560 520 V220 C560 125 650 70 760 70 C870 70 960 125 960 220 V520 Z"
          fill="#E8DFD0"
        />

        {/* Interior garden glimpse inside Center Arch */}
        <path
          d="M680 520 C680 400 730 330 760 330 C790 330 840 400 840 520 Z"
          fill="url(#oliveFoliage)"
          opacity="0.35"
        />

        {/* Right Corner Perpendicular Stucco Wall (Cast Shadow) */}
        <path d="M1000 0 H1200 V520 H1000 Z" fill="url(#wallShadow)" opacity="0.7" />
        <path d="M1000 0 L1040 520 H1000 Z" fill="#24211E" opacity="0.08" />

        {/* Courtyard Travertine Stone Floor */}
        <path d="M0 500 L1200 500 L1200 800 L0 800 Z" fill="url(#travertineFloor)" />

        {/* Geometric Paver Lines (Subtle Hairlines) */}
        <line x1="0" y1="560" x2="1200" y2="560" stroke="#FAF7F2" strokeWidth="1.5" opacity="0.5" />
        <line x1="0" y1="640" x2="1200" y2="640" stroke="#FAF7F2" strokeWidth="1.5" opacity="0.5" />
        <line x1="0" y1="730" x2="1200" y2="730" stroke="#FAF7F2" strokeWidth="2" opacity="0.5" />

        <line x1="260" y1="500" x2="180" y2="800" stroke="#FAF7F2" strokeWidth="1.5" opacity="0.4" />
        <line x1="580" y1="500" x2="520" y2="800" stroke="#FAF7F2" strokeWidth="1.5" opacity="0.4" />
        <line x1="900" y1="500" x2="880" y2="800" stroke="#FAF7F2" strokeWidth="1.5" opacity="0.4" />

        {/* Diagonal Soft Morning Sunlight Shaft across the floor */}
        <polygon
          points="200,500 560,500 820,800 380,800"
          fill="#FFFBF2"
          opacity="0.35"
        />

        {/* Terracotta Vessel Left with Lush Olive Plant */}
        <g id="leftPlantGroup">
          {/* Shadow of Vessel */}
          <ellipse cx="230" cy="565" rx="55" ry="14" fill="#3D3328" opacity="0.22" />
          {/* Vessel */}
          <path
            d="M190 560 L200 480 Q230 460 260 480 L270 560 Q230 575 190 560 Z"
            fill="url(#terracottaVessel)"
          />
          {/* Vessel Rim */}
          <ellipse cx="230" cy="475" rx="32" ry="7" fill="#E28666" />
          <ellipse cx="230" cy="475" rx="28" ry="5" fill="#8E3F26" />

          {/* Olive Tree Branches & Leaves */}
          <path d="M230 475 Q225 410 210 350" stroke="#4B4336" strokeWidth="5" strokeLinecap="round" />
          <path d="M225 430 Q255 380 270 340" stroke="#4B4336" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M218 380 Q180 340 160 310" stroke="#4B4336" strokeWidth="3" strokeLinecap="round" />

          {/* Leaves cluster */}
          <ellipse cx="205" cy="345" rx="28" ry="12" transform="rotate(-30 205 345)" fill="url(#oliveFoliage)" />
          <ellipse cx="225" cy="330" rx="30" ry="13" transform="rotate(20 225 330)" fill="url(#oliveFoliage)" />
          <ellipse cx="265" cy="335" rx="26" ry="11" transform="rotate(45 265 335)" fill="url(#oliveFoliage)" />
          <ellipse cx="165" cy="315" rx="26" ry="11" transform="rotate(-40 165 315)" fill="url(#oliveFoliage)" />
          <ellipse cx="240" cy="360" rx="24" ry="10" transform="rotate(10 240 360)" fill="#737A60" />
          <ellipse cx="185" cy="355" rx="22" ry="9" transform="rotate(-15 185 355)" fill="#737A60" />
        </g>

        {/* Minimalist Artisanal Dining Table & Chairs in Courtyard */}
        <g id="diningGroup">
          {/* Cast Shadow under table and chairs */}
          <ellipse cx="720" cy="655" rx="140" ry="24" fill="#3A3226" opacity="0.25" />

          {/* Cane Dining Chair Left */}
          <path
            d="M610 650 L615 580 Q630 550 645 580 L650 650"
            stroke="url(#caneFurniture)"
            strokeWidth="4"
            fill="none"
          />
          <path d="M610 610 H650" stroke="url(#caneFurniture)" strokeWidth="4" />
          {/* Linen Cushion */}
          <rect x="612" y="605" width="36" height="8" rx="3" fill="#EDE4D5" />

          {/* Travertine Cafe Table */}
          {/* Table Legs */}
          <path d="M716 660 V590" stroke="#4A4136" strokeWidth="7" strokeLinecap="round" />
          <path d="M690 662 H742" stroke="#4A4136" strokeWidth="6" strokeLinecap="round" />
          {/* Table Top (Circular in perspective) */}
          <ellipse cx="716" cy="590" rx="70" ry="18" fill="#F4EFE6" stroke="#DFD5C2" strokeWidth="2" />
          <ellipse cx="716" cy="588" rx="66" ry="16" fill="#FAF7F2" />

          {/* Table setting: Ceramic mug & small bud vase */}
          <rect x="710" y="568" width="12" height="15" rx="3" fill="#C26747" />
          <ellipse cx="716" cy="568" rx="6" ry="2.5" fill="#E88867" />
          <path d="M716 568 Q724 550 726 542" stroke="#5D634E" strokeWidth="2" />

          {/* Cane Dining Chair Right */}
          <path
            d="M780 650 L785 580 Q800 550 815 580 L820 650"
            stroke="url(#caneFurniture)"
            strokeWidth="4"
            fill="none"
          />
          <path d="M780 610 H820" stroke="url(#caneFurniture)" strokeWidth="4" />
          <rect x="782" y="605" width="36" height="8" rx="3" fill="#EDE4D5" />
        </g>

        {/* Large Monstera Foliage in Foreground Right */}
        <g id="foregroundBotanicals" opacity="0.95">
          <path
            d="M1020 800 Q1060 690 1090 620"
            stroke="#3B402F"
            strokeWidth="7"
            strokeLinecap="round"
          />
          {/* Big Monstera leaf */}
          <path
            d="M1090 620 C1130 600 1190 640 1200 700 C1170 720 1120 710 1090 620 Z"
            fill="url(#oliveFoliage)"
          />
          <path
            d="M1060 660 C1100 640 1150 670 1170 720 C1130 730 1090 710 1060 660 Z"
            fill="#6B725A"
          />
        </g>

        {/* Architectural Vignette Overlay */}
        <rect
          width="1200"
          height="800"
          fill="none"
          stroke="#FAF7F2"
          strokeWidth="32"
          opacity="0.3"
        />
      </svg>
    </div>
  );
};

export const CoffeeStillLifeArtwork: React.FC<{ className?: string }> = ({ className = '' }) => {
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
          <linearGradient id="coffeeStone" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F5EFE6" />
            <stop offset="50%" stopColor="#ECE4D6" />
            <stop offset="100%" stopColor="#DFD4C2" />
          </linearGradient>

          <linearGradient id="ceramicCup" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FAF7F2" />
            <stop offset="60%" stopColor="#EDE4D6" />
            <stop offset="100%" stopColor="#D8CCA8" />
          </linearGradient>

          <linearGradient id="espressoCrema" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#9C532C" />
            <stop offset="50%" stopColor="#6E371C" />
            <stop offset="100%" stopColor="#4A2210" />
          </linearGradient>

          <linearGradient id="coldBrewBottle" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#3E271E" />
            <stop offset="50%" stopColor="#6A4532" />
            <stop offset="100%" stopColor="#2E1C15" />
          </linearGradient>

          <filter id="shadowBlur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="16" />
          </filter>
        </defs>

        {/* Travertine Tabletop */}
        <rect width="800" height="600" fill="url(#coffeeStone)" />

        {/* Soft Organic Palm Shadow from upper left window */}
        <path
          d="M0 0 Q200 120 400 60 Q300 240 500 200 Q250 360 420 380 Q100 480 20 600 H0 Z"
          fill="#3E382E"
          opacity="0.08"
          filter="url(#shadowBlur)"
        />

        {/* Folded Natural Linen Napkin */}
        <polygon
          points="180,240 420,180 480,420 220,460"
          fill="#EDE5D7"
          opacity="0.9"
        />
        <line x1="200" y1="260" x2="430" y2="200" stroke="#DFD4C0" strokeWidth="1" strokeDasharray="4 4" />

        {/* Ceramic Saucer & Coffee Cup */}
        {/* Saucer Shadow */}
        <ellipse cx="330" cy="350" rx="140" ry="50" fill="#383025" opacity="0.18" filter="url(#shadowBlur)" />
        {/* Saucer */}
        <ellipse cx="330" cy="340" rx="130" ry="45" fill="url(#ceramicCup)" />
        <ellipse cx="330" cy="340" rx="110" ry="38" fill="#F4EFE6" stroke="#D3C7B2" strokeWidth="1.5" />

        {/* Cup */}
        <path
          d="M260 320 C260 380 400 380 400 320 L400 260 H260 Z"
          fill="url(#ceramicCup)"
        />
        {/* Cup Handle */}
        <path
          d="M395 275 C430 275 430 330 395 330"
          stroke="url(#ceramicCup)"
          strokeWidth="10"
          strokeLinecap="round"
          fill="none"
        />

        {/* Coffee Surface with Latte Art */}
        <ellipse cx="330" cy="260" rx="68" ry="24" fill="url(#espressoCrema)" />
        {/* Microfoam Rosette */}
        <ellipse cx="330" cy="260" rx="34" ry="12" fill="#FAF7F2" opacity="0.92" />
        <path
          d="M330 248 C320 255 320 265 330 272 C340 265 340 255 330 248 Z"
          fill="#522711"
        />

        {/* Cold Brew Amber Bottle */}
        {/* Bottle Shadow */}
        <ellipse cx="560" cy="400" rx="55" ry="18" fill="#383025" opacity="0.22" filter="url(#shadowBlur)" />
        {/* Amber Glass Body */}
        <rect x="515" y="220" width="90" height="170" rx="16" fill="url(#coldBrewBottle)" />
        {/* Bottle Neck */}
        <path d="M545 160 H575 V220 H545 Z" fill="url(#coldBrewBottle)" />
        {/* Cork Cap */}
        <rect x="542" y="145" width="36" height="18" rx="4" fill="#C29A6B" />

        {/* Minimalist Typographic Label on Amber Bottle */}
        <rect x="525" y="250" width="70" height="90" rx="3" fill="#FAF7F2" />
        <text x="560" y="278" textAnchor="middle" fill="#24211E" fontSize="9" fontWeight="600" letterSpacing="2">
          KOI COFFEE
        </text>
        <line x1="535" y1="288" x2="585" y2="288" stroke="#C26747" strokeWidth="1" />
        <text x="560" y="304" textAnchor="middle" fill="#5D634E" fontSize="7" letterSpacing="1">
          18H COLD BREW
        </text>
        <text x="560" y="322" textAnchor="middle" fill="#7C756B" fontSize="6">
          SINGLE ORIGIN
        </text>

        {/* Scattered Roasted Coffee Beans */}
        <ellipse cx="230" cy="420" rx="10" ry="7" transform="rotate(30 230 420)" fill="#4A2614" />
        <line x1="226" y1="422" x2="234" y2="418" stroke="#2B150A" strokeWidth="1.5" />

        <ellipse cx="255" cy="435" rx="9" ry="6" transform="rotate(-40 255 435)" fill="#542B17" />
        <line x1="251" y1="433" x2="259" y2="437" stroke="#2B150A" strokeWidth="1.5" />
      </svg>
    </div>
  );
};

export const CulinaryPlatterArtwork: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full h-full overflow-hidden bg-[#F4EFE6] select-none ${className}`}>
      <svg
        viewBox="0 0 800 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="stonewarePlate" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2E2A27" />
            <stop offset="50%" stopColor="#24201D" />
            <stop offset="100%" stopColor="#1A1715" />
          </linearGradient>

          <linearGradient id="reshmiPaneer" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFF7E8" />
            <stop offset="60%" stopColor="#F5E4C4" />
            <stop offset="100%" stopColor="#E2CA9B" />
          </linearGradient>

          <linearGradient id="charredMark" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#4A2211" />
            <stop offset="50%" stopColor="#2B1408" />
            <stop offset="100%" stopColor="#5E2C15" />
          </linearGradient>

          <filter id="shadowPlate" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="20" />
          </filter>
        </defs>

        {/* Clean Sand Surface */}
        <rect width="800" height="600" fill="#ECE5DA" />

        {/* Plate Shadow */}
        <ellipse cx="400" cy="310" rx="260" ry="150" fill="#201C18" opacity="0.25" filter="url(#shadowPlate)" />

        {/* Artisanal Black Stoneware Platter */}
        <ellipse cx="400" cy="300" rx="250" ry="145" fill="url(#stonewarePlate)" />
        <ellipse cx="400" cy="295" rx="225" ry="130" fill="#24201D" stroke="#3A3530" strokeWidth="2" />

        {/* Saffron & Mint Puree Artistic Swirls */}
        <path
          d="M240 310 Q340 220 480 250 Q560 270 580 320"
          stroke="#C26747"
          strokeWidth="10"
          strokeLinecap="round"
          opacity="0.85"
        />
        <path
          d="M260 325 Q360 240 500 270"
          stroke="#5D634E"
          strokeWidth="6"
          strokeLinecap="round"
          opacity="0.8"
        />

        {/* Skewered & Plated Reshmi Malai Paneer Cubes */}
        {/* Cube 1 */}
        <g transform="translate(280, 250) rotate(-8)">
          <rect x="0" y="0" width="70" height="65" rx="8" fill="url(#reshmiPaneer)" />
          {/* Char Marks */}
          <line x1="8" y1="18" x2="62" y2="18" stroke="url(#charredMark)" strokeWidth="5" strokeLinecap="round" />
          <line x1="12" y1="36" x2="58" y2="36" stroke="url(#charredMark)" strokeWidth="5" strokeLinecap="round" />
          <line x1="10" y1="52" x2="60" y2="52" stroke="url(#charredMark)" strokeWidth="4" strokeLinecap="round" />
        </g>

        {/* Cube 2 */}
        <g transform="translate(365, 240) rotate(5)">
          <rect x="0" y="0" width="75" height="70" rx="8" fill="url(#reshmiPaneer)" />
          <line x1="10" y1="20" x2="65" y2="20" stroke="url(#charredMark)" strokeWidth="6" strokeLinecap="round" />
          <line x1="15" y1="40" x2="60" y2="40" stroke="url(#charredMark)" strokeWidth="5" strokeLinecap="round" />
          <line x1="12" y1="58" x2="63" y2="58" stroke="url(#charredMark)" strokeWidth="4" strokeLinecap="round" />
        </g>

        {/* Cube 3 */}
        <g transform="translate(455, 255) rotate(-4)">
          <rect x="0" y="0" width="70" height="65" rx="8" fill="url(#reshmiPaneer)" />
          <line x1="8" y1="18" x2="62" y2="18" stroke="url(#charredMark)" strokeWidth="5" strokeLinecap="round" />
          <line x1="12" y1="38" x2="58" y2="38" stroke="url(#charredMark)" strokeWidth="5" strokeLinecap="round" />
          <line x1="10" y1="52" x2="60" y2="52" stroke="url(#charredMark)" strokeWidth="4" strokeLinecap="round" />
        </g>

        {/* Charred Bell Peppers & Pickled Onion Ribbons */}
        <path d="M350 245 Q360 220 375 235" stroke="#C26747" strokeWidth="8" strokeLinecap="round" />
        <path d="M440 250 Q455 225 470 240" stroke="#E05B5B" strokeWidth="6" strokeLinecap="round" />
        <ellipse cx="320" cy="335" rx="14" ry="7" fill="#E8829B" opacity="0.9" />
        <ellipse cx="500" cy="330" rx="16" ry="8" fill="#E8829B" opacity="0.9" />

        {/* Microgreens Garnish */}
        <path d="M310 270 Q315 260 325 265" stroke="#798E56" strokeWidth="2.5" />
        <circle cx="327" cy="265" r="3" fill="#8EA865" />
        <path d="M400 255 Q410 245 420 250" stroke="#798E56" strokeWidth="2.5" />
        <circle cx="422" cy="250" r="3" fill="#8EA865" />
        <path d="M490 270 Q495 260 505 262" stroke="#798E56" strokeWidth="2.5" />
        <circle cx="506" cy="262" r="3" fill="#8EA865" />
      </svg>
    </div>
  );
};
