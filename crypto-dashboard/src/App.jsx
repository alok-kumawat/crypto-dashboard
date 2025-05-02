import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes'
import { CryptoProvider } from './context/CryptoContext'

function App() {
  return (
    <CryptoProvider>
      <Router>
        <Routes />
      </Router>
    </CryptoProvider>
  )
}

export default App