import React, { useState } from 'react';
import cards from '../data/cards';

const questions = [
    {
        id: 'priority',
        title: 'What matters most to you?',
        subtitle: 'Select the benefit that best fits your lifestyle.',
        options: [
            { value: 'cashback', icon: '💰', label: 'Cash Back', desc: 'Earn money on everyday purchases' },
            { value: 'travel', icon: '✈️', label: 'Travel Rewards', desc: 'Maximize points for flights & hotels' },
            { value: 'nofee', icon: '🆓', label: 'No Annual Fee', desc: 'Keep costs at zero' },
            { value: 'student', icon: '🎓', label: 'Building Credit', desc: 'Perfect for students & newcomers' },
        ],
    },
    {
        id: 'network',
        title: 'Preferred card network?',
        subtitle: 'Some networks offer broader acceptance than others.',
        options: [
            { value: 'any', icon: '🌐', label: 'No Preference', desc: 'Show me all options' },
            { value: 'Visa', icon: '💳', label: 'Visa', desc: 'Accepted almost everywhere' },
            { value: 'Mastercard', icon: '🔶', label: 'Mastercard', desc: 'Global acceptance & perks' },
            { value: 'Amex', icon: '💎', label: 'American Express', desc: 'Premium rewards & experiences' },
        ],
    },
    {
        id: 'fee',
        title: 'Annual fee tolerance?',
        subtitle: 'Higher-fee cards often deliver more value through rewards.',
        options: [
            { value: 0, icon: '🆓', label: '$0 / No Fee', desc: 'Zero annual cost' },
            { value: 120, icon: '💵', label: 'Under $120/year', desc: 'Moderate for good rewards' },
            { value: 999, icon: '💎', label: 'Any Fee', desc: 'Willing to pay for premium perks' },
        ],
    },
];

function scoreCard(card, answers) {
    let score = 0;

    // Priority matching
    const priority = answers.priority;
    if (priority === 'cashback' && card.category === 'Cash Back') score += 40;
    else if (priority === 'travel' && card.category === 'Travel Rewards') score += 40;
    else if (priority === 'nofee' && card.category === 'No Annual Fee') score += 40;
    else if (priority === 'student' && card.category === 'Student') score += 40;
    else if (priority === 'nofee' && card.annualFee === 0) score += 25;
    else score += 5;

    // Network matching
    if (answers.network === 'any' || card.network === answers.network) score += 20;

    // Fee matching
    const maxFee = answers.fee;
    if (maxFee === 0 && card.annualFee === 0) score += 30;
    else if (maxFee === 0 && card.annualFee > 0) score -= 30;
    else if (maxFee > 0 && card.annualFee <= maxFee) score += 20;
    else if (maxFee === 999) score += 15;
    else score -= 10;

    // Bonus for rating
    score += card.rating * 3;


    return Math.min(Math.round(score), 100);
}

export default function CardFinder({ onViewCard, onNavigate }) {
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState({});
    const [results, setResults] = useState(null);

    const currentQ = questions[step];

    const handleSelect = (value) => {
        const newAnswers = { ...answers, [currentQ.id]: value };
        setAnswers(newAnswers);

        if (step < questions.length - 1) {
            setTimeout(() => setStep(step + 1), 300);
        } else {
            // Calculate results
            const scored = cards.map(card => ({
                ...card,
                matchScore: scoreCard(card, newAnswers),
            }));
            scored.sort((a, b) => b.matchScore - a.matchScore);
            setResults(scored.slice(0, 3));
        }
    };

    const handleBack = () => {
        if (step > 0) setStep(step - 1);
    };

    const handleReset = () => {
        setStep(0);
        setAnswers({});
        setResults(null);
    };

    if (results) {
        return (
            <section className="section" id="finder">
                <div className="section-header">
                    <h2>🎯 Your <span className="gradient-text">Top Matches</span></h2>
                    <p>Based on your preferences, here are the best credit cards for you.</p>
                </div>
                <div className="results-grid">
                    {results.map((card, i) => (
                        <div key={card.id} className="result-card">
                            <div className="card-tile-accent" style={{ background: card.color }} />
                            <div className="card-tile-body">
                                <div className="result-match">
                                    {i === 0 ? '🏆' : i === 1 ? '🥈' : '🥉'} {card.matchScore}% Match
                                </div>
                                <div className="card-tile-issuer">{card.issuer} · {card.network}</div>
                                <div className="card-tile-name" style={{ marginBottom: '12px' }}>{card.name}</div>
                                <div className="card-tile-fee">
                                    <span className="card-tile-fee-amount">
                                        {card.annualFee === 0 ? 'FREE' : `$${card.annualFee}`}
                                    </span>
                                    <span className="card-tile-fee-label">/ year</span>
                                </div>
                                <div className="card-tile-rewards" style={{ marginBottom: '16px' }}>
                                    {card.rewards.slice(0, 3).map((r, j) => (
                                        <div key={j} className="card-tile-reward-item">
                                            <span className="card-tile-reward-category">{r.category}</span>
                                            <span className="card-tile-reward-rate">{r.rate}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="card-tile-actions">
                                    <button className="btn btn-secondary btn-sm" onClick={() => onViewCard(card)}>
                                        Details
                                    </button>
                                    <a href={card.affiliateLink} className="btn btn-accent btn-sm" rel="nofollow sponsored" target="_blank">
                                        Apply Now →
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div style={{ textAlign: 'center', marginTop: '32px', display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <button className="btn btn-secondary" onClick={handleReset}>
                        ↻ Retake Quiz
                    </button>
                    <button className="btn btn-primary" onClick={() => onNavigate('browse')}>
                        Browse All Cards →
                    </button>
                </div>
            </section>
        );
    }

    return (
        <section className="section" id="finder">
            <div className="section-header">
                <h2>🎯 <span className="gradient-text">CardFinder</span> Quiz</h2>
                <p>Answer a few questions and we'll recommend the best cards for you.</p>
            </div>
            <div className="card-finder">
                <div className="quiz-progress">
                    {questions.map((_, i) => (
                        <div
                            key={i}
                            className={`quiz-progress-step ${i < step ? 'completed' : i === step ? 'active' : ''}`}
                        />
                    ))}
                </div>
                <div className="quiz-question">
                    <h3>{currentQ.title}</h3>
                    <p>{currentQ.subtitle}</p>
                    <div className="quiz-options">
                        {currentQ.options.map((opt) => (
                            <div
                                key={opt.value}
                                className={`quiz-option ${answers[currentQ.id] === opt.value ? 'selected' : ''}`}
                                onClick={() => handleSelect(opt.value)}
                            >
                                <div className="quiz-option-icon">{opt.icon}</div>
                                <div className="quiz-option-label">{opt.label}</div>
                                <div className="quiz-option-desc">{opt.desc}</div>
                            </div>
                        ))}
                    </div>
                    <div className="quiz-nav">
                        {step > 0 ? (
                            <button className="btn btn-secondary btn-sm" onClick={handleBack}>
                                ← Back
                            </button>
                        ) : <div />}
                        <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                            Step {step + 1} of {questions.length}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
