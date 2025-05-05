import React, { useState, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { FiHome, FiPieChart, FiDollarSign, FiSettings, FiLogOut, FiMenu } from 'react-icons/fi'
import { BsGraphUp, BsWallet2 } from 'react-icons/bs'
import { RiExchangeLine } from 'react-icons/ri'
import { CryptoContext } from '../context/CryptoContext'

const Sidebar = () => {
  const { logout } = useContext(CryptoContext)
  const [isMobileCollapsed, setIsMobileCollapsed] = useState(false)

  return (
    <>
      {/* Mobile Toggle Button (only shows on small screens) */}
      <button 
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-gray-800 rounded-lg text-white"
        onClick={() => setIsMobileCollapsed(!isMobileCollapsed)}
      >
        <FiMenu size={20} />
      </button>

      {/* Sidebar - now responsive */}
      <div className={`
        bg-gray-900 text-white h-screen fixed left-0 top-0 p-6 flex flex-col
        transition-all duration-300 z-40
        ${isMobileCollapsed ? '-translate-x-full' : 'translate-x-0'}
        md:translate-x-0
        w-64
      `}>
        <div className="flex items-center mb-10">
          <div className="w-8 h-8 bg-blue-500 rounded-md mr-3"></div>
          <h1 className="text-xl font-bold">CryptoDash</h1>
        </div>
        
        <nav className="flex-1">
          <ul className="space-y-3">
            <li>
              <NavLink to="/" className={({ isActive }) => 
                `flex items-center p-3 rounded-lg ${isActive ? 'bg-gray-800 text-blue-400' : 'hover:bg-gray-800'}`}>
                <FiHome className="mr-3" />
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/market" className={({ isActive }) => 
                `flex items-center p-3 rounded-lg ${isActive ? 'bg-gray-800 text-blue-400' : 'hover:bg-gray-800'}`}>
                <BsGraphUp className="mr-3" />
                Market
              </NavLink>
            </li>
            <li>
              <NavLink to="/portfolio" className={({ isActive }) => 
                `flex items-center p-3 rounded-lg ${isActive ? 'bg-gray-800 text-blue-400' : 'hover:bg-gray-800'}`}>
                <FiPieChart className="mr-3" />
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink to="/wallets" className={({ isActive }) => 
                `flex items-center p-3 rounded-lg ${isActive ? 'bg-gray-800 text-blue-400' : 'hover:bg-gray-800'}`}>
                <BsWallet2 className="mr-3" />
                Wallets
              </NavLink>
            </li>
            <li>
              <NavLink to="/transactions" className={({ isActive }) => 
                `flex items-center p-3 rounded-lg ${isActive ? 'bg-gray-800 text-blue-400' : 'hover:bg-gray-800'}`}>
                <RiExchangeLine className="mr-3" />
                Transactions
              </NavLink>
            </li>
            <li>
              <NavLink to="/exchange" className={({ isActive }) => 
                `flex items-center p-3 rounded-lg ${isActive ? 'bg-gray-800 text-blue-400' : 'hover:bg-gray-800'}`}>
                <FiDollarSign className="mr-3" />
                Exchange
              </NavLink>
            </li>
            <li>
              <NavLink to="/settings" className={({ isActive }) => 
                `flex items-center p-3 rounded-lg ${isActive ? 'bg-gray-800 text-blue-400' : 'hover:bg-gray-800'}`}>
                <FiSettings className="mr-3" />
                Settings
              </NavLink>
            </li>
          </ul>
        </nav>
        
        <div className="mt-auto">
          <button 
            onClick={logout}
            className="flex items-center p-3 rounded-lg hover:bg-gray-800 w-full"
          >
            <FiLogOut className="mr-3" />
            Logout
          </button>
        </div>
      </div>
    </>
  )
}

export default Sidebar