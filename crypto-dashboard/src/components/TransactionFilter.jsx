import React from 'react'

const TransactionFilter = ({ filters, onChange }) => {
  return (
    <div className="flex space-x-3">
      <select
        value={filters.type}
        onChange={(e) => onChange({...filters, type: e.target.value})}
        className="bg-gray-700 text-sm rounded-lg px-3 py-1"
      >
        <option value="all">All Types</option>
        <option value="buy">Buy</option>
        <option value="sell">Sell</option>
        <option value="deposit">Deposit</option>
        <option value="withdraw">Withdraw</option>
      </select>
      
      <select
        value={filters.status}
        onChange={(e) => onChange({...filters, status: e.target.value})}
        className="bg-gray-700 text-sm rounded-lg px-3 py-1"
      >
        <option value="all">All Statuses</option>
        <option value="completed">Completed</option>
        <option value="pending">Pending</option>
        <option value="failed">Failed</option>
      </select>
    </div>
  )
}

export default TransactionFilter