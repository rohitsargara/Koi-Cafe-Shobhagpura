import React from 'react';
import { ArrowRight, Clock, MapPin, Coffee, Sparkles } from 'lucide-react';
import { HeroCourtyardArtwork } from './visuals/ArchitecturalScenes';
import { BUSINESS_INFO } from '../data/cafeData';

interface HeroProps {
  onOpenReservation: () => void;
  onExploreMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation, onExploreMenu }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:py-20 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Asymmetrical 2-Column Split: Editorial Prose Left, Grand Architectural Courtyard Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: 7 cols */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Quiet Unboxed Metadata (Zero-Pill Discipline) */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#7C756B] mb-6 tracking-wide uppercase">
              <span className="text-[#C26747] font-semibold">Udaipur, Rajasthan</span>
              <span aria-hidden="true">·</span>
              <span>Bali-Inspired Courtyard</span>
              <span aria-hidden="true">·</span>
              <span>100% Pure Vegetarian</span>
            </div>

            {/* Display Headline with text-wrap: balance and no orphan words */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#24211E] font-normal leading-[1.12] tracking-tight mb-7 [text-wrap:balance]">
              Where serene architectural stillness meets handcrafted culinary warmth.
            </h1>

            {/* Editorial Body Prose */}
            <p className="text-base sm:text-lg text-[#554F47] leading-relaxed max-w-2xl mb-9 font-body font-light">
              Tucked quietly into Shobhagpura, Koi Cafe &amp; Social reinterprets Udaipur’s leisure.
              Bask in sun-dappled limestone archways, slow-dripped single origin coffees,
              botanical mocktails, and thoughtful pure-vegetarian gastronomy crafted with seasonal
              restraint.
            </p>

            {/* Primary Action & Secondary Text Link */}
            <div className="flex flex-wrap items-center gap-5 mb-10">
              <button
                onClick={onOpenReservation}
                type="button"
                className="px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#FAF7F2] bg-[#24211E] hover:bg-[#C26747] rounded-md transition-all duration-200 shadow-warm-md flex items-center gap-2.5 active:scale-[0.98]"
              >
                <span>Reserve a Courtyard Table</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={onExploreMenu}
                type="button"
                className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#24211E] hover:text-[#C26747] border border-[#24211E]/20 hover:border-[#C26747] rounded-md transition-all bg-[#FAF7F2]"
              >
                Explore Curated Menu
              </button>
            </div>

            {/* Quiet verified details footnote */}
            <div className="pt-6 border-t border-[#24211E]/10 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#7C756B]">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#C26747]" />
                <span>Near Nayara Petrol Pump, Shobhagpura</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#5D634E]" />
                <span>Open Daily 11:00 AM – 11:00 PM</span>
              </div>
            </div>
          </div>

          {/* Right Column: 5 cols — Grand Architectural Moment */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-warm-lg border border-[#24211E]/8">
              <HeroCourtyardArtwork className="w-full h-full" />

              {/* Subdued Architectural Caption Inset */}
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#FAF7F2]/90 backdrop-blur-md rounded-xl border border-[#24211E]/8 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold tracking-wider uppercase text-[#24211E]">The Sunken Courtyard</p>
                  <p className="text-[11px] text-[#7C756B] mt-0.5">Dappled natural light &amp; mature olive foliage</p>
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#C26747] font-medium">
                  Alfresco
                </span>
              </div>
            </div>

            {/* Subtle floating architectural detail accent */}
            <div className="hidden sm:block absolute -bottom-5 -left-6 bg-[#FAF7F2] p-4 rounded-xl border border-[#24211E]/10 shadow-warm-md max-w-[210px]">
              <p className="text-[11px] font-mono text-[#5D634E] uppercase tracking-wider mb-1">Cuisine Philosophy</p>
              <p className="text-xs font-serif text-[#24211E] italic leading-tight">
                “100% Pure vegetarian, zero compromise on depth, texture &amp; beauty.”
              </p>
            </div>
          </div>
        </div>

        {/* Full-width 4-column Trust & Detail Strip below the split */}
        <div className="mt-16 pt-8 border-t border-[#24211E]/10 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#7C756B]">Kitchen Standard</span>
            <p className="text-lg font-serif text-[#24211E] mt-1">100% Pure Vegetarian</p>
            <p className="text-xs text-[#7C756B] mt-0.5">Dedicated Jain &amp; vegan menus</p>
          </div>
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#7C756B]">Coffee Programme</span>
            <p className="text-lg font-serif text-[#24211E] mt-1">Single-Origin Roasts</p>
            <p className="text-xs text-[#7C756B] mt-0.5">V60 pour-overs &amp; 18h cold brews</p>
          </div>
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#7C756B]">Spatial Design</span>
            <p className="text-lg font-serif text-[#24211E] mt-1">Bali-Inspired Stucco</p>
            <p className="text-xs text-[#7C756B] mt-0.5">Lime-wash walls &amp; alfresco patio</p>
          </div>
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#7C756B]">Hospitality</span>
            <p className="text-lg font-serif text-[#24211E] mt-1">Walk-ins &amp; Bookings</p>
            <p className="text-xs text-[#7C756B] mt-0.5">+91 99107 50890 · Open till 11 PM</p>
          </div>
        </div>
      </div>
    </section>
  );
};
