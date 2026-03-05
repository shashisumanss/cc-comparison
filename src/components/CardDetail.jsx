import React from 'react';

export default function CardDetail({ card, onClose, onCompare, isCompared }) {
    if (!card) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-accent-bar" style={{ background: card.color }} />

                <div className="modal-header">
                    <div>
                        <div className="modal-card-name">{card.name}</div>
                        <div className="modal-card-issuer">{card.issuer} · {card.network} · {card.category}</div>
                    </div>
                    <button className="modal-close" onClick={onClose}>✕</button>
                </div>

                <div className="modal-body">
                    {/* Key Stats */}
                    <div className="modal-grid">
                        <div className="modal-stat">
                            <div className="modal-stat-value">
                                {card.annualFee === 0 ? 'FREE' : `$${card.annualFee}`}
                            </div>
                            <div className="modal-stat-label">Annual Fee</div>
                        </div>
                        <div className="modal-stat">
                            <div className="modal-stat-value">{card.purchaseRate}%</div>
                            <div className="modal-stat-label">Purchase APR</div>
                        </div>
                        <div className="modal-stat">
                            <div className="modal-stat-value">
                                {'★'.repeat(Math.floor(card.rating))} {card.rating}
                            </div>
                            <div className="modal-stat-label">User Rating</div>
                        </div>
                    </div>

                    {/* Welcome Bonus */}
                    <div className="modal-welcome-bonus">
                        <div className="label">🎁 Welcome Bonus</div>
                        <div className="value">{card.welcomeBonus}</div>
                    </div>

                    {/* Rewards */}
                    <div className="modal-section">
                        <h4>💰 Rewards Structure</h4>
                        <table className="modal-rewards-table">
                            <tbody>
                                {card.rewards.map((r, i) => (
                                    <tr key={i}>
                                        <td>{r.category}</td>
                                        <td>{r.rate}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Benefits */}
                    <div className="modal-section">
                        <h4>✦ Benefits & Perks</h4>
                        <ul className="modal-benefits-list">
                            {card.benefits.map((b, i) => (
                                <li key={i}>{b}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Pros & Cons */}
                    <div className="modal-section">
                        <h4>⚖ Pros & Cons</h4>
                        <div className="modal-pros-cons">
                            <div>
                                <h5 style={{ color: '#10b981', fontSize: '0.85rem', fontWeight: 700, marginBottom: '8px' }}>Pros</h5>
                                <ul className="modal-pros-cons-list pros">
                                    {card.pros.map((p, i) => <li key={i}>{p}</li>)}
                                </ul>
                            </div>
                            <div>
                                <h5 style={{ color: '#ef4444', fontSize: '0.85rem', fontWeight: 700, marginBottom: '8px' }}>Cons</h5>
                                <ul className="modal-pros-cons-list cons">
                                    {card.cons.map((c, i) => <li key={i}>{c}</li>)}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Fees Detail */}
                    <div className="modal-section">
                        <h4>💳 Fee Details</h4>
                        <table className="modal-rewards-table">
                            <tbody>
                                <tr>
                                    <td>Annual Fee</td>
                                    <td>{card.annualFee === 0 ? '$0 (No Fee)' : `$${card.annualFee}/year`}</td>
                                </tr>
                                {card.monthlyFee && (
                                    <tr>
                                        <td>Monthly Fee</td>
                                        <td>${card.monthlyFee}/month</td>
                                    </tr>
                                )}
                                <tr>
                                    <td>Purchase Interest Rate</td>
                                    <td>{card.purchaseRate}%</td>
                                </tr>
                                <tr>
                                    <td>Cash Advance Rate</td>
                                    <td>{card.cashAdvanceRate}%</td>
                                </tr>
                                <tr>
                                    <td>Credit Score Required</td>
                                    <td>{card.creditScore}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* CTA */}
                    <div className="modal-cta">
                        <button
                            className={`btn ${isCompared ? 'btn-outline' : 'btn-secondary'}`}
                            onClick={() => onCompare(card)}
                        >
                            {isCompared ? '✓ Added to Compare' : '⚖ Add to Compare'}
                        </button>
                        <a
                            href={card.affiliateLink}
                            className="btn btn-accent"
                            rel="nofollow sponsored"
                            target="_blank"
                        >
                            Apply Now →
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
