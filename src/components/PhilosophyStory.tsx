import React from 'react';
import { Sparkles, Sun, Compass } from 'lucide-react';
import { ArchedVerandaArtwork } from './visuals/SpacesArtworks';

export const PhilosophyStory: React.FC = () => {
  return (
    <section id="philosophy" className="py-20 lg:py-28 bg-[#F4EFE6] border-y border-[#24211E]/8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Editorial Section Kicker & Title */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#7C756B] mb-3">
            <span>01. Spatial &amp; Culinary Ethos</span>
            <span aria-hidden="true">·</span>
            <span>Udaipur Sanctuary</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#24211E] font-normal leading-[1.18] tracking-tight [text-wrap:balance]">
            An intentional sanctuary sculpted in lime, sand, and stone.
          </h2>
        </div>

        {/* Asymmetrical Layout: Artwork Left, Dual Narrative Columns Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Column: 5 cols */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-warm-md border border-[#24211E]/8">
              <ArchedVerandaArtwork className="w-full h-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#24211E]/30 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5 text-[#FAF7F2]">
                <p className="text-xs uppercase tracking-widest font-mono text-[#EDE5DA]">The Colonnade</p>
                <p className="text-lg font-serif italic mt-0.5">Sculptural arches channeling morning sunlight</p>
              </div>
            </div>
          </div>

          {/* Narrative Content: 7 cols */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-8">
            <div className="space-y-5 text-base sm:text-lg text-[#4A453E] font-light leading-relaxed">
              <p>
                In a city celebrated for heritage palaces and lakes, <strong className="font-medium text-[#24211E]">Koi Cafe &amp; Social</strong> was
                born from a desire for contemporary repose. We envisioned a space where the clean, breathable lines
                of Bali courtyards merge naturally with the earthen warmth of Rajasthan.
              </p>
              <p>
                Every surface has been chosen for its tactile honesty: rough-troweled lime plaster that breathes with the desert climate,
                unpolished travertine pavers cool to the touch, and hand-turned terracotta vessels bearing olive trees.
                Nothing is rushed here.
              </p>
            </div>

            {/* Asymmetrical 2-Part Detail Grid (not generic 3 cards!) */}
            <div className="pt-6 border-t border-[#24211E]/12 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#C26747]">Mindful Vegetarianism</span>
                <h3 className="text-xl font-serif text-[#24211E]">No Compromise on Depth</h3>
                <p className="text-sm text-[#615A51] leading-normal font-light">
                  Our entirely pure vegetarian kitchen explores rich textures, smoke from the clay tandoor pit,
                  and imported Italian San Marzano tomatoes to prove that plant-forward gastronomy can be luxurious.
                </p>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#5D634E]">Artisanal Extraction</span>
                <h3 className="text-xl font-serif text-[#24211E]">Coffee as a Ceremony</h3>
                <p className="text-sm text-[#615A51] leading-normal font-light">
                  From 18-hour cold steeped Arabicas to precision V60 pour-overs, we calibrate our grind daily to honor the
                  terroir of southern Indian coffee estates.
                </p>
              </div>
            </div>

            {/* Attributable Quote Strip */}
            <blockquote className="p-6 bg-[#FAF7F2] rounded-xl border border-[#24211E]/8 text-sm text-[#554F47] italic font-serif">
              “We wanted Koi to feel like stepping inside an architectural monograph—calm, textured, and deeply welcoming.”
              <footer className="not-italic text-xs font-mono uppercase tracking-wider text-[#7C756B] mt-2">
                — The Founding Team, Shobhagpura Udaipur
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};
