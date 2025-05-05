import React from 'react'
import { FiCopy, FiExternalLink } from 'react-icons/fi'

const TransactionDetailsModal = ({ transaction, onClose }) => {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
    // Add toast notification here if desired
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-800 rounded-xl p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Transaction Details</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            ✕
          </button>
        </div>
        
        <div className="space-y-4">
          <div>
            <p className="text-gray-400 text-sm">Transaction ID</p>
            <div className="flex items-center">
              <p className="font-mono text-sm">{transaction.id}</p>
              <button 
                onClick={() => copyToClipboard(transaction.id)}
                className="ml-2 text-gray-400 hover:text-white"
              >
                <FiCopy />
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-400 text-sm">Type</p>
              <p className={`font-medium ${
                transaction.type === 'buy' ? 'text-green-400' : 'text-red-400'
              }`}>
                {transaction.type.charAt(0).toUpperCase() + transaction.type.slice(1)}
              </p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Status</p>
              <p className="font-medium">{transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}</p>
            </div>
          </div>
          
          <div>
            <p className="text-gray-400 text-sm">Amount</p>
            <p className="font-medium">{transaction.amount} {transaction.currency}</p>
          </div>
          
          <div>
            <p className="text-gray-400 text-sm">Value</p>
            <p className="font-medium">${transaction.value.toLocaleString()}</p>
          </div>
          
          <div>
            <p className="text-gray-400 text-sm">Date</p>
            <p className="font-medium">
              {new Date(transaction.date).toLocaleString()}
            </p>
          </div>
          
          <div>
            <p className="text-gray-400 text-sm">Transaction Hash</p>
            <div className="flex items-center">
              <p className="font-mono text-sm truncate">{transaction.txHash}</p>
              <button 
                onClick={() => copyToClipboard(transaction.txHash)}
                className="ml-2 text-gray-400 hover:text-white"
              >
                <FiCopy />
              </button>
              <a 
                href={`https://etherscan.io/tx/${transaction.txHash}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="ml-2 text-blue-400 hover:text-blue-300"
              >
                <FiExternalLink />
              </a>
            </div>
          </div>
        </div>
        
        <button
          onClick={onClose}
          className="mt-6 w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-lg"
        >
          Close
        </button>
      </div>
    </div>
  )
}

export default TransactionDetailsModal