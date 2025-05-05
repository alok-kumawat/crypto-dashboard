import React, { useState } from 'react'
import { FiCopy, FiTrash2, FiEye, FiEyeOff } from 'react-icons/fi'

const APIKeys = () => {
  const [keys, setKeys] = useState([
    { id: '1', name: 'Trading Bot', key: 'sk_live_1234567890abcdef', permissions: ['read', 'trade'], created: '2023-05-15' },
    { id: '2', name: 'Mobile App', key: 'sk_live_ghijklmnopqrstuv', permissions: ['read'], created: '2023-06-20' }
  ])
  const [showKey, setShowKey] = useState(null)
  const [newKeyName, setNewKeyName] = useState('')

  const generateNewKey = () => {
    if (!newKeyName.trim()) return
    
    const newKey = {
      id: Date.now().toString(),
      name: newKeyName,
      key: 'sk_live_' + Math.random().toString(36).substring(2, 18),
      permissions: ['read'],
      created: new Date().toISOString().split('T')[0]
    }
    
    setKeys([...keys, newKey])
    setNewKeyName('')
  }

  const deleteKey = (id) => {
    setKeys(keys.filter(key => key.id !== id))
  }

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
    // Add toast notification here if desired
  }

  return (
    <div>
      <h3 className="font-semibold mb-4">API Keys</h3>
      
      <div className="mb-6">
        <div className="flex items-center space-x-3 mb-3">
          <input
            type="text"
            placeholder="New key name"
            className="flex-1 bg-gray-700 rounded-lg px-4 py-2"
            value={newKeyName}
            onChange={(e) => setNewKeyName(e.target.value)}
          />
          <button
            onClick={generateNewKey}
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg"
          >
            Generate
          </button>
        </div>
        <p className="text-gray-400 text-sm">
          API keys allow external applications to access your account. Keep them secure.
        </p>
      </div>

      <div className="space-y-4">
        {keys.map(apiKey => (
          <div key={apiKey.id} className="bg-gray-700 rounded-lg p-4">
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-medium">{apiKey.name}</h4>
              <button
                onClick={() => deleteKey(apiKey.id)}
                className="text-red-400 hover:text-red-300"
              >
                <FiTrash2 />
              </button>
            </div>
            
            <div className="flex items-center mb-2">
              <p className="font-mono text-sm mr-2">
                {showKey === apiKey.id ? apiKey.key : '••••••••••••••••••••'}
              </p>
              <button
                onClick={() => setShowKey(showKey === apiKey.id ? null : apiKey.id)}
                className="text-gray-400 hover:text-white mr-2"
              >
                {showKey === apiKey.id ? <FiEyeOff /> : <FiEye />}
              </button>
              <button
                onClick={() => copyToClipboard(apiKey.key)}
                className="text-gray-400 hover:text-white"
              >
                <FiCopy />
              </button>
            </div>
            
            <div className="flex flex-wrap gap-2 text-xs">
              {apiKey.permissions.map(perm => (
                <span key={perm} className="bg-gray-600 px-2 py-1 rounded">
                  {perm}
                </span>
              ))}
            </div>
            
            <p className="text-gray-400 text-xs mt-2">
              Created: {apiKey.created}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default APIKeys