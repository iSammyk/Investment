import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Api = () => {
    const [cryptoData, setCryptoData] = useState([]);

    useEffect(() => {    const fetchData = async () => {
        try {
          const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
            params: {
              vs_currency: 'usd',
              order: 'market_cap_desc',
              per_page: 5,
              page: 1,
              sparkline: false,
            },
          });
          setCryptoData(response.data);
        } catch (error) {
          console.error('Error fetching crypto data:', error);
        }
      };
  
      fetchData();
    }, []);

    return (
        <div className=''>
            {/* <h1>Crypto Tracker</h1> */}
            <h2 className='text-center doe'>
                Our supported currencies
            </h2>
            <div  className='table-continer'>
            <table className="table mt-3 table-light table-striped">
                <thead>
                    <tr>
                        <th className='text-success'>Name</th>
                        <th className='text-success'>Image</th>
                        <th className='text-success'>Symbol</th>
                        <th className='text-success'>Price (USD)</th>
                        <th className='text-success'>Market Cap (USD)</th>
                        <th className='text-success'>24h Change</th>
                    </tr>
                </thead>
                <tbody>
                    {cryptoData.map((crypto) => (
                        <tr key={crypto.id}>
                            <td>{crypto.name}</td>
                            <td className='gap-2 d-flex'>
                                <img src={crypto.image} alt={crypto.name} style={{ width: '30px', height: '30px' }} />
                                <b>{crypto.name}</b>
                            </td>
                            <td>{crypto.symbol.toUpperCase()}</td>
                            <td>${crypto.current_price.toFixed(2)}</td>
                            <td>${crypto.market_cap.toLocaleString()}</td>
                            <td className={crypto.price_change_percentage_24h > 0 ? 'text-success' : 'text-danger'}>
                                {crypto.price_change_percentage_24h.toFixed(2)}%
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default Api;
