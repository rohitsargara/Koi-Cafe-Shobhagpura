import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X } from 'lucide-react';

interface HeaderProps {
  onOpenReservation: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenReservation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#24211E]/8 py-3.5 shadow-warm-sm'
            : 'bg-[#FAF7F2] border-b border-[#24211E]/5 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark (Single text element) */}
          <a
            href="#"
            className="text-2xl sm:text-3xl font-serif tracking-tight text-[#24211E] hover:text-[#C26747] transition-colors whitespace-nowrap shrink-0"
          >
            Koi Cafe &amp; Social
          </a>

          {/* Zone 2: 5 clean, single-line text links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#4A453E]">
            <a
              href="#philosophy"
              className="hover:text-[#24211E] transition-colors whitespace-nowrap shrink-0 border-b border-transparent hover:border-[#C26747] py-0.5"
            >
              The Sanctuary
            </a>
            <a
              href="#menu"
              className="hover:text-[#24211E] transition-colors whitespace-nowrap shrink-0 border-b border-transparent hover:border-[#C26747] py-0.5"
            >
              Curated Menu
            </a>
            <a
              href="#spaces"
              className="hover:text-[#24211E] transition-colors whitespace-nowrap shrink-0 border-b border-transparent hover:border-[#C26747] py-0.5"
            >
              Courtyard &amp; Spaces
            </a>
            <a
              href="#experience"
              className="hover:text-[#24211E] transition-colors whitespace-nowrap shrink-0 border-b border-transparent hover:border-[#C26747] py-0.5"
            >
              Culinary Craft
            </a>
            <a
              href="#location"
              className="hover:text-[#24211E] transition-colors whitespace-nowrap shrink-0 border-b border-transparent hover:border-[#C26747] py-0.5"
            >
              Location &amp; Hours
            </a>
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Primary Action Button */}
            <button
              onClick={onOpenReservation}
              type="button"
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs font-medium tracking-wide uppercase text-[#FAF7F2] bg-[#24211E] hover:bg-[#C26747] rounded-md transition-all duration-200 whitespace-nowrap shrink-0 shadow-warm-sm active:scale-[0.98]"
            >
              Reserve a Table
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="md:hidden p-2 text-[#24211E] hover:bg-[#F4EFE6] rounded-md transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#24211E]/10 bg-[#FAF7F2] px-6 py-5 space-y-4">
            <div className="flex flex-col space-y-3 text-base font-serif text-[#24211E]">
              <a
                href="#philosophy"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#C26747] transition-colors"
              >
                The Sanctuary
              </a>
              <a
                href="#menu"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#C26747] transition-colors"
              >
                Curated Menu
              </a>
              <a
                href="#spaces"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#C26747] transition-colors"
              >
                Courtyard &amp; Spaces
              </a>
              <a
                href="#experience"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#C26747] transition-colors"
              >
                Culinary Craft
              </a>
              <a
                href="#location"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#C26747] transition-colors"
              >
                Location &amp; Hours
              </a>
            </div>

            <div className="pt-3 border-t border-[#24211E]/10 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReservation();
                }}
                className="w-full py-3 text-center text-xs font-semibold tracking-wider uppercase text-[#FAF7F2] bg-[#24211E] hover:bg-[#C26747] rounded-md transition-colors"
              >
                Reserve a Table
              </button>
              <div className="text-xs text-[#7C756B] flex items-center justify-between pt-1">
                <span>Shobhagpura, Udaipur</span>
                <span>Open Daily 11:00 AM – 11:00 PM</span>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
