import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const PriceChart = ({ pair }) => {
  // Mock price history data
  const data = Array.from({ length: 24 }, (_, i) => ({
    time: `${i}:00`,
    price: 42000 + Math.sin(i / 2) * 500 + Math.random() * 200
  }))

  return (
    <div className="h-64">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold">{pair} Price</h3>
        <div className="flex space-x-2 text-sm">
          <button className="px-2 py-1 bg-gray-700 rounded">1H</button>
          <button className="px-2 py-1 bg-blue-600 rounded">1D</button>
          <button className="px-2 py-1 bg-gray-700 rounded">1W</button>
          <button className="px-2 py-1 bg-gray-700 rounded">1M</button>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
          <XAxis dataKey="time" stroke="#9ca3af" />
          <YAxis domain={['auto', 'auto']} stroke="#9ca3af" />
          <Tooltip 
            contentStyle={{ backgroundColor: '#1f2937', borderColor: '#374151' }}
            formatter={(value) => [`$${value.toLocaleString()}`, 'Price']}
          />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#3b82f6"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default PriceChart