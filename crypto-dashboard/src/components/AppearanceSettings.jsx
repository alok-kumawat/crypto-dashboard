import React, { useState } from 'react'

const AppearanceSettings = () => {
  const [theme, setTheme] = useState('dark')
  const [fontSize, setFontSize] = useState('medium')

  return (
    <div>
      <h3 className="font-semibold mb-4">Appearance</h3>
      
      <div className="space-y-6">
        <div>
          <p className="font-medium mb-3">Theme</p>
          <div className="grid grid-cols-3 gap-3">
            <button
              onClick={() => setTheme('light')}
              className={`p-3 rounded-lg border ${theme === 'light' ? 'border-blue-400 bg-blue-900/30' : 'border-gray-600 bg-gray-700'}`}
            >
              <div className="h-16 bg-white rounded"></div>
              <p className="mt-2">Light</p>
            </button>
            <button
              onClick={() => setTheme('dark')}
              className={`p-3 rounded-lg border ${theme === 'dark' ? 'border-blue-400 bg-blue-900/30' : 'border-gray-600 bg-gray-700'}`}
            >
              <div className="h-16 bg-gray-800 rounded"></div>
              <p className="mt-2">Dark</p>
            </button>
            <button
              onClick={() => setTheme('system')}
              className={`p-3 rounded-lg border ${theme === 'system' ? 'border-blue-400 bg-blue-900/30' : 'border-gray-600 bg-gray-700'}`}
            >
              <div className="h-16 bg-gradient-to-r from-gray-800 to-white rounded"></div>
              <p className="mt-2">System</p>
            </button>
          </div>
        </div>

        <div>
          <p className="font-medium mb-3">Font Size</p>
          <div className="flex space-x-3">
            <button
              onClick={() => setFontSize('small')}
              className={`px-4 py-2 rounded-lg ${fontSize === 'small' ? 'bg-blue-600' : 'bg-gray-700'}`}
            >
              Small
            </button>
            <button
              onClick={() => setFontSize('medium')}
              className={`px-4 py-2 rounded-lg ${fontSize === 'medium' ? 'bg-blue-600' : 'bg-gray-700'}`}
            >
              Medium
            </button>
            <button
              onClick={() => setFontSize('large')}
              className={`px-4 py-2 rounded-lg ${fontSize === 'large' ? 'bg-blue-600' : 'bg-gray-700'}`}
            >
              Large
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppearanceSettings