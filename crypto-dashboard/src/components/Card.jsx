import React from 'react'

const Card = ({ title, value, change, icon, color }) => {
  const isPositive = change >= 0

  return (
    <div className="bg-gray-800 rounded-xl p-5 flex-1 min-w-[200px]">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-gray-400 text-sm">{title}</p>
          <p className="text-2xl font-bold mt-1">{value}</p>
        </div>
        <div className={`p-2 rounded-lg ${color}`}>
          {icon}
        </div>
      </div>
      <div className={`mt-4 text-sm ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
        <span>{isPositive ? '+' : ''}{change}%</span>
        <span className="ml-2 text-gray-400">vs last period</span>
      </div>
    </div>
  )
}

export default Card