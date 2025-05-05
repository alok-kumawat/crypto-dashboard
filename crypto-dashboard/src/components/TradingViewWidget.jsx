import React, { useEffect, useRef } from 'react'

const TradingViewWidget = ({ symbol = 'BTCUSD' }) => {
  const containerRef = useRef(null)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js'
    script.async = true
    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol: `BITSTAMP:${symbol}`,
      interval: 'D',
      timezone: 'Etc/UTC',
      theme: 'dark',
      style: '1',
      locale: 'en',
      enable_publishing: false,
      hide_top_toolbar: true,
      hide_side_toolbar: false,
      allow_symbol_change: false,
      save_image: false,
      details: false,
      studies: ['RSI@tv-basicstudies'],
      container_id: 'tradingview-widget-container'
    })

    containerRef.current.appendChild(script)

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = ''
      }
    }
  }, [symbol])

  return (
    <div className="tradingview-widget-container" ref={containerRef} style={{ height: '100%', width: '100%' }}>
      <div className="tradingview-widget-container__widget" style={{ height: 'calc(100% - 32px)', width: '100%' }}></div>
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noopener noreferrer" target="_blank">
          <span className="text-gray-400">Chart by TradingView</span>
        </a>
      </div>
    </div>
  )
}

export default TradingViewWidget