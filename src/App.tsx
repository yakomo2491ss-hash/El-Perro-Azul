/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { EvidenceDistinctionBanner } from './components/EvidenceDistinctionBanner';
import { InteractiveMap } from './components/InteractiveMap';
import { StudyCardList } from './components/StudyCardList';
import { DistrictChecker } from './components/DistrictChecker';
import { CitizenGuide } from './components/CitizenGuide';
import { ScarcityTimeline } from './components/ScarcityTimeline';
import { VolunteerSection } from './components/VolunteerSection';
import { Footer } from './components/Footer';
import { StudyDetailModal } from './components/StudyDetailModal';
import { ScientificStudy } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('hero');
  const [selectedStudy, setSelectedStudy] = useState<ScientificStudy | null>(null);

  const handleSelectStudy = (study: ScientificStudy) => {
    setSelectedStudy(study);
  };

  const handleCloseModal = () => {
    setSelectedStudy(null);
  };

  const scrollToSection = (sectionId: string) => {
    setActiveTab(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#ebf0f7] text-slate-900 font-sans">
      {/* Navigation Header with Logo */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          onExploreMap={() => scrollToSection('mapa')}
          onExploreDistinction={() => scrollToSection('distincion')}
        />

        {/* Key Scientific Distinction Banner (Human Clinical vs Environmental Water Risk) */}
        <EvidenceDistinctionBanner />

        {/* Interactive Map */}
        <InteractiveMap
          onSelectStudy={handleSelectStudy}
          selectedStudy={selectedStudy}
        />

        {/* Full Scientific Studies Library */}
        <StudyCardList onSelectStudy={handleSelectStudy} />

        {/* District & Basin Checker */}
        <DistrictChecker onSelectStudy={handleSelectStudy} />

        {/* Tacna Scarcity Context & Hydrological Vulnerability */}
        <ScarcityTimeline />

        {/* Citizen Guide & Mythbusters */}
        <CitizenGuide />

        {/* Volunteer Group "El Perro Azul" Engagement */}
        <VolunteerSection />
      </main>

      {/* Footer & Academic Citations */}
      <Footer />

      {/* Study Detail Modal */}
      <StudyDetailModal study={selectedStudy} onClose={handleCloseModal} />
    </div>
  );
}
