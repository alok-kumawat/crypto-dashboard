import React, { useContext } from 'react'
import { Line } from 'react-chartjs-2'
import { CryptoContext } from '../context/CryptoContext'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

const Chart = () => {
  const { cryptoData, timeRange } = useContext(CryptoContext)

  // In a real app, we would fetch historical data based on the timeRange
  // This is simplified mock data
  const labels = Array.from({ length: 7 }, (_, i) => {
    const date = new Date()
    date.setDate(date.getDate() - (6 - i))
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
  })

  const data = {
    labels,
    datasets: [
      {
        label: 'Portfolio Value',
        data: [12000, 12500, 12300, 12800, 13000, 13200, 13500],
        borderColor: '#3b82f6',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        borderWidth: 2,
        tension: 0.4,
        fill: true,
        pointRadius: 0
      }
    ]
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        mode: 'index',
        intersect: false
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        },
        ticks: {
          color: '#6b7280'
        }
      },
      y: {
        grid: {
          color: 'rgba(55, 65, 81, 0.5)',
          borderDash: [5]
        },
        ticks: {
          color: '#6b7280'
        }
      }
    },
    maintainAspectRatio: false
  }

  return (
    <div className="bg-gray-800 rounded-xl p-5 h-full">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-semibold">Portfolio Value</h3>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-400">$13,500</span>
          <span className="text-sm bg-green-900 text-green-400 px-2 py-1 rounded">+12.5%</span>
        </div>
      </div>
      <div className="h-64">
        <Line data={data} options={options} />
      </div>
    </div>
  )
}

export default Chart