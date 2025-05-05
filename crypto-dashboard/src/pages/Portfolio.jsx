import React, { useContext } from 'react'
import { CryptoContext } from '../context/CryptoContext'
import PortfolioAllocationChart from '../components/PortfolioAllocationChart'
import PerformanceChart from '../components/PerformanceChart'
// import AssetTable from '../components/AssetTable'

const Portfolio = () => {
  const { cryptoData } = useContext(CryptoContext)

  // Mock portfolio data
  const portfolio = {
    totalValue: 13500.42,
    allocation: [
      { name: 'Bitcoin', value: 8245.32, change: 8.2 },
      { name: 'Ethereum', value: 3421.10, change: 4.7 },
      { name: 'Other', value: 1834.00, change: -2.1 }
    ],
    performance: Array.from({length: 30}, (_, i) => ({
      date: new Date(Date.now() - (29 - i) * 86400000).toLocaleDateString(),
      value: 10000 + Math.random() * 4000
    }))
  }

  return (
    <div className="ml-64 p-6">
      <h1 className="text-2xl font-bold mb-6">My Portfolio</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-gray-800 rounded-xl p-6">
          <h3 className="text-gray-400 mb-2">Total Balance</h3>
          <p className="text-2xl font-bold">${portfolio.totalValue.toLocaleString()}</p>
          <p className="text-green-400 mt-2">+12.5% (30d)</p>
        </div>
        {/* Add more summary cards */}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-gray-800 rounded-xl p-6">
          <h3 className="font-semibold mb-4">Asset Allocation</h3>
          <PortfolioAllocationChart data={portfolio.allocation} />
        </div>
        <div className="bg-gray-800 rounded-xl p-6">
          <h3 className="font-semibold mb-4">Performance</h3>
          <PerformanceChart data={portfolio.performance} />
        </div>
      </div>

      {/* <AssetTable assets={cryptoData} /> */}
    </div>
  )
}

export default Portfolio