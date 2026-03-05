import React from 'react';

export default function Hero({ onNavigate }) {
    return (
        <section className="hero" id="hero">
            <div className="hero-bg" />
            <div className="hero-content">
                <div className="hero-badge">
                    🇨🇦 Canada's Smart Credit Card Comparison
                </div>
                <h1>
                    Find Your Perfect<br />
                    <span className="gradient-text">Credit Card</span>{' '}
                    <span className="accent-text">Match</span>
                </h1>
                <p>
                    Compare the best Canadian credit cards side-by-side. Discover cards that
                    match your spending habits, maximize your rewards, and save you money —
                    all in one place.
                </p>
                <div className="hero-actions">
                    <button className="btn btn-primary" onClick={() => onNavigate('finder')}>
                        🎯 Find My Card
                    </button>
                    <button className="btn btn-secondary" onClick={() => onNavigate('browse')}>
                        Browse All Cards →
                    </button>
                </div>
            </div>
        </section>
    );
}
