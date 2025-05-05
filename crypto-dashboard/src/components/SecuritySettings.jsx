import React, { useState } from 'react'

const SecuritySettings = () => {
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle password change
  }

  return (
    <div>
      <h3 className="font-semibold mb-4">Change Password</h3>
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-400 text-sm mb-1">Current Password</label>
            <input
              type="password"
              className="w-full bg-gray-700 rounded-lg px-4 py-2"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-gray-400 text-sm mb-1">New Password</label>
            <input
              type="password"
              className="w-full bg-gray-700 rounded-lg px-4 py-2"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-gray-400 text-sm mb-1">Confirm New Password</label>
          <input
            type="password"
            className="w-full bg-gray-700 rounded-lg px-4 py-2"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg"
        >
          Update Password
        </button>
      </form>

      <h3 className="font-semibold mb-4">Two-Factor Authentication</h3>
      <div className="flex items-center justify-between bg-gray-700 p-4 rounded-lg">
        <div>
          <p className="font-medium">2FA Status</p>
          <p className="text-gray-400 text-sm">
            {twoFactorEnabled ? 'Enabled' : 'Disabled'} - Adds an extra layer of security
          </p>
        </div>
        <button
          onClick={() => setTwoFactorEnabled(!twoFactorEnabled)}
          className={`px-4 py-2 rounded-lg ${
            twoFactorEnabled ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-600 hover:bg-gray-500'
          }`}
        >
          {twoFactorEnabled ? 'Disable' : 'Enable'}
        </button>
      </div>
    </div>
  )
}

export default SecuritySettings