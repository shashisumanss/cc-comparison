import React from 'react';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-inner">
                <div className="footer-brand">
                    <svg width="160" height="48" viewBox="-15 -5 200 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="ftr_g1" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop stopColor="#00D4FF" />
                                <stop offset="0.5" stopColor="#0099CC" />
                                <stop offset="1" stopColor="#0066FF" />
                            </linearGradient>
                            <linearGradient id="ftr_g2" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop stopColor="#FF6B35" />
                                <stop offset="1" stopColor="#F7931E" />
                            </linearGradient>
                            <linearGradient id="ftr_gt" x1="56" y1="24" x2="175" y2="24" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#00D4FF" />
                                <stop offset="0.3" stopColor="#0099CC" />
                                <stop offset="0.7" stopColor="#0066FF" />
                                <stop offset="1" stopColor="#2C3E50" />
                            </linearGradient>
                        </defs>
                        <path d="M39 13.4C28.8 2.8 7.5 2.8 7.5 24.1C7.5 45.4 28.8 45.4 39 34.8" stroke="url(#ftr_g1)" strokeWidth="10" strokeLinecap="round" />
                        <path d="M44.8 18.6C39 13.4 34.1 13.4 28.8 18.6" stroke="url(#ftr_g2)" strokeWidth="5" strokeLinecap="round" />
                        <path d="M44.8 29.4C39 34.8 34.1 34.8 28.8 29.4" stroke="url(#ftr_g2)" strokeWidth="5" strokeLinecap="round" />
                        <text x="56" y="24" fontFamily="Arial, Helvetica, sans-serif" fontSize="20" fontWeight="600" letterSpacing="0.6px" fill="url(#ftr_gt)" dominantBaseline="central">Clyvanta</text>
                    </svg>
                    <p>
                        Helping Canadians find the perfect credit card for their lifestyle. Compare rewards,
                        benefits, and fees — all in one place. Powered by Clyvanta AI & Technology Solutions.
                    </p>
                </div>

                <div className="footer-links">
                    <h4>Resources</h4>
                    <a href="#">Credit Card Guide</a>
                    <a href="#">Rewards Calculator</a>
                    <a href="#">Credit Score Tips</a>
                    <a href="#">Travel Insurance 101</a>
                </div>

                <div className="footer-links">
                    <h4>Company</h4>
                    <a href="https://clyvanta.com" target="_blank" rel="noopener noreferrer">About Clyvanta</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                    <a href="#">Contact Us</a>
                </div>
            </div>

            <div className="footer-disclaimer">
                <p>
                    <strong>Affiliate Disclosure:</strong> Some of the credit card links and offers that appear on this website
                    are from companies from which Clyvanta may receive compensation. This compensation may impact how and where
                    products appear on this site (including, for example, the order in which they appear). Clyvanta does not include
                    all credit card companies or all available credit card offers. Editorial opinions expressed on the site are
                    strictly our own and are not provided, endorsed, or approved by advertisers.
                </p>
            </div>

            <div className="footer-bottom">
                <p>© 2026 Clyvanta Inc. All rights reserved. AI & Technology Solutions.</p>
                <p>Card information is believed to be accurate but may change. Always verify details with the card issuer.</p>
            </div>
        </footer>
    );
}
