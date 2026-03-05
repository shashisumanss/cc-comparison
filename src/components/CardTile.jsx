import React from 'react';

function getCategoryBadge(category) {
    switch (category) {
        case 'Cash Back': return <span className="card-tile-badge badge-cashback">Cash Back</span>;
        case 'Travel Rewards': return <span className="card-tile-badge badge-travel">Travel</span>;
        case 'No Annual Fee': return <span className="card-tile-badge badge-nofee">No Fee</span>;
        case 'Student': return <span className="card-tile-badge badge-student">Student</span>;
        default: return null;
    }
}

function StarRating({ rating }) {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5;
    return (
        <div className="rating">
            <span className="rating-stars">
                {'★'.repeat(full)}{half ? '½' : ''}{'☆'.repeat(5 - full - (half ? 1 : 0))}
            </span>
            <span className="rating-value">{rating}</span>
        </div>
    );
}

export default function CardTile({ card, onViewCard, onCompare, isCompared }) {
    return (
        <div className="card-tile" onClick={() => onViewCard(card)}>
            <div className="card-tile-accent" style={{ background: card.color }} />
            {card.image && (
                <div className="card-tile-image">
                    <img src={card.image} alt={card.name} loading="lazy" />
                </div>
            )}
            <div className="card-tile-body">
                <div className="card-tile-header">
                    <div className="card-tile-info">
                        <div className="card-tile-issuer">{card.issuer} · {card.network}</div>
                        <div className="card-tile-name">{card.name}</div>
                        <StarRating rating={card.rating} />
                    </div>
                    {getCategoryBadge(card.category)}
                </div>

                <div className="card-tile-fee">
                    <span className="card-tile-fee-amount">
                        {card.annualFee === 0 ? 'FREE' : `$${card.annualFee}`}
                    </span>
                    <span className="card-tile-fee-label">
                        {card.monthlyFee ? `($${card.monthlyFee}/mo)` : '/ year'}
                    </span>
                </div>

                <div className="card-tile-rewards">
                    {card.rewards.slice(0, 3).map((r, i) => (
                        <div key={i} className="card-tile-reward-item">
                            <span className="card-tile-reward-category">{r.category}</span>
                            <span className="card-tile-reward-rate">{r.rate}</span>
                        </div>
                    ))}
                </div>

                <ul className="card-tile-pros">
                    {card.pros.slice(0, 2).map((p, i) => (
                        <li key={i}>{p}</li>
                    ))}
                </ul>

                <div className="card-tile-actions" onClick={(e) => e.stopPropagation()}>
                    <button
                        className={`btn btn-sm ${isCompared ? 'btn-outline' : 'btn-secondary'}`}
                        onClick={(e) => { e.stopPropagation(); onCompare(card); }}
                    >
                        {isCompared ? '✓ Comparing' : '⚖ Compare'}
                    </button>
                    <a
                        href={card.affiliateLink}
                        className="btn btn-accent btn-sm"
                        rel="nofollow sponsored"
                        target="_blank"
                        onClick={(e) => e.stopPropagation()}
                    >
                        Apply Now →
                    </a>
                </div>
            </div>
        </div>
    );
}
