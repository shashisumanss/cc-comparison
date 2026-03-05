import React from 'react';

export default function CompareCards({ compareCards, onRemove, onClearAll, onViewCard }) {
    if (compareCards.length === 0) {
        return (
            <section className="section compare-section" id="compare">
                <div className="section-header">
                    <h2>⚖ <span className="gradient-text">Compare</span> Cards</h2>
                    <p>Select up to 3 cards from the Browse section to compare them side-by-side.</p>
                </div>
                <div className="compare-empty">
                    <div className="compare-empty-icon">⚖️</div>
                    <h3>No Cards Selected</h3>
                    <p>Click the "Compare" button on any card to add it here for side-by-side comparison.</p>
                </div>
            </section>
        );
    }

    const rows = [
        { label: 'Annual Fee', render: (c) => c.annualFee === 0 ? '$0 (No Fee)' : `$${c.annualFee}/year` },
        { label: 'Monthly Fee', render: (c) => c.monthlyFee ? `$${c.monthlyFee}/mo` : '—' },
        { label: 'Purchase APR', render: (c) => `${c.purchaseRate}%` },
        { label: 'Cash Advance APR', render: (c) => `${c.cashAdvanceRate}%` },
        { label: 'Credit Score', render: (c) => c.creditScore },
        { label: 'Network', render: (c) => c.network },
        { label: 'Welcome Bonus', render: (c) => c.welcomeBonus },
        { label: 'Top Reward', render: (c) => c.rewards[0] ? `${c.rewards[0].rate} on ${c.rewards[0].category}` : '—' },
        { label: '2nd Reward', render: (c) => c.rewards[1] ? `${c.rewards[1].rate} on ${c.rewards[1].category}` : '—' },
        { label: '3rd Reward', render: (c) => c.rewards[2] ? `${c.rewards[2].rate} on ${c.rewards[2].category}` : '—' },
        { label: 'Key Benefit', render: (c) => c.benefits[0] || '—' },
        { label: 'Rating', render: (c) => `${'★'.repeat(Math.floor(c.rating))} ${c.rating}/5` },
    ];

    return (
        <section className="section compare-section" id="compare">
            <div className="section-header">
                <h2>⚖ <span className="gradient-text">Compare</span> Cards</h2>
                <p>Side-by-side comparison of your selected credit cards.</p>
            </div>

            <div style={{ textAlign: 'right', marginBottom: '16px' }}>
                <button className="btn btn-secondary btn-sm" onClick={onClearAll}>
                    Clear All
                </button>
            </div>

            <div className="compare-table-wrapper">
                <table className="compare-table">
                    <thead>
                        <tr>
                            <th></th>
                            {compareCards.map((card) => (
                                <th key={card.id} className="compare-card-header">
                                    <div style={{ color: card.color, fontWeight: 800, fontSize: '0.85rem', marginBottom: '2px' }}>
                                        {card.issuer}
                                    </div>
                                    <div style={{ cursor: 'pointer' }} onClick={() => onViewCard(card)}>
                                        {card.name}
                                    </div>
                                    <button className="compare-remove-btn" onClick={() => onRemove(card.id)}>
                                        ✕ Remove
                                    </button>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row, i) => (
                            <tr key={i}>
                                <td>{row.label}</td>
                                {compareCards.map((card) => (
                                    <td key={card.id}>{row.render(card)}</td>
                                ))}
                            </tr>
                        ))}
                        <tr>
                            <td>Apply</td>
                            {compareCards.map((card) => (
                                <td key={card.id} className="apply-cell">
                                    <a
                                        href={card.affiliateLink}
                                        className="btn btn-accent btn-sm"
                                        rel="nofollow sponsored"
                                        target="_blank"
                                    >
                                        Apply Now →
                                    </a>
                                </td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
}
