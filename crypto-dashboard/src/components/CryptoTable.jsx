import React, { useContext } from 'react'
import { CryptoContext } from '../context/CryptoContext'

const CryptoTable = () => {
  const { cryptoData, loading, selectedCurrency } = useContext(CryptoContext)

  // Format price based on selected currency
  const formatPrice = (price) => {
    if (selectedCurrency === 'BTC') {
      return (price / 42000).toFixed(8) + ' BTC' // Assuming 1 BTC = $42,000
    }
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: selectedCurrency,
      minimumFractionDigits: 2,
      maximumFractionDigits: selectedCurrency === 'USD' ? 2 : 6
    }).format(price)
  }

  // Format market cap similarly
  const formatMarketCap = (cap) => {
    if (selectedCurrency === 'BTC') {
      return (cap / 42000 / 1000000000).toFixed(4) + ' BTC'
    }
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: selectedCurrency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(cap / 1000000000) + 'B'
  }

  // Format volume similarly
  const formatVolume = (volume) => {
    if (selectedCurrency === 'BTC') {
      return (volume / 42000 / 1000000000).toFixed(4) + ' BTC'
    }
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: selectedCurrency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(volume / 1000000000) + 'B'
  }

  if (loading) {
    return (
      <div className="bg-gray-800 rounded-xl p-5">
        <div className="animate-pulse space-y-4">
          <div className="h-6 bg-gray-700 rounded w-1/4"></div>
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex justify-between items-center py-3 border-b border-gray-700">
              <div className="flex items-center space-x-3">
                <div className="h-8 w-8 bg-gray-700 rounded-full"></div>
                <div className="h-4 bg-gray-700 rounded w-16"></div>
                <div className="h-4 bg-gray-700 rounded w-10"></div>
              </div>
              <div className="h-4 bg-gray-700 rounded w-16"></div>
              <div className="h-4 bg-gray-700 rounded w-16"></div>
              <div className="h-4 bg-gray-700 rounded w-16"></div>
              <div className="h-4 bg-gray-700 rounded w-16"></div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gray-800 rounded-xl p-5">
      <h3 className="font-semibold mb-4">Top Cryptocurrencies</h3>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px]"> {/* Added min-w-[600px] */}
          <thead>
            <tr className="text-left text-gray-400 text-sm border-b border-gray-700">
              <th className="pb-3 pl-2">S.no</th>
              <th className="pb-3">Name</th>
              <th className="pb-3 text-right">Price</th>
              <th className="pb-3 text-right">24h Change</th>
              <th className="pb-3 text-right">Market Cap</th>
              <th className="pb-3 text-right">Volume (24h)</th>
              <th className="pb-3 text-right">Last 7 Days</th>
            </tr>
          </thead>
          <tbody>
            {cryptoData.map((crypto, index) => (
              <tr key={crypto.id} className="border-b border-gray-700 hover:bg-gray-700/50">
                <td className="py-4 pl-2">{index + 1}</td>
                <td className="py-4">
                  <div className="flex items-center">
                    <img src={crypto.image} alt={crypto.name} className="w-6 h-6 mr-3" />
                    <span className="font-medium">{crypto.name}</span>
                    <span className="text-gray-400 ml-2 text-sm">{crypto.symbol.toUpperCase()}</span>
                  </div>
                </td>
                <td className="py-4 text-right">{formatPrice(crypto.current_price)}</td>
                <td className={`py-4 text-right ${crypto.price_change_percentage_24h >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {crypto.price_change_percentage_24h >= 0 ? '+' : ''}{crypto.price_change_percentage_24h.toFixed(2)}%
                </td>
                <td className="py-4 text-right">{formatMarketCap(crypto.market_cap)}</td>
                <td className="py-4 text-right">{formatVolume(crypto.total_volume)}</td>
                <td className="py-4 text-right">
                  <div className="flex justify-end">
                    <div className="w-20 h-8">
                      <div className="flex items-end h-full">
                        {crypto.sparkline_in_7d.price.map((price, i, arr) => {
                          const min = Math.min(...arr)
                          const max = Math.max(...arr)
                          const height = ((price - min) / (max - min)) * 100 || 0
                          const color = crypto.price_change_percentage_24h >= 0 ? 'bg-green-400' : 'bg-red-400'
                          return (
                            <div 
                              key={i} 
                              className={`w-1 mx-px ${color}`} 
                              style={{ height: `${height}%` }}
                            />
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CryptoTable