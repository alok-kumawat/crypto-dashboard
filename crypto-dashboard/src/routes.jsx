import { Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
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
      <Route 
        path="/" 
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        } 
      />
    </Routes>
  )
}

export default AppRoutes