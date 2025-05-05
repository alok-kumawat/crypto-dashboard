import React from 'react'

const OrderBook = ({ pair }) => {
  // Mock order book data
  const bids = [
    { price: 42356, amount: 1.24, total: 52521.44 },
    { price: 42355, amount: 0.85, total: 36001.75 },
    { price: 42354, amount: 2.1, total: 88943.4 },
    { price: 42352, amount: 1.5, total: 63528 },
    { price: 42350, amount: 0.75, total: 31762.5 }
  ]

  const asks = [
    { price: 42357, amount: 0.92, total: 38968.44 },
    { price: 42358, amount: 1.35, total: 57183.3 },
    { price: 42360, amount: 2.4, total: 101664 },
    { price: 42362, amount: 1.1, total: 46598.2 },
    { price: 42365, amount: 0.6, total: 25419 }
  ]

  return (
    <div>
      <h3 className="font-semibold mb-3">Order Book - {pair}</h3>
      <div className="grid grid-cols-3 text-sm text-gray-400 mb-2">
        <span>Price</span>
        <span className="text-right">Amount</span>
        <span className="text-right">Total</span>
      </div>
      
      <div className="space-y-1 mb-4">
        {asks.slice().reverse().map((order, i) => (
          <div key={`ask-${i}`} className="grid grid-cols-3 text-red-400 text-sm">
            <span>{order.price.toLocaleString()}</span>
            <span className="text-right">{order.amount.toFixed(4)}</span>
            <span className="text-right">{order.total.toLocaleString(undefined, {maximumFractionDigits: 2})}</span>
          </div>
        ))}
      </div>

      <div className="text-center my-2 text-blue-400 font-medium">
        {((bids[0].price + asks[0].price) / 2).toLocaleString(undefined, {maximumFractionDigits: 2})}
      </div>

      <div className="space-y-1">
        {bids.map((order, i) => (
          <div key={`bid-${i}`} className="grid grid-cols-3 text-green-400 text-sm">
            <span>{order.price.toLocaleString()}</span>
            <span className="text-right">{order.amount.toFixed(4)}</span>
            <span className="text-right">{order.total.toLocaleString(undefined, {maximumFractionDigits: 2})}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OrderBook