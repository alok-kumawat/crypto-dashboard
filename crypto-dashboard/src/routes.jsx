import { Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Market from './pages/Market'
import Portfolio from './pages/Portfolio'
import Wallets from './pages/Wallets'
import Transactions from './pages/Transactions'
import Exchange from './pages/Exchange'
import Settings from './pages/Settings'
import { useContext } from 'react'
import { CryptoContext } from './context/CryptoContext'

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useContext(CryptoContext)
  return isAuthenticated ? children : <Navigate to="/login" />
}

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      
      {/* All protected routes */}
      <Route 
        path="/" 
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        } 
      />
      <Route 
        path="/market" 
        element={
          <PrivateRoute>
            <Market />
          </PrivateRoute>
        } 
      />
      <Route 
        path="/portfolio" 
        element={
          <PrivateRoute>
            <Portfolio />
          </PrivateRoute>
        } 
      />
      <Route 
        path="/wallets" 
        element={
          <PrivateRoute>
            <Wallets />
          </PrivateRoute>
        } 
      />
      <Route 
        path="/transactions" 
        element={
          <PrivateRoute>
            <Transactions />
          </PrivateRoute>
        } 
      />
      <Route 
        path="/exchange" 
        element={
          <PrivateRoute>
            <Exchange />
          </PrivateRoute>
        } 
      />
      <Route 
        path="/settings" 
        element={
          <PrivateRoute>
            <Settings />
          </PrivateRoute>
        } 
      />
    </Routes>
  )
}

export default AppRoutes