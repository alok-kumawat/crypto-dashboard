import React, { useContext } from 'react'
import { FiSearch, FiBell, FiUser } from 'react-icons/fi'
import { CryptoContext } from '../context/CryptoContext'

const Header = () => {
  const { 
    searchQuery,
    setSearchQuery,
    selectedCurrency, 
    setSelectedCurrency,
    timeRange, 
    setTimeRange,
    user,
    logout
  } = useContext(CryptoContext)

  return (
    <header className="ml-64 bg-gray-800 p-4 flex items-center justify-between border-b border-gray-700">
      {/* Search Input - Now with search functionality */}
      <div className="relative w-64">
        <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input 
          type="text" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search coins..." 
          className="w-full bg-gray-700 rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      
      <div className="flex items-center space-x-4">
        {/* Time Range Filter - Maintained existing styling */}
        <div className="flex items-center space-x-2 bg-gray-700 rounded-lg p-1">
          {['24h', '7d', '30d', '90d'].map(range => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-3 py-1 text-sm rounded-md ${
                timeRange === range 
                  ? 'bg-blue-600 text-white' 
                  : 'hover:bg-gray-600'
              }`}
            >
              {range}
            </button>
          ))}
        </div>
        
        {/* Currency Select - Maintained existing styling */}
        <select 
          value={selectedCurrency}
          onChange={(e) => setSelectedCurrency(e.target.value)}
          className="bg-gray-700 text-sm rounded-lg px-3 py-1 focus:outline-none"
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="BTC">BTC</option>
        </select>
        
        {/* Notification Bell - Unchanged */}
        <button className="p-2 rounded-full hover:bg-gray-700 relative">
          <FiBell className="text-lg" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        
        {/* User Dropdown - Unchanged */}
        <div className="flex items-center space-x-2 group relative">
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
            <FiUser className="text-white" />
          </div>
          <span className="text-sm font-medium">{user?.name || 'Guest'}</span>
          
          <div className="absolute right-0 top-full mt-2 w-48 bg-gray-800 rounded-lg shadow-lg hidden group-hover:block z-10">
            <button 
              onClick={logout}
              className="w-full text-left px-4 py-2 text-sm hover:bg-gray-700 rounded-lg"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header