import React, { useState, useRef, useCallback } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CardFinder from './components/CardFinder';
import CardList from './components/CardList';
import CardDetail from './components/CardDetail';
import CompareCards from './components/CompareCards';
import CompareBar from './components/CompareBar';
import Footer from './components/Footer';
import AdBanner from './components/AdBanner';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedCard, setSelectedCard] = useState(null);
  const [compareCards, setCompareCards] = useState([]);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const heroRef = useRef(null);
  const finderRef = useRef(null);
  const browseRef = useRef(null);
  const compareRef = useRef(null);

  const sectionRefs = { hero: heroRef, finder: finderRef, browse: browseRef, compare: compareRef };

  const navigateTo = useCallback((section) => {
    setActiveSection(section);
    const ref = sectionRefs[section];
    if (ref?.current) {
      const yOffset = -80;
      const y = ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }, []);

  const handleViewCard = useCallback((card) => {
    setSelectedCard(card);
  }, []);

  const handleCloseCard = useCallback(() => {
    setSelectedCard(null);
  }, []);

  const handleCompare = useCallback((card) => {
    setCompareCards(prev => {
      const exists = prev.find(c => c.id === card.id);
      if (exists) {
        return prev.filter(c => c.id !== card.id);
      }
      if (prev.length >= 3) {
        return prev;
      }
      return [...prev, card];
    });
  }, []);

  const handleRemoveCompare = useCallback((cardId) => {
    setCompareCards(prev => prev.filter(c => c.id !== cardId));
  }, []);

  const handleClearCompare = useCallback(() => {
    setCompareCards([]);
  }, []);

  const compareIds = compareCards.map(c => c.id);

  return (
    <div className="app">
      <Header
        activeSection={activeSection}
        onNavigate={navigateTo}
        mobileOpen={mobileNavOpen}
        setMobileOpen={setMobileNavOpen}
      />

      <div ref={heroRef}>
        <Hero onNavigate={navigateTo} />
      </div>

      <AdBanner dataAdSlot="1234567890" /> {/* Placeholder slot ID */}

      <div ref={finderRef}>
        <CardFinder onViewCard={handleViewCard} onNavigate={navigateTo} />
      </div>

      <AdBanner dataAdSlot="0987654321" /> {/* Placeholder slot ID */}


      <div ref={browseRef}>
        <CardList
          onViewCard={handleViewCard}
          compareCards={compareCards}
          onCompare={handleCompare}
        />
      </div>

      <div ref={compareRef}>
        <CompareCards
          compareCards={compareCards}
          onRemove={handleRemoveCompare}
          onClearAll={handleClearCompare}
          onViewCard={handleViewCard}
        />
      </div>

      <Footer />

      {/* Floating compare bar */}
      <CompareBar
        compareCards={compareCards}
        onRemove={handleRemoveCompare}
        onClearAll={handleClearCompare}
        onNavigate={navigateTo}
      />

      {/* Card detail modal */}
      {selectedCard && (
        <CardDetail
          card={selectedCard}
          onClose={handleCloseCard}
          onCompare={handleCompare}
          isCompared={compareIds.includes(selectedCard.id)}
        />
      )}
    </div>
  );
}
