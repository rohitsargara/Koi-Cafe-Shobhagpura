import React, { useState, useMemo } from 'react';
import { Search, Plus, Check, Sparkles, Filter, Leaf, HeartHandshake } from 'lucide-react';
import { MENU_ITEMS } from '../data/cafeData';
import { MenuItem } from '../types/cafe';
import { CoffeeStillLifeArtwork, CulinaryPlatterArtwork } from './visuals/ArchitecturalScenes';

interface MenuSectionProps {
  onSelectForReservation?: (items: MenuItem[]) => void;
  onOpenReservationModal: () => void;
}

type CategoryKey = 'all' | 'coffee' | 'mocktails' | 'small-plates' | 'handhelds' | 'pastas-pizzas' | 'desserts';
type DietaryFilter = 'all' | 'signature' | 'jain-friendly' | 'vegan-friendly';

export const MenuSection: React.FC<MenuSectionProps> = ({ onOpenReservationModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey>('all');
  const [dietaryFilter, setDietaryFilter] = useState<DietaryFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [curatedTray, setCuratedTray] = useState<MenuItem[]>([]);
  const [showTray, setShowTray] = useState(false);

  const categories: { key: CategoryKey; label: string }[] = [
    { key: 'all', label: 'Complete Menu' },
    { key: 'coffee', label: 'Artisanal Coffee & Brews' },
    { key: 'mocktails', label: 'Botanical Mocktails' },
    { key: 'small-plates', label: 'Tandoor & Small Plates' },
    { key: 'handhelds', label: 'Sourdough & Panini' },
    { key: 'pastas-pizzas', label: 'Artisanal Pastas & Pizzas' },
    { key: 'desserts', label: 'Patisserie & Desserts' },
  ];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category match
      const matchCategory = selectedCategory === 'all' || item.category === selectedCategory;

      // Dietary match
      const matchDietary =
        dietaryFilter === 'all' || (item.tags && item.tags.includes(dietaryFilter as any));

      // Search match
      const query = searchQuery.trim().toLowerCase();
      const matchSearch =
        !query ||
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        (item.pairingNote && item.pairingNote.toLowerCase().includes(query));

      return matchCategory && matchDietary && matchSearch;
    });
  }, [selectedCategory, dietaryFilter, searchQuery]);

  const toggleCurateItem = (item: MenuItem) => {
    setCuratedTray((prev) => {
      const exists = prev.some((i) => i.id === item.id);
      if (exists) {
        return prev.filter((i) => i.id !== item.id);
      } else {
        return [...prev, item];
      }
    });
  };

  const isItemInTray = (id: string) => curatedTray.some((item) => item.id === id);

  return (
    <section id="menu" className="py-20 lg:py-28 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header with Editorial Rhythm */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#7C756B] mb-3">
              <span>02. The Culinary Collection</span>
              <span aria-hidden="true">·</span>
              <span>100% Pure Vegetarian</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#24211E] font-normal leading-tight tracking-tight [text-wrap:balance]">
              Curated plates and slow artisanal extractions.
            </h2>
            <p className="text-sm sm:text-base text-[#615A51] font-light mt-3 leading-relaxed">
              Every dish is crafted in-house using pure dairy, stone-ground flours, fresh garden herbs, and imported Italian staples.
              Custom Jain preparations are available across the menu.
            </p>
          </div>

          {/* Quick Dietary Filter Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setDietaryFilter('all')}
              type="button"
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                dietaryFilter === 'all'
                  ? 'bg-[#24211E] text-[#FAF7F2]'
                  : 'bg-[#F4EFE6] text-[#4A453E] hover:bg-[#EDE5DA]'
              }`}
            >
              All Items
            </button>
            <button
              onClick={() => setDietaryFilter('signature')}
              type="button"
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                dietaryFilter === 'signature'
                  ? 'bg-[#24211E] text-[#FAF7F2]'
                  : 'bg-[#F4EFE6] text-[#4A453E] hover:bg-[#EDE5DA]'
              }`}
            >
              House Signatures
            </button>
            <button
              onClick={() => setDietaryFilter('jain-friendly')}
              type="button"
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                dietaryFilter === 'jain-friendly'
                  ? 'bg-[#5D634E] text-[#FAF7F2]'
                  : 'bg-[#F4EFE6] text-[#4A453E] hover:bg-[#EDE5DA]'
              }`}
            >
              Jain Friendly
            </button>
            <button
              onClick={() => setDietaryFilter('vegan-friendly')}
              type="button"
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                dietaryFilter === 'vegan-friendly'
                  ? 'bg-[#5D634E] text-[#FAF7F2]'
                  : 'bg-[#F4EFE6] text-[#4A453E] hover:bg-[#EDE5DA]'
              }`}
            >
              Vegan Friendly
            </button>
          </div>
        </div>

        {/* Category Horizontal Filter Bar & Instant Search */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-[#24211E]/10 mb-10">
          {/* Category Tabs */}
          <div className="flex items-center gap-1 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                type="button"
                className={`px-3.5 py-2 text-xs font-medium whitespace-nowrap shrink-0 transition-colors rounded-md ${
                  selectedCategory === cat.key
                    ? 'bg-[#EDE5DA] text-[#24211E] font-semibold'
                    : 'text-[#615A51] hover:text-[#24211E] hover:bg-[#F4EFE6]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative min-w-[260px] max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7C756B]" />
            <input
              type="text"
              placeholder="Search dishes, coffees, notes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs bg-[#F4EFE6] border border-[#24211E]/10 rounded-md focus:outline-none focus:border-[#C26747] text-[#24211E] placeholder-[#7C756B]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-[#7C756B] hover:text-[#24211E]"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Editorial Visual Interlude: 2 Asymmetrical Visual Artworks */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-14 items-center">
          <div className="md:col-span-7">
            <div className="aspect-[16/9] rounded-2xl overflow-hidden shadow-warm-sm border border-[#24211E]/8">
              <CoffeeStillLifeArtwork className="w-full h-full" />
            </div>
            <div className="flex items-center justify-between text-xs text-[#7C756B] pt-2 px-1">
              <span>Artisanal Coffee &amp; 18h Cold Brew</span>
              <span className="font-mono">Single-Origin Arabica</span>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-warm-sm border border-[#24211E]/8">
              <CulinaryPlatterArtwork className="w-full h-full" />
            </div>
            <div className="flex items-center justify-between text-xs text-[#7C756B] pt-2 px-1">
              <span>Reshmi Malai Paneer Tikka</span>
              <span className="font-mono">Charcoal Tandoor Baked</span>
            </div>
          </div>
        </div>

        {/* Menu Items Grid: Asymmetrical Editorial 2-Column List with Hairline Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {filteredItems.map((item) => {
            const inTray = isItemInTray(item.id);
            return (
              <div
                key={item.id}
                className="group p-5 rounded-xl transition-all duration-200 border border-[#24211E]/6 hover:border-[#24211E]/16 bg-[#FBF9F5] hover:bg-[#FAF7F2] shadow-warm-sm flex flex-col justify-between"
              >
                <div>
                  {/* Top Row: Title, Tag, and Tabular Price */}
                  <div className="flex items-baseline justify-between gap-4 mb-2">
                    <div className="flex items-baseline gap-2 flex-wrap">
                      <h3 className="text-lg font-serif text-[#24211E] group-hover:text-[#C26747] transition-colors">
                        {item.name}
                      </h3>
                      {item.badge && (
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#C26747]">
                          · {item.badge}
                        </span>
                      )}
                    </div>
                    {/* Tabular Numerals strictly enforced */}
                    <span className="text-base font-serif text-[#24211E] font-medium font-mono tabular-nums whitespace-nowrap">
                      ₹{item.price}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-[#615A51] leading-relaxed font-light mb-3">
                    {item.description}
                  </p>

                  {/* Flavor or pairing note if available */}
                  {item.pairingNote && (
                    <p className="text-[11px] text-[#5D634E] italic font-serif mb-3">
                      Notes: {item.pairingNote}
                    </p>
                  )}
                </div>

                {/* Bottom Row: Unboxed dietary tags + interactive curate button */}
                <div className="pt-3 border-t border-[#24211E]/8 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[11px] text-[#7C756B]">
                    {item.tags?.includes('jain-friendly') && (
                      <span className="text-[#5D634E]">Jain Available</span>
                    )}
                    {item.tags?.includes('vegan-friendly') && (
                      <span className="text-[#5D634E]">Vegan</span>
                    )}
                    {item.tags?.includes('signature') && (
                      <span className="text-[#C26747]">House Craft</span>
                    )}
                  </div>

                  <button
                    onClick={() => toggleCurateItem(item)}
                    type="button"
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs rounded transition-all ${
                      inTray
                        ? 'bg-[#24211E] text-[#FAF7F2]'
                        : 'text-[#4A453E] hover:text-[#24211E] hover:bg-[#EDE5DA]'
                    }`}
                    title={inTray ? 'Remove from tasting plan' : 'Add to personal tasting plan'}
                  >
                    {inTray ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#FAF7F2]" />
                        <span className="text-[11px]">Selected</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5" />
                        <span className="text-[11px]">Add to Tasting Plan</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {filteredItems.length === 0 && (
          <div className="py-16 text-center border border-dashed border-[#24211E]/15 rounded-xl bg-[#F4EFE6]/50">
            <p className="text-base font-serif text-[#24211E]">No culinary items match your filter criteria.</p>
            <p className="text-xs text-[#7C756B] mt-1">Try clearing your search query or selecting ‘All Items’.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setDietaryFilter('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 text-xs uppercase tracking-wider font-semibold text-[#24211E] bg-[#FAF7F2] border border-[#24211E]/20 rounded-md"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Floating Curated Tasting Plan Banner when items are selected */}
        {curatedTray.length > 0 && (
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-30 max-w-lg w-[calc(100%-2rem)] p-4 bg-[#24211E] text-[#FAF7F2] rounded-xl shadow-warm-lg flex items-center justify-between gap-4 border border-[#FAF7F2]/10 backdrop-blur-md">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#FAF7F2]">
                Your Curated Tasting Plan ({curatedTray.length} {curatedTray.length === 1 ? 'item' : 'items'})
              </p>
              <p className="text-[11px] text-[#D8CCA8] truncate max-w-xs sm:max-w-sm mt-0.5">
                {curatedTray.map((i) => i.name).join(', ')}
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={onOpenReservationModal}
                type="button"
                className="px-4 py-2 text-xs font-semibold uppercase tracking-wider bg-[#C26747] hover:bg-[#D87856] text-[#FAF7F2] rounded-md transition-colors"
              >
                Reserve Table With Plan
              </button>
              <button
                onClick={() => setCuratedTray([])}
                type="button"
                className="p-2 text-xs text-[#7C756B] hover:text-[#FAF7F2]"
                title="Clear tray"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
