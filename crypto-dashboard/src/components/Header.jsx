import React, { useContext } from 'react'
import { FiSearch, FiBell, FiUser } from 'react-icons/fi'
import { CryptoContext } from '../context/CryptoContext'

const Header = () => {
  const { 
    selectedCurrency, 
    setSelectedCurrency, 
    timeRange, 
    setTimeRange,
    user,
    logout
  } = useContext(CryptoContext)

  return (
    <header className="ml-64 bg-gray-800 p-4 flex items-center justify-between border-b border-gray-700">
      {/* ... existing search input ... */}
      
      <div className="flex items-center space-x-4">
        {/* ... existing time range and currency select ... */}
        
        <button className="p-2 rounded-full hover:bg-gray-700 relative">
          <FiBell className="text-lg" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        
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