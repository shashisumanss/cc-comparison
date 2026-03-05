import React from 'react';

export default function CompareBar({ compareCards, onRemove, onClearAll, onNavigate }) {
    if (compareCards.length === 0) return null;

    return (
        <div className="compare-bar">
            <div className="compare-bar-cards">
                <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: 600 }}>
                    Comparing ({compareCards.length}/3):
                </span>
                {compareCards.map(card => (
                    <div key={card.id} className="compare-bar-card">
                        <span className="compare-bar-card-name">{card.name}</span>
                        <button className="compare-bar-remove" onClick={() => onRemove(card.id)}>✕</button>
                    </div>
                ))}
            </div>
            <div className="compare-bar-actions">
                <button className="btn btn-secondary btn-sm" onClick={onClearAll}>Clear</button>
                <button className="btn btn-primary btn-sm" onClick={() => onNavigate('compare')}>
                    Compare Now →
                </button>
            </div>
        </div>
    );
}
