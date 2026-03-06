import React, { useEffect } from 'react';

export default function AdBanner({ dataAdSlot, format = 'auto', responsive = 'true' }) {
    useEffect(() => {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (err) {
            console.error('AdSense error:', err);
        }
    }, []);

    return (
        <div style={{ textAlign: 'center', margin: '32px 0', padding: '0 16px' }}>
            <ins className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-client="ca-pub-9885992062134301"
                data-ad-slot={dataAdSlot}
                data-ad-format={format}
                data-full-width-responsive={responsive}></ins>
        </div>
    );
}
