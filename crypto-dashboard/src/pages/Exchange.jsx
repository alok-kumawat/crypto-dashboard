import React, { useState } from 'react'
import ExchangeForm from '../components/ExchangeForm'
import OrderBook from '../components/OrderBook'
import PriceChart from '../components/PriceChart'
import RecentTrades from '../components/RecentTrades'

const Exchange = () => {
  const [pair, setPair] = useState('BTC/USDT')
  const [activeTab, setActiveTab] = useState('market')

  return (
    <div className="ml-64 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Exchange</h1>
        <div className="flex space-x-2">
          <button
            className={`px-4 py-2 rounded-lg ${activeTab === 'market' ? 'bg-blue-600' : 'bg-gray-700'}`}
            onClick={() => setActiveTab('market')}
          >
            Market
          </button>
          <button
            className={`px-4 py-2 rounded-lg ${activeTab === 'limit' ? 'bg-blue-600' : 'bg-gray-700'}`}
            onClick={() => setActiveTab('limit')}
          >
            Limit
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2">
          <div className="bg-gray-800 rounded-xl p-6 mb-6">
            <PriceChart pair={pair} />
          </div>
          <div className="bg-gray-800 rounded-xl p-6">
            <ExchangeForm type={activeTab} pair={pair} />
          </div>
        </div>
        <div className="space-y-6">
          <div className="bg-gray-800 rounded-xl p-6">
            <OrderBook pair={pair} />
          </div>
          <div className="bg-gray-800 rounded-xl p-6">
            <RecentTrades pair={pair} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Exchange