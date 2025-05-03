import React, { createContext, useState, useEffect } from 'react'
import { fetchCryptoData } from '../api/cryptoApi'

export const CryptoContext = createContext()

export const CryptoProvider = ({ children }) => {
  // State declarations
  const [cryptoData, setCryptoData] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedCurrency, setSelectedCurrency] = useState('USD')
  const [timeRange, setTimeRange] = useState('7d')
  const [searchQuery, setSearchQuery] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  // Authentication functions (keep existing)
  const login = (email, password) => {
    if (email && password) {
      setIsAuthenticated(true)
      setUser({ email, name: "Alok" })
      return true
    }
    return false
  }

  const logout = () => {
    setIsAuthenticated(false)
    setUser(null)
  }

  // Data fetching (modified to include time range handling)
  useEffect(() => {
    if (isAuthenticated) {
      fetchDataByTimeRange(timeRange)
    }
  }, [isAuthenticated, timeRange])

  // Search functionality
  useEffect(() => {
    if (searchQuery) {
      const filtered = cryptoData.filter(coin => 
        coin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(searchQuery.toLowerCase())
      )
      setFilteredData(filtered)
    } else {
      setFilteredData(cryptoData)
    }
  }, [searchQuery, cryptoData])

  // Time range data fetching
  const fetchDataByTimeRange = async (range) => {
    setLoading(true)
    try {
      const data = await fetchCryptoData()
      
      // Apply mock modifications based on time range
      let modifiedData = data.map(coin => {
        const baseChange = coin.price_change_percentage_24h || 0
        let modifiedChange = baseChange
        
        if (range === '24h') modifiedChange = baseChange * 1.2
        else if (range === '30d') modifiedChange = baseChange * 0.8
        else if (range === '90d') modifiedChange = baseChange * 0.5
        
        return {
          ...coin,
          price_change_percentage_24h: modifiedChange
        }
      })
      
      setCryptoData(modifiedData)
      setFilteredData(modifiedData)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching crypto data:', error)
      setLoading(false)
    }
  }

  // Currency change handler
  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency)
    // In a real app, add API call here to fetch new prices
  }

  // Time range change handler
  const handleTimeRangeChange = (range) => {
    setTimeRange(range)
    // Data will be refetched by the useEffect
  }

  return (
    <CryptoContext.Provider value={{
      // Data states
      cryptoData: filteredData.length ? filteredData : cryptoData,
      loading,
      
      // Currency handling
      selectedCurrency,
      setSelectedCurrency: handleCurrencyChange,
      
      // Time range handling
      timeRange,
      setTimeRange: handleTimeRangeChange,
      
      // Search handling
      searchQuery,
      setSearchQuery,
      
      // Authentication
      isAuthenticated,
      user,
      login,
      logout
    }}>
      {children}
    </CryptoContext.Provider>
  )
}