import React, { createContext, useState, useEffect } from 'react'
import { fetchCryptoData } from '../api/cryptoApi'

export const CryptoContext = createContext()

export const CryptoProvider = ({ children }) => {
  const [cryptoData, setCryptoData] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedCurrency, setSelectedCurrency] = useState('USD')
  const [timeRange, setTimeRange] = useState('7d')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  const login = (email, password) => {
    // In a real app, you would verify credentials with a backend
    if (email && password) {
      setIsAuthenticated(true)
      setUser({ email, name: "John Doe" })
      return true
    }
    return false
  }

  const logout = () => {
    setIsAuthenticated(false)
    setUser(null)
  }

  useEffect(() => {
    if (isAuthenticated) {
      const loadData = async () => {
        try {
          const data = await fetchCryptoData()
          setCryptoData(data)
          setLoading(false)
        } catch (error) {
          console.error('Error fetching crypto data:', error)
          setLoading(false)
        }
      }
      loadData()
    }
  }, [isAuthenticated])

  return (
    <CryptoContext.Provider value={{
      cryptoData,
      loading,
      selectedCurrency,
      setSelectedCurrency,
      timeRange,
      setTimeRange,
      isAuthenticated,
      user,
      login,
      logout
    }}>
      {children}
    </CryptoContext.Provider>
  )
}