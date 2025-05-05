import React, { useState } from 'react'
import SecuritySettings from '../components/SecuritySettings'
import NotificationSettings from '../components/NotificationSettings'
import AppearanceSettings from '../components/AppearanceSettings'
import APIKeys from '../components/APIKeys'

const Settings = () => {
  const [activeTab, setActiveTab] = useState('security')

  return (
    <div className="ml-64 p-6">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>
      
      <div className="flex mb-6 border-b border-gray-700">
        <button
          className={`px-4 py-2 ${activeTab === 'security' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400'}`}
          onClick={() => setActiveTab('security')}
        >
          Security
        </button>
        <button
          className={`px-4 py-2 ${activeTab === 'notifications' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400'}`}
          onClick={() => setActiveTab('notifications')}
        >
          Notifications
        </button>
        <button
          className={`px-4 py-2 ${activeTab === 'appearance' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400'}`}
          onClick={() => setActiveTab('appearance')}
        >
          Appearance
        </button>
        <button
          className={`px-4 py-2 ${activeTab === 'api' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400'}`}
          onClick={() => setActiveTab('api')}
        >
          API Keys
        </button>
      </div>

      <div className="bg-gray-800 rounded-xl p-6">
        {activeTab === 'security' && <SecuritySettings />}
        {activeTab === 'notifications' && <NotificationSettings />}
        {activeTab === 'appearance' && <AppearanceSettings />}
        {activeTab === 'api' && <APIKeys />}
      </div>
    </div>
  )
}

export default Settings