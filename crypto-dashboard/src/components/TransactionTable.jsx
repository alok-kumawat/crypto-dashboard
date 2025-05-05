import React from 'react'
import { FiExternalLink } from 'react-icons/fi'

const TransactionTable = ({ transactions, onRowClick }) => {
  const formatDate = (date) => {
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString()
  }

  return (
    <table className="w-full">
      <thead>
        <tr className="text-left text-gray-400 text-sm border-b border-gray-700">
          <th className="pb-3 pl-4">Type</th>
          <th className="pb-3">Amount</th>
          <th className="pb-3">Value</th>
          <th className="pb-3">Status</th>
          <th className="pb-3">Date</th>
          <th className="pb-3 pr-4"></th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((tx) => (
          <tr 
            key={tx.id} 
            className="border-b border-gray-700 hover:bg-gray-700/50 cursor-pointer"
            onClick={() => onRowClick(tx)}
          >
            <td className="py-4 pl-4">
              <span className={`px-2 py-1 rounded text-xs ${
                tx.type === 'buy' ? 'bg-green-900 text-green-400' : 'bg-red-900 text-red-400'
              }`}>
                {tx.type.toUpperCase()}
              </span>
            </td>
            <td className="py-4">{tx.amount} {tx.currency}</td>
            <td className="py-4">${tx.value.toLocaleString()}</td>
            <td className="py-4">
              <span className={`px-2 py-1 rounded text-xs ${
                tx.status === 'completed' ? 'bg-blue-900 text-blue-400' : 
                tx.status === 'pending' ? 'bg-yellow-900 text-yellow-400' : 'bg-gray-700'
              }`}>
                {tx.status.charAt(0).toUpperCase() + tx.status.slice(1)}
              </span>
            </td>
            <td className="py-4">{formatDate(tx.date)}</td>
            <td className="py-4 pr-4">
              <button className="text-gray-400 hover:text-white">
                <FiExternalLink />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default TransactionTable