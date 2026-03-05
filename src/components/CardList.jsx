import React, { useState, useMemo } from 'react';
import cards, { categories, networks, creditScores } from '../data/cards';
import CardTile from './CardTile';

export default function CardList({ onViewCard, compareCards, onCompare }) {
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('All');
    const [network, setNetwork] = useState('All');
    const [maxFee, setMaxFee] = useState('Any');
    const [creditScore, setCreditScore] = useState('All');
    const [sortBy, setSortBy] = useState('featured');

    const filtered = useMemo(() => {
        let result = [...cards];

        // Search
        if (search.trim()) {
            const q = search.toLowerCase();
            result = result.filter(c =>
                c.name.toLowerCase().includes(q) ||
                c.issuer.toLowerCase().includes(q) ||
                c.category.toLowerCase().includes(q)
            );
        }

        // Category
        if (category !== 'All') {
            result = result.filter(c => c.category === category);
        }

        // Network
        if (network !== 'All') {
            result = result.filter(c => c.network === network);
        }

        // Max Fee
        if (maxFee === '$0') {
            result = result.filter(c => c.annualFee === 0);
        } else if (maxFee === 'Under $100') {
            result = result.filter(c => c.annualFee < 100);
        } else if (maxFee === 'Under $150') {
            result = result.filter(c => c.annualFee < 150);
        }

        // Credit Score
        if (creditScore !== 'All') {
            result = result.filter(c => c.creditScore === creditScore);
        }

        // Sort
        switch (sortBy) {
            case 'featured':
                result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0) || b.rating - a.rating);
                break;
            case 'lowest-fee':
                result.sort((a, b) => a.annualFee - b.annualFee);
                break;
            case 'highest-rated':
                result.sort((a, b) => b.rating - a.rating);
                break;
            case 'name':
                result.sort((a, b) => a.name.localeCompare(b.name));
                break;
        }

        return result;
    }, [search, category, network, maxFee, creditScore, sortBy]);

    const compareIds = compareCards.map(c => c.id);

    return (
        <section className="section browse-section" id="browse">
            <div className="section-header">
                <h2>Browse <span className="gradient-text">Credit Cards</span></h2>
                <p>Explore {cards.length} top Canadian credit cards. Filter, compare, and find your perfect match.</p>
            </div>

            <div className="filters-bar">
                <div className="search-wrapper">
                    <div className="filter-label">Search</div>
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Search by card name or issuer..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <div className="filter-group">
                    <span className="filter-label">Category</span>
                    <select className="filter-select" value={category} onChange={(e) => setCategory(e.target.value)}>
                        {categories.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                </div>
                <div className="filter-group">
                    <span className="filter-label">Network</span>
                    <select className="filter-select" value={network} onChange={(e) => setNetwork(e.target.value)}>
                        {networks.map(n => <option key={n} value={n}>{n}</option>)}
                    </select>
                </div>
                <div className="filter-group">
                    <span className="filter-label">Annual Fee</span>
                    <select className="filter-select" value={maxFee} onChange={(e) => setMaxFee(e.target.value)}>
                        <option value="Any">Any</option>
                        <option value="$0">$0 (No Fee)</option>
                        <option value="Under $100">Under $100</option>
                        <option value="Under $150">Under $150</option>
                    </select>
                </div>
                <div className="filter-group">
                    <span className="filter-label">Sort By</span>
                    <select className="filter-select" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                        <option value="featured">Featured</option>
                        <option value="lowest-fee">Lowest Fee</option>
                        <option value="highest-rated">Highest Rated</option>
                        <option value="name">Name (A-Z)</option>
                    </select>
                </div>
            </div>

            {filtered.length === 0 ? (
                <div className="no-results">
                    <div className="no-results-icon">🔍</div>
                    <h3>No cards match your filters</h3>
                    <p>Try adjusting your filters or search term.</p>
                </div>
            ) : (
                <div className="card-grid">
                    {filtered.map(card => (
                        <CardTile
                            key={card.id}
                            card={card}
                            onViewCard={onViewCard}
                            onCompare={onCompare}
                            isCompared={compareIds.includes(card.id)}
                        />
                    ))}
                </div>
            )}
        </section>
    );
}
