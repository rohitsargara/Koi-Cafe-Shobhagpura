import React from 'react';
import { Star, ShieldCheck, Heart, Coffee, UtensilsCrossed } from 'lucide-react';
import { VERIFIED_REVIEWS } from '../data/cafeData';

export const ExperienceHighlights: React.FC = () => {
  return (
    <section id="experience" className="py-20 lg:py-28 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Title */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#7C756B] mb-3">
            <span>04. Guest Experience &amp; Heritage</span>
            <span aria-hidden="true">·</span>
            <span>Uncompromising Craft</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#24211E] font-normal leading-tight tracking-tight [text-wrap:balance]">
            Rooted in pure vegetarian integrity and unhurried hospitality.
          </h2>
          <p className="text-sm sm:text-base text-[#615A51] font-light mt-3 leading-relaxed">
            We don’t believe in rushing the table. Whether you are settling in for morning pour-overs with a sketchbook, hosting a family celebration, or escaping for a quiet evening date, our courtyard is your second living room.
          </p>
        </div>

        {/* 2-Column Asymmetrical Feature Spotlight (No boring 3 cards!) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 mb-20 items-stretch">
          {/* Card 1: 7 cols — The Pure Veg Gastronomy */}
          <div className="md:col-span-7 p-8 sm:p-10 rounded-2xl bg-[#F4EFE6] border border-[#24211E]/8 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-lg bg-[#FAF7F2] border border-[#24211E]/10 flex items-center justify-center text-[#C26747]">
                <UtensilsCrossed className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#C26747]">
                Kitchen Invariant
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#24211E]">
                Elevating Plant-Forward &amp; Dairy Traditions
              </h3>
              <p className="text-sm sm:text-base text-[#554F47] font-light leading-relaxed">
                Rajasthan has centuries of revered vegetarian culture. At Koi, we honor that heritage by combining ancient clay tandoor techniques with modern culinary rigor: bronze-die pastas, Neapolitan cold-fermented doughs, and delicate cashew-cream marinades without onion or garlic upon request.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-[#24211E]/10 flex flex-wrap gap-4 text-xs font-mono text-[#7C756B]">
              <span>· Zero cross-contamination</span>
              <span>· Dedicated Jain cooking section</span>
              <span>· House-made sauces &amp; dressings</span>
            </div>
          </div>

          {/* Card 2: 5 cols — Coffee & Beverage Ethos */}
          <div className="md:col-span-5 p-8 sm:p-10 rounded-2xl bg-[#EDE5DA] border border-[#24211E]/8 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-lg bg-[#FAF7F2] border border-[#24211E]/10 flex items-center justify-center text-[#5D634E]">
                <Coffee className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#5D634E]">
                The Brew Bar
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#24211E]">
                Specialty Roast Standards
              </h3>
              <p className="text-sm text-[#554F47] font-light leading-relaxed">
                We partner with select shade-grown Arabica estates from Karnataka. Ground fresh per order, dialled in for exact water-to-coffee ratios, and poured with velvety microfoam texture.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-[#24211E]/10 text-xs font-mono text-[#7C756B]">
              <span>Double-filtered mineral water formulation for peak clarity</span>
            </div>
          </div>
        </div>

        {/* Claim-to-Proof Adjacency: Attributable Verified Reviews */}
        <div className="pt-10 border-t border-[#24211E]/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-[#7C756B]">
                Patron Impressions
              </p>
              <h3 className="text-2xl font-serif text-[#24211E] mt-0.5">
                Words from Udaipur’s design &amp; coffee community
              </h3>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-mono text-[#C26747]">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#C26747] text-[#C26747]" />
                ))}
              </div>
              <span className="font-semibold text-[#24211E] ml-1">4.8 / 5.0</span>
              <span className="text-[#7C756B]">· Verified Local Rating</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VERIFIED_REVIEWS.map((review) => (
              <div
                key={review.id}
                className="p-6 rounded-xl bg-[#FAF7F2] border border-[#24211E]/10 shadow-warm-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-[#C26747] text-[#C26747]" />
                    ))}
                  </div>
                  <p className="text-xs font-mono uppercase tracking-wider text-[#C26747] mb-2">
                    “{review.highlight}”
                  </p>
                  <p className="text-xs sm:text-sm text-[#554F47] leading-relaxed font-light italic">
                    "{review.text}"
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-[#24211E]/8">
                  <p className="text-xs font-semibold text-[#24211E]">{review.author}</p>
                  <p className="text-[11px] text-[#7C756B] mt-0.5">{review.context}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
