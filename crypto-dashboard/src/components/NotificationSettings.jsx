import React, { useState } from 'react'

const NotificationSettings = () => {
  const [settings, setSettings] = useState({
    email: true,
    priceAlerts: true,
    depositWithdraw: true,
    newsUpdates: false,
    push: false
  })

  const toggleSetting = (key) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <div>
      <h3 className="font-semibold mb-4">Notification Preferences</h3>
      
      <div className="space-y-4">
        <div className="flex justify-between items-center p-4 bg-gray-700 rounded-lg">
          <div>
            <p className="font-medium">Email Notifications</p>
            <p className="text-gray-400 text-sm">Receive notifications via email</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input 
              type="checkbox" 
              checked={settings.email}
              onChange={() => toggleSetting('email')}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-600 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>

        <div className="flex justify-between items-center p-4 bg-gray-700 rounded-lg">
          <div>
            <p className="font-medium">Price Alerts</p>
            <p className="text-gray-400 text-sm">Get notified when prices reach your targets</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input 
              type="checkbox" 
              checked={settings.priceAlerts}
              onChange={() => toggleSetting('priceAlerts')}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-600 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>

        <div className="flex justify-between items-center p-4 bg-gray-700 rounded-lg">
          <div>
            <p className="font-medium">Deposit/Withdraw Notifications</p>
            <p className="text-gray-400 text-sm">Get alerts for account activity</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input 
              type="checkbox" 
              checked={settings.depositWithdraw}
              onChange={() => toggleSetting('depositWithdraw')}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-600 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>

        <div className="flex justify-between items-center p-4 bg-gray-700 rounded-lg">
          <div>
            <p className="font-medium">Push Notifications</p>
            <p className="text-gray-400 text-sm">Receive notifications on your device</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input 
              type="checkbox" 
              checked={settings.push}
              onChange={() => toggleSetting('push')}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-600 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>
      </div>
    </div>
  )
}

export default NotificationSettings