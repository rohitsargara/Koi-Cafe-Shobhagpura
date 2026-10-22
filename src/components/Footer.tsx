import React from 'react';
import { BUSINESS_INFO } from '../data/cafeData';
import { Phone, MapPin, Clock, ArrowUp, ExternalLink } from 'lucide-react';

interface FooterProps {
  onOpenReservation: () => void;
  onOpenPrivateEvents: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenReservation, onOpenPrivateEvents }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#24211E] text-[#FAF7F2] pt-16 pb-12 border-t border-[#FAF7F2]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-[#FAF7F2]/10">
          {/* Brand & Ethos (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="text-2xl sm:text-3xl font-serif text-[#FAF7F2]">
              Koi Cafe &amp; Social
            </h3>
            <p className="text-xs text-[#D8CCA8] font-light leading-relaxed max-w-sm">
              A pure-vegetarian cafe and artisanal coffee sanctuary in Udaipur.
              Balancing Bali courtyard serenity with contemporary culinary craftsmanship.
            </p>
            <div className="pt-2">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#C26747] font-medium">
                100% Pure Vegetarian · Udaipur
              </span>
            </div>
          </div>

          {/* Quick Navigation (2 cols) */}
          <div className="md:col-span-2 space-y-3">
            <p className="text-xs font-mono uppercase tracking-wider text-[#D8CCA8]">
              The Sanctuary
            </p>
            <ul className="space-y-2 text-xs text-[#FAF7F2]/80">
              <li>
                <a href="#philosophy" className="hover:text-[#C26747] transition-colors">
                  Architectural Ethos
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#C26747] transition-colors">
                  Curated Menu
                </a>
              </li>
              <li>
                <a href="#spaces" className="hover:text-[#C26747] transition-colors">
                  Courtyard Spaces
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-[#C26747] transition-colors">
                  Culinary Craft
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#C26747] transition-colors">
                  Location &amp; Map
                </a>
              </li>
            </ul>
          </div>

          {/* Guest Services (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-mono uppercase tracking-wider text-[#D8CCA8]">
              Guest Experiences
            </p>
            <ul className="space-y-2 text-xs text-[#FAF7F2]/80">
              <li>
                <button
                  onClick={onOpenReservation}
                  className="hover:text-[#C26747] transition-colors text-left"
                >
                  Table Reservations
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenPrivateEvents}
                  className="hover:text-[#C26747] transition-colors text-left"
                >
                  Private Gatherings &amp; Buyouts
                </button>
              </li>
              <li>
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C26747] transition-colors flex items-center gap-1"
                >
                  <span>Google Maps Directions</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C26747] transition-colors flex items-center gap-1"
                >
                  <span>WhatsApp Concierge</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Operating Hours & Verified Info (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-mono uppercase tracking-wider text-[#D8CCA8]">
              Sanctuary Hours
            </p>
            <div className="text-xs text-[#FAF7F2]/80 space-y-1">
              <p className="font-medium text-[#FAF7F2]">Open Daily · 7 Days a Week</p>
              <p className="font-mono text-[#D8CCA8]">11:00 AM – 11:00 PM</p>
              <p className="text-[11px] text-[#A69E92] pt-1">Kitchen Last Order: 10:30 PM</p>
            </div>

            <div className="pt-2 text-xs text-[#FAF7F2]/80">
              <p className="font-mono">{BUSINESS_INFO.phoneFormatted}</p>
              <p className="text-[11px] text-[#A69E92] mt-0.5">Shobhagpura, Udaipur 313001</p>
            </div>
          </div>
        </div>

        {/* Quiet Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A69E92]">
          <p>© {new Date().getFullYear()} Koi Cafe &amp; Social. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <span className="text-[11px]">Clean White Bali Architecture in Udaipur</span>
            <button
              onClick={scrollToTop}
              className="hover:text-[#FAF7F2] transition-colors flex items-center gap-1"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
