import React, { useState } from 'react'
import TransactionFilter from '../components/TransactionFilter'
import TransactionTable from '../components/TransactionTable'
import TransactionDetailsModal from '../components/TransactionDetailsModal'

const Transactions = () => {
  const [transactions, setTransactions] = useState([
    {
      id: 'tx1',
      type: 'buy',
      amount: 0.042,
      currency: 'BTC',
      value: 1800,
      status: 'completed',
      date: new Date(),
      txHash: '0x9a2b...4f1c'
    },
    // More transaction data
  ])
  const [filters, setFilters] = useState({ type: 'all', status: 'all' })
  const [selectedTx, setSelectedTx] = useState(null)

  const filteredTxs = transactions.filter(tx => {
    return (
      (filters.type === 'all' || tx.type === filters.type) &&
      (filters.status === 'all' || tx.status === filters.status)
    )
  })

  return (
    <div className="ml-64 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Transaction History</h1>
        <TransactionFilter 
          filters={filters}
          onChange={setFilters}
        />
      </div>

      <div className="bg-gray-800 rounded-xl overflow-hidden">
        <TransactionTable 
          transactions={filteredTxs}
          onRowClick={setSelectedTx}
        />
      </div>

      {selectedTx && (
        <TransactionDetailsModal
          transaction={selectedTx}
          onClose={() => setSelectedTx(null)}
        />
      )}
    </div>
  )
}

export default Transactions