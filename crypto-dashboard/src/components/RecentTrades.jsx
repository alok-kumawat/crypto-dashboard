import React from 'react'

const RecentTrades = ({ pair }) => {
  // Mock recent trades data
  const trades = [
    { price: 42356, amount: 0.042, time: '12:45:23', type: 'buy' },
    { price: 42355, amount: 1.24, time: '12:44:56', type: 'sell' },
    { price: 42357, amount: 0.85, time: '12:43:12', type: 'buy' },
    { price: 42354, amount: 0.15, time: '12:42:33', type: 'sell' },
    { price: 42358, amount: 2.1, time: '12:41:47', type: 'buy' }
  ]

  return (
    <div>
      <h3 className="font-semibold mb-3">Recent Trades - {pair}</h3>
      <div className="grid grid-cols-3 text-sm text-gray-400 mb-2">
        <span>Price</span>
        <span className="text-right">Amount</span>
        <span className="text-right">Time</span>
      </div>
      
      <div className="space-y-1">
        {trades.map((trade, i) => (
          <div key={i} className="grid grid-cols-3 text-sm">
            <span className={trade.type === 'buy' ? 'text-green-400' : 'text-red-400'}>
              {trade.price.toLocaleString()}
            </span>
            <span className="text-right">{trade.amount.toFixed(4)}</span>
            <span className="text-right text-gray-400">{trade.time}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentTrades