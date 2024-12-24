import React, { useEffect, useState } from 'react';
// import { fetchExchangeRate } from './api';

import { fetchExchangeRate } from './liveprice';

const CurrencyDisplay = () => {
    const [exchangeRate, setExchangeRate] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        const getExchangeRate = async () => {
            try {
                const data = await fetchExchangeRate();
                setExchangeRate(data.rates); // Assuming the API returns rates in this format
                setLoading(false);
            } catch (err:any) {
                setError(err);
                setLoading(false);
            }
        };

        getExchangeRate();
        const interval = setInterval(getExchangeRate, 60000); // Refresh every minute

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error fetching data: {error.message}</div>;

    return (
        <div>
            <h1>Live Market Price of USD</h1>
            <ul>
                {Object.entries(exchangeRate).map(([currency, rate]:any) => (
                    <li key={currency}>
                        {currency}: {rate}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CurrencyDisplay;