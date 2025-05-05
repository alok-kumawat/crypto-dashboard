import React, { useContext } from 'react'
import { CryptoContext } from '../context/CryptoContext'
import CryptoTable from '../components/CryptoTable'
import TradingViewWidget from '../components/TradingViewWidget'
// import MarketOverviewCards from '../components/MarketOverviewCards'

const Market = () => {
  const { timeRange, setTimeRange } = useContext(CryptoContext)

  return (
    <div className="ml-64 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Market Overview</h1>
        <div className="flex space-x-2 bg-gray-800 rounded-lg p-1">
          {['24h', '7d', '30d', '90d'].map(range => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-3 py-1 text-sm rounded-md ${
                timeRange === range ? 'bg-blue-600 text-white' : 'hover:bg-gray-700'
              }`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      {/* <MarketOverviewCards /> */}
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2 bg-gray-800 rounded-xl p-6">
          <TradingViewWidget symbol="BTCUSD" />
        </div>
        <div className="bg-gray-800 rounded-xl p-6">
          <h3 className="font-semibold mb-4">Top Gainers</h3>
          {/* Mini gainers table component */}
        </div>
      </div>

      <CryptoTable />
    </div>
  )
}

export default Market