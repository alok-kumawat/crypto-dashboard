import React from 'react'

const Market = () => {
  return (
    <div className="ml-64 p-6">
      <h1 className="text-2xl font-bold mb-6">Market Overview</h1>
      <div className="bg-gray-800 rounded-xl p-6">
        <p>Market data and trends will be displayed here</p>
        {/* You can reuse the CryptoTable component here */}
      </div>
    </div>
  )
}

export default Market