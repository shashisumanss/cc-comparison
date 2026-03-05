import React from 'react';

export default function Header({ activeSection, onNavigate, mobileOpen, setMobileOpen }) {
    return (
        <header className="header">
            <div className="header-inner">
                <a href="#" className="header-logo" onClick={(e) => { e.preventDefault(); onNavigate('hero'); }}>
                    <svg width="40" height="40" viewBox="21 -3 219 233" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="hdr_g1" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop stopColor="#00D4FF" />
                                <stop offset="0.5" stopColor="#0099CC" />
                                <stop offset="1" stopColor="#0066FF" />
                            </linearGradient>
                            <linearGradient id="hdr_g2" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop stopColor="#FF6B35" />
                                <stop offset="1" stopColor="#F7931E" />
                            </linearGradient>
                        </defs>
                        <path d="M197 66.85C144 13.85 37.5 13.85 37.5 120.35C37.5 226.85 144 226.85 197 173.85" stroke="url(#hdr_g1)" strokeWidth="32" strokeLinecap="round" />
                        <path d="M224 93.35C197 66.85 170.5 66.85 144 93.35" stroke="url(#hdr_g2)" strokeWidth="16" strokeLinecap="round" />
                        <path d="M224 147.35C197 173.85 170.5 173.85 144 147.35" stroke="url(#hdr_g2)" strokeWidth="16" strokeLinecap="round" />
                    </svg>
                    <div className="header-brand-text">
                        <span className="header-brand-name">Clyvanta</span>
                        <span className="header-brand-sub">Credit Card Finder</span>
                    </div>
                </a>

                <button className="header-mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)}>
                    {mobileOpen ? '✕' : '☰'}
                </button>

                <nav className={`header-nav ${mobileOpen ? 'open' : ''}`}>
                    <a
                        className={activeSection === 'hero' ? 'active' : ''}
                        onClick={() => { onNavigate('hero'); setMobileOpen(false); }}
                    >
                        Home
                    </a>
                    <a
                        className={activeSection === 'finder' ? 'active' : ''}
                        onClick={() => { onNavigate('finder'); setMobileOpen(false); }}
                    >
                        CardFinder
                    </a>
                    <a
                        className={activeSection === 'browse' ? 'active' : ''}
                        onClick={() => { onNavigate('browse'); setMobileOpen(false); }}
                    >
                        Browse Cards
                    </a>
                    <a
                        className={activeSection === 'compare' ? 'active' : ''}
                        onClick={() => { onNavigate('compare'); setMobileOpen(false); }}
                    >
                        Compare
                    </a>
                </nav>
            </div>
        </header>
    );
}
