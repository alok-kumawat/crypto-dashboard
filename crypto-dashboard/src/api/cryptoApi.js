// Here I use Mock data - in a real app it would be fetched from an API like CoinGecko
export const fetchCryptoData = async () => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800))
    
    return [
      {
        id: 'bitcoin',
        symbol: 'btc',
        name: 'Bitcoin',
        image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png',
        current_price: 42356,
        price_change_percentage_24h: 2.34,
        market_cap: 812345678901,
        total_volume: 23456789012,
        sparkline_in_7d: {
          price: [41000, 41200, 41500, 41300, 41800, 42000, 42356]
        }
      },
      {
        id: 'ethereum',
        symbol: 'eth',
        name: 'Ethereum',
        image: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png',
        current_price: 2543.21,
        price_change_percentage_24h: 1.56,
        market_cap: 304567890123,
        total_volume: 12345678901,
        sparkline_in_7d: {
          price: [2500, 2510, 2525, 2530, 2535, 2540, 2543.21]
        }
      },
      {
        id: 'cardano',
        symbol: 'ada',
        name: 'Cardano',
        image: 'https://assets.coingecko.com/coins/images/975/large/cardano.png',
        current_price: 0.56,
        price_change_percentage_24h: -0.78,
        market_cap: 19876543210,
        total_volume: 987654321,
        sparkline_in_7d: {
          price: [0.58, 0.57, 0.57, 0.56, 0.56, 0.56, 0.56]
        }
      },
      {
        id: 'solana',
        symbol: 'sol',
        name: 'Solana',
        image: 'https://assets.coingecko.com/coins/images/4128/large/solana.png',
        current_price: 102.45,
        price_change_percentage_24h: 5.67,
        market_cap: 34567890123,
        total_volume: 2345678901,
        sparkline_in_7d: {
          price: [98, 99, 100, 101, 102, 102.5, 102.45]
        }
      },
      {
        id: 'ripple',
        symbol: 'xrp',
        name: 'XRP',
        image: 'https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png',
        current_price: 0.62,
        price_change_percentage_24h: 0.32,
        market_cap: 29876543210,
        total_volume: 1987654321,
        sparkline_in_7d: {
          price: [0.61, 0.615, 0.62, 0.618, 0.62, 0.62, 0.62]
        }
      }
    ]
  }