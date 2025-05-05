import React, { useState } from 'react'

const ExchangeForm = ({ type = 'market', pair = 'BTC/USDT' }) => {
  const [formData, setFormData] = useState({
    side: 'buy',
    amount: '',
    price: type === 'limit' ? '' : 'market',
    total: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle order submission
  }

  return (
    <div>
      <div className="flex mb-4 border-b border-gray-700">
        <div className={`flex-1 text-center py-2 ${
          formData.side === 'buy' ? 'text-green-400 border-b-2 border-green-400' : 'text-gray-400'
        }`}>
          Buy
        </div>
        <div className={`flex-1 text-center py-2 ${
          formData.side === 'sell' ? 'text-red-400 border-b-2 border-red-400' : 'text-gray-400'
        }`}>
          Sell
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {type === 'limit' && (
          <div className="mb-4">
            <label className="block text-gray-400 text-sm mb-1">Price</label>
            <input
              type="number"
              className="w-full bg-gray-700 rounded-lg px-4 py-2"
              value={formData.price}
              onChange={(e) => setFormData({...formData, price: e.target.value})}
              required
            />
          </div>
        )}

        <div className="mb-4">
          <label className="block text-gray-400 text-sm mb-1">Amount</label>
          <input
            type="number"
            className="w-full bg-gray-700 rounded-lg px-4 py-2"
            value={formData.amount}
            onChange={(e) => setFormData({...formData, amount: e.target.value})}
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-400 text-sm mb-1">Total</label>
          <input
            type="number"
            className="w-full bg-gray-700 rounded-lg px-4 py-2"
            value={formData.total}
            onChange={(e) => setFormData({...formData, total: e.target.value})}
            required
          />
        </div>

        <button
          type="submit"
          className={`w-full py-3 rounded-lg font-bold ${
            formData.side === 'buy' ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700'
          }`}
        >
          {formData.side === 'buy' ? 'Buy' : 'Sell'} {pair.split('/')[0]}
        </button>
      </form>
    </div>
  )
}

export default ExchangeForm