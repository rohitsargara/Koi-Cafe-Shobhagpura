/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PhilosophyStory } from './components/PhilosophyStory';
import { MenuSection } from './components/MenuSection';
import { SpacesGallery } from './components/SpacesGallery';
import { ExperienceHighlights } from './components/ExperienceHighlights';
import { LocationHours } from './components/LocationHours';
import { ReservationModal } from './components/ReservationModal';
import { PrivateEventsModal } from './components/PrivateEventsModal';
import { Footer } from './components/Footer';

export default function App() {
  const [reservationModalOpen, setReservationModalOpen] = useState(false);
  const [privateEventsModalOpen, setPrivateEventsModalOpen] = useState(false);

  const scrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#24211E] flex flex-col font-body selection:bg-[#C26747] selection:text-[#FAF7F2]">
      {/* 3-Zone Top Bar */}
      <Header onOpenReservation={() => setReservationModalOpen(true)} />

      {/* Main Editorial Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenReservation={() => setReservationModalOpen(true)}
          onExploreMenu={scrollToMenu}
        />

        {/* 01. The Sanctuary Architectural & Culinary Ethos */}
        <PhilosophyStory />

        {/* 02. Curated Menu with Dietary Filters & Tasting Plan Tray */}
        <MenuSection onOpenReservationModal={() => setReservationModalOpen(true)} />

        {/* 03. Spatial Architecture & Courtyard Gallery */}
        <SpacesGallery
          onOpenReservation={() => setReservationModalOpen(true)}
          onOpenPrivateEvents={() => setPrivateEventsModalOpen(true)}
        />

        {/* 04. Culinary Invariants & Attributable Verified Reviews */}
        <ExperienceHighlights />

        {/* 05. Verified Physical Location, Hours & Transit Times */}
        <LocationHours />
      </main>

      {/* Quiet Footer */}
      <Footer
        onOpenReservation={() => setReservationModalOpen(true)}
        onOpenPrivateEvents={() => setPrivateEventsModalOpen(true)}
      />

      {/* Interactive Reservation Modal */}
      <ReservationModal
        isOpen={reservationModalOpen}
        onClose={() => setReservationModalOpen(false)}
      />

      {/* Bespoke Private Gatherings Modal */}
      <PrivateEventsModal
        isOpen={privateEventsModalOpen}
        onClose={() => setPrivateEventsModalOpen(false)}
      />
    </div>
  );
}
