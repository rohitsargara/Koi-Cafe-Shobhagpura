import React, { useState, useMemo } from 'react';
import { MapPin, Clock, Phone, MessageSquare, Copy, Check, ExternalLink, Navigation } from 'lucide-react';
import { BUSINESS_INFO } from '../data/cafeData';

export const LocationHours: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyAddress = () => {
    navigator.clipboard.writeText(BUSINESS_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  // Calculate live opening status
  const currentStatus = useMemo(() => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const currentDecimal = hours + minutes / 60;
    // Open 11:00 AM (11.0) to 11:00 PM (23.0)
    const isOpen = currentDecimal >= 11 && currentDecimal < 23;
    return {
      isOpen,
      label: isOpen ? 'Open Right Now' : 'Closed · Opens at 11:00 AM',
      closingSoon: isOpen && currentDecimal >= 22.5,
    };
  }, []);

  return (
    <section id="location" className="py-20 lg:py-28 bg-[#F4EFE6] border-t border-[#24211E]/8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#7C756B] mb-3">
            <span>05. Visit &amp; Connect</span>
            <span aria-hidden="true">·</span>
            <span>Shobhagpura, Udaipur</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#24211E] font-normal leading-tight tracking-tight [text-wrap:balance]">
            Finding the courtyard.
          </h2>
          <p className="text-sm sm:text-base text-[#615A51] font-light mt-3 leading-relaxed">
            Located just minutes from Sukhadia Circle and Celebration Mall, in the tranquil northern sanctuary of Shobhagpura.
            Valet and easy street parking available.
          </p>
        </div>

        {/* 2-Column Asymmetrical Layout: Verified Details Left, Interactive Map Canvas Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Details Card (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Live Operational Status Banner */}
            <div className="p-4 bg-[#FAF7F2] rounded-xl border border-[#24211E]/8 flex items-center justify-between shadow-warm-sm">
              <div className="flex items-center gap-2.5">
                <div
                  className={`w-2.5 h-2.5 rounded-full ${
                    currentStatus.isOpen ? 'bg-[#5D634E]' : 'bg-[#7C756B]'
                  }`}
                />
                <div>
                  <p className="text-xs font-semibold text-[#24211E]">{currentStatus.label}</p>
                  <p className="text-[11px] text-[#7C756B]">Operating Hours: 11:00 AM – 11:00 PM</p>
                </div>
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#C26747]">
                Open Daily
              </span>
            </div>

            {/* Address Block */}
            <div className="p-6 bg-[#FAF7F2] rounded-xl border border-[#24211E]/8 space-y-4 shadow-warm-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C26747] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-wider text-[#7C756B]">
                    Full Physical Address
                  </h3>
                  <p className="text-sm font-medium text-[#24211E] mt-1 leading-snug">
                    {BUSINESS_INFO.address}
                  </p>
                  <p className="text-xs text-[#5D634E] mt-1 font-mono">
                    Landmark: Directly adjacent to Nayara Petrol Pump, Shobhagpura
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-[#24211E]/8 flex flex-wrap gap-2">
                <button
                  onClick={copyAddress}
                  type="button"
                  className="px-3 py-1.5 text-xs font-medium bg-[#F4EFE6] hover:bg-[#EDE5DA] text-[#24211E] rounded-md transition-colors flex items-center gap-1.5"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#5D634E]" />
                      <span>Address Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>

                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 text-xs font-medium bg-[#24211E] text-[#FAF7F2] hover:bg-[#C26747] rounded-md transition-colors flex items-center gap-1.5"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Driving Directions</span>
                </a>
              </div>
            </div>

            {/* Direct Contact & WhatsApp */}
            <div className="p-6 bg-[#FAF7F2] rounded-xl border border-[#24211E]/8 space-y-4 shadow-warm-sm">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-wider text-[#7C756B]">
                    Direct Concierge &amp; Reservations
                  </h3>
                  <p className="text-lg font-serif text-[#24211E] mt-1 font-mono">
                    {BUSINESS_INFO.phoneFormatted}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="flex-1 py-2.5 text-center text-xs font-semibold uppercase tracking-wider bg-[#FAF7F2] border border-[#24211E]/20 hover:border-[#24211E] text-[#24211E] rounded-md transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C26747]" />
                  <span>Voice Call</span>
                </a>
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 text-center text-xs font-semibold uppercase tracking-wider bg-[#5D634E] hover:bg-[#484D3C] text-[#FAF7F2] rounded-md transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Drive Times from Udaipur Centers */}
            <div className="p-5 bg-[#FAF7F2] rounded-xl border border-[#24211E]/8 shadow-warm-sm">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#7C756B] mb-3">
                Estimated Transit Times
              </h4>
              <div className="space-y-2 text-xs">
                {BUSINESS_INFO.nearbyLandmarks.map((landmark, idx) => (
                  <div key={idx} className="flex items-center justify-between py-1 border-b border-[#24211E]/5 last:border-0">
                    <span className="text-[#24211E] font-medium">{landmark.name}</span>
                    <div className="flex items-center gap-2 text-[#7C756B]">
                      <span>{landmark.distance}</span>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono text-[#5D634E]">{landmark.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Visual Map & Landmark Canvas (7 cols) */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden shadow-warm-lg border border-[#24211E]/10 bg-[#FAF7F2]">
              {/* Stylized Udaipur Architectural Map Vector */}
              <svg
                viewBox="0 0 800 600"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full object-cover"
              >
                {/* Map Background Canvas */}
                <rect width="800" height="600" fill="#FAF7F2" />

                {/* Topographic & Road Grids */}
                {/* Major Arterial Roads */}
                {/* Shobhagpura Main Road */}
                <path
                  d="M0 240 Q400 230 800 280"
                  stroke="#EDE5DA"
                  strokeWidth="28"
                  strokeLinecap="round"
                />
                <path
                  d="M0 240 Q400 230 800 280"
                  stroke="#FAF7F2"
                  strokeWidth="2"
                  strokeDasharray="12 12"
                />

                {/* 100 Feet Road / Sukhadia connector */}
                <path
                  d="M440 0 V600"
                  stroke="#EDE5DA"
                  strokeWidth="24"
                />
                <path
                  d="M440 0 V600"
                  stroke="#FAF7F2"
                  strokeWidth="2"
                  strokeDasharray="12 12"
                />

                {/* Secondary streets */}
                <path d="M220 120 H680" stroke="#F4EFE6" strokeWidth="12" />
                <path d="M120 440 H740" stroke="#F4EFE6" strokeWidth="12" />
                <path d="M620 180 V520" stroke="#F4EFE6" strokeWidth="12" />

                {/* Fateh Sagar Lake water body silhouette (West side representation) */}
                <path
                  d="M0 380 C80 390 120 440 100 520 C90 560 50 600 0 600 Z"
                  fill="#E2EBE8"
                  opacity="0.8"
                />
                <text x="25" y="520" fill="#78968F" fontSize="11" fontFamily="sans-serif" letterSpacing="1">
                  Fateh Sagar Lake
                </text>

                {/* Sukhadia Circle Roundabout graphic */}
                <circle cx="440" cy="460" r="28" fill="#EDE5DA" stroke="#D8CCA8" strokeWidth="3" />
                <circle cx="440" cy="460" r="8" fill="#C26747" opacity="0.6" />
                <text x="440" y="510" textAnchor="middle" fill="#7C756B" fontSize="11" fontFamily="sans-serif">
                  Sukhadia Circle (7 min)
                </text>

                {/* Celebration Mall landmark */}
                <rect x="580" y="360" width="80" height="40" rx="4" fill="#EDE5DA" />
                <text x="620" y="384" textAnchor="middle" fill="#7C756B" fontSize="10" fontFamily="sans-serif">
                  Celebration Mall
                </text>

                {/* Nayara Petrol Pump Landmark */}
                <rect x="360" y="200" width="70" height="32" rx="4" fill="#EDE5DA" />
                <text x="395" y="220" textAnchor="middle" fill="#7C756B" fontSize="9" fontFamily="sans-serif">
                  Nayara Station
                </text>

                {/* KOI CAFE & SOCIAL MAIN PIN */}
                <g transform="translate(440, 240)">
                  {/* Pulse halo */}
                  <circle cx="0" cy="0" r="38" fill="#C26747" opacity="0.15" />
                  <circle cx="0" cy="0" r="24" fill="#C26747" opacity="0.25" />

                  {/* Pin Base */}
                  <circle cx="0" cy="0" r="14" fill="#24211E" stroke="#FAF7F2" strokeWidth="3" />
                  <circle cx="0" cy="0" r="5" fill="#C26747" />

                  {/* Tooltip Card */}
                  <rect x="-110" y="-80" width="220" height="60" rx="8" fill="#24211E" filter="drop-shadow(0 4px 12px rgba(0,0,0,0.15))" />
                  {/* Tooltip arrow */}
                  <polygon points="0,-20 -8,-20 0,-12 8,-20" fill="#24211E" />
                  <text x="0" y="-58" textAnchor="middle" fill="#FAF7F2" fontSize="12" fontWeight="600" fontFamily="serif">
                    Koi Cafe &amp; Social
                  </text>
                  <text x="0" y="-40" textAnchor="middle" fill="#D8CCA8" fontSize="10" fontFamily="sans-serif">
                    Plot No. 12/13, Shobhagpura
                  </text>
                  <text x="0" y="-28" textAnchor="middle" fill="#C26747" fontSize="9" fontWeight="600" letterSpacing="1">
                    OPEN · 11 AM - 11 PM
                  </text>
                </g>

                {/* Map Compass Rose */}
                <g transform="translate(740, 60)">
                  <circle cx="0" cy="0" r="18" fill="#FAF7F2" stroke="#24211E" strokeWidth="1" opacity="0.3" />
                  <line x1="0" y1="-14" x2="0" y2="14" stroke="#24211E" strokeWidth="1.5" />
                  <line x1="-14" y1="0" x2="14" y2="0" stroke="#24211E" strokeWidth="1.5" />
                  <text x="0" y="-18" textAnchor="middle" fill="#C26747" fontSize="9" fontWeight="bold">N</text>
                </g>
              </svg>

              {/* Map Footer Action Bar */}
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#FAF7F2]/95 backdrop-blur-md rounded-xl border border-[#24211E]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold text-[#24211E]">Plot 12/13, Shobhagpura, Udaipur 313001</p>
                  <p className="text-[11px] text-[#7C756B]">Near Nayara Petrol Pump · Valet Available</p>
                </div>
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs font-semibold uppercase tracking-wider bg-[#24211E] text-[#FAF7F2] hover:bg-[#C26747] rounded-md transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
