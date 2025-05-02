import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Card from '../components/Card'
import Chart from '../components/Chart'
import CryptoTable from '../components/CryptoTable'
import { FiTrendingUp, FiDollarSign, FiPieChart, FiBarChart2 } from 'react-icons/fi'

const Dashboard = () => {
  return (
    <div className="flex bg-gray-900 text-white min-h-screen">
      <Sidebar />
      
      <div className="flex-1 ml-64">
        <Header />
        
        <main className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <Card 
              title="Total Balance" 
              value="$13,500.42" 
              change={12.5} 
              icon={<FiTrendingUp className="text-white text-xl" />} 
              color="bg-blue-600" 
            />
            <Card 
              title="BTC Value" 
              value="$8,245.32" 
              change={8.2} 
              icon={<FiDollarSign className="text-white text-xl" />} 
              color="bg-orange-600" 
            />
            <Card 
              title="ETH Value" 
              value="$3,421.10" 
              change={4.7} 
              icon={<FiPieChart className="text-white text-xl" />} 
              color="bg-purple-600" 
            />
            <Card 
              title="Other Assets" 
              value="$1,834.00" 
              change={-2.1} 
              icon={<FiBarChart2 className="text-white text-xl" />} 
              color="bg-green-600" 
            />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className="lg:col-span-2">
              <Chart />
            </div>
            <div className="bg-gray-800 rounded-xl p-5">
              <h3 className="font-semibold mb-4">Asset Allocation</h3>
              <div className="space-y-4">
                {[
                  { name: 'Bitcoin', value: 61, color: 'bg-orange-500' },
                  { name: 'Ethereum', value: 25, color: 'bg-purple-500' },
                  { name: 'Cardano', value: 8, color: 'bg-blue-500' },
                  { name: 'Other', value: 6, color: 'bg-gray-500' }
                ].map((asset, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{asset.name}</span>
                      <span>{asset.value}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className={`${asset.color} h-2 rounded-full`} 
                        style={{ width: `${asset.value}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-gray-700">
                <h4 className="text-sm font-medium mb-3">Recent Transactions</h4>
                <div className="space-y-3">
                  {[
                    { type: 'Buy', coin: 'BTC', amount: '0.042 BTC', value: '$1,800', status: 'Completed', time: '2 hours ago' },
                    { type: 'Sell', coin: 'ETH', amount: '1.2 ETH', value: '$3,050', status: 'Completed', time: '1 day ago' },
                    { type: 'Buy', coin: 'ADA', amount: '500 ADA', value: '$280', status: 'Pending', time: '2 days ago' }
                  ].map((tx, index) => (
                    <div key={index} className="flex justify-between items-center text-sm">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${tx.type === 'Buy' ? 'bg-green-900 text-green-400' : 'bg-red-900 text-red-400'}`}>
                        {tx.type === 'Buy' ? 'B' : 'S'}
                      </div>
                      <div className="flex-1 ml-3">
                        <div className="font-medium">{tx.coin}</div>
                        <div className="text-gray-400 text-xs">{tx.time}</div>
                      </div>
                      <div className="text-right">
                        <div>{tx.amount}</div>
                        <div className="text-gray-400 text-xs">{tx.value}</div>
                      </div>
                      <div className={`ml-4 px-2 py-1 rounded text-xs ${tx.status === 'Completed' ? 'bg-blue-900 text-blue-400' : 'bg-yellow-900 text-yellow-400'}`}>
                        {tx.status}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <CryptoTable />
          </div>
        </main>
      </div>
    </div>
  )
}

export default Dashboard