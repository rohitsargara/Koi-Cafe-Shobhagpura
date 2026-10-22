import React, { useState } from 'react';
import { ARCHITECTURAL_SPACES } from '../data/cafeData';
import { HeroCourtyardArtwork } from './visuals/ArchitecturalScenes';
import { ArchedVerandaArtwork, IndoorLoungeArtwork, EveningPatioArtwork } from './visuals/SpacesArtworks';
import { Users, Clock, Sparkles, Check, ArrowRight } from 'lucide-react';

interface SpacesGalleryProps {
  onOpenReservation: () => void;
  onOpenPrivateEvents: () => void;
}

export const SpacesGallery: React.FC<SpacesGalleryProps> = ({
  onOpenReservation,
  onOpenPrivateEvents,
}) => {
  const [activeSpaceId, setActiveSpaceId] = useState<string>('courtyard');

  const activeSpace = ARCHITECTURAL_SPACES.find((s) => s.id === activeSpaceId) || ARCHITECTURAL_SPACES[0];

  const renderActiveArtwork = () => {
    switch (activeSpaceId) {
      case 'courtyard':
        return <HeroCourtyardArtwork className="w-full h-full" />;
      case 'veranda':
        return <ArchedVerandaArtwork className="w-full h-full" />;
      case 'lounge':
        return <IndoorLoungeArtwork className="w-full h-full" />;
      default:
        return <HeroCourtyardArtwork className="w-full h-full" />;
    }
  };

  return (
    <section id="spaces" className="py-20 lg:py-28 bg-[#F4EFE6] border-y border-[#24211E]/8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#7C756B] mb-3">
              <span>03. Spatial Architecture</span>
              <span aria-hidden="true">·</span>
              <span>Bali Meets Udaipur</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#24211E] font-normal leading-tight tracking-tight [text-wrap:balance]">
              Three distinct realms of calm and conversation.
            </h2>
            <p className="text-sm sm:text-base text-[#615A51] font-light mt-3 leading-relaxed">
              Designed as a sequence of transitions—from the sun-kissed open limestone courtyard to shaded sculptural arches and intimate climate-controlled corners.
            </p>
          </div>

          {/* Space Selection Buttons */}
          <div className="flex items-center gap-1.5 p-1 bg-[#EDE5DA] rounded-lg">
            {ARCHITECTURAL_SPACES.map((space) => (
              <button
                key={space.id}
                onClick={() => setActiveSpaceId(space.id)}
                type="button"
                className={`px-4 py-2 text-xs font-medium rounded-md transition-all whitespace-nowrap ${
                  activeSpaceId === space.id
                    ? 'bg-[#FAF7F2] text-[#24211E] font-semibold shadow-warm-sm'
                    : 'text-[#615A51] hover:text-[#24211E]'
                }`}
              >
                {space.title}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetrical Space Feature Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Visual Showcase (7 cols) */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/11] rounded-2xl overflow-hidden shadow-warm-lg border border-[#24211E]/10 bg-[#FAF7F2]">
              {renderActiveArtwork()}

              {/* Quiet Architectural Tag in Bottom Left */}
              <div className="absolute bottom-4 left-4 p-3 bg-[#FAF7F2]/90 backdrop-blur-md rounded-lg border border-[#24211E]/8">
                <p className="text-xs font-mono text-[#5D634E] uppercase tracking-wider">{activeSpace.vibe}</p>
                <p className="text-xs text-[#24211E] font-medium">{activeSpace.timeOfDay}</p>
              </div>
            </div>
          </div>

          {/* Space Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#C26747]">
                Spatial Profile
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#24211E] font-normal mt-1">
                {activeSpace.title}
              </h3>
              <p className="text-sm font-serif italic text-[#7C756B] mt-0.5">
                {activeSpace.subtitle}
              </p>
            </div>

            <p className="text-sm sm:text-base text-[#554F47] leading-relaxed font-light">
              {activeSpace.description}
            </p>

            {/* Architectural Features List */}
            <div className="pt-4 border-t border-[#24211E]/10 space-y-2.5">
              <p className="text-xs font-mono uppercase tracking-wider text-[#7C756B]">
                Key Architectural Details
              </p>
              <div className="grid grid-cols-1 gap-2">
                {activeSpace.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-[#4A453E]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C26747]" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Capacity & Timing metadata */}
            <div className="p-4 bg-[#FAF7F2] rounded-xl border border-[#24211E]/8 flex items-center justify-between text-xs text-[#554F47]">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-[#5D634E]" />
                <span>{activeSpace.capacity}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#C26747]" />
                <span>{activeSpace.timeOfDay}</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenReservation}
                type="button"
                className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#FAF7F2] bg-[#24211E] hover:bg-[#C26747] rounded-md transition-colors shadow-warm-sm"
              >
                Reserve in {activeSpace.title}
              </button>
              <button
                onClick={onOpenPrivateEvents}
                type="button"
                className="px-5 py-3 text-xs font-medium uppercase tracking-wider text-[#24211E] hover:text-[#C26747] border border-[#24211E]/20 rounded-md transition-colors"
              >
                Inquire for Private Gatherings
              </button>
            </div>
          </div>
        </div>

        {/* Evening Atmosphere Photographic Banner */}
        <div className="mt-16 pt-12 border-t border-[#24211E]/10">
          <div className="relative aspect-[21/9] sm:aspect-[16/7] rounded-2xl overflow-hidden shadow-warm-lg border border-[#24211E]/10">
            <EveningPatioArtwork className="w-full h-full" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#24211E]/80 via-[#24211E]/40 to-transparent flex items-center">
              <div className="p-8 sm:p-12 max-w-xl text-[#FAF7F2]">
                <span className="text-xs font-mono uppercase tracking-widest text-[#D8CCA8]">
                  After Sunset in Shobhagpura
                </span>
                <h4 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-normal mt-2 leading-tight">
                  Candlelit evenings under the Udaipur night sky.
                </h4>
                <p className="text-xs sm:text-sm text-[#E0D7C6] font-light mt-2 leading-relaxed">
                  As dusk settles, soft brass lanterns cast a warm golden glow across the limestone pavers.
                  The perfect setting for late-night coffee, Neapolitan pizza, and intimate dinner conversations.
                </p>
                <div className="mt-5">
                  <button
                    onClick={onOpenReservation}
                    type="button"
                    className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider bg-[#FAF7F2] text-[#24211E] hover:bg-[#C26747] hover:text-[#FAF7F2] rounded-md transition-colors shadow-warm-sm"
                  >
                    Book an Evening Dinner Table
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
